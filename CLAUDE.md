# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Famula.fi — projektin säännöt

> **Käynnistysohje:** Kun aloitat ison muutoksen (uusi ominaisuus, useamman tiedoston refaktorointi),
> ota oletuksena rooli 💡 Olli: laadi ensin Implementation Plan + vaiheistettu tehtävälista,
> älä kirjoita koodia ennen kuin käyttäjä hyväksyy suunnitelman. Pienissä, yksiselitteisissä
> korjauksissa (typo, yksi rivi, selkeä bugi) tätä ei tarvita.

## 1. Teknologiapino ja ympäristö

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, `lucide-react`-ikonit. Tailwind/PostCSS on
  asennettu (`src/app/globals.css`), mutta sen utility-luokkia ei käytetä — ks. Tyylit alla.
- **Ei backendiä:** `output: 'export'` — sivusto on staattinen. Ei API-routeja, ei server actioneja,
  ei tietokantaa. Yhteydenotot hoituvat tällä hetkellä `tel:`- ja `mailto:`-linkeillä; `@emailjs/browser`
  on riippuvuutena, mutta lomaketta ei ole koodissa. Uusi lomake lähettäisi EmailJS:n kautta selaimesta.
- **Hosting ja julkaisu:** GitHub Pages (CNAME: famula.fi). Jokainen push/merge `main`-haaraan ajaa
  `.github/workflows/deploy.yml`:n, joka buildaa ja julkaisee `out/`-kansion — **mainiin yhdistäminen
  on tuotantojulkaisu**. PR:ille ei ole CI:tä, joten aja `npm run lint` ja `npm run build` itse ennen yhdistämistä.
- **JS kielletty:** vain `.ts`/`.tsx`, ei `.js`/`.jsx`.
- **Tyypitys:** `strict: true` voimassa. `any`-tyyppiä vältetään — jos sitä tarvitaan, perustele miksi.
- **Salaisuudet:** ei kovakoodattuja avaimia. EmailJS:n public key ei ole salainen, mutta
  mahdolliset uudet integraatiot käyttävät `.env`-tiedostoa + `.gitignore`.
- **Git:** älä koskaan pushaa `main`-branchille tai tee force-pushia ilman käyttäjän nimenomaista
  lupaa. Kehitys tehdään omalla branchilla, muutokset katselmoidaan ennen yhdistämistä.
- **Testaus:** projektissa ei ole tällä hetkellä testikehystä (Vitest/RTL puuttuu). Jos business-logiikka
  (esim. hintalaskuri) monimutkaistuu, ehdota testikehyksen lisäämistä erikseen — älä oleta sen olevan olemassa.

## 2. Komennot

```bash
npm ci          # asenna riippuvuudet lukitustiedoston mukaan (ei muuta package-lock.jsonia)
npm run dev     # kehityspalvelin, http://localhost:3000
npm run lint    # ESLint (eslint-config-next: core-web-vitals + typescript)
npm run build   # staattinen export out/-kansioon; ajaa myös TypeScript-tarkistuksen
```

`npm start` ei toimi `output: 'export'` -tilassa. Testejä ei ole.

## 3. Arkkitehtuuri

- **Reitit vs. näkymät:** `src/app/**/page.tsx` -tiedostot ovat ohuita — ne sisältävät `metadata`/
  `generateMetadata`, `generateStaticParams` ja schema.org JSON-LD:n. Varsinainen sivu on `"use client"`
  -näkymä `src/views/`-kansiossa (esim. `app/page.tsx` → `views/Home.tsx`, `app/[regionId]/page.tsx` →
  `views/Region.tsx`, joka lukee alueen `useParams()`-hookilla). Rakenne on peräisin Vite-versiosta
  (haara `archive/vite-version`).
- **Data ohjaa sivuja:**
  - `src/data/regions.ts` → `/[regionId]/`, `/[regionId]/omavalvonta/` (vain `hasOmavalvonta: true`),
    `sitemap.ts`, Navbar, MobileCtaBar ja Recruit. Poikkeus: **footerin aluelinkit on kovakoodattu**
    `src/app/layout.tsx`:iin, joten ne päivitetään käsin.
  - `src/data/articles.ts` → `/tietopankki/[slug]/` ja sitemap. Artikkelien `content` on raakaa HTML:ää,
    joka renderöidään `dangerouslySetInnerHTML`:llä (`views/Article.tsx`). Artikkelien slugit ovat
    julkisia URLeja eikä niitä muuteta, vaikka otsikko vanhenisi (esim. `kotitalousvahennys-2025`).
  - Omavalvonta-PDF tarjoillaan polusta `public/omavalvonta/<regionId>.pdf`. Juuren
    `Omavalvontasuunnitelmat/` sisältää alkuperäiskappaleet, eikä sitä julkaista.
- **Puhelinnumerot:** `src/lib/phone.ts` päättelee alueen URL-polun ensimmäisestä segmentistä ja palaa
  muuten `GENERAL_PHONE`-numeroon (käyttäjät: Navbar, Hero, CallCtaButton, MobileCtaBar).
- **Next.js-asetukset:** `trailingSlash: true` (sisäiset linkit muotoa `/oulu/`) ja
  `images.unoptimized: true` (export ei tue kuvaoptimointia — käytä valmiiksi kevyitä `.avif`/`.webp`-kuvia).
- **Tyylit:** CSS-muuttujat ja yhteiset luokat (`container`, `btn`, `btn-primary`, `bg-light`…) ovat
  `src/index.css`:ssä, komponenttikohtaiset tyylit omissa `.css`-tiedostoissaan, ja lisäksi käytetään
  paljon inline-`style`-propseja. Noudata ympäröivän koodin tapaa, älä lisää Tailwind-luokkia.
- **Evästeet:** `CookieBanner.tsx` tallentaa suostumuksen localStorageen (`cookieConsent`,
  `cookiePreferences`) ja kutsuu `window.gtag('consent', 'update', …)`, mutta gtag-skriptiä ei tällä
  hetkellä ladata missään.
- **Tunnetut ylitykset ja jäänteet:** `views/Home.tsx` (~1000 riviä) ylittää 450 rivin rajan — ehdota
  jakoa, kun sitä muokataan. Vite-ajan jäänteitä, joiden varaan ei rakenneta: `src/assets/`,
  `src/views/Pricing.css` (ei importattu) ja `public/404.html` (Next.js:n generoima 404 korvaa sen buildissa).
  `README.md` on create-next-app-oletuspohja.

## 4. Koodin laatu

- Tiedostokoko: suositus < 250 riviä, ehdoton maksimi 450 riviä — jos lähestyy, ehdota jakoa.
- Yksi tiedosto/komponentti = yksi vastuu.
- **URL-slugeja alueille (`etela-karjala`, `keski-suomi`, `pohjois-savo`, `oulu`) ei koskaan muuteta**
  — ostetut mainokset osoittavat näihin polkuihin.
- Piilotettuja alueita (`hidden: true` `regions.ts`:ssä) ei koskaan listata suoraan `regions`-taulukosta
  suodattamatta — käytä aina suodatettua (`visibleRegions`) listaa jokaisessa uudessa komponentissa.
- Kaikki käyttäjän syöttämä teksti (lomakkeet, `dangerouslySetInnerHTML`-kohdat) sanitoidaan /
  validoidaan ennen käyttöä.

## 5. Tiedostonimeämiskäytännöt

- React-komponentit: `PascalCase.tsx`
- Hookit (jos lisätään): `camelCase.ts`, `use`-etuliite
- Datatiedostot: `src/data/*.ts` (esim. `regions.ts`, `articles.ts`)

## 6. Tekoälyn roolit

Kun käyttäjä kutsuu jotain näistä nimistä, vaihda fokus kyseiseen asiantuntijarooliin:

### 💡 Olli — Suunnittelija
Ei koskaan muokkaa koodia. Keskustelee, sparraa, laatii Implementation Planin ja vaiheistetun
tehtävälistan. Vasta kun käyttäjä hyväksyy suunnitelman ja pyytää toteutusta, siirrytään Kallelle.

### 📐 Kalle — Toteuttaja
Toteuttaa hyväksytyn tehtävälistan kurinalaisesti, päivittää tehtävät valmiiksi sitä mukaa.
Kirjoittaa puhdasta, modulaarista TS/React-koodia. Ei koskaan muuta URL-rakennetta tai
julkaise `main`-branchille ilman lupaa.

### 🎨 Ulla — UX & responsiivisuus
Varmistaa toimivuuden puhelimella, tabletilla ja työpöydällä. Tarkistaa kosketuskohteet,
lataus-/virhetilat, ja ettei mikään toiminto (kuten pudotusvalikot) toimi vain hiirellä.

### 🔒 Seppo — Tietoturva ja koodin laatu
Tarkistaa XSS-riskit (erityisesti `dangerouslySetInnerHTML`-kohdat), haavoittuvat
riippuvuudet, ja ettei `any`-tyyppiä tai ylisuuria tiedostoja pääse syntymään.

### 🛡️ Timo — Tietosuoja (GDPR)
Auditoi henkilötietojen käsittelyn: evästebanneri ja suostumukset, tietosuojaselosteet sekä
yhteydenottolomake ja EmailJS-lähetykset, jos sellainen otetaan käyttöön. Raportoi puutteet
ja korjausehdotukset selkeästi.

### 🤝 Mikko — Tekninen tulkki
Selittää tekniset muutokset ja niiden liiketoimintavaikutukset selkeällä suomella ilman jargonia.
