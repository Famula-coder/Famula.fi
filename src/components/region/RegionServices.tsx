import { Coffee, Sparkles, ShoppingCart, UtensilsCrossed, HandHeart, Stethoscope } from 'lucide-react';

const services = [
  { icon: Coffee, title: 'Seura ja ulkoilu', text: 'Juttuseuraa, kävelyitä ja saattaja lääkäriin, tapahtumiin tai kylään.' },
  { icon: Sparkles, title: 'Kodin siisteys ja vaatehuolto', text: 'Säännöllinen siivous, pyykit ja raikas koti.' },
  { icon: ShoppingCart, title: 'Asiointi', text: 'Kauppa, apteekki, pankki ja terveydenhuollon käynnit yhdessä tai puolestasi.' },
  { icon: UtensilsCrossed, title: 'Ruoanlaitto ja ravitsemus', text: 'Maistuvaa kotiruokaa yhdessä tai valmiiksi tehtynä.' },
  { icon: HandHeart, title: 'Henkilökohtainen huolenpito', text: 'Apu peseytymisessä, pukeutumisessa ja aamu- tai iltatoimissa yksityisyyttäsi kunnioittaen.' },
  { icon: Stethoscope, title: 'Voinnin seuranta', text: 'Tarvittaessa lääkkeiden jako ja verenpaineen mittaus sekä yhteydenpito omaisiin.' },
];

const RegionServices = ({ locative }: { locative: string }) => (
  <section className="container" style={{ padding: '4rem 1.5rem 2rem' }}>
    <h2 className="text-center" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '0.75rem' }}>
      Mitä kotipalvelumme {locative} sisältää
    </h2>
    <p className="text-center" style={{ color: '#475569', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
      Palvelu kootaan aina asiakkaan tarpeen mukaan, ja se alkaa ilmaisella tutustumiskäynnillä. Tavallisimmin autamme näissä:
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.25rem' }}>
      {services.map(({ icon: Icon, title, text }) => (
        <div key={title} style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <Icon size={28} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{title}</h3>
            <p style={{ color: '#475569', fontSize: '1rem', margin: 0 }}>{text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RegionServices;
