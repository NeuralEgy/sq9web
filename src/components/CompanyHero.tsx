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
    <section className="pt-10 lg:pt-16">
      <div className="shell">
        <Eyebrow>{COPY.company.hero.eyebrow}</Eyebrow>

      <h1 className="mt-8 max-w-6xl font-display text-[clamp(3rem,9vw,9rem)] font-light leading-[0.94]">
        {COPY.company.hero.titleLead}{' '}
        <em className="italic text-sea">{COPY.company.hero.titleAccent}</em>
      </h1>

      <div className="mt-10 grid gap-8 border-t border-hair pt-8 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
        <p className="max-w-3xl text-[clamp(1.15rem,1.6vw,1.5rem)] font-light leading-relaxed text-ink-soft">
          {COPY.company.hero.lead}
        </p>
        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <Link
            href={PROJECT_PATH}
            className="rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
          >
            {COPY.company.hero.ctaProject}
          </Link>
          <a
            href={whatsappUrl(WA_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-sea hover:text-sea"
          >
            {COPY.company.hero.ctaWhatsapp}
          </a>
        </div>
      </div>

      </div>

      {/* 🔴 الصورة بره .shell عن قصد — بتمتد لحافة الشاشة. وهي
          السبب الأساسي إن الصفحة بقت تبان أوسع، أكتر من توسيع
          الشريط نفسه.

          🔴 والنسبة 16:9 زي الملف الأصلي بالظبط، يعني مفيش قص.
             كانت 21:9 وكانت بتقص ربع الصورة من فوق — والمبنى نفسه
             كان بيتشال وما يفضلش غير حمام السباحة. رندر معماري
             الموضوع بتاعه الواجهة، فقصّه بيلغي سبب وجوده. */}
      <figure className="mt-14 lg:mt-20">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
          <Image
            src={IMAGES.nightExterior}
            alt="Render of Aurora Palace by Square9 Developments in Magawish, Hurghada, at night"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 🔴 أول صورة في الموقع، ومكتوب تحتها إنها رندر. الزائر
            لازم يعرف ده من أول شاشة، مش بعد ما يعدّي نص الصفحة. */}
        <figcaption className="shell mt-4 text-[13px] leading-relaxed text-ink-muted">
          {COPY.company.hero.imageNote}
        </figcaption>
      </figure>
    </section>
  );
}
