import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { absolute, languageAlternates, pathFor, SITE_URL, type RouteKey } from './site';
import { DEVELOPER } from '@/data/project';

// ============================================================
// بناء الـmetadata لأي صفحة. كل الصفحات بتعدّي من هنا عشان
// الـcanonical والـhreflang وOpenGraph يبقوا متسقين — أكتر غلطة
// شائعة في مواقع بلغتين إن صفحة تنسى تقول لجوجل إن ليها أخت.
// ============================================================

export function buildMetadata({
  locale,
  route,
  title,
  description,
}: {
  locale: Locale;
  route: RouteKey;
  title: string;
  description: string;
}): Metadata {
  const path = pathFor(locale, route);
  const url = absolute(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(route),
    },
    openGraph: {
      type: 'website',
      siteName: DEVELOPER.name[locale],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_EG',
      url,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}
