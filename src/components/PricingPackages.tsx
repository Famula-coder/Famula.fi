"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Clock, CheckCircle2 } from 'lucide-react';
import { regions } from '../data/regions';

export const pricingExamples = [
  {
    number: '1',
    emoji: '🌱',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.1)',
    borderColor: '#7F9A83',
    title: 'Kevyttä tukea ja turvaa arkeen',
    duration: 'Noin 3 tuntia viikossa',
    intro: '3 tuntia yhteistä aikaa asiakkaan kanssa. Sama hoitaja aina.',
    items: [
      { label: 'Viikoittainen kuulumisten vaihto ja läsnäolo', text: 'Varmistamme, että kaikki on hyvin ja tuomme turvaa arkeen.' },
      { label: 'Kodin säännöllinen siivous', text: 'Huolehdimme puhtaasta ja raikkaasta kodista.' },
      { label: 'Asiointiapu kodin ulkopuolella', text: 'Turvallinen saattaja kauppaan, apteekkiin tai terveydenhuollon käynneille.' },
      { label: 'Yhteisölliset aamukahvit', text: 'Tarjoamme mahdollisuuden tavata muita ja nauttia lämminhenkisestä yhdessäolosta.' },
    ],
    priceBase: '119,85 € / viikko',
    priceAfter: '77,90 € / viikko',
    priceNote: '(sisältää 35% kotitalousvähennyksen, omavastuu 65%)',
  },
  {
    number: '2',
    emoji: '☀️',
    color: 'var(--color-accent)',
    colorLight: 'rgba(230,190,186,0.15)',
    borderColor: '#e6beba',
    title: 'Sujuvuutta ja helpotusta rutiineihin',
    duration: 'Noin 6 tuntia viikossa',
    intro: '6 tuntia turvallista läsnäoloa ja vankempaa apua arkeen. Sama hoitaja aina.',
    items: [
      { label: 'Perusteellisempi arjen tuki ja voinnin seuranta', text: 'Sisältää tarvittaessa kotisairaanhoidollisia toimia, esim. lääkkeiden jako ja verenpaineen mittaus.' },
      { label: 'Ravitsemuksesta huolehtiminen', text: 'Aterioiden suunnittelu, tilaaminen ja yhdessä syöminen.' },
      { label: 'Pyykkihuolto ja kodin säännöllinen siivous', text: 'Huolehdimme puhtaista vaatteista ja raikkaasta kodista.' },
      { label: 'Digiapu ja asiointi', text: 'Autamme pankkiasioissa ja yhteydenpidossa läheisiin.' },
    ],
    priceBase: '239,70 € / viikko',
    priceAfter: '155,81 € / viikko',
    priceNote: '(sisältää 35% kotitalousvähennyksen, omavastuu 65%)',
  },
  {
    number: '3',
    emoji: '💛',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    borderColor: '#7F6890',
    title: 'Kokonaisvaltaista huolenpitoa ja elämäniloa',
    duration: 'Esim. 10 tuntia viikossa',
    intro: '10 tuntia intensiivistä tukea ja läsnäoloa, joka mahdollistaa turvallisen kotona asumisen pitkään. Sama hoitaja aina.',
    items: [
      { label: 'Säännölliset arjen rutiinit', text: 'Apu peseytymisessä, aamupalan valmistuksessa tai iltatoimissa tarpeen mukaan.' },
      { label: 'Laajennettu kotisairaanhoito ja asiointi', text: 'Tiivis voinnin seuranta, lääkärikäynneillä saattaminen ja asiantunteva apu.' },
      { label: 'Iloa harrastuksista ja ulkoilusta', text: 'Lähdemme mukaan tapahtumiin, teatteriin tai kävelylle ja ylläpidämme elämänlaatua.' },
      { label: 'Ympärivuorokautinen turvaverkko', text: 'Yhteistyö turvapuhelinpalvelun kanssa ja tiivis, ennakoiva yhteydenpito omaisiin.' },
    ],
    priceBase: '399,50 € / viikko',
    priceAfter: '259,68 € / viikko',
    priceNote: '(sisältää 35% kotitalousvähennyksen, omavastuu 65%)',
  },
];

export const PricingAccordion = ({ example }: { example: typeof pricingExamples[0] }) => {
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: open ? '0 16px 48px rgba(0,0,0,0.10)' : '0 2px 12px rgba(0,0,0,0.05)',
      borderLeft: `5px solid ${open ? example.borderColor : '#e2e8f0'}`,
      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="accordion-header"
        style={{
          width: '100%',
          background: open ? example.colorLight : 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          transition: 'background 0.3s ease',
        }}
      >
        <span 
          className="accordion-icon"
          style={{
          flexShrink: 0,
          borderRadius: '16px',
          background: open ? example.color : example.colorLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s',
        }}>
          {example.emoji}
        </span>

        <div style={{ flex: 1 }}>
          <div className="accordion-title" style={{ fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
            {example.title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.9rem' }}>
            <Clock size={14} />
            {example.duration}
          </div>
        </div>

        <ChevronDown
          size={22}
          color={example.borderColor}
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </button>

      {/* Sisältö */}
      <div style={{
        maxHeight: open ? '2000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div className="accordion-content-inner">
          <p style={{
            color: '#475569',
            fontSize: '1.05rem',
            lineHeight: '1.75',
            marginBottom: '1.5rem',
            borderTop: `2px solid ${example.colorLight}`,
            paddingTop: '1.25rem',
          }}>
            {example.intro}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {example.items.map((item) => (
              <li key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color={example.borderColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#334155', lineHeight: '1.65' }}>
                  <strong>{item.label}:</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Pricing Box */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            border: `1px solid ${example.borderColor}40`,
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          }}>
            {example.priceBase && (
              <div style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Arvioitu perushinta (alv 0%): <span style={{ textDecoration: 'line-through' }}>{example.priceBase}</span>
              </div>
            )}
            <div style={{ color: 'var(--color-primary)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.2rem' }}>
              {example.priceBase ? 'Hinta kotitalousvähennyksen (35%) jälkeen:' : 'Hinta-arvio:'}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: example.borderColor, marginBottom: '0.5rem' }}>
              {example.priceAfter}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
              {example.priceNote}
            </div>
            
            <div style={{ position: 'relative', width: '100%' }}>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    navigate.push(`/${e.target.value}`);
                  }
                }}
                style={{
                  appearance: 'none',
                  width: '100%',
                  background: example.borderColor,
                  color: 'white',
                  padding: '0.9rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 4px 15px ${example.colorLight}`,
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              >
                <option value="">Varaa ilmainen tutustumiskäynti ▾</option>
                {regions.map((r) => (
                  <option key={r.id} value={r.id} style={{ color: 'black' }}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PricingPackagesList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      {pricingExamples.map((ex) => (
        <PricingAccordion key={ex.number} example={ex} />
      ))}
    </div>
  );
}
