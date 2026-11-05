import type { Locale } from '@/i18n/config';
import {
  AMENITIES,
  DEVELOPER,
  LOCATION,
  PROJECT,
  UNIT_TYPES,
} from '@/data/project';
import { absolute, pathFor, SITE_URL } from '@/lib/site';

// ============================================================
// البيانات المنظّمة (JSON-LD) — ده اللي بيخلّي جوجل يفهم إن الصفحة
// دي مجمّع سكني في الغردقة، مش مجرد نص.
//
// 🔴 قاعدة الموقع سارية هنا كمان، وبشكل أخطر:
//    - مفيش `offers` ولا `price` — مفيش سعر معروف أصلًا
//    - مفيش `numberOfAvailableAccommodationUnits` — التوفّر مش معروف
//    - مفيش `geo` — الإحداثيات اللي عندنا تقريبية لمنطقة مجاويش
//      ولسه ما اتأكدتش من العميل. إحداثية غلط في البيانات المنظّمة
//      بتوديه لمكان تاني على الخريطة.
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

function organization(locale: Locale) {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: DEVELOPER.name[locale],
    alternateName: DEVELOPER.name[locale === 'ar' ? 'en' : 'ar'],
    url: SITE_URL,
    email: DEVELOPER.email,
    telephone: DEVELOPER.phoneE164,
    sameAs: Object.values(DEVELOPER.social),
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATION.address[locale],
      addressLocality: LOCATION.city[locale],
      addressRegion: locale === 'ar' ? 'البحر الأحمر' : 'Red Sea',
      addressCountry: 'EG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: DEVELOPER.phoneE164,
      contactType: 'sales',
      availableLanguage: ['ar', 'en'],
    },
  };
}

function apartmentComplex(locale: Locale) {
  return {
    '@type': 'ApartmentComplex',
    '@id': `${SITE_URL}/#aurora-palace`,
    name: PROJECT.name,
    url: absolute(pathFor(locale, 'home')),
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
      unitCode: 'MTK', // متر مربع
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATION.address[locale],
      addressLocality: LOCATION.city[locale],
      addressRegion: locale === 'ar' ? 'البحر الأحمر' : 'Red Sea',
      addressCountry: 'EG',
    },
    amenityFeature: AMENITIES.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity.label[locale],
      value: true,
    })),
    // الصفحة اللي بيتحجز منها معاد الزيارة
    tourBookingPage: `${absolute(pathFor(locale, 'home'))}#visit`,
    containsPlace: UNIT_TYPES.map((unit) => ({
      '@type': 'Apartment',
      name: unit.name[locale],
      floorSize: {
        '@type': 'QuantitativeValue',
        minValue: unit.areaMinM2,
        maxValue: unit.areaMaxM2,
        unitCode: 'MTK',
      },
    })),
    developer: { '@id': `${SITE_URL}/#organization` },
  };
}

/** البيانات المنظّمة للصفحة الرئيسية */
export function HomeJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          organization(locale),
          apartmentComplex(locale),
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: `${DEVELOPER.name[locale]} — ${PROJECT.name}`,
            inLanguage: locale === 'ar' ? 'ar-EG' : 'en',
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
        ],
      }}
    />
  );
}

/** فتات الخبز لصفحات الهبوط — بيخلّي جوجل يعرض مسار الصفحة في النتيجة */
export function BreadcrumbJsonLd({
  locale,
  pageName,
  pagePath,
  homeName,
}: {
  locale: Locale;
  pageName: string;
  pagePath: string;
  homeName: string;
}) {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: homeName,
            item: absolute(pathFor(locale, 'home')),
          },
          { '@type': 'ListItem', position: 2, name: pageName, item: absolute(pagePath) },
        ],
      }}
    />
  );
}
