import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COPY } from '@/content/copy';
import { FOUNDER } from '@/data/leadership';
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
  path: ROUTES.leadership,
  title: COPY.founder.seoTitle,
  description: COPY.founder.seoDescription,
});

// ============================================================
// صفحة المؤسِّس.
//
// 🔴 وهي من غير بيانات بترد 404، مش صفحة فاضية. ده مقصود:
//    - المسار مش في الـsitemap ولا في المنيو وهو فاضي
//      (شوف STATIC_PATHS في src/lib/routes.ts)
//    - فلو حد خمّن العنوان، لازم يلاقي 404 زي أي مسار مش موجود،
//      مش صفحة بعنوان «القيادة» وتحتها فراغ
//
//    أول ما src/data/leadership.ts يتملا، الصفحة بتشتغل وبتدخل
//    المنيو والخريطة لوحدها.
//
// 🔴 ومفيش Person في البيانات المنظّمة هنا. الـschema بتاع Person
//    بيربط اسم إنسان حقيقي بمنصب في كيان تجاري، وجوجل بيستخدمه في
//    لوحة المعرفة. ما يتزوّدش غير لما العميل يأكد الاسم والمنصب
//    كتابة — ولما يتزوّد، يتحط هنا مش في مكان تاني.
// ============================================================
export default function LeadershipPage() {
  if (!FOUNDER) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        pageName={`${COPY.founder.titleLead} ${COPY.founder.titleAccent}`}
        path={ROUTES.leadership}
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
          <Eyebrow>{COPY.founder.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,8vw,6rem)] font-light leading-[1.0]">
            {COPY.founder.titleLead}{' '}
            <em className="italic text-sea">{COPY.founder.titleAccent}</em>
          </h1>
        </section>

        <section className="shell border-t border-hair py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm">
                <Image
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name}, ${FOUNDER.role} of Square9 Developments`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 font-display text-2xl">{FOUNDER.name}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted">
                {FOUNDER.role}
              </p>
            </div>

            <div className="max-w-2xl space-y-6 text-lg font-light leading-relaxed text-ink-soft">
              {FOUNDER.letter.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-xl text-ink' : undefined}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="shell border-t border-hair py-14 lg:py-20">
          <div className="flex flex-wrap gap-3">
            <Link
              href={ROUTES.philosophy}
              className="rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
            >
              {COPY.nav.philosophyPage}
            </Link>
            <Link
              href={PROJECT_PATH}
              className="rounded-full border border-ink/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-sea hover:text-sea"
            >
              {COPY.company.hero.ctaProject}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
