import { Metadata } from 'next';
import Recruit from '../../views/Recruit';

export const metadata: Metadata = {
  title: 'Töihin meille | Famula',
  description: 'Etsitkö merkityksellistä työtä ikäihmisten parissa? Tule osaksi Famulan lämminhenkistä tiimiä.',
  alternates: {
    canonical: 'https://famula.fi/toihin-meille',
  },
  openGraph: {
    images: ['/images/keskustelu.webp'],
  }
};

export default function RecruitPage() {
  return <Recruit />;
}
