import Link from 'next/link';
import { articles } from '../../data/articles';

const RegionArticles = ({ heading, slugs }: { heading: string; slugs: string[] }) => {
  const picked = slugs.flatMap((slug) => articles.filter((article) => article.slug === slug));
  if (picked.length === 0) return null;

  return (
    <section className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
      <h2 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', marginBottom: '1.5rem' }}>{heading}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.25rem' }}>
        {picked.map((article) => (
          <Link
            key={article.slug}
            href={`/tietopankki/${article.slug}/`}
            style={{ display: 'block', background: 'white', borderRadius: '12px', padding: '1.5rem', textDecoration: 'none', color: 'inherit', borderTop: '4px solid var(--color-secondary)' }}
          >
            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#64748b', marginBottom: '0.5rem' }}>
              {article.category}
            </span>
            <span style={{ display: 'block', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.5rem' }}>{article.title}</span>
            <span style={{ display: 'block', color: '#475569', fontSize: '1rem' }}>{article.excerpt}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RegionArticles;
