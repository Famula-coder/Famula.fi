export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string; // HTML content or Markdown, we will use raw HTML for simplicity
  icon?: string; // Optional icon name
  videoId?: string; // Optional YouTube video ID
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'kotitalousvahennys-2025',
    title: 'Kotitalousvähennys hoiva- ja hoitotyöstä 2025 – Näin hyödynnät edun',
    category: 'Kotitalousvähennys',
    excerpt: 'Vuodelle 2025 kotitalousvähennykseen tuli muutoksia. Nyt voit vähentää verotuksessa 35 % yritykseltä ostetun hoiva- tai siivoustyön hinnasta.',
    icon: 'Euro',
    videoId: 'g0n8jXGdlOs',
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
  },
  {
    id: '13',
    slug: 'muistisairaan-kotihoito',
    title: 'Muistisairaan kotihoito: Turvallinen arki ja kohtaaminen',
    category: 'Omaisille',
    excerpt: 'Miten tukea muistisairasta kotona? Tutun hoitajan ja kiireettömän kohtaamisen merkitys korostuu arjessa.',
    icon: 'Brain',
    content: `
      <h2>Muistisairaan arki vaatii rutiineja ja rauhaa</h2>
      <p>Muistisairausdiagnoosi muuttaa arkea, ja moni omainen kantaa jatkuvaa huolta läheisensä turvallisuudesta. Vaikka fyysinen toimintakyky olisi vielä hyvä, asioiden unohtelu ja mahdollinen sekavuus tuovat omat haasteensa kotona asumiseen.</p>
      
      <h3>Famulan hoitajat kohtaavat ihmisen, ei sairautta</h3>
      <p>Muistisairaan hoidossa <strong>kiire on pahin vihollinen</strong>. Jos hoitaja vaihtuu jatkuvasti ja asiat tehdään hopulla, sairaus saattaa oireilla voimakkaampana ahdistuksena ja levottomuutena.</p>
      <ul>
        <li><strong>Tuttu hoitaja:</strong> Famulalla käyntiin varataan riittävästi aikaa ja kotiin tulee aina sama hoitaja. Tämä luo muistisairaalle turvallisuuden tunteen.</li>
        <li><strong>Arjen rytmitys:</strong> Autamme ylläpitämään päivärytmiä, muistutamme lääkkeistä ja ruokailuista, ja huolehdimme asunnon turvallisuudesta (kuten levyn sammuttamisesta).</li>
        <li><strong>Inhimillinen kohtaaminen:</strong> Kohtaamme asiakkaan aina arvostavasti. Emme intä vastaan, vaan haemme ratkaisut ymmärryksen kautta.</li>
      </ul>
      <p>Voimme toimia myös omaishoitajan tukena ja tuoda mielenrauhaa silloin, kun et itse pääse paikalle.</p>
    `
  },
  {
    id: '14',
    slug: 'kotiutuminen-sairaalasta',
    title: 'Sairaalasta kotiutuminen: Näin turvaat ikäihmisen toipumisen',
    category: 'Hyvinvointi',
    excerpt: 'Sairaalajakson tai leikkauksen jälkeinen kotiutuminen on kriittinen hetki. Oikea apu estää uudet tapaturmat.',
    icon: 'Activity',
    content: `
      <h2>Kotiinpaluu on iloinen, mutta jännittävä asia</h2>
      <p>Esimerkiksi lonkkaleikkauksen, infektion tai sairauskohtauksen jälkeen sairaalasta kotiutuminen on usein ikäihmiselle sekava vaihe. Sairaalassa apu on ollut napin painalluksen päässä, mutta kotona on pärjättävä jälleen itse. Tilastojen mukaan juuri kotiutumisen jälkeiset viikot ovat suurimman kaatumis- ja tapaturmariskin aikaa.</p>
      
      <h3>Väliaikainen tehotuki Famulalta</h3>
      <p>Kaiken kotiavun ei tarvitse olla vuosikausia kestävää sopimusta. Voit tilata Famulan hoitajan tueksi juuri sairaalasta kotiutumisen jälkeisiksi kriittisiksi viikoiksi:</p>
      <ul>
        <li>Olemme vastassa kotona ja varmistamme, että jääkaapissa on ruokaa.</li>
        <li>Avustamme peseytymisessä, wc-käynneissä ja liikkumisessa silloin, kun voimat ovat vielä vähissä.</li>
        <li>Seuraamme toipumisen edistymistä, haavojen kuntoa ja huolehdimme kotihoito-ohjeiden noudattamisesta lääkkeiden suhteen.</li>
      </ul>
      <p>Kun voimat palautuvat, käyntejä voidaan harventaa tai ne voidaan lopettaa kokonaan – täysin teidän ehdoillanne.</p>
    `
  },
  {
    id: '15',
    slug: 'nain-haet-kotitalousvahennysta',
    title: 'Kuinka haet kotitalousvähennystä käytännössä? Vaiheittainen opas',
    category: 'Kotitalousvähennys',
    excerpt: 'Kotitalousvähennyksen hakeminen on tehty nykyään erittäin helpoksi. Ota kuitit talteen ja tee ilmoitus OmaVerossa näillä ohjeilla.',
    icon: 'FileText',
    content: `
      <h2>Verohyöty taskuun muutamalla klikkauksella</h2>
      <p>Monia jännittää kotitalousvähennyksen hakeminen, koska verotus asiana voi tuntua monimutkaiselta. Todellisuudessa vähennyksen hakeminen on kuitenkin nopeaa ja yksinkertaista, ja se säästää sinulta satoja tai jopa tuhansia euroja vuodessa!</p>
      
      <h3>Vaihe 1: Säästä Famulan laskut</h3>
      <p>Ensimmäinen askel on pitää tallessa kaikki vuoden aikana maksamasi Famulan kotipalvelu- tai siivouslaskut. Famulan laskuilla on aina eriteltynä <strong>työn osuus</strong>, sillä vain työn osuudesta voi saada vähennyksen (mahdollisista tarvikkeista ei). Jos tilaat palvelua säännöllisesti, toimitamme sinulle halutessasi yhteenvedon koko vuoden maksuista kerralla!</p>
      
      <h3>Vaihe 2: Tee ilmoitus OmaVerossa (tai paperilla)</h3>
      <p>Helpoin tapa ilmoittaa kulut on Verohallinnon sähköinen <strong>OmaVero</strong>-palvelu:</p>
      <ol>
        <li>Kirjaudu OmaVeroon pankkitunnuksillasi.</li>
        <li>Valitse etusivulta kohta <em>"Verokortit ja ennakkovero"</em> ja sieltä <em>"Kotitalousvähennys"</em>.</li>
        <li>Ilmoita palvelun tuottaneen yrityksen (Famulan) Y-tunnus.</li>
        <li>Kirjaa laskun loppusumma ja siitä eritelty työn osuus. Järjestelmä laskee 35 % vähennyksen ja 150 euron omavastuun puolestasi täysin automaattisesti!</li>
      </ol>
      <p><em>Vinkki:</em> Voit ilmoittaa kulut pitkin vuotta aina, kun olet maksanut laskun, jolloin veroprosenttisi pienenee heti loppuvuodeksi. Voit myös ilmoittaa kaikki kerralla keväällä esitäytetyn veroilmoituksen tarkistamisen yhteydessä, jolloin saat rahat takaisin veronpalautuksena.</p>
      
      <h3>Voit hakea vähennyksen myös omien vanhempiesi puolesta</h3>
      <p>Muistathan, että voit saada kotitalousvähennyksen myös silloin, kun maksat kotipalvelua tai siivousta omien (tai puolisosi) vanhempien tai isovanhempien kotiin. Tällöin työn tilaajana ja maksajana toimit sinä, mutta työ suoritetaan heidän kodissaan.</p>
    `
  },
  {
    id: '16',
    slug: 'kotitalousvahennys-vanhemmille',
    title: 'Tiesitkö? Voit ostaa kotiapua vanhemmillesi ja saada itse kotitalousvähennyksen',
    category: 'Kotitalousvähennys',
    excerpt: 'Moni ei tiedä, että kotitalousvähennyksen voi saada myös omien tai puolison vanhempien kotiin ostetuista palveluista.',
    icon: 'Gift',
    content: `
      <h2>Verohyöty jopa silloin, kun apu ostetaan toiseen osoitteeseen</h2>
      <p>Kun ikääntyvien vanhempien tai isovanhempien arki alkaa vaatia tukea, lapset haluavat usein auttaa palkkaamalla ammattilaisen avuksi. Monelle tulee kuitenkin yllätyksenä, että tällöin <strong>työn tilaaja voi hyödyntää kotitalousvähennyksen omassa verotuksessaan</strong>.</p>
      
      <h3>Kuinka tämä toimii käytännössä?</h3>
      <p>Laki kotitalousvähennyksestä mahdollistaa sen, että voit saada vähennyksen, kun maksat kotihoitoa, kotipalvelua tai siivousta:</p>
      <ul>
        <li>Omien vanhempiesi kotiin</li>
        <li>Puolisosi vanhempien kotiin</li>
        <li>Omien isovanhempiesi tai puolisosi isovanhempien kotiin</li>
      </ul>
      <p>Tällöin <strong>sinä toimit työn tilaajana ja laskun maksajana</strong>, mutta itse työ suoritetaan läheistesi kodissa. Famula toimittaa laskut suoraan sinulle, jolloin voit helposti ilmoittaa ne omassa OmaVero-palvelussasi aivan kuten ilmoittaisit omaankin kotiin ostetut palvelut.</p>

      <h3>Miksi tämä on niin kannattavaa?</h3>
      <p>Ikäihmisillä itsellään on usein pienet eläkkeet, ja heidän vuotuinen tuloveronsa saattaa olla niin pieni, etteivät he pysty hyödyntämään täyttä kotitalousvähennystä. Työssäkäyvä lapsi sen sijaan maksaa todennäköisesti riittävästi veroja saadakseen koko 35 % vähennyksen (vuonna 2025) hyödynnettyä.</p>
      <p>Tämä on erinomainen tapa tarjota turvaa ja seuraa omille vanhemmille, ja samalla saada merkittävä taloudellinen hyöty yhteiskunnalta. Älä siis epäröi hankkia apua ajoissa!</p>
    `
  },
  {
    id: '17',
    slug: 'seuraa-sairaalaan-tai-hoivakotiin',
    title: 'Vierailut sairaalaan ja hoivakotiin – Ilahduta läheistäsi kiireettömällä seuralla',
    category: 'Omaisille',
    excerpt: 'Voit tilata Famulan hoitajan vierailulle myös sairaalaan tai hoivakotiin lukemaan lehteä, ulkoilemaan ja pitämään seuraa.',
    icon: 'Sun',
    content: `
      <h2>Kun omat resurssit tai aika eivät riitä päivittäisiin vierailuihin</h2>
      <p>Sairaalajaksot tai asuminen hoivakodissa voivat olla ikäihmiselle yksinäistä aikaa. Julkisen puolen hoitajilla ja lääkäreillä on kädet täynnä työtä, ja aikaa jokaiselle potilaalle tai asukkaalle on varattu harmillisen vähän. Päivät voivat tuntua pitkiltä, jos omaiset asuvat kaukana tai käyvät töissä, eivätkä pääse vierailemaan niin usein kuin haluaisivat.</p>
      
      <h3>Famula tuo iloa ja virikkeitä laitoksen arkeen</h3>
      <p>Tiesitkö, että voit tilata Famulan hoitajan vierailemaan läheisesi luona myös sairaalassa tai hoivakodissa? Emme puutu lääketieteelliseen hoitoon, vaan tarjoamme sitä, mistä laitoksissa on huutava pula: <strong>aikaa ja inhimillistä läsnäoloa</strong>.</p>
      <ul>
        <li><strong>Virikkeellinen seura:</strong> Voimme istua alas lukemaan päivän lehteä, keskustella ajankohtaisista asioista tai kuunnella musiikkia.</li>
        <li><strong>Turvallinen ulkoilu:</strong> Sairaalan tai hoivakodin pihalla piipahtaminen pyörätuolin tai rollaattorin kanssa piristää mieltä valtavasti.</li>
        <li><strong>Asiointiapu laitoksessa:</strong> Voimme hakea sairaalan kanttiinista pientä herkkua tai kahvia, ja pitää asiakkaalle seuraa kahvitteluhetken ajan.</li>
      </ul>
      <p>Säännöllinen ystävän vierailu katkaisee pitkän päivän ja ylläpitää elämäniloa. Voit ilahduttaa läheistäsi tilaamalla meidät käymään, ja samalla saat itsellesi mielenrauhan siitä, ettei hän joudu olemaan yksin.</p>
    `
  },
  {
    id: '18',
    slug: 'ikaihmisen-kaatumisen-ehkaisy-kodin-turvallisuus',
    title: 'Ikäihmisen kaatumisen ehkäisy – 5 vinkkiä kodin turvallisuuden parantamiseen',
    category: 'Turvallisuus',
    excerpt: 'Kaatuminen on omaisten suurin pelko. Kokosimme 5 käytännön vinkkiä, joilla ikäihmisen kodin turvallisuutta voi parantaa välittömästi.',
    icon: 'ShieldCheck',
    content: `
      <h2>Arjen tapaturmat pelottavat syystäkin</h2>
      <p>Ikääntyessä tasapaino ja lihasvoima heikkenevät, ja jopa pieni kompastuminen omassa olohuoneessa voi johtaa kohtalokkaaseen lonkkamurtumaan. Vanhuksen kaatumisen ehkäisy onkin usein omaisten suurin yksittäinen huolenaihe, kun mietitään läheisen turvallisuutta kotona.</p>
      
      <h3>5 konkreettista vinkkiä kodin turvallisuuden parantamiseen:</h3>
      <ol>
        <li><strong>Poista liukkaat matot ja kynnykset:</strong> Kodin sisustus kannattaa käydä läpi kriittisin silmin. Kiinnitä mattojen alle liukuesteet tai poista turhat pikkumatot kokonaan. Jos mahdollista, madalla tai poista kynnykset apuvälineiden (kuten rollaattorin) käytön helpottamiseksi.</li>
        <li><strong>Paranna valaistusta:</strong> Heikentynyt näkö on yksi suurimmista syistä kaatumisiin. Huolehdi, että erityisesti yöaikaiset reitit makuuhuoneesta vessaan on valaistu hyvin. Liiketunnistimella toimivat yövalot ovat erinomainen ja edullinen apu.</li>
        <li><strong>Kylpyhuoneen turvavarusteet:</strong> Liukas kylpyhuoneen lattia on kodin vaarallisin paikka. Asenna tukikahvat wc-istuimen ja suihkun yhteyteen, ja hanki suihkuun tukeva suihkutuoli ja lattialle liukuestematto.</li>
        <li><strong>Tavarat käden ulottuville:</strong> Kiipeily jakkaroille on ikäihmiselle ehdoton turvallisuusriski. Järjestä keittiön kaapit niin, että päivittäin tarvittavat astiat ja ruokatarvikkeet ovat helposti saatavilla alatasolla.</li>
        <li><strong>Sopivat jalkineet:</strong> Varmista, että ikäihminen käyttää sisällä tukevia, luistamattomia sisäkenkiä tai jarrusukkia pelkkien villasukkien sijaan.</li>
      </ol>

      <h2>Famulan hoitaja on "turvallinen käsivarsi"</h2>
      <p>Pelkät fyysiset muutokset kodissa eivät kuitenkaan aina riitä poistamaan kaatumisen riskiä. Suurin turva kodin askareissa, ulkoilussa ja suihkukäynneillä on <strong>toisen ihmisen läsnäolo</strong>.</p>
      <p>Famulan yksityinen kotipalvelu tuo ikäihmisen arkeen sen tärkeimmän turvaverkon: tutun hoitajan, joka toimii konkreettisena tukena ja turvallisena käsivartena. Kun hoitajamme on mukana kauppareissulla tai talvisella kävelylenkillä, kaatumisriski pienenee merkittävästi ja askel pysyy varmana.</p>
    `
  },
  {
    id: '19',
    slug: 'ikaihmisen-huono-ruokahalu-ja-ravitsemus',
    title: 'Ikäihmisen huono ruokahalu – Miten turvata riittävä ravitsemus kotona?',
    category: 'Hyvinvointi',
    excerpt: 'Kun ruoka ei maistu ja paino putoaa, omainen huolestuu. Lue, miten yksinäisyyden poistaminen ja kiireetön ruokailuseura palauttavat ruokahalun.',
    icon: 'UtensilsCrossed',
    content: `
      <h2>Ruoka ei maistu yksin syötynä</h2>
      <p>Vanhuksen huono ruokahalu ja siitä seuraava tahaton laihtuminen on erittäin yleinen huolenaihe omaisten keskuudessa. Ravitsemuksen heikentyessä myös lihasvoima ja mieliala laskevat nopeasti, mikä puolestaan vaikeuttaa kotona pärjäämistä.</p>
      <p>Syitä ruokahaluttomuuteen on useita: makuaistin heikkeneminen, lääkkeiden sivuvaikutukset tai pureskelun vaikeus. Yksi suurimmista ja usein unohdetuista syistä on kuitenkin <strong>yksinäisyys</strong>. Kuka meistä nauttisi ruokailusta yksin, hiljaisessa keittiössä päivästä ja viikosta toiseen?</p>

      <h3>Vinkkejä ikäihmisen ravitsemuksen tukemiseen:</h3>
      <ul>
        <li><strong>Pienet, energiatiheät ateriat:</strong> Suuret annokset voivat viedä ruokahalun jo pelkällä koollaan. Tarjoa 5–6 pientä, mutta energia- ja proteiinipitoista ateriaa päivän aikana.</li>
        <li><strong>Helppo purtava:</strong> Suosi pehmeitä, helposti pureskeltavia ja nieltäviä ruokia (esim. keitot, soseet, uunikalat).</li>
        <li><strong>Makujen voimistaminen:</strong> Koska ikääntyessä makuaisti heikkenee, ruoan maustamiseen (kuten yrttien käyttöön) kannattaa kiinnittää erityistä huomiota.</li>
      </ul>

      <h2>Yhdessä syöminen on paras lääke</h2>
      <p>Pelkkä mikroaterioiden tuominen jääkaappiin ei useinkaan riitä ratkaisemaan ongelmaa, jos vanhus ei muista tai jaksa niitä lämmittää.</p>
      <p>Tässä Famulan kiireetön kotihoito pääsee loistamaan. Me emme vain tuo ruokaa ovelle, vaan teemme ruokailusta tapahtuman. Hoitajamme voivat laittaa ruokaa paikan päällä asiakkaan keittiössä, jolloin asunnon täyttävä, tuttu <strong>ruoan tuoksu herättää ruokahalun</strong> luonnollisesti. Mikä tärkeintä, hoitajamme istuvat alas pöytään ja syövät yhdessä asiakkaan kanssa. Yhteiset juttuhetket ja rauhallinen ilmapiiri tekevät ihmeitä – yhdessä syödessä ruoka yksinkertaisesti maistuu paremmalta.</p>
    `
  },
  {
    id: '20',
    slug: 'milloin-palvelutaloon-vanhuksen-kotona-asumisen-tukeminen',
    title: 'Milloin palvelutaloon? Keinoja, joilla vanhuksen kotona asumista voi pitkittää turvallisesti',
    category: 'Omaisille',
    excerpt: 'Milloin omat rahkeet tai kunnan kotihoito eivät enää riitä? Palveluasumista voi usein lykätä jopa vuosilla oikeanlaisen yksityisen kotipalvelun tuella.',
    icon: 'Home',
    content: `
      <h2>Vaikea päätös edessä?</h2>
      <p>"Milloin on oikea aika muuttaa palvelutaloon?" Tämä kysymys risteilee monen omaisen mielessä, kun vanhemman turvallisuus kotona alkaa huolestuttaa. Usein omaiset uupuvat yrityksessään hoitaa omat työnsä, perheensä sekä huolehtia samaan aikaan ikääntyvän vanhemman päivittäisistä asioista.</p>
      <p>Palveluasuminen ei kuitenkaan ole ainoa, saati aina paras tai edullisin, vaihtoehto silloin, kun avuntarve lisääntyy.</p>

      <h3>Merkkejä siitä, että nykyiset järjestelyt eivät ehkä riitä:</h3>
      <ul>
        <li>Toistuvat kaatumiset tai lääkevirheet.</li>
        <li>Omaisen jatkuva, stressaava huoli ja fyysinen uupumus.</li>
        <li>Kunnallisen kotihoidon käynnit ovat liian lyhyitä (esim. 15 minuuttia) eikä vanhus ehdi kertoa asioistaan.</li>
        <li>Vanhus kokee turvattomuutta tai masennusta yksinolosta.</li>
      </ul>

      <h2>Palveluasumista voi lykätä oikealla tuella</h2>
      <p>Moni kuvittelee, että vaihtoehdot ovat ainoastaan "yksin pärjääminen" tai "laitokseen muuttaminen". Totuus on, että kotona asumista voidaan jatkaa turvallisesti ja mielekkäästi todella pitkään yhdistämällä julkisia ja yksityisiä palveluita fiksusti.</p>
      
      <p><strong>Famulan yksityinen kotihoito täyttää julkisen puolen jättämät aukot:</strong></p>
      <p>Kunnat pystyvät hoitamaan erinomaisesti välttämättömän sairaanhoidon ja lääkejaon. Se, mikä kotona pärjäämisen usein kuitenkin ratkaisee, on arjen mielekkyys: se, että koti on siisti, jääkaapissa on hyvää ruokaa, ja kotona käy <strong>sama tuttu ystävä</strong>, jolla on aikaa kuunnella, lähteä ulos kävelylle ja tuoda turvaa.</p>
      <p>Räätälöidyllä, kiireettömällä kotipalvelulla asiakas voi jatkaa elämäänsä omassa, rakkaassa kodissaan. Tämä ratkaisu on paitsi inhimillisempi asiakkaalle, usein myös huomattavasti edullisempi ja joustavampi ratkaisu palvelutaloon verrattuna. Näin tuomme mielenrauhan myös teille omaisille.</p>
    `
  }
];
