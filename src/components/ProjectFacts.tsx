import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { PAYMENT, PROJECT } from '@/data/project';
import { areaRange, num, year } from '@/lib/format';
import { Section } from './Section';

// جدول الحقائق. كل قيمة هنا جاية من src/data/project.ts —
// 🔴 ممنوع يتكتب رقم مباشرة في الملف ده.
export function ProjectFacts({ locale, t }: { locale: Locale; t: Dictionary }) {
  const rows: Array<{ label: string; value: string }> = [
    { label: t.project.labels.units, value: num(PROJECT.totalUnits, locale) },
    {
      label: t.project.labels.areas,
      value: areaRange(PROJECT.areaMinM2, PROJECT.areaMaxM2, locale, t.common.sqm),
    },
    {
      label: t.project.labels.land,
      value: `${num(PROJECT.landAreaM2, locale)} ${t.common.sqm}`,
    },
    { label: t.project.labels.buildings, value: `${num(PROJECT.landSplit.buildingsPercent, locale)}%` },
    {
      label: t.project.labels.landscape,
      value: `${num(PROJECT.landSplit.landscapeAndPoolsPercent, locale)}%`,
    },
    {
      label: t.project.labels.structure,
      value:
        locale === 'ar'
          ? `أرضي + ${num(PROJECT.floors.above, locale)} أدوار`
          : `Ground + ${num(PROJECT.floors.above, locale)} floors`,
    },
    { label: t.project.labels.delivery, value: year(PROJECT.deliveryYear, locale) },
    { label: t.project.labels.finishing, value: PROJECT.finishing[locale] },
    { label: t.project.labels.contract, value: PROJECT.contract[locale] },
    // 🟢 الرقم الوحيد المنشور عن السداد
    {
      label: t.project.labels.downPayment,
      value: `${num(PAYMENT.downPaymentPercent, locale)}%`,
    },
  ];

  return (
    <Section id="project" kicker={t.project.kicker} heading={t.project.heading} lead={t.project.lead} tone="muted">
      <dl className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-4 border-b border-sand-200 py-3.5"
          >
            <dt className="text-ink-700">{row.label}</dt>
            <dd dir="ltr" className="text-end font-semibold text-ink-900">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* شفافية عن البيع على الخريطة — بتبني ثقة بدل ما العميل يكتشفها بنفسه */}
      <p className="mt-8 max-w-2xl rounded-2xl border border-sea-400/30 bg-sea-400/5 p-5 leading-relaxed text-ink-700">
        {t.project.offPlanNote}
      </p>
    </Section>
  );
}
