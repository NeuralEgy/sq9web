/** @type {import('next').NextConfig} */

// ترويسات أمان لموقع عام. مفيش منها حاجة بتكسر حاجة في الموقع،
// وكلها بتتفحص في أدوات التدقيق اللي العميل ممكن يشغّلها.
const securityHeaders = [
  // المتصفح ما يخمّنش نوع الملف — بيمنع رفع ملف بيتنفّذ كسكريبت
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // ممنوع حد يحط الموقع في iframe (clickjacking على زرار الحجز)
  { key: 'X-Frame-Options', value: 'DENY' },
  // لما الزائر يسيب الموقع، الموقع التاني يشوف الدومين بس مش الصفحة
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // مش محتاجين كاميرا ولا ميكروفون ولا موقع جغرافي
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // pg بيحمّل موديولات أصلية — لازم يفضل برّه الباندل بتاع السيرفر
  serverExternalPackages: ['pg'],

  // سوق موبايل-أولاً: الصور AVIF/WebP ومقاسات الموبايل الأول
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 828, 1080, 1280, 1920],
  },

  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        // صور المشاركة والأيقونات ثابتة — تتكاش سنة
        source: '/:path*/opengraph-image',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
