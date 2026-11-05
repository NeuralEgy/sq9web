import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n';
import { DEVELOPER, LOCATION, PROJECT, UNIT_TYPES, whatsappUrl } from '@/data/project';

// ============================================================
// الهيكل المبدئي للصفحة الرئيسية.
// الغرض من النسخة دي: تثبت إن سلسلة البيانات + اللغتين + RTL ماشية صح.
// الأقسام الكاملة (القصة · المرافق · الموقع · الشخصيتين · الفورم) جاية في الخطوة الجاية.
// ============================================================

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const other: Locale = locale === 'ar' ? 'en' : 'ar';

  const waText =
    locale === 'ar'
      ? `السلام عليكم، عايز أعرف تفاصيل ${PROJECT.name}`
      : `Hello, I would like details about ${PROJECT.name}`;

  return (
    <>
      {/* ===== الهيدر ===== */}
      <header className="border-b border-sand-200 bg-sand-50/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            {locale === 'ar' ? DEVELOPER.name.ar : DEVELOPER.name.en}
          </span>
          <Link
            href={`/${other}`}
            hrefLang={other}
            className="rounded-full border border-sand-300 px-4 py-1.5 text-sm font-medium transition hover:bg-sand-100"
          >
            {t.common.switchLang}
          </Link>
        </div>
      </header>

      <main>
        {/* ===== الهيرو ===== */}
        <section className="container-x py-14 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-sea-600">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-2 text-xl text-gold-500 sm:text-2xl">{t.hero.subtitle}</p>
          <p className="mt-5 max-w-xl text-lg text-ink-700">{t.hero.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#visit"
              className="rounded-full bg-ink-900 px-6 py-3 text-center font-semibold text-sand-50 transition hover:bg-ink-800"
            >
              {t.hero.ctaVisit}
            </Link>
            <a
              href={whatsappUrl(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sea-600 px-6 py-3 text-center font-semibold text-sea-800 transition hover:bg-sea-600 hover:text-sand-50"
            >
              {t.hero.ctaWhatsapp}
            </a>
          </div>
        </section>

        {/* ===== الوحدات: مساحات بس، مفيش سعر ===== */}
        <section className="container-x border-t border-sand-200 py-12">
          <h2 className="text-2xl font-bold text-ink-900">{t.nav.units}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {UNIT_TYPES.map((unit) => (
              <li key={unit.code} className="rounded-2xl border border-sand-200 bg-white p-5">
                <p className="font-semibold text-ink-900">{unit.name[locale]}</p>
                <p className="mt-1 text-ink-700">
                  {unit.areaMinM2} – {unit.areaMaxM2} {t.common.sqm}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== 🔴 القسم اللي بيقف مكان السعر — ولا رقم مخترع ===== */}
        <section id="visit" className="container-x border-t border-sand-200 py-12">
          <div className="rounded-3xl bg-ink-900 p-7 text-sand-50 sm:p-10">
            <h2 className="text-2xl font-bold">{t.price.heading}</h2>
            <p className="mt-3 max-w-xl text-sand-100">{t.price.body}</p>
            <p className="mt-2 max-w-xl text-sand-200">{t.price.published}</p>
            <Link
              href="#visit"
              className="mt-7 inline-block rounded-full bg-gold-400 px-6 py-3 font-semibold text-ink-900 transition hover:bg-gold-500"
            >
              {t.price.cta}
            </Link>
          </div>
        </section>
      </main>

      {/* ===== الفوتر ===== */}
      <footer className="border-t border-sand-200 py-10 text-sm text-ink-700">
        <div className="container-x space-y-1">
          <p>{LOCATION.address[locale]}</p>
          <p>
            {/* dir=ltr لازم: من غيره الرقم بينقلب في الصفحة العربية */}
            <a
              href={`tel:${DEVELOPER.phoneE164}`}
              dir="ltr"
              className="inline-block hover:underline"
            >
              {DEVELOPER.phoneDisplay}
            </a>
            {' · '}
            <a href={`mailto:${DEVELOPER.email}`} className="hover:underline">
              {DEVELOPER.email}
            </a>
          </p>
        </div>
      </footer>

      {/* ===== زرار واتساب ثابت — أهم قناة عندهم، والـagent عليها ===== */}
      <a
        href={whatsappUrl(waText)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.hero.ctaWhatsapp}
        className="fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 13.98c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.08-1.76-.2-.44-.17-1.01-.36-1.74-.68-3.06-1.32-5.06-4.4-5.21-4.6-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.55c.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.46.53-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.74-.17 1.42z" />
        </svg>
      </a>
    </>
  );
}
