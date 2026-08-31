import { Metadata } from 'next';
import Article from '../../../views/Article';
import { articles } from '../../../data/articles';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return { title: 'Famulan tietopankki' };
  }

  return {
    title: `${article.title} | Famulan tietopankki`,
    description: article.excerpt,
    alternates: {
      canonical: `https://famula.fi/tietopankki/${slug}`,
    },
    openGraph: {
      type: 'article',
      description: article.excerpt,
      publishedTime: article.publishedDate,
      images: ['/images/famulasydan.png'],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  const jsonLd = article ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedDate,
    "dateModified": article.publishedDate,
    "image": "https://famula.fi/images/famulasydan.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://famula.fi/tietopankki/${slug}`,
    },
    "author": {
      "@type": "Organization",
      "name": "Famula Oy",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Famula Oy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://famula.fi/images/famulasydan.png",
      },
    },
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Article />
    </>
  );
}
