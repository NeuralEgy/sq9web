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
    <section id="vision" className="scroll-mt-24 bg-shallow py-24 lg:py-36">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <Eyebrow>{COPY.company.vision.eyebrow}</Eyebrow>
          <SectionTitle
            lead={COPY.company.vision.titleLead}
            accent={COPY.company.vision.titleAccent}
            className="mt-6"
          />
        </div>

        <div>
          <div className="space-y-5">
            {COPY.company.vision.published.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="max-w-3xl font-display text-[clamp(1.4rem,2.6vw,2.4rem)] font-light leading-[1.3] text-ink"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-hair pt-8">
            <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
              {COPY.company.vision.titleCost}
            </p>
            <p className="mt-5 max-w-3xl text-lg font-light leading-relaxed text-ink-soft">
              {COPY.company.vision.cost}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
