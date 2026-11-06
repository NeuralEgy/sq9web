import { DEVELOPER, HEAD_OFFICE } from '@/data/company';
import {
  AMENITIES,
  LOCATION,
  PROJECT,
  PROJECT_PATH,
  UNIT_TYPES,
} from '@/data/projects/aurora-palace';
import { absolute, SITE_URL } from '@/lib/site';

// ============================================================
// البيانات المنظّمة (JSON-LD).
//
// الموقع بقى صفحتين من نوعين مختلفين، فالبيانات اتقسمت معاهم:
//
//   HomeJsonLd    → Organization + WebSite   (الرئيسية: الشركة)
//   AuroraJsonLd  → ApartmentComplex + مسار  (صفحة المشروع)
//
// 🔴 قاعدة الموقع سارية هنا كمان، وبشكل أخطر:
//    - مفيش `offers` ولا `price` — مفيش سعر معروف أصلًا
//    - مفيش `numberOfAvailableAccommodationUnits` — التوفّر مش معروف
//    - مفيش `foundingDate` ولا `founder` ولا `employee` على
//      الـOrganization — الشركة ما نشرتش ولا سنة تأسيس ولا اسم حد.
//      خانة زي `founder` بتطلب اسم إنسان حقيقي، ومفيش عندنا.
//    - مفيش `geo` — الإحداثيات اللي كانت عندنا تقريبية ولسه ما
//      اتأكدتش من العميل. إحداثية غلط بتحط دبوس المشروع في مكان تاني.
//    بيانات منظّمة غلط مش بس بتضلّل المشتري — جوجل بيعاقب عليها.
// ============================================================

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // المحتوى بيتولّد من ملفات بياناتنا، مفيش أي مدخل من مستخدم هنا
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const OFFICE_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: HEAD_OFFICE.address,
  addressLocality: HEAD_OFFICE.city,
  addressRegion: HEAD_OFFICE.region,
  addressCountry: HEAD_OFFICE.country,
};

const PROJECT_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: LOCATION.address,
  addressLocality: LOCATION.city,
  addressRegion: LOCATION.region,
  addressCountry: 'EG',
};

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// الشركة. بتتكرّر على الصفحتين بنفس الـ@id عن قصد: إشارة لعقدة
// متعرّفة في صفحة تانية بتشتغل، بس تعريفها كامل في كل صفحة أضمن.
const ORGANIZATION = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: DEVELOPER.name,
  alternateName: DEVELOPER.shortName,
  slogan: DEVELOPER.tagline,
  url: SITE_URL,
  email: DEVELOPER.email,
  telephone: DEVELOPER.phoneE164,
  sameAs: Object.values(DEVELOPER.social),
  address: OFFICE_ADDRESS,
  areaServed: { '@type': 'City', name: HEAD_OFFICE.city },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: DEVELOPER.phoneE164,
    contactType: 'sales',
    availableLanguage: ['en', 'ar'],
  },
};

/** الصفحة الرئيسية — الشركة. مفيش مشروع هنا، المشروع ليه صفحته. */
export function HomeJsonLd() {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          ORGANIZATION,
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: DEVELOPER.name,
            inLanguage: 'en',
            publisher: { '@id': ORGANIZATION_ID },
          },
        ],
      }}
    />
  );
}

/** صفحة Aurora Palace */
export function AuroraJsonLd() {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          ORGANIZATION,
          {
            '@type': 'ApartmentComplex',
            '@id': `${absolute(PROJECT_PATH)}#project`,
            name: PROJECT.name,
            url: absolute(PROJECT_PATH),
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
            address: PROJECT_ADDRESS,
            amenityFeature: AMENITIES.map((a) => ({
              '@type': 'LocationFeatureSpecification',
              name: a.label,
              value: true,
            })),
            tourBookingPage: `${absolute(PROJECT_PATH)}#visit`,
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
            developer: { '@id': ORGANIZATION_ID },
          },
          breadcrumb(PROJECT.name, PROJECT_PATH),
        ],
      }}
    />
  );
}

/** فتات الخبز — بيخلّي جوجل يعرض مسار الصفحة في النتيجة */
function breadcrumb(pageName: string, path: string) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: DEVELOPER.name, item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: pageName, item: absolute(path) },
    ],
  };
}

/** صفحات الأدلة */
export function BreadcrumbJsonLd({ pageName, path }: { pageName: string; path: string }) {
  return (
    <JsonLdScript data={{ '@context': 'https://schema.org', ...breadcrumb(pageName, path) }} />
  );
}
