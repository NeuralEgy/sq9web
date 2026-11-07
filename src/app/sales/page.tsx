import type { Metadata } from 'next';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { HEAD_OFFICE } from '@/data/company';
import { LOCATION, VISIT_SLOTS } from '@/data/projects/aurora-palace';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/routes';
import { VISIT_HREF } from '@/lib/nav';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { RichText } from '@/components/RichText';
import { SalesChannels } from '@/components/SalesChannels';
import { SalesTeam } from '@/components/SalesTeam';
import { WhatsAppFab } from '@/components/WhatsAppFab';

export const metadata: Metadata = buildMetadata({
  path: ROUTES.sales,
  title: COPY.salesPage.seoTitle,
  description: COPY.salesPage.seoDescription,
});

// ============================================================
// صفحة /sales — مكتب المبيعات.
//
// 🔴 تلات صفحات بتتكلم عن التعامل معانا، وكل واحدة ليها شغلة
//    مختلفة. الفرق ده لازم يفضل واضح، مش بس عشان الزائر — عشان
//    جوجل بيحسب الصفحتين اللي بيقولوا نفس الكلام doorway pages
//    وبيعاقب عليهم:
//
//      /buying   الترتيب — ست خطوات من أول زيارة لحد المفتاح
//      /contact  الدليل — الرقم، الإيميل، العنوان، السوشيال
//      /sales    المكتب — موجود لإيه، مين بيرد، إمتى، وبيمسك إيه
//
//    فالصفحة دي ما بتشرحش خطوات الشرا وما بتعيدش ليستة القنوات
//    كدليل؛ بتقول وظيفة كل قناة، ومواعيد الزيارة، والأربع حاجات
//    اللي المكتب ماسكها والموقع مش ماسكها — وبعدين بتشاور على
//    الصفحتين التانيين.
//
// 🔴 ومفيش فورم هنا. الفورم في حتة واحدة بس في الموقع — قسم
//    الزيارة على صفحة المشروع — وهي الوحيدة اللي بتكتب في جدول
//    visits.
//
// 🔴 ومفيش مواعيد عمل. مواعيد العمل مش منشورة، واللي منشور هو
//    مواعيد الزيارة الأربعة. القسم بيقول الفرق ده بصراحة بدل ما
//    الزائر يسافر ويلاقي المكتب مقفول.
// ============================================================
export default function SalesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        pageName={`${COPY.salesPage.title} ${COPY.salesPage.titleAccent}`}
        path={ROUTES.sales}
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
          <Eyebrow>{COPY.salesPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,8vw,6rem)] font-light leading-[1.0]">
            {COPY.salesPage.title}{' '}
            <em className="italic text-sea">{COPY.salesPage.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-ink-soft">
            {COPY.salesPage.intro}
          </p>
        </section>

        {/* ===== المكتب موجود لإيه ===== */}
        <section className="border-t border-hair bg-shallow py-16 lg:py-24">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
              {COPY.salesPage.purposeTitle}
            </h2>
            <div className="max-w-2xl space-y-5 text-lg font-light leading-relaxed text-ink-soft">
              {COPY.salesPage.purpose.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ===== القنوات التلاتة ===== */}
        <section className="shell border-t border-hair py-16 lg:py-24">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
            {COPY.salesPage.channelsTitle}
          </h2>
          {/* 🔴 الإفصاح جوّه القسم نفسه، فوق القنوات — عشان يتقرا
              قبل ما الزائر يدوس على الواتساب، مش بعده */}
          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-ink-soft">
            {COPY.salesPage.channelsNote}
          </p>

          <div className="mt-12">
            <SalesChannels withNotes />
          </div>
        </section>

        {/* ===== الزيارة والمكتب ===== */}
        <section className="shell border-t border-hair py-16 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
                {COPY.salesPage.visitTitle}
              </h2>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-ink">
                {COPY.salesPage.visitLead}
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {VISIT_SLOTS.map((slot) => (
                  <li
                    key={slot.value}
                    className="border-t border-hair pt-4 font-display text-[clamp(1.3rem,2.2vw,1.8rem)] font-light"
                  >
                    {slot.label}
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-md leading-relaxed text-ink-muted">
                {COPY.salesPage.visitBody}
              </p>

              <Link
                href={VISIT_HREF}
                className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
              >
                {COPY.salesPage.visitCta}
              </Link>
            </div>

            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
                {COPY.salesPage.officeTitle}
              </h2>
              <p className="mt-6 font-display text-2xl font-light leading-snug">
                {HEAD_OFFICE.address}
              </p>
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-b border-sea/40 pb-0.5 text-[12px] uppercase tracking-[0.16em] text-sea transition hover:border-sea"
              >
                {COPY.salesPage.mapCta}
              </a>
              <p className="mt-8 max-w-md leading-relaxed text-ink-muted">
                {COPY.salesPage.officeNote}
              </p>
            </div>
          </div>
        </section>

        {/* ===== التشك ليست ===== */}
        <section className="border-t border-hair bg-shallow py-16 lg:py-24">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
                {COPY.salesPage.askTitle}
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">
                {COPY.salesPage.askLead}
              </p>
            </div>

            <div>
              {/* ليستة مرقّمة — تشك ليست تتاخد مع الزائر، مش شرح.
                  الشرح الكامل لكل واحدة في خطوتها على /buying. */}
              <ol className="space-y-6">
                {COPY.salesPage.ask.map((item, i) => (
                  <li key={i} className="flex gap-5 border-t border-hair pt-5">
                    <span className="shrink-0 font-display text-sm text-sea">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="max-w-2xl text-lg font-light leading-relaxed text-ink-soft">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-9 max-w-xl text-ink-muted">
                {COPY.salesPage.askNote}{' '}
                <Link
                  href={ROUTES.buying}
                  className="border-b border-sea/40 pb-0.5 text-sea transition hover:border-sea"
                >
                  {COPY.salesPage.buyingCta}
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ===== فريق المبيعات — بيختفي لحد ما الأسامي توصل ===== */}
        <SalesTeam />

        {/* ===== اللي مش منشور عن المكتب ===== */}
        <section className="shell border-t border-hair py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
              {COPY.salesPage.pendingTitle}
            </h2>
            <div>
              <ul className="space-y-5">
                {COPY.salesPage.pending.map((item, i) => (
                  <li
                    key={i}
                    className="max-w-2xl border-t border-hair pt-5 text-lg font-light leading-relaxed text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-9 max-w-2xl text-ink-muted">{COPY.salesPage.pendingNote}</p>
            </div>
          </div>
        </section>

        {/* ===== الخاتمة ===== */}
        <section className="shell pb-8 pt-10 lg:pb-16">
          <div className="rounded-sm bg-ink px-7 py-14 text-foam sm:px-12">
            <p className="text-[12px] uppercase tracking-[0.26em] text-sun">
              {COPY.salesPage.closingTitle}
            </p>
            <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.9vw,1.45rem)] font-light leading-relaxed text-foam/80">
              {COPY.salesPage.closing}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={VISIT_HREF}
                className="rounded-full bg-sun px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:bg-foam"
              >
                {COPY.salesPage.visitCta}
              </Link>
              <Link
                href={ROUTES.faq}
                className="rounded-full border border-foam/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:bg-foam/10"
              >
                {COPY.salesPage.faqCta}
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
