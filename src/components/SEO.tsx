import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  schema?: Record<string, unknown>;
}

export const SEO = ({ title, description, schema }: SEOProps) => {
  const location = useLocation();
  const canonicalPath = location.pathname === '/' 
    ? '/' 
    : location.pathname.endsWith('/') 
      ? location.pathname 
      : `${location.pathname}/`;
  const canonicalUrl = `https://famula.fi${canonicalPath}`;

  return (
    <Helmet>
      <title>{title} | Famula</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
