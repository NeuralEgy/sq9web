import Image from 'next/image';
import { COPY } from '@/content/copy';
import { SALES_TEAM } from '@/data/sales';
import type { SalesPerson } from '@/data/sales';
import { Eyebrow } from './Eyebrow';

// ============================================================
// فريق المبيعات على /sales.
//
// 🔴 بيرجع null لو SALES_TEAM فاضية — فالقسم ده دلوقتي مش بيظهر
//    خالص. نفس منطق المؤسِّس والمجلس: مفيش ولا اسم موظف منشور،
//    وبطاقة فيها «Sales Team» وصورة ستوك بتضر أكتر من مفيش قسم.
//
// 🔴 واللغات أهم سطر في البطاقة. مشتري روسي أو ألماني بيدوّر عليه
//    قبل أي حاجة تانية — فهو ظاهر كنص عادي مش كلافتة صغيرة.
//
// والرقم المباشر اختياري: مش كل واحد في الفريق بيبقى له رقم
// منشور، واللي مالوش بياخد رقم الشركة من القنوات فوق.
// ============================================================
export function SalesTeam() {
  if (SALES_TEAM.length === 0) return null;

  return (
    <section className="shell border-t border-hair py-16 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>{COPY.salesPage.eyebrow}</Eyebrow>
        {/* عنوان عادي مش SectionTitle — ده عنوان قسم جوّه صفحة،
            مش عنوان صفحة، فمالوش جزء مائل مميّز */}
        <h2 className="section-title mt-6">{COPY.salesPage.teamTitle}</h2>
        <p className="mt-6 section-lead">
          {COPY.salesPage.teamLead}
        </p>
      </div>

      <ul className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {SALES_TEAM.map((person) => (
          <li key={person.name}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PersonCard({ person }: { person: SalesPerson }) {
  return (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-shallow">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={`${person.name}, ${person.role} at Square9 Developments`}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover"
          />
        ) : (
          // بديل الصورة — حرف الاسم الأول، مش صورة ستوك لشخص تاني
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-display text-[clamp(3rem,6vw,5rem)] font-light text-sea/40"
          >
            {person.name.trim().charAt(0)}
          </span>
        )}
      </div>

      <p className="mt-6 font-display text-2xl font-light leading-snug">{person.name}</p>
      <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted">{person.role}</p>

      <p className="mt-4 border-t border-hair pt-4 leading-relaxed text-ink-soft">
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
          {COPY.salesPage.languagesLabel}
        </span>
        <span className="mt-1 block">{person.languages.join(' · ')}</span>
      </p>

      {person.phoneE164 ? (
        <p className="mt-4">
          <span className="block text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {COPY.salesPage.callLabel}
          </span>
          <a href={`tel:${person.phoneE164}`} className="mt-1 inline-block link-big">
            {person.phoneE164}
          </a>
        </p>
      ) : null}
    </>
  );
}
