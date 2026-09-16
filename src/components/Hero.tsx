import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import heroImg from '../assets/images/meta_ads_bill_hero_1788270926005.jpg';
import { ShieldCheck, Zap, Sun, Award, Calculator, ArrowRight } from 'lucide-react';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';

export function Hero() {
  const handleCtaClick = () => {
    trackWhatsAppPixel('Hero CTA Principal');
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle, CTA */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08162B] border border-[#C9A227]/30 text-[#C9A227] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
              <span className="tracking-wide">Líder em Energia Solar no Sertão · Desde 2019</span>
            </div>

            {/* Main High-Impact Headline */}
            <h1
              id="hero-headline"
              className="font-condensed font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tight leading-[1.05] mb-6"
            >
              Reduza sua conta de luz em <span className="text-[#C9A227] underline decoration-[#C9A227]/40 decoration-wavy decoration-1 underline-offset-4">até 95%</span> com Energia Solar.
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="font-body text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Pare de queimar dinheiro com a distribuidora de energia. Gere sua própria eletricidade em Petrolina, Juazeiro e região com <strong className="text-white font-semibold">projeto sob medida e o melhor suporte do mercado.</strong>
            </p>

            {/* Big High-Impact CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                id="hero-cta-button"
                href={getWhatsAppUrl("Olá Lyon Energy! Vi a página e quero simular a redução de até 95% na minha conta de luz.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white text-lg sm:text-xl font-extrabold uppercase tracking-wide px-8 py-4 rounded-xl shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <WhatsAppIcon className="w-6 h-6 flex-shrink-0 fill-current" />
                <span>Simular no WhatsApp</span>
              </a>

              <a
                id="hero-simulator-anchor"
                href="#simulador"
                className="inline-flex items-center justify-center gap-2.5 bg-[#08162B] hover:bg-[#0d2242] text-slate-200 hover:text-white border border-[#C9A227]/40 hover:border-[#C9A227] text-base font-bold px-6 py-4 rounded-xl transition-all duration-200 text-center"
              >
                <Calculator className="w-5 h-5 text-[#C9A227]" />
                <span>Calcular Economia</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="w-full grid grid-cols-3 gap-3 pt-6 border-t border-slate-700/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#08162B] border border-[#C9A227]/20 text-[#C9A227] flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-condensed font-bold text-white text-base sm:text-lg leading-tight">+7 Anos</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 leading-tight">Desde 2019</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#08162B] border border-[#C9A227]/20 text-[#C9A227] flex-shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-condensed font-bold text-white text-base sm:text-lg leading-tight">Até 95%</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 leading-tight">De Economia</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#08162B] border border-[#C9A227]/20 text-[#C9A227] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-condensed font-bold text-white text-base sm:text-lg leading-tight">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 leading-tight">Homologado</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Image with Gold Frame Accent & Balanced Floating Card */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center justify-center w-full mt-6 lg:mt-0">
            <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
              
              {/* Outer Golden Glow & Card Wrapper */}
              <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A227]/40 shadow-2xl shadow-black/60 bg-[#08162B] group transition-all duration-300">
                
                {/* Full Uncut Image Display */}
                <div className="w-full bg-[#061224] flex items-center justify-center overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Seu projeto solar começa aqui - Lyon Energy"
                    className="w-full h-auto object-contain block select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Harmonious Attached Card */}
                <div className="bg-[#08162B] p-4 sm:p-5 border-t border-[#C9A227]/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#C9A227] flex-shrink-0">
                      <Sun className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-white leading-tight">
                        Fazemos o projeto certo para o seu telhado.
                      </p>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">
                        Dimensionamento sob medida em Petrolina e Juazeiro
                      </p>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl("Olá! Vi a conta de energia no site da Lyon Energy e quero receber um estudo gratuito para o meu imóvel.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppPixel('Hero Image Card CTA')}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A227] hover:text-white bg-[#C9A227]/10 hover:bg-[#C9A227]/25 px-3 py-1.5 rounded-lg border border-[#C9A227]/30 transition-all flex-shrink-0"
                  >
                    <span>Simular</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Decorative background border accent */}
              <div className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-2xl border-2 border-[#C9A227]/25 -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

