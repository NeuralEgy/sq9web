import Image from 'next/image';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { FOUNDER } from '@/data/leadership';
import { ROUTES } from '@/lib/routes';
import { Eyebrow, SectionTitle } from './Eyebrow';
import { RichText } from './RichText';

// ============================================================
// قسم المؤسِّس على الصفحة الرئيسية.
//
// 🔴 بيرجع null لو مفيش بيانات. يعني القسم ده دلوقتي **مش بيظهر
//    خالص** على الموقع — لا عنوان، لا مكان فاضي، لا «قريبًا».
//
//    السبب: الموقع كله حجته إنه بيقول الحقيقة عن اللي مش عنده.
//    قسم قيادة فاضي أو فيه اسم مؤقت بيكسر الحجة دي أسرع من أي
//    حاجة تانية — على موقع مطوّر بيبيع بالملايين، «قريبًا» تحت
//    «مجلس الإدارة» بتتقري كإخفاء.
//
//    أول ما src/data/leadership.ts يتملا، القسم بيظهر لوحده هنا
//    وعلى /leadership، ويدخل المنيو والخريطة. مفيش خطوة تانية.
//
// وبيعرض **مقتطف** بس — أول فقرتين — واللينك بيكمّل على الصفحة.
// الجواب الكامل مكانه صفحته، مش نص الرئيسية.
// ============================================================
export function FounderNote() {
  if (!FOUNDER) return null;

  const excerpt = FOUNDER.letter.slice(0, 2);
  const hasMore = FOUNDER.letter.length > excerpt.length;

  return (
    <section className="shell py-24 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm">
            <Image
              src={FOUNDER.photo}
              alt={`${FOUNDER.name}, ${FOUNDER.role} of Square9 Developments`}
              fill
              sizes="(min-width: 1024px) 32vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <Eyebrow>{COPY.founder.eyebrow}</Eyebrow>
          <SectionTitle
            lead={COPY.founder.titleLead}
            accent={COPY.founder.titleAccent}
            className="mt-6"
          />

          <div className="mt-8 max-w-2xl space-y-5 text-lg font-light leading-relaxed text-ink-soft">
            {excerpt.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>

          {/* التوقيع بيتولّد من البيانات — مش مكتوب في النص */}
          <div className="mt-8 border-t border-hair pt-5">
            <p className="font-display text-xl">{FOUNDER.name}</p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              {FOUNDER.role}
            </p>
          </div>

          {hasMore ? (
            <Link
              href={ROUTES.leadership}
              className="mt-8 inline-block border-b border-sea/40 pb-0.5 text-[12px] uppercase tracking-[0.16em] text-sea transition hover:border-sea"
            >
              {COPY.founder.readMore}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
