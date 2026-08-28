import { Metadata } from 'next';
import Story from '../../views/Story';

export const metadata: Metadata = {
  title: 'Tarinamme | Famula',
  description: 'Famula syntyi halusta auttaa. Lue tarinamme ja tutustu ihaniin työntekijöihimme, jotka tuovat iloa ja turvaa arkeesi.',
  alternates: {
    canonical: 'https://famula.fi/tarinamme',
  }
};

export default function StoryPage() {
  return <Story />;
}
