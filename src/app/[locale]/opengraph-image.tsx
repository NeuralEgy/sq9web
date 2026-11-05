import { ImageResponse } from 'next/og';
import { PROJECT } from '@/data/project';
import { LOCALES } from '@/i18n/config';

// ============================================================
// صورة المشاركة — دي اللي بتظهر لما حد يبعت لينك الموقع على واتساب
// أو فيسبوك. وفي سوق واتساب-أولاً زي ده، اللينك العاري بلا صورة
// بيبان مريب؛ الكارت بيخلّيه يبان رسمي.
//
// ⚠️ النص لاتيني بالكامل حتى في النسخة العربية. السبب تقني:
//    ImageResponse محتاج ملف خط فيه حروف عربية يتحمّل بايت بايت،
//    ومفيش واحد في المشروع دلوقتي — من غيره العربي بيطلع مربعات.
//    اسم المشروع لاتيني أصلًا، فالكارت مفهوم للاتنين.
//    لما نضيف ملف خط عربي، النسخة العربية تتعمل هنا.
// ============================================================

// من غير دي الصورة بتتولّد عند كل طلب. إحنا بننشر على VPS بـPM2،
// فالأحسن تتبني مرة واحدة وقت البيلد.
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Aurora Palace — Square9 Developments, Hurghada';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #12161f 0%, #114654 100%)',
          color: '#fbf8f3',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#c9a24a',
              display: 'flex',
            }}
          />
          <span style={{ fontSize: 26, letterSpacing: 6, color: '#c9a24a', fontWeight: 600 }}>
            SQUARE9 DEVELOPMENTS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 108, fontWeight: 700, lineHeight: 1.05 }}>{PROJECT.name}</span>
          <span style={{ fontSize: 40, color: '#c9a24a', marginTop: 12 }}>
            Made to Live Together
          </span>
          <span style={{ fontSize: 32, color: '#e8d8c3', marginTop: 20 }}>
            Magawish · Hurghada · Red Sea
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 56,
            borderTop: '1px solid rgba(251,248,243,0.2)',
            paddingTop: 28,
          }}
        >
          <Fact value={`${PROJECT.totalUnits}`} label="Residences" />
          <Fact value={`${PROJECT.areaMinM2}–${PROJECT.areaMaxM2} m²`} label="Unit sizes" />
          <Fact value={`${PROJECT.deliveryYear}`} label="Delivery" />
          <Fact value="Fully finished" label="Finish" />
        </div>
      </div>
    ),
    size,
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: 42, fontWeight: 700 }}>{value}</span>
      <span style={{ fontSize: 24, color: 'rgba(232,216,195,0.75)', marginTop: 4 }}>{label}</span>
    </div>
  );
}
