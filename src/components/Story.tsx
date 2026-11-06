import Link from 'next/link';
import { COPY } from '@/content/copy';
import { Eyebrow, SectionTitle } from './Eyebrow';

// «مين بيبنيه» على صفحة المشروع.
//
// المبادئ الأربعة كانت هنا ونقلت لقسم Philosophy على الصفحة الرئيسية —
// هي فكر الشركة، ومكانها الطبيعي صفحة الشركة. اللي باقي هنا هو الجزء
// اللي بيخص المشتري الواقف على صفحة المشروع: مين اللي بيبني الحاجة
// اللي هو بيبص عليها، ولينك يكمّل لو حابب.
export function Story() {
  return (
    <section className="shell py-24 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <Eyebrow>{COPY.story.eyebrow}</Eyebrow>
          <SectionTitle
            lead={COPY.story.titleLead}
            accent={COPY.story.titleAccent}
            className="mt-6"
          />
        </div>

        <div className="space-y-6 text-lg font-light leading-relaxed text-ink-soft">
          {COPY.story.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <p className="pt-2">
            <Link
              href="/"
              className="border-b border-sea/40 pb-0.5 text-base uppercase tracking-[0.14em] text-sea transition hover:border-sea"
            >
              {COPY.story.more}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
