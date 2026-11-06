import type { MetadataRoute } from 'next';
import { absolute, IS_PRODUCTION_HOST } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // 🔴 نسخة المراجعة (sq9web.hurghada.cloud) مقفولة على الزواحف بالكامل.
  //    محتوى مكرر على دومينين بيأذي الموقع الحقيقي لما ينزل.
  if (!IS_PRODUCTION_HOST) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

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
