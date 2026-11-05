import type { Locale } from './config';
import ar from './dictionaries/ar';
import en from './dictionaries/en';

/**
 * بيحوّل أنواع النصوص الحرفية (as const) لـ string عادي، عشان القاموسين
 * يبقى لهم نفس الشكل بالظبط. لو مفتاح ناقص في لغة، TypeScript بيوقّف البيلد —
 * ودي الحماية إن نسخة لغة تطلع ناقصة قسم كامل.
 */
type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Dictionary = DeepString<typeof ar>;

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
