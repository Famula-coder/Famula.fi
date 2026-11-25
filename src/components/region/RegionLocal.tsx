import Link from 'next/link';
import { Quote } from 'lucide-react';
import type { RegionContent } from '../../data/regionContent';
import type { CityPage } from '../../data/cities';

const cardStyle = { background: 'white', borderRadius: '12px', padding: '1.5rem' } as const;

const RegionLocal = ({ content, cityPages }: { content: RegionContent; cityPages: CityPage[] }) => (
  <section className="container" style={{ padding: '4rem 1.5rem', maxWidth: '900px' }}>
    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }}>{content.areaHeading}</h2>
    <p style={{ color: '#475569' }}>{content.areaText}</p>
    {cityPages.length > 0 && (
      <p>
        {cityPages.map((city) => (
          <Link key={city.id} href={`/${city.regionId}/${city.id}/`} style={{ display: 'inline-block', padding: '0.5rem 0', color: 'var(--color-primary)', fontWeight: '600' }}>
            Kotipalvelu {city.locative} →
          </Link>
        ))}
      </p>
    )}

    {content.voucher && (
      <div style={{ ...cardStyle, marginTop: '2rem', borderLeft: '5px solid var(--color-secondary)' }}>
        <h2 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.75rem)' }}>{content.voucher.heading}</h2>
        <p style={{ color: '#475569' }}>{content.voucher.text}</p>
        <ol style={{ paddingLeft: '1.5rem', color: '#475569', listStyle: 'decimal' }}>
          {content.voucher.steps.map((step) => (
            <li key={step} style={{ marginBottom: '0.5rem' }}>{step}</li>
          ))}
        </ol>
      </div>
    )}

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
      {content.testimonials.map((testimonial) => (
        <figure key={testimonial.text} style={cardStyle}>
          <Quote size={28} color="var(--color-accent)" aria-hidden="true" />
          <blockquote style={{ fontSize: '1.1rem', margin: '0.75rem 0', fontStyle: 'italic' }}>
            &ldquo;{testimonial.text}&rdquo;
          </blockquote>
          <figcaption style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>
            {testimonial.author}, {testimonial.city}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default RegionLocal;
