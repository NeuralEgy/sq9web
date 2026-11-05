import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { PROJECT, whatsappUrl } from '@/data/project';
import { IconWhatsapp } from './Icons';

// زرار واتساب ثابت — أهم قناة عندهم، والـagent هو اللي بيرد عليها.
// end-5 مش right-5: في الصفحة العربية بيروح على الشمال تلقائيًا.
export function WhatsAppFab({ locale, t }: { locale: Locale; t: Dictionary }) {
  const waText =
    locale === 'ar'
      ? `السلام عليكم، حابب أعرف تفاصيل ${PROJECT.name}`
      : `Hello, I would like details about ${PROJECT.name}`;

  return (
    <a
      href={whatsappUrl(waText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.hero.ctaWhatsapp}
      className="fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  );
}
