"use client";
import { useParams, useRouter } from 'next/navigation';
import { regions } from '../data/regions';
import { regionContent } from '../data/regionContent';
import { getCitiesForRegion } from '../data/cities';
import RegionTags from '../components/region/RegionTags';
import RegionHero from '../components/region/RegionHero';
import RegionVideo from '../components/region/RegionVideo';
import RegionServices from '../components/region/RegionServices';
import RegionPricing from '../components/region/RegionPricing';
import RegionLocal from '../components/region/RegionLocal';
import RegionWhy from '../components/region/RegionWhy';
import RegionTrust from '../components/region/RegionTrust';
import RegionFaq from '../components/region/RegionFaq';
import RegionStart from '../components/region/RegionStart';

const Region = () => {
  const params = useParams();
  const regionId = Array.isArray(params?.regionId) ? params.regionId[0] : params?.regionId;
  const router = useRouter();
  const region = regions.find(r => r.id === regionId);

  if (!region) {
    if (typeof window !== 'undefined') { router.replace('/'); } return null;
  }

  const content = regionContent[region.id];
  const locative = content?.cityLocative ?? region.locativeName;
  const heading = content?.h1 ?? region.descriptionTitle ?? `Lämminhenkistä kotihoitoa ${region.locativeName}`;
  const paragraphs = content?.intro ?? (region.descriptionText ? region.descriptionText.split('\n\n') : []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Famula Kotihoito ${region.name}`,
    "image": `https://famula.fi${region.image}`,
    "@id": `https://famula.fi/${region.id}/`,
    "url": `https://famula.fi/${region.id}/`,
    "telephone": region.phone,
    "email": region.email,
    "priceRange": "42,50 €/h",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": region.mainCity || region.name,
      "postalCode": region.postalCode,
      "addressCountry": "FI"
    },
    ...(region.areaServed && {
      "areaServed": region.areaServed.map(city => ({ "@type": "City", "name": city })),
    }),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    }
  };

  const faqSchema = content && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  return (
    <>
      <RegionTags region={region} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <RegionHero region={region} heading={heading} paragraphs={paragraphs} badge={region.name} />
      <RegionVideo />
      <RegionServices locative={locative} />
      <RegionPricing locative={locative} />
      <RegionTrust region={region} />
      {content && <RegionLocal content={content} cityPages={getCitiesForRegion(region.id)} />}
      {content && <RegionFaq heading={content.faqHeading} items={content.faq} />}
      <RegionWhy locative={locative} />
      <RegionStart region={region} />
    </>
  );
};

export default Region;
