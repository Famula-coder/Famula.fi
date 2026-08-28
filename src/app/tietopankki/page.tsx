import { Metadata } from 'next';
import KnowledgeBase from '../../views/KnowledgeBase';

export const metadata: Metadata = {
  title: 'Tietopankki | Famula',
  description: 'Famulan tietopankista löydät hyödyllistä tietoa ikäihmisten kotihoidosta, tuista, verovähennyksistä ja turvallisesta arjesta.',
  alternates: {
    canonical: 'https://famula.fi/tietopankki',
  }
};

export default function KnowledgeBasePage() {
  return <KnowledgeBase />;
}
