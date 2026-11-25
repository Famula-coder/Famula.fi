import Script from 'next/script';
import type { RegionData } from '../../data/regions';

const CONSENT_DEFAULTS = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
  gtag('js', new Date());
`;

const RegionTags = ({ region }: { region: RegionData }) => (
  <>
    {region.gtmId && (
      <>
        <Script id="gtm-init" strategy="afterInteractive">{CONSENT_DEFAULTS}</Script>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${region.gtmId}`}
        />
      </>
    )}
    {region.googleAdsId && (
      <>
        <Script id="gads-init" strategy="afterInteractive">
          {`${CONSENT_DEFAULTS}
  gtag('config', '${region.googleAdsId}');`}
        </Script>
        <Script
          id="gads-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${region.googleAdsId}`}
        />
      </>
    )}
  </>
);

export default RegionTags;
