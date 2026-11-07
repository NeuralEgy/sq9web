import Link from 'next/link';
import { COPY } from '@/content/copy';
import { ROUTES } from '@/lib/routes';
import { Eyebrow, SectionTitle } from './Eyebrow';

// ============================================================
// «الأربع أسئلة اللي ما نقدرش نجاوبها» — قسم مختصر على الرئيسية.
//
// 🔴 القسم ده مقلوب عن عمد. الطبيعي إن موقع يعرض الأسئلة اللي
//    عنده إجابة ليها. إحنا بنعرض الأربعة اللي **مالناش** إجابة
//    ليها، لأن دي بالظبط الأربعة اللي الزائر فتح الموقع عشانها،
//    وهي نفسها اللي كل منافس كاتب فيها رقم.
//
//    الرهان: الزائر اللي قفل أربع تابات، اللي هيفتكره هو اللي
//    قال له ليه مفيش رقم — مش اللي إداه رقم زي التلاتة التانيين.
//
// الأسئلة الكاملة في /faq، والقسم ده بيودّي عليها.
// ============================================================
export function Questions() {
  return (
    <section className="shell py-14 lg:py-20">
      <div className="max-w-2xl">
        <Eyebrow>{COPY.company.questions.eyebrow}</Eyebrow>
        <SectionTitle
          lead={COPY.company.questions.titleLead}
          accent={COPY.company.questions.titleAccent}
          className="mt-6"
        />
        <p className="mt-7 section-lead">
          {COPY.company.questions.lead}
        </p>
      </div>

      <dl className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {COPY.company.questions.items.map((item) => (
          <div key={item.q} className="border-t border-hair pt-6">
            <dt className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-light leading-snug">
              {item.q}
            </dt>
            <dd className="mt-3 max-w-md leading-relaxed text-ink-muted">{item.a}</dd>
          </div>
        ))}
      </dl>

      <Link
        href={ROUTES.faq}
        className="mt-14 inline-block rounded-full border border-ink/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-sea hover:text-sea"
      >
        {COPY.company.questions.cta}
      </Link>
    </section>
  );
}
