export interface PageAngle {
  /** Nostettavan teeman väliotsikko. */
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  tips?: { heading: string; items: string[] };
  /** "Aina sama hoitaja" sanottuna sivun kulman mukaan. */
  sameCarer?: string;
  /** Tietopankin artikkelit, jotka esitellään vain tällä sivulla. */
  articleSlugs: string[];
  articlesHeading: string;
  priceHeading?: string;
  priceExample?: string;
  /** Kaupunkisivun lohkojärjestys: A palvelu edellä, B ihminen edellä, C omainen edellä. */
  layout?: 'A' | 'B' | 'C';
}

export const regionAngles: Record<string, PageAngle> = {
  'pohjois-savo': {
    heading: 'Kotihoidon tukipalvelut kunnallisen kotihoidon rinnalla',
    paragraphs: [
      'Kunnallinen kotihoito keskittyy siihen, mikä on terveyden kannalta välttämätöntä: lääkkeiden jakoon, haavahoitoihin ja perushygieniaan. Käynnit ovat usein lyhyitä, ja hoitaja voi vaihtua.',
      'Famulan kotihoidon tukipalvelut eivät kilpaile tämän kanssa, vaan täydentävät sitä. Meillä on aikaa keittää kahvit, kuunnella ja tehdä kodin työt rauhassa. Moni asiakkaamme käyttääkin molempia: hyvinvointialue hoitaa sairaanhoidon, ja Famulan tuttu hoitaja huolehtii kodista, asioinnista ja seurasta.',
    ],
    image: '/images/katsellaanvalokuvia.webp',
    imageAlt: 'Famulan hoitaja ja asiakas katselevat yhdessä valokuvia pöydän ääressä',
    tips: {
      heading: 'Mitä me tuomme lisää',
      items: [
        'Aikaa: käynnillä ei katsota kelloa',
        'Sama nimetty hoitaja joka kerta',
        'Kodin työt, asiointi, ruoanlaitto ja ulkoilu samalla käynnillä',
        'Joustoa: voimme lähteä yhdessä kauppaan, ulos tai vaikka teatteriin',
      ],
    },
    articleSlugs: ['yksityinen-kotipalvelu-vs-kunnallinen-kotihoito', 'nain-valitset-luotettavan-kotipalvelun'],
    articlesHeading: 'Lue lisää: yksityinen vai kunnallinen?',
  },
  'keski-suomi': {
    heading: 'Kaksi tapaa maksaa kotihoidon tukipalvelut',
    paragraphs: [
      'Keski-Suomessa kotihoidon tukipalvelut voi maksaa kahdella tavalla, ja palvelu sekä hoitaja ovat molemmissa samat.',
      'Jyväskylässä Famula on palvelusetelituottaja. Jos hyvinvointialue on myöntänyt sinulle palvelusetelin, voit valita meidät palveluntuottajaksi. Ilman seteliä ostat palvelun suoraan meiltä ja voit hakea kotitalousvähennystä. Palvelusetelillä hankitusta palvelusta kotitalousvähennystä ei saa, ei myöskään setelin omavastuuosuudesta. Erikseen ostamistasi ja kokonaan itse maksamistasi lisäpalveluista vähennyksen voi saada.',
    ],
    image: '/images/kahvihetki3.webp',
    imageAlt: 'Famulan hoitaja istuu kahvipöydässä asiakkaiden kanssa',
    tips: {
      heading: 'Näin valitset',
      items: [
        'Sinulla on palveluseteli: valitse Famula tuottajaksi ja soita aluevetäjälle',
        'Sinulla ei ole seteliä: osta palvelu suoraan ja hae kotitalousvähennystä',
        'Tarvitset muutakin kuin seteli kattaa: lisäpalvelut voi ostaa itse',
      ],
    },
    articleSlugs: ['kotitalousvahennys-2025', 'mita-kotipalvelu-maksaa'],
    articlesHeading: 'Lue lisää: hinta ja kotitalousvähennys',
  },
  oulu: {
    heading: 'Turvallinen arki omassa kodissa',
    paragraphs: [
      'Kaatuminen on monen omaisen suurin huoli. Kodin pienillä muutoksilla riskiä voi pienentää selvästi, mutta suurin turva on toisen ihmisen läsnäolo.',
      'Famulan hoitaja on tukena kodin askareissa, suihkukäynneillä, kauppareissulla ja talvisella kävelylenkillä. Koska hoitaja on aina sama, hän huomaa myös, jos liikkuminen tai vointi muuttuu, ja kertoo siitä omaisille.',
    ],
    image: '/images/ystavanpaiva.webp',
    imageAlt: 'Famulan hoitaja ja asiakas kävelevät käsikynkkää kesäisellä tiellä',
    tips: {
      heading: 'Viisi tapaa tehdä kodista turvallisempi',
      items: [
        'Poista liukkaat matot tai kiinnitä niiden alle liukuesteet',
        'Valaise yöaikainen reitti makuuhuoneesta vessaan',
        'Asenna tukikahvat suihkuun ja wc-istuimen viereen',
        'Siirrä päivittäin tarvittavat tavarat käden ulottuville',
        'Käytä sisällä tukevia sisäkenkiä tai jarrusukkia',
      ],
    },
    articleSlugs: ['ikaihmisen-kaatumisen-ehkaisy-kodin-turvallisuus', 'turvallinen-laakehoito-kotona'],
    articlesHeading: 'Lue lisää: turvallisuus kotona',
  },
  'etela-karjala': {
    heading: 'Tukea omaishoitajalle ja koko perheelle',
    paragraphs: [
      'Omaishoitajan työ on sitovaa, ja jatkuva huoli läheisestä uuvuttaa vahvimmankin. Kotihoidon tukipalveluistamme saa apua myös silloin, kun omaishoitaja tarvitsee omaa aikaa: muutaman tunnin asiointia varten, illan vapaaksi tai koko viikonlopuksi.',
      'Tutustumme läheisesi tarpeisiin ja lääkitykseen etukäteen. Kotiin tulee aina sama tuttu ihminen, ja arki jatkuu kuten ennenkin: laitamme ruokaa, ulkoilemme ja vietämme aikaa yhdessä.',
    ],
    image: '/images/kukkienkeruus3.webp',
    imageAlt: 'Famulan hoitaja ja asiakas keräävät kukkia pihalla',
    tips: {
      heading: 'Näin lomitus toimii',
      items: [
        'Sovimme etukäteen tutustumiskäynnin',
        'Käymme läpi päivän rytmin, ruokailut ja lääkkeet',
        'Tilaat sijaisen silloin kun tarvitset, ilman pitkiä hakemuksia',
      ],
    },
    articleSlugs: ['omaishoidon-lomitus-yksityiselta', 'milloin-palvelutaloon-vanhuksen-kotona-asumisen-tukeminen'],
    articlesHeading: 'Lue lisää: omaisen jaksaminen',
  },
};

import { cityAngles } from './cityAngles';

export { cityAngles };

/** Sivut, joiden teemaan artikkeli kuuluu - käytetään artikkelin sisäisiin linkkeihin. */
export function getPagesForArticle(slug: string): { href: string; key: string }[] {
  const regionPages = Object.entries(regionAngles)
    .filter(([, angle]) => angle.articleSlugs.includes(slug))
    .map(([regionId]) => ({ href: `/${regionId}/`, key: regionId }));
  const cityPages = Object.entries(cityAngles)
    .filter(([, angle]) => angle.articleSlugs.includes(slug))
    .map(([path]) => ({ href: `/${path}/`, key: path }));
  return [...cityPages, ...regionPages];
}
