import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDE_LIST } from '@/content/guides';
import { buildMetadata } from '@/lib/seo';
import { GuidePage } from '@/components/GuidePage';

// صفحات الأدلة كلها بتعدّي من هنا. generateStaticParams بيولّدهم
// وقت البيلد، و dynamicParams=false بيخلّي أي مسار تاني 404 بدل ما
// يتولّد صفحة فاضية.
export function generateStaticParams() {
  return GUIDE_LIST.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

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
