import Link from 'next/link';
import { COPY } from '@/content/copy';
import { GUIDES } from '@/content/guides';
import { DISTANCES, LOCATION } from '@/data/projects/aurora-palace';
import { Eyebrow, SectionTitle } from './Eyebrow';

// ============================================================
// «فين بنبني» — قسم الموقع على الصفحة الرئيسية.
//
// الأرقام نفسها موجودة على صفحة المشروع، بس هناك بتتقري كتفصيلة
// في المشروع؛ هنا بتتقري كقرار شركة: المطوّر اختار مجاويش بعينها،
// والمسافات هي اللي بتفسّر الاختيار.
//
// 🔴 المسافات بتتقرا من DISTANCES — مش مكتوبة في النص. يعني لو
//    العميل عدّل رقم، بيتعدّل في ملف واحد ويتغيّر في كل حتة.
//
// 🔴 ولينك الخريطة بيودّي على الحتة مش على دبوس المشروع، لأن
//    الإحداثيات مش مأكدة (شوف LOCATION في ملف المشروع). والسطر
//    الصغير تحت بيقول ده بصراحة بدل ما نسيب الزائر يكتشفه.
// ============================================================
export function Where() {
  return (
    <section id="where" className="shell scroll-mt-24 py-14 lg:py-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <Eyebrow>{COPY.company.where.eyebrow}</Eyebrow>
          <SectionTitle
            lead={COPY.company.where.titleLead}
            accent={COPY.company.where.titleAccent}
            className="mt-6"
          />
          <p className="mt-8 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-light leading-snug">
            {LOCATION.area}
          </p>
          <p className="mt-1 text-ink-muted">
            {LOCATION.city} · {LOCATION.region}
          </p>

          <a
            href={LOCATION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full border border-ink/25 px-7 py-3 text-[12px] uppercase tracking-[0.16em] transition hover:border-sea hover:text-sea"
          >
            {COPY.company.where.mapCta}
          </a>
        </div>

        <div>
          <p className="max-w-2xl section-lead">
            {COPY.company.where.lead}
          </p>

          <p className="mt-12 text-[12px] uppercase tracking-[0.2em] text-ink-muted">
            {COPY.company.where.distancesTitle}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
            {DISTANCES.map((d) => (
              <div key={d.place} className="border-t border-hair pt-4">
                <dd className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-none">
                  {d.minutes}
                  <span className="ml-1.5 text-sm text-ink-muted">{COPY.common.minutes}</span>
                </dd>
                <dt className="mt-2 leading-snug text-ink-muted">{d.place}</dt>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-muted">
            {COPY.company.where.note}
          </p>

          <Link
            href={`/${GUIDES.magawish.slug}`}
            className="mt-7 inline-block border-b border-sea/40 pb-0.5 text-[12px] uppercase tracking-[0.16em] text-sea transition hover:border-sea"
          >
            {COPY.company.where.guideCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
