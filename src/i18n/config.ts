// ============================================================
// إعداد اللغتين
//
// السوق: مصري وخليجي (عربي) + أوروبي (إنجليزي). الاتنين مهمين، فمفيش لغة
// «أساسية» بتاخد الجذر والتانية تحت فرع — كل لغة لها بادئة صريحة:
//   /ar/...  و  /en/...
// والجذر `/` بيحوّل على حسب Accept-Language. كده الـhreflang نظيف
// ومحدش بياخد نسخة مش بتاعته من إعلان.
// ============================================================

export const LOCALES = ['ar', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

/** العربي هو الافتراضي لما المتصفح ما يقولش حاجة واضحة — السوق الأكبر مصري */
export const DEFAULT_LOCALE: Locale = 'ar';

/** اللغة اللي جوجل بياخدها كنسخة محايدة للزوار اللي مش في الاتنين */
export const X_DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as ReadonlyArray<string>).includes(value);
}

/** اتجاه الكتابة — العربي من اليمين */
export function dirOf(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/** وسم اللغة الكامل للـ<html lang> و hreflang */
export function htmlLangOf(locale: Locale): string {
  return locale === 'ar' ? 'ar-EG' : 'en';
}
