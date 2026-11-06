import Link from 'next/link';
import { COPY } from '@/content/copy';
import { VISIT_SLOTS } from '@/data/projects/aurora-palace';
import { ROUTES } from '@/lib/routes';
import { VISIT_HREF } from '@/lib/nav';
import { Eyebrow, SectionTitle } from './Eyebrow';
import { SalesChannels } from './SalesChannels';

// ============================================================
// «المبيعات» على الصفحة الرئيسية.
//
// 🔴 القسم ده بيظهر دلوقتي — مش زي قسم المؤسِّس والمجلس — لأنه
//    مبني على منشور بالكامل: الرقم، الإيميل، والمواعيد الأربعة.
//    أسامي فريق المبيعات حاجة تانية خالص (SALES_TEAM في
//    src/data/sales.ts) وهي فاضية، فما بتظهرش لا هنا ولا هناك.
//
// 🔴 ومفيش فورم هنا. الفورم موجود في حتة واحدة بس في الموقع كله —
//    قسم الزيارة على صفحة المشروع — وهي الحتة الوحيدة اللي بتكتب
//    في جدول visits. الزرار هنا بيودّي عليها.
//
// الفرق بين القسم ده وقسم Connect تحتيه: ده بيقول «مين ومتى
// وإزاي» (معلومة)، وده بيقول «تعالى شوف» (دعوة). والتفاصيل
// الكاملة على /sales.
// ============================================================
export function SalesDesk() {
  return (
    <section id="sales" className="scroll-mt-24 bg-shallow py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <Eyebrow>{COPY.company.salesDesk.eyebrow}</Eyebrow>
            <SectionTitle
              lead={COPY.company.salesDesk.titleLead}
              accent={COPY.company.salesDesk.titleAccent}
              className="mt-6"
            />
            <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-ink-soft">
              {COPY.company.salesDesk.lead}
            </p>

            <Link
              href={ROUTES.sales}
              className="mt-9 inline-block rounded-full bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-foam transition hover:bg-sea"
            >
              {COPY.company.salesDesk.cta}
            </Link>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-ink-muted">
              {COPY.company.salesDesk.channelsTitle}
            </p>
            <div className="mt-6">
              <SalesChannels />
            </div>

            <p className="mt-14 text-[12px] uppercase tracking-[0.2em] text-ink-muted">
              {COPY.company.salesDesk.slotsTitle}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {VISIT_SLOTS.map((slot) => (
                <li
                  key={slot.value}
                  className="border-t border-hair pt-4 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-light"
                >
                  {slot.label}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-lg leading-relaxed text-ink-muted">
              {COPY.company.salesDesk.slotsNote}
            </p>

            <Link
              href={VISIT_HREF}
              className="mt-7 inline-block border-b border-sea/40 pb-0.5 text-[12px] uppercase tracking-[0.16em] text-sea transition hover:border-sea"
            >
              {COPY.nav.visit}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
