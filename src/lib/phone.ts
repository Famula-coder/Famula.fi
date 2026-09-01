import { regions } from '../data/regions';

/** Pääkonttorin yleinen numero - käytetään kun sivulla ei ole aluekontekstia eikä käyttäjä ole valinnut aluetta. */
export const GENERAL_PHONE = '0447569399';

/** Selvittää URL-polun ensimmäisestä segmentistä, ollaanko jonkin alueen omalla sivulla (esim. /oulu, /oulu/omavalvonta). */
export function getRegionFromPathname(pathname: string) {
  const slug = pathname.split('/').filter(Boolean)[0];
  return regions.find((region) => region.id === slug);
}

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/\s/g, '')}`;
}
