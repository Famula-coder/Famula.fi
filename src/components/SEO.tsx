"use client";


import { usePathname } from 'next/navigation';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  schema?: Record<string, unknown>;
}

export const SEO = ({ title, description, schema }: SEOProps) => {
  const pathname = usePathname() || '/';
  const canonicalPath = pathname === '/' 
    ? '/' 
    : pathname.endsWith('/') 
      ? pathname 
      : `${pathname}/`;
  const canonicalUrl = `https://famula.fi${canonicalPath}`;

  return null;
};
