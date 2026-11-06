import { VISIT_SLOT_VALUES } from '@/data/projects/aurora-palace';

// ============================================================
// التحقق من بيانات حجز الزيارة.
//
// الملف ده **مالوش علاقة بقاعدة البيانات ولا بـNext** — دوال خالصة،
// عشان يتختبر لوحده من غير ما نقوم سيرفر ولا قاعدة.
//
// بيرجّع **أكواد أخطاء** مش رسايل. الرسايل في القاموس، عشان نفس الخطأ
// يطلع بالعربي أو الإنجليزي حسب اللغة اللي العميل فاتح بيها.
// ============================================================

export type VisitErrorCode =
  | 'required'
  | 'tooLong'
  | 'badPhone'
  | 'badEmail'
  | 'badDate'
  | 'pastDate'
  | 'tooFar'
  | 'badSlot';

export type VisitFieldName = 'customerName' | 'phone' | 'email' | 'visitDate' | 'slot' | 'message';

/** اللي بيتحط في جدول visits بعد التنظيف */
export type CleanVisit = {
  customerName: string;
  phone: string;
  visitDate: string; // YYYY-MM-DD
  slot: string;
  /** الإيميل والرسالة بيتجمّعوا هنا — جدول visits مفيهوش عمود email */
  notes: string | null;
};

export type ValidationResult =
  | { ok: true; value: CleanVisit }
  | { ok: false; errors: Partial<Record<VisitFieldName, VisitErrorCode>> };

const MAX_NAME = 120;
const MAX_EMAIL = 160;
const MAX_MESSAGE = 1000;
/** أبعد ميعاد زيارة مسموح بيه — ٦ شهور */
const MAX_DAYS_AHEAD = 180;

/**
 * تاريخ النهارده بتوقيت القاهرة بصيغة YYYY-MM-DD.
 * مهم: السيرفر ممكن يكون UTC، والعميل بيحجز بتوقيت مصر — من غير ده
 * حجز النهارده بالليل ممكن يترفض على إنه «في الماضي».
 */
export function todayInCairo(now: Date = new Date()): string {
  // en-CA بيدي الصيغة YYYY-MM-DD جاهزة
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Africa/Cairo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

/** بيشيل كل حاجة مش رقم، ويسيب + في الأول لو موجودة */
export function normalizePhone(raw: string): string {
  const trimmed = raw.trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/\D/g, '');
  return hasPlus ? `+${digits}` : digits;
}

function countDigits(value: string): number {
  return value.replace(/\D/g, '').length;
}

/** فرق الأيام بين تاريخين بصيغة YYYY-MM-DD (UTC عشان ما نتأثرش بالتوقيت الصيفي) */
function daysBetween(fromIso: string, toIso: string): number {
  const from = Date.UTC(
    Number(fromIso.slice(0, 4)),
    Number(fromIso.slice(5, 7)) - 1,
    Number(fromIso.slice(8, 10)),
  );
  const to = Date.UTC(
    Number(toIso.slice(0, 4)),
    Number(toIso.slice(5, 7)) - 1,
    Number(toIso.slice(8, 10)),
  );
  return Math.round((to - from) / 86_400_000);
}

function isRealDate(iso: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  // بيمسك حاجات زي 2026-02-31 اللي JS بتلفّها لمارس
  return (
    date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d
  );
}

/** تحقق بسيط من الإيميل — مش RFC كامل، بس بيمسك الغلط الحقيقي */
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(value);
}

export function validateVisit(
  input: Record<string, unknown>,
  now: Date = new Date(),
): ValidationResult {
  const errors: Partial<Record<VisitFieldName, VisitErrorCode>> = {};

  const str = (key: string): string => (typeof input[key] === 'string' ? (input[key] as string) : '');

  // ===== الاسم (مطلوب) =====
  const customerName = str('customerName').trim().replace(/\s+/g, ' ');
  if (!customerName) errors.customerName = 'required';
  else if (customerName.length > MAX_NAME) errors.customerName = 'tooLong';

  // ===== التليفون (مطلوب) =====
  const phoneRaw = str('phone');
  const phone = normalizePhone(phoneRaw);
  if (!phoneRaw.trim()) {
    errors.phone = 'required';
  } else {
    const digits = countDigits(phone);
    // ٨ أرقام أقل حاجة (أرقام أرضية) و١٥ أكتر حاجة (معيار E.164)
    if (digits < 8 || digits > 15) errors.phone = 'badPhone';
  }

  // ===== الإيميل (اختياري) =====
  const email = str('email').trim();
  if (email) {
    if (email.length > MAX_EMAIL) errors.email = 'tooLong';
    else if (!looksLikeEmail(email)) errors.email = 'badEmail';
  }

  // ===== التاريخ (مطلوب) =====
  const visitDate = str('visitDate').trim();
  const today = todayInCairo(now);
  if (!visitDate) {
    errors.visitDate = 'required';
  } else if (!isRealDate(visitDate)) {
    errors.visitDate = 'badDate';
  } else {
    const delta = daysBetween(today, visitDate);
    if (delta < 0) errors.visitDate = 'pastDate';
    else if (delta > MAX_DAYS_AHEAD) errors.visitDate = 'tooFar';
  }

  // ===== الميعاد (مطلوب) — لازم يطابق قيد CHECK في جدول visits =====
  const slot = str('slot').trim();
  if (!slot) errors.slot = 'required';
  else if (!VISIT_SLOT_VALUES.includes(slot)) errors.slot = 'badSlot';

  // ===== الرسالة (اختيارية) =====
  const message = str('message').trim();
  if (message.length > MAX_MESSAGE) errors.message = 'tooLong';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  // الإيميل والرسالة بيروحوا في notes — الجدول مفيهوش عمود email.
  // المفاتيح إنجليزي عشان الموظف في البورتال يلاقي شكل ثابت.
  const noteParts: string[] = [];
  if (email) noteParts.push(`Email: ${email}`);
  if (message) noteParts.push(`Message: ${message}`);

  return {
    ok: true,
    value: {
      customerName,
      phone,
      visitDate,
      slot,
      notes: noteParts.length > 0 ? noteParts.join('\n') : null,
    },
  };
}
