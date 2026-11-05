import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';
import { normalizePhone, todayInCairo, validateVisit } from '@/lib/visit-validation';

// وقت ثابت عشان الاختبارات ما تتكسرش بكرة
const NOW = new Date('2026-11-06T09:00:00Z');
const TODAY = todayInCairo(NOW); // 2026-11-06 بتوقيت القاهرة

function base(overrides: Record<string, unknown> = {}) {
  return {
    customerName: 'محمد الطحاوي',
    phone: '01070015929',
    visitDate: TODAY,
    slot: '11:00',
    ...overrides,
  };
}

describe('validateVisit', () => {
  it('بيقبل حجز صحيح وبينضّف البيانات', () => {
    const result = validateVisit(base({ customerName: '  محمد   الطحاوي  ' }), NOW);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.value.customerName, 'محمد الطحاوي'); // المسافات اتظبطت
    assert.equal(result.value.phone, '01070015929');
    assert.equal(result.value.slot, '11:00');
    assert.equal(result.value.notes, null);
  });

  it('بيرفض الاسم والتليفون الفاضيين', () => {
    const result = validateVisit({ visitDate: TODAY, slot: '09:00' }, NOW);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.errors.customerName, 'required');
    assert.equal(result.errors.phone, 'required');
  });

  it('بيرفض ميعاد مش في المواعيد الأربعة', () => {
    const result = validateVisit(base({ slot: '13:00' }), NOW);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.errors.slot, 'badSlot');
  });

  it('بيقبل المواعيد الأربعة كلها', () => {
    for (const slot of ['09:00', '11:00', '14:00', '16:00']) {
      assert.equal(validateVisit(base({ slot }), NOW).ok, true, `slot ${slot}`);
    }
  });

  it('بيرفض تاريخ عدّى، وبيقبل تاريخ النهارده', () => {
    const past = validateVisit(base({ visitDate: '2026-11-05' }), NOW);
    assert.equal(past.ok, false);
    if (!past.ok) assert.equal(past.errors.visitDate, 'pastDate');

    assert.equal(validateVisit(base({ visitDate: TODAY }), NOW).ok, true);
  });

  it('بيرفض تاريخ مش موجود زي ٣١ فبراير', () => {
    const result = validateVisit(base({ visitDate: '2027-02-31' }), NOW);
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.errors.visitDate, 'badDate');
  });

  it('بيرفض ميعاد أبعد من ٦ شهور', () => {
    const result = validateVisit(base({ visitDate: '2028-01-01' }), NOW);
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.errors.visitDate, 'tooFar');
  });

  it('بيرفض تليفون قصير أو طويل', () => {
    for (const phone of ['123', '1234567890123456789']) {
      const result = validateVisit(base({ phone }), NOW);
      assert.equal(result.ok, false, phone);
      if (!result.ok) assert.equal(result.errors.phone, 'badPhone');
    }
  });

  it('بيقبل التليفون بأي شكل كتابة ويوحّده', () => {
    const result = validateVisit(base({ phone: '+20 107 001 5929' }), NOW);
    assert.equal(result.ok, true);
    if (result.ok) assert.equal(result.value.phone, '+201070015929');
  });

  it('الإيميل اختياري، وبيترفض لو شكله غلط', () => {
    assert.equal(validateVisit(base({ email: '' }), NOW).ok, true);

    const bad = validateVisit(base({ email: 'not-an-email' }), NOW);
    assert.equal(bad.ok, false);
    if (!bad.ok) assert.equal(bad.errors.email, 'badEmail');
  });

  it('الإيميل والرسالة بيتجمّعوا في notes — الجدول مفيهوش عمود email', () => {
    const result = validateVisit(
      base({ email: 'buyer@example.com', message: 'عايز غرفتين' }),
      NOW,
    );
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.value.notes, 'Email: buyer@example.com\nMessage: عايز غرفتين');
  });

  it('بيرفض النصوص الطويلة أوي', () => {
    const result = validateVisit(base({ customerName: 'ا'.repeat(200) }), NOW);
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.errors.customerName, 'tooLong');
  });

  it('بيتجاهل الحقول اللي مش نصوص بدل ما يقع', () => {
    const result = validateVisit({ customerName: 42, phone: null, visitDate: [], slot: {} }, NOW);
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.errors.customerName, 'required');
  });
});

describe('todayInCairo', () => {
  it('بيستخدم توقيت القاهرة مش توقيت السيرفر', () => {
    // 2026-11-06 الساعة 22:30 UTC = 2026-11-07 الساعة 00:30 في القاهرة
    assert.equal(todayInCairo(new Date('2026-11-06T22:30:00Z')), '2026-11-07');
  });
});

describe('normalizePhone', () => {
  it('بيشيل المسافات والشرط ويسيب + لو موجودة', () => {
    assert.equal(normalizePhone(' 0107-001-5929 '), '01070015929');
    assert.equal(normalizePhone('+20 (107) 001 5929'), '+201070015929');
  });
});
