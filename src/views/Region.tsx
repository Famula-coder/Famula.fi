"use client";
import Image from 'next/image';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { regions } from '../data/regions';

import { Phone, Mail, MapPin, MessageCircle, Heart, CheckCircle2, Play, X } from 'lucide-react';
// import ContactForm from '../components/ContactForm';


const Region = () => {
  const params = useParams();
  const regionId = Array.isArray(params?.regionId) ? params.regionId[0] : params?.regionId;
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const region = regions.find(r => r.id === regionId);

  if (!region) {
    if (typeof window !== 'undefined') { router.replace('/'); } return null;
  }

  const cleanPhone = region.phone.replace(/\s/g, '');
  const whatsappPhone = cleanPhone.startsWith('0') ? `358${cleanPhone.substring(1)}` : cleanPhone;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=Hei!%20Olisin%20kiinnostunut%20Famulan%20palveluista%20alueella%20${region.name}.`;

  // Generate LocalBusiness Schema for this specific region
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Famula Kotihoito ${region.name}`,
    "image": `${"https://famula.fi"}${region.image}`,
    "@id": `https://famula.fi/${region.id}`,
    "url": `https://famula.fi/${region.id}`,
    "telephone": region.phone,
    "email": region.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": region.name,
      "postalCode": region.postalCode,
      "addressCountry": "FI"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    }
  };

  return (
    <>
      
      
      
      
      
      <div className="bg-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-background-warm)', color: 'var(--color-primary)', fontWeight: '600', borderRadius: '50px', marginBottom: '1rem' }}>
                <MapPin size={16} style={{ display: 'inline', marginRight: '6px' }}/> 
                Palvelualueemme: {region.name}
              </div>
               <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                {region.descriptionTitle || `Lämminhenkistä kotihoitoa ${region.locativeName} – Turvallista arkea omassa kodissa`}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
                {region.descriptionText || `Palvelemme asiakkaitamme kattavasti koko ${region.genitiveName} alueella. Tarjoamme luotettavaa kotiapua ikääntyville ja tuomme mielenrauhaa myös kauempana asuville omaisille. Olemme aina tavoitettavissa ja viestimme sovitusti kuulumiset.`}
              </p>
              
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Aluevetäjäsi {region.locativeName}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Image 
                    src={region.image} 
                    alt={region.altText} 
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', background: 'var(--color-accent)' }} width={800} height={800} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>{region.managerName}</strong>
                    <span style={{ color: '#64748b', display: 'flex', flexDirection: 'column' }}>
                      {region.managerName === 'Leena Huusko' ? (
                        <>
                          <span>Palveluesimies, Famula Keski-Suomi</span>
                          <span style={{ fontSize: '0.9em' }}>Kehitysjohtaja, Famula Group Oy</span>
                        </>
                      ) : (
                        <span>Palveluesimies</span>
                      )}
                    </span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href={`tel:${region.phone.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
                    <Phone size={18} color="var(--color-secondary)" /> {region.phone}
                  </a>
                  <a href={`mailto:${region.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
                    <Mail size={18} color="var(--color-secondary)" /> {region.email}
                  </a>
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 400px' }}>
              <Image 
                src={region.image} 
                alt={region.altText} 
                style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} width={800} height={800} />
            </div>

          </div>
        </div>
      </div>
      
      {/* ── ARJEN APU VIDEO KORTTI ── */}
      <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
        <div 
          onClick={() => setActiveVideo('pICF_LhldPU')}
          style={{
            background: 'white',
            borderRadius: '24px',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease',
            maxWidth: '900px',
            margin: '0 auto'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image 
              src={"/images/syodaanyhdessa.webp"} 
              alt="Perhe ja hoitaja syömässä yhdessä saman pöydän ääressä" 
              style={{ objectFit: 'cover' }} width={800} height={800} />
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'var(--color-accent)',
              width: '80px', height: '80px',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              color: 'white'
            }}>
              <Play size={40} style={{ marginLeft: '6px' }} fill="white" />
            </div>
          </div>
          <div style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'white' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Katso miten voimme auttaa arjessa
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#475569', margin: 0 }}>
              1 minuutin esittely palveluistamme
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Miksi valita Famulan paikallinen hoitotiimi {region.locativeName}?</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-secondary)' }}>
            <h3>Luotettavaa kotiapua ja seuraa {region.locativeName}</h3>
            <p>
              Laadukas yksityinen vanhustenhoito ja kotipalvelu tarkoittaa meille ennen kaikkea kiireetöntä kohtaamista. Jokainen ikäihminen ansaitsee tulla aidosti kuulluksi. Autamme arjen askareissa ja lähdemme mielellämme turvalliseksi seuraksi vaikkapa kauppa- tai apteekkiasioille. Tavoitteemme on tuoda helpotusta ja iloa päiviisi juuri siellä, missä sitä eniten kaipaat.
            </p>
            <Link href="/#palvelut" style={{ display: 'inline-block', marginTop: '0.75rem', color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'none' }}>
              Tutustu palveluihimme →
            </Link>
          </div>

          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-accent)' }}>
            <h3>Mielenrauhaa myös läheisille</h3>
            <p>
              Omaisen huoli kaukana asuvasta läheisestä on meille tuttua. Siksi pidämme teidät aina ajan tasalla. Avoin ja säännöllinen viestintämme tuo turvaa koko perheelle, ja voitte luottaa siihen, että läheisenne on hyvissä käsissä.
            </p>
          </div>

          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-lavender)' }}>
            <h3>Aina sama, tuttu hoitaja</h3>
            <p>
              Panostamme paikallisen tiimimme ammattitaitoon ja pysyvyyteen. Famulassa luonasi käy aina sama, tuttu hoitaja. Näin luottamuksen rakentaminen on luontevaa, ja apu tuntuu todelliselta ystävyydeltä.
            </p>
          </div>
        </div>
      </div>

      {/* ── REKRYTOINTIOSIO ── */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-background-warm)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '4rem 3rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            borderTop: '6px solid var(--color-primary)'
          }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Tule tekemään merkityksellistä työtä {region.genitiveName} alueella
            </h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Etsimme jatkuvasti vahvistusta paikalliseen tiimiimme! 
              Työskentely Famulassa on erittäin joustavaa: voit olla opiskelija tai eläkeläinen, joka haluaa sitoutua auttamaan vain 1-2 ikäihmistä säännöllisesti tuntipalkalla. 
              Myös kokeneille ammattilaisille on tarjolla osa- ja kokoaikatyötä.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              marginBottom: '2.5rem',
              textAlign: 'left'
            }}>
              <div style={{ flex: '1 1 300px', background: 'var(--color-background-warm)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Heart size={20} color="var(--color-primary)" /> Joustava työaika
                </h4>
                <p style={{ color: 'var(--color-primary)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6', opacity: 0.9 }}>
                  Päätä itse, kuinka paljon teet. Voit auttaa vain muutamaa ikäihmistä viikossa tai tehdä täysiä tunteja.
                </p>
              </div>
              <div style={{ flex: '1 1 300px', background: 'var(--color-background-warm)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={20} color="var(--color-primary)" /> Asenne ratkaisee
                </h4>
                <p style={{ color: 'var(--color-primary)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6', opacity: 0.9 }}>
                  Sosiaali- tai terveysalan tutkinto on eduksi, mutta aito halu auttaa ja kohdata ihminen on tärkeintä.
                </p>
              </div>
            </div>
            
            <p style={{ fontWeight: '600', color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Kiinnostuitko? Kysy avoimista paikoista suoraan aluevetäjältä!
            </p>
            <p style={{ color: '#475569', marginBottom: '0' }}>
              Ota yhteyttä yllä olevilla {region.managerName.split(' ')[0]}n yhteystiedoilla (soita, laita viestiä tai sähköpostia) – odotamme yhteydenottoasi.
            </p>
          </div>
        </div>
      </section>

      {/* <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-background-warm)' }}>
        <ContactForm />
      </section> */}

      <div className="whatsapp-container">
        <div className="whatsapp-tooltip">
          Jätä soittopyyntö!
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.3s ease'
          }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Kysy WhatsAppissa"
        >
          <MessageCircle size={28} />
        </a>
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
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            aria-label="Sulje video"
          >
            <X size={32} />
          </button>
          <div 
            style={{  maxWidth: '400px', aspectRatio: '9/16' }}
            onClick={e => e.stopPropagation()}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ borderRadius: '12px' }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Region;
