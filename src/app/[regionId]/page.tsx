import { Metadata } from 'next';
import Region from '../../views/Region';
import { regions, visibleRegions } from '../../data/regions';
import { regionContent } from '../../data/regionContent';

export function generateStaticParams() {
  return visibleRegions.map((region) => ({
    regionId: region.id,
  }));
}

interface PageProps {
  params: Promise<{ regionId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { regionId } = await params;
  const region = regions.find(r => r.id === regionId);

  if (!region) {
    return { title: 'Famula' };
  }

  const content = regionContent[region.id];
  const title = content
    ? `${content.seoTitle} | Famula`
    : `Kotihoito ja kotipalvelu ${region.name} | Famula`;
  const description = content
    ? content.metaDescription
    : `Famulan luotettava ja kiireetön kotipalvelu alueella ${region.name}. Tutustu paikalliseen tiimiimme.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://famula.fi/${regionId}/`,
    },
    openGraph: {
      images: [region.image],
    },
  };
}

export default function RegionPage() {
  return <Region />;
}
