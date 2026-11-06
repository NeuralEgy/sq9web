import { AMENITIES, DEVELOPER, LOCATION, PROJECT, UNIT_TYPES } from '@/data/project';
import { absolute, SITE_URL } from '@/lib/site';

// ============================================================
// البيانات المنظّمة (JSON-LD) — ده اللي بيخلّي جوجل يفهم إن الصفحة
// دي مجمّع سكني في الغردقة، مش مجرد نص.
//
// 🔴 قاعدة الموقع سارية هنا كمان، وبشكل أخطر:
//    - مفيش `offers` ولا `price` — مفيش سعر معروف أصلًا
//    - مفيش `numberOfAvailableAccommodationUnits` — التوفّر مش معروف
//    - مفيش `geo` — الإحداثيات اللي كانت عندنا تقريبية ولسه ما
//      اتأكدتش من العميل. إحداثية غلط بتحط دبوس المشروع في مكان تاني.
//    بيانات منظّمة غلط مش بس بتضلّل المشتري — جوجل بيعاقب عليها.
// ============================================================

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // المحتوى بيتولّد من ملف بياناتنا، مفيش أي مدخل من مستخدم هنا
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: LOCATION.address,
  addressLocality: LOCATION.city,
  addressRegion: LOCATION.region,
  addressCountry: 'EG',
};

export function HomeJsonLd() {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: DEVELOPER.name,
            url: SITE_URL,
            email: DEVELOPER.email,
            telephone: DEVELOPER.phoneE164,
            sameAs: Object.values(DEVELOPER.social),
            address: ADDRESS,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: DEVELOPER.phoneE164,
              contactType: 'sales',
              availableLanguage: ['en', 'ar'],
            },
          },
          {
            '@type': 'ApartmentComplex',
            '@id': `${SITE_URL}/#aurora-palace`,
            name: PROJECT.name,
            url: SITE_URL,
            // 🟢 ١٤٠ وحدة رقم منشور. عدد **المتاح** مش منشور، فمش موجود هنا.
            numberOfAccommodationUnits: {
              '@type': 'QuantitativeValue',
              value: PROJECT.totalUnits,
            },
            numberOfBedrooms: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 2 },
            floorSize: {
              '@type': 'QuantitativeValue',
              minValue: PROJECT.areaMinM2,
              maxValue: PROJECT.areaMaxM2,
              unitCode: 'MTK',
            },
            address: ADDRESS,
            amenityFeature: AMENITIES.map((a) => ({
              '@type': 'LocationFeatureSpecification',
              name: a.label,
              value: true,
            })),
            tourBookingPage: `${SITE_URL}/#visit`,
            containsPlace: UNIT_TYPES.map((u) => ({
              '@type': 'Apartment',
              name: u.name,
              floorSize: {
                '@type': 'QuantitativeValue',
                minValue: u.areaMinM2,
                maxValue: u.areaMaxM2,
                unitCode: 'MTK',
              },
            })),
            developer: { '@id': `${SITE_URL}/#organization` },
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: `${DEVELOPER.name} — ${PROJECT.name}`,
            inLanguage: 'en',
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
        ],
      }}
    />
  );
}

/** فتات الخبز لصفحات الأدلة — بيخلّي جوجل يعرض مسار الصفحة في النتيجة */
export function BreadcrumbJsonLd({ pageName, path }: { pageName: string; path: string }) {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: PROJECT.name, item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: pageName, item: absolute(path) },
        ],
      }}
    />
  );
}
