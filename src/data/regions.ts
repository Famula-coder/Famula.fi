export interface RegionData {
  id: string;
  name: string;
  managerName: string;
  phone: string;
  email: string;
  image: string;
  altText: string;
  postalCode: string;
  locativeName: string;
  descriptionTitle?: string;
  descriptionText?: string;
}

export const regions: RegionData[] = [
  {
    id: 'keski-suomi',
    name: 'Keski-Suomi',
    managerName: 'Leena Huusko',
    phone: '050 466 9574',
    email: 'leena.huusko@famula.fi',
    image: `${import.meta.env.BASE_URL}Huusko_Leena_original_taustaton.png`,
    altText: 'Hymyilevä kotisairaanhoitaja Leena Huusko Keski-Suomessa',
    postalCode: '40100',
    locativeName: 'Keski-Suomessa',
    descriptionTitle: 'Lämminhenkistä tukea arkeen',
    descriptionText: 'Famula Keski-Suomi tarjoaa kiireetöntä ja sydämellistä kotihoidon tukipalvelua sekä kotisairaanhoitoa. Olemme läsnä arjen hetkissä – autamme, kuuntelemme ja tuomme seuraa silloin, kun sitä tarvitaan.\n\nMeille tärkeintä on aito kohtaaminen ja turvallinen olo. Kuljemme rinnallasi luotettavasti ja ihmistä kunnioittaen.',
  },
  {
    id: 'pohjois-savo',
    name: 'Pohjois-Savo',
    managerName: 'Julia Paananen',
    phone: '044 246 0147',
    email: 'julia.paananen@famula.fi',
    image: `${import.meta.env.BASE_URL}julia.avif`,
    altText: 'Hymyilevä kotihoitotiimin vetäjä Julia Paananen Pohjois-Savon alueella',
    postalCode: '70100',
    locativeName: 'Pohjois-Savossa',
  },
  {
    id: 'oulu',
    name: 'Oulu',
    managerName: 'Alma Marjanen',
    phone: '050 338 7735',
    email: 'alma.marjanen@famula.fi',
    image: `${import.meta.env.BASE_URL}alma.avif`,
    altText: 'Hymyilevä asiantuntija Alma Marjanen auttaa Oulun alueella',
    postalCode: '90100',
    locativeName: 'Oulussa',
    descriptionText: 'Famula Oulu tarjoaa juuri sinun tarpeeseen räätälöityä kiireetöntä tukea ja apua arkeen. Tarjoamme sydämmellistä ja kiireetöntä sekä ammattitaitoista kodinhoidon tukipalvelua kodinhoidollisiin tehtäviin monipuolisesti. Tarjoamme myös turvallista saattoapua arjen menoihin niin asiointiin kuin ulkoiluun.\n\nMeille tärkeää on ihmisen yksilöllisyys sekä kiireetön kohtaaminen ja läsnäolo. Meiltä saat ystävän, joka kulkee rinnallasi ja jonka kanssa voit jakaa elämän pieniä ja suuria iloja ja suruja.',
  },
  {
    id: 'etela-karjala',
    name: 'Etelä-Karjala',
    managerName: 'Paula Tuikkanen',
    phone: '040 417 9978',
    email: 'paula.tuikkanen@famula.fi',
    image: `${import.meta.env.BASE_URL}paula.avif`,
    altText: 'Kokenut hoitaja Paula Tuikkanen Etelä-Karjalassa',
    postalCode: '53100',
    locativeName: 'Etelä-Karjalassa',
    descriptionText: 'Turvallinen ja luotettava, sellainen on Famula Etelä-Karjala joka on läsnä arjessasi niin kodinhoidollisissa tehtävissä, seurana kuin saattoapuna.\n\nTarjoamme kotipalveluiden tukipalveluita ammattitaidolla, laadukkaasti ja aina ihmistä kunnioittaen. Teemme työmme  kiireettömästi, lämpimästi kohdaten ja asiakkaan toiveet huomioiden. Kanssamme tunnet olosi turvalliseksi ja kohdatuksi.',
  },
  {
    id: 'uusimaa',
    name: 'Uusimaa',
    managerName: 'Riina Kyllönen',
    phone: '041 459 6866',
    email: 'riina.kyllonen@famula.fi',
    image: `${import.meta.env.BASE_URL}riina.avif`,
    altText: 'Ammatillinen hoivavastaava Riina Kyllönen Uudenmaan alueella',
    postalCode: '00100',
    locativeName: 'Uudellamaalla',
    descriptionTitle: 'Lämminhenkistä tukea arkeen',
    descriptionText: 'Famula Uusimaa tarjoaa kiireetöntä ja sydämellistä kotihoidon tukipalvelua sekä arjen apua koko pääkaupunkiseudulla ja lähialueilla. Olemme läsnä arjen hetkissä – autamme, kuuntelemme ja tuomme seuraa silloin, kun sitä tarvitaan.\n\nMeille tärkeintä on aito kohtaaminen ja turvallinen olo. Kuljemme rinnallasi luotettavasti ja ihmistä kunnioittaen, jotta asuminen omassa kodissa on turvallista mahdollisimman pitkään.',
  }
];
