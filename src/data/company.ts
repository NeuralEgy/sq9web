// ============================================================
// بيانات Square9 Developments — الشركة نفسها، مش المشروع.
//
// 🔴 نفس قاعدة ملفات البيانات كلها: كل سطر هنا لازم يكون منشور فعلًا
//    على square9.eg أو متسلّم من العميل بالإيد.
//
//    والقاعدة دي أخطر هنا منها في أي ملف تاني. ملف المشروع لو كتبنا
//    فيه رقم غلط العميل يخسر مشتري؛ الملف ده فيه كلام عن ناس حقيقيين
//    وعن سجل شركة. اسم عضو مجلس إدارة مخترع أو سنة تأسيس مخترعة ده
//    نشر بيانات غلط عن أشخاص وعن كيان تجاري — غلط من نوع تاني خالص.
//
//    فمفيش ولا اسم ولا تاريخ ولا رقم إنجاز في الملف ده. اللي موجود
//    تحت COMPANY_NOT_PUBLISHED مش «نواقص» — ده الجرد اللي بيمنعنا
//    نملا الفراغ من دمّنا.
//
// النصوص إنجليزي لأن الموقع إنجليزي. التعليقات عربي.
// ============================================================

// ===== الشركة =====
export const DEVELOPER = {
  name: 'Square9 Developments',
  shortName: 'SQUARE9',
  tagline: 'Made to Live Together',

  email: 'info@square9.eg',

  // الرقم المنشور — نفس الرقم للمكالمات والواتساب، وعليه الـagent
  phoneE164: '+201070015929',
  phoneDisplay: '+20 107 001 5929',

  // 🔴 موقع العميل الحالي فيه الرقم غلط: wa.me/2001070015929
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

// ===== المقر =====
// نفس عنوان المشروع دلوقتي، بس ده عنوان الشركة مش عنوان المجمّع.
// مفصولين عن قصد: أول ما يبقى فيه مشروع تاني، ده يفضل ثابت وده يتغيّر.
export const HEAD_OFFICE = {
  address: '9 Magawish District, Hurghada, Red Sea',
  city: 'Hurghada',
  region: 'Red Sea',
  country: 'EG',
} as const;

// ===== اللي الشركة نشرته عن نفسها =====
// 🟢 الحاجتين دول منشورين بالنص على square9.eg. أي كلام تاني عن
//    الشركة على موقعنا لازم يكون صياغة للاتنين دول أو لحقايق المشروع
//    اللي في ملف المشروع — مش إضافة من عندنا.
export const PUBLISHED_ABOUT = {
  /** جملة الرؤية المنشورة، حرفيًا */
  visionSentence:
    'Square9 was founded with a clear vision: to create communities where people truly belong.',
  /** وصف الشركة لشغلها في الغردقة، حرفيًا */
  hurghadaSentence:
    'In Hurghada, we build more than residences — we create neighborhoods where families thrive.',
} as const;

// ===== المقومات =====
// 🔴 القسم ده أخطر قسم في الموقع كله، لأنه بطبيعته بيدعو للتهويل.
//    القاعدة: كل مقومة هنا لازم يكون وراها حقيقة منشورة تسندها،
//    و«evidence» هي الحقيقة دي بالظبط. لو مقومة مالهاش سند، مكانها
//    مش هنا — مكانها COMPANY_NOT_PUBLISHED لحد ما العميل يبعت السند.
//
//    عمدًا مفيش هنا: «رائدة في السوق» · «سنين من الخبرة» ·
//    «آلاف العملاء» · أي صفة الشركة ما نشرتهاش عن نفسها.
export const CAPABILITIES: ReadonlyArray<{
  key: string;
  evidence: 'self-build' | 'scale' | 'density' | 'contract';
}> = [
  // بيبني بنفسه مش شركة تسويق — متسلّمة من العميل بالإيد
  { key: 'selfBuild', evidence: 'self-build' },
  // ٦٠٪ مباني / ٤٠٪ لاندسكيب — منشور
  { key: 'landscape', evidence: 'density' },
  // ١٤٠ وحدة أرضي + ٤ أدوار — منشور
  { key: 'smallScale', evidence: 'scale' },
  // Green Contract + تشطيب كامل — منشور
  { key: 'contract', evidence: 'contract' },
];

// ============================================================
// 🔴 اللي الشركة ما نشرتهوش عن نفسها — ممنوع يظهر على الموقع
//
// الجرد ده مبني على قراءة square9.eg كله. مفيش ولا واحدة من دي
// منشورة في أي حتة، ومفيش ولا واحدة متسلّمة من العميل.
//
// أي حد بيزوّد قسم جديد للموقع: اقرا الليستة دي الأول. لو القسم
// محتاج حاجة من هنا، القسم ما يتبنيش — يتطلب من العميل.
// ============================================================
export const COMPANY_NOT_PUBLISHED = {
  // أهم واحدة. صفر أسامي على الموقع كله: لا رئيس مجلس، لا عضو
  // منتدب، لا مؤسس، لا مدير. حتى التواصل إيميل عام.
  board: 'No board member, founder, or executive is named anywhere — zero names published',
  foundingYear: 'The site says "was founded" with no date',
  projectsDelivered: 'No delivered project is named or counted',
  unitsDelivered: 'No handover or delivery figure exists (Aurora is off-plan, 2028)',
  licences: 'No licence, registration, or regulatory number is published',
  awards: 'No award or ranking is published',
  partners: 'No partner, contractor, consultant, or architect is named',
  parentCompany: 'No group or parent company is published',
  otherProjects: 'Aurora Palace is the only project — labelled "Our Signature Project"',
  financials: 'No capital, turnover, or investment figure is published',
} as const;
