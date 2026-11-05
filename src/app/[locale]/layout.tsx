import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { LOCALES, X_DEFAULT_LOCALE, dirOf, htmlLangOf, isLocale } from '@/i18n/config';
import { DEVELOPER, PROJECT } from '@/data/project';

// خط واحد بيغطي العربي واللاتيني — أرخص على الموبايل من تحميل خطين.
// display: swap عشان النص يظهر فورًا بخط النظام لحد ما الخط ينزل.
const body = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://square9.eg';

// بيولّد نسخة ثابتة لكل لغة وقت البيلد
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const isAr = locale === 'ar';

  return {
    metadataBase: new URL(SITE_URL),
    title: isAr
      ? `${PROJECT.name} — شقق للبيع في مجاويش، الغردقة | ${DEVELOPER.name.ar}`
      : `${PROJECT.name} — Apartments for Sale in Magawish, Hurghada | ${DEVELOPER.name.en}`,
    description: isAr
      ? `${PROJECT.totalUnits} وحدة في منطقة مجاويش بالغردقة — ستوديو وغرفة وغرفتين، تشطيب كامل، تسليم ${PROJECT.deliveryYear}. احجز زيارة للشقة النموذج.`
      : `${PROJECT.totalUnits} residences in Magawish, Hurghada — studios, one and two bedrooms. Fully finished, delivered ${PROJECT.deliveryYear}. Book a visit to the show apartment.`,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: '/ar',
        en: '/en',
        'x-default': `/${X_DEFAULT_LOCALE}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={htmlLangOf(locale)} dir={dirOf(locale)} className={body.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

// لو جات لغة مش في القايمة، نطلّع 404 مش نسخة افتراضية صامتة
export const dynamicParams = false;
