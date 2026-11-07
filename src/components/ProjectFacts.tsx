import Image from 'next/image';
import { COPY } from '@/content/copy';
import { IMAGES, PAYMENT, PROJECT } from '@/data/projects/aurora-palace';
import { Eyebrow, SectionTitle } from './Eyebrow';

// جدول الحقائق. كل قيمة هنا جاية من src/data/project.ts —
// 🔴 ممنوع يتكتب رقم مباشرة في الملف ده.
export function ProjectFacts() {
  const l = COPY.project.labels;
  const rows: Array<[string, string]> = [
    [l.units, String(PROJECT.totalUnits)],
    [l.areas, `${PROJECT.areaMinM2} – ${PROJECT.areaMaxM2} ${COPY.common.sqm}`],
    [l.land, `${PROJECT.landAreaM2.toLocaleString('en-US')} ${COPY.common.sqm}`],
    [l.split, `${PROJECT.buildingsPercent}% / ${PROJECT.landscapePercent}%`],
    [l.structure, `Ground + ${PROJECT.floorsAbove} floors`],
    [l.delivery, String(PROJECT.deliveryYear)],
    [l.finishing, PROJECT.finishing],
    [l.contract, PROJECT.contract],
    // 🟢 الرقم الوحيد المنشور عن السداد
    [l.downPayment, `${PAYMENT.downPaymentPercent}%`],
  ];

  return (
    <section id="project" className="scroll-mt-28 bg-shallow py-16 lg:py-24">
      <div className="shell">
        <div className="max-w-2xl">
          <Eyebrow>{COPY.project.eyebrow}</Eyebrow>
          <SectionTitle
            lead={COPY.project.titleLead}
            accent={COPY.project.titleAccent}
            className="mt-6"
          />
          <p className="mt-6 section-lead">{COPY.project.lead}</p>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-sm">
          <Image
            src={IMAGES.aerialPool}
            alt={`Render of the pools at ${PROJECT.name}, seen from above`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* الجدول عمودين: تسع صفوف في عمود واحد كانت بتطوّل القسم
            من غير داعي، والصفحة عندها عرض يتستعمل. */}
        <dl className="mt-12 grid gap-x-20 sm:grid-cols-2">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-6 border-t border-hair py-4"
            >
              <dt className="text-ink-muted">{label}</dt>
              <dd className="font-display text-xl">{value}</dd>
            </div>
          ))}
        </dl>

        {/* شفافية عن البيع على الخريطة — بتبني ثقة بدل ما العميل يكتشفها بنفسه */}
        <p className="mt-10 max-w-3xl border-s-2 border-sea ps-5 leading-relaxed text-ink-soft">
          {COPY.project.offPlanNote}
        </p>
      </div>
    </section>
  );
}
