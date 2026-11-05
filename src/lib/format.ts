import type { Locale } from '@/i18n/config';

// ============================================================
// تنسيق الأرقام.
//
// القرار الحالي: **أرقام لاتينية (140) في الواجهة في اللغتين.**
// السبب: مواقع العقارات المصرية كلها كده، والمساحات والمسافات بتتقرا أسرع،
// وبتتنسخ صح لما العميل يبعتها على واتساب.
//
// لو العميل طلب أرقام هندية (١٤٠) في النسخة العربية، التغيير سطر واحد تحت بس —
// عشان كده كل رقم في الواجهة بيعدّي من هنا، ومحدش بيكتب رقم مباشرة في JSX.
// ============================================================

const USE_ARABIC_INDIC_DIGITS = false;

/** رقم للعرض */
export function num(value: number, locale: Locale): string {
  if (locale === 'ar' && USE_ARABIC_INDIC_DIGITS) {
    return value.toLocaleString('ar-EG');
  }
  return value.toLocaleString('en-US');
}

/** سنة — من غير فاصلة الألوف (2028 مش 2,028) */
export function year(value: number, locale: Locale): string {
  if (locale === 'ar' && USE_ARABIC_INDIC_DIGITS) {
    return value.toLocaleString('ar-EG', { useGrouping: false });
  }
  return String(value);
}

/** نطاق مساحة زي «54 – 80 م²» */
export function areaRange(min: number, max: number, locale: Locale, unit: string): string {
  return `${num(min, locale)} – ${num(max, locale)} ${unit}`;
}
