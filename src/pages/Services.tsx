import { useState } from 'react';
import { SEO } from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { Heart, ChevronDown, ShoppingCart, UtensilsCrossed, Sparkles, HandHeart, Footprints, Music2, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

/* ── Palvelut ── */
const services = [
  {
    icon: <ShoppingCart size={22} />,
    title: 'Kauppa- ja asiointiapu',
    short: 'Käymme puolestasi kaupassa tai lähdemme seuraksi ja tueksi asioille.',
    detail: 'Käymme puolestasi ruokakaupassa tai apteekissa, tai lähdemme sinulle turvalliseksi makutuomariksi ja seuraksi asioille. Hoidamme yhdessä arjen juoksevat asiat niin, että sinulla jää voimia tärkeämpiin hetkiin.',
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: 'Ruoanlaitto ja ravitsemus',
    short: 'Valmistamme maistuvaa kotiruokaa yhdessä tai puolestasi.',
    detail: 'Valmistamme ravitsevaa ja maistuvaa kotiruokaa yhdessä tai puolestasi. Huolehdimme, että jääkaapissa on tuoretta syötävää ja että ruokailuhetket ovat rauhallisia ja miellyttäviä.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Kodin siisteys ja vaatehuolto',
    short: 'Pidämme kotisi raikkaana ja viihtyisänä.',
    detail: 'Autamme pitämään kodin raikkaana ja viihtyisänä. Teemme ylläpitosiivousta, viemme roskat, vaihdamme lakanat sekä pesemme ja silitämme pyykit.',
  },
  {
    icon: <HandHeart size={22} />,
    title: 'Henkilökohtainen hygienia ja huolenpito',
    short: 'Avustamme päivittäisissä toimissa hienotunteisesti ja yksityisyyttäsi kunnioittaen.',
    detail: 'Avustamme peseytymisessä, pukeutumisessa ja muissa päivittäisissä toimissa hienotunteisesti ja täysin yksityisyyttäsi kunnioittaen. Teemme asiat juuri sinun tahdissasi.',
  },
  {
    icon: <Footprints size={22} />,
    title: 'Ulkoilu, saattaja ja seurustelu',
    short: 'Joskus tärkeintä on vain istahtaa alas kahvikupillisen ääreen ja jutella.',
    detail: 'Lähdemme mielellämme seuraksi kävelylle lähiluontoon, lääkärikäynnille tai vaikkapa teatteriin. Joskus tärkeintä on vain istahtaa alas kahvikupillisen ääreen — olemme täällä myös sitä varten.',
  },
  {
    icon: <Music2 size={22} />,
    title: 'Iloa harrastuksista',
    short: 'Autamme sinua osallistumaan sinulle tärkeisiin tapahtumiin ja virkistystoimintaan.',
    detail: 'Emme hoida vain pakollisia askareita, vaan autamme sinua nauttimaan elämästä täysillä. Avustamme mielellämme osallistumaan kulttuuritapahtumiin, harrastuksiin ja muuhun virkistystoimintaan.',
  },
];

/* ── Esimerkit ── */
const examples = [
  {
    number: '1',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.1)',
    title: 'Kevyttä tukea ja turvaa arkeen',
    duration: 'Noin 3 tuntia viikossa',
    intro: 'Tämä kokonaisuus on ihanteellinen silloin, kun pärjäät mukavasti itse, mutta kaipaat hieman apukäsiä ja turvallisuuden tunnetta itsenäisen asumisen tueksi.',
    items: [
      { label: 'Viikoittainen kuulumisten vaihto', text: 'Tulemme käymään ja varmistamme, että arjessasi on kaikki hyvin. Samalla voidaan istahtaa hetkeksi alas ja vaihtaa kuulumiset.' },
      { label: 'Luotettava saattaja', text: 'Lähdemme turvalliseksi seuraksi ja tueksi esimerkiksi kauppareissulle tai terveydenhuollon käynneille.' },
      { label: 'Yhteisölliset aamukahvit', text: 'Tarjoamme mahdollisuuden tavata muita, istahtaa valmiiseen pöytään ja nauttia lämminhenkisestä yhdessäolosta.' },
      { label: 'Kodin kevyt siistiminen', text: 'Huolehdimme kodin perusilmeestä, jotta sinun on mukava ja raikas olla.' },
      { label: 'Turvallinen verkosto', text: 'Pidämme tarvittaessa säännöllisesti yhteyttä terveydenhuollon ammattilaisiin puolestasi.' },
    ],
  },
  {
    number: '2',
    color: 'var(--color-accent)',
    colorLight: 'rgba(230,190,186,0.15)',
    title: 'Sujuvuutta ja helpotusta rutiineihin',
    duration: 'Noin 6 tuntia viikossa',
    intro: 'Tämä palvelukokonaisuus on asiakkaidemme suosiossa silloin, kun kaipaat vankempaa apua arjen askareisiin, jotta voit säästää voimiasi sinulle tärkeisiin asioihin.',
    items: [
      { label: 'Perusteellisempi arjen tuki', text: 'Seuraamme vointiasi tarkemmin ja olemme vahvemmin tukena kodin ulkopuolisissa asioinneissa.' },
      { label: 'Ravitsevat ateriat vaivatta', text: 'Autamme tilaamaan ja vastaanottamaan sinulle maistuvat ateriat suoraan kotiin.' },
      { label: 'Puhtaat vaatteet ja raikas koti', text: 'Viemme pyykkihuollon (kerran viikossa) ja kodin perusteellisemman siivouksen (joka toinen viikko) kokonaan harteiltasi.' },
      { label: 'Digiapu ja opastus', text: 'Neuvomme lempeästi ja rauhassa älypuhelimen tai tabletin käytössä — kuvien katselu ja yhteydenpito läheisiin sujuu leikiten!' },
    ],
  },
  {
    number: '3',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    title: 'Kokonaisvaltaista huolenpitoa ja elämäniloa',
    duration: 'Kaikista laajin tukemme',
    intro: 'Tämä on valintasi silloin, kun tarvitset vahvaa tukea arkeen, mutta haluat silti nauttia aktiivisesta ja huolettomasta elämästä omassa kodissasi. Me olemme tukenasi joka päivä.',
    items: [
      { label: 'Päivittäinen yhteydenpito', text: 'Soitamme tai käymme luonasi joka ikinen päivä. Tiedät aina, että joku välittää ja katsoo perään.' },
      { label: 'Joustava henkilökohtainen apu', text: 'Olemme apunasi ulkoilussa, lääkärikäynneillä ja kodin ulkopuolisissa asioissa juuri silloin ja siten, kun sinulle parhaiten sopii.' },
      { label: 'Iloa harrastuksista', text: 'Emme hoida vain pakollisia askareita, vaan avustamme sinua osallistumaan sinulle tärkeisiin tapahtumiin ja virkistystoimintaan.' },
      { label: 'Yhteisiä hetkiä keittiössä', text: 'Valmistamme ruokaa yhdessä toiveidesi mukaan tai tuomme mukanamme valmiit, herkulliset ateriat.' },
      { label: 'Ympärivuorokautinen turva', text: 'Kotiin asennettava turvapuhelinpalvelu takaa, että apu on napin painalluksen päässä myös öisin ja viikonloppuisin.' },
    ],
  },
];

/* ── Accordion-komponentti ── */
const Accordion = ({ example }: { example: typeof examples[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: open ? '0 16px 48px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
        border: `1px solid ${open ? example.color : 'transparent'}`,
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.75rem 2rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'left',
        }}
      >
        {/* Numero-badge */}
        <span style={{
          flexShrink: 0,
          width: '42px', height: '42px',
          borderRadius: '50%',
          background: open ? example.color : example.colorLight,
          color: open ? 'white' : example.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '800', fontSize: '1.1rem',
          transition: 'background 0.3s, color 0.3s',
        }}>
          {example.number}
        </span>

        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>
            {example.title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.9rem' }}>
            <Clock size={14} />
            {example.duration}
          </div>
        </div>

        <ChevronDown
          size={22}
          color="var(--color-secondary)"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </button>

      {/* Sisältö */}
      <div style={{
        maxHeight: open ? '800px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ padding: '0 2rem 2rem' }}>
          <p style={{
            color: '#475569',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            borderTop: `2px solid ${example.colorLight}`,
            paddingTop: '1.25rem',
          }}>
            {example.intro}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {example.items.map((item) => (
              <li key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color={example.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#334155', lineHeight: '1.6' }}>
                  <strong>{item.label}:</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ── Pääkomponentti ── */
const Services = () => (
  <>
    <SEO
      title="Palvelumme | Famula Oy"
      description="Tutustu Famulan kotihoidon tukipalveluihin – kauppa-apu, ruoanlaitto, siivous, ulkoilu ja paljon muuta. Räätälöityä apua omaan kotiisi."
    />

    {/* ── HERO ── */}
    <section style={{ background: 'var(--color-white)', padding: '5rem 0 3rem' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
          padding: '0.5rem 1.1rem', background: 'rgba(155,194,166,0.15)',
          borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
          color: 'var(--color-secondary)', marginBottom: '1.5rem',
        }}>
          <Heart size={14} /> Kotihoidon tukipalvelut
        </div>

        <h1 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          Apua, turvaa ja iloa arkeen
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: '1.75', marginBottom: '1.25rem' }}>
          Oma koti on maailman rakkain paikka. Haluamme auttaa sinua tai läheistäsi nauttimaan arjesta omassa kodissa mahdollisimman pitkään, turvallisesti ja huolettomasti.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.75' }}>
          Me Famulassa uskomme, että avun pyytämisen ei tarvitse olla vaikeaa. Palvelumme mukautuvat joustavasti elämänvaiheesi mukaan — tuomme mukanamme paitsi apukäsiä käytännön askareisiin, myös kiireetöntä läsnäoloa ja seuraa.
        </p>
      </div>
    </section>

    {/* ── MITÄ KUULUU? ── */}
    <section style={{ background: 'var(--color-light-gray)', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.9rem' }}>
          Mitä tukipalveluihimme kuuluu?
        </h2>
        <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
          Koostamme juuri sinun näköisesi palvelukokonaisuuden — alla esimerkkejä osa-alueista.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', gap: '0.6rem',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(155,194,166,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-secondary)',
              }}>
                {s.icon}
              </div>
              <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '1rem' }}>{s.title}</div>
              <div style={{ color: '#64748b', fontSize: '0.93rem', lineHeight: '1.6' }}>{s.short}</div>
            </div>
          ))}
        </div>

        {/* Aina sinun ehdoillasi */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, rgba(155,194,166,0.18) 0%, rgba(230,190,186,0.15) 100%)',
          borderRadius: '20px',
          padding: '2rem 2.5rem',
          display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
        }}>
          <Heart size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Aina sinun ehdoillasi
            </div>
            <p style={{ color: '#475569', lineHeight: '1.7', margin: 0, fontSize: '1rem' }}>
              Palvelu alkaa aina <strong>ilmaisella tutustumiskäynnillä</strong>, jossa kuuntelemme toiveitasi ja suunnittelemme yhdessä juuri sinun arkeasi parhaiten tukevan kokonaisuuden. Meille on kunnia-asia olla luottamuksesi arvoisia.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── ESIMERKIT / ACCORDION ── */}
    <section style={{ background: 'var(--color-white)', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.9rem' }}>
          Esimerkkejä asiakkaidemme palvelukokonaisuuksista
        </h2>
        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Tässä kolme esimerkkiä siitä, millaisia apukokonaisuuksia asiakkaamme ovat itselleen räätälöineet. Avaa esimerkit ja katso, mikä sopisi sinulle.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {examples.map((ex) => (
            <Accordion key={ex.number} example={ex} />
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '1rem' }}>
            Haluatko kuulla lisää tai sopia ilmaisen tutustumiskäynnin?
          </p>
          <a href="#yhteys" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Ota yhteyttä <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>

    {/* ── YHTEYDENOTTO ── */}
    <section id="yhteys" style={{ padding: '5rem 1.5rem', background: 'var(--color-light-gray)' }}>
      <ContactForm />
    </section>
  </>
);

export default Services;
