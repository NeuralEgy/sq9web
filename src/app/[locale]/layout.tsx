import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { LOCALES, dirOf, htmlLangOf, isLocale } from '@/i18n/config';
import { SITE_URL } from '@/lib/site';

// الحاجة الوحيدة اللي بتتحدد على مستوى الـlayout: الأصل اللي بتتبني عليه
// العناوين النسبية (صور OG مثلًا). من غيره Next بيقع على localhost:3000
// وصور المشاركة بتطلع بعناوين غلط في الإنتاج.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

// خط واحد بيغطي العربي واللاتيني — أرخص على الموبايل من تحميل خطين.
// display: swap عشان النص يظهر فورًا بخط النظام لحد ما الخط ينزل.
const body = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  // 🔴 كل وزن = ملفين (عربي + لاتيني) ≈ 48 كيلوبايت. التلاتة دول بس
  // اللي الموقع بيستخدمهم فعلًا؛ زيادة وزن واحد تكلفتها ربع وزن الصفحة.
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

// بيولّد نسخة ثابتة لكل لغة وقت البيلد
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// ملحوظة: الـmetadata (العنوان والوصف وcanonical وhreflang) بتتحدد في كل
// صفحة لوحدها عن طريق buildMetadata في src/lib/seo.ts — مش هنا. لأن
// الـlayout مشترك، ولو حطينا عنوان هنا هيورّثه لصفحات الهبوط غلط.
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={htmlLangOf(locale)} dir={dirOf(locale)} className={body.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

// لو جات لغة مش في القايمة، نطلّع 404 مش نسخة افتراضية صامتة
export const dynamicParams = false;
