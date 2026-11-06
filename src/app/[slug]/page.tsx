import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_LIST } from '@/content/guides';
import { buildMetadata } from '@/lib/seo';
import { GuidePage } from '@/components/GuidePage';

// صفحات الأدلة كلها بتعدّي من هنا. generateStaticParams بيولّدهم
// وقت البيلد، وأي مسار تاني بيروح على notFound() تحت.
//
// 🔴 كان هنا dynamicParams = false. شيلناها لأنها بتخلّي Next يرمي
//    NoFallbackError جوّه لكل مسار مجهول — بيرد 404 صح، بس بيملا
//    error.log بـstack trace على كل زحف بوت. notFound() بيوصل
//    لنفس النتيجة بالظبط من غير اللغوصة دي.
export function generateStaticParams() {
  return GUIDE_LIST.map((g) => ({ slug: g.slug }));
}

function findGuide(slug: string) {
  return GUIDE_LIST.find((g) => g.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) return {};

  return buildMetadata({
    path: `/${guide.slug}`,
    title: guide.title,
    description: guide.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) notFound();

  return <GuidePage guide={guide} />;
}
