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
      description: article.excerpt,
    },
  };
}

export default function ArticlePage() {
  return <Article />;
}
