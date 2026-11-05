import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/i18n/config';

// ============================================================
// الجذر `/` بيحوّل على `/ar` أو `/en` حسب Accept-Language.
// أي مسار تاني من غير بادئة لغة بياخد نفس المعاملة — يعني لينك قديم
// زي /projects/aurora-palace ما بيضيعش، بيروح لنسخة لغة الزائر.
// ============================================================

/** بيقرا Accept-Language ويرجّع أول لغة إحنا بندعمها */
function pickLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  // الهيدر شكله: "ar-EG,ar;q=0.9,en-US;q=0.8" — نرتّبه بالوزن
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      const weight = q ? Number.parseFloat(q.split('=')[1]) : 1;
      return { tag: tag.toLowerCase(), weight: Number.isFinite(weight) ? weight : 0 };
    })
    .sort((a, b) => b.weight - a.weight);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    const match = LOCALES.find((locale) => locale === base);
    if (match) return match;
  }

  return DEFAULT_LOCALE;
}

function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (hasLocalePrefix(pathname)) return NextResponse.next();

  const locale = pickLocale(request.headers.get('accept-language'));
  const target = new URL(`/${locale}${pathname === '/' ? '' : pathname}${search}`, request.url);

  // 307 مش 301: اختيار اللغة بيعتمد على الزائر، فما ينفعش يتكاش دايم
  return NextResponse.redirect(target, 307);
}

export const config = {
  // كل حاجة ما عدا: ملفات Next · الـAPI · أي مسار فيه امتداد (.svg/.xml/.txt)
  // · ومسارات الميتاداتا اللي Next بيولّدها في الجذر من غير امتداد.
  //
  // 🔴 `apple-icon` و`opengraph-image` مفيهمش نقطة، فمن غير استثناء صريح
  //    الميدلوير كان بيحوّلهم لـ/ar/apple-icon — وده مش موجود، يعني
  //    أيقونة الآيفون كانت بتدي 404 من غير ما حد ياخد باله.
  matcher: ['/((?!_next|api|icon|apple-icon|opengraph-image|manifest|sitemap|robots|favicon|.*\\.[^/]+$).*)'],
};
