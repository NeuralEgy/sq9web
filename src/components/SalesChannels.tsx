import { COPY } from '@/content/copy';
import { DEVELOPER, whatsappUrl } from '@/data/company';
import { SALES_CHANNELS } from '@/data/sales';
import type { SalesChannelKey } from '@/data/sales';

const WA_TEXT = 'Hello Square9, I have a question about Aurora Palace';

// ============================================================
// القنوات التلاتة — مستعملة على الرئيسية وعلى /sales.
//
// 🔴 المكوّن ده موجود عشان الرقم والإيميل ما يتكتبوش في صفحتين.
//    الترتيب من SALES_CHANNELS، والنص من COPY.salesPage.channels،
//    والقيمة نفسها من DEVELOPER. تلات مصادر، كل واحد في ملف واحد.
//
// withNotes=false على الرئيسية (مساحة أقل) وtrue على /sales.
// ============================================================

/** بيحوّل مفتاح القناة للينك — الرقم بيتقرا من DEVELOPER مش من نص */
function hrefFor(key: SalesChannelKey): string {
  if (key === 'whatsapp') return whatsappUrl(WA_TEXT);
  if (key === 'phone') return `tel:${DEVELOPER.phoneE164}`;
  return `mailto:${DEVELOPER.email}`;
}

export function SalesChannels({ withNotes = false }: { withNotes?: boolean }) {
  return (
    <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-3">
      {SALES_CHANNELS.map((channel) => {
        const text = COPY.salesPage.channels[channel.key];
        const external = channel.key === 'whatsapp';

        return (
          <li key={channel.key} className="border-t border-hair pt-5">
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">{text.label}</p>
            <a
              href={hrefFor(channel.key)}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="link-big mt-3 block break-words"
            >
              {channel.value}
            </a>
            {withNotes ? (
              <p className="mt-4 max-w-xs leading-relaxed text-ink-muted">{text.note}</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
