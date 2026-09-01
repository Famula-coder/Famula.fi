"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import { useState, useRef } from 'react';
import { Heart, ExternalLink, ArrowRight, ChevronDown, ShoppingCart, UtensilsCrossed, Sparkles, HandHeart, Footprints, Music2, Phone, Coffee, User, Star, ChevronLeft, ChevronRight, Quote, Play, X, Stethoscope, ShieldCheck } from 'lucide-react';
import PricingPackagesList from '../components/PricingPackages';

const testimonials = [
  { text: "Minä aina odotan näitä päiviä, kun sinä tulet. Siitä tulee niin hyvä mieli, että hykerryttää! Sinä et hoida pelkästään minun kotia, vaan myös minun mieltä.", author: "Omainen", city: "Kuopio", tag: "Kotipalvelu ja Seura", icon: <Heart size={20} color="white" /> },
  { text: "Saatiin niin monta asiaa hoidettua! Nyt on taas vapaampi hengittää.", author: "Asiakas", city: "Laukaa", tag: "Asiointiapu", icon: <Sparkles size={20} color="white" /> },
  { text: "Oot sinä melkoinen epeli, kun vesilukonkin korjasit! Olet minun enkelini.", author: "Asiakas", city: "Jyväskylä", tag: "Apumiespalvelu", icon: <Star size={20} color="white" /> },
  { text: "Pyysin teitä asiointiapuun, mutta sainkin samalla apua ihan kaikkeen, mitä keksinkään!", author: "Asiakas", city: "Lappeenranta", tag: "Kotihoito", icon: <User size={20} color="white" /> },
  { text: "Voi että, huolisin sinut tänne vaikka joka päivä minua piristämään!", author: "Asiakas", city: "Oulu", tag: "Seura", icon: <Coffee size={20} color="white" /> },
];

/* ── Tiimiläiset ── */
const team = [
  {
    name: 'Valma Linnanmäki',
    title: 'Perustaja & Toimitusjohtaja',
    img: `/valma.png`,
    quote: 'Perustin Famulan, koska jokainen ihminen ansaitsee jonkun joka välittää.',
    tall: true,
  },
  {
    name: 'Alma',
    img: `/alma.avif`,
    region: '/oulu',
    regionName: 'Oulu',
    quote: 'Parasta työssäni on se, kun asiakas odottaa käyntiäni hymyssä suin ja iloisin mielin.',
  },
  /* Uusimaa piilotettu
  {

    name: 'Riina',
    img: `/riina.avif`,
    region: '/uusimaa',
    regionName: 'Uusimaa',
    quote: 'Nautin arjen pienistä hetkistä – yhteiset juttutuokiot kahvikupin äärellä ovat kultakin kalliimpia.',
  
  },
  */
  {
    name: 'Julia',
    img: `/julia.avif`,
    region: '/pohjois-savo',
    regionName: 'Pohjois-Savo',
    quote: 'Teen tätä sydämellä – jokainen kohtaaminen on ainutlaatuinen.',
  },
  {
    name: 'Paula',
    img: `/paula.avif`,
    region: '/etela-karjala',
    regionName: 'Etelä-Karjala',
    quote: 'Aito läsnäolo on paras lääke, ja sitä annan joka päivä.',
  },
  {
    name: 'Leena',
    img: `/leena.png`,
    region: '/keski-suomi',
    regionName: 'Keski-Suomi',
    quote: 'Omien läheisteni kautta ymmärrän, kuinka valtavan tärkeää on voida luottaa hoitajaan täysin.',
  },
];

/* ── Palvelut ── */
const services = [
  {
    icon: <Coffee size={24} />,
    title: 'Seuranpito ja ystäväpalvelu',
    short: 'Aitoa läsnäoloa ja seuraa arkeen. Teemme asioita yhdessä ja nautimme kiireettömistä hetkistä.',
    detail: 'Vietämme aikaa yhdessä rupatellen, muistellen tai vain yhdessä ollen. Toimimme kiireettömänä seuranpitäjänä ja ulkoiluapuna ikäihmiselle.',
    color: 'var(--color-accent)',
    colorLight: 'rgba(230,190,186,0.18)',
    borderColor: '#e6beba',
    image: '/images/katsellaanvalokuvia.webp',
    imageAlt: 'Hoitaja ja asiakas katselevat yhdessä vanhoja valokuvia ja muistelevat',
    videoId: 'CXMxx_qO5W8'
  },
  {
    icon: <Footprints size={24} />,
    title: 'Ulkoilu ja seurustelu',
    short: 'Joskus tärkeintä on vain istahtaa alas kahvikupillisen ääreen ja jutella.',
    detail: 'Lähdemme mielellämme seuraksi kävelylle, lääkärikäynnille tai vaikkapa teatteriin.',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.12)',
    borderColor: '#7F9A83',
    image: '/images/talvi_ulkoilu.png',
    imageAlt: 'Turvallista seuraa vanhukselle ulkoillessa talvisessa maisemassa',
    videoId: 'PTeeSlVmxf4'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Kodin siisteys ja vaatehuolto',
    short: 'Pidämme kotisi raikkaana ja viihtyisänä.',
    detail: 'Autamme pitämään kodin raikkaana ja viihtyisänä. Kevyt siivousapu ikäihmiselle on tärkeä osa arjen turvallisuutta.',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    borderColor: '#7F6890',
    image: '/images/siivous.webp',
    imageAlt: 'Famulan hoitaja siivoaa kotia huolellisesti ja kiireettömästi',
    videoId: '2U3Zei7Q7Z4'
  },
  {
    icon: <HandHeart size={24} />,
    title: 'Henkilökohtainen huolenpito',
    short: 'Avustamme päivittäisissä toimissa hienotunteisesti ja yksityisyyttäsi kunnioittaen.',
    detail: 'Avustamme peseytymisessä, pukeutumisessa ja muissa päivittäisissä toimissa täysin yksityisyyttäsi kunnioittaen.',
    color: 'var(--color-primary)',
    colorLight: 'rgba(8,36,52,0.08)',
    borderColor: '#082434',
    image: '/images/keskustelu.webp',
    imageAlt: 'Sairaanhoitaja ja asiakas keskustelevat terveydentilasta'
  },
  {
    icon: <UtensilsCrossed size={24} />,
    title: 'Ruoanlaitto ja ravitsemus',
    short: 'Valmistamme maistuvaa kotiruokaa yhdessä tai puolestasi.',
    detail: 'Valmistamme ravitsevaa ja maistuvaa kotiruokaa yhdessä tai puolestasi.',
    color: 'var(--color-accent)',
    colorLight: 'rgba(230,190,186,0.18)',
    borderColor: '#e6beba',
    image: '/images/pilkotaanomenia.webp',
    imageAlt: 'Hoitaja auttaa vanhusta ruoanlaitossa kotona'
  },
  {
    icon: <Music2 size={24} />,
    title: 'Iloa harrastuksista',
    short: 'Autamme sinua osallistumaan sinulle tärkeisiin tapahtumiin ja virkistystoimintaan.',
    detail: 'Emme hoida vain pakollisia askareita — autamme sinua nauttimaan elämästä täysillä.',
    color: 'var(--color-lavender)',
    colorLight: 'rgba(127,104,144,0.1)',
    borderColor: '#7F6890',
    image: '/images/kastellaankukkia.webp',
    imageAlt: 'Hoitaja auttaa kodin askareissa kastellen kukkia'
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'Kauppa- ja asiointiapu',
    short: 'Käymme puolestasi kaupassa tai lähdemme seuraksi ja tueksi asioille.',
    detail: 'Käymme puolestasi ruokakaupassa tai apteekissa, tai lähdemme turvalliseksi asiointiavuksi ikäihmiselle.',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.12)',
    borderColor: '#7F9A83',
    image: '/images/kauppa2.jpg',
    imageAlt: 'Hoitaja ja ikäihminen ostoskärryjen kanssa ruokakaupassa'
  },
  {
    icon: <Stethoscope size={24} />,
    title: 'Lääke- ja sairaanhoito',
    short: 'Kriittinen tuki kotona asumiseen turvallisesti, ammattilaisen toteuttamana.',
    detail: 'Huolehdimme lääkkeiden jaosta ja antamisesta ajallaan. Seuraamme vointia (mm. verenpaine ja verensokeri), teemme haavanhoidot ja injektiot luotettavasti.',
    color: 'var(--color-primary)',
    colorLight: 'rgba(8,36,52,0.1)',
    borderColor: '#082434',
    image: '/images/henkilokohtainen.png',
    imageAlt: 'Hoitaja auttaa ystävällisesti ja kunnioittavasti ikäihmistä pukemisessa'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Perushoiva ja arjen tuki',
    short: 'Takaamme elämänlaadun ja inhimillisen arjen, kun omat voimat alkavat iän myötä vähentyä.',
    detail: 'Avustamme lempeästi päivittäisissä perusasioissa, kuten pukeutumisessa, peseytymisessä sekä kodin arjen pyörittämisessä luoden turvallisuuden tunnetta.',
    color: 'var(--color-secondary)',
    colorLight: 'rgba(127,154,131,0.12)',
    borderColor: '#7F9A83',
    image: '/images/harrastus.webp',
    imageAlt: 'Mukavaa yhteistä tekemistä ja harrastamista olohuoneessa'
  }
];




const Home = () => {
  const navigate = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth > 400 ? 400 : clientWidth) : scrollLeft + (clientWidth > 400 ? 400 : clientWidth);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      

      <style>{`
        /* ── Video-osio ── */
        .video-section {
          padding: 5rem 0;
          background: var(--color-white);
        }
        .video-section-inner {
          display: flex;
          align-items: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .video-text { flex: 1 1 320px; }
        .video-text .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.1rem;
          background: var(--color-light-gray);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-secondary);
          margin-bottom: 1.25rem;
        }
        .video-text h2 {
          font-size: 2.2rem;
          color: var(--color-primary);
          margin-bottom: 1.25rem;
          line-height: 1.25;
        }
        .video-text p {
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.7;
        }
        .video-embed-wrapper {
          flex: 1.4 1 420px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          aspect-ratio: 16/9;
          background: #000;
        }
        .video-embed-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* ── Välittäminen-osio ── */
        .caring-section {
          padding: 6rem 0;
          background: var(--color-light-gray);
        }
        .caring-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 4rem;
        }
        .caring-header .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.1rem;
          background: rgba(155,194,166,0.15);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-secondary);
          margin-bottom: 1.25rem;
        }
        .caring-header h2 {
          font-size: 2.4rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .caring-header p {
          color: #475569;
          font-size: 1.1rem;
        }

        /* Founder hero card */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          background: white;
          border-radius: 28px;
          padding: 3rem;
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .founder-img-wrap {
          position: relative;
          flex: 0 0 auto;
        }
        .founder-img-bg {
          position: absolute;
          inset: -12px;
          background: linear-gradient(135deg, rgba(155,194,166,0.4) 0%, rgba(230,190,186,0.3) 100%);
          border-radius: 50%;
          z-index: 0;
        }
        .founder-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          position: relative;
          z-index: 1;
          border: 4px solid white;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .founder-text { flex: 1 1 300px; }
        .founder-name {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.25rem;
        }
        .founder-role {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .founder-quote {
          font-size: 1.2rem;
          font-style: italic;
          color: #334155;
          line-height: 1.7;
          border-left: 4px solid var(--color-accent);
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .founder-story-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          color: var(--color-secondary);
          text-decoration: none;
          font-size: 1rem;
          transition: gap 0.2s ease;
        }
        .founder-story-link:hover { gap: 0.7rem; }

        /* Tiimikortit */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }
        .team-card-img-wrap {
          position: relative;
          padding-top: 110%;
          background: linear-gradient(135deg, rgba(155,194,166,0.25) 0%, rgba(230,190,186,0.2) 100%);
          overflow: hidden;
        }
        .team-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .team-card-body {
          padding: 1.25rem;
        }
        .team-card-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-primary);
          margin-bottom: 0.2rem;
        }
        .team-card-title {
          font-size: 0.85rem;
          color: var(--color-secondary);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .team-card-quote {
          font-size: 0.95rem;
          color: #475569;
          font-style: italic;
          line-height: 1.5;
        }

        /* Testimonials Carousel */
        .testimonials-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonials-track {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 1.5rem 4rem 1.5rem;
          align-items: stretch;
        }
        .testimonials-track::-webkit-scrollbar {
          display: none;
        }
        .testimonial-card {
          flex: 0 0 350px;
          scroll-snap-align: center;
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease;
          height: auto;
          min-height: 100%;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .testimonial-card {
            flex: 0 0 75vw;
          }
          .testimonials-track {
            gap: 1.25rem;
            padding: 1rem 1rem 4rem 1rem;
            scroll-padding-left: 1rem;
          }
        }
        .testimonial-quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: var(--color-accent);
          opacity: 0.3;
        }
        .testimonial-text {
          font-size: 1.15rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .testimonial-author-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid #f1f5f9;
          padding-top: 1.5rem;
        }
        .testimonial-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .testimonial-author-info {
          display: flex;
          flex-direction: column;
        }
        .testimonial-signature {
          font-family: 'Caveat', cursive;
          font-size: 1.7rem;
          color: var(--color-primary);
          line-height: 1;
        }
        .testimonial-city {
          font-size: 0.85rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .testimonial-tag {
          display: inline-block;
          background: var(--color-background-warm);
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          align-self: flex-start;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--color-primary);
          z-index: 10;
          transition: all 0.2s ease;
        }
        .carousel-btn:hover {
          background: var(--color-primary);
          color: white;
        }
        .carousel-btn.left { left: -25px; }
        .carousel-btn.right { right: -25px; }
        @media (max-width: 1250px) {
          .carousel-btn { display: none; }
        }



        /* ── Hinnasto-osio ── */
        .pricing-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #fdf0ee 0%, #f0f7f1 100%);
        }
        .pricing-inner {
          display: flex;
          align-items: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .pricing-text { flex: 1 1 340px; }
        .pricing-text .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(155,194,166,0.15);
          border-radius: 50px;
          padding: 0.5rem 1.1rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 1.25rem;
        }
        .pricing-text h2 {
          font-size: 2.4rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .pricing-text p {
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .pricing-card {
          flex: 0 0 auto;
          background: white;
          border-radius: 24px;
          padding: 2.5rem 3rem;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          min-width: 280px;
        }
        .pricing-price {
          font-size: 3.8rem;
          font-weight: 800;
          color: var(--color-accent);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .pricing-unit {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 0.5rem;
        }
        .pricing-note {
          display: inline-block;
          background: rgba(155,194,166,0.15);
          color: var(--color-secondary);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.75rem;
        }
        .pricing-divider {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin-bottom: 1.5rem;
        }
        .pricing-deduction-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          background: rgba(155,194,166,0.12);
          border-radius: 50px;
          padding: 0.6rem 1.2rem;
          transition: background 0.2s ease;
        }
        .pricing-deduction-link:hover {
          background: rgba(155,194,166,0.25);
        }

        /* ── Palvelukortit-osio ── */
        .services-strip {
          background: rgba(155,194,166,0.12);
          padding: 5rem 0;
        }

        /* ── Accordion Responsive ── */
        .accordion-header {
          padding: 1.75rem 2rem;
          gap: 1.25rem;
        }
        .accordion-icon {
          width: 52px;
          height: 52px;
          font-size: 1.5rem;
        }
        .accordion-title {
          font-size: 1.15rem;
        }
        .accordion-content-inner {
          padding: 0 2rem 2rem;
        }
        @media (max-width: 600px) {
          .accordion-header {
            padding: 1.25rem 1rem;
            gap: 0.75rem;
          }
          .accordion-icon {
            width: 44px;
            height: 44px;
            font-size: 1.25rem;
          }
          .accordion-title {
            font-size: 1rem;
          }
          .accordion-content-inner {
            padding: 0 1rem 1.5rem;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <Hero />
      <TrustBar />

      {/* ── ASIAKKAAT KERTOVAT (DYNAAMINEN KARUSELLI) ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--color-background-warm)', overflow: 'hidden' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '3rem' }}>Asiakkaamme kertovat</h2>

          <div className="testimonials-wrapper">
            <button className="carousel-btn left" onClick={() => scrollTestimonials('left')} aria-label="Edellinen">
              <ChevronLeft size={24} />
            </button>

            <div className="testimonials-track" ref={scrollRef}>
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <Quote className="testimonial-quote-icon" size={40} />
                  <span className="testimonial-tag">{t.tag}</span>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>

                  <div className="testimonial-author-row">
                    <div className="testimonial-avatar" style={{ background: index % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-lavender)' }}>
                      {t.icon}
                    </div>
                    <div className="testimonial-author-info text-left">
                      <span className="testimonial-signature">{t.author}</span>
                      <span className="testimonial-city">{t.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn right" onClick={() => scrollTestimonials('right')} aria-label="Seuraava">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </section>

      <section id="palvelut" style={{ background: 'var(--color-light-gray)', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.5rem 1.1rem', background: 'rgba(155,194,166,0.15)',
            borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
            color: 'var(--color-secondary)', marginBottom: '1rem',
          }}>
            <Sparkles size={14} /> Kaikki mitä tarvitset
          </div>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Mitä Famulan kotipalveluun ja kotihoitoon kuuluu?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Koostamme juuri sinun näköisesi palvelukokonaisuuden — alla esimerkkejä osa-alueista.
          </p>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                borderTop: `4px solid ${s.borderColor}`,
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(0,0,0,0.10)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                {s.videoId && (
                  <div 
                    onClick={() => setActiveVideo(s.videoId)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0,0,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
                  >
                    <div style={{
                      background: 'white',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      color: 'var(--color-primary)'
                    }}>
                      <Play size={20} style={{ marginLeft: '4px' }} />
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: s.colorLight,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: s.color,
                  marginBottom: '0.25rem'
                }}>
                  {s.icon}
                </div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '1.05rem' }}>{s.title}</div>
                <div style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65' }}>{s.short}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Aina sinun ehdoillasi */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, rgba(155,194,166,0.18) 0%, rgba(230,190,186,0.15) 100%)',
          borderRadius: '20px',
          padding: '2rem 2.5rem',
          display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
          border: '1px solid rgba(155,194,166,0.25)',
        }}>
          <Heart size={28} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Aina sinun ehdoillasi
            </div>
            <p style={{ color: '#475569', lineHeight: '1.7', margin: 0, fontSize: '1rem', marginBottom: '0.75rem' }}>
              Moni huolestunut omainen etsii luotettavaa kotiapua vanhemmalleen tai vanhukselle. Me Famulalla ymmärrämme tämän huolen ja tarjoamme ikäihmisille kiireetöntä tukea arkeen.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.7', margin: 0, fontSize: '1rem' }}>
              Palvelu alkaa aina <strong>ilmaisella tutustumiskäynnillä</strong>, jossa kuuntelemme toiveitasi ja suunnittelemme yhdessä juuri sinun arkeasi parhaiten tukevan kokonaisuuden. Meille on kunnia-asia olla luottamuksesi arvoisia.
            </p>
          </div>
        </div>
      </div>
    </section>

    
{/* ── ESIMERKIT / ACCORDION ── */}
    <section style={{ background: 'var(--color-light-gray)', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 3rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.5rem 1.1rem', background: 'rgba(230,190,186,0.15)',
            borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem',
            color: 'var(--color-primary)', marginBottom: '1rem',
          }}>
            <Heart size={14} /> Räätälöityä juuri sinulle
          </div>
          <h2 style={{ 
            color: 'var(--color-primary)', 
            marginBottom: '0.75rem',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}>
            Räätälöimme palvelun juuri teidän tarpeisiinne
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Meillä ei ole valmiita &ldquo;liukuhihnapaketteja&rdquo;. Jokainen ihminen ja tilanne on erilainen, joten palvelun sisältö ja tunnit räätälöidään aina tismalleen sinun toiveidesi mukaan. Tässä kolme esimerkkiä siitä, millaisia apukokonaisuuksia asiakkaamme ovat itselleen koonneet.
          </p>
        </div>

        <PricingPackagesList />


        
{/* CTA */}
        <div style={{
          marginTop: '3.5rem',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f3a52 100%)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          color: 'white',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>❤️</div>
          <h3 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.5rem' }}>
            Miten voisimme auttaa juuri sinua?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto 2rem' }}>
            Valitse alueesi alta tai soita suoraan meille. Tulemme mielellämme ilmaiselle tutustumiskäynnille keskustelemaan tarpeistanne – täysin sitoumuksetta.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <select 
                className="btn btn-primary"
                style={{ 
                  appearance: 'none', 
                  paddingRight: '2.5rem',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  fontWeight: '600',
                  height: '100%',
                  minHeight: '3.2rem'
                }}
                onChange={(e) => {
                  if (e.target.value) navigate.push(e.target.value);
                }}
                defaultValue=""
              >
                <option value="" disabled>Valitse alueesi...</option>
                <option value="/keski-suomi">Keski-Suomi</option>
                <option value="/pohjois-savo">Pohjois-Savo</option>
                <option value="/oulu">Oulu</option>
                <option value="/etela-karjala">Etelä-Karjala</option>
                {/* <option value="/uusimaa">Uusimaa</option> */}
              </select>
              <ChevronDown size={18} style={{ position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'white' }} />
            </div>
            <a href="tel:0447569399" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 1.75rem', borderRadius: '50px',
              border: '2px solid rgba(255,255,255,0.35)', color: 'white',
              textDecoration: 'none', fontWeight: '600', fontSize: '1rem',
              transition: 'border-color 0.2s ease',
            }}>
              <Phone size={18} /> 044 756 9399
            </a>
          </div>
        </div>

      </div>
    </section>

      {/* ── VIDEO-OSIO ── */}
      <section className="video-section">
        <div className="container video-section-inner">
          <div className="video-text">
            <div className="eyebrow">
              <Heart size={14} /> Tutustumiseen
            </div>
            <h2>Katso, miten Famula toimii arjessa</h2>
            <p>
              Famulassa aito välittäminen näkyy jokaisessa kohtaamisessa.
              Tule tutustumaan: ensimmäinen käynti on aina maksuton, eikä se sido sinua vielä mihinkään.
              Suunnittelemme palvelut vasta, kun olemme yhdessä todenneet ne sinulle sopiviksi.
            </p>
          </div>
          <div className="video-embed-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/pICF_LhldPU?rel=0&modestbranding=1"
              title="Famula – Kiireetöntä hoivaa kotiin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── VÄLITTÄMINEN – PERUSTAJA + TIIMI ── */}
      <section className="caring-section">
        <div className="container">
          <div className="caring-header">
            <div className="eyebrow">
              <Heart size={14} /> Ihmiset Famulan takana
            </div>
            <h2>Välittäminen on meille enemmän kuin työtä</h2>
            <p>
              Jokainen Famulan hoitaja on valittu tehtäväänsä suurella sydämellä.
              Tunnemme asiakkaamme ja heidän tarpeensa, sillä tutustumme aina rauhassa jo ennen palvelun aloitusta.
            </p>
          </div>

          {/* Perustaja-kortti */}
          <div className="founder-card">
            <div className="founder-img-wrap">
              <div className="founder-img-bg" />
              <Image
                className="founder-img"
                src={`${import.meta.env.BASE_URL}valma.png`}
                alt="Valma Linnanmäki, Famulan perustaja"
                width={200}
                height={200}
              />
            </div>
            <div className="founder-text">
              <div className="founder-name">Valma Linnanmäki</div>
              <div className="founder-role">Perustaja &amp; Toimitusjohtaja</div>
              <blockquote className="founder-quote">
                &ldquo;Perustin Famulan, koska tiesin mitä tarkoittaa kun läheistä ei ole kukaan auttamassa.
                Me Famulalla emme vain suorita tehtäviä — tuomme mukanamme oikean ihmisen, joka välittää aidosti.&rdquo;
              </blockquote>
              <Link href="/tarinamme/" className="founder-story-link">
                Lue koko tarina <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Tiimikortit */}
          <div className="team-grid">
            {team.slice(1).map((member) => (
              <div key={member.name} className="team-card">
                <Link href={member.region || '/'} style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                  <div className="team-card-img-wrap">
                    <Image
                      className="team-card-img"
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="team-card-body">
                    <div className="team-card-name">
                      {member.name}{member.regionName ? `, ${member.regionName}` : ''}
                    </div>
                    <p className="team-card-quote">&ldquo;{member.quote}&rdquo;</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HINNASTO ── */}
      <section id="hinnat" className="pricing-section">
        <div className="container pricing-inner">
          <div className="pricing-text">
            <div className="eyebrow">💰 Selkeä hinnoittelu</div>
            <h2>Reilu hinta,<br />ei piilomaksuja</h2>
            <p>
              Tarjoamme apua ja tukea ihan jokaiselle! Palvelemme niin yksityisasiakkaita
              kuin sosiaalihuollon asiakkaita. Hinnoittelumme on aina kiinteä ja täysin läpinäkyvä.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Muistathan myös, että voit saada palveluistamme kotitalousvähennyksen –
              hyödynnä etu täysimääräisesti!
            </p>
          </div>
          <div className="pricing-card">
            <div className="pricing-price">39,95€</div>
            <div className="pricing-unit">tunnilta (alv 0%)</div>
            <div className="pricing-note">Sosiaalihuollon asiakkaille</div>
            <hr className="pricing-divider" />
            <a
              href="https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/"
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-deduction-link"
            >
              <ExternalLink size={15} />
              Muista kotitalousvähennys →
            </a>
          </div>
        </div>
      </section>

      {/* ── YHTEYDENOTTOLOMAKE ── */}
      {/* <section id="contact-section" style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--color-background-warm)' }}>
        <div className="container">
          <ContactForm />
        </div>
      </section> */}

      {/* Video Modal (Lightbox) */}
      {activeVideo && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <button 
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '10px'
            }}
          >
            <X size={32} />
          </button>
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '400px', // Shorts are vertical, keep it narrow
              aspectRatio: '9/16',
              background: 'black',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
