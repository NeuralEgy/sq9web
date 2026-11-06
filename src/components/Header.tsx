import Link from 'next/link';
import { COPY } from '@/content/copy';
import { DEVELOPER } from '@/data/project';

// هيدر لاصق من غير أي JavaScript:
// على الموبايل اللينكات في شريط بيتزحلق أفقيًا تحت السطر الأول،
// وعلى الشاشات الكبيرة في نفس السطر. مفيش منيو بتفتح وتقفل،
// يعني مفيش بَندل جافاسكريبت زيادة على أول تحميل.
//
// base: فاضية على الصفحة الرئيسية (مراسي جوّه نفس الصفحة)، و«/» على
// صفحات الأدلة — من غير كده لينك #units على صفحة دليل ما بيوديش حتة.
export function Header({ base = '' }: { base?: string }) {
  const links = [
    { href: `${base}#project`, label: COPY.nav.project },
    { href: `${base}#residences`, label: COPY.nav.residences },
    { href: `${base}#life`, label: COPY.nav.life },
    { href: `${base}#location`, label: COPY.nav.location },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-cream/90 backdrop-blur">
      <div className="shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="shrink-0 font-display text-2xl font-semibold tracking-[0.14em]">
          {DEVELOPER.shortName}
        </Link>

        <nav
          aria-label={COPY.nav.sections}
          className="hidden gap-9 text-[12px] uppercase tracking-[0.18em] text-ink-muted md:flex"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-clay">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`${base}#visit`}
          className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-[12px] uppercase tracking-[0.16em] text-cream transition hover:bg-clay sm:px-6"
        >
          {COPY.nav.visit}
        </a>
      </div>

      {/* شريط الأقسام على الموبايل */}
      <nav
        aria-label={COPY.nav.sections}
        className="flex gap-6 overflow-x-auto border-t border-hair px-6 py-2.5 text-[12px] uppercase tracking-[0.16em] text-ink-muted md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} className="shrink-0">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
