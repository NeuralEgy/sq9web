import { ImageResponse } from 'next/og';
import { PALETTE } from '@/lib/palette';

// أيقونة «أضف للشاشة الرئيسية» على iOS — لازم PNG، فبتتولّد هنا.
// نفس ألوان icon.svg عشان الشكل واحد.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: PALETTE.ink,
          color: PALETTE.sun,
          fontSize: 108,
          fontWeight: 700,
          fontFamily: 'serif',
        }}
      >
        9
      </div>
    ),
    size,
  );
}
