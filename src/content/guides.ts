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
    title: 'Apartments for Sale in Hurghada — Aurora Palace, Magawish | Square9',
    description:
      'Apartments for sale in Hurghada, Magawish: studios, one and two bedrooms from 54 to 142 m². Fully finished, delivered 2028, 10% down. Book a visit to the show apartment.',
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
} as const satisfies Record<string, Guide>;

export type GuideKey = keyof typeof GUIDES;

export const GUIDE_LIST = Object.values(GUIDES) as ReadonlyArray<Guide>;
