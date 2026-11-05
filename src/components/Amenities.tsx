import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { AMENITIES } from '@/data/project';
import { AMENITY_ICONS } from './Icons';
import { Section } from './Section';

export function Amenities({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <Section
      id="amenities"
      kicker={t.amenities.kicker}
      heading={t.amenities.heading}
      lead={t.amenities.lead}
      tone="muted"
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {AMENITIES.map((amenity) => {
          const Icon = AMENITY_ICONS[amenity.key];
          return (
            <li
              key={amenity.key}
              className="rounded-2xl border border-sand-200 bg-white p-5"
            >
              {Icon && <Icon className="h-7 w-7 text-sea-600" />}
              <p className="mt-3 font-semibold text-ink-900">{amenity.label[locale]}</p>
              {amenity.note && (
                <p className="mt-0.5 text-sm text-ink-700">{amenity.note[locale]}</p>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
