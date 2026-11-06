import Image from 'next/image';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { whatsappUrl } from '@/data/company';
import { IMAGES, PROJECT_PATH } from '@/data/projects/aurora-palace';
import { Eyebrow } from './Eyebrow';

const WA_TEXT = 'Hello, I would like to know more about Square9 Developments';

// هيرو الصفحة الرئيسية — الشركة.
//
// 🔴 مفيش شريط أرقام تحته، بخلاف هيرو المشروع. السبب إن الشركة
//    مالهاش أرقام منشورة: لا سنة تأسيس ولا مشاريع متسلّمة ولا وحدات.
//    شريط أرقام هنا معناه إننا نخترع، أو نحط أرقام المشروع ونسيب
//    الزائر يفهم إنها سجل الشركة — وده أسوأ.
export function CompanyHero() {
  return (
    <section className="shell pt-10 lg:pt-16">
      <Eyebrow>{COPY.company.hero.eyebrow}</Eyebrow>

      <h1 className="mt-8 max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.95]">
        {COPY.company.hero.titleLead}{' '}
        <em className="italic text-clay">{COPY.company.hero.titleAccent}</em>
      </h1>

      <div className="mt-10 grid gap-8 border-t border-hair pt-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <p className="max-w-xl text-xl font-light leading-relaxed text-ink-soft">
          {COPY.company.hero.lead}
        </p>
        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <Link
            href={PROJECT_PATH}
            className="rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-cream transition hover:bg-clay"
          >
            {COPY.company.hero.ctaProject}
          </Link>
          <a
            href={whatsappUrl(WA_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-clay hover:text-clay"
          >
            {COPY.company.hero.ctaWhatsapp}
          </a>
        </div>
      </div>

      <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-sm lg:mt-20">
        <Image
          src={IMAGES.nightExterior}
          alt="A Square9 Developments building in Magawish, Hurghada, at night"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
