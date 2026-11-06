// ============================================================
// سجل المشاريع.
//
// مشروع جديد = ملف جديد في الفولدر ده + سطر في PROJECTS. الصفحة
// الرئيسية وصفحة المشاريع والـsitemap كلهم بيقروا من هنا، فمفيش
// حتة تانية محتاجة تتعدّل.
//
// 🔴 الترتيب هنا هو الترتيب على الصفحة. المشروع الشغّال الأول.
// ============================================================

import { AURORA_SUMMARY } from './aurora-palace';
import type { ProjectSummary } from './types';

export const PROJECTS: ReadonlyArray<ProjectSummary> = [AURORA_SUMMARY];

/** مسارات صفحات المشاريع — بتدخل في sitemap و ALL_PATHS */
export const PROJECT_PATHS: ReadonlyArray<string> = PROJECTS.map((p) => `/${p.slug}`);

export type { ProjectSummary };
