import type { Metadata } from 'next';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { PROJECT_PATH } from '@/data/projects/aurora-palace';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/routes';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { RichText } from '@/components/RichText';
import { WhatsAppFab } from '@/components/WhatsAppFab';

export const metadata: Metadata = buildMetadata({
  path: ROUTES.philosophy,
  title: COPY.philosophyPage.seoTitle,
  description: COPY.philosophyPage.seoDescription,
});

// ============================================================
// صفحة الفلسفة.
//
// الأربع مبادئ موجودة على الرئيسية في سطر واحد لكل واحد. الصفحة
// دي هي النسخة اللي بتسندهم.
//
// 🔴 كل مبدأ هنا تحته «proof» — رقم منشور. ودي القاعدة اللي
//    بتمنع الصفحة تتحوّل لكلام إنشاء: «Community» من غير «١٤٠
//    وحدة ومدخل واحد» جنبها مجرد كلمة أي موقع يقدر يكتبها.
//
//    لو حد زوّد مبدأ خامس من غير دليل منشور، يرجّعه سطر على
//    الرئيسية ويسيب الصفحة دي للمبادئ اللي ورا كل واحد منها رقم.
// ============================================================
export default function PhilosophyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        pageName={`${COPY.philosophyPage.title} ${COPY.philosophyPage.titleAccent}`}
        path={ROUTES.philosophy}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-foam"
      >
        {COPY.common.skipToContent}
      </a>

      <Header variant="company" base="/" />

      <main id="main">
        <section className="shell py-14 lg:py-20">
          <Eyebrow>{COPY.philosophyPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,8vw,6rem)] font-light leading-[1.0]">
            {COPY.philosophyPage.title}{' '}
            <em className="italic text-sea">{COPY.philosophyPage.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-ink-soft">
            {COPY.philosophyPage.intro}
          </p>
        </section>

        {COPY.philosophyPage.principles.map((p, i) => (
          <section
            key={p.title}
            className={`border-t border-hair py-16 lg:py-24 ${i % 2 === 1 ? 'bg-shallow' : ''}`}
          >
            <div className="shell grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
              <div>
                <span className="font-display text-sm text-sea">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-light leading-tight">
                  {p.title}
                </h2>
                <p className="mt-4 max-w-xs text-ink-muted">{p.line}</p>
              </div>

              <div>
                <div className="max-w-2xl space-y-5 text-lg font-light leading-relaxed text-ink-soft">
                  {p.body.map((para, j) => (
                    <p key={j}>
                      <RichText text={para} />
                    </p>
                  ))}
                </div>

                {/* الدليل — الرقم المنشور اللي بيسند المبدأ */}
                <p className="mt-9 inline-block border-t border-sea/30 pt-3 text-[12px] uppercase tracking-[0.18em] text-sea">
                  {p.proof}
                </p>
              </div>
            </div>
          </section>
        ))}

        <section className="shell border-t border-hair py-16 lg:py-24">
          <div className="flex flex-wrap gap-3">
            <Link
              href={PROJECT_PATH}
              className="rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
            >
              {COPY.company.hero.ctaProject}
            </Link>
            <Link
              href={ROUTES.buying}
              className="rounded-full border border-ink/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-sea hover:text-sea"
            >
              {COPY.nav.buying}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
