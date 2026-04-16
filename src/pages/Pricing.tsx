import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Calculator, Info, Phone } from 'lucide-react';
import './Pricing.css'; // Let's also create this file for the exact styling

const formatPrice = (price: number) => {
  return price.toLocaleString('fi-FI', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const Pricing = () => {
  const baseRate = 39.95; // Base hourly rate
  const vatRate = 0.255; // 25.5% VAT
  const deductionRate = 0.35; // 35% Kotitalousvähennys

  const [applyVat, setApplyVat] = useState(false);
  const [applyDeduction, setApplyDeduction] = useState(false);
  const [distance, setDistance] = useState(0);
  const [hours, setHours] = useState(2);

  // Calculations
  const hourlyRate = baseRate * (applyVat ? (1 + vatRate) : 1);
  const travelCost = distance * 0.60 * (applyVat ? (1 + vatRate) : 1); // assume 0.60e / km
  const subTotal = (hourlyRate * hours) + travelCost;
  
  // Kotitalousvähennys applies only to work, not travel
  const deduction = applyDeduction ? (hourlyRate * hours * deductionRate) : 0;
  const finalTotal = subTotal - deduction;

  return (
    <>
      <SEO 
        title="Hinnoittelu ja Hintalaskuri | Famula" 
        description="Laske kotihoitopalvelun hinta Famulan hintalaskurilla. Selkeä ja läpinäkyvä hinnoittelu." 
      />
      
      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: '#e04236', fontSize: '3rem', marginBottom: '1rem' }}>Hinnoittelu</h1>
          <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
            Selkeä ja läpinäkyvä hinnoittelu. Yksi tuntihinta.
          </p>
        </div>

        <div className="calculator-wrapper">
          <div className="calculator-header text-center">
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              <Calculator color="#e04236" size={28} /> Hintalaskuri
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Muokkaa asetuksia nähdäksesi tarkan hinnan omaan tilanteeseesi
            </p>
          </div>

          <div className="calculator-controls">
            {/* Toggles Column */}
            <div className="controls-col">
              <div className="control-box">
                <div className="control-label">
                  <span>Kotitalousvähennys (35%)</span>
                  <Info size={16} color="#94a3b8" />
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={applyDeduction} 
                    onChange={(e) => setApplyDeduction(e.target.checked)} 
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="control-box">
                <div className="control-label">
                  <span>ALV 25,5%</span>
                  <Info size={16} color="#94a3b8" />
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={applyVat} 
                    onChange={(e) => setApplyVat(e.target.checked)} 
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            {/* Sliders Column */}
            <div className="controls-col">
              <div className="control-box stacked">
                <div className="control-label">
                  <span>Etäisyys keskustasta ({distance} km)</span>
                  <Info size={16} color="#94a3b8" />
                </div>
                <input 
                  type="range" 
                  min="0" max="50" step="1" 
                  value={distance} 
                  onChange={(e) => setDistance(Number(e.target.value))} 
                  className="range-slider"
                />
              </div>

              <div className="control-box stacked">
                <div className="control-label">
                  <span>Tuntimäärä ({hours}h)</span>
                  <Info size={16} color="#94a3b8" />
                </div>
                <input 
                  type="range" 
                  min="2" max="24" step="0.5" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))} 
                  className="range-slider"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ margin: '1.5rem 0' }}>
            <a href="#yksinkertainen" style={{ color: '#e04236', textDecoration: 'underline', fontSize: '0.95rem' }}>Yksinkertainen näkymä</a>
          </div>

          <div className="calculator-results">
            <div className="results-breakdown">
              <div className="result-row">
                <span>Tuntihinta</span>
                <span className="font-bold value-text">{formatPrice(hourlyRate)} €/h</span>
              </div>
              <div className="result-row">
                <span>Kokonaishinta ({hours}h)</span>
                <span className="font-bold value-text">{formatPrice(subTotal)} €</span>
              </div>
              {applyDeduction && (
                <div className="result-row deduction-row">
                  <span>Vähennys (-35%)</span>
                  <span className="font-bold value-text">-{formatPrice(deduction)} €</span>
                </div>
              )}
            </div>
            
            <div className="results-total">
              <span className="total-label">Yhteensä</span>
              <span className="total-value">{formatPrice(finalTotal)} €</span>
            </div>
          </div>

          <div className="calculator-actions">
            <button className="btn btn-action-primary">
              Varaa ilmainen tutustumiskäynti
            </button>
            <a href="tel:0447569399" className="btn btn-action-outline">
              <Phone size={18} /> Soita ja kysy lisää
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
