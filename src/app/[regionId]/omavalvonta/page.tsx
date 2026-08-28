import { Metadata } from 'next';
import { regions } from '../../../data/regions';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export function generateStaticParams() {
  return regions.map((region) => ({
    regionId: region.id,
  }));
}

interface PageProps {
  params: Promise<{ regionId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { regionId } = await params;
  const region = regions.find(r => r.id === regionId);
  const name = region?.name || 'Famula';
  
  return {
    title: `Omavalvontasuunnitelma ${name} | Famula`,
    description: `Lue Famulan omavalvontasuunnitelma alueella ${name}. Tutustu laadunvarmistukseemme ja toimintatapoihimme.`,
  };
}

export default async function OmavalvontaPage({ params }: PageProps) {
  const { regionId } = await params;
  const region = regions.find(r => r.id === regionId);
  
  if (!region) {
    return <div>Aluetta ei löytynyt.</div>;
  }

  const pdfUrl = `/omavalvonta/${regionId}.pdf`;

  return (
    <div style={{ backgroundColor: 'var(--color-background-warm)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container" style={{ paddingTop: '8rem' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <Link href={`/${regionId}`} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
            <ArrowLeft size={16} /> Palaa alueen {region.name} etusivulle
          </Link>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div className="hero-badge" style={{ marginBottom: '1rem' }}>Lakisääteinen asiakirja</div>
              <h1 style={{ color: 'var(--color-primary)', margin: 0, fontSize: '2.5rem' }}>Omavalvontasuunnitelma</h1>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.25rem', marginTop: '0.5rem' }}>Famula {region.name}</p>
            </div>
            
            <a 
              href={pdfUrl} 
              download 
              className="btn btn-primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={20} /> Lataa PDF-tiedostona
            </a>
          </div>

          <div style={{ 
            border: '1px solid rgba(0,0,0,0.1)', 
            borderRadius: '8px', 
            overflow: 'hidden',
            backgroundColor: '#f8f9fa',
            height: '80vh',
            minHeight: '600px'
          }}>
            <object 
              data={pdfUrl} 
              type="application/pdf" 
              width="100%" 
              height="100%"
            >
              <div style={{ padding: '3rem', textAlign: 'center' }}>
                <p>Selaimesi ei tue PDF-tiedostojen suoraa näyttämistä.</p>
                <a href={pdfUrl} className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Lataa suunnitelma tästä</a>
              </div>
            </object>
          </div>
        </div>
        
      </div>
    </div>
  );
}
