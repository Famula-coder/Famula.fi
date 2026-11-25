const cardStyle = { padding: '2rem', background: 'white', borderRadius: '12px' } as const;

const RegionWhy = ({ locative }: { locative: string }) => (
  <div className="container" style={{ padding: '4rem 1.5rem' }}>
    <h2 className="text-center" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '3rem' }}>
      Miksi valita Famulan paikallinen hoitotiimi {locative}?
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
      <div style={{ ...cardStyle, borderTop: '4px solid var(--color-secondary)' }}>
        <h3 style={{ fontSize: '1.35rem' }}>Luotettavaa kotiapua ja seuraa {locative}</h3>
        <p>
          Laadukas yksityinen vanhustenhoito ja kotipalvelu tarkoittaa meille ennen kaikkea kiireetöntä kohtaamista. Jokainen ikäihminen ansaitsee tulla aidosti kuulluksi. Autamme arjen askareissa ja lähdemme mielellämme turvalliseksi seuraksi vaikkapa kauppa- tai apteekkiasioille.
        </p>
      </div>

      <div style={{ ...cardStyle, borderTop: '4px solid var(--color-accent)' }}>
        <h3 style={{ fontSize: '1.35rem' }}>Mielenrauhaa myös läheisille</h3>
        <p>
          Omaisen huoli kaukana asuvasta läheisestä on meille tuttua. Siksi pidämme teidät aina ajan tasalla. Avoin ja säännöllinen viestintämme tuo turvaa koko perheelle, ja voitte luottaa siihen, että läheisenne on hyvissä käsissä.
        </p>
      </div>

      <div style={{ ...cardStyle, borderTop: '4px solid var(--color-lavender)' }}>
        <h3 style={{ fontSize: '1.35rem' }}>Aina sama, tuttu hoitaja</h3>
        <p>
          Panostamme paikallisen tiimimme ammattitaitoon ja pysyvyyteen. Famulassa luonasi käy aina sama, tuttu hoitaja. Näin luottamuksen rakentaminen on luontevaa, ja apu tuntuu todelliselta ystävyydeltä.
        </p>
      </div>
    </div>
  </div>
);

export default RegionWhy;
