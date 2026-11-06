import { GUIDE_LIST } from '@/content/guides';

// ============================================================
// إعدادات الموقع المشتركة — المصدر الوحيد للعناوين المطلقة.
// أي حتة محتاجة URL كامل (canonical · sitemap · JSON-LD · OG)
// بتعدّي من هنا، عشان ما يحصلش اختلاف بين واحدة والتانية.
//
// الموقع إنجليزي بلغة واحدة، فمفيش بادئة لغة ومفيش hreflang —
// المسارات نضيفة: / و /magawish وهكذا.
// ============================================================

/** الدومين الحقيقي للعميل. أي استضافة تانية = نسخة تجريبية. */
export const PRODUCTION_URL = 'https://square9.eg';

/** بيتشال منه أي / في الآخر عشان ما يحصلش // في النص */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_URL).replace(/\/+$/, '');

/**
 * 🔴 هل النسخة دي هي الموقع الحقيقي ولا نسخة عرض؟
 *
 * النسخة اللي على sq9web.hurghada.cloud نسخة للمراجعة. لو جوجل
 * فهرسها، بيبقى عندنا نسختين بنفس المحتوى بالظبط — وده بيأذي ترتيب
 * الموقع الحقيقي لما ينزل، وكمان بيسرّب موقع عميل لسه ما اتعلنش.
 *
 * فأي دومين غير square9.eg بياخد noindex و robots فيه Disallow: /
 * تلقائيًا. مفيش خطوة يدوية حد ممكن ينساها.
 */
export const IS_PRODUCTION_HOST = SITE_URL === PRODUCTION_URL;

export function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** كل مسارات الموقع — الرئيسية وصفحات الأدلة */
export const ALL_PATHS: ReadonlyArray<string> = ['/', ...GUIDE_LIST.map((g) => `/${g.slug}`)];
