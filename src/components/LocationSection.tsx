import { COPY } from '@/content/copy';
import { DISTANCES, LOCATION } from '@/data/projects/aurora-palace';
import { Eyebrow, SectionTitle } from './Eyebrow';

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-28 py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>{COPY.location.eyebrow}</Eyebrow>
            <SectionTitle
              lead={COPY.location.titleLead}
              accent={COPY.location.titleAccent}
              className="mt-6"
            />
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-ink-soft">
              {COPY.location.lead}
            </p>

            <p className="mt-8 font-display text-xl">{LOCATION.address}</p>

            <a
              href={LOCATION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[12px] uppercase tracking-[0.16em] text-sea"
            >
              {COPY.location.directions} →
            </a>

            {/* فقرة للبحث — الكلمات اللي العميل بيكتبها فعلًا في جوجل */}
            <p className="mt-8 max-w-md leading-relaxed text-ink-muted">
              {COPY.location.seoNote}
            </p>
          </div>

          <div className="lg:pt-4">
            <h3 className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              {COPY.location.distancesTitle}
            </h3>
            <dl className="mt-5">
              {DISTANCES.map((d) => (
                <div
                  key={d.place}
                  className="flex items-baseline justify-between gap-6 border-t border-hair py-5"
                >
                  <dt className="text-lg">{d.place}</dt>
                  <dd className="font-display text-2xl font-light">
                    {d.minutes}{' '}
                    <span className="text-base text-ink-muted">{COPY.common.minutes}</span>
                  </dd>
                </div>
              ))}
              <div className="border-t border-hair" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
