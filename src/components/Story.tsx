import type { Dictionary } from '@/i18n';
import { Section } from './Section';

export function Story({ t }: { t: Dictionary }) {
  return (
    <Section id="story" kicker={t.story.kicker} heading={t.story.heading}>
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-3">
          <p>{t.story.body1}</p>
          <p>{t.story.body2}</p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sea-600">
            {t.story.pillarsHeading}
          </h3>
          <ol className="mt-5 space-y-5">
            {t.story.pillars.map((pillar, index) => (
              <li key={pillar.title} className="flex gap-4">
                <span
                  dir="ltr"
                  className="mt-0.5 shrink-0 text-sm font-bold tabular-nums text-gold-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{pillar.title}</p>
                  <p className="mt-1 text-ink-700">{pillar.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
