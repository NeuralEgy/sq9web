// ============================================================
// صفحات الهبوط.
//
// 🔴 دي مش صفحات «حشو كلمات». كل صفحة بتجاوب على سؤال حقيقي بيتكتب
//    في جوجل، وبمحتوى مختلف فعلًا عن التانية. صفحات متشابهة بتتعامل
//    كـdoorway pages وجوجل بيعاقب عليها.
//
//    وصفحة «التقسيط» بالذات بتشرح **الأسئلة اللي تسألها**، مش خطة
//    سداد مش موجودة عندنا.
// ============================================================

export type Guide = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: ReadonlyArray<{ heading: string; body: ReadonlyArray<string> }>;
};

export const GUIDES = {
  hurghadaApartments: {
    slug: 'hurghada-apartments-for-sale',
    navLabel: 'Apartments for sale in Hurghada',
    // 🔴 العنوان والوصف هنا لازم يفضلوا **مختلفين** عن بتوع صفحة
    //    المشروع (/aurora-palace). كانوا نسخة طبق الأصل منهم، يعني
    //    الصفحتين بتتنافسوا على نفس الكلمة وجوجل بيختار واحدة ويهمل
    //    التانية. صفحة المشروع بتاخد الاستعلام الشرائي، والصفحة دي
    //    بتاخد الاستعلام اللي بيدوّر على معلومة قبل الشرا.
    title: 'Apartments for Sale in Hurghada — What to Check Before You Buy | Square9',
    description:
      'A buyer’s guide to apartments for sale in Hurghada: what is actually on offer in Magawish, why the area rather than downtown, and what buying off-plan with 2028 delivery really means.',
    h1: 'Apartments for sale in Hurghada',
    intro:
      'Hurghada has become a place people live, not only a place they holiday. There is a real difference between a flat in a block on the seafront and a home inside a compound with facilities, security and management. Aurora Palace is the second kind, in Magawish.',
    sections: [
      {
        heading: 'What is actually on offer',
        body: [
          'The project is 140 units across 6,000 m² — ground plus four floors, not a tower. Three types: studios from 54 to 80 m², one bedroom from 65 to 102 m², and two bedrooms from 101 to 142 m².',
          'Every unit is fully finished and delivery is 2028. Forty per cent of the land is landscape and swimming pools, with four pools, a restaurant, a gym and 24/7 security.',
        ],
      },
      {
        heading: 'Why Magawish rather than downtown',
        body: [
          'Downtown Hurghada is closer to the shops and to the noise. Magawish is a calmer residential area, and even so the airport is ten minutes away, Senzo Mall ten, and the Marina fifteen.',
          'If you are buying to live, you gain quiet without being cut off. If you are buying to let, proximity to the airport is what moves holiday bookings.',
        ],
      },
      {
        heading: 'Off-plan — what that actually means',
        body: [
          'Delivery is 2028, so the unit is still being built. You contract now and take handover later, with a published 10% down payment. That makes entry easier, and it makes the contract the most important thing you read.',
          'The show apartment already exists, so you can see the finish quality in person before you decide.',
        ],
      },
    ],
  },

  magawish: {
    slug: 'magawish',
    navLabel: 'Magawish area guide',
    title: 'Magawish, Hurghada — An Area Guide Before You Buy | Square9',
    description:
      'A guide to Magawish in Hurghada: where it is, distances to the airport, Senzo Mall, the Marina and downtown, and who it suits. Plus Aurora Palace, inside the area.',
    h1: 'Magawish, Hurghada',
    intro:
      'Magawish sits south of Hurghada on the Red Sea coast. Locals know it as a quiet district, away from the downtown crowds and close to the resorts.',
    sections: [
      {
        heading: 'Where you actually are',
        body: [
          'The area lies between the airport and downtown, spread along the coast. Its nearest landmark is Senzo Mall; the furthest point in the equation is the city centre.',
          'Those distances are the real story of the area, not the views. If you live here they shape your day; if you let, they are the first thing a guest asks about.',
        ],
      },
      {
        heading: 'Who Magawish suits',
        body: [
          'Families who want quiet, green space and security, and who do not need to be in the middle of things every day.',
          'Investors letting to visitors — closeness to the airport removes friction on arrival, and that is what shows up in stay reviews.',
          'It suits you least if your work and your evenings are all downtown and you would rather not drive.',
        ],
      },
      {
        heading: 'Aurora Palace in Magawish',
        body: [
          'The address is 9 Magawish District. The project is 140 units on 6,000 m², ground plus four floors, sixty per cent buildings and forty per cent landscape and pools.',
          'The show apartment is built and can be visited by appointment.',
        ],
      },
    ],
  },

  offPlan: {
    slug: 'off-plan-payment',
    navLabel: 'Instalments and buying off-plan',
    title: 'Apartments in Instalments in Hurghada — Buying Off-Plan and What to Ask | Square9',
    description:
      'Buying an apartment in instalments in Hurghada: what off-plan means, the published 10% down payment, 2028 delivery, and the questions to put to the sales office before you sign.',
    h1: 'Instalments and buying off-plan',
    intro:
      'Most sales in Hurghada today are off-plan, paid in instalments. Adverts say that in three words and skip the details that cost real money. This page explains the idea and gives you a list of questions to take with you.',
    sections: [
      {
        heading: 'What buying off-plan means',
        body: [
          'You are buying a home that is still being built. At Aurora Palace, delivery is 2028. You sign a contract, pay a deposit, and pay instalments until handover.',
          'The gain is that entry is cheaper and easier than a finished unit. The trade is that you pay before you receive — so the contract and its dates are the only guarantee you hold.',
        ],
      },
      {
        heading: 'Officially announced: 10% down',
        body: [
          'The only published payment figure for Aurora Palace is a **10% down payment**, alongside a general description of the plans as flexible.',
          'We do not print a price or an instalment schedule here. Not because they are secret, but because they are confirmed by the sales office according to unit type, floor and area — and a number sitting on a web page may already have changed, while a buyer is making a decision worth millions on it.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        body: [
          'Take this list to the visit and ask for the answers in writing: the price of the exact unit you are standing in, by floor and area · the deposit and the instalment dates up to handover · whether there is a payment due on handover · maintenance charges and who collects them · the handover date as written in the contract and what happens if it slips · the finish specification in detail, not the words "fully finished" · the terms for reselling before handover · and the form of contract and registration.',
          'Any serious developer will answer all of these in writing. If one of them draws a pause, that is information too.',
        ],
      },
    ],
  },
  showApartment: {
    slug: 'show-apartment-hurghada',
    navLabel: 'Visiting a show apartment',
    title: 'Visiting a Show Apartment in Hurghada — What to Check | Square9',
    description:
      'What to actually look at, measure and ask when you visit a show apartment in Hurghada before buying off-plan — and which answers to insist on in writing.',
    h1: 'Visiting a show apartment',
    intro:
      'When the building will not exist until 2028, the show apartment is the only physical thing you can judge. Most people walk through it in ten minutes and come out with an impression. That is a shame, because it is the one hour in the whole purchase where you hold the evidence in your hands.',
    sections: [
      {
        heading: 'What the show apartment is actually evidence of',
        body: [
          'It is evidence of a finish standard. Not of your unit, not of your floor, not of your view — of the quality of work the developer considers acceptable to show you.',
          'So look past the furniture, which is staged and is not included. Open a cupboard door and feel the hinge. Run your hand along where the skirting meets the floor. Look at the grout line in the bathroom and the gap around the window frame. Those are the places where corners get cut, and they are the places nobody photographs.',
        ],
      },
      {
        heading: 'Take a tape measure, and use it',
        body: [
          'Measure a room and compare it to the area you were quoted. Ask whether the figure you were given is the built-up area or the net internal area — the difference between those two is real money, and the answer should be the same in the contract as it is out loud.',
          'Measure the ceiling height. Stand in the middle of the living area and see whether a sofa and a dining table would both fit, honestly. At Aurora Palace the three types run **54 to 80 m²** for a studio, **65 to 102 m²** for one bedroom and **101 to 142 m²** for two — a wide range inside each type, so which end of it you are buying matters.',
        ],
      },
      {
        heading: 'Go at an awkward time',
        body: [
          'Everyone visits at eleven in the morning, when the light is flattering and the site is quiet. Ask for the late afternoon slot instead and you will learn more: where the sun actually lands, how warm the rooms get, what the place sounds like when people are around.',
          'The appointment times are 9am, 11am, 2pm and 4pm. The 4pm one tells you the most.',
        ],
      },
      {
        heading: 'What to leave with, in writing',
        body: [
          'A visit that ends in a handshake and a verbal number has achieved nothing. Ask for all of this on paper or by email: the price of a specific unit by floor and area · the deposit and the instalment dates to handover · whether anything falls due on delivery · maintenance charges, how they are calculated and when they start · the handover date as the contract words it, and the clause that applies if it slips · the finish specification in detail rather than the phrase "fully finished" · the terms for reselling before handover · the form of contract and how registration works.',
          'You are allowed to ask for all of it. A developer who answers every one of those in writing is telling you something, and so is one who does not.',
        ],
      },
    ],
  },

  unitSize: {
    slug: 'studio-or-two-bedroom-hurghada',
    navLabel: 'Studio, one bed or two?',
    title: 'Studio, One Bedroom or Two in Hurghada — How to Choose | Square9',
    description:
      'Choosing between a studio, a one bedroom and a two bedroom apartment in Hurghada: what each size actually gives you, who each suits, and what changes if you intend to let it.',
    h1: 'Studio, one bedroom or two?',
    intro:
      'This is usually decided by budget alone, and then regretted. The three sizes are not the same product at different prices — they suit genuinely different lives, and if you are letting, they attract different guests entirely.',
    sections: [
      {
        heading: 'The three sizes at Aurora Palace',
        body: [
          'A **studio** runs 54 to 80 m²: one room, a kitchen and a terrace. A **one bedroom** runs 65 to 102 m²: a separate bedroom and a full living room. **Two bedrooms** run 101 to 142 m², which is room for a family that is staying rather than visiting.',
          'Notice the overlap. A large studio at 80 m² is bigger than a small one bedroom at 65 m². Floor area alone will mislead you — what changes between the types is whether there is a door between the bed and everything else.',
        ],
      },
      {
        heading: 'If you are buying to live in it',
        body: [
          'A studio works for one person, or two who are out most of the day. It stops working the moment someone needs to sleep while someone else is awake.',
          'One bedroom is the honest minimum for a couple, and it is the size that handles a visiting guest without anyone resenting it. Two bedrooms is for a family, or for anyone who works from home and needs a door they can close.',
          'Be realistic about the second bedroom rather than aspirational. If it would be used four weekends a year, you are paying for storage.',
        ],
      },
      {
        heading: 'If you are buying to let',
        body: [
          'Studios and one bedrooms turn over faster and suit couples and short stays. Two bedrooms draw families, who book longer and tend to return to the same place.',
          'What you should not do is pick a size based on a yield figure. No yield or occupancy numbers are published for this project and we will not invent any — anything you are quoted for a building that does not exist yet is a projection. Ask whoever gives you one what it is based on.',
        ],
      },
      {
        heading: 'What the floor does to the decision',
        body: [
          'The building is ground plus four floors. A ground floor unit near the gardens is a different proposition from a top floor one, for noise, for privacy and for what you see from the terrace — and forty per cent of this site is landscape and water, so what your terrace faces is worth caring about.',
          'Floor allocation and what it costs are confirmed by the sales office per unit. Walk the show apartment first and decide which size you want; then ask what is available on which floor.',
        ],
      },
    ],
  },
} as const satisfies Record<string, Guide>;

export type GuideKey = keyof typeof GUIDES;

export const GUIDE_LIST = Object.values(GUIDES) as ReadonlyArray<Guide>;
