import { NextResponse } from 'next/server';
import { DatabaseNotConfiguredError, getPool } from '@/lib/db';
import { checkRateLimit, clientIpFrom } from '@/lib/rate-limit';
import { insertVisit } from '@/lib/visits-repo';
import { validateVisit } from '@/lib/visit-validation';

// ============================================================
// POST /api/visits — حجز زيارة من الموقع.
// بيكتب في نفس جدول visits بتاع الـagent، بـ source='website'.
//
// 🔴 كل اللوجات هنا إنجليزي — ترمينال السيرفر بيقلب العربي.
// ============================================================

/** أقصى عدد حجوزات من نفس العنوان في الساعة */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

/** أكبر حجم جسم مقبول — فورم صغير، مش محتاج أكتر من كده */
const MAX_BODY_BYTES = 8 * 1024;

export async function POST(request: Request) {
  const ip = clientIpFrom(request.headers);

  // ===== ١ · حاجز المعدّل =====
  const rate = checkRateLimit(`visits:${ip}`, { limit: RATE_LIMIT, windowMs: RATE_WINDOW_MS });
  if (!rate.allowed) {
    console.warn(`[visits] rate limited ip=${ip}`);
    return NextResponse.json(
      { ok: false, error: 'rate_limited' },
      { status: 429, headers: { 'Retry-After': String(rate.retryAfterSeconds) } },
    );
  }

  // ===== ٢ · قراءة الجسم =====
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'too_large' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      throw new Error('not an object');
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 });
  }

  // ===== ٣ · مصيدة البوتات =====
  // حقل مخفي اسمه company. البني آدم ما بيشوفهوش، والبوت بيملاه.
  // بنرجّع نجاح كاذب عشان البوت ما يعرفش إنه اتمسك ويحاول تاني بشكل تاني.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    console.warn(`[visits] honeypot triggered ip=${ip}`);
    return NextResponse.json({ ok: true, id: null }, { status: 201 });
  }

  // ===== ٤ · التحقق =====
  const validation = validateVisit(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: 'invalid', fields: validation.errors },
      { status: 422 },
    );
  }

  // ===== ٥ · الكتابة =====
  try {
    const pool = getPool();
    const saved = await insertVisit(pool, validation.value);
    console.log(`[visits] booked id=${saved.id} slot=${validation.value.slot} source=website`);
    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    if (error instanceof DatabaseNotConfiguredError) {
      console.error('[visits] DATABASE_URL is not set - booking was NOT saved');
      return NextResponse.json({ ok: false, error: 'unavailable' }, { status: 503 });
    }
    // 🔴 اللوج بياخد التفصيلة، والعميل بياخد رسالة عامة —
    //    تفاصيل أخطاء القاعدة ما تخرجش للنت.
    console.error('[visits] insert failed:', error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}

// أي ميثود تانية مرفوضة بوضوح
export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 });
}
