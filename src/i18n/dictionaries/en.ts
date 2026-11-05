// النصوص الإنجليزية — نفس شكل القاموس العربي بالظبط.
// النبرة مأخوذة من موقعهم الحالي: جُمل قصيرة، community / family / home.
const en = {
  nav: {
    story: 'Who We Are',
    project: 'The Project',
    units: 'Residences',
    amenities: 'Amenities',
    location: 'Location',
    visit: 'Book a Visit',
    menu: 'Sections',
  },

  hero: {
    eyebrow: 'Hurghada · Magawish',
    title: 'Aurora Palace',
    subtitle: 'Made to Live Together',
    lead: 'A residential community in Magawish — studios, one and two bedrooms. Fully finished, delivered 2028, ten minutes from the airport.',
    ctaVisit: 'Book a visit to the show apartment',
    ctaWhatsapp: 'Chat on WhatsApp',
    badge: 'Launching Now',
  },

  stats: {
    units: 'Residences',
    areas: 'Unit sizes',
    land: 'Total area',
    delivery: 'Delivery',
    finishing: 'Finish',
    structure: 'Structure',
  },

  story: {
    kicker: 'Who We Are',
    heading: 'A developer that builds its own',
    body1:
      'Square9 is not a marketing agency — we build. That shows up in the details: the materials, the shared spaces, and the fact that whoever hands you the keys is the same team that laid the walls.',
    body2:
      'The aim is not to sell apartments. It is to build a neighbourhood — where people know each other, children play downstairs, and the green space survives past the brochure.',
    pillarsHeading: 'Four principles behind every decision',
    pillars: [
      { title: 'Community', body: 'Neighbourhoods where families connect, not blocks that share a wall.' },
      { title: 'Intention', body: 'Every space designed with a purpose, every detail considered.' },
      { title: 'Balance', body: 'Harmony between modern living and the nature around it.' },
      { title: 'Presence', body: 'Homes where you feel at home, at any hour of the day.' },
    ],
  },

  project: {
    kicker: 'The Project',
    heading: 'Aurora Palace in detail',
    lead: 'Everything announced about the project, in one place — and nothing that is not.',
    labels: {
      units: 'Number of units',
      areas: 'Unit sizes',
      land: 'Total land area',
      buildings: 'Buildings',
      landscape: 'Landscape & pools',
      structure: 'Structure',
      delivery: 'Delivery',
      finishing: 'Finish',
      contract: 'Contract',
      saleType: 'Sale type',
      downPayment: 'Down payment',
    },
    downPaymentValue: '10%',
    offPlanNote:
      'This is an off-plan sale with delivery in 2028. You buy on contract — and you can walk through the show apartment before you decide.',
  },

  units: {
    kicker: 'Residences',
    heading: 'Three types, a size for every situation',
    lead: 'These are the officially announced sizes. Floor allocation and pricing are confirmed by the sales office.',
    askPrice: 'Ask about this unit',
    note: 'Availability changes — the fastest way to know what is free right now is to ask on WhatsApp.',
  },

  amenities: {
    kicker: 'Amenities',
    heading: 'What you get inside the compound',
    lead: '40% of the land is landscape and swimming pools — not a number on paper.',
  },

  location: {
    kicker: 'Location',
    heading: 'Magawish — quiet, and close to everything',
    lead: 'Magawish is one of the calmest parts of Hurghada, yet everything is within a quarter of an hour by car.',
    directions: 'Open the location on the map',
    distancesHeading: 'Distances',
    seoNote:
      'If you are looking for apartments for sale in Hurghada or property in the Magawish area, this address combines airport access with a quiet residential setting and the Red Sea a short drive away.',
  },

  experience: {
    kicker: 'Life Here',
    heading: 'An ordinary day at Aurora',
    lead: 'A home is not only walls — it is your daily routine.',
    items: [
      { title: 'Morning on the water', body: 'Four swimming pools, one of them just for the children.' },
      { title: 'Gym before work', body: 'A gym inside the compound — no car needed.' },
      { title: 'Lunch out of the house', body: 'A restaurant on site for the days nobody feels like cooking.' },
      { title: 'A quiet night', body: '24/7 security and four elevators — details you notice after you move in.' },
    ],
  },

  // 🔴 القسم اللي بيقف مكان السعر
  price: {
    heading: 'So what does it cost?',
    body: 'Prices are confirmed by the sales office based on type, floor and area — which is why we will not print a number here that may already have changed.',
    published: 'Officially announced: 10% down payment and flexible payment plans.',
    reassure: 'Book a visit, walk through the show apartment, and take pricing and payment plans in writing from the sales office.',
    cta: 'Book a visit',
    ctaWhatsapp: 'Or ask on WhatsApp now',
  },

  visit: {
    kicker: 'The Visit',
    heading: 'See it for yourself',
    lead: 'Book a time and we will meet you at the show apartment. No obligation.',
    soon: 'The booking form arrives in the next step — for now, reach us on WhatsApp or by phone.',
  },

  footer: {
    tagline: 'We build communities in Hurghada where people live together, not merely side by side.',
    navTitle: 'Sections',
    contactTitle: 'Contact',
    followTitle: 'Follow us',
    rights: 'All rights reserved.',
    callUs: 'Call us',
    emailUs: 'Email us',
  },

  common: {
    minutes: 'min',
    minute: 'min',
    sqm: 'm²',
    switchLang: 'العربية',
    skipToContent: 'Skip to content',
  },
} as const;

export default en;
