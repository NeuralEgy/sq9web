import type { MetadataRoute } from 'next';
import { absolute, ALL_PATHS } from '@/lib/site';

// خريطة الموقع — لغة واحدة، فمفيش بدائل لغة.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ALL_PATHS.map((path) => ({
    url: absolute(path),
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));
}
