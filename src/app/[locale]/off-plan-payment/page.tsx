import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, LOCALES } from '@/i18n/config';
import { getDictionary } from '@/i18n';
import { buildMetadata } from '@/lib/seo';
import { LandingPage } from '@/components/LandingPage';

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
  const page = getDictionary(locale).landing.offPlan;

  return buildMetadata({
    locale,
    route: 'offPlan',
    title: page.title,
    description: page.description,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  return <LandingPage locale={locale} t={t} route="offPlan" content={t.landing.offPlan} />;
}
