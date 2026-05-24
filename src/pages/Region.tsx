import { useParams, Navigate, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
// import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';

const Region = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const region = regions.find(r => r.id === regionId);
  const cookieConsent = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') === 'true' : false;

  if (!region) {
    return <Navigate to="/" replace />;
  }

  const cleanPhone = region.phone.replace(/\s/g, '');
  const whatsappPhone = cleanPhone.startsWith('0') ? `358${cleanPhone.substring(1)}` : cleanPhone;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=Hei!%20Olisin%20kiinnostunut%20Famulan%20palveluista%20alueella%20${region.name}.`;

  // Generate LocalBusiness Schema for this specific region
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Famula Kotihoito ${region.name}`,
    "image": `${window.location.origin}${region.image}`,
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
      <SEO 
        title={`Luotettava kotihoito ${region.locativeName} | Famula Oy`}
        description={`Etsitkö luotettavaa kotisairaanhoitoa ${region.locativeName}? Tarjoamme lämminhenkistä apua ikääntyville omassa kodissa. Ota yhteyttä vetäjäämme: ${region.managerName}.`}
        schema={localBusinessSchema}
      />
      {cookieConsent && regionId === 'keski-suomi' && (
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17890084641"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17890084641');
            `}
          </script>
        </Helmet>
      )}
      {cookieConsent && regionId === 'oulu' && (
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17590986359"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17590986359');
            `}
          </script>
        </Helmet>
      )}
      {cookieConsent && regionId === 'etela-karjala' && (
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17600441591"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17600441591');
            `}
          </script>
        </Helmet>
      )}
      
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
                  <img 
                    src={region.image} 
                    alt={region.altText} 
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', background: 'var(--color-accent)' }} 
                  />
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
              <img 
                src={region.image} 
                alt={region.altText} 
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </div>

          </div>
        </div>
      </div>
      
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Miksi valita Famulan paikallinen hoitotiimi {region.locativeName}?</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-secondary)' }}>
            <h3>Luotettavaa kotiapua ja seuraa {region.locativeName}</h3>
            <p>
              Meille hoitotyö on ennen kaikkea aitoa välittämistä ja kiireetöntä läsnäoloa. Autamme arjen askareissa ja lähdemme mielellämme turvalliseksi seuraksi vaikkapa kauppa- tai apteekkiasioille. Tavoitteemme on tuoda helpotusta ja iloa päiviisi juuri siellä, missä sitä eniten kaipaat.
            </p>
            <Link to="/#palvelut" style={{ display: 'inline-block', marginTop: '0.75rem', color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'none' }}>
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
                  <Heart size={20} color="var(--color-brown)" /> Joustava työaika
                </h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                  Päätä itse, kuinka paljon teet. Voit auttaa vain muutamaa ikäihmistä viikossa tai tehdä täysiä tunteja.
                </p>
              </div>
              <div style={{ flex: '1 1 300px', background: 'var(--color-background-warm)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={20} color="var(--color-secondary)" /> Asenne ratkaisee
                </h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
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

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          backgroundColor: '#25D366',
          color: 'white',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Kysy WhatsAppissa"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
};

export default Region;
