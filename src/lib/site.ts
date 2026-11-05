import { LOCALES, type Locale } from '@/i18n/config';

// ============================================================
// إعدادات الموقع المشتركة — المصدر الوحيد للعناوين المطلقة.
// أي حتة محتاجة URL كامل (canonical · hreflang · sitemap · JSON-LD · OG)
// بتعدّي من هنا، عشان ما يحصلش اختلاف بين واحدة والتانية.
// ============================================================

/** بيتشال منه أي / في الآخر عشان ما يحصلش // في النص */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://square9.eg').replace(
  /\/+$/,
  '',
);

export function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * صفحات الموقع. المسار بيتكوّن من البادئة (/ar أو /en) + الـslug.
 * الـslug إنجليزي في اللغتين عن قصد: أسهل في النسخ واللصق على واتساب،
 * وما بيتحوّلش لرموز %D8%B4 في الشير.
 */
export const ROUTES = {
  home: '',
  hurghadaApartments: '/hurghada-apartments-for-sale',
  magawish: '/magawish',
  offPlan: '/off-plan-payment',
} as const;

export type RouteKey = keyof typeof ROUTES;

export function pathFor(locale: Locale, route: RouteKey): string {
  return `/${locale}${ROUTES[route]}`;
}

/** خريطة hreflang لصفحة واحدة بكل لغاتها */
export function languageAlternates(route: RouteKey): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const locale of LOCALES) entries[locale] = pathFor(locale, route);
  // x-default بيروح للإنجليزي: الزائر اللي مش عربي ولا إنجليزي يقرا الإنجليزي
  entries['x-default'] = pathFor('en', route);
  return entries;
}
