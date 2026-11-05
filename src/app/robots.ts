import type { MetadataRoute } from 'next';
import { absolute } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // مفيش داعي يزحف على الـAPI — مش صفحات، ونقطة الحجز POST بس
      disallow: ['/api/'],
    },
    sitemap: absolute('/sitemap.xml'),
  };
}
