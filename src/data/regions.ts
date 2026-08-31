export interface RegionData {
  id: string;
  name: string;
  hidden?: boolean;
  managerName: string;
  phone: string;
  email: string;
  image: string;
  altText: string;
  postalCode: string;
  locativeName: string;
  genitiveName: string;
  descriptionTitle?: string;
  descriptionText?: string;
  hasOmavalvonta?: boolean;
  /** Alueen suurin kaupunki - käytetään hakukoneille (schema.org addressLocality). */
  mainCity?: string;
  /** Kunnat joissa alue oikeasti palvelee (schema.org areaServed). */
  areaServed?: string[];
}

export const regions: RegionData[] = [
  {
    id: 'keski-suomi',
    name: 'Keski-Suomi',
    managerName: 'Leena Huusko',
    phone: '050 466 9574',
    email: 'leena.huusko@famula.fi',
    image: `/Huusko_Leena_original_taustaton.png`,
    altText: 'Hymyilevä kotisairaanhoitaja Leena Huusko Keski-Suomessa',
    postalCode: '40100',
    locativeName: 'Keski-Suomessa',
    genitiveName: 'Keski-Suomen',
    descriptionTitle: 'Luotettava yksityinen kotipalvelu ja kotihoito – Keski-Suomi',
    descriptionText: 'Famula Keski-Suomi tarjoaa kiireetöntä ja sydämellistä kotihoidon tukipalvelua Jyväskylässä, Jämsässä, Laukaassa, Muuramessa, Äänekoskella ja näiden lähialueilla. Olipa tarpeenasi ikäihmisten arjen apu, siivousapu tai kokonaisvaltainen yksityinen kotihoito, ammattilaisemme ovat tukenasi.\n\nMeille tärkeintä on aito kohtaaminen ja turvallinen olo. Kuljemme rinnallasi luotettavasti ja ihmistä kunnioittaen.',
    hasOmavalvonta: true,
    mainCity: 'Jyväskylä',
    areaServed: ['Jyväskylä', 'Jämsä', 'Laukaa', 'Muurame', 'Äänekoski'],
  },
  {
    id: 'pohjois-savo',
    name: 'Pohjois-Savo',
    managerName: 'Julia Paananen',
    phone: '044 246 0147',
    email: 'julia.paananen@famula.fi',
    image: `/julia.avif`,
    altText: 'Hymyilevä kotihoitotiimin vetäjä Julia Paananen Pohjois-Savossa',
    postalCode: '70100',
    locativeName: 'Pohjois-Savossa',
    genitiveName: 'Pohjois-Savon',
    descriptionTitle: 'Kiireetön kotihoito ja arjen tukipalvelut – Pohjois-Savo',
    descriptionText: 'Etsitkö luotettavaa kotihoitoa ikäihmiselle Savon sydämessä? Famulan yksityinen kotihoito ja arjen tukipalvelut tuovat avun suoraan kotiovelle Kuopiossa ja Siilinjärvellä.\n\nPalvelemme lämpimästi ja ammattitaidolla – aina siten, että sinulla on kotonasi tuttu ja turvallinen omahoitaja.',
    hasOmavalvonta: true,
    mainCity: 'Kuopio',
    areaServed: ['Kuopio', 'Siilinjärvi'],
  },
  {
    id: 'oulu',
    name: 'Oulu',
    managerName: 'Alma Marjanen',
    phone: '050 338 7735',
    email: 'alma.marjanen@famula.fi',
    image: `/alma.avif`,
    altText: 'Hymyilevä asiantuntija Alma Marjanen auttaa Oulussa',
    postalCode: '90100',
    locativeName: 'Oulussa',
    genitiveName: 'Oulun',
    descriptionTitle: 'Luotettava kotipalvelu ja kotihoito ikäihmisille – Oulun seutu',
    descriptionText: 'Etsitkö kiireetöntä apua ikääntyvälle läheisellesi? Famulan yksityinen kotihoito tarjoaa turvallista seuraa ja arjen tukipalveluita laajasti Oulussa, Kempeleessä, Limingassa ja Muhoksella.\n\nOlipa kyseessä viikoittainen siivousapu, kaupassakäyntiseura tai päivittäinen kotihoidon tukipalvelu, räätälöimme avun juuri teille sopivaksi. Meillä hoitaja ei vaihdu jatkuvasti, vaan luonasi käy aina sama tuttu ammattilainen. Kaikki palvelumme oikeuttavat kotitalousvähennykseen.',
    hasOmavalvonta: true,
    mainCity: 'Oulu',
    areaServed: ['Oulu', 'Kempele', 'Liminka', 'Muhos'],
  },
  {
    id: 'etela-karjala',
    name: 'Etelä-Karjala',
    managerName: 'Paula Tuikkanen',
    phone: '040 417 9978',
    email: 'paula.tuikkanen@famula.fi',
    image: `/paula.avif`,
    altText: 'Kokenut hoitaja Paula Tuikkanen Etelä-Karjalassa',
    postalCode: '53100',
    locativeName: 'Etelä-Karjalassa',
    genitiveName: 'Etelä-Karjalan',
    descriptionTitle: 'Yksityinen kotihoito ja kotipalvelu – Etelä-Karjala',
    descriptionText: 'Turvallinen ja luotettava, sellainen on Famula. Tarjoamme laadukasta kotihoitoa ja kotihoidon tukipalveluita Lappeenrannassa, Imatralla, Taipalsaarella ja Ruokolahdella. Ikäihmisten arjen apu on sydämenasiamme koko Etelä-Karjalan alueella.\n\nTeemme työmme kiireettömästi, lämpimästi kohdaten ja asiakkaan toiveet huomioiden. Kanssamme tunnet olosi turvalliseksi.',
    hasOmavalvonta: true,
    mainCity: 'Lappeenranta',
    areaServed: ['Lappeenranta', 'Imatra', 'Taipalsaari', 'Ruokolahti'],
  },
  {
    id: 'uusimaa',
    name: 'Uusimaa',
    hidden: true,
    managerName: 'Riina Kyllönen',
    phone: '041 459 6866',
    email: 'riina.kyllonen@famula.fi',
    image: `/riina.avif`,
    altText: 'Ammatillinen hoivavastaava Riina Kyllönen Uudellamaalla',
    postalCode: '00100',
    locativeName: 'Uudellamaalla',
    genitiveName: 'Uudenmaan',
    descriptionTitle: 'Luotettava kotihoito ja kotipalvelu – Uusimaa',
    descriptionText: 'Famula tarjoaa kiireetöntä ja sydämellistä yksityistä kotihoitoa koko pääkaupunkiseudulla. Palvelemme joustavasti ja ihmisläheisesti Helsingissä, Espoossa ja Vantaalla, sekä laajasti kehyskunnissa kuten Keravalla, Tuusulassa, Järvenpäässä ja Kirkkonummella.\n\nMeille tärkeintä on aito kohtaaminen ja turvallinen olo. Kuljemme rinnallasi luotettavasti ja ihmistä kunnioittaen, jotta asuminen omassa kodissa on turvallista ja mukavaa mahdollisimman pitkään.',
  }
];

/** Alueet joita näytetään käyttäjille - jättää pois piilotetut (esim. ei vielä aktiivinen palvelualue). */
export const visibleRegions: RegionData[] = regions.filter(region => !region.hidden);
