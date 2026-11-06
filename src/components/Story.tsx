import { COPY } from '@/content/copy';
import { Eyebrow, SectionTitle } from './Eyebrow';

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

          <div className="grid gap-x-10 gap-y-6 pt-4 sm:grid-cols-2">
            {COPY.story.pillars.map((pillar, i) => (
              <div key={pillar.title} className="border-t border-hair pt-4">
                <span className="font-display text-sm text-clay">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 font-semibold text-ink">{pillar.title}</p>
                <p className="mt-1 text-base text-ink-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
