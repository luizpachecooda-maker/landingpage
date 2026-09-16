import React from 'react';
import { LyonLogo } from './LyonLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MapPin, Calculator } from 'lucide-react';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';

export function Navbar() {
  const handleCtaClick = () => {
    trackWhatsAppPixel('Navbar CTA');
  };

  return (
    <header
      id="header-nav"
      className="sticky top-0 z-50 w-full bg-[#0B1F3D]/95 backdrop-blur-md border-b border-[#C9A227]/20 shadow-md shadow-black/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#"
          id="nav-logo-link"
          className="transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
          aria-label="Lyon Energy Página Inicial"
        >
          <LyonLogo size="md" />
        </a>

        {/* Center: Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-semibold text-slate-300">
          <a href="#simulador" className="hover:text-[#C9A227] transition-colors flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Simulador</span>
          </a>
          <a href="#beneficios" className="hover:text-[#C9A227] transition-colors">
            Benefícios
          </a>
          <a href="#como-funciona" className="hover:text-[#C9A227] transition-colors">
            Como Funciona
          </a>
          <a href="#instalacoes-reais" className="hover:text-[#C9A227] transition-colors">
            Projetos Reais
          </a>
        </nav>

        {/* Right: Sticky WhatsApp Button */}
        <a
          id="nav-whatsapp-cta"
          href={getWhatsAppUrl("Olá Lyon Energy! Gostaria de fazer uma simulação de energia solar.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 fill-current" />
          <span className="whitespace-nowrap font-medium tracking-wide">Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

