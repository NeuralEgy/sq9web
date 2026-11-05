import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { DEVELOPER } from '@/data/project';

// هيدر لاصق من غير أي JavaScript:
// على الموبايل اللينكات في شريط بيتزحلق أفقيًا تحت السطر الأول،
// وعلى الشاشات الكبيرة بتبقى في نفس السطر. مفيش منيو بتفتح وتقفل،
// يعني مفيش بَندل جافاسكريبت زيادة على أول تحميل.
export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const other: Locale = locale === 'ar' ? 'en' : 'ar';

  const links = [
    { href: '#story', label: t.nav.story },
    { href: '#project', label: t.nav.project },
    { href: '#units', label: t.nav.units },
    { href: '#amenities', label: t.nav.amenities },
    { href: '#location', label: t.nav.location },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <Link href={`/${locale}`} className="shrink-0 text-lg font-bold tracking-tight text-ink-900">
          {locale === 'ar' ? DEVELOPER.name.ar : DEVELOPER.name.en}
        </Link>

        <nav aria-label={t.nav.menu} className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-sea-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={`/${other}`}
            hrefLang={other}
            className="rounded-full border border-sand-300 px-3 py-1.5 text-sm font-medium text-ink-700 transition hover:bg-sand-100"
          >
            {t.common.switchLang}
          </Link>
          <a
            href="#visit"
            className="hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-sand-50 transition hover:bg-ink-800 sm:inline-block"
          >
            {t.nav.visit}
          </a>
        </div>
      </div>

      {/* شريط الأقسام على الموبايل */}
      <nav
        aria-label={t.nav.menu}
        className="flex gap-5 overflow-x-auto border-t border-sand-200 px-5 py-2.5 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 text-sm font-medium text-ink-700"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
