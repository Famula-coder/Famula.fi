import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Region from './pages/Region';
import Story from './pages/Story';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palvelut" element={<Services />} />
          <Route path="/tarinamme" element={<Story />} />
          <Route path="/:regionId" element={<Region />} />
        </Routes>
      </main>
      <footer className="bg-primary text-center" style={{ padding: '3rem', color: 'white', marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Link to="/keski-suomi" style={{ color: 'white', textDecoration: 'none' }}>Keski-Suomi</Link>
          <Link to="/pohjois-savo" style={{ color: 'white', textDecoration: 'none' }}>Pohjois-Savo</Link>
          <Link to="/oulu" style={{ color: 'white', textDecoration: 'none' }}>Oulu</Link>
          <Link to="/etela-karjala" style={{ color: 'white', textDecoration: 'none' }}>Etelä-Karjala</Link>
          <Link to="/uusimaa" style={{ color: 'white', textDecoration: 'none' }}>Uusimaa</Link>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          fontSize: '0.875rem',
        }}>
          <a
            href="https://oma.easygdpr.fi/file/public/privacy-policies/152161cd-d72e-46e1-b50d-3ece0eb40686"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'white')}
            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            Tietosuojaseloste
          </a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a
            href="https://oma.easygdpr.fi/privacy_policies/cd6a33cf-1169-4ba6-8527-7d7d15fa96fc/public/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'white')}
            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            Tietosuojaseloste sosiaalihuollon asiakkaille
          </a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a
            href="https://drive.google.com/drive/folders/1S_qB2e4bGDWe-fZXP5Xl2B6hvNXFMHNg?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'white')}
            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            Omavalvontasuunnitelmat
          </a>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>
          &copy; {new Date().getFullYear()} Famula Oy. Kaikki oikeudet pidätetään.
        </p>
      </footer>
    </div>
  );
}

export default App;
