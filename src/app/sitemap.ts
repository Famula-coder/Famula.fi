import { MetadataRoute } from 'next';
import { visibleRegions } from '../data/regions';
import { articles } from '../data/articles';

const BASE_URL = 'https://famula.fi';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', 'tarinamme/', 'toihin-meille/', 'tietopankki/'];
  const staticPages = staticPaths.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
  }));

  const regionPages = visibleRegions.flatMap((region) => {
    const pages = [{ url: `${BASE_URL}/${region.id}/`, lastModified: new Date() }];
    if (region.hasOmavalvonta) {
      pages.push({ url: `${BASE_URL}/${region.id}/omavalvonta/`, lastModified: new Date() });
    }
    return pages;
  });

  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/tietopankki/${article.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...regionPages, ...articlePages];
}
