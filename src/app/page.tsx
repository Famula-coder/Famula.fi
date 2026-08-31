import { Metadata } from 'next';
import Home from '../views/Home';

export const metadata: Metadata = {
  title: 'Famula | Kiireetöntä kotipalvelua ja hoivaa ikäihmisille',
  description: 'Famulan kotipalvelu tarjoaa luotettavaa, kiireetöntä ja lämminhenkistä apua arkeen. Aina sama, tuttu hoitaja kotiisi. Katso miten voimme auttaa!',
  alternates: {
    canonical: 'https://famula.fi/',
  },
  openGraph: {
    images: ['/images/famulasydan.png'],
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Famula Oy",
    "url": "https://famula.fi",
    "logo": "https://famula.fi/images/famulasydan.png",
    "sameAs": [
      "https://www.facebook.com/Famula.fi/",
      "https://www.instagram.com/famula.fi/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
