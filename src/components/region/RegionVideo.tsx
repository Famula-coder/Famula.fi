"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Play, X } from 'lucide-react';

const VIDEO_ID = 'pICF_LhldPU';

const RegionVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: 'white',
          borderRadius: '24px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          border: 'none',
          padding: 0,
          fontFamily: 'inherit',
          color: 'inherit',
        }}
      >
        <span style={{ position: 'relative', display: 'block', width: '100%', height: 'clamp(220px, 45vw, 400px)' }}>
          <Image
            src="/images/syodaanyhdessa.webp"
            alt="Perhe ja hoitaja syömässä yhdessä saman pöydän ääressä"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            width={800}
            height={800}
          />
          <span style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--color-accent)',
            width: '80px', height: '80px',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            color: 'white',
          }}>
            <Play size={40} style={{ marginLeft: '6px' }} fill="white" />
          </span>
        </span>
        <span style={{ display: 'block', padding: '2rem 1.5rem', textAlign: 'center' }}>
          <span style={{ display: 'block', fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Katso miten voimme auttaa arjessa
          </span>
          <span style={{ display: 'block', fontSize: '1.1rem', color: '#475569' }}>
            1 minuutin esittely palveluistamme
          </span>
        </span>
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.75rem' }}
            aria-label="Sulje video"
          >
            <X size={32} />
          </button>
          <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '9/16' }} onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Famulan palveluiden esittelyvideo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '12px' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionVideo;
