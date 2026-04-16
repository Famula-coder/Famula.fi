import { Link } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import { regions } from '../data/regions';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="container navbar">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Famula Logo" className="logo-img" />
          <span className="sr-only">Famula Etusivu</span>
        </Link>
        <nav className="navbar-links">
          <Link to="/">Etusivu</Link>
          <div className="dropdown">
            <span style={{ cursor: 'default', fontWeight: 600, color: 'var(--color-primary)' }}>Alueet</span>
            <div className="dropdown-content">
              {regions.map(region => (
                <Link key={region.id} to={`/${region.id}`}>{region.name}</Link>
              ))}
            </div>
          </div>
          <Link to="/palvelut">Palvelumme</Link>
          <Link to="/tarinamme">Tarinamme</Link>
          <a href="/#hinnat" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Hinnat</a>
        </nav>
        <div className="navbar-actions">
          <a href="tel:0447569399" className="btn btn-outline nav-phone" aria-label="Soita meille: 0447569399">
            <Phone size={18} aria-hidden="true" />
            <span>044 756 9399</span>
          </a>
          <button className="mobile-menu-btn" aria-label="Avaa valikko">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
