import type { CleanVisit } from './visit-validation';

/**
 * أي حاجة بتعرف تعمل query — الـPool الحقيقي أو قاعدة وهمية في الاختبارات.
 * التجريد ده هو اللي بيخلّي الاختبارات تجري من غير Postgres شغّال.
 */
export type Queryable = {
  query: (text: string, params?: unknown[]) => Promise<{ rows: Array<Record<string, unknown>> }>;
};

/** مصدر الحجز — بيفرّق حجوزات الموقع عن حجوزات الـagent في نفس الجدول */
export const WEBSITE_SOURCE = 'website';

// 🔴 استعلام بمعاملات ($1...) مش نص متجمّع — ولا قيمة من العميل بتتحط في SQL.
const INSERT_VISIT = `
  INSERT INTO visits (customer_name, phone, visit_date, slot, persona, status, source, notes)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING id, created_at
`;

export async function insertVisit(
  db: Queryable,
  visit: CleanVisit,
): Promise<{ id: string; createdAt: unknown }> {
  const result = await db.query(INSERT_VISIT, [
    visit.customerName,
    visit.phone,
    visit.visitDate,
    visit.slot,
    // مش عارفين أسرة ولا مستثمر من الفورم — الموظف أو الـagent بيحدّدها بعدين
    'unknown',
    'pending',
    WEBSITE_SOURCE,
    visit.notes,
  ]);

  const row = result.rows[0];
  if (!row) throw new Error('insert returned no row');

  return { id: String(row.id), createdAt: row.created_at };
}
