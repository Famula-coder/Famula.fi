import { Helmet } from 'react-helmet-async';
import { Heart, Clock, Star, MapPin, Smile } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { regions } from '../data/regions';
import { useEffect } from 'react';

const Recruit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Töihin meille | Famula</title>
        <meta name="description" content="Tule tekemään työtä, jolla on oikeasti merkitystä. Etsimme sote-ammattilaisia, yrittäjähenkisiä aluevetäjiä ja paikallisia auttajia ympäri Suomen." />
      </Helmet>

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1.5rem 5rem', 
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)',
            borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
            marginBottom: '1.5rem',
          }}>
            <Heart size={16} /> Merkityksellistä työtä
          </div>
          <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
            Tule tekemään työtä, jolla on oikeasti merkitystä.
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.6', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 2rem' }}>
            Etsimme joukkoomme sote-alan ammattilaisia, yrittäjähenkisiä aluevetäjiä sekä paikallisia auttajia, jotka jakavat Famulan arvot: aito välittäminen, kiireettömyys ja ihmisen kohtaaminen.
          </p>
        </div>
      </section>

      {/* ── KUVABANNERI ── */}
      <section style={{ padding: '0 1.5rem', marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <img 
            src="/images/keskustelu.webp" 
            alt="Työntekijä keskustelee tyytyväisenä asiakkaan kanssa olohuoneessa"
            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          />
        </div>
      </section>

      {/* Paikallinen tuntityö */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-background-warm)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
            Haluatko auttaa 1-2 ikäihmistä joustavasti?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
            Etsitkö merkityksellistä lisäansiota opintojen tai eläkepäivien oheen? Voit toimia meillä myös joustavasti tuntityöntekijänä ja sitoutua auttamaan muutamaa oman alueesi ikäihmistä. Ota yhteyttä suoraan oman paikkakuntasi vetäjään!
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => navigate(`/${region.id}`)}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  padding: '1rem 1.5rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-secondary)';
                  e.currentTarget.style.color = 'var(--color-secondary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MapPin size={16} /> {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Aluevetäjät / Yrittäjät */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: 'white' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--color-lavender)', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Star size={32} color="var(--color-primary)" />
          </div>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
            Tule vetämään uutta aluetta – Polku yrittäjyyteen ja omistajuuteen
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Haluatko viedä urasi seuraavalle tasolle ja rakentaa jotain omaa, mutta vahvan konseptin ja tiimin tuella? Uusia alueita perustetaan aika ajoin joka puolelle Suomea, ja esimerkiksi Uudellemaalle ja suurempiin kasvukeskuksiin voi mahtua useampia aluevetäjiä.
          </p>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
            Etsimme rohkeita ja sydämellisiä sote-ammattilaisia avaamaan Famulalle uusia alueita. Tarjoamme sinulle ainutlaatuisen mahdollisuuden päästä kiinni yrittäjyyteen ja rakentaa selkeä polku jopa omistajuuteen asti. Jos sinulla on paloa johtaa omaa tiimiäsi Famulan arvojen mukaisesti, haluamme ehdottomasti kuulla sinusta!
          </p>
          
          <div style={{ 
            background: 'var(--color-background-warm)', 
            padding: '2.5rem', 
            borderRadius: '20px', 
            display: 'inline-block',
            textAlign: 'left',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <h4 style={{ margin: '0 0 1rem', color: 'var(--color-primary)' }}>Kiinnostuitko aluevetäjyydestä? Ota yhteyttä!</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
                <span style={{ fontWeight: '600' }}>Valma Linnanmäki</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
                <a href="mailto:valma.linnanmaki@famula.fi" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>valma.linnanmaki@famula.fi</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
                <a href="tel:+358407421115" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>040 742 1115</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sote-ammattilaiset */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-background-warm)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                Oletko kyllästynyt raskaaseen kolmivuorotyöhön ja minuuttiaikatauluihin?
              </h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Me Famulassa uskomme, että hoitotyön ytimessä on ihmisen aito kohtaaminen. Siksi tarjoamme vaihtoehdon kiireelle ja liukuhihnalle. Meillä teet työtä, jossa saat viettää aikaa asiakkaan kanssa, vaikuttaa omiin työaikoihisi ja nähdä työsi jäljen.
              </p>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Etsimme jatkuvasti täysammattilaisia (osa- ja kokoaikatyöhön) vahvistamaan tiimejämme. Edellytämme lähi- tai sairaanhoitajan (tai vastaavaa) ammattipätevyyttä – mutta kaikkein tärkeintä meille on, että jaat Famulan yhteiset arvot.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--color-secondary)' }}><Clock size={24} /></div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', color: 'var(--color-primary)' }}>Työajat omilla ehdoilla</h4>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>Ei enää pakkopullaa tai öitä, ellet itse halua.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--color-accent)' }}><Smile size={24} /></div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', color: 'var(--color-primary)' }}>Aikaa kohdata</h4>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>Minuuttiaikataulujen sijaan keskitytään ihmiseen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 4px 30px rgba(0,0,0,0.05)', borderTop: '6px solid var(--color-secondary)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Etsitkö uutta suuntaa uralle?</h3>
              <p style={{ color: '#475569', marginBottom: '2rem' }}>Ota suoraan yhteyttä oman alueesi vetäjään ja kysy vapaita paikkoja.</p>
              
              <div style={{ position: 'relative', width: '100%' }}>
                <select
                  onChange={(e) => {
                    if (e.target.value) {
                      navigate(`/${e.target.value}`);
                    }
                  }}
                  style={{
                    appearance: 'none',
                    width: '100%',
                    background: 'var(--color-secondary)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(127,154,131,0.2)',
                    textAlign: 'center',
                  }}
                >
                  <option value="">Valitse oma alueesi...</option>
                  {regions.map((r) => (
                    <option key={r.id} value={r.id} style={{ color: 'black' }}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruit;
