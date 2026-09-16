import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';
import { 
  FileText, 
  Wrench, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  ClipboardCheck
} from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      stepNumber: '01',
      icon: FileText,
      title: 'Análise da Conta',
      tag: '100% Gratuito',
      description: 'Envie uma foto da sua fatura de energia pelo WhatsApp. Nossa engenharia analisa seu histórico de consumo e calcula o sistema perfeito para zerar até 95% do valor.'
    },
    {
      stepNumber: '02',
      icon: ClipboardCheck,
      title: 'Projeto & Homologação',
      tag: 'Zero Burocracia',
      description: 'Desenvolvemos o projeto executivo e cuidamos de toda a documentação e aprovação técnica com a concessionária de energia (Neoenergia Celpe ou Coelba).'
    },
    {
      stepNumber: '03',
      icon: Wrench,
      title: 'Instalação Profissional',
      tag: 'Equipe Própria',
      description: 'Nossa equipe técnica qualificada realiza a montagem com equipamentos de fixação de alta durabilidade e conexão elétrica segura em poucos dias.'
    },
    {
      stepNumber: '04',
      icon: Zap,
      title: 'Ativação & Economia',
      tag: 'Até 95% Off',
      description: 'A distribuidora ativa o medidor bidirecional e sua usina começa a gerar créditos solares. Você economiza de imediato e por mais de 25 anos!'
    }
  ];

  const handleCtaClick = () => {
    trackWhatsAppPixel('Como Funciona - Enviar Conta WhatsApp');
  };

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#08162B] relative overflow-hidden border-t border-[#C9A227]/20">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B1F3D] border border-[#C9A227]/40 text-[#C9A227] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
            Passo a Passo Simples
          </div>
          <h2
            id="how-it-works-title"
            className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1]"
          >
            Como Funciona para <span className="text-[#C9A227]">Gera sua Própria Energia</span>
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Do primeiro contato até a economia na fatura: a Lyon Energy cuida de tudo com agilidade e total transparência.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative mb-16">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stepNumber}
                className="group relative bg-[#0B1F3D] rounded-2xl p-7 border border-[#C9A227]/30 hover:border-[#C9A227] shadow-xl shadow-black/30 hover:shadow-[#C9A227]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-[#C9A227]/50 group-hover:text-[#C9A227] transition-colors">
                      {item.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-md border border-[#C9A227]/20">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#08162B] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] mb-5 group-hover:scale-105 group-hover:bg-[#C9A227]/15 transition-all shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-condensed font-bold uppercase text-xl sm:text-2xl text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator for next steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#C9A227]/40 pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* High Conversion CTA Box */}
        <div className="bg-gradient-to-br from-[#0B1F3D] via-[#08162B] to-[#0B1F3D] rounded-3xl p-8 sm:p-12 border-2 border-[#C9A227]/40 shadow-2xl text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08162B] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            Primeiro Passo Rápido e Sem Custo
          </div>

          <h3 className="font-condensed font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4">
            Pronto para dar o Passo 01?
          </h3>

          <p className="font-body text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Basta tirar uma foto da sua conta de luz e enviar pelo WhatsApp. Nós calculamos o tamanho ideal do gerador para o seu telhado.
          </p>

          <a
            id="how-it-works-cta-button"
            href={getWhatsAppUrl("Olá! Gostaria de enviar a foto da minha conta de energia para a Lyon Energy fazer o dimensionamento gratuito do meu sistema solar.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white text-base sm:text-lg font-extrabold uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-6 h-6 fill-current flex-shrink-0" />
            <span>Enviar Minha Conta no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
