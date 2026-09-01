"use client";
import Image from 'next/image';

import { Phone, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { GENERAL_PHONE, toTelHref } from '../lib/phone';

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-shape"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Famula Oy – Kiireetöntä hoivaa</div>
          <h1>Luotettava kotipalvelu – Saat kotiisi ystävän, joka pitää sinusta ja kodistasi huolta</h1>
          <p className="hero-description">
            Kohtaamme jokaisen asiakkaan kuin oman läheisemme. Tuomme
            mukanamme turvaa ja kiireetöntä läsnäoloa arkeen.
          </p>
          <div className="hero-actions">
            <a href={toTelHref(GENERAL_PHONE)} className="btn btn-primary d-inline-flex">
              <Phone size={20} style={{ marginRight: '8px' }} /> Varaa ilmainen tutustumiskäynti
            </a>
            <Link href="/tarinamme/" className="btn btn-secondary d-inline-flex">
              Tarinamme <BookOpen size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-circle"></div>
          <Image 
            src={`/valma.png`} 
            alt="Valma Linnanmäki, Famulan perustaja" 
            className="hero-person-image" width={800} height={800} />
          <div className="hero-floating-card">
            <div className="floating-card-icon">
              <Image src={`/images/famulasydan.png`} alt="" aria-hidden="true" width={24} height={24} style={{ objectFit: 'contain' }} />
            </div>
            <div className="floating-card-text">
              <strong>&ldquo;Kaikessa autetaan&rdquo;</strong>
              <span>– Valma Linnanmäki</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
