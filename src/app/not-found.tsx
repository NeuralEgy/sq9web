import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Eyebrow } from '@/components/Eyebrow';
import { COPY } from '@/content/copy';
import { GUIDE_LIST } from '@/content/guides';

// ============================================================
// صفحة 404 بتصميم الموقع.
//
// 🔴 وجودها مش رفاهية. من غيرها Next بيرمي NoFallbackError جوّه
//    و[slug] (لأن dynamicParams=false)، فكل مسار مجهول كان بيملا
//    error.log بـstack trace وبيطلّع صفحة Next السودا البيضا.
//
// 🔴 ما بتاخدش buildMetadata: الصفحة دي بترد بكود 404، فمحدش
//    بيفهرسها أصلًا، والـcanonical هنا ما لوش معنى.
// ============================================================

// Next بيحط <meta name="robots" content="noindex"> لوحده على الصفحة دي،
// فما نكررهاش.
export const metadata: Metadata = {
  title: 'Page not found | Square9 Developments',
};

export default function NotFound() {
  return (
    <>
      <Header variant="company" base="/" />

      <main className="shell flex min-h-[60vh] flex-col justify-center py-24 md:py-32">
        <Eyebrow>{COPY.notFound.eyebrow}</Eyebrow>

        <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-light leading-[1.05]">
          {COPY.notFound.title}{' '}
          <em className="italic text-clay">
          {COPY.notFound.titleAccent}
          </em>
        </h1>

        <p className="mt-8 max-w-xl text-ink-soft">{COPY.notFound.body}</p>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block rounded-full bg-ink px-7 py-3 text-[12px] uppercase tracking-[0.16em] text-cream transition hover:bg-clay"
          >
            {COPY.notFound.home}
          </Link>
        </div>

        <div className="mt-16 border-t border-hair pt-8">
          <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
            {COPY.notFound.guides}
          </p>
          <ul className="mt-5 space-y-3">
            {GUIDE_LIST.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/${guide.slug}`}
                  className="font-display text-xl transition hover:text-clay"
                >
                  {guide.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer variant="company" base="/" />
    </>
  );
}
