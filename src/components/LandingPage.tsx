import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { PROJECT, whatsappUrl } from '@/data/project';
import { pathFor, type RouteKey } from '@/lib/site';
import { BreadcrumbJsonLd } from './JsonLd';
import { Footer } from './Footer';
import { Header } from './Header';
import { IconArrow, IconWhatsapp } from './Icons';
import { WhatsAppFab } from './WhatsAppFab';

// ============================================================
// الشكل المشترك لصفحات الهبوط.
//
// كل صفحة بتجاوب على سؤال حقيقي من جوجل، وبتنتهي بنفس الخطوة:
// زيارة أو واتساب. والهيدر والفوتر بياخدوا base عشان لينكات
// المراسي (#units وغيرها) ترجّع الزائر للصفحة الرئيسية مش تقف مكانها.
// ============================================================

type Section = { heading: string; body: ReadonlyArray<string> };

/** بيحوّل **كده** لـ<strong> — الحاجة الوحيدة اللي محتاجينها من الماركداون */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-ink-900">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function LandingPage({
  locale,
  t,
  route,
  content,
}: {
  locale: Locale;
  t: Dictionary;
  route: RouteKey;
  content: { h1: string; intro: string; sections: ReadonlyArray<Section> };
}) {
  const home = pathFor(locale, 'home');
  const waText =
    locale === 'ar'
      ? `السلام عليكم، حابب أعرف تفاصيل ${PROJECT.name}`
      : `Hello, I would like details about ${PROJECT.name}`;

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        pageName={content.h1}
        pagePath={pathFor(locale, route)}
        homeName={PROJECT.name}
      />

      <Header locale={locale} t={t} base={home} route={route} />

      <main>
        <article className="container-x py-14 sm:py-20">
          {/* فتات الخبز المرئي — مش بس في البيانات المنظّمة */}
          <nav aria-label="Breadcrumb" className="text-sm text-ink-700">
            <Link href={home} className="transition hover:text-sea-600">
              {PROJECT.name}
            </Link>
            <span className="mx-2 text-sand-300">/</span>
            <span className="text-ink-900">{content.h1}</span>
          </nav>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">{content.intro}</p>

          <div className="mt-12 max-w-2xl space-y-11">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-ink-900">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-700">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* نفس الخطوة في كل صفحة: زيارة أو واتساب */}
          <div className="mt-14 max-w-2xl rounded-3xl bg-ink-900 p-7 text-sand-50 sm:p-9">
            <h2 className="text-2xl font-bold">{t.visit.heading}</h2>
            <p className="mt-3 leading-relaxed text-sand-200">{t.price.reassure}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${home}#visit`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 font-semibold text-ink-900 transition hover:bg-gold-500"
              >
                {t.price.cta}
                <IconArrow className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
              <a
                href={whatsappUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-50/30 px-6 py-3.5 font-semibold text-sand-50 transition hover:bg-sand-50/10"
              >
                <IconWhatsapp className="h-5 w-5" />
                {t.hero.ctaWhatsapp}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer locale={locale} t={t} base={home} />
      <WhatsAppFab locale={locale} t={t} />
    </>
  );
}
