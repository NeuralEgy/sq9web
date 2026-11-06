import Link from 'next/link';
import { COPY } from '@/content/copy';
import { whatsappUrl } from '@/data/company';
import { VISIT_HREF } from '@/lib/nav';

const WA_TEXT = 'Hello, I would like to arrange a visit with Square9';

// آخر قسم على الصفحة الرئيسية.
//
// 🔴 مفيش فورم هنا. فورم الحجز موجود في حتة واحدة بس في الموقع كله —
//    قسم الزيارة على صفحة المشروع — لأنه بيحجز ميعاد في الشقة
//    النموذج، وده معلّق بمشروع معيّن مش بالشركة. فورم تاني هنا معناه
//    مسار تاني بيكتب في جدول visits، يعني حتة تانية ممكن تبوظ.
export function Connect() {
  return (
    <section className="shell pb-8 pt-4 lg:pb-16">
      <div className="rounded-sm bg-ink px-7 py-16 text-cream sm:px-12 lg:py-24">
        <p className="text-[12px] uppercase tracking-[0.26em] text-gold">
          {COPY.company.connect.eyebrow}
        </p>
        <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.05]">
          {COPY.company.connect.titleLead}{' '}
          <em className="italic text-gold">{COPY.company.connect.titleAccent}</em>
        </h2>
        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-cream/70">
          {COPY.company.connect.body}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={VISIT_HREF}
            className="rounded-full bg-gold px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:bg-cream"
          >
            {COPY.company.connect.ctaVisit}
          </Link>
          <a
            href={whatsappUrl(WA_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:bg-cream/10"
          >
            {COPY.company.connect.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
