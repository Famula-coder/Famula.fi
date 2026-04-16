import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { Heart, ExternalLink, ArrowRight } from 'lucide-react';

/* ── Tiimiläiset ── */
const team = [
  {
    name: 'Valma Linnanmäki',
    title: 'Perustaja & Toimitusjohtaja',
    img: `${import.meta.env.BASE_URL}valma.png`,
    quote: 'Perustin Famulan, koska jokainen ihminen ansaitsee jonkun joka välittää.',
    tall: true,
  },
  {
    name: 'Alma',
    img: `${import.meta.env.BASE_URL}alma.avif`,
    region: '/oulu',
    quote: 'Parasta työssäni on se, kun asiakas odottaa käyntiäni hymyssä suin ja iloisin mielin.',
  },
  {
    name: 'Riina',
    img: `${import.meta.env.BASE_URL}riina.avif`,
    region: '/uusimaa',
    quote: 'Nautin arjen pienistä hetkistä – yhteiset juttutuokiot kahvikupin äärellä ovat kultakin kalliimpia.',
  },
  {
    name: 'Julia',
    img: `${import.meta.env.BASE_URL}julia.avif`,
    region: '/pohjois-savo',
    quote: 'Teen tätä sydämellä – jokainen kohtaaminen on ainutlaatuinen.',
  },
  {
    name: 'Paula',
    img: `${import.meta.env.BASE_URL}paula.avif`,
    region: '/etela-karjala',
    quote: 'Aito läsnäolo on paras lääke, ja sitä annan joka päivä.',
  },
  {
    name: 'Leena',
    img: `${import.meta.env.BASE_URL}leena.png`,
    region: '/keski-suomi',
    quote: 'Omien läheisteni kautta ymmärrän, kuinka valtavan tärkeää on voida luottaa hoitajaan täysin.',
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Famula - Saat kotiisi ystävän, joka pitää sinusta ja kodistasi huolta</title>
        <meta name="description" content="Etsitkö luotettavaa kotisairaanhoitoa tai kotiapua? Tarjoamme lämminhenkistä apua ikääntyville omassa kodissa. Pidämme myös kaukana asuvat omaiset aina ajan tasalla." />
      </Helmet>

      <style>{`
        /* ── Video-osio ── */
        .video-section {
          padding: 5rem 0;
          background: var(--color-white);
        }
        .video-section-inner {
          display: flex;
          align-items: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .video-text { flex: 1 1 320px; }
        .video-text .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.1rem;
          background: var(--color-light-gray);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-secondary);
          margin-bottom: 1.25rem;
        }
        .video-text h2 {
          font-size: 2.2rem;
          color: var(--color-primary);
          margin-bottom: 1.25rem;
          line-height: 1.25;
        }
        .video-text p {
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.7;
        }
        .video-embed-wrapper {
          flex: 1.4 1 420px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          aspect-ratio: 16/9;
          background: #000;
        }
        .video-embed-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* ── Välittäminen-osio ── */
        .caring-section {
          padding: 6rem 0;
          background: var(--color-light-gray);
        }
        .caring-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 4rem;
        }
        .caring-header .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.1rem;
          background: rgba(155,194,166,0.15);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-secondary);
          margin-bottom: 1.25rem;
        }
        .caring-header h2 {
          font-size: 2.4rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .caring-header p {
          color: #475569;
          font-size: 1.1rem;
        }

        /* Founder hero card */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          background: white;
          border-radius: 28px;
          padding: 3rem;
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .founder-img-wrap {
          position: relative;
          flex: 0 0 auto;
        }
        .founder-img-bg {
          position: absolute;
          inset: -12px;
          background: linear-gradient(135deg, rgba(155,194,166,0.4) 0%, rgba(230,190,186,0.3) 100%);
          border-radius: 50%;
          z-index: 0;
        }
        .founder-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          position: relative;
          z-index: 1;
          border: 4px solid white;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .founder-text { flex: 1 1 300px; }
        .founder-name {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.25rem;
        }
        .founder-role {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .founder-quote {
          font-size: 1.2rem;
          font-style: italic;
          color: #334155;
          line-height: 1.7;
          border-left: 4px solid var(--color-accent);
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .founder-story-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          color: var(--color-secondary);
          text-decoration: none;
          font-size: 1rem;
          transition: gap 0.2s ease;
        }
        .founder-story-link:hover { gap: 0.7rem; }

        /* Tiimikortit */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }
        .team-card-img-wrap {
          position: relative;
          padding-top: 110%;
          background: linear-gradient(135deg, rgba(155,194,166,0.25) 0%, rgba(230,190,186,0.2) 100%);
          overflow: hidden;
        }
        .team-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .team-card-body {
          padding: 1.25rem;
        }
        .team-card-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-primary);
          margin-bottom: 0.2rem;
        }
        .team-card-title {
          font-size: 0.85rem;
          color: var(--color-secondary);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .team-card-quote {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.6;
          font-style: italic;
          margin: 0;
        }

        /* ── Hinnasto-osio ── */
        .pricing-section {
          padding: 6rem 0;
          background: var(--color-primary);
          color: white;
        }
        .pricing-inner {
          display: flex;
          align-items: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .pricing-text { flex: 1 1 340px; }
        .pricing-text .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 0.5rem 1.1rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          margin-bottom: 1.25rem;
        }
        .pricing-text h2 {
          font-size: 2.4rem;
          color: white;
          margin-bottom: 1rem;
        }
        .pricing-text p {
          color: rgba(255,255,255,0.75);
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .pricing-card {
          flex: 0 0 auto;
          background: white;
          border-radius: 24px;
          padding: 2.5rem 3rem;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          min-width: 280px;
        }
        .pricing-price {
          font-size: 3.8rem;
          font-weight: 800;
          color: var(--color-accent);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .pricing-unit {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 0.5rem;
        }
        .pricing-note {
          display: inline-block;
          background: rgba(155,194,166,0.15);
          color: var(--color-secondary);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.75rem;
        }
        .pricing-divider {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin-bottom: 1.5rem;
        }
        .pricing-deduction-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          background: rgba(155,194,166,0.12);
          border-radius: 50px;
          padding: 0.6rem 1.2rem;
          transition: background 0.2s ease;
        }
        .pricing-deduction-link:hover {
          background: rgba(155,194,166,0.25);
        }

        /* ── Palvelukortit-osio ── */
        .services-strip {
          background: rgba(155,194,166,0.12);
          padding: 5rem 0;
        }
      `}</style>

      {/* ── HERO ── */}
      <Hero />

      {/* ── VIDEO-OSIO ── */}
      <section className="video-section">
        <div className="container video-section-inner">
          <div className="video-text">
            <div className="eyebrow">
              <Heart size={14} /> Tutustumiseen
            </div>
            <h2>Katso, miten Famula toimii arjessa</h2>
            <p>
              Famulassa aito välittäminen näkyy jokaisessa kohtaamisessa.
              Tule tutustumaan: ensimmäinen käynti on aina maksuton, eikä se sido sinua vielä mihinkään.
              Suunnittelemme palvelut vasta, kun olemme yhdessä todenneet ne sinulle sopiviksi.
            </p>
          </div>
          <div className="video-embed-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/pICF_LhldPU?rel=0&modestbranding=1"
              title="Famula – Kiireetöntä hoivaa kotiin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── VÄLITTÄMINEN – PERUSTAJA + TIIMI ── */}
      <section className="caring-section">
        <div className="container">
          <div className="caring-header">
            <div className="eyebrow">
              <Heart size={14} /> Ihmiset Famulan takana
            </div>
            <h2>Välittäminen on meille enemmän kuin työtä</h2>
            <p>
              Jokainen Famulan hoitaja on valittu tehtäväänsä suurella sydämellä.
              Tunnemme asiakkaamme ja heidän tarpeensa, sillä tutustumme aina rauhassa jo ennen palvelun aloitusta.
            </p>
          </div>

          {/* Perustaja-kortti */}
          <div className="founder-card">
            <div className="founder-img-wrap">
              <div className="founder-img-bg" />
              <img
                className="founder-img"
                src={`${import.meta.env.BASE_URL}valma.png`}
                alt="Valma Linnanmäki, Famulan perustaja"
              />
            </div>
            <div className="founder-text">
              <div className="founder-name">Valma Linnanmäki</div>
              <div className="founder-role">Perustaja &amp; Toimitusjohtaja</div>
              <blockquote className="founder-quote">
                "Perustin Famulan, koska tiesin mitä tarkoittaa kun läheistä ei ole kukaan auttamassa.
                Me Famulalla emme vain suorita tehtäviä — tuomme mukanamme oikean ihmisen, joka välittää aidosti."
              </blockquote>
              <Link to="/tarinamme" className="founder-story-link">
                Lue koko tarina <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Tiimikortit */}
          <div className="team-grid">
            {team.slice(1).map((member) => (
              <div key={member.name} className="team-card">
                <a href={member.region} className="team-card-img-wrap" style={{ display: 'block', textDecoration: 'none' }}>
                  <img
                    className="team-card-img"
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                  />
                </a>
                <div className="team-card-body">
                  <div className="team-card-name">{member.name}</div>
                  <p className="team-card-quote">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PALVELUKORTIT ── */}
      <section className="services-strip">
        <div className="container text-center">
          <h2 style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-primary)' }}>
            Kaikessa autetaan – joustavaa ja kiireetöntä hoivaa
          </h2>
          <p style={{ maxWidth: '700px', margin: '2rem auto', fontSize: '1.1rem', color: '#475569' }}>
            Me Famulalla emme tule vain suorittamaan tehtäviä. Tuomme mukanamme kiireetöntä läsnäoloa,
            aitoa välittämistä ja turvaa arkeen — aivan kuten todellinen ystävä tekisi.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', flex: '1', minWidth: '300px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--color-lavender)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Olen etsimässä hoivaa itselleni</h3>
              <p style={{ color: '#475569' }}>Luotettavaa tukea arkeen ja seuraa kotiin.</p>
              <Link to="/palvelut" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Lisätietoa palveluista</Link>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', flex: '1', minWidth: '300px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--color-secondary)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Etsin luotettavaa apua läheiselleni</h3>
              <p style={{ color: '#475569' }}>Turvaa ja mielenrauhaa kaukana asuvalle omaiselle.</p>
              <a href="#yhteys" className="btn" style={{ marginTop: '1rem', display: 'inline-block', border: '2px solid var(--color-secondary)', color: 'var(--color-secondary)', background: 'transparent' }}>Ota heti yhteyttä</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HINNASTO ── */}
      <section id="hinnat" className="pricing-section">
        <div className="container pricing-inner">
          <div className="pricing-text">
            <div className="eyebrow">💰 Selkeä hinnoittelu</div>
            <h2>Reilu hinta,<br />ei piilomaksuja</h2>
            <p>
              Tarjoamme apua ja tukea ihan jokaiselle! Palvelemme niin yksityisasiakkaita
              kuin sosiaalihuollon asiakkaita. Hinnoittelumme on aina kiinteä ja täysin läpinäkyvä.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Muistathan myös, että voit saada palveluistamme kotitalousvähennyksen –
              hyödynnä etu täysimääräisesti!
            </p>
          </div>
          <div className="pricing-card">
            <div className="pricing-price">39,95€</div>
            <div className="pricing-unit">tunnilta (alv 0%)</div>
            <div className="pricing-note">Sosiaalihuollon asiakkaille</div>
            <hr className="pricing-divider" />
            <a
              href="https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/"
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-deduction-link"
            >
              <ExternalLink size={15} />
              Muista kotitalousvähennys →
            </a>
          </div>
        </div>
      </section>

      {/* ── YHTEYDENOTTOLOMAKE ── */}
      <section id="yhteys" style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-light-gray)' }}>
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
