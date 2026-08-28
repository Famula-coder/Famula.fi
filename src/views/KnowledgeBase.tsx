"use client";

import { useState } from 'react';
import Link from 'next/link';
import { articles } from '../data/articles';
import * as Icons from 'lucide-react';
import { ArrowRight, BookOpen } from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
  'Kotitalousvähennys': '#e67e5a',
  'Terveys': '#5a9e7a',
  'Arki': '#7f6890',
  'Palvelut': '#4a90b8',
};

const getCategoryColor = (cat: string) => {
  const key = Object.keys(CATEGORY_COLORS).find(k => cat.toLowerCase().includes(k.toLowerCase()));
  return key ? CATEGORY_COLORS[key] : 'var(--color-secondary)';
};

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Kaikki');

  const categories = ['Kaikki', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = activeCategory === 'Kaikki'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <style>{`
        .kb-hero {
          padding: 6rem 1.5rem 4rem;
          background: linear-gradient(135deg, var(--color-background-warm) 0%, var(--color-hero-gradient-start) 100%);
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
          color: var(--color-primary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }

        .filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          transform: translateY(-1px);
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
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .card-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(127,184,150,0.25) 0%, rgba(127,184,150,0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 1.25rem;
        }

        .card-category-badge {
          display: inline-block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: white;
          font-weight: 700;
          margin-bottom: 0.9rem;
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.85rem;
          line-height: 1.4;
        }

        .card-excerpt {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9rem;
          border-top: 1px solid rgba(0,0,0,0.06);
          padding-top: 1rem;
        }

        .card-readtime {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 400;
        }

        .card-footer svg {
          transition: transform 0.2s ease;
        }

        .article-card:hover .card-footer svg {
          transform: translateX(5px);
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
          const wordCount = article.content.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
          const readMin = Math.max(2, Math.round(wordCount / 200));
          const badgeColor = getCategoryColor(article.category);
          return (
            <Link href={`/tietopankki/${article.slug}/`} key={article.id} className="article-card">
              <div className="card-icon-wrapper">
                {IconComp && <IconComp size={24} />}
              </div>
              <span className="card-category-badge" style={{ background: badgeColor }}>
                {article.category}
              </span>
              <h2 className="card-title">{article.title}</h2>
              <p className="card-excerpt">{article.excerpt}</p>
              <div className="card-footer">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Lue artikkeli <ArrowRight size={16} />
                </span>
                <span className="card-readtime">⏱️ {readMin} min</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default KnowledgeBase;
