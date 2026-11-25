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
  testimonial?: { text: string; author: string };
}

export const cities: CityPage[] = [
  {
    id: 'kuopio',
    regionId: 'pohjois-savo',
    name: 'Kuopio',
    locative: 'Kuopiossa',
    seoTitle: 'Kotihoito ja kotipalvelu Kuopio',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Kuopiossa. Kuopiolainen Famula, aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Julialle: 044 246 0147.',
    h1: 'Kotipalvelu ja kotihoito Kuopiossa',
    paragraphs: [
      'Famulan kotipalvelu auttaa kuopiolaisia ikäihmisiä asumaan omassa kodissaan. Tulemme kotiin sovittuna päivänä ja teemme sen, mikä arjessa on käynyt raskaaksi: siivoamme, käymme kaupassa ja apteekissa, laitamme ruokaa ja lähdemme yhdessä ulkoilemaan.',
      'Famula on kuopiolainen yritys. Vuonna 2025 Suomen Uusyrityskeskukset palkitsi Famulan valtakunnallisena Vuoden Uusyrittäjänä. Kotikaupungissamme haluamme olla se tuttu ja turvallinen apu, jonka puoleen on helppo kääntyä.',
      'Luonasi käy aina sama hoitaja, joten sinun ei tarvitse tutustua uuteen ihmiseen joka kerta. Palvelu oikeuttaa kotitalousvähennykseen, ja myös muualla asuva omainen voi tilata sen vanhemmalleen Kuopioon.',
    ],
    testimonial: {
      text: 'Minä aina odotan näitä päiviä, kun sinä tulet. Siitä tulee niin hyvä mieli, että hykerryttää! Sinä et hoida pelkästään minun kotia, vaan myös minun mieltä.',
      author: 'Omainen, Kuopio',
    },
  },
  {
    id: 'siilinjarvi',
    regionId: 'pohjois-savo',
    name: 'Siilinjärvi',
    locative: 'Siilinjärvellä',
    seoTitle: 'Kotihoito ja kotipalvelu Siilinjärvi',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Siilinjärvellä. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Julialle: 044 246 0147.',
    h1: 'Kotipalvelu ja kotihoito Siilinjärvellä',
    paragraphs: [
      'Famulan kotipalvelu tuo avun arkeen myös Siilinjärvellä. Autamme ikäihmisiä siivouksessa, asioinnissa, ruoanlaitossa ja ulkoilussa, ja olemme seurana silloin, kun päivät tuntuvat pitkiltä.',
      'Käynnit sovitaan niin, että samalla kerralla hoituu se, mikä juuri sillä viikolla on tarpeen: kauppa ja apteekki, pyykit ja siivous tai rauhallinen kahvihetki ja kävely. Luonasi käy aina sama hoitaja Kuopion seudun tiimistämme.',
      'Perushinta on sama kuin Kuopiossa, ja palvelu oikeuttaa kotitalousvähennykseen. Myös muualla asuva omainen voi tilata palvelun vanhemmalleen Siilinjärvelle.',
    ],
  },
  {
    id: 'jyvaskyla',
    regionId: 'keski-suomi',
    name: 'Jyväskylä',
    locative: 'Jyväskylässä',
    seoTitle: 'Kotihoito ja kotipalvelu Jyväskylä',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Jyväskylässä. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), palveluseteli ja kotitalousvähennys 40 %. Soita Leenalle: 050 466 9574.',
    h1: 'Kotipalvelu ja kotihoito Jyväskylässä',
    paragraphs: [
      'Famula tuo kotipalvelun ja kotihoidon jyväskyläläisen ikäihmisen kotiin. Autamme kodin töissä, asioinnissa ja ruoanlaitossa ja olemme seurana, jotta arki sujuu ja kotona on hyvä olla.',
      'Jyväskylässä palvelun voi maksaa myös palvelusetelillä. Famula on palvelusetelituottaja, ja setelin myöntää Keski-Suomen hyvinvointialue palvelutarpeen arvioinnin perusteella. Ilman seteliä palvelun voi ostaa suoraan meiltä ja hyödyntää kotitalousvähennyksen.',
      'Hoitaja on aina sama. Hän tulee sovittuna päivänä, ja hänellä on aikaa pysähtyä. Tukipalvelujen lisäksi teemme Jyväskylässä myös kotisairaanhoitoa. Käyntien määrä sovitaan sinun tarpeesi mukaan, ja sitä voi muuttaa myöhemmin.',
    ],
    testimonial: {
      text: 'Oot sinä melkoinen epeli, kun vesilukonkin korjasit! Olet minun enkelini.',
      author: 'Asiakas, Jyväskylä',
    },
  },
  {
    id: 'laukaa',
    regionId: 'keski-suomi',
    name: 'Laukaa',
    locative: 'Laukaassa',
    seoTitle: 'Kotihoito ja kotipalvelu Laukaa',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Laukaassa. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Leenalle: 050 466 9574.',
    h1: 'Kotipalvelu ja kotihoito Laukaassa',
    paragraphs: [
      'Famulan kotipalvelu tulee kotiin myös Laukaassa. Autamme ikäihmisiä asioinnissa, kodin töissä ja ruoanlaitossa ja olemme seurana arjessa.',
      'Asiointiapu on usein se, mistä yhteistyö alkaa. Käymme yhdessä kaupassa, apteekissa ja terveysasemalla tai hoidamme asiat puolestasi, ja samalla käynnillä ehditään laittaa kotona kuntoon se, mikä on jäänyt tekemättä.',
      'Hoitaja on aina sama tuttu ihminen Keski-Suomen tiimistämme. Palvelu oikeuttaa kotitalousvähennykseen, ja myös muualla asuva omainen voi tilata sen vanhemmalleen Laukaaseen.',
    ],
    testimonial: {
      text: 'Saatiin niin monta asiaa hoidettua! Nyt on taas vapaampi hengittää.',
      author: 'Asiakas, Laukaa',
    },
  },
  {
    id: 'kempele',
    regionId: 'oulu',
    name: 'Kempele',
    locative: 'Kempeleessä',
    seoTitle: 'Kotihoito ja kotipalvelu Kempele',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Kempeleessä. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Almalle: 050 338 7735.',
    h1: 'Kotipalvelu ja kotihoito Kempeleessä',
    paragraphs: [
      'Famulan tuttu hoitaja tulee kotiin myös Kempeleessä. Autamme ikäihmisiä siivouksessa, ruoanlaitossa, asioinnissa ja ulkoilussa, ja teemme sen kiireettä.',
      'Säännöllinen käynti helpottaa kotona asumista: viikkosiivous, kauppa-asiat ja seura hoituvat samalla kertaa. Lähdemme tarvittaessa myös saattajaksi lääkäriin tai muille asioille Ouluun.',
      'Perushinta on sama kuin Oulussa, ja palvelu oikeuttaa kotitalousvähennykseen. Tunnit sovitaan aina sinun tarpeesi mukaan.',
    ],
  },
  {
    id: 'lappeenranta',
    regionId: 'etela-karjala',
    name: 'Lappeenranta',
    locative: 'Lappeenrannassa',
    seoTitle: 'Kotihoito ja kotipalvelu Lappeenranta',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Lappeenrannassa. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Paulalle: 040 417 9978.',
    h1: 'Kotipalvelu ja kotihoito Lappeenrannassa',
    paragraphs: [
      'Famula tarjoaa kotipalvelua ja kotihoitoa ikäihmisille Lappeenrannassa. Tulemme kotiin ja autamme siinä, missä apua tarvitaan: kodin siisteydessä, kauppa- ja apteekkiasioissa, ruoanlaitossa ja ulkoilussa.',
      'Usein pyyntö alkaa yhdestä asiasta, vaikka asiointiavusta, ja samalla käynnillä hoituu moni muukin. Käynnillä ei ole kiire, ja hoitaja on aina sama tuttu ihminen.',
      'Palvelu oikeuttaa kotitalousvähennykseen. Käymme Lappeenrannan lisäksi Taipalsaarella, Imatralla ja Ruokolahdella.',
    ],
    testimonial: {
      text: 'Pyysin teitä asiointiapuun, mutta sainkin samalla apua ihan kaikkeen, mitä keksinkään!',
      author: 'Asiakas, Lappeenranta',
    },
  },
  {
    id: 'imatra',
    regionId: 'etela-karjala',
    name: 'Imatra',
    locative: 'Imatralla',
    seoTitle: 'Kotihoito ja kotipalvelu Imatra',
    metaDescription:
      'Yksityinen kotipalvelu ja kotihoito ikäihmisille Imatralla. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Paulalle: 040 417 9978.',
    h1: 'Kotipalvelu ja kotihoito Imatralla',
    paragraphs: [
      'Famula tarjoaa kotipalvelua ja kotihoitoa ikäihmisille Imatralla. Tulemme kotiin sovittuna päivänä ja autamme siinä, mikä arjessa on käynyt raskaaksi.',
      'Säännöllinen käynti tuo päiviin rytmiä ja seuraa: laitetaan koti kuntoon, käydään kaupassa ja apteekissa ja lähdetään hyvällä säällä kävelylle Vuoksen varteen. Hoitaja on aina sama.',
      'Perushinta on sama kuin Lappeenrannassa, ja palvelu oikeuttaa kotitalousvähennykseen. Käymme myös Ruokolahden puolella.',
    ],
  },
];

export const getCitiesForRegion = (regionId: string) => cities.filter((city) => city.regionId === regionId);
