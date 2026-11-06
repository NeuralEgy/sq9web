import { HAS_LEADERSHIP } from '@/data/leadership';

// ============================================================
// مسارات الصفحات الثابتة.
//
// 🔴 الملف ده موجود عشان المسارات ما تتكتبش كنص في عشر حتت. أي
//    لينك أو sitemap أو فتات خبز بيقرا من هنا، فلو مسار اتغيّر
//    TypeScript بيوقّف البيلد بدل ما الموقع يطلع فيه لينك مكسور.
//
//    مسارات المشاريع مش هنا — دي بتتولّد من src/data/projects،
//    ومسارات الأدلة من src/content/guides. الملف ده للصفحات اللي
//    مالهاش مصدر بيانات.
// ============================================================

export const ROUTES = {
  home: '/',
  philosophy: '/philosophy',
  leadership: '/leadership',
  buying: '/buying',
  faq: '/faq',
  contact: '/contact',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * الصفحات الثابتة اللي بتدخل الـsitemap والمنيو (الرئيسية بتتضاف لوحدها).
 *
 * 🔴 /leadership بتدخل بس لما src/data/leadership.ts يتملا. وهي
 *    فاضية، الصفحة نفسها بترد 404 — فلو دخلت الخريطة كانت هتبقى
 *    لينك مكسور، وجوجل بيحسبها غلطة على الموقع كله.
 */
export const STATIC_PATHS: ReadonlyArray<string> = [
  ROUTES.philosophy,
  ...(HAS_LEADERSHIP ? [ROUTES.leadership] : []),
  ROUTES.buying,
  ROUTES.faq,
  ROUTES.contact,
];
