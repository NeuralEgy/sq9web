#!/usr/bin/env bash
# ============================================================
# نشر تحديث للموقع — الاستخدام العادي بعد أول تركيب.
#
#   bash /opt/square9-web/deploy/update.sh
#
# بيعمل: كود جديد، بيلد، إعادة تشغيل، فحص. وبس.
#
# 🔴 **ما بيلمسش nginx ولا الشهادة ولا قاعدة البيانات ولا .env.local.**
#    دي شغلانة install.sh، واللي يتشغّل مرة واحدة. استخدم السكربت ده
#    لكل نشر بعد كده.
#
# لو البيلد وقع، العملية القديمة بتفضل شغالة زي ما هي — السكربت
# بيقف قبل ما يوصل لإعادة التشغيل.
# ============================================================
set -euo pipefail

DIR="/opt/square9-web"
PORT="3032"
NODE_BIN="/opt/node24/bin"
PM2="/root/.nvm/versions/node/v20.20.2/bin/pm2"

export PATH="$NODE_BIN:$PATH"

say() { printf '\n== %s\n' "$1"; }

say "code"
before="$(git -C "$DIR" rev-parse --short HEAD)"
git -C "$DIR" fetch --quiet origin
git -C "$DIR" reset --hard --quiet origin/main
after="$(git -C "$DIR" rev-parse --short HEAD)"
if [ "$before" = "$after" ]; then
  echo "already at $after - rebuilding anyway"
else
  echo "$before -> $after"
  git -C "$DIR" log --oneline "$before..$after" | sed 's/^/   /'
fi

say "build"
cd "$DIR"
npm ci --no-audit --no-fund
npm run build

say "restart"
"$PM2" restart square9-web --update-env
"$PM2" save --force >/dev/null

say "check"
# الموقع بياخد لحظة يقوم، فبنحاول شوية مرات بدل ما نفشل من أول ثانية
code=000
for _ in 1 2 3 4 5 6 7 8 9 10; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT/" || echo 000)
  [ "$code" = "200" ] && break
  sleep 1
done
echo "http://127.0.0.1:$PORT/        -> $code"
[ "$code" = "200" ] || { echo "ERROR: app is not answering 200" >&2; "$PM2" logs square9-web --lines 25 --nostream; exit 1; }

# 🔴 الفحص ده بيعدّي على nginx والشهادة كمان، مش على التطبيق بس.
ext=$(curl -s -o /dev/null -w '%{http_code}' "https://sq9web.hurghada.cloud/" || echo 000)
echo "https://sq9web.hurghada.cloud/ -> $ext"
[ "$ext" = "200" ] || echo "WARNING: the public URL did not answer 200 - check nginx and the certificate" >&2

printf '\n== done at %s\n' "$after"
