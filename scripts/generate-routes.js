import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('index.html not found in dist/. Please run build first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Parse regions
const regionsFile = fs.readFileSync(path.join(__dirname, '../src/data/regions.ts'), 'utf-8');
const regionIds = [...regionsFile.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

// Parse articles
const articlesFile = fs.readFileSync(path.join(__dirname, '../src/data/articles.ts'), 'utf-8');
const articleSlugs = [...articlesFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

const staticRoutes = [
  'hinnasto',
  'tarinamme',
  'tietopankki',
  'palvelut',
  'ota-yhteytta',
  'toihin-meille'
];

const allRoutes = [
  ...staticRoutes,
  ...regionIds,
  ...articleSlugs.map(slug => `tietopankki/${slug}`)
];

allRoutes.forEach(route => {
  const dirPath = path.join(distDir, route);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), indexHtml);
  console.log(`Generated route fallback for: /${route}`);
});

console.log('✅ All static route fallbacks generated successfully for GitHub Pages!');
