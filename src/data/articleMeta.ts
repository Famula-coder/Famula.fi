export interface ArticleSource {
  label: string;
  url: string;
}

export interface ArticleMeta {
  author: string;
  /** Päivä, jolloin artikkelin tiedot on viimeksi tarkistettu lähteistä (YYYY-MM-DD). */
  reviewedDate: string;
  sources: ArticleSource[];
}

const VALMA = 'Valma Linnanmäki';
const PAULUS = 'Paulus Linnanmäki';
const HEIKKI = 'Heikki Laivamaa';
const REVIEWED = '2026-11-25';

const vero = {
  korotus2026: { label: 'Verohallinto: Kotitalousvähennys nousee takautuvasti (2026)', url: 'https://www.vero.fi/tietoa-verohallinnosta/uutishuone/lehdist%C3%B6tiedotteet/2026/kotitalousvahennys-nousee-takautuvasti--nain-saat-korotetun-vahennyksen-kayttoosi/' },
  yleis: { label: 'Verohallinto: Kotitalousvähennys', url: 'https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/' },
  hoiva: { label: 'Verohallinto: Kotitalousvähennys tavanomaisesta kotitalous-, hoiva- ja hoitotyöstä', url: 'https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/81186/kotitalousvahennys-tavanomaisesta-kotitalous-hoiva-ja-hoitotyosta-seka-fysio-ja-toimintaterapiasta2' },
  palveluseteli: { label: 'Verohallinto: Palveluseteli verotuksessa', url: 'https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/48403/palveluseteli-verotuksessa3/' },
  sosiaalihuoltoAlv: { label: 'Verohallinto: Sosiaalihuoltopalvelujen arvonlisäverotus', url: 'https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/48131/sosiaalihuoltopalvelujen-arvonlisaverotus3/' },
};
const stmKotihoito = { label: 'Sosiaali- ja terveysministeriö: Kotihoito ja tukipalvelut', url: 'https://stm.fi/kotihoito-kotipalvelut' };
const stmOmaishoito = { label: 'Sosiaali- ja terveysministeriö: Omaishoito', url: 'https://stm.fi/omaishoito' };
const omaishoitajatVapaat = { label: 'Omaishoitajat ry: Omaishoitajien vapaat', url: 'https://omaishoitajat.fi/tuet-ja-palvelut/omaishoidon-tuki/omaishoitajien-vapaat/' };
const lvvSoteri = { label: 'Lupa- ja valvontavirasto: Sote-palveluiden rekisteröinnit (Soteri)', url: 'https://lvv.fi/sosiaali-ja-terveydenhuolto/palveluiden-rekisteroinnit' };
const ukkKymmenen = { label: 'UKK-instituutti: Kymmenen keinoa kaatumisten ehkäisyyn', url: 'https://ukkinstituutti.fi/liikkumisen-turvallisuus/kaatumisten-ehkaisy-iakkaille-ja-laheisille/kymmenen-keinoa-kaatumisten-ehkaisyyn/' };
const ukkKoti = { label: 'UKK-instituutti: Koti- ja lähiympäristön turvallisuus', url: 'https://ukkinstituutti.fi/liikkumisen-turvallisuus/kaatumisten-ehkaisy-iakkaille-ja-laheisille/koti-ja-lahiympariston-turvallisuus/' };
const kotitapaturma = { label: 'Kotitapaturma.fi: Iäkkäiden turvallisuuden tarkistuslista', url: 'https://kotitapaturma.fi/iakkaiden-turvallisuuden-tarkistuslista' };
const ukkKotiutus = { label: 'UKK-instituutti: Kaatumisvammat ja uusintahoitojaksot kotiutumisen jälkeen', url: 'https://ukkinstituutti.fi/ajankohtaista/kaatumisvammat-ovat-yksi-yleisimmista-uusintahoitojaksolle-johtavista-syista-erityisesti-iakkailla-joilla-on-taustalla-aiempi-kaatuminen-tai-kognitiivista-heikentymista/' };
const hotusKotiutus = { label: 'Hotus-hoitosuositus: Iäkkään kotiutuminen sairaalasta', url: 'https://hotus.fi/wp-content/uploads/2020/12/netti-hoitosuositus-iaekkaeaen-kotiutuminen.pdf' };
const ruokasuositus = { label: 'THL ja VRN: Vireyttä seniorivuosiin – ikääntyneiden ruokasuositus', url: 'https://www.julkari.fi/bitstream/handle/10024/139415/THL_OHJ_4_2020_Vireytt%C3%A4%20seniorivuosiin_verkko.pdf' };
const thlIakkaatRavitsemus = { label: 'THL: Iäkkäiden ravitsemus', url: 'https://thl.fi/aiheet/elintavat-ja-ravitsemus/ravitsemus/suomalaisten-ravitsemus-ja-ruokailu/iakkaat' };
const terveyskirjastoYksinaisyys = { label: 'Terveyskirjasto: Yksinäisyys', url: 'https://www.terveyskirjasto.fi/dlk01408' };
const hyEristyneisyys = { label: 'Helsingin yliopisto: Sosiaalinen eristyneisyys on terveydelle yksinäisyyden tunnetta vaarallisempaa', url: 'https://www.helsinki.fi/fi/uutiset/terveempi-maailma/sosiaalinen-eristyneisyys-terveydelle-yksinaisyyden-tunnetta-vaarallisempaa' };
const thlKotihoitoYksinaisyys = { label: 'THL: Yksinäisyys lisää iäkkäiden kotihoidon asiakkaiden palvelujen käyttöä', url: 'https://thl.fi/-/yksinaisyys-ja-toive-asua-muualla-kuin-kotona-lisaavat-iakkaiden-kotihoidon-asiakkaiden-sote-palvelujen-kayttoa' };
const muistiliittoKohtaaminen = { label: 'Muistiliitto: Muistisairaan kohtaaminen', url: 'https://muistiliitto.fi/muistisairaus-ja-arki/muistisairaan-kohtaaminen/' };
const muistiliittoLaheinen = { label: 'Muistiliitto: Muistisairaan läheiselle', url: 'https://muistiliitto.fi/muistisairaan-laheiselle/' };
const fimeaTurvallinen = { label: 'Fimea: Turvallinen lääkehoito', url: 'https://fimea.fi/kehittaminen_ja_hta/jarkeva-laakehoito/turvallinen-laakehoito' };
const fimeaAnnosjakelu = { label: 'Fimea: Annosjakelu', url: 'https://fimea.fi/apteekit/annosjakelu' };

export const articleMeta: Record<string, ArticleMeta> = {
  'kotitalousvahennys-2025': { author: HEIKKI, reviewedDate: REVIEWED, sources: [vero.korotus2026, vero.yleis, vero.hoiva] },
  'ikantyvan-vanhemman-kotiapu': { author: VALMA, reviewedDate: REVIEWED, sources: [stmKotihoito, muistiliittoLaheinen] },
  'yksityinen-kotipalvelu-vs-kunnallinen-kotihoito': { author: HEIKKI, reviewedDate: REVIEWED, sources: [stmKotihoito, vero.palveluseteli] },
  'mita-kotipalvelu-maksaa': { author: HEIKKI, reviewedDate: REVIEWED, sources: [vero.korotus2026, vero.sosiaalihuoltoAlv] },
  'asiointiapu-ikaihmisille': { author: PAULUS, reviewedDate: REVIEWED, sources: [stmKotihoito] },
  'nain-valitset-luotettavan-kotipalvelun': { author: HEIKKI, reviewedDate: REVIEWED, sources: [lvvSoteri] },
  'yksinaisyyden-torjunta': { author: VALMA, reviewedDate: REVIEWED, sources: [terveyskirjastoYksinaisyys, thlKotihoitoYksinaisyys, hyEristyneisyys] },
  'turvallinen-laakehoito-kotona': { author: PAULUS, reviewedDate: REVIEWED, sources: [fimeaTurvallinen, fimeaAnnosjakelu] },
  'kevyt-siivous-ja-pyykkihuolto': { author: PAULUS, reviewedDate: REVIEWED, sources: [ukkKoti, stmKotihoito] },
  'saannollinen-yhteydenpito-omaisiin': { author: VALMA, reviewedDate: REVIEWED, sources: [muistiliittoLaheinen] },
  'luotettava-siivousapu-ikaihmiselle': { author: PAULUS, reviewedDate: REVIEWED, sources: [stmKotihoito, vero.hoiva] },
  'omaishoidon-lomitus-yksityiselta': { author: VALMA, reviewedDate: REVIEWED, sources: [stmOmaishoito, omaishoitajatVapaat] },
  'muistisairaan-kotihoito': { author: VALMA, reviewedDate: REVIEWED, sources: [muistiliittoKohtaaminen, muistiliittoLaheinen] },
  'kotiutuminen-sairaalasta': { author: PAULUS, reviewedDate: REVIEWED, sources: [ukkKotiutus, hotusKotiutus] },
  'nain-haet-kotitalousvahennysta': { author: HEIKKI, reviewedDate: REVIEWED, sources: [vero.yleis, vero.korotus2026, vero.hoiva] },
  'kotitalousvahennys-vanhemmille': { author: HEIKKI, reviewedDate: REVIEWED, sources: [vero.hoiva, vero.palveluseteli] },
  'seuraa-sairaalaan-tai-hoivakotiin': { author: VALMA, reviewedDate: REVIEWED, sources: [terveyskirjastoYksinaisyys] },
  'ikaihmisen-kaatumisen-ehkaisy-kodin-turvallisuus': { author: PAULUS, reviewedDate: REVIEWED, sources: [ukkKymmenen, ukkKoti, kotitapaturma] },
  'ikaihmisen-huono-ruokahalu-ja-ravitsemus': { author: VALMA, reviewedDate: REVIEWED, sources: [ruokasuositus, thlIakkaatRavitsemus] },
  'milloin-palvelutaloon-vanhuksen-kotona-asumisen-tukeminen': { author: HEIKKI, reviewedDate: REVIEWED, sources: [stmKotihoito, stmOmaishoito] },
};
