import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { PROJECT, UNIT_TYPES, whatsappUrl } from '@/data/project';
import { areaRange } from '@/lib/format';
import { IconArrow } from './Icons';
import { Section } from './Section';

// 🔴 كروت الوحدات من غير سعر ومن غير حالة توفّر — دول مش معروفين.
//    بدل السعر: زرار واتساب برسالة جاهزة فيها نوع الوحدة، فالـagent
//    بيوصله السياق من أول رسالة ويقدر يرد صح.
export function Units({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <Section id="units" kicker={t.units.kicker} heading={t.units.heading} lead={t.units.lead}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {UNIT_TYPES.map((unit) => {
          const name = unit.name[locale];
          const waText =
            locale === 'ar'
              ? `السلام عليكم، مهتم بـ${name} في ${PROJECT.name}. ممكن التفاصيل والسعر؟`
              : `Hello, I am interested in a ${name} at ${PROJECT.name}. Could I get details and pricing?`;

          return (
            <li
              key={unit.code}
              className="flex flex-col rounded-3xl border border-sand-200 bg-white p-6 transition hover:border-sea-400/50 hover:shadow-sm"
            >
              <h3 className="text-xl font-bold text-ink-900">{name}</h3>
              <p dir="ltr" className="mt-2 text-lg text-ink-700 ltr:text-start rtl:text-end">
                {areaRange(unit.areaMinM2, unit.areaMaxM2, locale, t.common.sqm)}
              </p>

              <a
                href={whatsappUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-sea-600 transition hover:text-sea-800"
              >
                {t.units.askPrice}
                <IconArrow className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="mt-7 text-ink-700">{t.units.note}</p>
    </Section>
  );
}
