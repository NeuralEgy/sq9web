-- ============================================================
-- مستخدم قاعدة البيانات بتاع الموقع العام.
--
-- 🔴 الموقع ده مكشوف على النت، فمستخدمه لازم يكون أضعف مستخدم في القاعدة:
--    INSERT على visits **وبس**. ولا SELECT على المحادثات، ولا كتابة على
--    الوحدات، ولا أي حاجة تانية. لو الموقع اتخرق، أقصى اللي يحصل إن حد
--    يملا جدول الحجوزات صفوف — وده بيتشال، على عكس تسريب محادثات العملاء.
--
--    ده السبب إننا ما استخدمناش sq9_portal: البورتال عنده SELECT على كل
--    حاجة وكتابة على units، وده أكتر بكتير من اللي الموقع محتاجه.
--
-- بيتشغّل على الـVPS بعد ما الجداول تكون موجودة:
--   sudo -u postgres psql -d square9_agent -f role-site.sql
--
-- ⚠️ الباسورد مش هنا. اعمل الدور بالباسورد بإيدك الأول:
--   sudo -u postgres psql -c "CREATE ROLE sq9_site LOGIN PASSWORD '...';"
--   وحطّ الباسورد في /root/sq9-db.pw زي الباقيين.
-- ============================================================

GRANT CONNECT ON DATABASE square9_agent TO sq9_site;
GRANT USAGE   ON SCHEMA public          TO sq9_site;

-- الصلاحية الأساسية: إضافة حجز زيارة
GRANT INSERT ON visits TO sq9_site;

-- INSERT محتاج يقرا من الـsequence عشان يولّد id
GRANT USAGE, SELECT ON SEQUENCE visits_id_seq TO sq9_site;

-- 🔴 بوستجرس بيطلب SELECT على أي عمود في RETURNING — حتى لو انت اللي كاتب الصف.
--    فبندّي SELECT على عمودين بس: id و created_at. ولا اسم ولا تليفون ولا
--    ملاحظات. يعني الموقع عمره ما يقدر يقرا حجز حد تاني.
GRANT SELECT (id, created_at) ON visits TO sq9_site;

-- ===== تأكيد =====
-- الصلاحيات على مستوى العمود بتبان هنا:
--   SELECT column_name, privilege_type FROM information_schema.column_privileges
--    WHERE table_name = 'visits' AND grantee = 'sq9_site' ORDER BY column_name;
--
-- ودي المفروض تفشل (وده المطلوب):
--   SELECT customer_name FROM visits LIMIT 1;   -- permission denied
--
-- وده المفروض يفشل (وده المطلوب):
--   psql "postgresql://sq9_site:...@127.0.0.1/square9_agent" -c "SELECT * FROM messages LIMIT 1;"
