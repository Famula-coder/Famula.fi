import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { articles } from '../data/articles';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div style={{ padding: '6rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Artikkelia ei löytynyt</h2>
        <p>Etsimääsi artikkelia ei valitettavasti ole olemassa.</p>
        <button onClick={() => navigate('/tietopankki')} style={{ marginTop: '2rem', padding: '0.8rem 2rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
          Palaa tietopankkiin
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${article.title} | Famula Oy`}
        description={article.excerpt}
      />

      <style>{`
        .article-hero {
          background: var(--color-background-warm);
          padding: 6rem 1.5rem 4rem;
          text-align: center;
        }

        .article-hero-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .article-category {
          display: inline-block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-secondary);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .article-title {
          font-size: 2.5rem;
          line-height: 1.2;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }

        .article-content {
          max-width: 760px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          font-size: 1.15rem;
          line-height: 1.8;
          color: #334155;
        }

        .article-content h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin: 3rem 0 1.5rem;
        }

        .article-content h3 {
          font-size: 1.4rem;
          color: var(--color-primary);
          margin: 2rem 0 1rem;
        }

        .article-content p {
          margin-bottom: 1.5rem;
        }

        .article-content ul, .article-content ol {
          margin-bottom: 2rem;
          padding-left: 2rem;
        }

        .article-content li {
          margin-bottom: 0.75rem;
        }

        .article-cta {
          background: rgba(155,194,166,0.15);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }

        .article-cta h3 {
          margin-top: 0;
          font-size: 1.6rem;
          color: var(--color-primary);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--color-secondary);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 1.5rem;
          transition: background 0.2s ease;
        }

        .cta-button:hover {
          background: #ca392e;
        }
      `}</style>

      <div className="article-hero">
        <div className="article-hero-inner">
          <div style={{ marginBottom: '2rem' }}>
            <Link to="/tietopankki" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>
              <ArrowLeft size={18} /> Palaa tietopankkiin
            </Link>
          </div>
          <div className="article-category">{article.category}</div>
          <h1 className="article-title">{article.title}</h1>
        </div>
      </div>

      <div className="article-content">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="article-cta">
          <h3>Heräsikö kysyttävää?</h3>
          <p>Ota yhteyttä alueesi vetäjään, niin katsotaan yhdessä, miten voimme auttaa parhaiten juuri teidän tilanteessanne.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', position: 'relative', maxWidth: '300px', margin: '1.5rem auto 0' }}>
            <select 
              className="cta-button"
              style={{ 
                appearance: 'none', 
                paddingRight: '2.5rem',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '1rem',
                fontWeight: '600',
                width: '100%',
                margin: 0,
                textAlign: 'center'
              }}
              onChange={(e) => {
                if (e.target.value) navigate(e.target.value);
              }}
              defaultValue=""
            >
              <option value="" disabled>Valitse alueesi...</option>
              <option value="/keski-suomi">Keski-Suomi</option>
              <option value="/pohjois-savo">Pohjois-Savo</option>
              <option value="/oulu">Oulu</option>
              <option value="/etela-karjala">Etelä-Karjala</option>
              <option value="/uusimaa">Uusimaa</option>
            </select>
            <div style={{ position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'white', display: 'flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
