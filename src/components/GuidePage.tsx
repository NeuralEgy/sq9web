import Link from 'next/link';
import { COPY } from '@/content/copy';
import type { Guide } from '@/content/guides';
import { DEVELOPER, whatsappUrl } from '@/data/company';
import { PROJECT, PROJECT_PATH } from '@/data/projects/aurora-palace';
import { VISIT_HREF } from '@/lib/nav';
import { BreadcrumbJsonLd } from './JsonLd';
import { Footer } from './Footer';
import { Header } from './Header';
import { RichText } from './RichText';
import { WhatsAppFab } from './WhatsAppFab';

// ============================================================
// الشكل المشترك لصفحات الأدلة.
//
// كل صفحة بتجاوب على سؤال حقيقي من جوجل، وبتنتهي بنفس الخطوة:
// زيارة أو واتساب.
//
// 🔴 الهيدر والفوتر بياخدوا base=PROJECT_PATH مش "/" — الأقسام اللي
//    في اللينكات دي (#residences · #life · #location) على صفحة
//    المشروع، مش على الرئيسية. لو سابوا "/" الزائر بيروح للرئيسية
//    وبيدوّر على قسم مش موجود هناك.
// ============================================================

export function GuidePage({ guide }: { guide: Guide }) {
  const waText = `Hello, I would like details about ${PROJECT.name}`;

  return (
    <>
      <BreadcrumbJsonLd pageName={guide.h1} path={`/${guide.slug}`} />
      <Header variant="project" base={PROJECT_PATH} />

      <main>
        <article className="shell py-14 lg:py-20">
          {/* فتات الخبز المرئي — مش بس في البيانات المنظّمة */}
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <Link href="/" className="transition hover:text-sea">
              {DEVELOPER.name}
            </Link>
            <span className="mx-2 text-ink-muted/50">/</span>
            <span className="text-ink">{guide.h1}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7vw,5rem)] font-light leading-[1.02]">
            {guide.h1}
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-ink-soft">
            {guide.intro}
          </p>

          <div className="mt-16 max-w-2xl space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-light">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4 text-lg font-light leading-relaxed text-ink-soft">
                  {section.body.map((p, i) => (
                    <p key={i}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* نفس الخطوة في كل صفحة: زيارة أو واتساب */}
          <div className="mt-16 max-w-2xl rounded-sm bg-ink px-7 py-12 text-foam sm:px-10">
            <p className="text-[12px] uppercase tracking-[0.26em] text-sun">
              {COPY.visit.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.05]">
              {COPY.visit.titleLead} <em className="italic text-sun">{COPY.visit.titleAccent}</em>
            </h2>
            <p className="mt-5 leading-relaxed text-foam/70">{COPY.pricing.closing}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={VISIT_HREF}
                className="rounded-full bg-sun px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:bg-foam"
              >
                {COPY.nav.visit}
              </Link>
              <a
                href={whatsappUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foam/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:bg-foam/10"
              >
                {COPY.hero.ctaWhatsapp}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="project" base={PROJECT_PATH} />
      <WhatsAppFab />
    </>
  );
}
