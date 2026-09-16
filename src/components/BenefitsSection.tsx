import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  PiggyBank, 
  Sun, 
  Award, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      id: 'economia-imediata',
      icon: Zap,
      badge: 'Alívio no Bolso',
      title: 'Economia Imediata de até 95%',
      description: 'Corte drástico na fatura já no primeiro ciclo após a ativação. O que você antes pagava todo mês para a distribuidora agora vira economia líquida para sua família ou empresa.',
      highlight: 'Redução de até 95% na conta'
    },
    {
      id: 'valorizacao-imovel',
      icon: TrendingUp,
      badge: 'Patrimônio',
      title: 'Valorização Imediata do Imóvel',
      description: 'Estudos do mercado imobiliário mostram que imóveis residenciais ou comerciais com sistema solar próprio valorizam entre 5% e 10% e são negociados com muito mais rapidez.',
      highlight: 'Valorização de 5% a 10% no mercado'
    },
    {
      id: 'blindagem-inflacao',
      icon: Lock,
      badge: 'Segurança Financeira',
      title: 'Blindagem Contra a Inflação da Energia',
      description: 'Esqueça sustos com bandeiras tarifárias vermelhas e os aumentos anuais da tarifa de energia. Sua usina gera seus próprios créditos solares com estabilidade total.',
      highlight: 'Livre de bandeiras tarifárias'
    },
    {
      id: 'retorno-rapido',
      icon: PiggyBank,
      badge: 'Investimento Inteligente',
      title: 'Retorno Rápido (Payback Acelerado)',
      description: 'O valor investido se paga em média entre 2 e 4 anos através da própria economia obtida. Depois disso, são mais de duas décadas de energia praticamente gratuita.',
      highlight: 'Payback médio de 2 a 4 anos'
    },
    {
      id: 'garantia-durabilidade',
      icon: ShieldCheck,
      badge: 'Tecnologia Confiável',
      title: 'Garantia de 25 Anos de Desempenho',
      description: 'Módulos fotovoltaicos de primeira linha mundial com garantia de geração de até 25 anos e inversores homologados com suporte técnico local presente em Petrolina.',
      highlight: 'Garantia de eficiência de 25 anos'
    },
    {
      id: 'energia-limpa',
      icon: Sun,
      badge: 'Sustentabilidade',
      title: 'Energia 100% Limpa e Abundante',
      description: 'O Vale do São Francisco possui um dos maiores índices de radiação solar do planeta. Aproveite a luz solar abundante para produzir eletricidade limpa sem poluir o meio ambiente.',
      highlight: 'Potencial solar máximo do Sertão'
    }
  ];

  const handleCtaClick = () => {
    trackWhatsAppPixel('Seção de Benefícios - CTA');
  };

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-[#0B1F3D] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#08162B] border border-[#C9A227]/30 text-[#C9A227] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-[#C9A227]" />
            Vantagens Exclusivas
          </div>
          <h2
            id="benefits-title"
            className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1]"
          >
            Por que investir em <span className="text-[#C9A227]">Energia Solar agora</span>?
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Mais do que sustentabilidade: uma decisão financeira estratégica para blindar seu orçamento e valorizar seu patrimônio.
          </p>
        </div>

        {/* 6 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {benefits.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#08162B] rounded-2xl p-7 sm:p-8 border border-[#C9A227]/25 hover:border-[#C9A227] shadow-xl shadow-black/30 hover:shadow-[#C9A227]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3D] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] group-hover:scale-105 group-hover:bg-[#C9A227]/15 transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-md border border-[#C9A227]/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-condensed font-bold uppercase text-2xl text-white mb-3 tracking-wide leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-[#C9A227]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#C9A227]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#08162B] via-[#0D264A] to-[#08162B] rounded-2xl p-6 sm:p-8 border-2 border-[#C9A227]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-condensed font-bold uppercase text-xl sm:text-2xl text-white">
              Quer saber a potência ideal para o seu consumo?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Fale com um especialista técnico da Lyon Energy e receba um orçamento sem compromisso.
            </p>
          </div>

          <a
            id="benefits-cta-whatsapp"
            href={getWhatsAppUrl("Olá! Estava vendo os benefícios da energia solar no site e gostaria de um orçamento personalizado para meu imóvel.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-wider text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#25D366]/30 transition-all flex-shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Falar com Especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
}
