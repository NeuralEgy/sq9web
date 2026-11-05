// غلاف موحّد لكل قسم — عشان المسافات والعناوين تبقى واحدة في الصفحة كلها
export function Section({
  id,
  kicker,
  heading,
  lead,
  children,
  tone = 'light',
}: {
  id?: string;
  kicker?: string;
  heading?: string;
  lead?: string;
  children: React.ReactNode;
  tone?: 'light' | 'muted';
}) {
  return (
    <section
      id={id}
      // scroll-mt عشان الهيدر اللاصق ما يغطّيش عنوان القسم لما اللينك يوديله
      className={`scroll-mt-20 py-16 sm:py-24 ${tone === 'muted' ? 'bg-sand-100' : ''}`}
    >
      <div className="container-x">
        {(kicker || heading || lead) && (
          <header className="max-w-2xl">
            {kicker && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea-600">
                {kicker}
              </p>
            )}
            {heading && (
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                {heading}
              </h2>
            )}
            {lead && <p className="mt-4 text-lg leading-relaxed text-ink-700">{lead}</p>}
          </header>
        )}
        <div className={kicker || heading || lead ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  );
}
