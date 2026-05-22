export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string; // HTML content or Markdown, we will use raw HTML for simplicity
  icon?: string; // Optional icon name
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'kotitalousvahennys-2025',
    title: 'Kotitalousvähennys hoiva- ja hoitotyöstä 2025 – Näin hyödynnät edun',
    category: 'Hinnoittelu',
    excerpt: 'Vuodelle 2025 kotitalousvähennykseen tuli muutoksia. Nyt voit vähentää verotuksessa 35 % yritykseltä ostetun hoiva- tai siivoustyön hinnasta.',
    icon: 'Euro',
    content: `
      <h2>Mitä kotitalousvähennys tarkoittaa vuonna 2025?</h2>
      <p>Tiesitkö, että voit saada merkittävän veroedun ostaessasi kotipalvelua tai kotihoitoa itsellesi tai ikääntyville vanhemmillesi? Vuonna 2025 kotitalousvähennys hoiva-, hoito- ja siivoustyöstä on <strong>35 %</strong> työn arvonlisäverollisesta osuudesta.</p>
      
      <h3>Vähennyksen enimmäismäärä ja omavastuu</h3>
      <p>Kotitalousvähennyksen vuotuinen enimmäismäärä on 1 600 euroa henkilöä kohden. Omavastuu on 150 euroa vuodessa. Jos ostat palvelun yhdessä puolisosi kanssa, voitte saada yhteensä jopa 3 200 euron vähennyksen, jos molempien verot riittävät vähennyksen tekemiseen.</p>

      <h2>Esimerkkilaskelma Famulan palveluista</h2>
      <p>Famulan kiireetön kotipalvelu maksaa sosiaalihuollon asiakkaille (ALV 0 %) 39,95 €/tunti. Jos tilaat läheisellesi säännöllistä apua esimerkiksi <strong>8 tuntia kuukaudessa (96 tuntia vuodessa)</strong>, laskelma näyttää tältä:</p>
      <ul>
        <li><strong>Normaali hinta vuodessa:</strong> 96 h × 39,95 € = 3 835,20 €</li>
        <li><strong>Kotitalousvähennys (35 %):</strong> - 1 342,32 € (Tämä alittaa 1 600 € maksimikaton, joten saat sen kokonaisuudessaan!)</li>
        <li><strong>Vuoden todelliseksi hinnaksi jää:</strong> <strong>2 492,88 €</strong></li>
      </ul>
      <p>Kuukausitasolla tämä tarkoittaa siis vain reilua 200 euroa säännöllisestä, luotettavasta seurasta ja avusta!</p>

      <h3>Miten ilmoitan kulut OmaVerossa?</h3>
      <p>Famula toimittaa sinulle selkeät laskut ja yhteenvedon vuoden aikana ostetuista palveluista. Voit ilmoittaa vähennyksen helposti Verohallinnon OmaVero-palvelussa. Autamme sinua tarvittaessa vähennyksen hakemisessa ja lomakkeiden täytössä.</p>
    `
  },
  {
    id: '2',
    slug: 'ikantyvan-vanhemman-kotiapu',
    title: 'Mistä tietää, että ikääntyvä vanhempi tarvitsee kotiapua?',
    category: 'Omaisille',
    excerpt: 'Kun kunnallisen kotihoidon kriteerit eivät vielä täyty, mutta apua tarvitaan. Tarkkaile näitä viittä varoitusmerkkiä.',
    icon: 'Eye',
    content: `
      <h2>5 varoitusmerkkiä: Pärjääkö vanhempi vielä yksin?</h2>
      <p>Kun ikää tulee lisää, arjen askareet alkavat pikkuhiljaa hidastua. Moni omainen asuu kaukana ja kantaa jatkuvaa huolta: pärjääkö äiti tai isä vielä yksin kotona?</p>
      
      <p>Tarkkaile seuraavia merkkejä:</p>
      <ol>
        <li><strong>Yksinäisyyden lisääntyminen:</strong> Jääkö vanhempi neljän seinän sisälle? Sosiaalisten kontaktien puute heikentää nopeasti mielen vireyttä.</li>
        <li><strong>Kodin siisteyden heikkeneminen:</strong> Onko imurointi jäänyt? Kasaantuuko pyykkiä tai tiskiä?</li>
        <li><strong>Ravinto ja jääkaappi:</strong> Onko jääkaapissa vanhentunutta ruokaa, tai syökö vanhempi pelkkiä valmisaterioita?</li>
        <li><strong>Henkilökohtainen hygienia:</strong> Tuntuuko peseytyminen raskaalta tai pelottavalta kaatumisriskin vuoksi?</li>
        <li><strong>Lääkkeiden unohtelu:</strong> Ovatko lääkkeet jääneet ottamatta tai otettu väärään aikaan?</li>
      </ol>

      <h2>Ennaltaehkäisevä apu on kultaa kalliimpaa</h2>
      <p>Usein apua haetaan vasta, kun tapahtuu onnettomuus, kuten kaatuminen. Famulan kaltainen yksityinen kotipalvelu voi astua kuvaan paljon aikaisemmin. Emme korvaa lääkinnällistä sairaanhoitoa, mutta tarjoamme sen puuttuvan palasen: <strong>aikaa, seuraa ja arjen turvaa</strong>.</p>
    `
  },
  {
    id: '3',
    slug: 'yksityinen-kotipalvelu-vs-kunnallinen-kotihoito',
    title: 'Mitä eroa on kunnallisella kotihoidolla ja yksityisellä kotipalvelulla?',
    category: 'Hyvinvointi',
    excerpt: 'Kunnallinen kotihoito tarjoaa elintärkeää hoivaa, mutta usein aikasidonnaisesti. Yksityinen kotipalvelu panostaa kiireettömyyteen.',
    icon: 'Heart',
    content: `
      <h2>Kaksi erilaista, toisiaan täydentävää palvelua</h2>
      <p>Kun avun tarve herää, moni miettii ensimmäisenä kunnan tarjoamaa kotihoitoa. Kunnallinen kotihoito on yhteiskuntamme tukipilari, mutta sen resurssit on usein kohdennettu tarkasti määriteltyihin, lääketieteellisiin tai välttämättömiin perushoidon tarpeisiin.</p>

      <h3>Kunnallinen kotihoito: Välttämätön perushoiva</h3>
      <p>Kunnallinen kotihoito keskittyy asioihin, jotka ovat hengissä säilymisen ja perusterveyden kannalta välttämättömiä. Näitä ovat esimerkiksi lääkkeiden jako, haavahoidot ja perushygieniasta huolehtiminen. Koska resursseja on vähän, käynnit saattavat olla vain 10–15 minuutin mittaisia, ja hoitaja saattaa vaihtua päivittäin.</p>

      <h3>Yksityinen kotipalvelu (Famula): Aikaa, läsnäoloa ja sama tuttu ihminen</h3>
      <p>Famulan kaltainen yksityinen kotipalvelu ei kilpaile kunnan kanssa, vaan täydentää sitä. Meidän vahvuutemme on <strong>kiireettömyys</strong>. Kun tilaat Famulan kotiin, emme katso kelloa stressaantuneena.</p>
      <ul>
        <li>Meillä on aikaa keittää kahvit ja kuunnella asiakkaan muisteluita.</li>
        <li>Kotiisi tulee aina <strong>sama, nimetty omahoitaja</strong>, jolloin luottamus ja ystävyys pääsevät syntymään.</li>
        <li>Palvelumme joustaa: voimme lähteä yhdessä kauppaan, ulkoilemaan tai vaikkapa teatteriin.</li>
      </ul>
      <p>Monet asiakkaistamme käyttävätkin molempia: kunta hoitaa sairaanhoidollisen lääkejaon, ja Famulan tuttu hoitaja hoitaa kodinhengettären ja seuralaisen roolin.</p>
    `
  },
  {
    id: '4',
    slug: 'mita-kotipalvelu-maksaa',
    title: 'Mitä yksityinen kotihoito ja kotipalvelu maksaa? Läpinäkyvät hintaesimerkit',
    category: 'Hinnoittelu',
    excerpt: 'Avaamme rehellisesti kotipalvelun hinnoittelua. Kerromme, miksi Famulalla on selkeä tuntihinta ilman yllättäviä piilokuluja.',
    icon: 'Calculator',
    content: `
      <h2>Yksi tuntihinta – ei ikäviä yllätyksiä</h2>
      <p>Monella palveluntarjoajalla laskutus perustuu monimutkaisiin hinnastoihin: viikonloppulisät, kilometrikorvaukset, laskutuslisät ja toimistomaksut nostavat lopullista summaa huomattavasti.</p>
      <p>Famulalla uskomme reiluuteen ja läpinäkyvyyteen. Sosiaalihuollon tukipalveluina myytävä kotipalvelumme ja yksityinen kotihoidon tukipalvelumme on <strong>arvonlisäverotonta (ALV 0 %)</strong>, ja hinta on kiinteä <strong>39,95 € / tunti</strong>.</p>
      
      <h3>Kuinka edullista apu todellisuudessa on?</h3>
      <p>Verottajan myöntämä kotitalousvähennys (35 % vuonna 2025) tarkoittaa, että todellinen kustannus asiakkaalle on merkittävästi pienempi. Jos ostat palvelua esimerkiksi kahdeksi tunniksi viikossa:</p>
      <p><strong>Bruttohinta:</strong> 319,60 € / kuukausi<br/>
      <strong>Todellinen hinta kotitalousvähennyksen jälkeen:</strong> 207,74 € / kuukausi</p>
      <p>Mielenrauha, turvallinen koti ja tutun ystävän seura ovat asioita, joille on vaikea laskea hintaa, mutta olemme halunneet tehdä avun hankkimisesta mahdollisimman saavutettavaa.</p>
    `
  },
  {
    id: '5',
    slug: 'asiointiapu-ikaihmisille',
    title: 'Asiointiapu ikäihmisille: Turvallinen seura kauppaan ja apteekkiin',
    category: 'Palvelut',
    excerpt: 'Monelle ikäihmiselle pelkkä kotiinkuljetus ei riitä. Famulan asiointiavussa tuttu hoitaja lähtee mukaan tueksi ja seuraksi.',
    icon: 'ShoppingBag',
    content: `
      <h2>Itse valitut hedelmät maistuvat paremmalta</h2>
      <p>Nykypäivänä ruokaostokset on helppo tilata netistä suoraan kotiovelle. Tämä on hieno apu, mutta monelle ikäihmiselle se vie samalla pois tärkeän viikon kohokohdan: kauppareissun.</p>

      <h3>Miksi fyysinen asiointi kannattaa säilyttää?</h3>
      <p>Kaupassa käynti ei ole vain tavaroiden hankkimista. Se ylläpitää fyysistä toimintakykyä (kävely, hyllyille kurottelu), tarjoaa virikkeitä aivoille (uusien tuotteiden ihmettely, valintojen tekeminen) ja ylläpitää sosiaalisia taitoja (kassamyyjän tervehtiminen, tuttujen kohtaaminen).</p>
      
      <h3>Famulan asiointiapu on turvallinen saattaja</h3>
      <p>Jos yksin lähteminen jännittää esimerkiksi huimauksen tai muistiongelmien vuoksi, Famulan tuttu hoitaja lähtee mielellään mukaan. Autamme tavaroiden kantamisessa, toimimme henkisenä tukena ja voimme yhdistää samaan reissuun vaikka apteekkikäynnin ja lounaan kahvilassa.</p>
    `
  },
  {
    id: '6',
    slug: 'nain-valitset-luotettavan-kotipalvelun',
    title: 'Kuinka valita luotettava kotipalveluyritys ikäihmiselle? 3 tärkeää vinkkiä',
    category: 'Omaisille',
    excerpt: 'Vinkkejä palveluntarjoajan vertailuun. Tarkista hoitajien vaihtuvuus, luvat ja kohtaamisen aitous.',
    icon: 'ShieldCheck',
    content: `
      <h2>Kenen käsiin uskot läheisesi hyvinvoinnin?</h2>
      <p>Kotipalveluyrityksiä on monia, ja valinnan tekeminen voi olla vaikeaa. Tässä on kolme kysymystä, jotka sinun tulisi esittää palveluntarjoajalle ennen sopimuksen tekemistä:</p>

      <h3>1. Vaihtuuko hoitaja joka käynnillä?</h3>
      <p>Ikäihmiselle jatkuva uusien ihmisten kohtaaminen omassa kodissa voi olla ahdistavaa ja stressaavaa. Kysy suoraan, pystyykö yritys takaamaan, että asiakkaan luona käy pääsääntöisesti aina yksi ja sama, nimetty hoitaja. Famulalla tämä on toimintamme peruskivi.</p>

      <h3>2. Ovatko luvat ja omavalvonta kunnossa?</h3>
      <p>Luotettava kotipalvelu on aina rekisteröity valtakunnalliseen Soteri-rekisteriin, ja se on Lupa- ja valvontaviraston hyväksymä ja valvoma sosiaalipalvelujen tuottaja. Tämä tarkoittaa, että yrityksellä on vastuuhenkilöt, ajantasainen omavalvontasuunnitelma ja vaadittavat vakuutukset kunnossa.</p>

      <h3>3. Maksetaanko matka-ajoista tai piilokuluista?</h3>
      <p>Tarkista, mitä tuntihinta oikeasti pitää sisällään. Alkavatko työtunnit juosta siitä, kun hoitaja astuu sisään, vai maksetaanko myös matka-ajasta? Famulalla hinnoittelu on täysin läpinäkyvää, eikä ikäviä yllätyslaskuja tule.</p>
    `
  },
  {
    id: '7',
    slug: 'yksinaisyyden-torjunta',
    title: 'Yksinäisyyden torjunta: Säännöllinen seura on lääkettä ikäihmiselle',
    category: 'Hyvinvointi',
    excerpt: 'Yksinäisyys on merkittävä terveysriski ikääntyessä. Säännöllinen ystävän kohtaaminen pitää mielen virkeänä.',
    icon: 'Users',
    content: `
      <h2>Yksinäisyys on Suomen suurin kansansairaus</h2>
      <p>Tilastojen mukaan valtava osa suomalaisista vanhuksista kokee itsensä jatkuvasti yksinäiseksi. Puoliso on saattanut menehtyä, lapset asuvat toisella paikkakunnalla ja oma liikkuminen kodin ulkopuolelle on vaikeutunut.</p>
      
      <h3>Seuran merkitys terveydelle</h3>
      <p>Tutkimukset osoittavat yksiselitteisesti, että pitkittynyt yksinäisyys nostaa verenpainetta, altistaa masennukselle ja voi jopa nopeuttaa muistisairauksien etenemistä. Ihmisen aivot tarvitsevat sosiaalisia virikkeitä, keskustelua ja naurua pysyäkseen virkeinä.</p>

      <p>Famulan kotipalvelussa ei ole kyse vain imuroinnista tai tiskikoneen tyhjentämisestä. Kyse on siitä, että kotiin tulee ihminen, jolla on aikaa istahtaa alas, juoda kuppi kahvia ja vaihtaa kuulumiset. Monelle asiakkaallemme Famulan hoitajan viikoittainen käynti on se päivä, jota odotetaan kaikkein eniten.</p>
    `
  },
  {
    id: '8',
    slug: 'turvallinen-laakehoito-kotona',
    title: 'Turvallinen lääkehoito kotona: Näin Famula auttaa',
    category: 'Palvelut',
    excerpt: 'Teemme saumatonta yhteistyötä omaisten ja kotisairaanhoidon kanssa lääkitysturvallisuuden varmistamiseksi.',
    icon: 'Pill',
    content: `
      <h2>Apua lääkkeiden muistamisessa</h2>
      <p>Säännöllinen lääkitys on usein ehto kotona pärjäämiselle. Kun lääkkeitä on paljon ja muisti alkaa pätkiä, vaarana on, että elintärkeät lääkkeet jäävät ottamatta tai niitä otetaan vahingossa tupla-annos.</p>

      <h3>Miten Famula osallistuu lääkehoitoon?</h3>
      <p>Vaikka ensisijainen lääkkeiden jako dosettiin (lääkeannostelijaan) tapahtuu usein kunnallisen kotisairaanhoidon tai apteekin toimesta, Famulan hoitajat toimivat tärkeänä turvaverkkona arjessa:</p>
      <ul>
        <li>Voimme muistuttaa asiakasta ottamaan valmiiksi jaetut lääkkeet käyntimme yhteydessä.</li>
        <li>Tarkkailemme asiakkaan yleisvointia. Jos huomaamme sekavuutta tai poikkeavaa väsymystä, ilmoitamme siitä välittömästi omaisille tai kotisairaanhoitoon.</li>
        <li>Voimme asioida asiakkaan puolesta apteekissa ja noutaa reseptilääkkeet turvallisesti kotiin.</li>
      </ul>
    `
  },
  {
    id: '9',
    slug: 'kevyt-siivous-ja-pyykkihuolto',
    title: 'Kodinhoito ja siivous: Puhdas koti on osa hyvää hoivaa',
    category: 'Palvelut',
    excerpt: 'Ikääntyessä siivous käy raskaaksi. Famulan käynneillä hoivaan voidaan aina yhdistää kodin askareita.',
    icon: 'Sparkles',
    content: `
      <h2>Puhdas koti luo turvallisuutta</h2>
      <p>Hyvä hygienia ja puhdas ympäristö ovat tärkeitä paitsi viihtyvyyden, myös terveyden ja turvallisuuden kannalta. Lattioilla lojuvat tavarat, liukkaat pölyhiukkaset tai huonosti pestyt astiat ovat selkeitä riskejä ikäihmisen kodissa.</p>
      
      <h3>Hoivan ja kodinhoidon saumaton yhdistelmä</h3>
      <p>Kun tilaat pelkän siivouspalvelun, siivooja tulee tekemään tehokkaasti työnsä ja poistuu. Famulan mallissa kotiapu on kokonaisvaltaista. Voimme samalla käynnillä:</p>
      <ul>
        <li>Imuroida ja pestä lattiat</li>
        <li>Vaihtaa puhtaat lakanat ja laittaa pyykkikoneen pyörimään</li>
        <li>Valmistaa ravitsevan lounaan</li>
        <li>Keskustella ja lukea yhdessä päivän lehteä</li>
      </ul>
      <p>Haluamme myös osallistaa asiakasta kodin askareisiin hänen voimavarojensa mukaan. Yhdessä pyykkien viikkaaminen ylläpitää sorminäppäryyttä ja antaa onnistumisen kokemuksia.</p>
    `
  },
  {
    id: '10',
    slug: 'saannollinen-yhteydenpito-omaisiin',
    title: 'Mielenrauhaa omaisille: Famulan avoin viestintä',
    category: 'Omaisille',
    excerpt: 'Moni asiakkaistamme on toisella paikkakunnalla asuva omainen. Avaamme kuinka viestimme ja tuomme mielenrauhan.',
    icon: 'MessageCircle',
    content: `
      <h2>Helpotusta omaishoitajan ja kaukana asuvan huoleen</h2>
      <p>Nykypäivänä lapset ja lapsenlapset asuvat usein satojen kilometrien päässä ikääntyvistä vanhemmistaan. Vaikka puhelimessa soitellaan viikoittain, pelkkä puhelinyhteys ei aina paljasta totuutta arjen pärjäämisestä. "Kyllä minä täällä pärjäilen", on tyypillinen suomalaisen ikäihmisen vastaus, vaikka todellisuus olisi toinen.</p>

      <h3>Aktiivinen raportointi luo turvaa</h3>
      <p>Me Famulassa ymmärrämme omaisten huolen. Siksi olemme rakentaneet toimintamallimme poikkeuksellisen avoimen viestinnän varaan:</p>
      <ul>
        <li><strong>Nimetty yhteyshenkilö:</strong> Omaisella on aina tiedossa oman alueen vetäjän sekä nimetyn hoitajan suora puhelinnumero.</li>
        <li><strong>Kuulumiset käyntien jälkeen:</strong> Voimme sopia, että lähetämme omaiselle lyhyen viestin tai soitamme sovitun ajan välein ja kerromme, miten viikko on mennyt.</li>
        <li><strong>Huomioiden jakaminen:</strong> Jos huomaamme asiakkaan muistin pätkivän tavallista enemmän tai ruokahalun kadonneen, otamme matalalla kynnyksellä yhteyttä. Emme jätä omaista yksin huolensa kanssa.</li>
      </ul>
      <p>Tavoitteemme on, että Famulan palvelun myötä omaisen hartioilta putoaa raskas kivi, ja voitte keskittyä yhdessäoloon ilman jatkuvaa huolta arjen sujumisesta.</p>
    `
  },
  {
    id: '11',
    slug: 'luotettava-siivousapu-ikaihmiselle',
    title: 'Mistä luotettava siivousapu ikäihmiselle? Vinkit valintaan',
    category: 'Palvelut',
    excerpt: 'Siivousfirma vai yksityinen kotihoito tai kotipalvelu? Lue, mitä asioita kannattaa ottaa huomioon, kun tilaat siivousapua ikääntyvälle läheiselle.',
    icon: 'Sparkles',
    content: `
      <h2>Siivousfirma vai kotipalvelu? Tässä on ratkaiseva ero</h2>
      <p>Kun ikäihmisen kodin puhtaanapito alkaa vaatia ulkopuolista apua, moni omainen etsii netistä perinteistä siivousfirmaa. Vaikka moni siivousyritys tekee erinomaista työtä, ikäihmisen kodissa tarpeet ovat usein laajempia kuin pelkkä pölyjen pyyhkiminen.</p>
      
      <h3>Yksityisen kotipalvelun hyödyt siivoustyössä</h3>
      <p>Kun tilaat Famulan kaltaisen kotipalveluyrityksen tekemään siivousta, saat kaupan päälle paljon muutakin:</p>
      <ul>
        <li><strong>Kiireetön kohtaaminen:</strong> Hoitajamme ei juokse kelloa vastaan, vaan meillä on aikaa vaihtaa kuulumiset ja juoda vaikka yhdessä kahvit siivouksen lomassa.</li>
        <li><strong>Arjen havainnointi:</strong> Samalla kun siivoamme, havainnoimme asiakkaan yleisvointia, kodin turvallisuutta (kuten mattojen liukkautta) ja jääkaapin sisältöä.</li>
        <li><strong>Tuttu ihminen:</strong> Kotiin ei tule joka kerta eri siivooja, vaan luotettava omahoitaja, josta tulee usein tärkeä viikoittainen ystävä.</li>
      </ul>
      <p>Jos etsit pelkkää suursiivousta, perinteinen siivousfirma on hyvä valinta. Jos taas kaipaat turvallista seuraa ja arjen apua siivouksen ohessa, valitse yksityinen kotihoito tai kotipalvelu.</p>
    `
  },
  {
    id: '12',
    slug: 'omaishoidon-lomitus-yksityiselta',
    title: 'Omaishoidon lomitus yksityiseltä: Näin se toimii käytännössä',
    category: 'Omaisille',
    excerpt: 'Omaishoitaja, muista huolehtia myös itsestäsi! Yksityinen omaishoidon sijaistus antaa sinulle elintärkeän hengähdystauon.',
    icon: 'Heart',
    content: `
      <h2>Omaishoitajan vapaapäivä on elintärkeä</h2>
      <p>Omaishoitajan työ on sitovaa, ja usein vuorokauden ympäri jatkuva huoli läheisestä uuvuttaa vahvimmankin ihmisen. Kunnalliset vapaapäivät ovat tärkeitä, mutta aina ne eivät riitä, tai niitä on vaikea saada järjestymään joustavasti.</p>
      
      <h3>Famula sijaistaa luotettavasti omassa kodissa</h3>
      <p>Yksityinen omaishoidon lomitus tarjoaa ratkaisun, kun kaipaat omaa aikaa – olipa kyse sitten muutaman tunnin asiointireissusta, teatteri-illasta tai kokonaisesta viikonloppu-vapaasta. Toimimme näin:</p>
      <ul>
        <li><strong>Turvallisuus edellä:</strong> Tutustumme asiakkaan tarpeisiin ja lääkitykseen etukäteen. Kotiin tulee aina sama, turvallinen ammattilainen.</li>
        <li><strong>Aktiivinen arki:</strong> Emme vain "vaahdi", vaan teemme samoja asioita kuin omaishoitajakin – teemme ruokaa, ulkoilemme ja vietämme laatuaikaa yhdessä.</li>
        <li><strong>Joustavuus:</strong> Voit tilata sijaishoidon juuri silloin kun sitä tarvitset, ilman pitkiä byrokraattisia prosesseja.</li>
      </ul>
      <p>Omaishoitajan jaksaminen on koko perheen etu. Älä epäröi pyytää apua!</p>
    `
  }
];
