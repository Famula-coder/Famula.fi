import type { RegionFaq as RegionFaqItem } from '../../data/regionContent';

const RegionFaq = ({ heading, items }: { heading: string; items: RegionFaqItem[] }) => (
  <section className="container" style={{ padding: '0 1.5rem 4rem', maxWidth: '900px' }}>
    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '1.5rem' }}>{heading}</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item) => (
        <div key={item.question} style={{ background: 'white', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{item.question}</h3>
          <p style={{ color: '#475569', margin: 0 }}>{item.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default RegionFaq;
