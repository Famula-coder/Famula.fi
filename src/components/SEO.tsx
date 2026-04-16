import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  schema?: Record<string, unknown>;
}

export const SEO = ({ title, description, schema }: SEOProps) => {
  return (
    <Helmet>
      <title>{title} | Famula</title>
      <meta name="description" content={description} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
