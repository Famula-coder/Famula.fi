"use client";
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';

const GENERAL_PHONE = "0447569399";
const WHATSAPP_NUMBER = "358447569399";
const WHATSAPP_MSG = "Hei!%20Olisin%20kiinnostunut%20Famulan%20palveluista.";

const MobileCtaBar = () => {
  const pathname = usePathname();

  // Näytetään vain etusivulla – alueiden omilla sivuilla on omat numerot
  if (pathname !== '/') return null;

  return (
    <div className="mobile-cta-bar">
      <a href={`tel:${GENERAL_PHONE}`} className="cta-call">
        <Phone size={18} />
        Soita meille
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-whatsapp"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
};

export default MobileCtaBar;
