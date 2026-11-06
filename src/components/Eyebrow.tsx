// العنوان الصغير فوق كل قسم — خط قصير وبعده النص بتباعد حروف واسع.
// متكرر في كل قسم فمستحق مكوّن لوحده.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="h-px w-10 bg-clay" />
      {children}
    </p>
  );
}

/** عنوان قسم: جزء عادي + جزء مائل باللون المميّز */
export function SectionTitle({
  lead,
  accent,
  className = '',
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  return (
    <h2 className={`section-title ${className}`}>
      {lead} <em className="italic text-clay">{accent}</em>
    </h2>
  );
}
