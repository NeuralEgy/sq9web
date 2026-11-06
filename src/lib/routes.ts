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
  faq: '/faq',
  contact: '/contact',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

/** الصفحات الثابتة اللي بتدخل الـsitemap (الرئيسية بتتضاف لوحدها) */
export const STATIC_PATHS: ReadonlyArray<string> = [ROUTES.faq, ROUTES.contact];
