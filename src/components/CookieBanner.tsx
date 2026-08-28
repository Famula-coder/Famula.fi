"use client";

import { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setIsVisible(true);
    } else {
      // Load previous preferences if they exist (stored as JSON)
      const prefs = localStorage.getItem('cookiePreferences');
      if (prefs) {
        try {
          const parsed = JSON.parse(prefs);
          setAnalyticsConsent(parsed.analytics);
          setMarketingConsent(parsed.marketing);
        } catch (e) {
          // ignore parsing error
        }
      }
    }

    // Listen for custom event to reopen banner
    const handleReopen = () => {
      setIsVisible(true);
      setShowSettings(false);
    };
    window.addEventListener('openCookieBanner', handleReopen);
    return () => window.removeEventListener('openCookieBanner', handleReopen);
  }, []);

  const updateGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': marketing ? 'granted' : 'denied',
        'ad_user_data': marketing ? 'granted' : 'denied',
        'ad_personalization': marketing ? 'granted' : 'denied',
        'analytics_storage': analytics ? 'granted' : 'denied'
      });
    }
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify({ analytics, marketing }));
    updateGtagConsent(analytics, marketing);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => savePreferences(true, true);
  const handleDeclineAll = () => savePreferences(false, false);
  const handleSaveSettings = () => savePreferences(analyticsConsent, marketingConsent);

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        {!showSettings ? (
          <>
            <div className="cookie-banner-content">
              <h4>Käytämme evästeitä</h4>
              <p>
                Tämä sivusto käyttää evästeitä käyttökokemuksen parantamiseen, analytiikkaan ja markkinointiin. 
                Voit hyväksyä kaikki evästeet tai muokata asetuksia. Lue lisää{' '}
                <a 
                  href="https://famula-asiakirjahallinta--famula-asiakirjahallinta.europe-west4.hosted.app/p/pub_doc-1777552123067-h23awcnzj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cookie-link"
                >
                  tietosuojaselosteestamme
                </a>.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button className="btn btn-outline" onClick={handleDeclineAll} style={{ backgroundColor: 'white' }}>Vain välttämättömät</button>
              <button className="btn btn-outline" onClick={() => setShowSettings(true)} style={{ backgroundColor: 'white' }}>Asetukset</button>
              <button className="btn btn-primary" onClick={handleAcceptAll}>Hyväksy kaikki</button>
            </div>
          </>
        ) : (
          <div className="cookie-settings">
            <h4>Evästeasetukset</h4>
            <p className="settings-desc">Hallitse suostumuksiasi eri evästekategorioille.</p>
            
            <div className="cookie-option">
              <div className="cookie-option-info">
                <strong>Välttämättömät evästeet</strong>
                <p>Mahdollistavat sivuston perustoiminnot. Näitä ei voi poistaa käytöstä.</p>
              </div>
              <div className="toggle-switch">
                <input type="checkbox" checked disabled />
                <span className="slider disabled"></span>
              </div>
            </div>

            <div className="cookie-option">
              <div className="cookie-option-info">
                <strong>Analytiikka</strong>
                <p>Auttavat meitä ymmärtämään miten kävijät käyttävät sivustoa (esim. Google Analytics).</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked={analyticsConsent} onChange={(e) => setAnalyticsConsent(e.target.checked)} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="cookie-option">
              <div className="cookie-option-info">
                <strong>Markkinointi</strong>
                <p>Käytetään mainonnan kohdentamiseen ja tehokkuuden mittaamiseen (esim. Google Ads).</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="cookie-banner-actions" style={{ marginTop: '1.5rem', justifyContent: 'flex-end' }}>
              <button className="btn btn-outline" onClick={() => setShowSettings(false)} style={{ backgroundColor: 'white' }}>Takaisin</button>
              <button className="btn btn-primary" onClick={handleSaveSettings}>Tallenna asetukset</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
