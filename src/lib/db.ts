import { Pool } from 'pg';

// ============================================================
// الاتصال بقاعدة square9_agent — **نفس قاعدة الـagent**.
// الموقع بيكتب حجوزات الزيارة في نفس جدول visits اللي الواتساب بيكتب فيه،
// فالموظف بيلاقي حجوزات الموقع والواتساب في مكان واحد.
//
// 🔴 الموقع ده عام ومكشوف للنت. المستخدم المفروض يكون أقل صلاحية ممكنة:
//    INSERT على visits وبس. شوف db/role-site.sql.
// ============================================================

declare global {
  // في وضع التطوير Next بيعيد تحميل الموديول، فمن غير الكاش ده
  // كل تعديل بيفتح Pool جديد لحد ما القاعدة تقول خلاص
  // eslint-disable-next-line no-var
  var __sq9Pool: Pool | undefined;
}

export class DatabaseNotConfiguredError extends Error {
  constructor() {
    super('DATABASE_URL is not set');
    this.name = 'DatabaseNotConfiguredError';
  }
}

export function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new DatabaseNotConfiguredError();

  if (!globalThis.__sq9Pool) {
    globalThis.__sq9Pool = new Pool({
      connectionString,
      // الموقع بيكتب صف صغير ساعة ورا ساعة — مش محتاج اتصالات كتير
      max: 4,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });

    // من غير المستمع ده، أي خطأ في اتصال خامل بيوقّع العملية كلها
    globalThis.__sq9Pool.on('error', (error) => {
      console.error('[db] idle client error:', error.message);
    });
  }

  return globalThis.__sq9Pool;
}
