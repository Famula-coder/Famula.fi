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
  return {
    title: `${slug.replace(/-/g, ' ')} | Famulan tietopankki`,
    alternates: {
      canonical: `https://famula.fi/tietopankki/${slug}`,
    }
  };
}

export default function ArticlePage() {
  return <Article />;
}
