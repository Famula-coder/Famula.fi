"use client";
import type { ReactNode } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { visibleRegions } from '../data/regions';
import { regionContent } from '../data/regionContent';
import { cities } from '../data/cities';
import { cityAngles } from '../data/pageAngles';
import RegionTags from '../components/region/RegionTags';
import RegionHero from '../components/region/RegionHero';
import RegionFeature from '../components/region/RegionFeature';
import RegionArticles from '../components/region/RegionArticles';
import CitySummary from '../components/region/CitySummary';
import RegionStart from '../components/region/RegionStart';

const asString = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

type BlockId = 'feature' | 'testimonial' | 'summary' | 'articles' | 'start';

const LAYOUTS: Record<'A' | 'B' | 'C', BlockId[]> = {
  A: ['feature', 'testimonial', 'summary', 'articles', 'start'],
  B: ['testimonial', 'feature', 'articles', 'summary', 'start'],
  C: ['start', 'feature', 'summary', 'testimonial', 'articles'],
};

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

  const angle = cityAngles[`${region.id}/${city.id}`];
  const layout = angle?.layout ?? 'A';
  const regionLabel = regionContent[region.id]?.linkLabel ?? `Kotipalvelu ${region.locativeName}`;

  const blocks: Record<BlockId, ReactNode> = {
    feature: angle ? <RegionFeature key="feature" angle={angle} showImage={false} /> : null,
    testimonial: city.testimonial ? (
      <figure key="testimonial" className="container" style={{ maxWidth: '800px', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
          &ldquo;{city.testimonial.text}&rdquo;
        </blockquote>
        <figcaption style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>{city.testimonial.author}</figcaption>
      </figure>
    ) : null,
    summary: (
      <CitySummary
        key="summary"
        region={region}
        locative={city.locative}
        priceHeading={angle?.priceHeading ?? `Kotipalvelun hinta ${city.locative}`}
        priceExample={angle?.priceExample}
      />
    ),
    articles: angle ? <RegionArticles key="articles" heading={angle.articlesHeading} slugs={angle.articleSlugs} /> : null,
    start: <RegionStart key="start" region={region} showRecruit={layout !== 'C'} />,
  };

  return (
    <>
      <RegionTags region={region} />
      <RegionHero
        region={region}
        heading={city.h1}
        paragraphs={city.paragraphs}
        badge={city.name}
        photo={angle ? { src: angle.image, alt: angle.imageAlt } : undefined}
      />
      {LAYOUTS[layout].map((id) => blocks[id])}
      <div className="container text-center" style={{ padding: '0 1.5rem 4rem' }}>
        <Link href={`/${region.id}/`} className="btn btn-outline btn-with-icon" style={{ backgroundColor: 'white' }}>
          <ArrowLeft size={16} /> {regionLabel}
        </Link>
      </div>
    </>
  );
};

export default City;
