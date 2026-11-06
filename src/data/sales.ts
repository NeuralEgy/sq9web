// ============================================================
// مكتب المبيعات — الناس والقنوات.
//
// 🔴 القنوات تحت كلها منشورة على square9.eg: نفس الرقم للمكالمات
//    والواتساب، والإيميل العام، والمقر. مفيش ولا قناة مضافة من
//    عندنا، ومفيش مواعيد عمل — مواعيد العمل مش منشورة، واللي
//    منشور هو مواعيد الزيارة الأربعة بتاعة الشقة النموذج (دي في
//    VISIT_SLOTS في ملف المشروع، مش هنا).
//
// 🔴 والأسامي فاضية لنفس سبب src/data/leadership.ts: مفيش ولا اسم
//    موظف منشور. فريق المبيعات لازم ييجي من العميل بالإيد.
//
// النصوص إنجليزي لأن الموقع إنجليزي. التعليقات عربي.
// ============================================================

import { DEVELOPER } from './company';

// ============================================================
// فريق المبيعات
// ============================================================
//
// اللي محتاجينه لكل واحد:
//
//   name       الاسم بالإنجليزي
//   role       المنصب (Sales Manager · Sales Consultant…)
//   languages  اللغات اللي بيتكلمها فعلًا. دي أهم حقل في البطاقة:
//              مشتري روسي أو ألماني بيدوّر على السطر ده قبل أي
//              حاجة تانية. وممنوع نخمّن لغة — لو مش متأكدين، تتشال.
//   phoneE164  رقم مباشر، اختياري. سيبه فاضي لو مفيش رقم مباشر
//              منشور للشخص ده — الزائر ساعتها بياخد رقم الشركة.
//   photo      اختيارية، في public/images/sales/. من غير صورة
//              البطاقة بترسم حرف الاسم الأول، فما تحطش صورة ستوك.
//
// 🔴 وقبل ما تحط أي اسم هنا: الشخص ده وافق إن اسمه وصورته ورقمه
//    يتنشروا على موقع عام؟ ده مش تفصيلة شكلية — ده بيانات شخصية
//    لموظف على صفحة مفتوحة للكل.
export type SalesPerson = {
  name: string;
  role: string;
  languages: ReadonlyArray<string>;
  phoneE164?: string;
  photo?: string;
};

/** 🔴 ليستة فاضية = مفيش أسامي متسلّمة. القسم بيختفي بالكامل. */
export const SALES_TEAM: ReadonlyArray<SalesPerson> = [];

export const HAS_SALES_TEAM = SALES_TEAM.length > 0;

// ============================================================
// قنوات الاتصال المنشورة
// ============================================================
//
// الترتيب هنا هو ترتيب الظهور، وهو مقصود: الواتساب الأول لأنه
// الأسرع فعلًا، والإيميل آخر حاجة لأنه القناة اللي بتسيب ورق —
// وده اللي الموقع بينصح بيه في كل صفحة.
//
// 🔴 الـkey بيربط القناة بنصّها في COPY.salesPage.channels، والـ
//    href بيتبني في المكوّن من DEVELOPER. يعني الرقم مكتوب في حتة
//    واحدة بس في المشروع كله.
export const SALES_CHANNELS = [
  { key: 'whatsapp', value: DEVELOPER.phoneDisplay },
  { key: 'phone', value: DEVELOPER.phoneDisplay },
  { key: 'email', value: DEVELOPER.email },
] as const;

export type SalesChannelKey = (typeof SALES_CHANNELS)[number]['key'];

// ============================================================
// 🔴 اللي مش منشور عن المبيعات — ممنوع يظهر على الموقع
//
// نفس فكرة COMPANY_NOT_PUBLISHED: الجرد ده بيمنعنا نملا الفراغ
// من دمّنا. أي قسم جديد على صفحة /sales: اقرا ده الأول.
// ============================================================
export const SALES_NOT_PUBLISHED = {
  team: 'No sales employee is named anywhere — zero names published',
  officeHours: 'No opening hours are published; only the four visit times exist',
  reservation: 'No reservation fee, holding period, or booking procedure is published',
  commission: 'No brokerage or commission arrangement is published',
  languages: 'Which languages the desk speaks is not published',
  branches: 'No sales branch outside Magawish is published',
  // 🔴 الواتساب بيرد عليه مساعد آلي (square9Agent). ده حقيقة، بس
  //    نشرها على الصفحة قرار العميل مش قرارنا — في بلاد كتير
  //    الإفصاح ده مطلوب قانونًا. لحد ما العميل يقرر، الصفحة
  //    بتقول «الأسرع» وما بتقولش مين بيرد.
  whatsappAutomation: 'Whether WhatsApp is answered by an assistant is a disclosure the client must decide',
} as const;
