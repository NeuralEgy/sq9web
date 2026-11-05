// ============================================================
// بيانات Aurora Palace — **المنشور بس**
//
// 🔴 قاعدة الملف ده (نفس قاعدة src/knowledge/project.js في ريبو الـagent):
//    كل سطر هنا لازم يكون منشور فعلًا على square9.eg أو متسلّم من العميل بالإيد.
//    اللي مش منشور بيروح تحت NOT_PUBLISHED، والموقع بيعرض «حجز زيارة» مكانه —
//    مش رقم مخترع. الموقع ده بيبيع شقق بملايين؛ رقم غلط = مشكلة قانونية.
//
//    الرقم الوحيد المنشور عن السداد هو ١٠٪ مقدم. مفيش ولا سعر منشور في أي مكان.
// ============================================================

/** نص بلغتين — كل محتوى معروض لازم يكون كده */
export type Bilingual = { ar: string; en: string };

// ===== المطوّر =====
export const DEVELOPER = {
  name: { ar: 'سكوير ٩', en: 'Square9 Developments' },
  tagline: { ar: 'مبنية عشان نعيش مع بعض', en: 'Made to Live Together' },
  kind: {
    ar: 'مطوّر عقاري بيبني بنفسه — مش شركة تسويق',
    en: 'A developer that builds its own residences — not a marketing agency',
  },

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

  status: { ar: 'بيتبع دلوقتي', en: 'Launching Now' },

  totalUnits: 140,
  areaMinM2: 54,
  areaMaxM2: 142,
  landAreaM2: 6000,
  landSplit: { buildingsPercent: 60, landscapeAndPoolsPercent: 40 },
  floors: { ground: true, above: 4 },
  deliveryYear: 2028,

  finishing: { ar: 'تشطيب كامل', en: 'Fully Finished' },
  contract: { ar: 'Green Contract', en: 'Green Contract' },
  saleType: {
    ar: 'بيع على الخريطة — التسليم ٢٠٢٨',
    en: 'Off-plan — delivery 2028',
  },
} as const;

// ===== الموقع =====
export const LOCATION = {
  address: {
    ar: '٩ منطقة مجاويش، الغردقة، البحر الأحمر',
    en: '9 Magawish District, Hurghada, Red Sea',
  },
  area: { ar: 'مجاويش', en: 'Magawish' },
  city: { ar: 'الغردقة', en: 'Hurghada' },
  // لينك الاتجاهات المنشور على موقعهم
  mapsUrl: 'https://maps.app.goo.gl/uyRN7Wzho5UGd6De9',
  // ⚠️ إحداثيات تقريبية لمنطقة مجاويش — لازم تتأكد من العميل قبل أي خريطة أو JSON-LD
  geo: { lat: 27.1783, lng: 33.8192 },
} as const;

/** المسافات المنشورة على صفحة Aurora Palace */
export const DISTANCES: ReadonlyArray<{ place: Bilingual; minutes: number }> = [
  { place: { ar: 'مطار الغردقة', en: 'Hurghada Airport' }, minutes: 10 },
  { place: { ar: 'سنزو مول', en: 'Senzo Mall' }, minutes: 10 },
  { place: { ar: 'مارينا بوليفارد', en: 'Marina Boulevard' }, minutes: 15 },
  { place: { ar: 'وسط البلد', en: 'City Center' }, minutes: 20 },
];

// ===== المرافق =====
// منشورين على موقعهم — مفيش حاجة مزوّدة من عندنا
export const AMENITIES: ReadonlyArray<{ key: string; label: Bilingual; note?: Bilingual }> = [
  { key: 'pools', label: { ar: '٤ حمامات سباحة', en: '4 Swimming Pools' } },
  { key: 'restaurant', label: { ar: 'مطعم', en: 'Restaurant' } },
  { key: 'gym', label: { ar: 'جيم', en: 'Gym' } },
  { key: 'elevators', label: { ar: '٤ أسانسيرات', en: '4 Elevators' } },
  { key: 'security', label: { ar: 'أمن ٢٤ ساعة', en: '24/7 Security' } },
  {
    key: 'jacuzzi',
    label: { ar: 'جاكوزي', en: 'Jacuzzi' },
    note: { ar: 'في وحدات مختارة', en: 'In selected units' },
  },
  {
    key: 'green',
    label: { ar: 'لاندسكيب وحدايق', en: 'Landscaped Gardens' },
    note: { ar: '٤٠٪ من الأرض', en: '40% of the land' },
  },
];

// ===== أنواع الوحدات =====
// 🔴 مفيش سعر ولا حالة توفّر — عمدًا. المنشور هو المساحات بس.
export const UNIT_TYPES: ReadonlyArray<{
  code: string;
  name: Bilingual;
  areaMinM2: number;
  areaMaxM2: number;
}> = [
  { code: 'studio', name: { ar: 'ستوديو', en: 'Studio' }, areaMinM2: 54, areaMaxM2: 80 },
  { code: '1br', name: { ar: 'غرفة وصالة', en: '1 Bedroom' }, areaMinM2: 65, areaMaxM2: 102 },
  { code: '2br', name: { ar: 'غرفتين وصالة', en: '2 Bedrooms' }, areaMinM2: 101, areaMaxM2: 142 },
];

// ===== السداد =====
export const PAYMENT = {
  // 🟢 الرقم الوحيد المنشور عن السداد في أي مكان
  downPaymentPercent: 10,
  // «flexible payment plans» منشورة كجملة من غير أي تفصيلة
  flexibleNote: {
    ar: 'خطط سداد مرنة — التفاصيل من مكتب البيع',
    en: 'Flexible payment plans — details from the sales office',
  },
} as const;

// ===== مواعيد الزيارة =====
// الأربعة اللي على فورم موقعهم — ولازم يطابقوا قيد CHECK في جدول visits
export const VISIT_SLOTS = [
  { value: '09:00', label: { ar: '٩:٠٠ ص', en: '09:00 AM' } },
  { value: '11:00', label: { ar: '١١:٠٠ ص', en: '11:00 AM' } },
  { value: '14:00', label: { ar: '٢:٠٠ م', en: '02:00 PM' } },
  { value: '16:00', label: { ar: '٤:٠٠ م', en: '04:00 PM' } },
] as const;

export type VisitSlot = (typeof VISIT_SLOTS)[number]['value'];

export const VISIT_SLOT_VALUES: ReadonlyArray<string> = VISIT_SLOTS.map((s) => s.value);

// ============================================================
// 🔴 اللي مش منشور — ممنوع يظهر على الموقع بأي رقم أو تفصيلة
//
//    الموقع لما يوصل لأي حاجة من دول، بيعرض CTA حجز زيارة أو واتساب،
//    وبيقول «مكتب البيع هيأكد» — بالظبط زي ما الـagent بيعمل.
// ============================================================
export const NOT_PUBLISHED = {
  prices: {
    ar: 'الأسعار مش منشورة ولا متسلّمة من سكوير ٩',
    en: 'Prices are not published and have not been provided by Square9',
  },
  paymentPlanDetail: {
    ar: 'تفاصيل خطط السداد — المنشور بس ١٠٪ مقدم',
    en: 'Payment plan details — only the 10% down payment is published',
  },
  availability: {
    ar: 'حالة كل وحدة (متاح / محجوز / مُباع)',
    en: 'Per-unit status (available / reserved / sold)',
  },
  brochure: {
    ar: 'مفيش بروشور قابل للتحميل',
    en: 'No downloadable brochure exists',
  },
  floorPlans: {
    ar: 'مفيش مخططات وحدات منشورة',
    en: 'No floor plans are published',
  },
} as const;
