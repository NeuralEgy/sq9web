import type { MetadataRoute } from 'next';
import { LOCALES } from '@/i18n/config';
import { absolute, languageAlternates, pathFor, ROUTES, type RouteKey } from '@/lib/site';

// خريطة الموقع — كل صفحة بكل لغاتها، ومعاها بدائل اللغة
// عشان جوجل يعرض النسخة الصح للزائر الصح.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(ROUTES) as RouteKey[];
  const lastModified = new Date();

  return routes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: absolute(pathFor(locale, route)),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: route === 'home' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(route)).map(([key, path]) => [key, absolute(path)]),
        ),
      },
    })),
  );
}
