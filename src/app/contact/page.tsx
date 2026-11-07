import type { Metadata } from 'next';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { DEVELOPER, HEAD_OFFICE, whatsappUrl } from '@/data/company';
import { LOCATION, VISIT_SLOTS } from '@/data/projects/aurora-palace';
import { buildMetadata } from '@/lib/seo';
import { VISIT_HREF } from '@/lib/nav';
import { ROUTES } from '@/lib/routes';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { WhatsAppFab } from '@/components/WhatsAppFab';

const WA_TEXT = 'Hello Square9, I would like to get in touch';

export const metadata: Metadata = buildMetadata({
  path: ROUTES.contact,
  title: COPY.contactPage.seoTitle,
  description: COPY.contactPage.seoDescription,
});

const SOCIAL: Array<[keyof typeof DEVELOPER.social, string]> = [
  ['instagram', 'Instagram'],
  ['facebook', 'Facebook'],
  ['linkedin', 'LinkedIn'],
  ['youtube', 'YouTube'],
];

// ============================================================
// صفحة الاتصال.
//
// 🔴 مفيش فورم هنا، وده قرار مش سهو. فورم الحجز بياخد تاريخ وميعاد
//    وبيكتب في جدول visits — وهو موجود في حتة واحدة بس في الموقع،
//    قسم الزيارة على صفحة المشروع. نسخة تانية منه هنا معناها مسار
//    تاني بيكتب في نفس الجدول، يعني حتة تانية لازم تتفحص وتتراقب
//    وتتحمي من البوتات. الصفحة دي بتوجّه على الفورم الأصلي.
//
// كل اللي على الصفحة دي منشور: الرقم، الإيميل، العنوان، السوشيال،
// والمواعيد الأربعة. مفيش ولا معلومة مضافة من عندنا.
// ============================================================
export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        pageName={`${COPY.contactPage.title} ${COPY.contactPage.titleAccent}`}
        path={ROUTES.contact}
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
          <Eyebrow>{COPY.contactPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6.5rem)] font-light leading-[1.0]">
            {COPY.contactPage.title}{' '}
            <em className="italic text-sea">{COPY.contactPage.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-xl text-xl font-light leading-relaxed text-ink-soft">
            {COPY.contactPage.intro}
          </p>
        </section>

        <section className="shell border-t border-hair py-14 lg:py-20">
          <dl className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <Item label={COPY.contactPage.labels.phone}>
              <a href={`tel:${DEVELOPER.phoneE164}`} className="link-big">
                {DEVELOPER.phoneDisplay}
              </a>
            </Item>

            <Item label={COPY.contactPage.labels.whatsapp}>
              <a
                href={whatsappUrl(WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-big"
              >
                {DEVELOPER.phoneDisplay}
              </a>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {COPY.contactPage.whatsappNote}
              </p>
            </Item>

            <Item label={COPY.contactPage.labels.email}>
              <a href={`mailto:${DEVELOPER.email}`} className="link-big break-all">
                {DEVELOPER.email}
              </a>
            </Item>

            <Item label={COPY.contactPage.labels.office}>
              <p className="font-display text-2xl font-light leading-snug">{HEAD_OFFICE.address}</p>
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block border-b border-sea/40 pb-0.5 text-[12px] uppercase tracking-[0.16em] text-sea transition hover:border-sea"
              >
                {COPY.contactPage.mapCta}
              </a>
            </Item>
          </dl>
        </section>

        <section className="bg-shallow py-16 lg:py-24">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
                {COPY.contactPage.labels.slots}
              </p>
              <p className="mt-5 max-w-sm text-lg font-light leading-relaxed text-ink-soft">
                {COPY.contactPage.slotsNote}
              </p>
            </div>

            <div>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {VISIT_SLOTS.map((slot) => (
                  <li
                    key={slot.value}
                    className="border-t border-hair pt-4 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-light"
                  >
                    {slot.label}
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-lg text-ink-muted">{COPY.contactPage.formNote}</p>

              <Link
                href={VISIT_HREF}
                className="mt-7 inline-block rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
              >
                {COPY.contactPage.bookCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="shell py-14 lg:py-20">
          <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
            {COPY.contactPage.labels.follow}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
            {SOCIAL.map(([key, label]) => (
              <li key={key}>
                <a
                  href={DEVELOPER.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl font-light transition hover:text-sea"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-hair pt-5">
      <dt className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">{label}</dt>
      <dd className="mt-3">{children}</dd>
    </div>
  );
}
