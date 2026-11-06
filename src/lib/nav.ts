// ============================================================
// لينكات التنقل — في حتة واحدة.
//
// الموقع بقى فيه نوعين صفحات، وكل نوع ليه أقسام مختلفة:
//
//   company  →  الصفحة الرئيسية: الشركة، رؤيتها، فكرها، مشاريعها
//   project  →  صفحة المشروع: الأرقام، الوحدات، الحياة، الموقع، الزيارة
//
// و«base» هي البادئة اللي بتخلّي لينك المرساة يشتغل من صفحة تانية:
// فاضية لو إنت على نفس الصفحة، و«/aurora-palace» لو إنت على صفحة دليل
// وعايز ترجّع الزائر لقسم في صفحة المشروع. من غيرها لينك #units على
// صفحة دليل ما بيوديش حتة.
//
// 🔴 زرار الحجز دايمًا بيروح على صفحة المشروع بمسار كامل، مهما كانت
//    الصفحة. الفورم موجود في حتة واحدة بس في الموقع كله — ودي الحتة
//    الوحيدة اللي بتكتب في جدول visits.
// ============================================================

import { COPY } from '@/content/copy';
import { PROJECT_PATH } from '@/data/projects/aurora-palace';
import { ROUTES } from './routes';

export type NavLink = { href: string; label: string };

export const VISIT_HREF = `${PROJECT_PATH}#visit`;

export type NavVariant = 'company' | 'project';

export function navLinks(variant: NavVariant, base = ''): ReadonlyArray<NavLink> {
  if (variant === 'company') {
    return [
      { href: `${base}#vision`, label: COPY.nav.vision },
      { href: `${base}#philosophy`, label: COPY.nav.philosophy },
      { href: `${base}#strengths`, label: COPY.nav.strengths },
      { href: `${base}#projects`, label: COPY.nav.projects },
      // 🔴 دي صفحة مستقلة مش مرساة، فمالهاش base — بتشتغل من أي صفحة
      { href: ROUTES.contact, label: COPY.nav.contact },
    ];
  }

  return [
    { href: `${base}#project`, label: COPY.nav.project },
    { href: `${base}#residences`, label: COPY.nav.residences },
    { href: `${base}#life`, label: COPY.nav.life },
    { href: `${base}#location`, label: COPY.nav.location },
  ];
}

/** لينكات الفوتر = لينكات الهيدر + الأسئلة + الزيارة */
export function footerLinks(variant: NavVariant, base = ''): ReadonlyArray<NavLink> {
  return [
    ...navLinks(variant, base),
    { href: ROUTES.faq, label: COPY.nav.faq },
    { href: VISIT_HREF, label: COPY.nav.visit },
  ];
}
