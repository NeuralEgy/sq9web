import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { DISTANCES, LOCATION } from '@/data/project';
import { num } from '@/lib/format';
import { IconArrow, IconClock, IconPin } from './Icons';
import { Section } from './Section';

export function LocationSection({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <Section
      id="location"
      kicker={t.location.kicker}
      heading={t.location.heading}
      lead={t.location.lead}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="flex items-start gap-3 text-lg font-semibold text-ink-900">
            <IconPin className="mt-1 h-5 w-5 shrink-0 text-sea-600" />
            {LOCATION.address[locale]}
          </p>

          <a
            href={LOCATION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sea-600 transition hover:text-sea-800"
          >
            {t.location.directions}
            <IconArrow className="h-4 w-4 rtl:-scale-x-100" />
          </a>

          {/* فقرة للبحث — الكلمات اللي العميل بيكتبها فعلًا في جوجل */}
          <p className="mt-7 leading-relaxed text-ink-700">{t.location.seoNote}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sea-600">
            {t.location.distancesHeading}
          </h3>
          <ul className="mt-5 divide-y divide-sand-200 border-y border-sand-200">
            {DISTANCES.map((entry) => (
              <li key={entry.place.en} className="flex items-center justify-between gap-4 py-3.5">
                <span className="text-ink-900">{entry.place[locale]}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-ink-700">
                  <IconClock className="h-4 w-4 text-sea-400" />
                  <span dir="ltr">{num(entry.minutes, locale)}</span>
                  <span>{t.common.minutes}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
