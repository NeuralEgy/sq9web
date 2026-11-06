import type { Metadata } from 'next';
import { DEVELOPER } from '@/data/project';
import { absolute, IS_PRODUCTION_HOST, SITE_URL } from './site';

// ============================================================
// بناء الـmetadata لأي صفحة. كل الصفحات بتعدّي من هنا عشان
// الـcanonical وOpenGraph يبقوا متسقين.
// ============================================================

export function buildMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: DEVELOPER.name,
      locale: 'en_US',
      url: absolute(path),
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    // 🔴 نسخة المراجعة بتاخد noindex على مستوى الصفحة كمان، مش robots.txt
    //    بس — في حالة إن حد عمل لينك مباشر لصفحة جوّه.
    robots: IS_PRODUCTION_HOST
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        }
      : { index: false, follow: false },
  };
}
