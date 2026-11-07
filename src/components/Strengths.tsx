import { COPY } from '@/content/copy';
import { Eyebrow, SectionTitle } from './Eyebrow';

// ============================================================
// «المقومات» — وهو أخطر قسم في الموقع.
//
// 🔴 قسم زي ده على موقع أي مطوّر تاني بيبقى: سنين خبرة، عدد مشاريع،
//    آلاف عملاء، جوائز. إحنا مفيش عندنا ولا واحدة منهم منشورة —
//    فالقسم مبني على عكس الفكرة: أربع حاجات الزائر يقدر يتأكد منها
//    بنفسه، وبعدهم فقرة بتقول بالاسم اللي مش عندنا.
//
//    اللوحة الغامقة في الآخر مش تحذير قانوني ولا سطر صغير مخبّى.
//    دي أقوى حجة في الصفحة: مطوّر بيبيع على الخريطة وبيقول لك هو
//    عنده إيه وهو مش عنده إيه — قبل ما تسأل.
// ============================================================
export function Strengths() {
  return (
    <section id="strengths" className="shell scroll-mt-24 py-14 lg:py-20">
      <div className="max-w-2xl">
        <Eyebrow>{COPY.company.strengths.eyebrow}</Eyebrow>
        <SectionTitle
          lead={COPY.company.strengths.titleLead}
          accent={COPY.company.strengths.titleAccent}
          className="mt-6"
        />
        <p className="mt-7 section-lead">
          {COPY.company.strengths.lead}
        </p>
      </div>

      <ol className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
        {COPY.company.strengths.items.map((item, i) => (
          <li key={item.title} className="border-t border-hair pt-6">
            <span className="font-display text-sm text-sea">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-light leading-snug">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-20 rounded-sm bg-ink px-7 py-12 text-foam sm:px-12">
        <p className="text-[12px] uppercase tracking-[0.26em] text-sun">
          {COPY.company.strengths.honestyTitle}
        </p>
        <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.9vw,1.45rem)] font-light leading-relaxed text-foam/80">
          {COPY.company.strengths.honesty}
        </p>
      </div>
    </section>
  );
}
