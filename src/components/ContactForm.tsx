"use client";

import { useState, type FormEvent } from 'react';
import { regions, visibleRegions } from '../data/regions';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    regionId: 'koko-suomi',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'activation'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getRecipientEmail = (regionId: string) => {
    if (regionId === 'koko-suomi') return 'valma.linnanmaki@famula.fi';
    const region = regions.find(r => r.id === regionId);
    return region ? region.email : 'valma.linnanmaki@famula.fi';
  };

  const getRecipientName = (regionId: string) => {
    if (regionId === 'koko-suomi') return 'Valma Linnanmäki / Päätoimisto';
    const region = regions.find(r => r.id === regionId);
    return region ? `${region.managerName} (${region.name})` : 'Päätoimisto';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    setStatus('sending');

    const recipientEmail = getRecipientEmail(formData.regionId);

    try {
      // Lähetetään lomake FormSubmit-palvelun kautta ilman tunnuksia
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nimi: formData.name,
          Puhelin: formData.phone,
          Sähköposti: formData.email,
          Alue: getRecipientName(formData.regionId),
          Viesti: formData.message,
          _subject: 'Uusi yhteydenotto / Famula verkkosivut',
          _template: 'table'
        })
      });

      let data: { success?: boolean | string; message?: string } | undefined;
      try {
        data = await response.json() as { success?: boolean | string; message?: string };
      } catch (_e) {
        // ignore JSON parse errors
      }

      if (!response.ok || (data && (data.success === 'false' || data.success === false))) {
        const errorMsg = data?.message ?? 'Lomakkeen lähetys epäonnistui';
        if (
          errorMsg.toLowerCase().includes('activate') ||
          errorMsg.toLowerCase().includes('confirm') ||
          response.status === 401 ||
          response.status === 403 ||
          response.status === 400
        ) {
          throw new Error('ACTIVATION_REQUIRED');
        }
        throw new Error(errorMsg);
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', regionId: 'koko-suomi', message: '' });
      setConsent(false);
    } catch (error: unknown) {
      console.error('Email send failed:', error);
      const errorMessage = error instanceof Error ? error.message : '';
      if (errorMessage === 'ACTIVATION_REQUIRED') {
        setStatus('activation');
      } else {
        setStatus('error');
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-success-state">
        <CheckCircle2 size={48} color="var(--color-secondary)" style={{ marginBottom: '1rem' }} />
        <h3>Kiitos viestistäsi!</h3>
        <p>Olemme vastaanottaneet yhteydenottopyyntösi. Alueesi vastuuhenkilö ({getRecipientName(formData.regionId)}) on sinuun pian yhteydessä!</p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
          Lähetä uusi viesti
        </button>
      </div>
    );
  }

  if (status === 'activation') {
    return (
      <div className="contact-success-state" style={{ backgroundColor: '#fff3cd', borderColor: '#ffe69c' }}>
        <AlertCircle size={48} color="#856404" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: '#856404' }}>Sähköpostin aktivointi vaaditaan!</h3>
        <p style={{ color: '#856404' }}>
          Koska tähän osoitteeseen ({getRecipientEmail(formData.regionId)}) lähetettiin nyt ensimmäistä kertaa,
          FormSubmit lähetti kyseiseen sähköpostiin vahvistuslinkin turvallisuussyistä.
        </p>
        <p style={{ color: '#856404', marginTop: '1rem' }}>
          <strong>Käy sähköpostissasi (tarkista myös roskaposti) ja klikkaa siellä olevaa &quot;Activate Form&quot; -painiketta!</strong>
        </p>

        <div style={{ padding: '1.5rem', border: '1px dashed #ffe69c', marginTop: '1.5rem', borderRadius: '8px' }}>
          <p style={{ color: '#856404', margin: 0, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Eikö viestiä näy? Klikkaa alla olevaa painiketta pyytääksesi viestin manuaalisesti.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <form action={`https://formsubmit.co/${getRecipientEmail(formData.regionId)}`} method="POST" target="_blank">
              <input type="hidden" name="_subject" value="Aktivointi" />
              <input type="hidden" name="Viesti" value="Tämä on aktivointiviesti." />
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#856404', borderColor: '#856404' }}>
                Pyydä uusi aktivointiviesti
              </button>
            </form>

            <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ borderColor: '#856404', color: '#856404' }}>
              Olen klikannut aktivointia, palaa lomakkeelle
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3>Varaa ilmainen tutustumiskäynti tai kysy lisää</h3>
        <p>Valitse alueesi, niin viestisi ohjautuu suoraan oikealle aluevetäjälle tai päätoimistollemme Valmalle.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-group row">
          <div className="form-field">
            <label htmlFor="name">Luku- / Nimi <span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Matti Meikäläinen"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Puhelinnumero <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="040 123 4567"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="form-field">
            <label htmlFor="email">Sähköposti</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="matti@esimerkki.fi"
            />
          </div>
          <div className="form-field">
            <label htmlFor="regionId">Alue, jota kysely koskee <span className="required">*</span></label>
            <select
              id="regionId"
              name="regionId"
              value={formData.regionId}
              onChange={handleChange}
              required
            >
              <option value="koko-suomi">Koko Suomi (Ohjautuu Valmalle)</option>
              {visibleRegions.map(region => (
                <option key={region.id} value={region.id}>
                  {region.name} (Vetäjä: {region.managerName})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field full-width">
          <label htmlFor="message">Viestisi / Tilanteen kuvaus <span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Kerro lyhyesti, miten voisimme auttaa sinua tai läheistäsi..."
          ></textarea>
        </div>

        <div className="form-field checkbox-field full-width">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <span className="checkbox-text">
              Hyväksyn, että antamiani tietoja käsitellään yhteydenoton hoitamiseksi Famulan{' '}
              <a
                href="https://famula-asiakirjahallinta--famula-asiakirjahallinta.europe-west4.hosted.app/p/pub_doc-1777552123067-h23awcnzj"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}
              >
                tietosuojaselosteen
              </a>{' '}
              mukaisesti. <span className="required">*</span>
            </span>
          </label>
        </div>

        {status === 'error' && (
          <div className="error-message">
            <AlertCircle size={18} /> Jotain meni pieleen viestin lähetyksessä. Yritä myöhemmin uudelleen tai soita meille!
          </div>
        )}

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={!consent || status === 'sending'}
          >
            {status === 'sending' ? 'Lähetetään...' : (
              <>Varaa tutustumiskäynti <Send size={18} /></>
            )}
          </button>
          <p className="privacy-note">Emme koskaan jaa tietojasi kolmansille osapuolille.</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
