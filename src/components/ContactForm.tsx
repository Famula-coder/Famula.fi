import { useState, FormEvent } from 'react';
// import emailjs from '@emailjs/browser';
import { regions } from '../data/regions';
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone_number: formData.phone,
      to_email: getRecipientEmail(formData.regionId),
      to_name: getRecipientName(formData.regionId),
      message: formData.message,
      subject: 'Uusi yhteydenotto / Ilmainen tutustumiskäynti (Famula verkkosivut)'
    };

    try {
      // HUOM: Nämä tunnukset on vaihdettava oikeisiin EmailJS-tunnuksiisi, kun olet luonut tilin!
      // Katso ohjeet: https://www.emailjs.com/docs/examples/reactjs/
      
      // await emailjs.send(
      //   'YOUR_SERVICE_ID', 
      //   'YOUR_TEMPLATE_ID', 
      //   templateParams, 
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simuloidaan lähetys kehityksen ajaksi
      console.log("SIMULOITU LÄHETYS EMAILJS KAUTTA:", templateParams);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', regionId: 'koko-suomi', message: '' });
      setConsent(false);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
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

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3>Varaa ilmainen tutustumiskäynti tai kysy lisää</h3>
        <p>Valitse alueesi, niin viestisi ohjautuu suoraan oikealle aluevetäjälle tai päätöimistollemme Valmalle.</p>
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
              {regions.map(region => (
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
                href="https://oma.easygdpr.fi/file/public/privacy-policies/152161cd-d72e-46e1-b50d-3ece0eb40686"
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
