// بيحوّل **كده** لـ<strong> — الحاجة الوحيدة اللي محتاجينها من
// الماركداون في نصوص الموقع.
//
// كان جوّه GuidePage.tsx، واتنقل هنا لما صفحة الأسئلة احتاجته كمان.
// مفيش مكتبة ماركداون: الاحتياج سطر واحد، ومكتبة كاملة معناها
// كيلوبايتات على متصفح كل زائر عشان نخلّي كلمتين تقال.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
