import type { Config } from 'tailwindcss';

// ألوان المشروع: رمل الغردقة · حبر غامق · أزرق البحر الأحمر · ذهبي للتمييز
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbf8f3',
          100: '#f4ece0',
          200: '#e8d8c3',
          300: '#d9bf9d',
        },
        ink: {
          700: '#2b3140',
          800: '#1d2230',
          900: '#12161f',
        },
        sea: {
          400: '#3d8fa6',
          600: '#1f6a80',
          800: '#114654',
        },
        gold: {
          400: '#c9a24a',
          500: '#b08b33',
          // 🔴 للنص على خلفية فاتحة بس: gold-500 بيدي تباين 3.0:1 وده
          // تحت حد AA (4.5). الدرجة دي بتدي 4.7:1 بنفس الإحساس البصري.
          600: '#8a6c22',
        },
      },
      fontFamily: {
        // خط واحد بيغطي العربي واللاتيني — أسرع على الموبايل من خطين
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
