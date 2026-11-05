import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { PROJECT, whatsappUrl } from '@/data/project';
import { num, year } from '@/lib/format';
import { IconWhatsapp } from './Icons';

// ⚠️ مفيش صور من العميل لحد دلوقتي، فالهيرو تدرّج لوني مش صورة.
//    ده مقصود مش مؤقت وحش: بيفتح فورًا على موبايل جاي من إعلان (مفيش صورة تتحمّل)،
//    ولما العميل يبعت الصور بتتحط كـbackground هنا من غير ما يتغيّر أي حاجة تانية.
export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  const waText =
    locale === 'ar'
      ? `السلام عليكم، حابب أعرف تفاصيل ${PROJECT.name}`
      : `Hello, I would like details about ${PROJECT.name}`;

  return (
    <section className="relative overflow-hidden bg-ink-900 text-sand-50">
      {/* طبقة ضوء خفيفة — بتدّي عمق من غير صورة */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_75%_10%,rgba(31,106,128,0.55),transparent_60%),radial-gradient(60%_60%_at_10%_90%,rgba(201,162,74,0.22),transparent_65%)]"
      />

      <div className="container-x relative py-20 sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          {t.hero.badge}
        </span>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-sea-400">
          {t.hero.eyebrow}
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">{t.hero.title}</h1>
        <p className="mt-3 text-xl text-gold-400 sm:text-2xl">{t.hero.subtitle}</p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-200">{t.hero.lead}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#visit"
            className="rounded-full bg-gold-400 px-7 py-3.5 text-center font-semibold text-ink-900 transition hover:bg-gold-500"
          >
            {t.hero.ctaVisit}
          </a>
          <a
            href={whatsappUrl(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-50/30 px-7 py-3.5 font-semibold text-sand-50 transition hover:bg-sand-50/10"
          >
            <IconWhatsapp className="h-5 w-5" />
            {t.hero.ctaWhatsapp}
          </a>
        </div>

        {/* أرقام سريعة تحت الزراير — أول حاجة عين الزائر بتلقطها */}
        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-sand-50/15 pt-8 sm:grid-cols-4">
          <HeroStat value={num(PROJECT.totalUnits, locale)} label={t.stats.units} />
          <HeroStat
            value={`${num(PROJECT.areaMinM2, locale)}–${num(PROJECT.areaMaxM2, locale)}`}
            label={`${t.stats.areas} (${t.common.sqm})`}
          />
          <HeroStat value={num(PROJECT.landAreaM2, locale)} label={`${t.stats.land} (${t.common.sqm})`} />
          <HeroStat value={year(PROJECT.deliveryYear, locale)} label={t.stats.delivery} />
        </dl>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span dir="ltr" className="block text-2xl font-bold text-sand-50 sm:text-3xl">
          {value}
        </span>
        <span className="mt-1 block text-sm text-sand-200/80">{label}</span>
      </dd>
    </div>
  );
}
