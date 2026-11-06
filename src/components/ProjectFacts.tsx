import Image from 'next/image';
import { COPY } from '@/content/copy';
import { IMAGES, PAYMENT, PROJECT } from '@/data/project';
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
    <section id="project" className="scroll-mt-28 bg-sand py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-[4/5]">
            <Image
              src={IMAGES.aerialPool}
              alt={`Aerial view of the pools at ${PROJECT.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <Eyebrow>{COPY.project.eyebrow}</Eyebrow>
            <SectionTitle
              lead={COPY.project.titleLead}
              accent={COPY.project.titleAccent}
              className="mt-6"
            />
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-ink-soft">
              {COPY.project.lead}
            </p>

            <dl className="mt-10">
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
            <p className="mt-8 border-s-2 border-clay ps-5 leading-relaxed text-ink-soft">
              {COPY.project.offPlanNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
