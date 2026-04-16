import { useState } from 'react';
import { SEO } from '../components/SEO';
import ContactForm from '../components/ContactForm';

import { Heart, ChevronDown, ShoppingCart, UtensilsCrossed, Sparkles, HandHeart, Footprints, Music2, Clock, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

/* ── Palvelut ── */
const services = [
  {
    icon: <ShoppingCart size={24} />,
    title: 'Kauppa- ja asiointiapu',
    short: 'Käymme puolestasi kaupassa tai lähdemme seuraksi ja tueksi asioille.',
    detail: 'Käymme puolestasi ruokakaupassa tai apteekissa, tai lähdemme sinulle turvalliseksi makutuomariksi ja seuraksi asioille.',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.12)',
    borderColor: '#7F9A83',
  },
  {
    icon: <UtensilsCrossed size={24} />,
    title: 'Ruoanlaitto ja ravitsemus',
    short: 'Valmistamme maistuvaa kotiruokaa yhdessä tai puolestasi.',
    detail: 'Valmistamme ravitsevaa ja maistuvaa kotiruokaa yhdessä tai puolestasi.',
    color: 'var(--color-accent)',
    colorLight: 'rgba(230,190,186,0.18)',
    borderColor: '#e6beba',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Kodin siisteys ja vaatehuolto',
    short: 'Pidämme kotisi raikkaana ja viihtyisänä.',
    detail: 'Autamme pitämään kodin raikkaana ja viihtyisänä. Teemme ylläpitosiivousta, viemme roskat, vaihdamme lakanat.',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    borderColor: '#7F6890',
  },
  {
    icon: <HandHeart size={24} />,
    title: 'Henkilökohtainen huolenpito',
    short: 'Avustamme päivittäisissä toimissa hienotunteisesti ja yksityisyyttäsi kunnioittaen.',
    detail: 'Avustamme peseytymisessä, pukeutumisessa ja muissa päivittäisissä toimissa täysin yksityisyyttäsi kunnioittaen.',
    color: 'var(--color-brown)',
    colorLight: 'rgba(161,122,116,0.1)',
    borderColor: '#A17A74',
  },
  {
    icon: <Footprints size={24} />,
    title: 'Ulkoilu ja seurustelu',
    short: 'Joskus tärkeintä on vain istahtaa alas kahvikupillisen ääreen ja jutella.',
    detail: 'Lähdemme mielellämme seuraksi kävelylle, lääkärikäynnille tai vaikkapa teatteriin.',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.12)',
    borderColor: '#7F9A83',
  },
  {
    icon: <Music2 size={24} />,
    title: 'Iloa harrastuksista',
    short: 'Autamme sinua osallistumaan sinulle tärkeisiin tapahtumiin ja virkistystoimintaan.',
    detail: 'Emme hoida vain pakollisia askareita — autamme sinua nauttimaan elämästä täysillä.',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    borderColor: '#7F6890',
  },
];

/* ── Esimerkit ── */
const examples = [
  {
    number: '1',
    emoji: '🌱',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.1)',
    borderColor: '#7F9A83',
    title: 'Kevyttä tukea ja turvaa arkeen',
    duration: 'Noin 3 tuntia viikossa',
    intro: 'Tämä kokonaisuus on ihanteellinen silloin, kun pärjäät mukavasti itse, mutta kaipaat hieman apukäsiä ja turvallisuuden tunnetta itsenäisen asumisen tueksi.',
    items: [
      { label: 'Viikoittainen kuulumisten vaihto', text: 'Tulemme käymään ja varmistamme, että arjessasi on kaikki hyvin.' },
      { label: 'Luotettava saattaja', text: 'Lähdemme turvalliseksi seuraksi kauppareissulle tai terveydenhuollon käynneille.' },
      { label: 'Yhteisölliset aamukahvit', text: 'Tarjoamme mahdollisuuden tavata muita ja nauttia lämminhenkisestä yhdessäolosta.' },
      { label: 'Kodin kevyt siistiminen', text: 'Huolehdimme kodin perusilmeestä, jotta sinun on mukava ja raikas olla.' },
      { label: 'Turvallinen verkosto', text: 'Pidämme tarvittaessa säännöllisesti yhteyttä terveydenhuollon ammattilaisiin puolestasi.' },
    ],
  },
  {
    number: '2',
    emoji: '☀️',
    color: 'var(--color-accent)',
    colorLight: 'rgba(230,190,186,0.15)',
    borderColor: '#e6beba',
    title: 'Sujuvuutta ja helpotusta rutiineihin',
    duration: 'Noin 6 tuntia viikossa',
    intro: 'Tämä palvelukokonaisuus on asiakkaidemme suosiossa silloin, kun kaipaat vankempaa apua arjen askareisiin, jotta voit säästää voimiasi sinulle tärkeisiin asioihin.',
    items: [
      { label: 'Perusteellisempi arjen tuki', text: 'Seuraamme vointiasi tarkemmin ja olemme vahvemmin tukena kodin ulkopuolisissa asioinneissa.' },
      { label: 'Ravitsevat ateriat vaivatta', text: 'Autamme tilaamaan ja vastaanottamaan sinulle maistuvat ateriat suoraan kotiin.' },
      { label: 'Puhtaat vaatteet ja raikas koti', text: 'Pyykkihuolto kerran viikossa ja kodin siivous joka toinen viikko.' },
      { label: 'Digiapu ja opastus', text: 'Neuvomme lempeästi älypuhelimen tai tabletin käytössä — yhteydenpiito läheisiin sujuu leikiten!' },
    ],
  },
  {
    number: '3',
    emoji: '💛',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    borderColor: '#7F6890',
    title: 'Kokonaisvaltaista huolenpitoa ja elämäniloa',
    duration: 'Kaikista laajin tukemme',
    intro: 'Tämä on valintasi silloin, kun tarvitset vahvaa tukea arkeen, mutta haluat silti nauttia aktiivisesta ja huolettomasta elämästä omassa kodissasi.',
    items: [
      { label: 'Päivittäinen yhteydenpito', text: 'Soitamme tai käymme luonasi joka ikinen päivä.' },
      { label: 'Joustava henkilökohtainen apu', text: 'Olemme apunasi ulkoilussa, lääkärikäynneillä ja kodin ulkopuolisissa asioissa.' },
      { label: 'Iloa harrastuksista', text: 'Avustamme sinua osallistumaan sinulle tärkeisiin tapahtumiin ja virkistystoimintaan.' },
      { label: 'Yhteisiä hetkiä keittiössä', text: 'Valmistamme ruokaa yhdessä toiveidesi mukaan.' },
      { label: 'Ympärivuorokautinen turva', text: 'Kotiin asennettava turvapuhelinpalvelu takaa, että apu on napin painalluksen päässä myös öisin.' },
    ],
  },
];

/* ── Accordion-komponentti ── */
const Accordion = ({ example }: { example: typeof examples[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: open ? '0 16px 48px rgba(0,0,0,0.10)' : '0 2px 12px rgba(0,0,0,0.05)',
      borderLeft: `5px solid ${open ? example.borderColor : '#e2e8f0'}`,
      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: open ? example.colorLight : 'transparent',
          border: 'none',
          padding: '1.75rem 2rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'left',
          transition: 'background 0.3s ease',
        }}
      >
        {/* Emoji + Numero-badge */}
        <span style={{
          flexShrink: 0,
          width: '52px', height: '52px',
          borderRadius: '16px',
          background: open ? example.color : example.colorLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem',
          transition: 'background 0.3s',
        }}>
          {example.emoji}
        </span>

        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
            {example.title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.9rem' }}>
            <Clock size={14} />
            {example.duration}
          </div>
        </div>

        <ChevronDown
          size={22}
          color={example.borderColor}
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </button>

      {/* Sisältö */}
      <div style={{
        maxHeight: open ? '900px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ padding: '0 2rem 2rem' }}>
          <p style={{
            color: '#475569',
            fontSize: '1.05rem',
            lineHeight: '1.75',
            marginBottom: '1.5rem',
            borderTop: `2px solid ${example.colorLight}`,
            paddingTop: '1.25rem',
          }}>
            {example.intro}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {example.items.map((item) => (
              <li key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color={example.borderColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#334155', lineHeight: '1.65' }}>
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
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '420px',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Taustakuva */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${import.meta.env.BASE_URL}header.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        zIndex: 0,
      }} />
      {/* Lämmin overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(8,36,52,0.42) 0%, rgba(161,122,116,0.30) 100%)',
        zIndex: 1,
      }} />

      <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 2, padding: '6rem 1.5rem 5rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
          padding: '0.5rem 1.1rem', background: 'rgba(230,190,186,0.25)',
          borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
          color: '#f5d5d3', marginBottom: '1.5rem', border: '1px solid rgba(230,190,186,0.4)',
        }}>
          <Heart size={14} /> Kotihoidon tukipalvelut
        </div>

        <h1 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '1.5rem', lineHeight: '1.2', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
          Apua, turvaa ja iloa arkeen
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
          Oma koti on maailman rakkain paikka. Haluamme auttaa sinua tai läheistäsi nauttimaan arjesta omassa kodissa mahdollisimman pitkään, turvallisesti ja huolettomasti.
        </p>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.75', marginBottom: '2rem' }}>
          Palvelumme mukautuvat joustavasti elämänvaiheesi mukaan — tuomme mukanamme paitsi apukäsiä käytännön askareisiin, myös kiireetöntä läsnäoloa ja seuraa.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#yhteys" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Varaa ilmainen tutustumiskäynti <ArrowRight size={18} />
          </a>
          <a href="tel:0447569399" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={18} /> 044 756 9399
          </a>
        </div>
      </div>
    </section>

    {/* ── MITÄ KUULUU? ── */}
    <section style={{ background: 'var(--color-light-gray)', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.5rem 1.1rem', background: 'rgba(155,194,166,0.15)',
            borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
            color: 'var(--color-secondary)', marginBottom: '1rem',
          }}>
            <Sparkles size={14} /> Kaikki mitä tarvitset
          </div>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Mitä palveluihimme kuuluu?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Koostamme juuri sinun näköisesi palvelukokonaisuuden — alla esimerkkejä osa-alueista.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '1.75rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                borderTop: `4px solid ${s.borderColor}`,
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(0,0,0,0.10)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: s.colorLight,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color,
              }}>
                {s.icon}
              </div>
              <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '1.05rem' }}>{s.title}</div>
              <div style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65' }}>{s.short}</div>
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
          border: '1px solid rgba(155,194,166,0.25)',
        }}>
          <Heart size={28} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
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
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 3rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.5rem 1.1rem', background: 'rgba(230,190,186,0.15)',
            borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
            color: 'var(--color-brown)', marginBottom: '1rem',
          }}>
            <Heart size={14} /> Räätälöityä juuri sinulle
          </div>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Esimerkkejä palvelukokonaisuuksista
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Tässä kolme esimerkkiä siitä, millaisia apukokonaisuuksia asiakkaamme ovat itselleen räätälöineet. Avaa esimerkit ja katso, mikä sopisi sinulle.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {examples.map((ex) => (
            <Accordion key={ex.number} example={ex} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '3.5rem',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f3a52 100%)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          color: 'white',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💬</div>
          <h3 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.5rem' }}>
            Kuulostaako jokin tutulta?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Soita tai täytä lomake — ensimmäinen tapaaminen on aina maksuton, eikä sido sinua vielä mihinkään.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#yhteys" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Ota yhteyttä <ArrowRight size={18} />
            </a>
            <a href="tel:0447569399" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 1.75rem', borderRadius: '50px',
              border: '2px solid rgba(255,255,255,0.35)', color: 'white',
              textDecoration: 'none', fontWeight: '600', fontSize: '1rem',
              transition: 'border-color 0.2s ease',
            }}>
              <Phone size={18} /> 044 756 9399
            </a>
          </div>
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
