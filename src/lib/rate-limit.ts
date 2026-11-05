// ============================================================
// حاجز معدّل بسيط في ذاكرة العملية.
//
// ⚠️ حدوده المعروفة: بيتصفّر لما PM2 يعيد تشغيل العملية، وما بيتشاركش
//    بين أكتر من نسخة. ده مقبول هنا — الموقع بيشتغل عملية واحدة،
//    والهدف منع السبام مش حماية بنك. لو بقى أكتر من نسخة، ينتقل لـRedis
//    أو لجدول في القاعدة.
// ============================================================

type Window = { hits: number[] };

const buckets = new Map<string, Window>();

/** تنضيف دوري عشان الماب ما تكبرش على الفاضي */
function sweep(now: number, windowMs: number) {
  for (const [key, window] of buckets) {
    window.hits = window.hits.filter((at) => now - at < windowMs);
    if (window.hits.length === 0) buckets.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  { limit, windowMs, now = Date.now() }: { limit: number; windowMs: number; now?: number },
): { allowed: boolean; retryAfterSeconds: number } {
  // تنضيف خفيف: مرة كل ٥٠ طلب تقريبًا
  if (buckets.size > 0 && Math.random() < 0.02) sweep(now, windowMs);

  const window = buckets.get(key) ?? { hits: [] };
  window.hits = window.hits.filter((at) => now - at < windowMs);

  if (window.hits.length >= limit) {
    const oldest = window.hits[0];
    buckets.set(key, window);
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((windowMs - (now - oldest)) / 1000)),
    };
  }

  window.hits.push(now);
  buckets.set(key, window);
  return { allowed: true, retryAfterSeconds: 0 };
}

/** للاختبارات */
export function resetRateLimit(): void {
  buckets.clear();
}

/**
 * عنوان الزائر. السيرفر ورا Nginx، فالعنوان الحقيقي في X-Forwarded-For.
 * أول عنوان في القايمة هو العميل، والباقي بروكسيات.
 */
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return headers.get('x-real-ip')?.trim() || 'unknown';
}
