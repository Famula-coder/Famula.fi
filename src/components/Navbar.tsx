import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { regions } from '../data/regions';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Famula Logo" className="logo-img" />
          <span className="sr-only">Famula Etusivu</span>
        </Link>
        <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Etusivu</Link>
          <div className="dropdown">
            <span style={{ cursor: 'default', fontWeight: 600, color: 'var(--color-primary)' }}>Alueet</span>
            <div className="dropdown-content">
              {regions.map(region => (
                <Link key={region.id} to={`/${region.id}`} onClick={closeMenu}>{region.name}</Link>
              ))}
            </div>
          </div>
          <Link to="/palvelut" onClick={closeMenu}>Palvelumme</Link>
          <Link to="/tarinamme" onClick={closeMenu}>Tarinamme</Link>
        </nav>
        <div className="navbar-actions">
          <a href="tel:0447569399" className="btn btn-outline nav-phone" aria-label="Soita meille: 0447569399">
            <Phone size={18} aria-hidden="true" />
            <span className="nav-phone-text">044 756 9399</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem', gap: '0.5rem' }}>
            <a href="https://www.facebook.com/Famula.fi/" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="Famulan Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 'bold' }}>
              FB
            </a>
            <a href="https://www.instagram.com/famula.fi/" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="Famulan Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 'bold' }}>
              IG
            </a>
          </div>
          <button className="mobile-menu-btn" aria-label={isMobileMenuOpen ? "Sulje valikko" : "Avaa valikko"} onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
