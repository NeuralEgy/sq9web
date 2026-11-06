import type { Metadata } from 'next';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/routes';
import { VISIT_HREF } from '@/lib/nav';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { RichText } from '@/components/RichText';
import { WhatsAppFab } from '@/components/WhatsAppFab';

export const metadata: Metadata = buildMetadata({
  path: ROUTES.buying,
  title: COPY.buyingPage.seoTitle,
  description: COPY.buyingPage.seoDescription,
});

// ============================================================
// صفحة الشرا — الخطوات من أول زيارة لحد المفتاح.
//
// 🔴 الصفحة دي **مش** نفس دليل /off-plan-payment، ولازم تفضل كده.
//    الدليل بيشرح يعني إيه بيع على الخريطة ككل وبيدّي ليستة أسئلة.
//    الصفحة دي بتقول الترتيب اللي بيحصل بيه الشرا في Aurora Palace
//    بالتحديد. صفحتين بيقولوا نفس الكلام = doorway pages، وجوجل
//    بيعاقب عليها — فأي كلام يتزوّد هنا يتشاف الأول إنه مش هناك.
//
// 🔴 و«note» تحت الخطوة هي الحتة الصعبة فيها، مش تحذير قانوني.
//    خطوة السعر وخطوة السداد ليهم note لأن دول المكانين اللي
//    الزائر بيتلغبط فيهم، والموقع كله مبني على إنه يقولهم بصوت
//    عالي بدل ما يعدّيهم.
// ============================================================
export default function BuyingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        pageName={`${COPY.buyingPage.title} ${COPY.buyingPage.titleAccent}`}
        path={ROUTES.buying}
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
          <Eyebrow>{COPY.buyingPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,8vw,6rem)] font-light leading-[1.0]">
            {COPY.buyingPage.title}{' '}
            <em className="italic text-sea">{COPY.buyingPage.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-ink-soft">
            {COPY.buyingPage.intro}
          </p>
        </section>

        <ol className="shell">
          {COPY.buyingPage.steps.map((step, i) => (
            <li key={step.title} className="border-t border-hair py-12 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr] lg:gap-20">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-sea">
                    {COPY.buyingPage.stepLabel} {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light leading-tight">
                    {step.title}
                  </h2>
                </div>

                <div>
                  <div className="max-w-2xl space-y-4 text-lg font-light leading-relaxed text-ink-soft">
                    {step.body.map((p, j) => (
                      <p key={j}>
                        <RichText text={p} />
                      </p>
                    ))}
                  </div>

                  {step.note ? (
                    <div className="mt-7 max-w-2xl border-l-2 border-sea bg-shallow px-6 py-5">
                      <p className="leading-relaxed text-ink-soft">
                        <RichText text={step.note} />
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <section className="shell pb-8 pt-10 lg:pb-16">
          <div className="rounded-sm bg-ink px-7 py-14 text-foam sm:px-12">
            <p className="text-[12px] uppercase tracking-[0.26em] text-sun">
              {COPY.buyingPage.closingTitle}
            </p>
            <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.9vw,1.45rem)] font-light leading-relaxed text-foam/80">
              {COPY.buyingPage.closing}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={VISIT_HREF}
                className="rounded-full bg-sun px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:bg-foam"
              >
                {COPY.buyingPage.visitCta}
              </Link>
              <Link
                href={ROUTES.faq}
                className="rounded-full border border-foam/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:bg-foam/10"
              >
                {COPY.buyingPage.faqCta}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
