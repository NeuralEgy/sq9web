import Image from 'next/image';
import { COPY } from '@/content/copy';
import { BOARD } from '@/data/leadership';
import type { BoardMember } from '@/data/leadership';
import { Eyebrow, SectionTitle } from './Eyebrow';

// ============================================================
// مجلس الإدارة.
//
// 🔴 بيرجع null لو الليستة فاضية — يعني القسم ده دلوقتي **مش بيظهر
//    خالص**: لا عنوان، لا بطاقات فاضية، لا «قريبًا».
//
//    نفس منطق قسم المؤسِّس بالظبط، ولنفس السبب: مفيش ولا اسم عضو
//    مجلس إدارة منشور على square9.eg، وقسم «مجلس الإدارة» بأسامي
//    مؤقتة على موقع مطوّر بيبيع بالملايين بيكسر حجة الموقع كلها.
//
//    أول ما BOARD في src/data/leadership.ts يتملا، القسم بيظهر
//    لوحده هنا وعلى /leadership، والمسار يدخل المنيو والخريطة.
//
// الصورة اختيارية عن قصد: أسامي المجلس عادةً بتوصل قبل الصور،
// ومش منطقي نستنى صورة عشان نعرض اسم. من غير صورة البطاقة بترسم
// حرف الاسم الأول — مش صورة ستوك لشخص تاني.
// ============================================================
export function Board() {
  if (BOARD.length === 0) return null;

  return (
    <section id="board" className="shell scroll-mt-24 py-16 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>{COPY.board.eyebrow}</Eyebrow>
        <SectionTitle
          lead={COPY.board.titleLead}
          accent={COPY.board.titleAccent}
          className="mt-6"
        />
        <p className="mt-7 section-lead">
          {COPY.board.lead}
        </p>
      </div>

      <ul className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {BOARD.map((member) => (
          <li key={member.name}>
            <MemberCard member={member} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function MemberCard({ member }: { member: BoardMember }) {
  return (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-shallow">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role} at Square9 Developments`}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover"
          />
        ) : (
          // بديل الصورة — حرف الاسم الأول. aria-hidden لأن الاسم
          // مكتوب تحتيه كنص، فقارئ الشاشة ما يقراهوش مرتين.
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-display text-[clamp(3rem,6vw,5rem)] font-light text-sea/40"
          >
            {member.name.trim().charAt(0)}
          </span>
        )}
      </div>

      <p className="mt-6 font-display text-2xl font-light leading-snug">{member.name}</p>
      <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted">
        {member.role}
      </p>

      {member.focus ? (
        <p className="mt-4 border-t border-hair pt-4 leading-relaxed text-ink-soft">
          <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {COPY.board.focusLabel}
          </span>
          <span className="mt-1 block">{member.focus}</span>
        </p>
      ) : null}
    </>
  );
}
