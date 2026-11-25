import { Metadata } from 'next';
import City from '../../../views/City';
import { cities } from '../../../data/cities';
import { visibleRegions } from '../../../data/regions';

const publishedCities = cities.filter((city) => visibleRegions.some((region) => region.id === city.regionId));

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCities.map((city) => ({ regionId: city.regionId, cityId: city.id }));
}

interface PageProps {
  params: Promise<{ regionId: string; cityId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { regionId, cityId } = await params;
  const city = publishedCities.find((c) => c.regionId === regionId && c.id === cityId);
  const region = visibleRegions.find((r) => r.id === regionId);

  if (!city || !region) {
    return { title: 'Famula' };
  }

  return {
    title: `${city.seoTitle} | Famula`,
    description: city.metaDescription,
    alternates: {
      canonical: `https://famula.fi/${regionId}/${cityId}/`,
    },
    openGraph: {
      images: [region.image],
    },
  };
}

export default function CityPage() {
  return <City />;
}
