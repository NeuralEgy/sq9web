import Link from 'next/link';
import { COPY } from '@/content/copy';
import { GUIDE_LIST } from '@/content/guides';
import { DEVELOPER, HEAD_OFFICE } from '@/data/company';
import { sitePages } from '@/lib/nav';

const SOCIAL: Array<[keyof typeof DEVELOPER.social, string]> = [
  ['instagram', 'Instagram'],
  ['facebook', 'Facebook'],
  ['linkedin', 'LinkedIn'],
  ['youtube', 'YouTube'],
];

// الفوتر بياخد نفس variant/base بتوع الهيدر — عشان لينكات الأقسام
// فيه توافق الصفحة اللي الزائر عليها.
//
// العنوان هنا عنوان الشركة (HEAD_OFFICE) مش عنوان المشروع. نفس
// الشارع دلوقتي، بس أول ما يبقى فيه مشروع في مكان تاني، ده يفضل ثابت.
// 🔴 الفوتر ما بقاش بياخد variant ولا base. كان بياخدهم لما كان
//    بيعرض مراسي الصفحة اللي إنت عليها؛ دلوقتي بيعرض **كل** صفحات
//    الموقع من كل صفحة، فالليستة واحدة مهما كنت فين. ده اللي
//    بيخلّي كل مسار يتزحف من أي صفحة، والصفحة اليتيمة ما بتترتبش.
export function Footer() {
  const sections = sitePages();

  return (
    <footer className="shell py-16">
      <div className="grid gap-12 border-t border-hair pt-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[0.14em]">
            {DEVELOPER.shortName}
          </p>
          <p className="mt-4 max-w-xs leading-relaxed text-ink-muted">{COPY.footer.tagline}</p>
          <p className="mt-4 text-ink-muted">{HEAD_OFFICE.address}</p>
        </div>

        <nav aria-label={COPY.footer.pages}>
          <h2 className="text-[12px] uppercase tracking-[0.18em] text-ink">{COPY.footer.pages}</h2>
          <ul className="mt-5 space-y-2.5">
            {sections.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-ink-muted transition hover:text-sea">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* الأدلة في الفوتر عشان تتزحف من كل صفحة — الصفحة اليتيمة ما بتترتبش */}
        <nav aria-label={COPY.nav.guides}>
          <h2 className="text-[12px] uppercase tracking-[0.18em] text-ink">{COPY.nav.guides}</h2>
          <ul className="mt-5 space-y-2.5">
            {GUIDE_LIST.map((g) => (
              <li key={g.slug}>
                <Link href={`/${g.slug}`} className="text-ink-muted transition hover:text-sea">
                  {g.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[12px] uppercase tracking-[0.18em] text-ink">{COPY.footer.contact}</h2>
          <ul className="mt-5 space-y-2.5">
            <li>
              <a
                href={`tel:${DEVELOPER.phoneE164}`}
                className="text-ink-muted transition hover:text-sea"
              >
                {DEVELOPER.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${DEVELOPER.email}`}
                className="text-ink-muted transition hover:text-sea"
              >
                {DEVELOPER.email}
              </a>
            </li>
          </ul>

          <h2 className="mt-8 text-[12px] uppercase tracking-[0.18em] text-ink">
            {COPY.footer.follow}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {SOCIAL.map(([key, label]) => (
              <li key={key}>
                <a
                  href={DEVELOPER.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted transition hover:text-sea"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 border-t border-hair pt-6 text-sm text-ink-muted">
        © {new Date().getFullYear()} {DEVELOPER.name}. {COPY.footer.rights}
      </p>
    </footer>
  );
}
