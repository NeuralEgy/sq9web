import Image from 'next/image';

// ============================================================
// اتجاه B — «Warm Light»
//
// الفكرة: الألوان متاخدة من الرندرات نفسها (رمل · غروب · تراكوتا)
// بدل الأسود. خط سيريف أرفع وأرقى، تخطيط مجلة غير متماثل، ومساحة
// بيضا كتير. بيبان أدفأ وأقرب للأسرة، وبيفرّقهم عن أي مطوّر تاني
// في الغردقة — كلهم أسود وذهبي.
//
// 🔴 نفس القاعدة: ولا سعر ولا خطة سداد ولا حالة وحدة.
// ============================================================

export default function DirectionB() {
  return (
    <div className="min-h-screen bg-[#faf6ef] font-ui text-[#1c1814] antialiased">
      <Nav />
      <Hero />
      <Intro />
      <Residences />
      <Pricing />
      <Life />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1814]/10 bg-[#faf6ef]/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-[84rem] items-center justify-between px-6 py-4 lg:px-10">
        <span className="font-display-b text-2xl font-semibold tracking-[0.14em]">SQUARE9</span>
        <nav className="hidden gap-9 text-[12px] uppercase tracking-[0.18em] text-[#6b6055] md:flex">
          {['The Project', 'Residences', 'Location', 'Visit'].map((l) => (
            <a key={l} href="#" className="transition hover:text-[#b4643a]">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          className="rounded-full bg-[#1c1814] px-6 py-2.5 text-[12px] uppercase tracking-[0.16em] text-[#faf6ef] transition hover:bg-[#b4643a]"
        >
          Book a visit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[84rem] px-6 pt-10 lg:px-10 lg:pt-16">
      <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.26em] text-[#b4643a]">
        <span className="h-px w-10 bg-[#b4643a]" />
        Magawish · Hurghada · Red Sea
      </p>

      <h1 className="mt-8 max-w-4xl font-display-b text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.95]">
        Made to live <em className="italic text-[#b4643a]">together</em>
      </h1>

      <div className="mt-10 grid gap-8 border-t border-[#1c1814]/10 pt-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <p className="max-w-xl text-xl font-light leading-relaxed text-[#4a4038]">
          A hundred and forty homes on six thousand square metres in Magawish — where forty
          per cent of the ground is garden and water, and the sea is ten minutes from the
          airport road.
        </p>
        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <a
            href="#visit"
            className="rounded-full bg-[#1c1814] px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-[#faf6ef] transition hover:bg-[#b4643a]"
          >
            Book a private visit
          </a>
          <a
            href="#"
            className="rounded-full border border-[#1c1814]/25 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] transition hover:border-[#b4643a] hover:text-[#b4643a]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* الصورة بعد النص مش وراه — النص بيفضل مقروء ١٠٠٪ والصورة بتاخد حقها */}
      <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-sm lg:mt-20">
        <Image
          src="/images/aurora/sunset-pool.jpg"
          alt="Aurora Palace at sunset, Magawish, Hurghada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-y-8 border-b border-[#1c1814]/10 pb-12 lg:grid-cols-4">
        {[
          ['140', 'Residences'],
          ['54 – 142 m²', 'Unit sizes'],
          ['6,000 m²', 'Land'],
          ['2028', 'Delivery'],
        ].map(([value, label]) => (
          <div key={label}>
            <dd className="font-display-b text-[clamp(1.9rem,4vw,2.9rem)] font-light">{value}</dd>
            <dt className="mt-1 text-[12px] uppercase tracking-[0.18em] text-[#6b6055]">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-[84rem] px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-[12px] uppercase tracking-[0.26em] text-[#b4643a]">Who builds it</p>
          <h2 className="mt-6 font-display-b text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.08]">
            We build what <em className="italic text-[#b4643a]">we sell</em>
          </h2>
        </div>
        <div className="space-y-6 text-lg font-light leading-relaxed text-[#4a4038]">
          <p>
            Square9 is a developer, not an agency. The team that hands you the keys is the team
            that laid the walls — and that shows up in the places nobody photographs: the
            risers, the lobby finishes, the way the gardens were planted before the units sold.
          </p>
          <p>
            Aurora Palace is one hundred and forty homes, ground plus four floors. Not a tower
            of six hundred apartments sharing four pools.
          </p>
          <div className="grid gap-x-10 gap-y-6 pt-4 sm:grid-cols-2">
            {[
              ['Community', 'Neighbourhoods where families connect.'],
              ['Intention', 'Every space designed with a purpose.'],
              ['Balance', 'Modern living against the landscape.'],
              ['Presence', 'Homes that feel like home at any hour.'],
            ].map(([t, d], i) => (
              <div key={t} className="border-t border-[#1c1814]/10 pt-4">
                <span className="font-display-b text-sm text-[#b4643a]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 font-semibold">{t}</p>
                <p className="mt-1 text-base text-[#6b6055]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Residences() {
  // ⚠️ مفيش ولا صورة وحدة من جوّه عند العميل. الصور اللي على موقعهم
  //    الحالي باسم interior.jpg و lifestyle.jpg صور ستوك مجرّدة مالهاش
  //    علاقة بالمشروع. فالقسم ده نصّي بالكامل — أنضف من إننا نحط صورة
  //    ستوك ونوحي إنها الشقة.
  const units: Array<[string, string, string]> = [
    ['Studio', '54 – 80 m²', 'One room, a kitchen and a terrace.'],
    ['One bedroom', '65 – 102 m²', 'A separate bedroom, a full living room.'],
    ['Two bedrooms', '101 – 142 m²', 'Room for a family that is staying.'],
  ];

  return (
    <section className="bg-[#f2ebe0] py-24 lg:py-36">
      <div className="mx-auto max-w-[84rem] px-6 lg:px-10">
        <p className="text-[12px] uppercase tracking-[0.26em] text-[#b4643a]">Residences</p>
        <h2 className="mt-6 max-w-2xl font-display-b text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.08]">
          Three plans. <em className="italic text-[#b4643a]">One standard.</em>
        </h2>

        <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/aurora/night-exterior.jpg"
            alt="Aurora Palace at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {units.map(([name, area, note]) => (
            <a
              key={name}
              href="#"
              className="group block border-t border-[#1c1814]/15 pt-6 transition hover:border-[#b4643a]"
            >
              <h3 className="font-display-b text-[clamp(1.8rem,3vw,2.4rem)] font-light">{name}</h3>
              <p className="mt-1 text-lg text-[#6b6055]">{area}</p>
              <p className="mt-3 text-[#4a4038]">{note}</p>
              <span className="mt-5 inline-block text-[12px] uppercase tracking-[0.16em] text-[#b4643a]">
                Ask about this plan →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-[84rem] px-6 py-24 lg:px-10 lg:py-36">
      <div className="rounded-sm bg-[#1c1814] px-7 py-16 text-[#faf6ef] sm:px-14 lg:px-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[12px] uppercase tracking-[0.26em] text-[#d8a65e]">Pricing</p>
            <h2 className="mt-6 font-display-b text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.05]">
              The question
              <br />
              <em className="italic text-[#d8a65e]">everyone asks first</em>
            </h2>
          </div>
          <div>
            <p className="text-xl font-light leading-relaxed text-[#faf6ef]/75">
              We do not print a price here. Prices depend on the floor, the area and the plan,
              and a number left on a web page is a number that has already changed — while you
              are deciding on something worth millions.
            </p>
            <p className="mt-8 border-s-2 border-[#d8a65e] ps-6 text-lg">
              What is published: <span className="text-[#d8a65e]">10% down</span>, and payment
              plans described as flexible.
            </p>
            <p className="mt-8 text-[#faf6ef]/60">
              Come to the show apartment and take the price, the schedule and the contract terms
              in writing from the sales office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Life() {
  return (
    <section className="mx-auto max-w-[84rem] px-6 pb-24 lg:px-10 lg:pb-36">
      <p className="text-[12px] uppercase tracking-[0.26em] text-[#b4643a]">Life here</p>
      <h2 className="mt-6 max-w-2xl font-display-b text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.08]">
        Forty per cent of the ground is{' '}
        <em className="italic text-[#b4643a]">garden and water</em>
      </h2>

      {/* شبكة غير متماثلة — صورة كبيرة وصورتين أصغر، شكل مجلة مش كروت متساوية */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-2 lg:aspect-[16/10]">
          <Image
            src="/images/aurora/aerial-pool.jpg"
            alt="Aerial view of the pools"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-5">
          {[
            ['/images/aurora/kids-pool.jpg', "The children's pool"],
            ['/images/aurora/day-pool.jpg', 'The main pool'],
          ].map(([src, alt]) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          'Four swimming pools',
          'Restaurant and gym',
          '24/7 security, gated',
          'Jacuzzi in selected units',
        ].map((a) => (
          <li key={a} className="border-t border-[#1c1814]/10 pt-4 text-[#4a4038]">
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-[#f2ebe0] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
          <Image
            src="/images/aurora/family-night.jpg"
            alt="An evening at Aurora Palace"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[12px] uppercase tracking-[0.26em] text-[#b4643a]">The visit</p>
          <h2 className="mt-6 font-display-b text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.03]">
            See it <em className="italic text-[#b4643a]">for yourself</em>
          </h2>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-[#4a4038]">
            Four appointment times a day at the show apartment: 9am, 11am, 2pm and 4pm. No
            obligation.
          </p>
          <a
            href="#"
            className="mt-9 inline-block rounded-full bg-[#1c1814] px-10 py-4 text-[12px] uppercase tracking-[0.16em] text-[#faf6ef] transition hover:bg-[#b4643a]"
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
    <footer className="mx-auto max-w-[84rem] px-6 py-14 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-8 border-t border-[#1c1814]/10 pt-10">
        <div>
          <p className="font-display-b text-2xl font-semibold tracking-[0.14em]">SQUARE9</p>
          <p className="mt-3 text-sm text-[#6b6055]">9 Magawish District, Hurghada, Red Sea</p>
        </div>
        <div className="text-sm text-[#6b6055]">
          <p>+20 107 001 5929</p>
          <p className="mt-1">info@square9.eg</p>
        </div>
      </div>
    </footer>
  );
}
