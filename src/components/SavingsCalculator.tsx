import React, { useState, useId } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';
import { 
  Calculator, 
  TrendingDown, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  PiggyBank, 
  Zap, 
  CalendarCheck 
} from 'lucide-react';

interface RangeTier {
  id: string;
  label: string;
  sublabel: string;
  defaultValue: number;
}

const TIERS: RangeTier[] = [
  { id: 'tier-1', label: 'Até R$ 300', sublabel: 'Pequeno consumo', defaultValue: 280 },
  { id: 'tier-2', label: 'R$ 300 a R$ 600', sublabel: 'Residencial médio', defaultValue: 480 },
  { id: 'tier-3', label: 'R$ 600 a R$ 1.200', sublabel: 'Residencial alto', defaultValue: 850 },
  { id: 'tier-4', label: 'R$ 1.200 a R$ 2.500', sublabel: 'Comércio / Casas grandes', defaultValue: 1750 },
  { id: 'tier-5', label: 'Acima de R$ 2.500', sublabel: 'Empresarial / Rural', defaultValue: 3800 },
];

export function SavingsCalculator() {
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-3');
  const [monthlySpend, setMonthlySpend] = useState<number>(850);
  const sliderId = useId();

  // Handle preset selection
  const handleSelectTier = (tier: RangeTier) => {
    setSelectedTierId(tier.id);
    setMonthlySpend(tier.defaultValue);
  };

  // Math: Solar typically reduces up to 90%-95%, leaving only the basic connection fee / public lighting
  const minFee = Math.max(38, Math.round(monthlySpend * 0.06));
  const estimatedMonthlyBillWithSolar = minFee;
  const monthlySavings = Math.max(0, monthlySpend - estimatedMonthlyBillWithSolar);
  const annualSavings = monthlySavings * 12;
  const fiveYearSavings = annualSavings * 5;
  const twentyFiveYearSavings = annualSavings * 25;

  const formattedSpend = monthlySpend.toLocaleString('pt-BR');
  const formattedMonthlySavings = monthlySavings.toLocaleString('pt-BR');
  const formattedNewBill = estimatedMonthlyBillWithSolar.toLocaleString('pt-BR');
  const formattedAnnualSavings = annualSavings.toLocaleString('pt-BR');
  const formattedFiveYearSavings = fiveYearSavings.toLocaleString('pt-BR');

  const whatsappMessage = `Olá Lyon Energy! Fiz a simulação de energia solar no site: gasto em média R$ ${formattedSpend}/mês e vi que posso economizar cerca de R$ ${formattedMonthlySavings}/mês (R$ ${formattedAnnualSavings}/ano). Gostaria de solicitar um estudo de viabilidade técnico gratuito para meu imóvel!`;

  const handleCtaClick = () => {
    trackWhatsAppPixel('Simulador de Economia - CTA Principal', {
      monthlySpend,
      monthlySavings,
      annualSavings,
    });
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-[#08162B] relative overflow-hidden border-t border-[#C9A227]/20">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3D] border border-[#C9A227]/40 text-[#C9A227] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-4 h-4 text-[#C9A227]" />
            Simulação em Tempo Real
          </div>
          <h2
            id="calculator-heading"
            className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-4"
          >
            Descubra quanto você vai <span className="text-[#C9A227]">economizar todo mês</span>
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Selecione a sua faixa de gasto atual com a conta de luz e veja a projeção imediata do que deixará de pagar para a distribuidora.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-[#0B1F3D] border-2 border-[#C9A227]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/60 relative">
          
          {/* Top Presets: Faixas de Gasto */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              1. Selecione a sua faixa de gasto mensal na conta de energia:
            </label>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {TIERS.map((tier) => {
                const isSelected = selectedTierId === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => handleSelectTier(tier)}
                    className={`py-3 px-3 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-[#C9A227] text-[#08162B] border-[#C9A227] shadow-lg shadow-[#C9A227]/25 font-bold scale-[1.02]'
                        : 'bg-[#08162B] text-slate-200 border-slate-700/80 hover:border-[#C9A227]/60 hover:bg-[#0d2242]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-extrabold font-condensed tracking-wide uppercase">
                      {tier.label}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-medium mt-0.5 ${isSelected ? 'text-[#08162B]/85' : 'text-slate-400'}`}>
                      {tier.sublabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Range Slider for Fine-Tuning */}
          <div className="bg-[#08162B]/90 rounded-2xl p-5 sm:p-6 border border-slate-800 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <label htmlFor={sliderId} className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C9A227]" />
                <span>Ajuste o valor exato da sua fatura:</span>
              </label>
              <div className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#0B1F3D] px-4 py-1.5 rounded-lg border border-[#C9A227]/40 text-[#C9A227]">
                <span className="text-xs text-slate-300 font-medium">Gasto médio:</span>
                <span className="font-condensed font-extrabold text-xl text-white">R$ {formattedSpend}</span>
                <span className="text-xs text-slate-400">/mês</span>
              </div>
            </div>

            <input
              id={sliderId}
              type="range"
              min="150"
              max="6000"
              step="50"
              value={monthlySpend}
              onChange={(e) => {
                const val = Number(e.target.value);
                setMonthlySpend(val);
                // Keep preset active if matches closest
                const matched = TIERS.find(t => Math.abs(t.defaultValue - val) < 200);
                if (matched) setSelectedTierId(matched.id);
                else setSelectedTierId('');
              }}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
            />

            <div className="flex justify-between text-[11px] sm:text-xs text-slate-400 mt-2 font-medium">
              <span>R$ 150</span>
              <span>R$ 1.500</span>
              <span>R$ 3.000</span>
              <span>R$ 4.500</span>
              <span>R$ 6.000+</span>
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            
            {/* Card 1: Gasto Atual */}
            <div className="bg-[#08162B] p-5 sm:p-6 rounded-2xl border border-red-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">Conta Atual Sem Solar</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-condensed text-white">
                  R$ {formattedSpend} <span className="text-sm font-normal text-slate-400">/mês</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Dinheiro pago integralmente à concessionária sem retorno para você.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 text-xs text-red-300/90 font-medium">
                Em 1 ano: R$ {(monthlySpend * 12).toLocaleString('pt-BR')} perdidos
              </div>
            </div>

            {/* Card 2: Nova Conta Estimada */}
            <div className="bg-[#08162B] p-5 sm:p-6 rounded-2xl border border-[#C9A227]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">Nova Conta Com Solar</span>
                  <Sparkles className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-condensed text-[#C9A227]">
                  R$ {formattedNewBill} <span className="text-sm font-normal text-slate-300">/mês</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Você paga apenas o custo básico de conexão e taxa pública da distribuidora.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 text-xs text-[#C9A227] font-semibold">
                Redução comprovada de até 95%
              </div>
            </div>

            {/* Card 3: Sua Economia Estimada (Super Destaque) */}
            <div className="bg-gradient-to-br from-[#064E3B] to-[#065F46] p-5 sm:p-6 rounded-2xl border-2 border-emerald-400/50 shadow-xl shadow-emerald-950/40 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-400/20 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 flex items-center gap-1.5">
                    <PiggyBank className="w-4 h-4" />
                    Economia no seu bolso
                  </span>
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-300/20 text-emerald-100 px-2 py-0.5 rounded border border-emerald-300/30">
                    Lucro limpo
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-condensed text-white tracking-tight">
                  R$ {formattedMonthlySavings} <span className="text-sm font-normal text-emerald-100">/mês</span>
                </div>

                <div className="mt-2 text-xs sm:text-sm font-bold text-emerald-100">
                  ≈ R$ {formattedAnnualSavings} de economia todo ano
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-emerald-600/60 text-xs text-emerald-100 flex items-center justify-between font-semibold">
                <span>Acumulado em 5 anos:</span>
                <span className="text-sm font-extrabold text-white">R$ {formattedFiveYearSavings}</span>
              </div>
            </div>

          </div>

          {/* Bottom High-Impact CTA Block */}
          <div className="bg-gradient-to-r from-[#08162B] via-[#0D264A] to-[#08162B] rounded-2xl p-6 sm:p-8 border border-[#C9A227]/30 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227] flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                <CalendarCheck className="w-4 h-4 text-[#C9A227]" />
                Estudo Técnico Gratuito e Personalizado
              </span>
              <h3 className="font-condensed font-bold uppercase text-xl sm:text-2xl text-white">
                Quer travar essa economia de R$ {formattedMonthlySavings}/mês no seu imóvel?
              </h3>
              <p className="font-body text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Nossa equipe de engenharia analisa sua conta e envia o projeto exato sem custo e sem compromisso.
              </p>
            </div>

            <a
              id="cta-calculator-whatsapp"
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white font-extrabold uppercase tracking-wider text-base sm:text-lg px-8 py-4 sm:py-4.5 rounded-xl shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center flex-shrink-0"
            >
              <WhatsAppIcon className="w-6 h-6 fill-current flex-shrink-0" />
              <span>Garantir Economia no WhatsApp</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>

          </div>

          {/* Reassurance items */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              Sem compromisso de contratação
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#C9A227]" />
              Dimensionamento para o telhado do Sertão
            </span>
            <span className="inline-flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-[#C9A227]" />
              Proteção contra bandeiras tarifárias
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
