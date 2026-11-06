import Image from 'next/image';
import { COPY } from '@/content/copy';
import { whatsappUrl } from '@/data/company';
import { IMAGES, PROJECT, UNIT_TYPES } from '@/data/projects/aurora-palace';
import { Eyebrow, SectionTitle } from './Eyebrow';

// 🔴 الوحدات من غير سعر ومن غير حالة توفّر — دول مش معروفين.
//    ومن غير صور كمان: مفيش ولا صورة وحدة من جوّه عند العميل، والصور
//    اللي على موقعهم الحالي باسم interior.jpg صور ستوك مجرّدة. حط صورة
//    ستوك تحت عنوان «ستوديو» يعني توحي للمشتري إنها الشقة — وده كدب.
//
//    بدل السعر: زرار واتساب برسالة جاهزة فيها نوع الوحدة، فالـagent
//    بيوصله السياق من أول رسالة ويقدر يرد صح.
export function Units() {
  return (
    <section id="residences" className="scroll-mt-28 py-24 lg:py-36">
      <div className="shell">
        <Eyebrow>{COPY.units.eyebrow}</Eyebrow>
        <SectionTitle
          lead={COPY.units.titleLead}
          accent={COPY.units.titleAccent}
          className="mt-6 max-w-2xl"
        />
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft">
          {COPY.units.lead}
        </p>

        <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-sm">
          <Image
            src={IMAGES.nightExterior}
            alt={`${PROJECT.name} at night`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {UNIT_TYPES.map((unit) => {
            const waText = `Hello, I am interested in a ${unit.name.toLowerCase()} at ${PROJECT.name}. Could I get details and pricing?`;
            return (
              <a
                key={unit.code}
                href={whatsappUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-hair pt-6 transition hover:border-clay"
              >
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-light">
                  {unit.name}
                </h3>
                <p className="mt-1 text-lg text-ink-muted">
                  {unit.areaMinM2} – {unit.areaMaxM2} {COPY.common.sqm}
                </p>
                <p className="mt-3 text-ink-soft">{unit.note}</p>
                <span className="mt-5 inline-block text-[12px] uppercase tracking-[0.16em] text-clay">
                  {COPY.units.ask} →
                </span>
              </a>
            );
          })}
        </div>

        <p className="mt-12 max-w-xl text-ink-muted">{COPY.units.noPhotos}</p>
      </div>
    </section>
  );
}
