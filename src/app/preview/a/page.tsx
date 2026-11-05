import Image from 'next/image';

// ============================================================
// اتجاه A — «Editorial Black»
//
// الفكرة: هوية سكوير ٩ الحالية (أسود · سيريف ضخم · مائل ذهبي) بس
// منفّذة بإحكام أعلى — صور كاملة العرض، مساحات فاضية كتير، وخطوط
// رفيعة بتقسّم الصفحة زي مجلة معمارية.
//
// 🔴 ولا سعر ولا خطة سداد ولا حالة وحدة. القسم الأسود اللي اسمه
//    «The question everyone asks first» هو اللي بيقف مكان السعر.
// ============================================================

const GOLD = 'text-[#c9a24a]';

export default function DirectionA() {
  return (
    <div className="min-h-screen bg-black font-ui text-white antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Project />
      <Residences />
      <Pricing />
      <Gallery />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6 lg:px-10">
        <span className="font-display-a text-xl tracking-[0.2em]">SQUARE9</span>
        <nav className="hidden gap-10 text-[11px] uppercase tracking-[0.22em] text-white/60 md:flex">
          {['The Project', 'Residences', 'Location', 'Visit'].map((l) => (
            <a key={l} href="#" className="transition hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          // الكلاسات مكتوبة حرفيًا مش مجمّعة — Tailwind بيقرا الملف كنص،
          // فأي كلاس متبني في وقت التشغيل ما بيتولّدش في الـCSS
          className="border border-white/25 px-5 py-2 text-[11px] uppercase tracking-[0.2em] transition hover:border-[#c9a24a] hover:text-[#c9a24a]"
        >
          Book a visit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <Image
        src="/images/aurora/sunset-pool.jpg"
        alt="Aurora Palace at sunset, Magawish, Hurghada"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* التدرّج بيخلّي النص مقروء من غير ما يطفّي الصورة */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* الـ9 العملاقة — توقيع بصري من هويتهم */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 font-display-a text-[40rem] leading-none text-white/[0.04]"
      >
        9
      </span>

      <div className="relative mx-auto flex h-full max-w-[88rem] flex-col justify-end px-6 pb-24 lg:px-10">
        <p className={`mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] ${GOLD}`}>
          <span className="h-px w-10 bg-[#c9a24a]" />
          Magawish · Hurghada · Red Sea
        </p>

        <h1 className="font-display-a text-[clamp(3.2rem,11vw,9rem)] font-normal leading-[0.92]">
          Made to live
          <br />
          <em className={`font-normal italic ${GOLD}`}>together</em>
        </h1>

        <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-white/70">
          140 residences on 6,000 m² in Magawish. Fully finished, delivered 2028, ten minutes
          from the airport.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#visit"
            className="bg-[#c9a24a] px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-black transition hover:bg-white"
          >
            Book a private visit
          </a>
          <a
            href="#"
            className="border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] transition hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    'Built by the developer',
    'Four pools',
    '40% landscape',
    'Fully finished',
    'Delivered 2028',
    '10% down',
  ];
  return (
    <div className="overflow-hidden border-y border-white/10 py-5">
      <div className="flex animate-[marquee_38s_linear_infinite] gap-14 whitespace-nowrap">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className={`font-display-a text-lg ${i % 2 ? `italic ${GOLD}` : 'text-white/50'}`}
          >
            {w}
            <span className="ms-14 text-white/20">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Project() {
  const facts: Array<[string, string]> = [
    ['Residences', '140'],
    ['Unit sizes', '54 – 142 m²'],
    ['Land', '6,000 m²'],
    ['Buildings / landscape', '60% / 40%'],
    ['Structure', 'Ground + 4 floors'],
    ['Delivery', '2028'],
    ['Finish', 'Fully finished'],
    ['Contract', 'Green Contract'],
  ];

  return (
    <section className="mx-auto max-w-[88rem] px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/images/aurora/aerial-pool.jpg"
            alt="Aerial view of the pools at Aurora Palace"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="lg:pt-10">
          <p className={`text-[11px] uppercase tracking-[0.3em] ${GOLD}`}>The project</p>
          <h2 className="mt-6 font-display-a text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
            A small address,
            <br />
            <em className="italic text-white/55">deliberately</em>
          </h2>
          <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-white/60">
            One hundred and forty homes, not a tower of six hundred sharing the same four pools.
            Square9 builds what it sells — the team that hands you the keys laid the walls.
          </p>

          <dl className="mt-12">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between border-t border-white/10 py-4"
              >
                <dt className="text-sm text-white/45">{label}</dt>
                <dd className="font-display-a text-xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Residences() {
  const units: Array<[string, string]> = [
    ['Studio', '54 – 80 m²'],
    ['One bedroom', '65 – 102 m²'],
    ['Two bedrooms', '101 – 142 m²'],
  ];

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-10 lg:py-36">
        <p className={`text-[11px] uppercase tracking-[0.3em] ${GOLD}`}>Residences</p>
        <h2 className="mt-6 max-w-2xl font-display-a text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
          Three plans. <em className="italic text-white/55">One standard.</em>
        </h2>

        <div className="mt-16">
          {units.map(([name, area]) => (
            <a
              key={name}
              href="#"
              className="group flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-white/10 py-9 transition hover:border-[#c9a24a]/50"
            >
              <span className="font-display-a text-[clamp(1.8rem,4vw,3rem)] transition group-hover:text-[#c9a24a]">
                {name}
              </span>
              <span className="text-lg font-light text-white/45">{area}</span>
              <span className="ms-auto text-[11px] uppercase tracking-[0.2em] text-white/40 transition group-hover:text-white">
                Ask about this plan →
              </span>
            </a>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="relative overflow-hidden border-y border-[#c9a24a]/25">
      <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.3em] ${GOLD}`}>Pricing</p>
            <h2 className="mt-6 font-display-a text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
              The question
              <br />
              <em className={`italic ${GOLD}`}>everyone asks first</em>
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-xl font-light leading-relaxed text-white/70">
              We do not print a price here. Prices depend on the floor, the area and the plan,
              and a number left on a web page is a number that has already changed — while you
              are deciding on something worth millions.
            </p>
            <p className="mt-8 border-s-2 border-[#c9a24a] ps-6 text-lg">
              What is published: <span className={GOLD}>10% down</span>, and payment plans
              described as flexible.
            </p>
            <p className="mt-8 text-white/55">
              Come to the show apartment and take the price, the schedule and the contract terms
              in writing from the sales office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [
    ['/images/aurora/night-exterior.jpg', 'Aurora Palace at night'],
    ['/images/aurora/day-pool.jpg', 'The main pool'],
    ['/images/aurora/kids-pool.jpg', "The children's pool"],
    ['/images/aurora/night-reading.jpg', 'An evening inside'],
  ];
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {shots.map(([src, alt]) => (
        <div key={src} className="relative aspect-[3/4] w-full">
          <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
        </div>
      ))}
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative">
      <div className="relative min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/aurora/family-night.jpg"
          alt="An evening at Aurora Palace"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-[88rem] flex-col items-start px-6 py-28 lg:px-10 lg:py-36">
          <p className={`text-[11px] uppercase tracking-[0.3em] ${GOLD}`}>The visit</p>
          <h2 className="mt-6 max-w-2xl font-display-a text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02]">
            See it <em className="italic text-white/55">for yourself</em>
          </h2>
          <p className="mt-7 max-w-md text-lg font-light text-white/65">
            Four appointment times a day at the show apartment. No obligation.
          </p>
          <a
            href="#"
            className="mt-10 bg-[#c9a24a] px-10 py-4 text-[11px] uppercase tracking-[0.2em] text-black transition hover:bg-white"
          >
            Book a visit
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[88rem] flex-wrap items-end justify-between gap-8 px-6 py-14 lg:px-10">
        <div>
          <p className="font-display-a text-2xl tracking-[0.2em]">SQUARE9</p>
          <p className="mt-3 text-sm text-white/45">9 Magawish District, Hurghada, Red Sea</p>
        </div>
        <div className="text-sm text-white/45">
          <p>+20 107 001 5929</p>
          <p className="mt-1">info@square9.eg</p>
        </div>
      </div>
    </footer>
  );
}
