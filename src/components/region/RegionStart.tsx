import Link from 'next/link';
import { Phone } from 'lucide-react';
import type { RegionData } from '../../data/regions';
import CallCtaButton from '../CallCtaButton';

const steps = [
  'Soita aluevetäjälle ja kerro tilanteestasi.',
  'Sovimme ilmaisen tutustumiskäynnin kotiisi.',
  'Tutustut omaan hoitajaasi, ja sovimme käyntien ajat.',
];

const RegionStart = ({ region }: { region: RegionData }) => (
  <section className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
    <h2 className="text-center" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '2rem' }}>
      Näin pääset alkuun
    </h2>
    <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
      {steps.map((step, index) => (
        <li key={step} style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'white', borderRadius: '12px', padding: '1rem 1.25rem' }}>
          <span aria-hidden="true" style={{ flexShrink: 0, width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
    <div className="text-center">
      <CallCtaButton
        phone={region.phone}
        label={`Soita ${region.managerName.split(' ')[0]}lle: ${region.phone}`}
        icon={<Phone size={20} />}
        className="btn btn-primary btn-with-icon"
      />
      <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '2.5rem', marginBottom: 0 }}>
        Etsimme myös lisää välittäviä tekijöitä tiimiimme {region.locativeName}.{' '}
        <Link href="/toihin-meille/" style={{ display: 'inline-block', padding: '0.6rem 0', color: 'var(--color-primary)', fontWeight: '600' }}>
          Katso, millaista meillä on olla töissä
        </Link>
      </p>
    </div>
  </section>
);

export default RegionStart;
