import { Metadata } from 'next';
import Region from '../../views/Region';
import { regions } from '../../data/regions';

export function generateStaticParams() {
  return regions.map((region) => ({
    regionId: region.id,
  }));
}

interface PageProps {
  params: Promise<{ regionId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { regionId } = await params;
  const readableName = regionId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `Kotihoito ja kotipalvelu ${readableName} | Famula`,
    description: `Famulan luotettava ja kiireetön kotipalvelu alueella ${readableName}. Tutustu paikalliseen tiimiimme.`,
    alternates: {
      canonical: `https://famula.fi/${regionId}`,
    }
  };
}

export default function RegionPage() {
  return <Region />;
}
