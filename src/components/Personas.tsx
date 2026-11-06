import { COPY } from '@/content/copy';
import { whatsappUrl } from '@/data/company';
import { PROJECT } from '@/data/projects/aurora-palace';
import { Eyebrow, SectionTitle } from './Eyebrow';

// ============================================================
// شخصيتين المشتري: أسرة ومستثمر.
//
// الاتنين معروضين مع بعض مش تابات — لسببين:
//   ١ · مفيش JavaScript، والنصين الاتنين في الـHTML فجوجل بيقراهم
//   ٢ · المشتري نفسه أحيانًا بيكون الاتنين (بيسكن دلوقتي ويأجّر بعدين)
//
// 🔴 كارت المستثمر فيه سطر صريح: مفيش أرقام عائد منشورة وإحنا مش
//    هنخترع رقم. وعد بعائد مكتوب على موقع بيبيع على الخريطة مسؤولية
//    قانونية — والاعتراف هو اللي بيخلّي باقي الصفحة مصدّقة.
// ============================================================
export function Personas() {
  const cards = [
    {
      key: 'family',
      content: COPY.personas.family,
      wa: `Hello, I am looking at ${PROJECT.name} as a home for my family. Could I get details?`,
    },
    {
      key: 'investor',
      content: COPY.personas.investor,
      wa: `Hello, I am interested in ${PROJECT.name} as an investment. Could I get details?`,
    },
  ];

  return (
    <section className="shell py-24 lg:py-36">
      <Eyebrow>{COPY.personas.eyebrow}</Eyebrow>
      <SectionTitle
        lead={COPY.personas.titleLead}
        accent={COPY.personas.titleAccent}
        className="mt-6 max-w-3xl"
      />
      <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft">
        {COPY.personas.lead}
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        {cards.map(({ key, content, wa }) => (
          <article key={key} className="flex flex-col border-t-2 border-ink pt-8">
            <h3 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-light">
              {content.title}
            </h3>

            <ul className="mt-8 flex-1 space-y-6">
              {content.points.map(([title, body]) => (
                <li key={title}>
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="mt-1 leading-relaxed text-ink-soft">{body}</p>
                </li>
              ))}
            </ul>

            {/* السطر الصادق: اللي مش معروف، ومين بيجاوب عليه */}
            <p className="mt-8 bg-sand p-5 text-sm leading-relaxed text-ink-soft">
              {content.caveat}
            </p>

            <a
              href={whatsappUrl(wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-[12px] uppercase tracking-[0.16em] text-clay"
            >
              {content.cta} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
