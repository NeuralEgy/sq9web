import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';

// ============================================================
// خطين: سيريف للعناوين وجروتيسك للنص.
//
// Cormorant Garamond هو اللي بيدّي الإحساس الفاخر — رفيع ومرتفع
// وبيتحمّل أحجام ضخمة. والمائل منه هو كلمة التمييز في كل عنوان،
// فهو جزء من الهوية مش زخرفة.
//
// 🔴 كل وزن وكل نمط = ملف. لو حد زوّد وزن، يقيس وزن الصفحة بعدها.
// ============================================================
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const ui = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-ui',
});

// الأصل اللي بتتبني عليه العناوين النسبية (صور OG مثلًا). من غيره
// Next بيقع على localhost:3000 في الإنتاج.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
