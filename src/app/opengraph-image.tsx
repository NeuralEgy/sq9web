import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { COPY } from '@/content/copy';
import { DEVELOPER, HEAD_OFFICE } from '@/data/company';

// ============================================================
// صورة المشاركة للصفحة الرئيسية — الشركة.
//
// دي اللي بتظهر لما حد يبعت لينك الموقع على واتساب أو فيسبوك. وفي
// سوق واتساب-أولاً زي ده، اللينك العاري بلا صورة بيبان مريب؛ الكارت
// بيخلّيه يبان رسمي.
//
// صورة المشروع ليها ملف لوحدها في src/app/aurora-palace — عشان لينك
// صفحة المشروع يطلّع أرقام المشروع، ولينك الرئيسية يطلّع الشركة.
//
// 🔴 الشريط السفلي هنا المبادئ الأربعة المنشورة، مش أرقام. الشركة
//    مالهاش أرقام منشورة (لا سنة تأسيس ولا مشاريع متسلّمة)، وكارت
//    مشاركة فيه رقم مخترع بيتنسخ ويتبعت ومش بيرجع.
//
// 🔴 ImageResponse مابيعرفش خطوط الموقع — لازم نديله ملف الخط
//    بايت بايت. من غير كده بيقع على خط sans افتراضي والكارت بيبقى
//    من عالم تاني غير الموقع. الملفات في src/assets وبتتقرا وقت
//    البيلد بس، يعني ما بتتحمّلش على متصفح أي زائر.
// ============================================================

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Square9 Developments — property developer in Hurghada, Red Sea';

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
            {DEVELOPER.shortName} DEVELOPMENTS · {HEAD_OFFICE.city.toUpperCase()}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 112, lineHeight: 1.0 }}>{COPY.company.hero.titleLead}</span>
          <span
            style={{
              fontSize: 112,
              fontStyle: 'italic',
              color: '#a0552f',
              lineHeight: 1.0,
              marginTop: 2,
            }}
          >
            {COPY.company.hero.titleAccent}
          </span>
          <span style={{ fontSize: 34, color: '#6b6055', marginTop: 28 }}>
            {DEVELOPER.name} — building communities in {HEAD_OFFICE.city}, {HEAD_OFFICE.region}
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
          {COPY.company.philosophy.pillars.map((pillar, i) => (
            <div key={pillar.title} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 24, color: '#a0552f' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 40, marginTop: 6 }}>{pillar.title}</span>
            </div>
          ))}
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
