import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackWhatsAppPixel('Botão Flutuante WhatsApp');
  };

  if (!visible) return null;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center group">
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl("Olá Lyon Energy! Gostaria de tirar dúvidas e solicitar uma simulação gratuita de energia solar.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-black/60 hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Falar agora no WhatsApp com a Lyon Energy"
      >
        {/* Pulse attention ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#0B1F3D]" />
        </span>

        <WhatsAppIcon className="w-7 h-7 fill-current flex-shrink-0" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Simular no WhatsApp
        </span>
      </a>
    </aside>
  );
}

