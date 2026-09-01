"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ChangeEvent } from 'react';
import { Phone } from 'lucide-react';
import { visibleRegions } from '../data/regions';
import { GENERAL_PHONE, getRegionFromPathname, toTelHref } from '../lib/phone';

const STORAGE_KEY = 'famula-valittu-alue';

const MobileCtaBar = () => {
  const pathname = usePathname();
  const pageRegion = getRegionFromPathname(pathname);
  const [selectedRegionId, setSelectedRegionId] = useState('');

  useEffect(() => {
    if (pageRegion) return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // Luetaan muistettu valinta vasta hydraation jälkeen, ettei SSR- ja
      // client-render eroa toisistaan - siksi setState täällä on tarkoituksellista.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored) setSelectedRegionId(stored);
    } catch {
      // localStorage voi olla estetty selaimen asetuksista - jatketaan ilman muistia
    }
  }, [pageRegion]);

  const selectedRegion = visibleRegions.find((r) => r.id === selectedRegionId);
  const phone = pageRegion?.phone ?? selectedRegion?.phone ?? GENERAL_PHONE;

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRegionId(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ei voida tallentaa - ei vaikuta soittopainikkeen toimintaan
    }
  };

  return (
    <div className="mobile-cta-bar">
      {!pageRegion && (
        <div className="cta-region-select">
          <select value={selectedRegionId} onChange={handleSelect} aria-label="Valitse alueesi">
            <option value="">Alueesi ▾</option>
            {visibleRegions.map((r) => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </div>
      )}
      <a href={toTelHref(phone)} className="cta-call">
        <Phone size={18} />
        Varaa käynti
      </a>
    </div>
  );
};

export default MobileCtaBar;
