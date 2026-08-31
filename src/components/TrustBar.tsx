import { Calendar, Users, ShieldCheck, Euro } from 'lucide-react';
import './TrustBar.css';

const trustItems = [
  { icon: Calendar, text: 'Alalla vuodesta 2022' },
  { icon: Users, text: 'Yli 100 tyytyväistä asiakasta' },
  { icon: ShieldCheck, text: 'Soteri-rekisteröity palveluntuottaja' },
  { icon: Euro, text: 'Oikeuttaa kotitalousvähennykseen' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar" aria-label="Famulan luotettavuustekijät">
      <div className="container trust-bar-inner">
        {trustItems.map(({ icon: Icon, text }) => (
          <div className="trust-item" key={text}>
            <span className="trust-icon">
              <Icon size={22} />
            </span>
            <span className="trust-text">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
