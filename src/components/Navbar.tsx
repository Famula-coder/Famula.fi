"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { visibleRegions } from '../data/regions';
import { GENERAL_PHONE, getRegionFromPathname, toTelHref } from '../lib/phone';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);
  const pathname = usePathname();
  const region = getRegionFromPathname(pathname);
  const phone = region?.phone ?? GENERAL_PHONE;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const closeRegions = () => setIsRegionsOpen(false);

  return (
    <header className={`navbar-container ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <Image src={`/logo.png`} alt="Famula Logo" className="logo-img" width={800} height={800} />
          <span className="sr-only">Famula Etusivu</span>
        </Link>
        <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" onClick={closeMenu}>Etusivu</Link>
          <div className={`dropdown ${isRegionsOpen ? 'open' : ''}`}>
            <button
              type="button"
              onClick={() => setIsRegionsOpen(!isRegionsOpen)}
              aria-expanded={isRegionsOpen}
              style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
            >
              Alueet <ChevronDown size={16} />
            </button>
            <div className="dropdown-content">
              {visibleRegions.map(region => (
                <Link key={region.id} href={`/${region.id}/`} onClick={() => { closeMenu(); closeRegions(); }}>{region.name}</Link>
              ))}
            </div>
          </div>
          <Link href="/#palvelut" onClick={closeMenu}>Palvelumme</Link>
          <Link href="/tarinamme/" onClick={closeMenu}>Tarinamme</Link>
          <Link href="/toihin-meille/" onClick={closeMenu}>Töihin meille</Link>
          <Link href="/tietopankki/" onClick={closeMenu}>Tietopankki</Link>
        </nav>
        <div className="navbar-actions">
          <a href={toTelHref(phone)} className="btn btn-primary nav-cta" aria-label={`Varaa ilmainen tutustumiskäynti, soita: ${phone}`}>
            <Phone size={18} aria-hidden="true" />
            <span className="nav-cta-text">Varaa ilmainen tutustumiskäynti</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem', gap: '0.5rem' }}>
            <a href="https://www.facebook.com/Famula.fi/" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="Famulan Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 'bold' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/famula.fi/" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="Famulan Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 'bold' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
          <button className="mobile-menu-btn" aria-label={isMobileMenuOpen ? "Sulje valikko" : "Avaa valikko"} aria-expanded={isMobileMenuOpen} onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
