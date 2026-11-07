import Image from 'next/image';
import { COPY } from '@/content/copy';
import { AMENITIES, IMAGES, PROJECT } from '@/data/projects/aurora-palace';
import { Eyebrow, SectionTitle } from './Eyebrow';

export function Life() {
  return (
    <section id="life" className="scroll-mt-28 bg-shallow py-16 lg:py-24">
      <div className="shell">
        <Eyebrow>{COPY.life.eyebrow}</Eyebrow>
        <SectionTitle
          lead={COPY.life.titleLead}
          accent={COPY.life.titleAccent}
          className="mt-6 max-w-3xl"
        />
        <p className="mt-6 max-w-xl section-lead">
          {COPY.life.lead}
        </p>

        {/* شبكة غير متماثلة — صورة كبيرة وصورتين أصغر، شكل مجلة
            مش كروت متساوية. ده اللي بيخلّي الصفحة تبان مصمّمة. */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-2 lg:aspect-[16/10]">
            <Image
              src={IMAGES.aerialPool}
              alt="Aerial view of the pools"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-5">
            {[
              [IMAGES.kidsPool, "The children's pool"],
              [IMAGES.dayPool, 'The main pool'],
            ].map(([src, alt]) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((a) => (
            <li key={a.label} className="border-t border-hair pt-4">
              <p className="text-ink-soft">{a.label}</p>
              {a.note && <p className="mt-0.5 text-sm text-ink-muted">{a.note}</p>}
            </li>
          ))}
        </ul>

        <div className="relative mt-14 aspect-[21/9] w-full overflow-hidden rounded-sm">
          <Image
            src={IMAGES.nightReading}
            alt={`An evening at ${PROJECT.name}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
