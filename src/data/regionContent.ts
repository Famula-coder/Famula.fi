export interface RegionFaq {
  question: string;
  answer: string;
}

export interface RegionTestimonial {
  text: string;
  author: string;
  city: string;
}

export interface RegionVoucher {
  heading: string;
  text: string;
  steps: string[];
}

export interface RegionContent {
  /** Selaimen otsikko ilman "| Famula" -päätettä. */
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  /** Pääkaupunki inessiivissä/adessiivissa, esim. "Kuopiossa". */
  cityLocative: string;
  /** Lyhyt linkkiteksti sisäisiin linkkeihin, esim. "Kotipalvelu Kuopiossa". */
  linkLabel: string;
  areaHeading: string;
  areaText: string;
  testimonials: RegionTestimonial[];
  faqHeading: string;
  faq: RegionFaq[];
  voucher?: RegionVoucher;
}

const PRICE_ANSWER =
  'Sosiaalihuollon asiakkaille tuntihinta on kiinteästi 42,50 € (alv 0 %). Kotitalousvähennyksen (40 %) jälkeen maksettavaksi jää noin 25,50 € tunnilta.';

const RELATIVE_ANSWER =
  'Kyllä. Sovimme käynnit puhelimessa ja pidämme sinut ajan tasalla läheisesi kuulumisista. Kun maksat palvelun itse, voit saada kotitalousvähennyksen omaan verotukseesi.';

const noVoucherAnswer = (welfareArea: string) =>
  `Emme ole ${welfareArea} palvelusetelituottaja. Palvelun voi ostaa suoraan meiltä ja hyödyntää kotitalousvähennyksen.`;

export const regionContent: Record<string, RegionContent> = {
  'pohjois-savo': {
    seoTitle: 'Kotihoito ja kotipalvelu Kuopio ja Siilinjärvi',
    metaDescription:
      'Yksityinen kotihoito ja kotipalvelu Kuopiossa ja Siilinjärvellä. Aina sama tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Julialle: 044 246 0147.',
    h1: 'Yksityinen kotihoito ja kotipalvelu Kuopiossa ja Siilinjärvellä',
    intro: [
      'Famula tuo kiireettömän kotipalvelun ja kotihoidon ikäihmisen kotiin Kuopiossa ja Siilinjärvellä. Autamme arjessa silloin, kun siivous, kauppareissu tai ruoanlaitto alkaa käydä raskaaksi, tai kun päiviin kaivataan seuraa ja turvaa.',
      'Meillä hoitaja ei vaihdu käynnistä toiseen. Kuopiolainen asiakkaamme saa oman tutun hoitajan, joka oppii tuntemaan hänen tapansa, kotinsa ja toiveensa. Omaisille se tarkoittaa yhtä ihmistä, jolta voi kysyä kuulumiset.',
      'Palvelumme sopii myös Pohjois-Savon hyvinvointialueen kotihoidon rinnalle. Me tuomme päivään sen ajan, johon julkisella puolella ei aina ole mahdollisuutta: rauhallisen kahvihetken, ulkoilun tai kodin laittamisen kuntoon.',
    ],
    cityLocative: 'Kuopiossa',
    linkLabel: 'Kotipalvelu Kuopiossa',
    areaHeading: 'Missä päin Kuopion seutua palvelemme',
    areaText:
      'Käymme kotikäynneillä Kuopiossa ja Siilinjärvellä. Toimistoa emme tarvitse, koska apu tulee aina sinun kotiisi. Kysy aluevetäjältä, jos et ole varma, kuuluuko osoitteesi palvelualueeseemme.',
    testimonials: [
      {
        text: 'Minä aina odotan näitä päiviä, kun sinä tulet. Siitä tulee niin hyvä mieli, että hykerryttää! Sinä et hoida pelkästään minun kotia, vaan myös minun mieltä.',
        author: 'Omainen',
        city: 'Kuopio',
      },
    ],
    faqHeading: 'Usein kysyttyä kotipalvelusta Kuopiossa',
    faq: [
      { question: 'Mitä yksityinen kotipalvelu maksaa Kuopiossa?', answer: PRICE_ANSWER },
      { question: 'Voiko kotipalvelun tilata vanhemmalle, vaikka asun itse muualla?', answer: RELATIVE_ANSWER },
      { question: 'Käykö palveluseteli?', answer: noVoucherAnswer('Pohjois-Savon hyvinvointialueen') },
    ],
  },
  'keski-suomi': {
    seoTitle: 'Kotihoito ja kotipalvelu Jyväskylä',
    metaDescription:
      'Yksityinen kotihoito ja kotipalvelu Jyväskylässä, Laukaassa, Muuramessa ja Äänekoskella. Tuttu hoitaja, 42,50 €/h (alv 0 %), palveluseteli ja kotitalousvähennys. Soita Leenalle: 050 466 9574.',
    h1: 'Yksityinen kotihoito ja kotipalvelu Jyväskylässä ja lähikunnissa',
    intro: [
      'Famula auttaa ikäihmisiä asumaan kotona Jyväskylässä, Laukaassa, Muuramessa ja Äänekoskella. Teemme kotitöitä, käymme asioilla, laitamme ruokaa ja olemme seurana, aina sen mukaan mitä juuri sinä tai läheisesi tarvitsee.',
      'Jokaisella asiakkaalla on oma hoitaja, joka tulee sovittuna päivänä ja jolla on aikaa pysähtyä. Kun ihminen on tuttu, avun vastaanottaminen on helpompaa ja pienetkin muutokset voinnissa huomataan.',
      'Jyväskylässä palvelumme voi maksaa myös Keski-Suomen hyvinvointialueen palvelusetelillä. Jos sinulle on myönnetty seteli, voit valita Famulan palveluntuottajaksi.',
    ],
    cityLocative: 'Jyväskylässä',
    linkLabel: 'Kotipalvelu Jyväskylässä',
    areaHeading: 'Missä päin Keski-Suomea palvelemme',
    areaText:
      'Käymme kotikäynneillä Jyväskylässä, Laukaassa, Muuramessa ja Äänekoskella. Toimistoa emme tarvitse, koska apu tulee aina sinun kotiisi. Kysy aluevetäjältä, jos et ole varma, kuuluuko osoitteesi palvelualueeseemme.',
    testimonials: [
      {
        text: 'Oot sinä melkoinen epeli, kun vesilukonkin korjasit! Olet minun enkelini.',
        author: 'Asiakas',
        city: 'Jyväskylä',
      },
      {
        text: 'Saatiin niin monta asiaa hoidettua! Nyt on taas vapaampi hengittää.',
        author: 'Asiakas',
        city: 'Laukaa',
      },
    ],
    faqHeading: 'Usein kysyttyä kotipalvelusta Jyväskylässä',
    faq: [
      { question: 'Mitä yksityinen kotipalvelu maksaa Jyväskylässä?', answer: PRICE_ANSWER },
      {
        question: 'Käykö palveluseteli Jyväskylässä?',
        answer:
          'Kyllä. Famula on palvelusetelituottaja Jyväskylässä. Setelin myöntää Keski-Suomen hyvinvointialue palvelutarpeen arvioinnin perusteella.',
      },
      { question: 'Voiko kotipalvelun tilata vanhemmalle toiselta paikkakunnalta?', answer: RELATIVE_ANSWER },
    ],
    voucher: {
      heading: 'Palveluseteli Jyväskylässä',
      text: 'Famula on palvelusetelituottaja Jyväskylässä. Palvelusetelin myöntää Keski-Suomen hyvinvointialue palvelutarpeen arvioinnin perusteella, ja setelin saanut asiakas valitsee palveluntuottajan itse.',
      steps: [
        'Ota yhteyttä hyvinvointialueen asiakasohjaukseen ja pyydä palvelutarpeen arviointi.',
        'Kun saat palvelusetelin, valitse palveluntuottajaksi Famula.',
        'Soita aluevetäjälle, niin sovimme ensimmäisen käynnin.',
      ],
    },
  },
  oulu: {
    seoTitle: 'Kotihoito ja kotipalvelu Oulu, Kempele ja Liminka',
    metaDescription:
      'Yksityinen kotihoito ja kotipalvelu ikäihmisille Oulussa, Kempeleessä, Limingassa ja Muhoksella. Aina sama hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Almalle: 050 338 7735.',
    h1: 'Yksityinen kotihoito ja kotipalvelu Oulussa ja Oulun seudulla',
    intro: [
      'Famula tarjoaa kotipalvelua ja kotihoitoa ikäihmisille Oulussa, Kempeleessä, Limingassa ja Muhoksella. Tulemme kotiin sovittuna päivänä ja teemme sen, mikä arjessa juuri nyt auttaa eniten: siivoamme, käymme kaupassa, laitamme ruokaa tai lähdemme yhdessä ulos.',
      'Oulun seudulla välimatkat ovat pitkiä, ja omaiset asuvat usein kaukana. Siksi pidämme huolen, että luonasi käy aina sama tuttu ihminen ja että läheisesi tietävät, miten sinulla menee.',
      'Palvelu sopii yksin tai yhdessä Pohjois-Pohjanmaan hyvinvointialueen kotihoidon kanssa. Me tuomme lisää aikaa ja käsiä silloin, kun julkisen puolen käynnit eivät riitä kaikkeen.',
    ],
    cityLocative: 'Oulussa',
    linkLabel: 'Kotipalvelu Oulussa',
    areaHeading: 'Missä päin Oulun seutua palvelemme',
    areaText:
      'Käymme kotikäynneillä Oulussa, Kempeleessä, Limingassa ja Muhoksella. Toimistoa emme tarvitse, koska apu tulee aina sinun kotiisi. Kysy aluevetäjältä, jos et ole varma, kuuluuko osoitteesi palvelualueeseemme.',
    testimonials: [
      {
        text: 'Voi että, huolisin sinut tänne vaikka joka päivä minua piristämään!',
        author: 'Asiakas',
        city: 'Oulu',
      },
    ],
    faqHeading: 'Usein kysyttyä kotipalvelusta Oulussa',
    faq: [
      { question: 'Mitä yksityinen kotipalvelu maksaa Oulussa?', answer: PRICE_ANSWER },
      {
        question: 'Voiko käyntejä olla vain kerran viikossa?',
        answer:
          'Kyllä. Tunnit ja käyntien määrä sovitaan aina sinun tarpeesi mukaan, ja niitä voi lisätä tai vähentää myöhemmin.',
      },
      { question: 'Käykö palveluseteli?', answer: noVoucherAnswer('Pohjois-Pohjanmaan hyvinvointialueen') },
    ],
  },
  'etela-karjala': {
    seoTitle: 'Kotihoito ja kotipalvelu Lappeenranta ja Imatra',
    metaDescription:
      'Yksityinen kotihoito ja kotipalvelu Lappeenrannassa, Imatralla, Taipalsaarella ja Ruokolahdella. Tuttu hoitaja, 42,50 €/h (alv 0 %), kotitalousvähennys 40 %. Soita Paulalle: 040 417 9978.',
    h1: 'Yksityinen kotihoito ja kotipalvelu Lappeenrannassa ja Imatralla',
    intro: [
      'Famula tuo kotipalvelun ja kotihoidon ikäihmisen kotiin Lappeenrannassa, Imatralla, Taipalsaarella ja Ruokolahdella. Autamme kodin töissä, asioinnissa ja ruoanlaitossa ja olemme seurana, jotta kotona asuminen on turvallista ja mukavaa mahdollisimman pitkään.',
      'Työtämme ohjaa kiireettömyys. Käynnillä on aikaa istahtaa, kysyä kuulumiset ja tehdä asiat sinun tavallasi. Hoitaja on aina sama, joten sinun ei tarvitse selittää asioitasi uudelle ihmiselle joka kerta.',
      'Palvelumme sopii myös Etelä-Karjalan hyvinvointialueen kotihoidon rinnalle. Voit ostaa meiltä juuri sen avun, jota kaipaat lisää.',
    ],
    cityLocative: 'Lappeenrannassa',
    linkLabel: 'Kotipalvelu Lappeenrannassa',
    areaHeading: 'Missä päin Etelä-Karjalaa palvelemme',
    areaText:
      'Käymme kotikäynneillä Lappeenrannassa, Imatralla, Taipalsaarella ja Ruokolahdella. Toimistoa emme tarvitse, koska apu tulee aina sinun kotiisi. Kysy aluevetäjältä, jos et ole varma, kuuluuko osoitteesi palvelualueeseemme.',
    testimonials: [
      {
        text: 'Pyysin teitä asiointiapuun, mutta sainkin samalla apua ihan kaikkeen, mitä keksinkään!',
        author: 'Asiakas',
        city: 'Lappeenranta',
      },
    ],
    faqHeading: 'Usein kysyttyä kotipalvelusta Lappeenrannassa',
    faq: [
      { question: 'Mitä yksityinen kotipalvelu maksaa Lappeenrannassa?', answer: PRICE_ANSWER },
      {
        question: 'Palveletteko myös Imatralla?',
        answer: 'Kyllä. Käymme kotikäynneillä myös Imatralla, Taipalsaarella ja Ruokolahdella.',
      },
      { question: 'Käykö palveluseteli?', answer: noVoucherAnswer('Etelä-Karjalan hyvinvointialueen') },
    ],
  },
};
