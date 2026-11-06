import type { Metadata } from 'next';
import { COPY } from '@/content/copy';
import { buildMetadata } from '@/lib/seo';
import { HomeJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { ProjectFacts } from '@/components/ProjectFacts';
import { Units } from '@/components/Units';
import { Life } from '@/components/Life';
import { LocationSection } from '@/components/LocationSection';
import { Personas } from '@/components/Personas';
import { PriceAndVisit } from '@/components/PriceAndVisit';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';

export const metadata: Metadata = buildMetadata({
  path: '/',
  title: COPY.seo.homeTitle,
  description: COPY.seo.homeDescription,
});

// الصفحة الرئيسية — صفحة واحدة طويلة بمراسي.
// الترتيب مقصود: الزائر الجاي من إعلان بيشوف المشروع والأرقام قبل ما
// يسيب الصفحة، وسؤال «بكام؟» بيتردّ عليه قبل الفوتر مش بعده.
export default function HomePage() {
  return (
    <>
      <HomeJsonLd />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        {COPY.common.skipToContent}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Story />
        <ProjectFacts />
        <Units />
        <Life />
        <LocationSection />
        <Personas />
        <PriceAndVisit />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
