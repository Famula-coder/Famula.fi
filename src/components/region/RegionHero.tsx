import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import type { RegionData } from '../../data/regions';
import { toTelHref } from '../../lib/phone';

interface RegionHeroProps {
  region: RegionData;
  heading: string;
  paragraphs: string[];
  /** Näytetään merkissä otsikon yllä, esim. alueen tai paikkakunnan nimi. */
  badge: string;
  /** Oma kuva sivulle; oletuksena aluevetäjän kuva. */
  photo?: { src: string; alt: string };
}

const contactLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  fontWeight: '500',
  padding: '0.35rem 0',
  overflowWrap: 'anywhere',
} as const;

const RegionHero = ({ region, heading, paragraphs, badge, photo }: RegionHeroProps) => (
  <div className="bg-light" style={{ padding: '4rem 0' }}>
    <div className="container">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px', minWidth: 0 }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-background-warm)', color: 'var(--color-primary)', fontWeight: '600', borderRadius: '50px', marginBottom: '1rem' }}>
            <MapPin size={16} style={{ display: 'inline', marginRight: '6px' }} />
            Palvelualueemme: {badge}
          </div>
          {region.areaServed && (
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Palvelemme kotikäynnein: {region.areaServed.join(', ')}
            </p>
          )}
          <h1 style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', marginBottom: '1.5rem', overflowWrap: 'break-word' }}>
            {heading}
          </h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} style={{ fontSize: '1.1rem', color: '#475569' }}>
              {paragraph}
            </p>
          ))}

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Aluevetäjäsi {region.locativeName}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Image
                src={region.image}
                alt={region.altText}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', background: 'var(--color-accent)' }}
                width={800}
                height={800}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>{region.managerName}</strong>
                <span style={{ color: '#64748b', display: 'flex', flexDirection: 'column' }}>
                  {region.managerName === 'Leena Huusko' ? (
                    <>
                      <span>Palveluesimies, Famula Keski-Suomi</span>
                      <span style={{ fontSize: '0.9em' }}>Kehitysjohtaja, Famula Group Oy</span>
                    </>
                  ) : (
                    <span>Palveluesimies</span>
                  )}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <a href={toTelHref(region.phone)} style={contactLinkStyle}>
                <Phone size={18} color="var(--color-secondary)" /> {region.phone}
              </a>
              <a href={`mailto:${region.email}`} style={contactLinkStyle}>
                <Mail size={18} color="var(--color-secondary)" /> {region.email}
              </a>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 400px', minWidth: 0 }}>
          <Image
            src={photo?.src ?? region.image}
            alt={photo?.alt ?? region.altText}
            style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '100%', height: 'auto' }}
            width={photo ? 1200 : 800}
            height={800}
            priority={Boolean(photo)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default RegionHero;
