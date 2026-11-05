import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { ProjectFacts } from '@/components/ProjectFacts';
import { Units } from '@/components/Units';
import { Amenities } from '@/components/Amenities';
import { LocationSection } from '@/components/LocationSection';
import { Experience } from '@/components/Experience';
import { PriceAndVisit } from '@/components/PriceAndVisit';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';

// الصفحة الرئيسية — صفحة واحدة طويلة بمراسي، زي موقعهم الحالي.
// الترتيب مقصود: الزائر الجاي من إعلان بيشوف المشروع والأرقام قبل ما يسيب الصفحة،
// وسؤال «بكام؟» بيتردّ عليه قبل الفوتر مش بعده.
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sand-50"
      >
        {t.common.skipToContent}
      </a>

      <Header locale={locale} t={t} />

      <main id="main">
        <Hero locale={locale} t={t} />
        <Story t={t} />
        <ProjectFacts locale={locale} t={t} />
        <Units locale={locale} t={t} />
        <Amenities locale={locale} t={t} />
        <LocationSection locale={locale} t={t} />
        <Experience t={t} />
        <PriceAndVisit locale={locale} t={t} />
      </main>

      <Footer locale={locale} t={t} />
      <WhatsAppFab locale={locale} t={t} />
    </>
  );
}
