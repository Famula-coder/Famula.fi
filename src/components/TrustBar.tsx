import { Calendar, Users, ShieldCheck, Euro } from 'lucide-react';
import './TrustBar.css';

const softFeatures = [
  'Aina tuttu hoitaja',
  'Kiireetön kohtaaminen',
  'Aito välittäminen',
];

const trustItems = [
  { icon: Calendar, text: 'Alalla vuodesta 2022' },
  { icon: Users, text: 'Yli 100 tyytyväistä asiakasta' },
  { icon: ShieldCheck, text: 'Soteriin rekisteröity palveluntuottaja (Lupa- ja valvontavirasto)' },
  { icon: Euro, text: 'Oikeuttaa kotitalousvähennykseen' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar" aria-label="Famulan luotettavuustekijät">
      <div className="container">
        <div className="trust-soft-features">
          {softFeatures.map((text) => (
            <div className="trust-soft-item" key={text}>
              <span className="trust-soft-dot" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="trust-bar-divider" />

        <div className="trust-bar-inner">
          {trustItems.map(({ icon: Icon, text }) => (
            <div className="trust-item" key={text}>
              <span className="trust-icon">
                <Icon size={22} />
              </span>
              <span className="trust-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
