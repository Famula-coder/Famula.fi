import { SEO } from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { Heart } from 'lucide-react';

const Story = () => {
  return (
    <>
      <SEO
        title="Tarinamme | Famula Oy"
        description="Lue Famulan perustajan Valma Linnanmäen tarina ja kuinka Famula sai alkunsa halusta auttaa ihmisiä aidosti."
      />

      <style>{`
        .valma-wrapper { opacity: 1; }

        .valma-img {
          display: block;
          width: 100%;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.13));
        }

        .valma-badge {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 50px;
          padding: 0.7rem 1.6rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.7);
          white-space: nowrap;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-primary);
        }
      `}</style>

      <div className="bg-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>

            {/* ── Teksti ── */}
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'var(--color-background-warm)', color: 'var(--color-primary)', fontWeight: '600', borderRadius: '50px', marginBottom: '1.5rem' }}>
                <Heart size={16} color="var(--color-secondary)" />
                Mistä kaikki alkoi
              </div>
              <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                Tarinamme – Aidon välittämisen asialla
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.15rem', color: '#334155', lineHeight: '1.7' }}>
                <p>Famula Oy tarjoaa kotipalveluita ikääntyneille ja vammaisille.</p>

                <p>Yrityksen tarina sai alkunsa, kun Valman opiskeluhaaveet saivat takaiskun kroonisen migreenin takia.</p>

                <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-primary)', paddingLeft: '1.5rem', borderLeft: '4px solid var(--color-secondary)', margin: '1rem 0' }}>
                  "Olen koko ikäni tiennyt, että haluan auttaa ihmisiä työkseni. Tarkoitukseni olikin hakea lääkikseen lukiosta päästyäni. Kaikki ei kuitenkaan mennyt kuten suunnittelin. Aloin saada päivittäin rajuja migreenikohtauksia, joiden vuoksi opiskelut oli pakko laittaa tauolle."
                </blockquote>

                <p>Migreenin vietyä opiskelumahdollisuudet joutui Valma pohtimaan, mitä voisi elämässään tehdä.</p>

                <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-primary)', paddingLeft: '1.5rem', borderLeft: '4px solid var(--color-accent)', margin: '1rem 0' }}>
                  "Minulla on ihana pikkusisko, nimeltään Aili. Aililla on Downin oireyhtymä. Toimin hänen omaishoitajanaan kolmen vuoden ajan. Ymmärsin, että vaikken voisikaan opiskella, voin silti auttaa ihmisiä."
                </blockquote>

                <p>Tästä lähtikin idea Famulan perustamiselle. Yrityksen alkutaival oli kivinen. Valma haki yritykselle starttirahaa, mutta hakemus evättiin. Hakemuksen hylkäystä perusteltiin sillä, ettei Valman kykyihin selviytyä nuorena yrittäjänä uskottu. Sen sijaan Valmalle ehdotettiin, että hän voisi saada työttömyyskorvausta.</p>

                <p>Takaiskusta ei lannistuttu. Yhdessä aviomiehensä Pauluksen ja Heikki-isän kanssa lähdettiin rakentamaan yhteistä unelmaa.</p>

                <blockquote style={{ fontSize: '1.3rem', fontWeight: '500', color: 'var(--color-primary)', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
                  "Suomessa on paljon ikäihmisiä, jotka kaipaisivat arkeensa auttajaa. Tätä tarvetta varten perustettiin Famula Oy. Me Famulalla halutaan tarjota kotiavun lisäksi ystävä, joka välittää aidosti."<br />
                  <span style={{ display: 'block', fontSize: '1rem', marginTop: '1rem', color: '#64748b' }}>– Valma Linnanmäki, Perustaja</span>
                </blockquote>
              </div>
            </div>

            {/* ── VAU-EFEKTI: Valman kuva ── */}
            <div
              className="valma-wrapper"
              style={{ flex: '1 1 400px', position: 'relative', minHeight: '580px' }}
            >
              {/* Kelluvat taustapallot */}
              <div className="valma-orb-1" style={{
                position: 'absolute', top: '-50px', right: '-40px',
                width: '240px', height: '240px', borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, rgba(155,194,166,0.55) 0%, transparent 70%)',
                zIndex: 0, filter: 'blur(4px)', pointerEvents: 'none'
              }} />
              <div className="valma-orb-2" style={{
                position: 'absolute', bottom: '30px', left: '-50px',
                width: '180px', height: '180px', borderRadius: '50%',
                background: 'radial-gradient(circle at 60% 60%, rgba(255,200,140,0.4) 0%, transparent 70%)',
                zIndex: 0, filter: 'blur(3px)', pointerEvents: 'none'
              }} />

              {/* Taustakoriste-levy */}
              <div style={{
                position: 'absolute', width: '100%', height: '90%', bottom: 0,
                background: 'linear-gradient(135deg, var(--color-background-warm) 0%, rgba(155,194,166,0.6) 100%)',
                borderRadius: '30px', transform: 'rotate(2deg)', zIndex: 0
              }} />

              {/* Kuvacontainer */}
              <div style={{ position: 'relative', zIndex: 2, overflow: 'hidden', borderRadius: '24px' }}>

                <img
                  className="valma-img"
                  src={`${import.meta.env.BASE_URL}valmajamummo.jpeg`}
                  alt="Valma Linnanmäki muistelee alkutaivaltaan"
                  style={{
                    filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.13))',
                  }}
                />
              </div>

              {/* Nimilaatikko */}
              <div className="valma-badge">
                <Heart size={15} color="var(--color-secondary)" fill="var(--color-secondary)" />
                Valma Linnanmäki · Perustaja
              </div>
            </div>

          </div>
        </div>
      </div>

      <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-white)' }}>
        <ContactForm />
      </section>
    </>
  );
};

export default Story;
