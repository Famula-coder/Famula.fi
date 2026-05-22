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
  genitiveName: string;
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
    genitiveName: 'Keski-Suomen',
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
    altText: 'Hymyilevä kotihoitotiimin vetäjä Julia Paananen Pohjois-Savossa',
    postalCode: '70100',
    locativeName: 'Pohjois-Savossa',
    genitiveName: 'Pohjois-Savon',
  },
  {
    id: 'oulu',
    name: 'Oulu',
    managerName: 'Alma Marjanen',
    phone: '050 338 7735',
    email: 'alma.marjanen@famula.fi',
    image: `${import.meta.env.BASE_URL}alma.avif`,
    altText: 'Hymyilevä asiantuntija Alma Marjanen auttaa Oulussa',
    postalCode: '90100',
    locativeName: 'Oulussa',
    genitiveName: 'Oulun',
    descriptionTitle: 'Luotettava kotipalvelu ikäihmisille Oulussa – Turvaa ja seuraa arkeen',
    descriptionText: 'Etsitkö luotettavaa ja kiireetöntä apua ikääntyvälle läheisellesi Oulussa? Famulan kotipalvelu tarjoaa turvallista seuraa, apua kodin askareisiin ja kokonaisvaltaista huolenpitoa omassa kodissa. Meillä hoitaja ei vaihdu jokaisella käynnillä – luonasi käy aina sama, tuttu ja luotettava ammattilainen.\n\nPalvelemme laajasti Oulun alueella ja lähikunnissa. Olipa kyseessä sitten viikoittainen siivousapu, kaupassakäyntiseura tai laajempi päivittäinen tukeminen, räätälöimme palvelun juuri teidän tarpeisiinne sopivaksi. Kaikki palvelumme oikeuttavat kotitalousvähennykseen, ja avustamme mielellämme vähennyksen hakemisessa.',
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
    genitiveName: 'Etelä-Karjalan',
    descriptionText: 'Turvallinen ja luotettava, sellainen on Famula Etelä-Karjala joka on läsnä arjessasi niin kodinhoidollisissa tehtävissä, seurana kuin saattoapuna.\n\nTarjoamme kotipalveluiden tukipalveluita ammattitaidolla, laadukkaasti ja aina ihmistä kunnioittaen. Teemme työmme  kiireettömästi, lämpimästi kohdaten ja asiakkaan toiveet huomioiden. Kanssamme tunnet olosi turvalliseksi ja kohdatuksi.',
  },
  {
    id: 'uusimaa',
    name: 'Uusimaa',
    managerName: 'Riina Kyllönen',
    phone: '041 459 6866',
    email: 'riina.kyllonen@famula.fi',
    image: `${import.meta.env.BASE_URL}riina.avif`,
    altText: 'Ammatillinen hoivavastaava Riina Kyllönen Uudellamaalla',
    postalCode: '00100',
    locativeName: 'Uudellamaalla',
    genitiveName: 'Uudenmaan',
    descriptionTitle: 'Lämminhenkistä tukea arkeen',
    descriptionText: 'Famula Uusimaa tarjoaa kiireetöntä ja sydämellistä kotihoidon tukipalvelua sekä arjen apua koko pääkaupunkiseudulla ja lähialueilla. Olemme läsnä arjen hetkissä – autamme, kuuntelemme ja tuomme seuraa silloin, kun sitä tarvitaan.\n\nMeille tärkeintä on aito kohtaaminen ja turvallinen olo. Kuljemme rinnallasi luotettavasti ja ihmistä kunnioittaen, jotta asuminen omassa kodissa on turvallista mahdollisimman pitkään.',
  }
];
