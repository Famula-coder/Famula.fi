import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-shape"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Famula Oy – Kiireetöntä hoivaa</div>
          <h1>Saat kotiisi ystävän, joka pitää sinusta ja kodistasi huolta</h1>
          <p className="hero-description">
            Kohtaamme jokaisen asiakkaan kuin oman läheisemme. Tuomme
            mukanamme turvaa ja kiireetöntä läsnäoloa arkeen.
          </p>
          <div className="hero-actions">
            <Link to="/palvelut" className="btn btn-primary d-inline-flex">
              Tutustu palveluihin <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/tarinamme" className="btn btn-secondary d-inline-flex">
              Tarinamme <BookOpen size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Aina tuttu hoitaja</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Kiireetön kohtaaminen</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Aito välittäminen</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-circle"></div>
          <img 
            src={`${import.meta.env.BASE_URL}valma.png`} 
            alt="Valma Linnanmäki, Famulan perustaja" 
            className="hero-person-image"
          />
          <div className="hero-floating-card">
            <div className="floating-card-icon">❤️</div>
            <div className="floating-card-text">
              <strong>"Kaikessa autetaan"</strong>
              <span>– Valma Linnanmäki</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
