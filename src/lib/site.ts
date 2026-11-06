import { GUIDE_LIST } from '@/content/guides';

// ============================================================
// إعدادات الموقع المشتركة — المصدر الوحيد للعناوين المطلقة.
// أي حتة محتاجة URL كامل (canonical · sitemap · JSON-LD · OG)
// بتعدّي من هنا، عشان ما يحصلش اختلاف بين واحدة والتانية.
//
// الموقع إنجليزي بلغة واحدة، فمفيش بادئة لغة ومفيش hreflang —
// المسارات نضيفة: / و /magawish وهكذا.
// ============================================================

/** بيتشال منه أي / في الآخر عشان ما يحصلش // في النص */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://square9.eg').replace(
  /\/+$/,
  '',
);

export function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** كل مسارات الموقع — الرئيسية وصفحات الأدلة */
export const ALL_PATHS: ReadonlyArray<string> = ['/', ...GUIDE_LIST.map((g) => `/${g.slug}`)];
