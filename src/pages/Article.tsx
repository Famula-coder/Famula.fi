import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { articles } from '../data/articles';
import { ArrowLeft, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
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
            <Link to="/tietopankki/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>
              <ArrowLeft size={18} /> Palaa tietopankkiin
            </Link>
          </div>
          <div className="article-category">{article.category}</div>
          <h1 className="article-title">{article.title}</h1>
        </div>
      </div>

      <div className="article-content">
        {article.videoId && (
          <div 
            onClick={() => setActiveVideo(article.videoId!)}
            style={{
              background: 'var(--color-background-warm)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              cursor: 'pointer',
              border: '2px dashed var(--color-secondary)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              background: 'var(--color-secondary)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              <Play size={28} style={{ marginLeft: '4px' }} fill="white" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.5rem', color: 'var(--color-primary)', fontSize: '1.4rem' }}>
                Katso video aiheesta
              </h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '1rem' }}>
                1 minuutin pikaohje videomuodossa.
              </p>
            </div>
          </div>
        )}

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

      {/* Video Modal (Lightbox) */}
      {activeVideo && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <button 
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '10px'
            }}
          >
            <X size={32} />
          </button>
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '400px', // Shorts are vertical, keep it narrow
              aspectRatio: '9/16',
              background: 'black',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
