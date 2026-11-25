import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import type { PageAngle } from '../../data/pageAngles';

const RegionFeature = ({ angle, showImage = true }: { angle: PageAngle; showImage?: boolean }) => (
  <section style={{ background: 'white', padding: '4rem 0' }}>
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
      {showImage && (
        <div style={{ flex: '1 1 340px', minWidth: 0 }}>
          <Image
            src={angle.image}
            alt={angle.imageAlt}
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
          />
        </div>
      )}
      <div style={{ flex: '1 1 380px', minWidth: 0, maxWidth: showImage ? undefined : '820px', margin: showImage ? undefined : '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', overflowWrap: 'break-word' }}>{angle.heading}</h2>
        {angle.paragraphs.map((paragraph) => (
          <p key={paragraph} style={{ color: '#475569' }}>{paragraph}</p>
        ))}
        {angle.tips && (
          <div style={{ background: 'var(--color-light-gray)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{angle.tips.heading}</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {angle.tips.items.map((item) => (
                <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#334155' }}>
                  <CheckCircle2 size={20} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {angle.sameCarer && (
          <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginTop: '1.5rem', marginBottom: 0 }}>{angle.sameCarer}</p>
        )}
      </div>
    </div>
  </section>
);

export default RegionFeature;
