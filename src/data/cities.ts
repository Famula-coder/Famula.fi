export interface CityPage {
  /** URL-segmentti alueen alla, esim. /pohjois-savo/siilinjarvi/ */
  id: string;
  regionId: string;
  name: string;
  /** Paikkakunta muodossa "Siilinjärvellä". */
  locative: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  paragraphs: string[];
}

export const cities: CityPage[] = [
  {
    id: 'siilinjarvi',
    regionId: 'pohjois-savo',
    name: 'Siilinjärvi',
    locative: 'Siilinjärvellä',
    seoTitle: 'Kotihoito ja kotipalvelu Siilinjärvi',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Siilinjärvellä. Aina sama tuttu hoitaja, 39,95 €/h (alv 0 %), kotitalousvähennys 35 %. Soita Julialle: 044 246 0147.',
    h1: 'Kotipalvelu ja kotihoito Siilinjärvellä',
    paragraphs: [
      'Famulan kotipalvelu tuo avun arkeen myös Siilinjärvellä. Autamme ikäihmisiä siivouksessa, asioinnissa, ruoanlaitossa ja ulkoilussa, ja olemme seurana silloin, kun päivät tuntuvat pitkiltä.',
      'Käynnit sovitaan niin, että samalla kerralla hoituu se, mikä juuri sillä viikolla on tarpeen: kauppa ja apteekki, pyykit ja siivous tai rauhallinen kahvihetki ja kävely. Luonasi käy aina sama hoitaja Kuopion seudun tiimistämme.',
      'Hinta on sama kuin Kuopiossa, ja palvelu oikeuttaa kotitalousvähennykseen. Myös muualla asuva omainen voi tilata palvelun vanhemmalleen Siilinjärvelle.',
    ],
  },
  {
    id: 'kempele',
    regionId: 'oulu',
    name: 'Kempele',
    locative: 'Kempeleessä',
    seoTitle: 'Kotihoito ja kotipalvelu Kempele',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Kempeleessä. Aina sama tuttu hoitaja, 39,95 €/h (alv 0 %), kotitalousvähennys 35 %. Soita Almalle: 050 338 7735.',
    h1: 'Kotipalvelu ja kotihoito Kempeleessä',
    paragraphs: [
      'Famulan tuttu hoitaja tulee kotiin myös Kempeleessä. Autamme ikäihmisiä siivouksessa, ruoanlaitossa, asioinnissa ja ulkoilussa, ja teemme sen kiireettä.',
      'Säännöllinen käynti helpottaa kotona asumista: viikkosiivous, kauppa-asiat ja seura hoituvat samalla kertaa. Lähdemme tarvittaessa myös saattajaksi lääkäriin tai muille asioille Ouluun.',
      'Hinta on sama kuin Oulussa, ja palvelu oikeuttaa kotitalousvähennykseen. Tunnit sovitaan aina sinun tarpeesi mukaan.',
    ],
  },
  {
    id: 'imatra',
    regionId: 'etela-karjala',
    name: 'Imatra',
    locative: 'Imatralla',
    seoTitle: 'Kotihoito ja kotipalvelu Imatra',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Imatralla. Aina sama tuttu hoitaja, 39,95 €/h (alv 0 %), kotitalousvähennys 35 %. Soita Paulalle: 040 417 9978.',
    h1: 'Kotipalvelu ja kotihoito Imatralla',
    paragraphs: [
      'Famula tarjoaa kotipalvelua ja kotihoitoa ikäihmisille Imatralla. Tulemme kotiin sovittuna päivänä ja autamme siinä, mikä arjessa on käynyt raskaaksi.',
      'Säännöllinen käynti tuo päiviin rytmiä ja seuraa: laitetaan koti kuntoon, käydään kaupassa ja apteekissa ja lähdetään hyvällä säällä kävelylle Vuoksen varteen. Hoitaja on aina sama.',
      'Hinta on sama kuin Lappeenrannassa, ja palvelu oikeuttaa kotitalousvähennykseen. Käymme myös Ruokolahden puolella.',
    ],
  },
];

export const getCitiesForRegion = (regionId: string) => cities.filter((city) => city.regionId === regionId);
