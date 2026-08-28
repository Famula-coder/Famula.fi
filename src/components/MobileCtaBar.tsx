"use client";
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

// Haetaan aluesivujen puhelinnumero tai käytetään yleistä numeroa
const GENERAL_PHONE = "0408063737";
const WHATSAPP_NUMBER = "358408063737";
const WHATSAPP_MSG = "Hei!%20Olisin%20kiinnostunut%20Famulan%20palveluista.";

const MobileCtaBar = () => {
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
