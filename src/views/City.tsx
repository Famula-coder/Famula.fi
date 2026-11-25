"use client";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { visibleRegions } from '../data/regions';
import { regionContent } from '../data/regionContent';
import { cities } from '../data/cities';
import RegionTags from '../components/region/RegionTags';
import RegionHero from '../components/region/RegionHero';
import RegionServices from '../components/region/RegionServices';
import RegionPricing from '../components/region/RegionPricing';
import RegionTrust from '../components/region/RegionTrust';
import RegionStart from '../components/region/RegionStart';

const asString = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

const City = () => {
  const params = useParams();
  const router = useRouter();
  const regionId = asString(params?.regionId);
  const cityId = asString(params?.cityId);
  const region = visibleRegions.find(r => r.id === regionId);
  const city = cities.find(c => c.regionId === regionId && c.id === cityId);

  if (!region || !city) {
    if (typeof window !== 'undefined') { router.replace('/'); } return null;
  }

  const regionLabel = regionContent[region.id]?.linkLabel ?? `Kotipalvelu ${region.locativeName}`;

  return (
    <>
      <RegionTags region={region} />
      <RegionHero region={region} heading={city.h1} paragraphs={city.paragraphs} badge={city.name} />
      <RegionServices locative={city.locative} />
      <RegionPricing locative={city.locative} />
      <RegionTrust region={region} />
      <RegionStart region={region} />
      <div className="container text-center" style={{ padding: '0 1.5rem 4rem' }}>
        <Link href={`/${region.id}/`} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
          <ArrowLeft size={16} /> {regionLabel}
        </Link>
      </div>
    </>
  );
};

export default City;
