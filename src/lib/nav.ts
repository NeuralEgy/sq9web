// ============================================================
// لينكات التنقل — في حتة واحدة.
//
// الموقع فيه نوعين صفحات، وكل نوع هيدره مختلف:
//
//   company  →  صفحات الشركة: الفلسفة، المشاريع، الشرا، الاتصال
//   project  →  صفحة المشروع: الأرقام، الوحدات، الحياة، الموقع
//
// و«base» هي البادئة اللي بتخلّي لينك المرساة يشتغل من صفحة تانية:
// فاضية لو إنت على نفس الصفحة، و«/aurora-palace» لو إنت على صفحة
// دليل وعايز ترجّع الزائر لقسم في صفحة المشروع، و«/» لو عايز
// ترجّعه لقسم في الرئيسية. من غيرها لينك #projects على صفحة تانية
// ما بيوديش حتة.
//
// 🔴 زرار الحجز دايمًا بيروح على صفحة المشروع بمسار كامل، مهما
//    كانت الصفحة. الفورم موجود في حتة واحدة بس في الموقع كله —
//    ودي الحتة الوحيدة اللي بتكتب في جدول visits.
//
// 🔴 والفوتر مش بيستخدم الليستتين دول. الفوتر بيعرض **كل** صفحات
//    الموقع من كل صفحة، عشان أي صفحة توصل لأي صفحة في نقرة —
//    ده اللي بيخلّي جوجل يزحف الموقع كله، والصفحة اليتيمة ما
//    بتترتبش.
// ============================================================

import { COPY } from '@/content/copy';
import { HAS_LEADERSHIP } from '@/data/leadership';
import { PROJECT_PATH } from '@/data/projects/aurora-palace';
import { ROUTES } from './routes';

export type NavLink = { href: string; label: string };

export const VISIT_HREF = `${PROJECT_PATH}#visit`;

export type NavVariant = 'company' | 'project';

/** لينكات الهيدر */
export function navLinks(variant: NavVariant, base = ''): ReadonlyArray<NavLink> {
  if (variant === 'company') {
    return [
      { href: ROUTES.philosophy, label: COPY.nav.philosophyPage },
      // بيظهر بس لما بيانات المؤسِّس توصل — شوف src/data/leadership.ts
      ...(HAS_LEADERSHIP
        ? [{ href: ROUTES.leadership, label: COPY.nav.leadership }]
        : []),
      // دي مرساة على الرئيسية، فمحتاجة base
      { href: `${base}#projects`, label: COPY.nav.projects },
      { href: ROUTES.buying, label: COPY.nav.buying },
      { href: ROUTES.sales, label: COPY.nav.sales },
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

/**
 * كل صفحات الموقع — للفوتر. ثابتة مهما كانت الصفحة اللي إنت
 * عليها، فكل المسارات بتتزحف من أي مكان.
 */
export function sitePages(): ReadonlyArray<NavLink> {
  return [
    { href: ROUTES.philosophy, label: COPY.nav.philosophyPage },
    ...(HAS_LEADERSHIP ? [{ href: ROUTES.leadership, label: COPY.nav.leadership }] : []),
    { href: PROJECT_PATH, label: COPY.nav.project },
    { href: ROUTES.buying, label: COPY.nav.buying },
    { href: ROUTES.sales, label: COPY.nav.sales },
    { href: ROUTES.faq, label: COPY.nav.faq },
    { href: ROUTES.contact, label: COPY.nav.contact },
    { href: VISIT_HREF, label: COPY.nav.visit },
  ];
}
