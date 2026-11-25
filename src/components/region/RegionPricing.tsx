import Link from 'next/link';
import PricingPackagesList from '../PricingPackages';

const linkStyle = { display: 'inline-block', padding: '0.6rem 0.25rem', color: 'var(--color-primary)', fontWeight: '600' } as const;

const RegionPricing = ({ locative }: { locative: string }) => (
  <section id="hinnat" className="container" style={{ padding: '2rem 1.5rem 4rem', scrollMarginTop: '6rem' }}>
    <h2 className="text-center" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '0.75rem' }}>
      Kotipalvelun hinta {locative} ja kotitalousvähennys
    </h2>
    <p className="text-center" style={{ color: '#475569', maxWidth: '720px', margin: '0 auto 2rem' }}>
      Sosiaalihuollon asiakkaille perushinta on <strong>42,50 € (alv 0 %)</strong>. Kotitalousvähennyksen (40 %) jälkeen
      maksettavaksi jää noin 25,50 € tunnilta. Alla kolme esimerkkiä – tunnit, sisältö ja tarkka hinta sovitaan aina yhdessä ennen aloitusta. Iltaisin, viikonloppuisin ja pyhäpäivinä hintaan lisätään työehtosopimuksen mukaiset lisät.
    </p>

    <PricingPackagesList />

    <p className="text-center" style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '720px', margin: '2rem auto 0' }}>
      Myös omainen voi ostaa palvelun vanhemmalleen ja saada vähennyksen itse. Lue lisää:
      <br />
      <Link href="/tietopankki/mita-kotipalvelu-maksaa/" style={linkStyle}>Mitä kotipalvelu maksaa?</Link>
      {' · '}
      <Link href="/tietopankki/nain-haet-kotitalousvahennysta/" style={linkStyle}>Näin haet kotitalousvähennystä</Link>
    </p>
  </section>
);

export default RegionPricing;
