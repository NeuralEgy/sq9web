import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { PROJECT } from '@/data/projects/aurora-palace';

// ============================================================
// صورة المشاركة لصفحة Aurora Palace.
//
// الكارت بتاع الشركة في src/app/opengraph-image.tsx — وده بتاع
// المشروع، فالعنوان هنا اسم المشروع وتحته أرقامه المنشورة.
//
// دي اللي بتظهر لما حد يبعت لينك صفحة المشروع على واتساب
// أو فيسبوك. وفي سوق واتساب-أولاً زي ده، اللينك العاري بلا صورة
// بيبان مريب؛ الكارت بيخلّيه يبان رسمي.
//
// 🔴 ImageResponse مابيعرفش خطوط الموقع — لازم نديله ملف الخط
//    بايت بايت. من غير كده بيقع على خط sans افتراضي والكارت بيبقى
//    من عالم تاني غير الموقع. الملفات في src/assets وبتتقرا وقت
//    البيلد بس، يعني ما بتتحمّلش على متصفح أي زائر.
// ============================================================

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Aurora Palace — Square9 Developments, Hurghada';

const fontDir = join(process.cwd(), 'src', 'assets');

export default async function Image() {
  const [regular, italic] = await Promise.all([
    readFile(join(fontDir, 'cormorant-regular.ttf')),
    readFile(join(fontDir, 'cormorant-italic.ttf')),
  ]);

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
          background: '#faf6ef',
          color: '#1c1814',
          fontFamily: 'Cormorant',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 44, height: 2, background: '#a0552f', display: 'flex' }} />
          <span style={{ fontSize: 26, letterSpacing: 8, color: '#a0552f' }}>
            MAGAWISH · HURGHADA · RED SEA
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 112, lineHeight: 1.0 }}>Aurora</span>
          <span
            style={{
              fontSize: 112,
              fontStyle: 'italic',
              color: '#a0552f',
              lineHeight: 1.0,
              marginTop: 2,
            }}
          >
            Palace
          </span>
          <span style={{ fontSize: 34, color: '#6b6055', marginTop: 28 }}>
            {PROJECT.totalUnits} residences in Magawish, Hurghada — by Square9 Developments
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 64,
            borderTop: '1px solid rgba(28,24,20,0.15)',
            paddingTop: 30,
          }}
        >
          <Fact value={`${PROJECT.areaMinM2}–${PROJECT.areaMaxM2} m²`} label="Unit sizes" />
          <Fact value={`${PROJECT.landAreaM2.toLocaleString('en-US')} m²`} label="Land" />
          <Fact value={`${PROJECT.deliveryYear}`} label="Delivery" />
          <Fact value={PROJECT.finishing} label="Finish" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Cormorant', data: regular, style: 'normal' },
        { name: 'Cormorant', data: italic, style: 'italic' },
      ],
    },
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: 44 }}>{value}</span>
      <span style={{ fontSize: 24, color: '#6b6055', marginTop: 8 }}>{label}</span>
    </div>
  );
}
