import type { Locale } from './config';
import ar from './dictionaries/ar';
import en from './dictionaries/en';
import landingAr from './dictionaries/landing.ar';
import landingEn from './dictionaries/landing.en';

// محتوى صفحات الهبوط في ملفات منفصلة (طويل)، بس بيتضم هنا
// فالواجهة بتشوف قاموس واحد: t.landing.magawish.h1 وهكذا.
const arFull = { ...ar, landing: landingAr };
const enFull = { ...en, landing: landingEn };

/**
 * بيحوّل أنواع النصوص الحرفية (as const) لـ string عادي، عشان القاموسين
 * يبقى لهم نفس الشكل بالظبط. لو مفتاح ناقص في لغة، TypeScript بيوقّف البيلد —
 * ودي الحماية إن نسخة لغة تطلع ناقصة قسم كامل.
 */
type DeepString<T> = T extends string
  ? string
  : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepString<U>>
    : { [K in keyof T]: DeepString<T[K]> };

export type Dictionary = DeepString<typeof arFull>;

const dictionaries: Record<Locale, Dictionary> = { ar: arFull, en: enFull };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
