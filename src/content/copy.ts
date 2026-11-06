// ============================================================
// كل نص معروض على الموقع — في ملف واحد.
//
// السبب: العميل أو أي حد في المكتب يقدر يعدّل الكلام من غير ما
// يفتح مكوّن React. والمكوّنات بتقرا من هنا بس، ما بتكتبش نص جوّاها.
//
// 🔴 ولا سعر ولا خطة سداد ولا حالة وحدة ولا رقم عائد. الأرقام
//    الوحيدة المسموحة هي اللي في src/data/project.ts.
// ============================================================

export const COPY = {
  seo: {
    // الرئيسية بتتكلم عن الشركة، فعنوانها اسم الشركة ومجالها.
    homeTitle: 'Square9 Developments — Property Developer in Hurghada, Red Sea',
    homeDescription:
      'Square9 Developments builds communities in Hurghada, not just residences. Our vision, how we decide, and Aurora Palace — 140 fully finished homes in Magawish, delivered 2028.',

    // 🔴 العنوان ده هو اللي بيجيب بحث جوجل («apartments for sale in
    //    Hurghada»). كان على الرئيسية، ونزل مع المشروع لصفحته — مش
    //    اتشال. لو حد غيّره، يبص على ترتيب الموقع بعدها.
    auroraTitle: 'Apartments for Sale in Hurghada — Aurora Palace, Magawish | Square9',
    auroraDescription:
      'Aurora Palace: 140 residences in Magawish, Hurghada. Studios, one and two bedrooms from 54 to 142 m². Fully finished, delivered 2028, 10% down. Book a visit to the show apartment.',
  },

  nav: {
    // أقسام الصفحة الرئيسية (الشركة)
    vision: 'Vision',
    philosophy: 'Philosophy',
    strengths: 'What We Show',
    projects: 'Projects',
    contact: 'Contact',

    // صفحات مستقلة
    faq: 'Questions',
    philosophyPage: 'Philosophy',
    buying: 'Buying',
    leadership: 'Leadership',

    // أقسام صفحة المشروع
    project: 'The Project',
    residences: 'Residences',
    life: 'Life Here',
    location: 'Location',
    visit: 'Book a Visit',
    sections: 'Sections',
    guides: 'Guides',
  },

  // ============================================================
  // الصفحة الرئيسية — الشركة.
  //
  // 🔴 القاعدة في القسم ده أصعب من قاعدة الأسعار. الكلام عن شركة،
  //    والمغري إننا نكتب «رائدة» و«سنين خبرة» و«آلاف العملاء». مفيش
  //    ولا واحدة من دي منشورة، ومفيش ولا واحدة هنا.
  //
  //    كل جملة تحت إما منقولة من square9.eg حرفيًا، أو مبنية على رقم
  //    منشور في src/data/projects/aurora-palace.ts. لو عايز تزوّد
  //    جملة، اسأل الأول: السند بتاعها فين؟
  // ============================================================
  company: {
    hero: {
      eyebrow: 'Square9 Developments · Hurghada, Red Sea',
      titleLead: 'Made to live',
      titleAccent: 'together',
      lead: 'We are a developer in Hurghada — not a marketing company selling a building somebody else put up. We build what we sell, we build it small, and we hand over the keys ourselves.',
      ctaProject: 'See Aurora Palace',
      ctaWhatsapp: 'WhatsApp',
    },

    vision: {
      eyebrow: 'Our vision',
      titleLead: 'Communities where people',
      titleAccent: 'truly belong',
      // 🟢 الجملتين دول منشورين حرفيًا على square9.eg
      published: [
        'Square9 was founded with a clear vision: to create communities where people truly belong.',
        'In Hurghada, we build more than residences — we create neighbourhoods where families thrive.',
      ],
      // والرد على نفسنا — بأرقام منشورة بس
      titleCost: 'What that costs us',
      cost: 'A sentence like that is easy to write, so here is the bill. At Aurora Palace, forty per cent of the land is garden and water instead of sellable floor area. The building is ground plus four floors, not a tower. One hundred and forty homes — not six hundred sharing the same four pools. A vision either survives decisions like those, or it was never one.',
    },

    philosophy: {
      eyebrow: 'Our philosophy',
      titleLead: 'Four things we',
      titleAccent: 'decide by',
      lead: 'Every plan passes these before it goes to site.',
      pillars: [
        { title: 'Community', body: 'Neighbourhoods where families connect.' },
        { title: 'Intention', body: 'Every space designed with a purpose.' },
        { title: 'Balance', body: 'Modern living against the landscape.' },
        { title: 'Presence', body: 'Homes that feel like home at any hour.' },
      ],
    },

    // 🔴 قسم «المقومات». أخطر قسم في الموقع، لأن ده مكان الكلام الكبير
    //    عادةً. الحل: مفيش ولا مقومة من غير سند، والقسم بيقول بصوت
    //    عالي اللي إحنا **مش** قادرين نوريه. مطوّر بيبيع على الخريطة،
    //    والصدق هنا هو الحجة نفسها.
    strengths: {
      eyebrow: 'What we can show you',
      titleLead: 'Four things you can',
      titleAccent: 'check yourself',
      lead: 'Not promises about 2028 — things that already exist, that you can stand in front of and count.',
      items: [
        {
          title: 'We build it ourselves',
          body: 'Square9 is a developer, not a marketing company. The team that hands you the keys is the team that laid the walls — and that shows up in the places nobody photographs.',
        },
        {
          title: 'Forty per cent is not for sale',
          body: 'At Aurora Palace, forty per cent of the land is landscape and swimming pools. That is floor area we decided not to build and not to sell.',
        },
        {
          title: 'One hundred and forty homes',
          body: 'Ground plus four floors on six thousand square metres. Small enough that four pools, a restaurant and a gym are not shared by hundreds of apartments.',
        },
        {
          title: 'Fully finished, on a Green Contract',
          body: 'The finish standard and the contract form are both published, and both are written into what you sign — not described to you across a desk.',
        },
      ],
      // 🔴 أهم فقرة في الصفحة. بتقول المفيش بالاسم قبل ما الزائر يسأل.
      honestyTitle: 'And what we are not showing you',
      honesty: 'We have not published a founding year, a list of delivered buildings, or a count of units handed over — and we are not going to imply one. Aurora Palace is the only project we have announced, and it delivers in 2028. What you can judge us on today is the show apartment, which is built and finished, and the contract, which you can read before you sign anything.',
    },

    projects: {
      eyebrow: 'Our projects',
      titleLead: 'One project,',
      titleAccent: 'announced',
      lead: 'When there is a second, it will be on this page.',
      cardCta: 'See the project',
      labels: {
        units: 'Residences',
        sizes: 'Sizes',
        delivery: 'Delivery',
      },
    },

    // قسم مختصر على الرئيسية بيودّي على /faq. مش نسخة من الصفحة —
    // أربع أسئلة بس، وكلها من النوع اللي إجابته «مش عندنا»، لأن
    // دي اللي بتفرّقنا عن أي موقع تاني الزائر فتحه النهاردة.
    questions: {
      eyebrow: 'Before you ask',
      titleLead: 'The four questions',
      titleAccent: 'we cannot answer',
      lead: 'Every one of these has a number waiting for you on somebody else’s website. Here is why it is not on ours.',
      items: [
        {
          q: 'How much is it?',
          a: 'Not published. The price depends on floor and area, and it is confirmed per unit in writing.',
        },
        {
          q: 'What is the payment plan?',
          a: 'Only the 10% down payment is published. The schedule comes from the sales office.',
        },
        {
          q: 'What rental yield can I expect?',
          a: 'No yield figure exists for an unbuilt project. Any number you are shown is a projection.',
        },
        {
          q: 'Which units are left?',
          a: 'Availability changes daily. A list printed here would be wrong before you read it.',
        },
      ],
      cta: 'All the questions, answered',
    },

    connect: {
      eyebrow: 'Talk to us',
      titleLead: 'Come and see',
      titleAccent: 'what we built',
      body: 'The show apartment at Aurora Palace is finished and open by appointment — four times a day, with no obligation.',
      ctaVisit: 'Book a visit',
      ctaWhatsapp: 'WhatsApp',
    },
  },

  // ============================================================
  // المؤسِّس — بيظهر بس لما src/data/leadership.ts يتملا
  // ============================================================
  founder: {
    eyebrow: 'The founder',
    titleLead: 'Who decided',
    titleAccent: 'all this',
    // 🔴 مفيش هنا أي جملة بتوصف المؤسِّس. الوصف الوحيد اللي هيظهر
    //    هو كلامه هو، من ملف البيانات. اللي هنا لافتات بس.
    readMore: 'Read the full letter',
    seoTitle: 'The Founder — Square9 Developments, Hurghada',
    seoDescription:
      'The person behind Square9 Developments in Hurghada, in their own words: why the company was built and what it decided to do differently.',
  },

  // ============================================================
  // صفحة /philosophy
  // ============================================================
  philosophyPage: {
    eyebrow: 'Our philosophy',
    title: 'Four things we',
    titleAccent: 'decide by',
    intro:
      'Four words are easy. What follows each one here is the decision it forced and the number that proves it was taken — because a principle that costs nothing is not a principle, it is decoration.',
    seoTitle: 'How Square9 Designs — Community, Intention, Balance, Presence',
    seoDescription:
      'The four principles behind Square9 Developments in Hurghada, and the decisions each one forced at Aurora Palace: 140 homes, ground plus four floors, forty per cent landscape.',
    // 🔴 كل مبدأ تحته «الدليل» — وكل دليل رقم منشور في
    //    src/data/projects/aurora-palace.ts. لو زوّدت مبدأ، لازم
    //    يكون وراه رقم زيهم. مبدأ من غير دليل بيرجع للرئيسية سطر
    //    واحد وخلاص.
    principles: [
      {
        title: 'Community',
        line: 'Neighbourhoods where families connect.',
        body: [
          'Community is mostly a function of arithmetic. At a hundred and forty homes you start recognising people at the pool. At six hundred sharing the same facilities you never do, and what you have bought is a hotel you happen to own a room in.',
          'So Aurora Palace is 140 residences on 6,000 m², behind a single gated entrance. Four pools, a restaurant and a gym for that number of homes rather than for a number that makes the spreadsheet work.',
        ],
        proof: '140 residences · one gated entrance',
      },
      {
        title: 'Intention',
        line: 'Every space designed with a purpose.',
        body: [
          'The honest test of intention is what you choose not to build. Forty per cent of this land is landscape and water — floor area that was never going to be sold, on a plot where every square metre could have been.',
          'The building is ground plus four floors. The same land would have carried a tower, and a tower would have carried more units. It does not, and that was a decision somebody signed.',
        ],
        proof: '40% landscape · ground + 4 floors',
      },
      {
        title: 'Balance',
        line: 'Modern living against the landscape.',
        body: [
          'Magawish is quiet. That is usually a polite way of saying remote, and here it is not: the airport is ten minutes away, Senzo Mall ten, Marina Boulevard fifteen, the city centre twenty.',
          'That gap — calm to live in, close to everything by car — is the whole argument for the address. Lose either half and you have an ordinary location with a view.',
        ],
        proof: '10 min to the airport · 20 to the centre',
      },
      {
        title: 'Presence',
        line: 'Homes that feel like home at any hour.',
        body: [
          'A render is made at golden hour. Nobody lives at golden hour. A home has to work at seven in the morning and at midnight, which is a harder thing to design and an impossible thing to photograph.',
          'The units are handed over fully finished, so there is no fit-out between the keys and the first night. The show apartment is already built — and if you want the honest version of it, book the four o’clock appointment rather than the eleven.',
        ],
        proof: 'Fully finished · the show apartment is built',
      },
    ],
  },

  // ============================================================
  // صفحة /buying
  // ============================================================
  buyingPage: {
    eyebrow: 'Buying',
    title: 'From the first visit',
    titleAccent: 'to the keys',
    intro:
      'Six steps, in order, with the awkward part of each one left in rather than taken out. Where a figure is published it is here; where it is not, this says who holds it and what to ask them for.',
    seoTitle: 'Buying at Aurora Palace, Hurghada — The Steps, Start to Handover | Square9',
    seoDescription:
      'How buying at Aurora Palace in Magawish, Hurghada works, step by step: the show apartment visit, choosing a size, getting a price in writing, the 10% down payment, the contract, and handover in 2028.',
    stepLabel: 'Step',
    steps: [
      {
        title: 'See the show apartment',
        body: [
          'Four appointment times a day — 9am, 11am, 2pm and 4pm — with no obligation and nothing to sign.',
          'For a building that will not exist until 2028, this is the only physical evidence there is. Go at four if you can; the light at eleven flatters everything.',
        ],
        note: null,
      },
      {
        title: 'Choose the size',
        body: [
          'Three types: a studio at 54 to 80 m², one bedroom at 65 to 102 m², two bedrooms at 101 to 142 m². The ranges overlap, so a large studio is bigger than a small one bedroom — what actually changes between them is whether there is a door between the bed and everything else.',
        ],
        note: null,
      },
      {
        title: 'Get the price — for one specific unit',
        body: [
          'The price depends on the floor, the area and the plan, and it is confirmed per unit by the sales office.',
        ],
        note: 'No price is published on this site and none is going to be. Ask for the figure for the exact unit you stood in, by floor and area, in writing. A price given out loud is not a price.',
      },
      {
        title: 'The payment',
        body: [
          'The published figure is a **10% down payment**, with the plans described as flexible. That is the whole of what has been announced.',
        ],
        note: 'The instalment dates to handover, anything due on delivery, and the maintenance charge are all held by the sales office. Ask for the schedule on paper before you commit to anything.',
      },
      {
        title: 'The contract',
        body: [
          'A Green Contract, with the unit handed over fully finished.',
          'Those two phrases are published, and neither of them is a specification. Read the finish schedule itself, and read the handover clause — including what applies if the date slips. If you intend to resell before handover, that clause matters too, and it is easier to ask about now than later.',
        ],
        note: null,
      },
      {
        title: 'Handover, 2028',
        body: [
          'You are buying off-plan: you contract now, pay in instalments, and take the keys then. Fully finished means there is no fit-out period between handover and moving in or letting.',
        ],
        note: null,
      },
    ],
    closingTitle: 'One rule for all six',
    closing:
      'Anything that will end up in a contract should reach you in writing before you sign, not after. Every developer worth buying from expects to be asked, and the one that hesitates has told you something.',
    faqCta: 'The questions, answered',
    visitCta: 'Book a visit',
  },

  // ============================================================
  // صفحة /faq
  // ============================================================
  faqPage: {
    eyebrow: 'Questions',
    title: 'The questions people',
    titleAccent: 'actually ask',
    intro:
      'Grouped by what you are trying to find out. Where the answer is a published fact, it is here. Where it is not, this page says so plainly and tells you who to ask — because an invented answer is worse than no answer when you are buying off-plan.',
    seoTitle: 'Aurora Palace, Hurghada — Questions and Honest Answers | Square9',
    seoDescription:
      'Straight answers about Aurora Palace in Magawish, Hurghada: sizes, 2028 delivery, the published 10% down payment, the show apartment — and what is not published, said plainly.',
    stillAsking: 'Still have a question?',
    stillAskingBody:
      'Message us on WhatsApp, or bring it to the show apartment and ask for the answer in writing.',
  },

  // ============================================================
  // صفحة /contact
  // ============================================================
  contactPage: {
    eyebrow: 'Contact',
    title: 'Talk to',
    titleAccent: 'Square9',
    intro:
      'One number, one inbox, one address. The same number answers calls and WhatsApp.',
    seoTitle: 'Contact Square9 Developments — Hurghada, Red Sea',
    seoDescription:
      'Reach Square9 Developments in Magawish, Hurghada: phone, WhatsApp, email and address, and the four daily appointment times at the Aurora Palace show apartment.',
    labels: {
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      office: 'Office',
      slots: 'Show apartment',
      follow: 'Follow',
    },
    slotsNote:
      'Four appointment times a day at the Aurora Palace show apartment, with no obligation.',
    bookCta: 'Book a visit',
    mapCta: 'Open on the map',
    // 🔴 الفورم مش هنا عن قصد — نسخة تانية منه معناها مسار تاني
    //    بيكتب في جدول visits.
    formNote:
      'Booking a visit takes a date and a time, so the form lives with the project rather than here.',
  },

  // ============================================================
  // صفحة المشروع — /aurora-palace
  // ============================================================
  hero: {
    // 🔴 العنوان هنا بقى اسم المشروع. الصفحة دي صفحة المشروع، فالـH1
    //    بتاعها لازم يكون اسمه — و«Made to Live Together» شيلة الشركة
    //    فنزلت على الرئيسية.
    eyebrow: 'Magawish · Hurghada · Red Sea',
    titleLead: 'Aurora',
    titleAccent: 'Palace',
    lead: 'A hundred and forty homes on six thousand square metres in Magawish — where forty per cent of the ground is garden and water, and the airport is ten minutes away.',
    ctaVisit: 'Book a private visit',
    ctaWhatsapp: 'WhatsApp',
  },

  story: {
    eyebrow: 'Who builds it',
    titleLead: 'We build what',
    titleAccent: 'we sell',
    body: [
      'Square9 is a developer, not an agency. The team that hands you the keys is the team that laid the walls — and that shows up in the places nobody photographs: the risers, the lobby finishes, the way the gardens were planted before the units sold.',
      'Aurora Palace is one hundred and forty homes, ground plus four floors. Not a tower of six hundred apartments sharing four pools.',
    ],
    // المبادئ الأربعة نقلت للصفحة الرئيسية — هي فكر الشركة مش فكر
    // المشروع. والزائر هنا بياخد لينك يروح لها لو عايز.
    more: 'More about Square9',
  },

  project: {
    eyebrow: 'The project',
    titleLead: 'A small address,',
    titleAccent: 'deliberately',
    lead: 'Everything announced about Aurora Palace, in one place — and nothing that is not.',
    labels: {
      units: 'Residences',
      areas: 'Unit sizes',
      land: 'Land',
      split: 'Buildings / landscape',
      structure: 'Structure',
      delivery: 'Delivery',
      finishing: 'Finish',
      contract: 'Contract',
      downPayment: 'Down payment',
    },
    offPlanNote:
      'This is an off-plan sale with delivery in 2028. You buy on contract — and you can walk through the show apartment before you decide.',
  },

  units: {
    eyebrow: 'Residences',
    titleLead: 'Three plans.',
    titleAccent: 'One standard.',
    lead: 'These are the announced sizes. Floor allocation and pricing are confirmed by the sales office.',
    ask: 'Ask about this plan',
    // ⚠️ مفيش صور وحدات عند العميل — القسم ده نصّي عن قصد
    noPhotos:
      'No floor plans or unit photographs have been published. The show apartment is built, and that is the honest way to see a layout.',
  },

  life: {
    eyebrow: 'Life here',
    titleLead: 'Forty per cent of the ground is',
    titleAccent: 'garden and water',
    lead: 'Four pools, a restaurant, a gym, and a single gated entrance.',
  },

  location: {
    eyebrow: 'Location',
    titleLead: 'Magawish — quiet, and',
    titleAccent: 'close to everything',
    lead: 'One of the calmest parts of Hurghada, and still within a quarter of an hour of everything by car.',
    distancesTitle: 'Distances',
    directions: 'Open on the map',
    seoNote:
      'If you are looking for apartments for sale in Hurghada or property in the Magawish area, this address combines airport access with a quiet residential setting and the Red Sea a short drive away.',
  },

  personas: {
    eyebrow: 'Why are you buying?',
    titleLead: 'A home for your family, or',
    titleAccent: 'an investment',
    lead: 'Two different questions with two different answers.',
    family: {
      title: 'A home for my family',
      points: [
        ['Real space', 'Two bedrooms up to 142 m² — space on the floor, not on paper.'],
        [
          'Somewhere for the children',
          '40% of the land is landscape and pools, including a pool for children.',
        ],
        [
          'Quiet without being cut off',
          'Magawish is a calm residential area, and the city centre is twenty minutes away.',
        ],
        ['Security', '24/7 security and a single gated entrance.'],
      ],
      caveat:
        'Schools and services around the area, and how the rooms are laid out inside the apartment — see those on the visit and ask the sales office.',
      cta: 'Ask as a family',
    },
    investor: {
      title: 'An investment',
      points: [
        [
          'Location does the work',
          'Ten minutes from the airport, fifteen from the Marina — that is what moves holiday lets.',
        ],
        ['Fully finished', 'No fit-out spend between handover and your first tenant.'],
        [
          'Entry at 10% down',
          'That is the only published payment figure; the rest of the plan comes from the sales office.',
        ],
        ['A small project', '140 units on 6,000 m² — not hundreds sharing the same facilities.'],
      ],
      // 🔴 أهم سطر في القسم ده
      caveat:
        'No yield or occupancy figures are published for this project, and we will not invent one. Pricing, payment plans and the terms for letting and resale all come from the sales office, in writing.',
      cta: 'Ask as an investor',
    },
  },

  // 🔴 القسم اللي بيقف مكان السعر
  pricing: {
    eyebrow: 'Pricing',
    titleLead: 'The question',
    titleAccent: 'everyone asks first',
    body: 'We do not print a price here. Prices depend on the floor, the area and the plan, and a number left on a web page is a number that has already changed — while you are deciding on something worth millions.',
    publishedPrefix: 'What is published:',
    publishedValue: '10% down',
    publishedSuffix: ', and payment plans described as flexible.',
    closing:
      'Come to the show apartment and take the price, the schedule and the contract terms in writing from the sales office.',
  },

  visit: {
    eyebrow: 'The visit',
    titleLead: 'See it',
    titleAccent: 'for yourself',
    lead: 'Four appointment times a day at the show apartment: 9am, 11am, 2pm and 4pm. No obligation.',
    orWhatsapp: 'Prefer WhatsApp?',
  },

  form: {
    name: 'Name',
    namePlaceholder: 'Your full name',
    phone: 'Mobile number',
    phonePlaceholder: '+20 1x xxx xxxx',
    email: 'Email',
    emailPlaceholder: 'name@example.com',
    date: 'Visit date',
    slot: 'Time',
    slotPlaceholder: 'Choose a time',
    message: 'Anything you want to add?',
    messagePlaceholder: 'The unit type you are after, or any question',
    optional: 'optional',
    required: 'required',
    submit: 'Book the visit',
    submitting: 'Booking…',
    successTitle: 'Booked — we have your request',
    successBody: 'We will call the number you gave us to confirm the time.',
    successAgain: 'Book another time',
    errors: {
      required: 'This field is required',
      tooLong: 'That is too long',
      badPhone: 'That phone number does not look right',
      badEmail: 'That email does not look right',
      badDate: 'That date is not valid',
      pastDate: 'That date has passed',
      tooFar: 'Please choose a date within six months',
      badSlot: 'Choose one of the available times',
    },
    serverErrors: {
      rate_limited:
        'That is several bookings in a short time. Please wait a little, or reach us on WhatsApp.',
      unavailable:
        'We cannot record the booking right now. Message us on WhatsApp and we will book it for you.',
      server_error: 'Something went wrong on our side. Try again, or reach us on WhatsApp.',
      invalid: 'One of the fields needs a second look.',
      network: 'No connection. Check your network and try again.',
    },
  },

  footer: {
    tagline: 'We build communities in Hurghada where people live together, not merely side by side.',
    contact: 'Contact',
    follow: 'Follow',
    pages: 'Pages',
    rights: 'All rights reserved.',
  },

  // صفحة 404. أي مسار مش معروف بيوصل هنا.
  notFound: {
    eyebrow: 'Error 404',
    title: 'Nothing lives at',
    titleAccent: 'this address',
    body: 'The link you followed does not lead anywhere on this site. It may have been mistyped, or the page may have moved. The pages below are the ones that exist.',
    home: 'Back to Square9',
    guides: 'Or start from one of these',
  },

  common: {
    skipToContent: 'Skip to content',
    minutes: 'min',
    sqm: 'm²',
  },
} as const;

export type Copy = typeof COPY;
