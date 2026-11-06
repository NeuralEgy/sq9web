// ============================================================
// الأسئلة المتكررة.
//
// 🔴 القسم ده أسهل مكان في الموقع تكدب فيه من غير ما تقصد. حد
//    بيسأل «بكام؟» والرد الطبيعي إنك تدّيله رقم تقريبي عشان ما
//    تبوظش المحادثة. الرد ده ممنوع هنا.
//
//    قاعدة كل إجابة تحت: إما حقيقة منشورة في
//    src/data/projects/aurora-palace.ts، أو اعتراف صريح إن المعلومة
//    مش عندنا + إزاي الزائر يجيبها. مفيش إجابة في النص.
//
//    و«اسأل مكتب المبيعات» مش تهرّب — دي الإجابة الصحيحة فعلًا لما
//    المعلومة بتتغيّر بالدور والمساحة، وبتتكتب في عقد. اللي بيتهرّب
//    هو الموقع اللي بيكتب رقم عشان يمسك الزائر.
//
// 🔴 سؤال القانون (التملّك للأجانب) بالذات: ممنوع نلخّص قانون مصري
//    على صفحة ويب. القانون بيتغيّر، وحالة كل مشتري مختلفة، وزائر
//    بيبني قرار بملايين على فقرة اتكتبت من سنتين. الإجابة بتوجّهه
//    لمحامي ولمكتب المبيعات، وخلاص.
//
// النصوص إنجليزي. التعليقات عربي.
// ============================================================

export type FaqItem = {
  /** مفتاح ثابت — بيستخدم في المرساة على الصفحة */
  id: string;
  question: string;
  /** فقرة أو أكتر. **كده** بتتحوّل لـ<strong> */
  answer: ReadonlyArray<string>;
};

export type FaqGroup = {
  title: string;
  items: ReadonlyArray<FaqItem>;
};

export const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    title: 'Price and payment',
    items: [
      {
        id: 'price',
        question: 'How much is an apartment at Aurora Palace?',
        answer: [
          'We do not publish a price, and we are not going to put an approximate one here to keep you reading.',
          'The reason is not secrecy. The price depends on the floor, the area and the plan, and it is confirmed per unit by the sales office. A number printed on a web page is a number that has already moved by the time you act on it — and you would be making a decision worth millions on it.',
          'Ask for the price of **the exact unit you are standing in**, by floor and area, in writing. That is the only figure that means anything.',
        ],
      },
      {
        id: 'payment-plan',
        question: 'What payment plans are available?',
        answer: [
          'The only published figure is a **10% down payment**, alongside a general description of the plans as flexible. That is all that has been announced, so that is all we will state.',
          'The instalment schedule up to handover, whether anything is due on delivery, and the terms of each plan all come from the sales office. Ask for them in writing before you sign.',
        ],
      },
      {
        id: 'maintenance',
        question: 'Are there maintenance charges?',
        answer: [
          'No maintenance figure has been published, so we have none to quote.',
          'This is a real cost that runs for as long as you own the unit, so put it on your list for the visit: how much, how it is calculated, when it starts, and who collects it.',
        ],
      },
    ],
  },
  {
    title: 'The project',
    items: [
      {
        id: 'delivery',
        question: 'When is delivery?',
        answer: [
          '2028. This is an off-plan sale — you contract now and take handover then.',
          'That makes the handover date in your contract the single most important line you will read. Ask what happens if it slips, and get the answer as a clause, not as reassurance.',
        ],
      },
      {
        id: 'sizes',
        question: 'What sizes are the apartments?',
        answer: [
          'Three types: studios from **54 to 80 m²**, one bedroom from **65 to 102 m²**, and two bedrooms from **101 to 142 m²**.',
          'The project is 140 residences on 6,000 m², ground plus four floors. Forty per cent of the land is landscape and swimming pools.',
        ],
      },
      {
        id: 'finishing',
        question: 'What does "fully finished" actually include?',
        answer: [
          'The project is published as fully finished, on a Green Contract. Those are the published words — and the words on their own are not a specification.',
          'Ask for the finish schedule in detail: what is installed in the kitchen and bathrooms, what the floors and doors are, what is fitted and what is not. Then compare it against the show apartment you walked through, because that is the standard you think you are buying.',
        ],
      },
      {
        id: 'floor-plans',
        question: 'Is there a brochure or floor plans I can download?',
        answer: [
          'No. No brochure, floor plan or unit photograph has been published, so there is nothing for us to hand you here.',
          'The show apartment is built and finished. Walking through a layout tells you more than a plan does anyway — a drawing cannot show you a ceiling height or where the light falls at four in the afternoon.',
        ],
      },
      {
        id: 'availability',
        question: 'Which units are still available?',
        answer: [
          'Per-unit availability is not published, and it is exactly the kind of thing that is out of date the moment it is written down.',
          'The sales office holds the live position. Ask them on the day.',
        ],
      },
    ],
  },
  {
    title: 'Buying and visiting',
    items: [
      {
        id: 'visit',
        question: 'Can I see something before I buy?',
        answer: [
          'Yes. The show apartment is built and open by appointment — 9am, 11am, 2pm or 4pm, with no obligation.',
          'For an off-plan purchase this is the most useful hour you will spend. You are judging the finish standard of a building that does not exist yet, and the show apartment is the only physical evidence there is.',
        ],
      },
      {
        id: 'foreign-buyer',
        question: 'Can I buy as a foreign national?',
        answer: [
          'We are not going to summarise Egyptian property law on a web page. It changes, it depends on your nationality and circumstances, and a paragraph written two years ago is worse than no paragraph at all.',
          'Put the question to the sales office for the current position, and take your own legal advice before you sign. Any developer worth buying from will expect you to.',
        ],
      },
      {
        id: 'resale',
        question: 'Can I resell before handover?',
        answer: [
          'That depends on what your contract says, and the terms come from the sales office in writing.',
          'If you are buying as an investment, ask this **before** you sign rather than after. The answer changes what the purchase is worth to you.',
        ],
      },
      {
        id: 'yield',
        question: 'What rental yield can I expect?',
        answer: [
          'No yield or occupancy figure has been published for this project, and we will not invent one.',
          'Any yield number you are given about an unbuilt project is a projection, not a fact. Ask whoever hands you one what it is based on, and for the same figure in writing.',
        ],
      },
    ],
  },
  {
    title: 'Square9',
    items: [
      {
        id: 'who',
        question: 'Who is Square9?',
        answer: [
          'A developer in Hurghada that builds its own projects rather than marketing someone else’s. Aurora Palace, in Magawish, is the only project we have announced.',
          'We have not published a founding year, a list of delivered buildings, or a count of units handed over — and we are not going to imply one. What you can judge us on today is the show apartment and the contract.',
        ],
      },
      {
        id: 'where',
        question: 'Where exactly is the project?',
        answer: [
          '9 Magawish District, Hurghada, on the Red Sea. Ten minutes from Hurghada Airport, ten from Senzo Mall, fifteen from Marina Boulevard and twenty from the city centre.',
          'Magawish is one of the quieter parts of Hurghada, which is the point of it: you are away from the downtown noise without being cut off from anything.',
        ],
      },
    ],
  },
];

/** كل الأسئلة في ليستة واحدة — للبيانات المنظّمة والعدّ */
export const FAQ_ITEMS: ReadonlyArray<FaqItem> = FAQ_GROUPS.flatMap((g) => g.items);
