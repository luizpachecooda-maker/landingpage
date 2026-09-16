import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';

export function ConversionSection() {
  const handleCtaClick = () => {
    trackWhatsAppPixel('Seção Final de Conversão CTA');
  };

  return (
    <section id="conversao" className="py-16 sm:py-24 relative overflow-hidden bg-[#061224]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A227]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-[#08162B] to-[#0B1F3D] rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#C9A227]/40 shadow-2xl shadow-black/60 text-center relative overflow-hidden">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#C9A227]/10 rounded-br-full blur-xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-tl-full blur-xl pointer-events-none" />

          {/* Flash Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3D] border border-[#C9A227]/40 text-[#C9A227] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-[#C9A227]" />
            Economia Imediata no Seu Bolso
          </div>

          {/* Core Short Text from User Prompt */}
          <h2
            id="conversion-heading"
            className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto"
          >
            Pronto para parar de pagar caro na <span className="text-[#C9A227]">conta de luz</span>?
          </h2>

          <p className="font-body text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Envie sua conta de energia no WhatsApp agora e receba um estudo de viabilidade técnica personalizado para a sua casa ou empresa. Resposta rápida da nossa engenharia.
          </p>

          {/* Big Centered CTA Button */}
          <div className="flex flex-col items-center justify-center">
            <a
              id="cta-simulacao-whatsapp"
              href={getWhatsAppUrl("Olá! Quero enviar minha conta de luz para a Lyon Energy fazer um estudo gratuito e parar de pagar caro na energia.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-3.5 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white text-lg sm:text-2xl font-bold uppercase tracking-wider px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 text-center"
            >
              <WhatsAppIcon className="w-7 h-7 flex-shrink-0 fill-current" />
              <span>Simulação Gratuita no WhatsApp</span>
              <ArrowRight className="w-6 h-6 flex-shrink-0 hidden sm:inline" />
            </a>

            {/* Sub-cta benefits */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C9A227]" />
                Resposta rápida
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                Sem compromisso
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#C9A227]" />
                Estudo 100% gratuito
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

