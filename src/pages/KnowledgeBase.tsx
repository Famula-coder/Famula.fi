import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { articles } from '../data/articles';
import * as Icons from 'lucide-react';
import { ArrowRight, BookOpen } from 'lucide-react';

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Kaikki');

  // Extract unique categories
  const categories = ['Kaikki', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = activeCategory === 'Kaikki' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <SEO 
        title="Tietopankki ja Oppaat | Famula Oy"
        description="Lue hyödyllistä tietoa kotitalousvähennyksestä, yksityisen ja kunnallisen kotipalvelun eroista sekä ikääntyvän arjen tukemisesta."
      />

      <style>{`
        .kb-hero {
          padding: 6rem 1.5rem 4rem;
          background: var(--color-background-warm);
          text-align: center;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(0,0,0,0.1);
          background: white;
          color: var(--color-text);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        .filter-btn.active {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          padding: 2rem 1.5rem 6rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .article-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }

        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .card-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          background: rgba(155,194,166,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }

        .card-category {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-secondary);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .card-excerpt {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .card-footer svg {
          transition: transform 0.2s ease;
        }

        .article-card:hover .card-footer svg {
          transform: translateX(4px);
        }
      `}</style>

      <div className="kb-hero">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'rgba(255,255,255,0.8)', color: 'var(--color-primary)', fontWeight: '600', borderRadius: '50px', marginBottom: '1.5rem' }}>
            <BookOpen size={18} color="var(--color-secondary)" />
            Tietoa ja tukea
          </div>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
            Tietopankki ja oppaat
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: '1.7', marginBottom: '3rem' }}>
            Olemme koonneet tänne vastauksia mieltä askarruttaviin kysymyksiin ikääntyvien arjesta, palveluistamme ja esimerkiksi kotitalousvähennyksestä.
          </p>

          <div className="filter-buttons">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="article-grid">
        {filteredArticles.map(article => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComp = (Icons as any)[article.icon || 'FileText'];
          return (
            <Link to={`/tietopankki/${article.slug}`} key={article.id} className="article-card">
              <div className="card-icon-wrapper">
                {IconComp && <IconComp size={24} />}
              </div>
              <div className="card-category">{article.category}</div>
              <h2 className="card-title">{article.title}</h2>
              <p className="card-excerpt">{article.excerpt}</p>
              <div className="card-footer">
                Lue artikkeli <ArrowRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default KnowledgeBase;
