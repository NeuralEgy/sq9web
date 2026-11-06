import Image from 'next/image';
import { COPY } from '@/content/copy';
import { DEVELOPER } from '@/data/company';
import { IMAGES } from '@/data/projects/aurora-palace';
import { VisitForm } from './VisitForm';

// ============================================================
// 🔴 أهم قسم في الصفحة.
//
// العميل اللي جاي من إعلان بيسأل سؤال واحد: «بكام؟». والإجابة **مش
// موجودة** — لا منشورة ولا متسلّمة. فالقسم ده بيعمل تلات حاجات بدل
// ما يسكت:
//   ١ · بيعترف بالسؤال بصراحة (الصمت بيوحي بإخفاء)
//   ٢ · بيدّي الرقم الوحيد المنشور فعلًا: ١٠٪ مقدم
//   ٣ · بيحوّل السؤال لخطوة: فورم الحجز جنبه على طول
// ============================================================
export function PriceAndVisit() {
  return (
    <>
      {/* بلوك الأسعار — غامق جوّه صفحة فاتحة، فعين الزائر بتروحله */}
      <section className="shell py-10 lg:py-16">
        <div className="rounded-sm bg-ink px-7 py-16 text-foam sm:px-14 lg:px-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[12px] uppercase tracking-[0.26em] text-sun">
                {COPY.pricing.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.05]">
                {COPY.pricing.titleLead}
                <br />
                <em className="italic text-sun">{COPY.pricing.titleAccent}</em>
              </h2>
            </div>
            <div>
              <p className="text-xl font-light leading-relaxed text-foam/75">
                {COPY.pricing.body}
              </p>
              <p className="mt-8 border-s-2 border-sun ps-6 text-lg">
                {COPY.pricing.publishedPrefix}{' '}
                <span className="text-sun">{COPY.pricing.publishedValue}</span>
                {COPY.pricing.publishedSuffix}
              </p>
              <p className="mt-8 text-foam/60">{COPY.pricing.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* الزيارة والفورم */}
      <section id="visit" className="scroll-mt-28 bg-shallow py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">{COPY.visit.eyebrow}</p>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.03]">
              {COPY.visit.titleLead} <em className="italic text-sea">{COPY.visit.titleAccent}</em>
            </h2>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-ink-soft">
              {COPY.visit.lead}
            </p>

            <div className="relative mt-10 aspect-[5/4] overflow-hidden rounded-sm">
              <Image
                src={IMAGES.familyNight}
                alt="An evening at Aurora Palace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <a
              href={`tel:${DEVELOPER.phoneE164}`}
              className="mt-8 inline-block font-display text-2xl transition hover:text-sea"
            >
              {DEVELOPER.phoneDisplay}
            </a>
          </div>

          {/* فورم الحجز — بيكتب في جدول visits بـ source='website' */}
          <VisitForm />
        </div>
      </section>
    </>
  );
}
