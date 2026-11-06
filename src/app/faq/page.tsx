import type { Metadata } from 'next';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { FAQ_GROUPS } from '@/content/faq';
import { whatsappUrl } from '@/data/company';
import { buildMetadata } from '@/lib/seo';
import { VISIT_HREF } from '@/lib/nav';
import { ROUTES } from '@/lib/routes';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { RichText } from '@/components/RichText';
import { WhatsAppFab } from '@/components/WhatsAppFab';

const WA_TEXT = 'Hello, I have a question about Aurora Palace';

export const metadata: Metadata = buildMetadata({
  path: ROUTES.faq,
  title: COPY.faqPage.seoTitle,
  description: COPY.faqPage.seoDescription,
});

// ============================================================
// صفحة الأسئلة.
//
// 🔴 نص الأسئلة هنا بيجاوب بـ«مش منشور». ده مقصود ومش ضعف: الزائر
//    فاتح أربع تابات لأربع مطوّرين، والتلاتة التانيين كاتبين رقم.
//    اللي بيفضل في دماغه آخر اليوم هو اللي قال له ليه مفيش رقم.
//
// الأسئلة نفسها في src/content/faq.ts — القاعدة اللي بتحكمها مكتوبة
// فوق الملف ده، اقراها قبل ما تزوّد سؤال.
// ============================================================
export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <BreadcrumbJsonLd pageName={`${COPY.faqPage.title} ${COPY.faqPage.titleAccent}`} path={ROUTES.faq} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-foam"
      >
        {COPY.common.skipToContent}
      </a>

      <Header variant="company" base="/" />

      <main id="main">
        <section className="shell py-14 lg:py-20">
          <Eyebrow>{COPY.faqPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[1.02]">
            {COPY.faqPage.title}{' '}
            <em className="italic text-sea">{COPY.faqPage.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-ink-soft">
            {COPY.faqPage.intro}
          </p>
        </section>

        {FAQ_GROUPS.map((group) => (
          <section key={group.title} className="shell border-t border-hair py-14 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr] lg:gap-20">
              <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-light leading-tight">
                {group.title}
              </h2>

              <dl className="space-y-12">
                {group.items.map((item) => (
                  <div key={item.id} id={item.id} className="scroll-mt-28">
                    <dt className="font-display text-[clamp(1.35rem,2.2vw,1.8rem)] font-light leading-snug text-ink">
                      {item.question}
                    </dt>
                    <dd className="mt-4 max-w-2xl space-y-4 leading-relaxed text-ink-soft">
                      {item.answer.map((p, i) => (
                        <p key={i}>
                          <RichText text={p} />
                        </p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}

        <section className="shell pb-8 pt-10 lg:pb-16">
          <div className="rounded-sm bg-ink px-7 py-14 text-foam sm:px-12">
            <p className="text-[12px] uppercase tracking-[0.26em] text-sun">
              {COPY.faqPage.stillAsking}
            </p>
            <p className="mt-6 max-w-2xl text-[clamp(1.1rem,1.9vw,1.45rem)] font-light leading-relaxed text-foam/80">
              {COPY.faqPage.stillAskingBody}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={VISIT_HREF}
                className="rounded-full bg-sun px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:bg-foam"
              >
                {COPY.nav.visit}
              </Link>
              <a
                href={whatsappUrl(WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foam/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:bg-foam/10"
              >
                {COPY.hero.ctaWhatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="company" base="/" />
      <WhatsAppFab />
    </>
  );
}
