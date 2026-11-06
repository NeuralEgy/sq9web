import type { Metadata } from 'next';
import { COPY } from '@/content/copy';
import { buildMetadata } from '@/lib/seo';
import { HomeJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { CompanyHero } from '@/components/CompanyHero';
import { Vision } from '@/components/Vision';
import { Philosophy } from '@/components/Philosophy';
import { Strengths } from '@/components/Strengths';
import { ProjectsIndex } from '@/components/ProjectsIndex';
import { FounderNote } from '@/components/FounderNote';
import { Board } from '@/components/Board';
import { Where } from '@/components/Where';
import { SalesDesk } from '@/components/SalesDesk';
import { Questions } from '@/components/Questions';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';

export const metadata: Metadata = buildMetadata({
  path: '/',
  title: COPY.seo.homeTitle,
  description: COPY.seo.homeDescription,
});

// ============================================================
// الصفحة الرئيسية — Square9 الشركة.
//
// الصفحة دي كانت صفحة Aurora Palace، ونقلت بالكامل لـ/aurora-palace.
// السبب إن الزائر اللي بيشتري وحدة تسليمها ٢٠٢٨ سؤاله الأول مش
// «الوحدة كام متر» — سؤاله «أنا بثق في مين». فالترتيب تحت بيجاوب
// بالترتيب ده:
//
//   مين إحنا  →  بنؤمن بإيه  →  بنقرّر إزاي  →  نقدر نوريك إيه
//   (وإيه اللي مش نقدر)  →  مين وراه  →  بنبني إيه  →  فين
//   →  مين بيرد عليك  →  وإيه اللي مش هنجاوبه  →  اتكلم معانا
//
// 🔴 قسمين من دول دلوقتي **مش ظاهرين خالص**: المؤسِّس والمجلس.
//    مش نسيان — مفيش ولا اسم منشور ولا متسلّم من العميل، والقسمين
//    بيرجّعوا null لحد ما src/data/leadership.ts يتملا. أسامي
//    مخترعة أو «قريبًا» أسوأ بكتير من قسم مش موجود.
//    شوف COMPANY_NOT_PUBLISHED في src/data/company.ts.
//
// 🔴 وقسم المبيعات (SalesDesk) ظاهر، لأنه مبني على منشور بالكامل.
//    اللي جوّاه وفاضي هو أسامي الفريق بس — في src/data/sales.ts.
// ============================================================
export default function HomePage() {
  return (
    <>
      <HomeJsonLd />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-foam"
      >
        {COPY.common.skipToContent}
      </a>

      <Header variant="company" />

      <main id="main">
        <CompanyHero />
        <Vision />
        <Philosophy />
        <Strengths />
        {/* الاتنين دول بيرجّعوا null لحد ما src/data/leadership.ts يتملا */}
        <FounderNote />
        <Board />
        <ProjectsIndex />
        <Where />
        <SalesDesk />
        <Questions />
        <Connect />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
