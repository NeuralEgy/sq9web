/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // سوق موبايل-أولاً: الصور AVIF/WebP ومقاسات الموبايل الأول
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 828, 1080, 1280, 1920],
  },
};

export default nextConfig;
