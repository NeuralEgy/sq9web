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

  // شخصيتين المشتري — أسرة ومستثمر
  personas: {
    kicker: 'Why are you buying?',
    heading: 'A home for your family, or an investment?',
    lead: 'Two different questions with two different answers. Pick the one closer to you.',

    family: {
      title: 'A home for my family',
      lead: 'What matters when you are the one living there.',
      points: [
        {
          title: 'Real space',
          body: 'Two bedrooms up to 142 m² — space on the floor, not on paper.',
        },
        {
          title: 'Somewhere for the children',
          body: '40% of the land is landscape and pools, including a pool for children.',
        },
        {
          title: 'Quiet without being cut off',
          body: 'Magawish is a calm residential area, and the city centre is twenty minutes away.',
        },
        {
          title: 'Security',
          body: '24/7 security and a single gated entrance.',
        },
      ],
      ask: 'Schools and services around the area, and how the rooms are laid out inside the apartment — see those on the visit and ask the sales office.',
      cta: 'Ask as a family on WhatsApp',
    },

    investor: {
      title: 'An investment',
      lead: 'What matters when you are buying to let or to resell.',
      points: [
        {
          title: 'Location does the work',
          body: 'Ten minutes from the airport, fifteen from the Marina — that is what moves holiday lets.',
        },
        {
          title: 'Fully finished',
          body: 'So there is no fit-out spend between handover and your first tenant.',
        },
        {
          title: 'Entry at 10% down',
          body: 'That is the only published payment figure; the rest of the plan comes from the sales office.',
        },
        {
          title: 'A small project',
          body: '140 units on 6,000 m² — not hundreds of apartments sharing the same facilities.',
        },
      ],
      // 🔴 أهم سطر في القسم ده
      ask: 'No yield or occupancy figures are published for this project, and we will not invent one. Pricing, payment plans and the terms for letting and resale all come from the sales office, in writing.',
      cta: 'Ask as an investor on WhatsApp',
    },
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
      rate_limited: 'That is several bookings in a short time. Please wait a little, or reach us on WhatsApp.',
      unavailable: 'We cannot record the booking right now. Message us on WhatsApp and we will book it for you.',
      server_error: 'Something went wrong on our side. Try again, or reach us on WhatsApp.',
      invalid: 'One of the fields needs a second look.',
      network: 'No connection. Check your network and try again.',
    },
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
