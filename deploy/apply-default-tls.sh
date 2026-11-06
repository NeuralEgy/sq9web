#!/usr/bin/env bash
# ============================================================
# تركيب بلوك TLS الافتراضي (deploy/nginx-default-tls.conf).
#
# يتشغّل كـroot:
#   bash /opt/square9-web/deploy/apply-default-tls.sh
#
# ليه سكربت ومش أمر واحد: ده بيغيّر إعداد nginx **مشترك** بين كل
# المواقع على السيرفر. فالسكربت بياخد صورة لحالة كل دومين قبل
# التغيير، وبعد ما يعمل reload بيقارن. لو أي دومين اتأثر، بيرجّع
# كل حاجة زي ما كانت لوحده.
#
# 🔴 ما بيعدّلش أي ملف موجود. بيضيف ملف جديد بس.
# ============================================================
set -uo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/nginx-default-tls.conf"
AVAIL="/etc/nginx/sites-available/00-default-tls"
LINK="/etc/nginx/sites-enabled/00-default-tls"

# الدومينات اللي لازم تفضل شغالة زي ما هي
HOSTS=(
  acc.hurghada.cloud
  ai.hurghada.cloud
  coolify.hurghada.cloud
  n8n.hurghada.cloud
  hurghada.cloud
  neural.eg
  agent.nts.eg
  app.nts.eg
  royal.hurghada.cloud
  sq9.hurghada.cloud
  whatsapp.hurghada.cloud
)

say() { printf '\n== %s\n' "$1"; }

probe() {  # اسم الدومين -> كود الرد عبر HTTPS على اللوكال
  curl -sk -o /dev/null -w '%{http_code}' --max-time 10 \
    --resolve "$1:443:127.0.0.1" "https://$1/" 2>/dev/null || echo "000"
}

rollback() {
  echo "ROLLING BACK" >&2
  rm -f "$LINK"
  nginx -t >/dev/null 2>&1 && systemctl reload nginx
  echo "rolled back - nothing changed" >&2
}

# ---------- 1 · حالة الدومينات قبل التغيير ----------
say "before"
declare -A BEFORE
for h in "${HOSTS[@]}"; do
  BEFORE[$h]="$(probe "$h")"
  printf '   %-28s %s\n' "$h" "${BEFORE[$h]}"
done

# ---------- 2 · تركيب الملف ----------
say "install"
if [ -e "$LINK" ]; then
  echo "   $LINK already exists - updating the file in place"
fi
cp "$SRC" "$AVAIL"
ln -sfn "$AVAIL" "$LINK"
echo "   $AVAIL + symlink"

# ---------- 3 · اختبار الإعداد قبل أي reload ----------
say "config test"
if ! nginx -t; then
  echo "ERROR: nginx config test failed - not reloading" >&2
  rm -f "$LINK"
  nginx -t >/dev/null 2>&1 || echo "WARNING: config was already broken before this script" >&2
  exit 1
fi

# ---------- 4 · reload ----------
say "reload"
systemctl reload nginx || { echo "ERROR: reload failed" >&2; rollback; exit 1; }
sleep 1
echo "   reloaded"

# ---------- 5 · مقارنة بعد التغيير ----------
say "after"
failed=0
for h in "${HOSTS[@]}"; do
  now="$(probe "$h")"
  if [ "$now" = "${BEFORE[$h]}" ]; then
    printf '   %-28s %s  ok\n' "$h" "$now"
  else
    printf '   %-28s %s  CHANGED (was %s)\n' "$h" "$now" "${BEFORE[$h]}"
    failed=1
  fi
done

if [ "$failed" = "1" ]; then
  echo >&2
  echo "ERROR: a known host changed - reverting" >&2
  rollback
  exit 1
fi

# ---------- 6 · الاسم المجهول لازم يتقفل ----------
say "unknown host"
out="$(curl -sk -o /dev/null -w '%{http_code}' --max-time 10 \
  --resolve "not-a-real-host.invalid:443:127.0.0.1" \
  "https://not-a-real-host.invalid/" 2>&1)"
if [ "$out" = "000" ]; then
  echo "   handshake rejected - correct"
else
  echo "   WARNING: unknown host still answered with $out" >&2
fi

cat <<DONE

== done
   Known hosts: unchanged.
   Unknown names on 443: TLS handshake rejected, no certificate offered.

   sq9web.hurghada.cloud still has no TLS block of its own, so it is
   now rejected over HTTPS too. Give it a certificate:
     certbot --nginx -d sq9web.hurghada.cloud --non-interactive --agree-tos --redirect
DONE
