import Link from 'next/link';
import type { RegionData } from '../../data/regions';

interface CitySummaryProps {
  region: RegionData;
  locative: string;
  priceHeading: string;
  priceExample?: string;
}

const linkStyle = { display: 'inline-block', padding: '0.5rem 0', color: 'var(--color-primary)', fontWeight: '600' } as const;
const cardStyle = { background: 'white', borderRadius: '12px', padding: '1.5rem' } as const;

/** Kaupunkisivun tiivis versio palveluista, hinnasta ja luottamustiedoista. Täydet lohkot ovat aluesivulla. */
const CitySummary = ({ region, locative, priceHeading, priceExample }: CitySummaryProps) => (
  <section className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px', display: 'grid', gap: '1.25rem' }}>
    <div style={cardStyle}>
      <h2 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.75rem)' }}>Kaikki kotihoidon tukipalvelut {locative}</h2>
      <p style={{ color: '#475569', marginBottom: 0 }}>
        Kotihoidon tukipalvelut ovat työmme ydin. Samalta tutulta hoitajalta saat siivouksen ja vaatehuollon, asiointiavun,
        ruoanlaiton, seuran ja ulkoilun, henkilökohtaisen huolenpidon sekä voinnin seurannan. Kokonaisuus kootaan sinun
        tarpeesi mukaan ilmaisella tutustumiskäynnillä.
      </p>
    </div>

    <div style={cardStyle}>
      <h2 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.75rem)' }}>{priceHeading}</h2>
      <p style={{ color: '#475569' }}>
        Sosiaalihuollon asiakkaille tuntihinta on kiinteästi <strong>42,50 € (alv 0 %)</strong>, kotitalousvähennyksen (40 %)
        jälkeen noin 25,50 €. {priceExample}
      </p>
      <Link href={`/${region.id}/#hinnat`} style={linkStyle}>Katso hintaesimerkit ja paketit →</Link>
    </div>

    <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, textAlign: 'center' }}>
      Famula on Lupa- ja valvontaviraston Soteri-rekisteriin rekisteröity palveluntuottaja.{' '}
      {region.hasOmavalvonta && (
        <Link href={`/${region.id}/omavalvonta/`} style={linkStyle}>Lue omavalvontasuunnitelma</Link>
      )}
    </p>
  </section>
);

export default CitySummary;
