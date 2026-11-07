import { COPY } from '@/content/copy';
import { Eyebrow, SectionTitle } from './Eyebrow';

// قسم الرؤية.
//
// الجملتين المنشورتين بخط كبير، وبعدهم فقرة «وده بيكلّفنا إيه».
// الترتيب ده مقصود: أي زائر قرا إعلانات عقارات قبل كده عنده مناعة
// ضد جُمل الرؤية. فإحنا بنقولها، وبعدين بنسندها بأرقام هو يقدر
// يراجعها — بدل ما نسيبها تعدّي كزخرفة.
export function Vision() {
  return (
    <section id="vision" className="scroll-mt-24 bg-shallow py-16 lg:py-24">
      <div className="shell">
        {/* 🔴 العنوان شمال والجملتين يمين. الفرق في الطول بين
            العمودين بيسيب فراغ، فالفقرة التالتة نزلت صف لوحدها
            تحتيهم على عرض الصفحة كلها بدل ما تطوّل عمود واحد
            وتسيب التاني فاضي. */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>{COPY.company.vision.eyebrow}</Eyebrow>
            <SectionTitle
              lead={COPY.company.vision.titleLead}
              accent={COPY.company.vision.titleAccent}
              className="mt-6"
            />
          </div>

          <div className="space-y-6">
            {COPY.company.vision.published.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="font-display text-[clamp(1.5rem,2.8vw,2.6rem)] font-light leading-[1.28] text-ink"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-hair pt-8 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
            {COPY.company.vision.titleCost}
          </p>
          <p className="section-lead">{COPY.company.vision.cost}</p>
        </div>
      </div>
    </section>
  );
}
