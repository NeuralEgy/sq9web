#!/usr/bin/env bash
# ============================================================
# تركيب موقع Square9 على الـVPS — نسخة المراجعة.
#
# يتشغّل كـroot على 187.124.35.60:
#   bash /opt/square9-web/deploy/install.sh
# أو أول مرة:
#   git clone https://github.com/NeuralEgy/sq9web.git /opt/square9-web \
#     && bash /opt/square9-web/deploy/install.sh
#
# 🔴 السكربت ده **ما بيلمسش** /opt/square9-agent ولا الـportal ولا أي
#    بلوك nginx موجود. بيضيف بس: مستخدم قاعدة، مجلد، عملية PM2 على
#    منفذ فاضي، وبلوك nginx جديد في ملف لوحده.
#
# 🔴 وما بينشرش على square9.eg. الدومين ده بتاع العميل وشغّال.
#
# السكربت idempotent: تشغيله تاني بيحدّث الكود ويبني ويعيد التشغيل،
# وما بيعملش المستخدم ولا الباسورد من تاني.
# ============================================================
set -euo pipefail

REPO="https://github.com/NeuralEgy/sq9web.git"
DIR="/opt/square9-web"
PORT="3032"
HOST="sq9web.hurghada.cloud"
DB="square9_agent"
DB_USER="sq9_site"
PW_FILE="/root/sq9-db.pw"
NODE_BIN="/opt/node24/bin"
PM2="/root/.nvm/versions/node/v20.20.2/bin/pm2"

export PATH="$NODE_BIN:$PATH"

say() { printf '\n== %s\n' "$1"; }

# ---------- 1 · الكود ----------
say "code"
if [ -d "$DIR/.git" ]; then
  git -C "$DIR" fetch --quiet origin
  git -C "$DIR" reset --hard --quiet origin/main
  echo "updated to $(git -C "$DIR" rev-parse --short HEAD)"
else
  git clone --quiet "$REPO" "$DIR"
  echo "cloned at $(git -C "$DIR" rev-parse --short HEAD)"
fi
mkdir -p "$DIR/logs"

# ---------- 2 · مستخدم القاعدة ----------
# أضعف مستخدم في القاعدة: INSERT على visits وبس. لو الموقع اتخرق،
# أقصى اللي يحصل إن حد يملا جدول الحجوزات — وده بيتشال.
say "database role"
if sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='$DB_USER';" | grep -q 1; then
  echo "$DB_USER already exists - password untouched"
  DB_PW="$(grep -oP "^${DB_USER}=\K.*" "$PW_FILE" | tail -1)"
  if [ -z "$DB_PW" ]; then
    echo "ERROR: role exists but no password in $PW_FILE - fix by hand" >&2
    exit 1
  fi
else
  DB_PW="$(head -c 32 /dev/urandom | base64 | tr -d '/+=' | head -c 24)"
  sudo -u postgres psql -v ON_ERROR_STOP=1 -qc "CREATE ROLE $DB_USER LOGIN PASSWORD '$DB_PW';"
  printf '%s=%s\n' "$DB_USER" "$DB_PW" >> "$PW_FILE"
  chmod 600 "$PW_FILE"
  echo "created $DB_USER - password appended to $PW_FILE"
fi

say "grants"
sudo -u postgres psql -v ON_ERROR_STOP=1 -q -d "$DB" -f "$DIR/db/role-site.sql"
sudo -u postgres psql -tA -d "$DB" -c \
  "SELECT privilege_type FROM information_schema.table_privileges
    WHERE table_name='visits' AND grantee='$DB_USER' ORDER BY 1;" \
  | tr '\n' ' '
echo "(table-level on visits)"

# ---------- 3 · الإعدادات ----------
# 🔴 NEXT_PUBLIC_SITE_URL لازم يكون موجود **وقت البيلد** مش وقت التشغيل بس،
#    لأن Next بيحقنه في الصفحات. وهو كمان اللي بيخلّي robots.txt يقفل
#    الزواحف: أي دومين غير square9.eg بياخد Disallow: / تلقائيًا.
say "env"
umask 077
cat > "$DIR/.env.local" <<ENVEOF
DATABASE_URL=postgresql://$DB_USER:$DB_PW@127.0.0.1:5432/$DB
NEXT_PUBLIC_SITE_URL=https://$HOST
ENVEOF
echo "wrote $DIR/.env.local (0600)"

# ---------- 4 · البناء ----------
say "build"
cd "$DIR"
npm ci --no-audit --no-fund
npm run build

# ---------- 5 · التشغيل ----------
say "pm2"
"$PM2" delete square9-web >/dev/null 2>&1 || true
"$PM2" start "$DIR/ecosystem.config.cjs"
"$PM2" save
"$PM2" list | grep -E "square9-web|name" || true

# ---------- 6 · فحص محلي قبل nginx ----------
say "local check"
sleep 2
code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT/")
echo "http://127.0.0.1:$PORT/ -> $code"
[ "$code" = "200" ] || { echo "ERROR: app did not answer 200" >&2; exit 1; }

# ---------- 7 · nginx ----------
# 🔴 ما بنكتبش فوق الملف لو موجود. certbot بيعدّل الملف ده نفسه —
#    بيزوّد فيه listen 443 وسطور الشهادة وتحويل 80 على 443. نسخة
#    الريبو فيها بورت 80 بس، فـcp فوقه كان هيمسح الـTLS ويرجّع
#    الدومين لبلوك الرفض الافتراضي. الـHTTPS كان هيقع والسكربت
#    هيقول "done" وهو مبسوط.
#
#    لو عايز تطبّق تغيير على بلوك nginx بعد certbot، عدّل الملف
#    اللي على السيرفر باليد، أو امسحه وشغّل السكربت ده وبعديه certbot.
say "nginx"
if [ -f /etc/nginx/sites-available/sq9web ]; then
  echo "/etc/nginx/sites-available/sq9web already exists - left untouched"
  if grep -q "managed by Certbot" /etc/nginx/sites-available/sq9web; then
    echo "  (it carries certbot's TLS lines - overwriting it would break HTTPS)"
  fi
else
  cp "$DIR/deploy/nginx-sq9web.conf" /etc/nginx/sites-available/sq9web
  echo "installed /etc/nginx/sites-available/sq9web"
fi
ln -sfn /etc/nginx/sites-available/sq9web /etc/nginx/sites-enabled/sq9web
nginx -t
systemctl reload nginx
echo "nginx reloaded"

cat <<DONE

== done
   App:   http://127.0.0.1:$PORT  (PM2: square9-web)
   Host:  http://$HOST

   TLS is not set up yet. Run this once:
     certbot --nginx -d $HOST

   The review copy serves robots.txt with "Disallow: /" on purpose.
DONE
