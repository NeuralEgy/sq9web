import { COPY } from '@/content/copy';
import { Eyebrow, SectionTitle } from './Eyebrow';

// المبادئ الأربعة المنشورة — Community · Intention · Balance · Presence.
// كانت جوّه قسم «مين بيبنيه» على صفحة المشروع، وبقت قسم لوحدها على
// الرئيسية، لأنها فكر الشركة مش خصلة في مشروع.
export function Philosophy() {
  return (
    <section id="philosophy" className="shell scroll-mt-24 py-14 lg:py-20">
      <div className="max-w-2xl">
        <Eyebrow>{COPY.company.philosophy.eyebrow}</Eyebrow>
        <SectionTitle
          lead={COPY.company.philosophy.titleLead}
          accent={COPY.company.philosophy.titleAccent}
          className="mt-6"
        />
        <p className="mt-7 section-lead">
          {COPY.company.philosophy.lead}
        </p>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {COPY.company.philosophy.pillars.map((pillar, i) => (
          <div key={pillar.title} className="border-t border-hair pt-6">
            <span className="font-display text-sm text-sea">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-[clamp(1.5rem,2vw,1.9rem)] font-light leading-tight">
              {pillar.title}
            </h3>
            <p className="mt-4 font-light leading-relaxed text-ink-soft">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
