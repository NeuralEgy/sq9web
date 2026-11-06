import { whatsappUrl } from '@/data/company';
import { PROJECT } from '@/data/projects/aurora-palace';
import { IconWhatsapp } from './Icons';

const WA_TEXT = `Hello, I would like details about ${PROJECT.name}`;

// زرار واتساب ثابت — أهم قناة عندهم، والـagent هو اللي بيرد عليها.
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl(WA_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  );
}
