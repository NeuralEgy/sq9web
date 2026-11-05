import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { DEVELOPER, LOCATION, whatsappUrl } from '@/data/project';
import { pathFor } from '@/lib/site';
import { IconWhatsapp } from './Icons';

const SOCIAL_LABELS: Array<{ key: keyof typeof DEVELOPER.social; label: string }> = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'youtube', label: 'YouTube' },
];

export function Footer({
  locale,
  t,
  base = '',
}: {
  locale: Locale;
  t: Dictionary;
  base?: string;
}) {
  const sectionLinks = [
    { href: `${base}#story`, label: t.nav.story },
    { href: `${base}#project`, label: t.nav.project },
    { href: `${base}#units`, label: t.nav.units },
    { href: `${base}#location`, label: t.nav.location },
    { href: `${base}#visit`, label: t.nav.visit },
  ];

  // صفحات الهبوط — موجودة في الفوتر عشان تتزحف من كل صفحة،
  // ده أرخص وأهم من أي حاجة SEO تانية: الصفحات اليتيمة ما بتترتبش.
  const guideLinks = [
    { href: pathFor(locale, 'hurghadaApartments'), label: t.landing.hurghadaApartments.navLabel },
    { href: pathFor(locale, 'magawish'), label: t.landing.magawish.navLabel },
    { href: pathFor(locale, 'offPlan'), label: t.landing.offPlan.navLabel },
  ];

  return (
    <footer className="border-t border-sand-200 bg-sand-100 py-14">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-lg font-bold text-ink-900">{DEVELOPER.name[locale]}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-ink-700">{t.footer.tagline}</p>
          <p className="mt-4 text-ink-700">{LOCATION.address[locale]}</p>
        </div>

        <nav aria-label={t.footer.navTitle}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            {t.footer.navTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink-700 transition hover:text-sea-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.guidesTitle}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            {t.footer.guidesTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            {guideLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-700 transition hover:text-sea-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            {t.footer.contactTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              {/* dir=ltr لازم: من غيره الرقم بينقلب في الصفحة العربية */}
              <a
                href={`tel:${DEVELOPER.phoneE164}`}
                dir="ltr"
                className="inline-block text-ink-700 transition hover:text-sea-600"
              >
                {DEVELOPER.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${DEVELOPER.email}`}
                dir="ltr"
                className="inline-block text-ink-700 transition hover:text-sea-600"
              >
                {DEVELOPER.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-700 transition hover:text-sea-600"
              >
                <IconWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>

          <h2 className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            {t.footer.followTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            {SOCIAL_LABELS.map((social) => (
              <li key={social.key}>
                <a
                  href={DEVELOPER.social[social.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-700 transition hover:text-sea-600"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 border-t border-sand-200 pt-6 text-sm text-ink-700">
        <p>
          © {new Date().getFullYear()} {DEVELOPER.name[locale]}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
