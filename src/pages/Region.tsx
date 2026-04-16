import { useParams, Navigate, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Region = () => {
  const { regionId } = useParams();
  const region = regions.find(r => r.id === regionId);

  if (!region) {
    return <Navigate to="/" replace />;
  }

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
        title={`Luotettava kotihoito ${region.name} | Famula Oy`}
        description={`Etsitkö luotettavaa kotisairaanhoitoa alueella ${region.name}? Tarjoamme lämminhenkistä apua ikääntyville omassa kodissa. Ota yhteyttä vetäjäämme: ${region.managerName}.`}
        schema={localBusinessSchema}
      />
      
      <div className="bg-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-background-warm)', color: 'var(--color-primary)', fontWeight: '600', borderRadius: '50px', marginBottom: '1rem' }}>
                <MapPin size={16} style={{ display: 'inline', marginRight: '6px' }}/> 
                Palvelemme alueella: {region.name}
              </div>
               <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                {region.descriptionTitle || `Lämminhenkinen kotihoito ${region.name} – Turvallista arkea omassa kodissa`}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
                {region.descriptionText || `Palvelemme asiakkaitamme koko ${region.name} alueella. Tarjoamme luotettavaa kotiapua ikääntyville ja tuomme mielenrauhaa myös kauempana asuville omaisille. Olemme aina tavoitettavissa ja viestimme sovitusti kuulumiset.`}
              </p>
              
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Aluevetäjäsi {region.name} alueella</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img 
                    src={region.image} 
                    alt={region.altText} 
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', background: 'var(--color-accent)' }} 
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>{region.managerName}</strong>
                    <span style={{ color: '#64748b' }}>Palveluesimies</span>
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
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Miksi valita paikallinen hoitotiimimme {region.name} alueella?</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-secondary)' }}>
            <h3>Seuranpitoa ja asiointiapua – Tukea arjen kaikkiin hetkiin</h3>
            <p>
              Meille hoitotyö on ennen kaikkea aitoa välittämistä ja kiireetöntä läsnäoloa pelkän kellotetun suorittamisen sijaan.
              Autamme arjen askareissa ja lähdemme mielellämme turvalliseksi seuraksi vaikkapa kauppa- tai apteekkiasioille.
            </p>
            <Link to="/palvelut" style={{ display: 'inline-block', marginTop: '0.75rem', color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'none' }}>
              Tutustu palveluihimme →
            </Link>
          </div>

          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-accent)' }}>
            <h3>Aktiivinen yhteydenpito omaisiin</h3>
            <p>
              Pidämme läheiset aina ajan tasalla. Avoin, säännöllinen ja läpinäkyvä viestintämme tuo turvaa
              ja vähentää omaisten huolta välimatkasta huolimatta. Meille on tärkeää, että voitte luottaa palveluumme sataprosenttisesti.
            </p>
          </div>

          <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', borderTop: '4px solid var(--color-lavender)' }}>
            <h3>Sama hoitaja</h3>
            <p>
              Panostamme henkilökuntamme hyvinvointiin ja ammattitaidon ylläpitämiseen.
              Famulassa sinua palvelee sama, tuttu hoitaja. Näin luottamuksen rakentaminen on helppoa
              ja avun vastaanottaminen tuntuu luontevalta ja turvalliselta.
            </p>
          </div>
        </div>
      </div>

      <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-background-warm)' }}>
        <ContactForm />
      </section>
    </>
  );
};

export default Region;
