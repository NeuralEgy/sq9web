import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { DEVELOPER } from '@/data/project';
import { VisitForm } from './VisitForm';

// ============================================================
// 🔴 أهم قسم في الصفحة.
//
// العميل اللي جاي من إعلان بيسأل سؤال واحد: «بكام؟». والإجابة **مش موجودة** —
// لا منشورة ولا متسلّمة. فالقسم ده بيعمل تلات حاجات بدل ما يسكت:
//   ١ · بيعترف بالسؤال بصراحة (ده بيبني ثقة، والسكوت بيوحي بإخفاء)
//   ٢ · بيدّي الرقم الوحيد المنشور فعلًا: ١٠٪ مقدم
//   ٣ · بيحوّل السؤال لخطوة: فورم الحجز جنبه على طول
// ============================================================
export function PriceAndVisit({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section id="visit" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-ink-900 text-sand-50">
          <div className="relative p-6 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_85%_0%,rgba(201,162,74,0.2),transparent_60%)]"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* السؤال والإجابة الصادقة */}
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">{t.price.heading}</h2>
                <p className="mt-5 text-lg leading-relaxed text-sand-200">{t.price.body}</p>

                <p className="mt-5 inline-block rounded-xl border border-gold-400/40 bg-gold-400/10 px-4 py-2.5 font-semibold text-gold-400">
                  {t.price.published}
                </p>

                <p className="mt-5 leading-relaxed text-sand-200">{t.price.reassure}</p>

                <a
                  href={`tel:${DEVELOPER.phoneE164}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-sand-50/30 px-6 py-3 font-semibold text-sand-50 transition hover:bg-sand-50/10"
                >
                  <span>{t.footer.callUs}</span>
                  <span dir="ltr">{DEVELOPER.phoneDisplay}</span>
                </a>
              </div>

              {/* فورم الحجز — بيكتب في جدول visits بـ source='website' */}
              <VisitForm locale={locale} t={t} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
