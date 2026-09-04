"use client";
import { useState, type MouseEvent, type ReactNode } from 'react';
import { toTelHref } from '../lib/phone';

interface CallCtaButtonProps {
  phone: string;
  label: string;
  icon: ReactNode;
  className?: string;
  labelClassName?: string;
  ariaLabel?: string;
  copiedLabel?: string;
}

/**
 * tel:-linkki joka toimii puhelimessa normaalisti (avaa soittonäkymän), mutta
 * tietokoneella (hiiri, ei kosketusnäyttöä) käyttöjärjestelmä yrittää usein avata
 * jonkin puheluita hallitsevan sovelluksen (esim. FaceTime) - kopioidaan sen sijaan
 * numero leikepöydälle ja näytetään se painikkeen tekstissä.
 */
const CallCtaButton = ({ phone, label, icon, className, labelClassName, ariaLabel, copiedLabel }: CallCtaButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    e.preventDefault();
    navigator.clipboard?.writeText(phone).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <a href={toTelHref(phone)} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {icon}
      <span className={labelClassName}>{copied ? (copiedLabel ?? `Numero kopioitu: ${phone}`) : label}</span>
    </a>
  );
};

export default CallCtaButton;
