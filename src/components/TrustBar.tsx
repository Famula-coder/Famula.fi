import { Calendar, Users, ShieldCheck, Euro, Heart, Clock, Sparkles } from 'lucide-react';
import './TrustBar.css';

const trustChips = [
  { icon: Heart, text: 'Aina tuttu hoitaja' },
  { icon: Clock, text: 'Kiireetön kohtaaminen' },
  { icon: Sparkles, text: 'Aito välittäminen' },
  { icon: Calendar, text: 'Vuodesta 2022' },
  { icon: Users, text: '100+ asiakasta' },
  { icon: ShieldCheck, text: 'Rekisteröity palveluntuottaja' },
  { icon: Euro, text: 'Kotitalousvähennys' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar" aria-label="Famulan luotettavuustekijät">
      <div className="container trust-bar-inner">
        {trustChips.map(({ icon: Icon, text }) => (
          <div className="trust-chip" key={text}>
            <Icon size={16} className="trust-chip-icon" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
