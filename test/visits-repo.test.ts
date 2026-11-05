import { strict as assert } from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { newDb } from 'pg-mem';
import { insertVisit, WEBSITE_SOURCE } from '@/lib/visits-repo';
import type { CleanVisit } from '@/lib/visit-validation';

// نفس تعريف جدول visits اللي في db/migrations/001_init.sql بتاع ريبو الـagent.
// 🔴 لو السكيما هناك اتغيّرت، الاختبار ده المفروض يكون أول حاجة تكسر.
const VISITS_SCHEMA = `
  CREATE TABLE visits (
    id              SERIAL PRIMARY KEY,
    conversation_id INT,
    customer_name   TEXT        NOT NULL,
    phone           TEXT        NOT NULL,
    visit_date      DATE        NOT NULL,
    slot            TEXT        NOT NULL CHECK (slot IN ('09:00', '11:00', '14:00', '16:00')),
    persona         TEXT        CHECK (persona IN ('unknown', 'family', 'investor')),
    status          TEXT        NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending', 'confirmed', 'cancelled', 'done')),
    source          TEXT        NOT NULL DEFAULT 'whatsapp_agent',
    notes           TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
  );
`;

type PgPool = { query: (text: string, params?: unknown[]) => Promise<{ rows: Array<Record<string, unknown>> }> };

function freshDb(): PgPool {
  const db = newDb();
  db.public.none(VISITS_SCHEMA);
  const { Pool } = db.adapters.createPg();
  return new Pool() as PgPool;
}

const VISIT: CleanVisit = {
  customerName: 'محمد الطحاوي',
  phone: '+201070015929',
  visitDate: '2026-11-20',
  slot: '14:00',
  notes: 'Email: buyer@example.com',
};

describe('insertVisit', () => {
  let pool: PgPool;

  beforeEach(() => {
    pool = freshDb();
  });

  it('بيكتب الحجز ويرجّع id', async () => {
    const saved = await insertVisit(pool, VISIT);
    assert.ok(saved.id, 'expected an id back');

    const { rows } = await pool.query('SELECT * FROM visits');
    assert.equal(rows.length, 1);
  });

  it("بيحط source='website' — ده اللي بيفرّقه عن حجوزات الواتساب", async () => {
    await insertVisit(pool, VISIT);
    const { rows } = await pool.query('SELECT source FROM visits');
    assert.equal(rows[0].source, WEBSITE_SOURCE);
    assert.equal(rows[0].source, 'website');
  });

  it('بيكتب كل الحقول زي ما هي', async () => {
    await insertVisit(pool, VISIT);
    const { rows } = await pool.query(
      'SELECT customer_name, phone, slot, notes, status, persona FROM visits',
    );
    assert.equal(rows[0].customer_name, 'محمد الطحاوي');
    assert.equal(rows[0].phone, '+201070015929');
    assert.equal(rows[0].slot, '14:00');
    assert.equal(rows[0].notes, 'Email: buyer@example.com');
    assert.equal(rows[0].status, 'pending');
    assert.equal(rows[0].persona, 'unknown');
  });

  it('بيقبل notes فاضية', async () => {
    await insertVisit(pool, { ...VISIT, notes: null });
    const { rows } = await pool.query('SELECT notes FROM visits');
    assert.equal(rows[0].notes, null);
  });

  it('القاعدة نفسها بترفض ميعاد برّه الأربعة — حتى لو التحقق اتخطّى', async () => {
    await assert.rejects(() => insertVisit(pool, { ...VISIT, slot: '13:00' }));
  });

  it('بيكتب أكتر من حجز في نفس اليوم ونفس الميعاد', async () => {
    // مفيش قيد تفرّد على (تاريخ + ميعاد) عن قصد — مش معروف كام زيارة
    // تقدر تتحمّل الشقة النموذج في الميعاد الواحد.
    await insertVisit(pool, VISIT);
    await insertVisit(pool, { ...VISIT, customerName: 'أحمد' });
    const { rows } = await pool.query('SELECT id FROM visits');
    assert.equal(rows.length, 2);
  });
});
