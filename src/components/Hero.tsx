import Image from 'next/image';
import { COPY } from '@/content/copy';
import { IMAGES, PROJECT, whatsappUrl } from '@/data/project';
import { Eyebrow } from './Eyebrow';

const WA_TEXT = `Hello, I would like details about ${PROJECT.name}`;

// النص فوق والصورة تحته — مش النص فوق الصورة.
// السبب: نص فوق صورة دايمًا بيحتاج طبقة تغميق، والطبقة بتاكل من
// الرندر. هنا النص مقروء ١٠٠٪ والصورة بتاخد حقها كاملة.
export function Hero() {
  const stats: Array<[string, string]> = [
    [String(PROJECT.totalUnits), COPY.project.labels.units],
    [`${PROJECT.areaMinM2} – ${PROJECT.areaMaxM2} ${COPY.common.sqm}`, COPY.project.labels.areas],
    [`${PROJECT.landAreaM2.toLocaleString('en-US')} ${COPY.common.sqm}`, COPY.project.labels.land],
    [String(PROJECT.deliveryYear), COPY.project.labels.delivery],
  ];

  return (
    <section className="shell pt-10 lg:pt-16">
      <Eyebrow>{COPY.hero.eyebrow}</Eyebrow>

      <h1 className="mt-8 max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.95]">
        {COPY.hero.titleLead} <em className="italic text-clay">{COPY.hero.titleAccent}</em>
      </h1>

      <div className="mt-10 grid gap-8 border-t border-hair pt-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <p className="max-w-xl text-xl font-light leading-relaxed text-ink-soft">
          {COPY.hero.lead}
        </p>
        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <a
            href="#visit"
            className="rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-cream transition hover:bg-clay"
          >
            {COPY.hero.ctaVisit}
          </a>
          <a
            href={whatsappUrl(WA_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-clay hover:text-clay"
          >
            {COPY.hero.ctaWhatsapp}
          </a>
        </div>
      </div>

      <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-sm lg:mt-20">
        <Image
          src={IMAGES.sunsetPool}
          alt={`${PROJECT.name} at sunset, Magawish, Hurghada`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-y-8 border-b border-hair pb-12 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label}>
            <dd className="font-display text-[clamp(1.9rem,4vw,2.9rem)] font-light">{value}</dd>
            <dt className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
