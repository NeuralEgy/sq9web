import type { Dictionary } from '@/i18n';
import { Section } from './Section';

export function Experience({ t }: { t: Dictionary }) {
  return (
    <Section
      kicker={t.experience.kicker}
      heading={t.experience.heading}
      lead={t.experience.lead}
      tone="muted"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {t.experience.items.map((item, index) => (
          <li key={item.title} className="rounded-3xl border border-sand-200 bg-white p-6">
            <span dir="ltr" className="text-sm font-bold tabular-nums text-gold-500">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-ink-900">{item.title}</h3>
            <p className="mt-1.5 leading-relaxed text-ink-700">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
