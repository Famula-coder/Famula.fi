export interface RegionData {
  id: string;
  name: string;
  managerName: string;
  phone: string;
  email: string;
  image: string;
  altText: string;
  postalCode: string;
}

export const regions: RegionData[] = [
  {
    id: 'keski-suomi',
    name: 'Keski-Suomi',
    managerName: 'Leena Huusko',
    phone: '050 466 9574',
    email: 'leena.huusko@famula.fi',
    image: '/Huusko_Leena_original_taustaton.png',
    altText: 'Hymyilevä kotisairaanhoitaja Leena Huusko Keski-Suomessa',
    postalCode: '40100',
  },
  {
    id: 'pohjois-savo',
    name: 'Pohjois-Savo',
    managerName: 'Julia Paananen',
    phone: '044 246 0147',
    email: 'julia.paananen@famula.fi',
    image: '/julia.avif',
    altText: 'Hymyilevä kotihoitotiimin vetäjä Julia Paananen Pohjois-Savon alueella',
    postalCode: '70100',
  },
  {
    id: 'oulu',
    name: 'Oulu',
    managerName: 'Alma Marjanen',
    phone: '050 338 7735',
    email: 'alma.marjanen@famula.fi',
    image: '/alma.avif',
    altText: 'Hymyilevä asiantuntija Alma Marjanen auttaa Oulun alueella',
    postalCode: '90100',
  },
  {
    id: 'etela-karjala',
    name: 'Etelä-Karjala',
    managerName: 'Paula Tuikkanen',
    phone: '040 417 9978',
    email: 'paula.tuikkanen@famula.fi',
    image: '/paula.avif',
    altText: 'Kokenut hoitaja Paula Tuikkanen Etelä-Karjalassa',
    postalCode: '53100',
  },
  {
    id: 'uusimaa',
    name: 'Uusimaa',
    managerName: 'Riina Kyllönen',
    phone: '041 459 6866',
    email: 'riina.kyllonen@famula.fi',
    image: '/riina.avif',
    altText: 'Ammatillinen hoivavastaava Riina Kyllönen Uudenmaan alueella',
    postalCode: '00100',
  }
];
