import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "../index.css";
import "../App.css";
import "./globals.css";
import Link from 'next/link';

import Navbar from '../components/Navbar';
import CookieBanner from '../components/CookieBanner';
import MobileCtaBar from '../components/MobileCtaBar';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://famula.fi'),
  title: "Famula | Kiireetöntä kotipalvelua ja hoivaa ikäihmisille",
  description: "Famulan kotipalvelu tarjoaa luotettavaa, kiireetöntä ja lämminhenkistä apua arkeen. Aina sama, tuttu hoitaja kotiisi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${inter.variable} ${caveat.variable} antialiased`}>
        <div className="app">
          <Navbar />
          <CookieBanner />
          <main className="main-content">
            {children}
          </main>
          <footer className="text-center" style={{ backgroundColor: 'var(--color-secondary)', padding: '3rem', color: 'white', marginTop: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/keski-suomi/" style={{ color: 'white', textDecoration: 'none' }}>Keski-Suomi</Link>
              <Link href="/pohjois-savo/" style={{ color: 'white', textDecoration: 'none' }}>Pohjois-Savo</Link>
              <Link href="/oulu/" style={{ color: 'white', textDecoration: 'none' }}>Oulu</Link>
              <Link href="/etela-karjala/" style={{ color: 'white', textDecoration: 'none' }}>Etelä-Karjala</Link>
              {/* <Link href="/uusimaa/" style={{ color: 'white', textDecoration: 'none' }}>Uusimaa</Link> */}
              {/* Uusimaa piilotettu toistaiseksi - hidden: true regions.ts tiedostossa */}
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
              <a href="https://famula-asiakirjahallinta--famula-asiakirjahallinta.europe-west4.hosted.app/p/pub_doc-1777552123067-h23awcnzj" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                Tietosuojaseloste
              </a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
              <a href="https://oma.easygdpr.fi/privacy_policies/cd6a33cf-1169-4ba6-8527-7d7d15fa96fc/public/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                Tietosuojaseloste sosiaalihuollon asiakkaille
              </a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
              <a href="https://drive.google.com/drive/folders/1S_qB2e4bGDWe-fZXP5Xl2B6hvNXFMHNg?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                Omavalvontasuunnitelmat
              </a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
              <a href="https://www.facebook.com/Famula.fi/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Facebook
              </a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
              <a href="https://www.instagram.com/famula.fi/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Instagram
              </a>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>
              &copy; {new Date().getFullYear()} Famula Oy. Kaikki oikeudet pidätetään.
            </p>
          </footer>
          <MobileCtaBar />
        </div>
      </body>
    </html>
  );
}
