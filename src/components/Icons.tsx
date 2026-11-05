// أيقونات SVG جوّه الصفحة مباشرة — مفيش مكتبة أيقونات، مفيش طلب شبكة زيادة.
// كل واحدة 24×24 و stroke بيورّث لون النص.

type IconProps = { className?: string };

function Svg({ className = 'h-6 w-6', children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconPool(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M2 17c1.6 0 1.6 1.3 3.2 1.3S6.8 17 8.4 17s1.6 1.3 3.2 1.3S13.2 17 14.8 17s1.6 1.3 3.2 1.3S19.6 17 22 17" />
      <path d="M2 21c1.6 0 1.6-1 3.2-1S6.8 21 8.4 21s1.6-1 3.2-1 1.6 1 3.2 1 1.6-1 3.2-1 1.6 1 4 1" />
      <path d="M7 15V5a2 2 0 1 1 4 0M13 15V5a2 2 0 1 1 4 0" />
      <path d="M7 8h4M7 11.5h4M13 8h4M13 11.5h4" />
    </Svg>
  );
}

export function IconRestaurant(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10" />
      <path d="M17 3c-1.7 1-2.5 3-2.5 5.5S15.3 13 17 13v8" />
    </Svg>
  );
}

export function IconGym(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
    </Svg>
  );
}

export function IconElevator(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 9l1.5-2L12 9M15 15l-1.5 2L12 15" />
      <path d="M12 3v18" />
    </Svg>
  );
}

export function IconSecurity(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6z" />
      <path d="M9.5 12l1.8 1.8 3.5-3.6" />
    </Svg>
  );
}

export function IconJacuzzi(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M8 9c0-1.5-1.5-1.5-1.5-3S8 3 8 3M12 9c0-1.5-1.5-1.5-1.5-3S12 3 12 3M16 9c0-1.5-1.5-1.5-1.5-3S16 3 16 3" />
    </Svg>
  );
}

export function IconGreen(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M11 21c0-6 2-10 8-12-1 7-4 10-8 12z" />
      <path d="M11 21c-3-1-6-3.5-6-8 0-3 2-5 5-5 1.2 0 2.2.3 3 .8" />
    </Svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconFamily(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="8" cy="7" r="2.6" />
      <circle cx="16.5" cy="8.5" r="2" />
      <path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h1A4.5 4.5 0 0 1 13 18.5V20" />
      <path d="M15 20v-1a3.5 3.5 0 0 1 3.5-3.5h.5A2.5 2.5 0 0 1 21.5 18v2" />
    </Svg>
  );
}

export function IconInvestor(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 20h18" />
      <path d="M6 20v-5M11 20V9M16 20v-8M21 20V5" />
      <path d="M5 10l5-4 4 2 6-5" />
    </Svg>
  );
}

export function IconWhatsapp({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 13.98c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.08-1.76-.2-.44-.17-1.01-.36-1.74-.68-3.06-1.32-5.06-4.4-5.21-4.6-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.55c.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.46.53-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.74-.17 1.42z" />
    </svg>
  );
}

/** الأيقونة المناسبة لكل مرفق حسب المفتاح في src/data/project.ts */
export const AMENITY_ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  pools: IconPool,
  restaurant: IconRestaurant,
  gym: IconGym,
  elevators: IconElevator,
  security: IconSecurity,
  jacuzzi: IconJacuzzi,
  green: IconGreen,
};
