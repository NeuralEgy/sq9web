// ============================================================
// بيانات Aurora Palace — **المنشور بس**
//
// 🔴 قاعدة الملف ده (نفس قاعدة src/knowledge/project.js في ريبو الـagent):
//    كل سطر هنا لازم يكون منشور فعلًا على square9.eg أو متسلّم من العميل
//    بالإيد. اللي مش منشور بيروح تحت NOT_PUBLISHED، والموقع بيعرض حجز
//    زيارة مكانه — مش رقم مخترع. الموقع ده بيبيع شقق بملايين.
//
//    الرقم الوحيد المنشور عن السداد: ١٠٪ مقدم. مفيش ولا سعر في أي مكان.
//
// النصوص إنجليزي لأن الموقع إنجليزي. التعليقات عربي.
// ============================================================

// ===== المطوّر =====
export const DEVELOPER = {
  name: 'Square9 Developments',
  shortName: 'SQUARE9',
  tagline: 'Made to Live Together',

  email: 'info@square9.eg',

  // الرقم المنشور — نفس الرقم للمكالمات والواتساب، وعليه الـagent
  phoneE164: '+201070015929',
  phoneDisplay: '+20 107 001 5929',

  // 🔴 الموقع الحالي فيه الرقم غلط: wa.me/2001070015929 و tel:+2001070015929
  //    (صفر زيادة) — واتساب بيرفض اللينك ده. الصح تحت.
  whatsappNumber: '201070015929',

  social: {
    instagram: 'https://instagram.com/square9eg',
    facebook: 'https://facebook.com/square9eg',
    linkedin: 'https://linkedin.com/company/square9eg',
    youtube: 'https://www.youtube.com/@Square9eg',
  },
} as const;

/** لينك واتساب مع رسالة جاهزة — الـagent هو اللي بيرد عليه */
export function whatsappUrl(prefilled?: string): string {
  const base = `https://wa.me/${DEVELOPER.whatsappNumber}`;
  return prefilled ? `${base}?text=${encodeURIComponent(prefilled)}` : base;
}

// ===== المشروع =====
export const PROJECT = {
  name: 'Aurora Palace',
  status: 'Launching Now',

  totalUnits: 140,
  areaMinM2: 54,
  areaMaxM2: 142,
  landAreaM2: 6000,
  buildingsPercent: 60,
  landscapePercent: 40,
  floorsAbove: 4,
  deliveryYear: 2028,

  finishing: 'Fully finished',
  contract: 'Green Contract',
} as const;

// ===== الموقع =====
export const LOCATION = {
  address: '9 Magawish District, Hurghada, Red Sea',
  area: 'Magawish',
  city: 'Hurghada',
  region: 'Red Sea',
  mapsUrl: 'https://maps.app.goo.gl/uyRN7Wzho5UGd6De9',
  // ⚠️ مفيش إحداثيات هنا عن قصد. اللي كان عندنا تقريبي لمنطقة مجاويش
  //    ولسه ما اتأكدش من العميل، وإحداثية غلط بتحط دبوس المشروع في
  //    مكان تاني على الخريطة.
} as const;

/** المسافات المنشورة على صفحة Aurora Palace */
export const DISTANCES: ReadonlyArray<{ place: string; minutes: number }> = [
  { place: 'Hurghada Airport', minutes: 10 },
  { place: 'Senzo Mall', minutes: 10 },
  { place: 'Marina Boulevard', minutes: 15 },
  { place: 'City centre', minutes: 20 },
];

// ===== المرافق — منشورين على موقعهم، مفيش حاجة مزوّدة من عندنا =====
export const AMENITIES: ReadonlyArray<{ label: string; note?: string }> = [
  { label: 'Four swimming pools', note: 'One of them for children' },
  { label: 'Restaurant' },
  { label: 'Gym' },
  { label: 'Four elevators' },
  { label: '24/7 security', note: 'Single gated entrance' },
  { label: 'Jacuzzi', note: 'In selected units' },
  { label: 'Landscaped gardens', note: '40% of the land' },
];

// ===== أنواع الوحدات =====
// 🔴 مفيش سعر ولا حالة توفّر — عمدًا. المنشور هو المساحات بس.
//    و«note» وصف للتخطيط مش وعد بمواصفات.
export const UNIT_TYPES: ReadonlyArray<{
  code: string;
  name: string;
  areaMinM2: number;
  areaMaxM2: number;
  note: string;
}> = [
  {
    code: 'studio',
    name: 'Studio',
    areaMinM2: 54,
    areaMaxM2: 80,
    note: 'One room, a kitchen and a terrace.',
  },
  {
    code: '1br',
    name: 'One bedroom',
    areaMinM2: 65,
    areaMaxM2: 102,
    note: 'A separate bedroom and a full living room.',
  },
  {
    code: '2br',
    name: 'Two bedrooms',
    areaMinM2: 101,
    areaMaxM2: 142,
    note: 'Room for a family that is staying.',
  },
];

// ===== السداد =====
export const PAYMENT = {
  // 🟢 الرقم الوحيد المنشور عن السداد في أي مكان
  downPaymentPercent: 10,
} as const;

// ===== مواعيد الزيارة =====
// الأربعة اللي على فورم موقعهم — ولازم يطابقوا قيد CHECK في جدول visits
export const VISIT_SLOTS = [
  { value: '09:00', label: '09:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '16:00', label: '04:00 PM' },
] as const;

export type VisitSlot = (typeof VISIT_SLOTS)[number]['value'];

export const VISIT_SLOT_VALUES: ReadonlyArray<string> = VISIT_SLOTS.map((s) => s.value);

// ===== الصور =====
// ⚠️ دي الصور الوحيدة اللي بتخص Aurora Palace فعلًا. الصور التانية اللي
//    على موقعهم الحالي (community/lifestyle/interior/amenities) صور ستوك
//    عامة — واحدة منها صورة مموّهة لست شايلة ورد — فاتشالت.
export const IMAGES = {
  sunsetPool: '/images/aurora/sunset-pool.jpg',
  aerialPool: '/images/aurora/aerial-pool.jpg',
  dayPool: '/images/aurora/day-pool.jpg',
  kidsPool: '/images/aurora/kids-pool.jpg',
  nightExterior: '/images/aurora/night-exterior.jpg',
  nightPool: '/images/aurora/night-pool.jpg',
  nightReading: '/images/aurora/night-reading.jpg',
  familyNight: '/images/aurora/family-night.jpg',
} as const;

// ============================================================
// 🔴 اللي مش منشور — ممنوع يظهر على الموقع بأي رقم أو تفصيلة
// ============================================================
export const NOT_PUBLISHED = {
  prices: 'Unit prices are neither published nor supplied by Square9',
  paymentPlanDetail: 'Payment plan detail — only the 10% down payment is published',
  availability: 'Per-unit status (available / reserved / sold)',
  brochure: 'No downloadable brochure exists',
  floorPlans: 'No floor plans or unit photographs are published',
  yields: 'No rental yield or occupancy figures are published',
  geo: 'Exact coordinates are unconfirmed',
} as const;
