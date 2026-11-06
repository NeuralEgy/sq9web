import Image from 'next/image';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { PROJECTS } from '@/data/projects';
import { Eyebrow, SectionTitle } from './Eyebrow';

// ============================================================
// سجل المشاريع على الصفحة الرئيسية.
//
// بيقرا من PROJECTS، فمشروع جديد = ملف في src/data/projects + سطر
// في index.ts. القسم ده ما بيتعدّلش.
//
// 🔴 البطاقة فيها: الاسم · الحالة المنشورة · العدد · المساحات ·
//    التسليم. مفيش سعر ومفيش «متاح/محجوز» — نوع ProjectSummary نفسه
//    مالوش الحقول دي أصلًا، فالغلط ده مش ممكن يحصل من غير ما
//    TypeScript يوقف البيلد.
// ============================================================
export function ProjectsIndex() {
  return (
    <section id="projects" className="scroll-mt-24 bg-sand py-24 lg:py-36">
      <div className="shell">
        <div className="max-w-2xl">
          <Eyebrow>{COPY.company.projects.eyebrow}</Eyebrow>
          <SectionTitle
            lead={COPY.company.projects.titleLead}
            accent={COPY.company.projects.titleAccent}
            className="mt-6"
          />
          <p className="mt-7 text-lg font-light leading-relaxed text-ink-soft">
            {COPY.company.projects.lead}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                  <Image
                    src={project.image}
                    alt={`${project.name}, ${project.area}, ${project.city}`}
                    fill
                    sizes="(min-width: 1024px) 42vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-clay">
                  {project.status}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
                  {project.name}
                </h3>
                <p className="mt-1 text-ink-muted">
                  {project.area} · {project.city}
                </p>
              </Link>

              <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">{project.blurb}</p>

              <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-hair pt-5">
                <div>
                  <dd className="font-display text-2xl font-light">{project.totalUnits}</dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {COPY.company.projects.labels.units}
                  </dt>
                </div>
                <div>
                  <dd className="font-display text-2xl font-light">
                    {project.areaMinM2}–{project.areaMaxM2} {COPY.common.sqm}
                  </dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {COPY.company.projects.labels.sizes}
                  </dt>
                </div>
                <div>
                  <dd className="font-display text-2xl font-light">{project.deliveryYear}</dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {COPY.company.projects.labels.delivery}
                  </dt>
                </div>
              </dl>

              <Link
                href={`/${project.slug}`}
                className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-[12px] uppercase tracking-[0.16em] text-cream transition hover:bg-clay"
              >
                {COPY.company.projects.cardCta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
