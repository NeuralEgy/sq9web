import type { Metadata } from 'next';
import { COPY } from '@/content/copy';
import { PROJECT_PATH } from '@/data/projects/aurora-palace';
import { buildMetadata } from '@/lib/seo';
import { AuroraJsonLd } from '@/components/JsonLd';
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
  path: PROJECT_PATH,
  // 🔴 العنوان ده («apartments for sale in Hurghada») كان على الصفحة
  //    الرئيسية وهو اللي بيجيب بحث جوجل. نزل هنا مع المشروع، مش اتشال.
  title: COPY.seo.auroraTitle,
  description: COPY.seo.auroraDescription,
});

// ============================================================
// صفحة Aurora Palace — ده كان محتوى الصفحة الرئيسية بالكامل.
//
// الترتيب مقصود زي ما كان: الزائر الجاي من إعلان بيشوف المشروع
// والأرقام قبل ما يسيب الصفحة، وسؤال «بكام؟» بيتردّ عليه قبل الفوتر
// مش بعده.
//
// 🔴 الصفحة دي هي الحتة الوحيدة في الموقع اللي فيها فورم الحجز
//    (جوّه PriceAndVisit)، وبالتالي الحتة الوحيدة اللي بتكتب في
//    جدول visits. أي نسخة تانية من الفورم في أي صفحة = مسار تاني
//    لازم يتفحص لوحده.
//
// المسار الثابت جاي من PROJECT.slug، فلو اسم المشروع اتغيّر في ملف
// البيانات، الـmetadata والـJSON-LD بيتبعوه — بس اسم الفولدر ده
// لازم يتغيّر بالإيد. التحقق تحت بيوقّف البيلد لو اتفصلوا.
// ============================================================
if (PROJECT_PATH !== '/aurora-palace') {
  throw new Error(
    `PROJECT.slug is "${PROJECT_PATH}" but this route is /aurora-palace — rename src/app/aurora-palace/ to match`,
  );
}

export default function AuroraPalacePage() {
  return (
    <>
      <AuroraJsonLd />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-foam"
      >
        {COPY.common.skipToContent}
      </a>

      <Header variant="project" />

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
