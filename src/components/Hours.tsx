import Image from 'next/image';
import Link from 'next/link';
import { COPY } from '@/content/copy';
import { IMAGES, PROJECT_PATH } from '@/data/projects/aurora-palace';
import { VISIT_HREF } from '@/lib/nav';

// ============================================================
// شريط الساعات التلاتة — الحتة البصرية الكبيرة على الرئيسية.
//
// 🔴 ليه تلات صور مش معرض كامل: التمن رندرات اللي عندنا كلهم نفس
//    الفناء من زوايا متقاربة في ساعات مختلفة. ست صور جنب بعض كانت
//    هتبان تكرار ورخيصة. تلاتة مرتّبين بالساعة بيبقوا حجّة.
//
// 🔴 والترتيب مقصود: الضهر الأول وهو كامل العرض، بعدين الغروب
//    والليل جنب بعض. كل المطوّرين بيبدأوا بالغروب — وده بالظبط
//    اللي صفحة الفلسفة بتقول عليه إنه بيضلّل.
//
// 🔴 وكل صورة مكتوب تحتها إنها رندر، وفي الـalt كمان. مفيش صورة
//    على الموقع ده تتعرض كأنها تصوير لحاجة مبنية، غير لما تبقى
//    كده فعلًا.
//
// الخلفية غامقة (bg-ink): الرندرات بتبان أحسن عليها، والقسم
// بيكسر البياض اللي ماشي على طول الصفحة. والألوان على الغامق
// sun مش sea — sea على ink بيسقط في فحص التباين.
// ============================================================
export function Hours() {
  const C = COPY.company.hours;

  return (
    <section className="bg-ink py-16 text-foam lg:py-24">
      <div className="shell">
        <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.26em] text-sun">
          <span className="h-px w-10 bg-sun" />
          {C.eyebrow}
        </p>

        <h2 className="section-title mt-6 max-w-4xl">
          {C.titleLead} <em className="italic text-sun">{C.titleAccent}</em>
        </h2>

        <p className="mt-7 max-w-3xl text-[clamp(1.05rem,1.5vw,1.3rem)] font-light leading-relaxed text-foam/80">
          {C.lead}
        </p>
      </div>

      {/* ===== الضهر — كامل العرض، بره .shell زي الهيرو ===== */}
      <figure className="mt-12 lg:mt-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
          <Image
            src={IMAGES.dayPool}
            alt="Render of the Aurora Palace courtyard and main pool at midday, Magawish, Hurghada"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Caption label={C.shots.day.label} note={C.shots.day.note} />
      </figure>

      {/* ===== الغروب والليل — جنب بعض ===== */}
      <div className="shell mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-10">
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
            <Image
              src={IMAGES.sunsetPool}
              alt="Render of the Aurora Palace pool at sunset, Magawish, Hurghada"
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
          <Caption label={C.shots.sunset.label} note={C.shots.sunset.note} inShell={false} />
        </figure>

        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
            <Image
              src={IMAGES.familyNight}
              alt="Render of the Aurora Palace courtyard lit after dark, Magawish, Hurghada"
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
          <Caption label={C.shots.night.label} note={C.shots.night.note} inShell={false} />
        </figure>
      </div>

      {/* ===== اللي مش رندر ===== */}
      <div className="shell mt-16 border-t border-foam/15 pt-10 lg:mt-20">
        <div className="grid gap-9 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <p className="max-w-2xl text-[clamp(1.05rem,1.5vw,1.3rem)] font-light leading-relaxed text-foam/80">
            {C.note}
          </p>
          <div className="flex flex-wrap items-start gap-3 lg:justify-end">
            <Link
              href={VISIT_HREF}
              className="rounded-full bg-sun px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:bg-foam"
            >
              {C.cta}
            </Link>
            <Link
              href={PROJECT_PATH}
              className="rounded-full border border-foam/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:bg-foam/10"
            >
              {C.projectCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** الساعة + سطر عنها. inShell=true للصورة الكاملة العرض بس */
function Caption({
  label,
  note,
  inShell = true,
}: {
  label: string;
  note: string;
  inShell?: boolean;
}) {
  return (
    <figcaption
      className={`${inShell ? 'shell ' : ''}mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6`}
    >
      <span className="shrink-0 text-[12px] uppercase tracking-[0.2em] text-sun">{label}</span>
      <span className="max-w-xl font-light leading-relaxed text-foam/70">{note}</span>
    </figcaption>
  );
}
