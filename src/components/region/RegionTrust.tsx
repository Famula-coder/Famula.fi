import Link from 'next/link';
import { ShieldCheck, FileText, Umbrella, Calendar, Users, Heart, Euro, type LucideIcon } from 'lucide-react';
import type { RegionData } from '../../data/regions';

interface TrustFact {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
}

const RegionTrust = ({ region }: { region: RegionData }) => {
  const facts: TrustFact[] = [
    { icon: ShieldCheck, title: 'Rekisteröity palveluntuottaja', text: 'Famula on rekisteröity Lupa- ja valvontaviraston Soteri-rekisteriin.' },
    ...(region.hasOmavalvonta
      ? [{ icon: FileText, title: 'Julkinen omavalvontasuunnitelma', text: 'Kerromme avoimesti, miten varmistamme palvelun laadun ja turvallisuuden.', href: `/${region.id}/omavalvonta/` }]
      : []),
    { icon: Umbrella, title: 'Vakuutettu toiminta', text: 'Jokaisella Famulan alueyhtiöllä on voimassa oleva vastuuvakuutus.' },
    { icon: Calendar, title: 'Alalla vuodesta 2022', text: 'Kotimainen yritys, joka on keskittynyt ikäihmisten arjen tukemiseen.' },
    { icon: Users, title: 'Yli 100 asiakasta', text: 'Asiakkaamme ja heidän omaisensa luottavat meihin eri puolilla Suomea.' },
    { icon: Heart, title: 'Aina sama, tuttu hoitaja', text: 'Tutustumme rauhassa ennen palvelun aloitusta, eikä hoitaja vaihdu käynnistä toiseen.' },
    { icon: Euro, title: 'Kotitalousvähennys', text: 'Palvelumme oikeuttavat kotitalousvähennykseen.' },
  ];

  return (
    <section style={{ background: 'white', padding: '4rem 0' }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '2.5rem' }}>
          Valvottu ja rekisteröity palveluntuottaja
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.5rem' }}>
          {facts.map(({ icon: Icon, title, text, href }) => (
            <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Icon size={28} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{title}</h3>
                <p style={{ color: '#475569', fontSize: '1rem', margin: 0 }}>{text}</p>
                {href && (
                  <Link href={href} style={{ display: 'inline-block', padding: '0.5rem 0', color: 'var(--color-primary)', fontWeight: '600' }}>
                    Lue omavalvontasuunnitelma
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionTrust;
