import Image from 'next/image';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { PROJECTS } from '@/data/projects';
import type { ProjectSummary } from '@/data/projects';
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
//
// 🔴 التخطيط بيتغيّر بعدد المشاريع. بمشروع واحد الشبكة بعمودين
//    بتسيب نص الصف فاضي على الشاشة العريضة والقسم يبان ناقص، فبطاقة
//    واحدة بتتعرض أفقي (صورة جنب كلام) وبتملا العرض. من اتنين وفوق
//    بترجع شبكة. يعني أول مشروع جديد يتضاف، الشكل بيظبط لوحده.
// ============================================================
export function ProjectsIndex() {
  const solo = PROJECTS.length === 1;

  return (
    <section id="projects" className="scroll-mt-24 bg-shallow py-24 lg:py-36">
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

        <div className={solo ? 'mt-16' : 'mt-16 grid gap-12 lg:grid-cols-2'}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} solo={solo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, solo }: { project: ProjectSummary; solo: boolean }) {
  const href = `/${project.slug}`;

  return (
    <article
      className={
        solo
          ? 'group grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20'
          : 'group'
      }
    >
      <Link href={href} className="block">
        <div
          className={`relative w-full overflow-hidden rounded-sm ${
            solo ? 'aspect-[4/3] lg:aspect-[3/2]' : 'aspect-[4/3]'
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.name}, ${project.area}, ${project.city}`}
            fill
            sizes={solo ? '(min-width: 1024px) 55vw, 92vw' : '(min-width: 1024px) 45vw, 92vw'}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div>
        <Link href={href} className="block">
          <p className="text-[12px] uppercase tracking-[0.2em] text-sea">{project.status}</p>
          <h3
            className={`mt-3 font-display font-light leading-tight ${
              solo ? 'text-[clamp(2.4rem,4.5vw,4rem)]' : 'text-[clamp(2rem,4vw,3rem)]'
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-1 text-ink-muted">
            {project.area} · {project.city}
          </p>
        </Link>

        <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">{project.blurb}</p>

        <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-hair pt-5">
          <Fact value={String(project.totalUnits)} label={COPY.company.projects.labels.units} />
          <Fact
            value={`${project.areaMinM2}–${project.areaMaxM2} ${COPY.common.sqm}`}
            label={COPY.company.projects.labels.sizes}
          />
          <Fact
            value={String(project.deliveryYear)}
            label={COPY.company.projects.labels.delivery}
          />
        </dl>

        <Link
          href={href}
          className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
        >
          {COPY.company.projects.cardCta}
        </Link>
      </div>
    </article>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dd className="font-display text-2xl font-light">{value}</dd>
      <dt className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">{label}</dt>
    </div>
  );
}
