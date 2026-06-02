import { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        <div className="cookie-banner-content">
          <h4>Käytämme evästeitä</h4>
          <p>
            Tämä sivusto käyttää evästeitä käyttökokemuksen parantamiseen ja analytiikkaan. 
            Voit hyväksyä kaikki evästeet tai jatkaa vain välttämättömillä evästeillä.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="btn btn-outline" onClick={handleDecline} style={{ backgroundColor: 'white' }}>Vain välttämättömät</button>
          <button className="btn btn-primary" onClick={handleAccept}>Hyväksy kaikki</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
