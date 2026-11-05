import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { PROJECT, whatsappUrl } from '@/data/project';
import { IconArrow, IconFamily, IconInvestor } from './Icons';
import { Section } from './Section';

// ============================================================
// شخصيتين المشتري: أسرة ومستثمر.
//
// الاتنين معروضين مع بعض مش تابات — لسببين:
//   ١ · مفيش JavaScript، والنصين الاتنين في الـHTML فجوجل بيقراهم
//   ٢ · المشتري نفسه أحيانًا بيكون الاتنين (بيسكن دلوقتي ويأجّر بعدين)
//
// 🔴 كارت المستثمر فيه سطر صريح: مفيش أرقام عائد منشورة وإحنا مش
//    هنخترع رقم. ده مش ضعف — ده اللي بيخلّي باقي الصفحة مصدّقة.
//    وكمان: وعد بعائد مكتوب على موقع بيبيع على الخريطة مسؤولية قانونية.
// ============================================================
export function Personas({ locale, t }: { locale: Locale; t: Dictionary }) {
  const cards = [
    {
      key: 'family',
      Icon: IconFamily,
      content: t.personas.family,
      waText:
        locale === 'ar'
          ? `السلام عليكم، بدوّر على سكن لأسرتي في ${PROJECT.name}. ممكن التفاصيل؟`
          : `Hello, I am looking at ${PROJECT.name} as a home for my family. Could I get details?`,
    },
    {
      key: 'investor',
      Icon: IconInvestor,
      content: t.personas.investor,
      waText:
        locale === 'ar'
          ? `السلام عليكم، مهتم بـ${PROJECT.name} كاستثمار. ممكن التفاصيل؟`
          : `Hello, I am interested in ${PROJECT.name} as an investment. Could I get details?`,
    },
  ];

  return (
    <Section
      id="personas"
      kicker={t.personas.kicker}
      heading={t.personas.heading}
      lead={t.personas.lead}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {cards.map(({ key, Icon, content, waText }) => (
          <article
            key={key}
            className="flex flex-col rounded-3xl border border-sand-200 bg-white p-6 sm:p-8"
          >
            <Icon className="h-8 w-8 text-sea-600" />
            <h3 className="mt-4 text-2xl font-bold text-ink-900">{content.title}</h3>
            <p className="mt-2 text-ink-700">{content.lead}</p>

            <ul className="mt-6 flex-1 space-y-4">
              {content.points.map((point) => (
                <li key={point.title} className="border-s-2 border-gold-400/50 ps-4">
                  <p className="font-semibold text-ink-900">{point.title}</p>
                  <p className="mt-0.5 leading-relaxed text-ink-700">{point.body}</p>
                </li>
              ))}
            </ul>

            {/* السطر الصادق: اللي مش معروف، ومين بيجاوب عليه */}
            <p className="mt-6 rounded-2xl bg-sand-100 p-4 text-sm leading-relaxed text-ink-700">
              {content.ask}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={whatsappUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sea-600 transition hover:text-sea-800"
              >
                {content.cta}
                <IconArrow className="h-4 w-4 rtl:-scale-x-100" />
              </a>
              <a
                href="#visit"
                className="text-sm font-semibold text-ink-700 underline underline-offset-4 transition hover:text-ink-900"
              >
                {t.nav.visit}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
