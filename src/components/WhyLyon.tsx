import React from 'react';
import { Calendar, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import drillDetailImg from '../assets/images/real_install_drill_detail_1788177899346.jpg';
import technicianFieldImg from '../assets/images/real_install_technician_field_1788177916462.jpg';
import commercialShedImg from '../assets/images/regenerated_image_1788271417345.png';

export function WhyLyon() {
  return (
    <section id="por-que-a-lyon" className="py-16 sm:py-24 bg-[#08162B]/80 border-y border-[#C9A227]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
            Diferenciais Comprovados
          </div>
          <h2
            id="why-title"
            className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
          >
            Por que escolher a <span className="text-[#C9A227]">Lyon Energy</span>?
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Tranquilidade do projeto à instalação com quem realmente entende de energia solar no Sertão.
          </p>
        </div>

        {/* 3 Cards Grid with real installation photo accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Desde 2019 no mercado */}
          <div
            id="card-experiencia"
            className="group relative bg-[#0B1F3D] rounded-2xl overflow-hidden border border-[#C9A227]/25 hover:border-[#C9A227] shadow-xl shadow-black/20 hover:shadow-[#C9A227]/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-7 sm:p-8">
              <div className="w-14 h-14 rounded-xl bg-[#08162B] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] mb-6 group-hover:scale-105 group-hover:bg-[#C9A227]/10 transition-all duration-300 shadow-inner">
                <Calendar className="w-7 h-7" />
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-md mb-3 border border-[#C9A227]/20">
                Experiência Comprovada
              </span>

              <h3 className="font-condensed font-bold uppercase text-2xl text-white mb-3 tracking-wide">
                Desde 2019 no mercado
              </h3>

              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Anos de experiência comprovada em Petrolina e Juazeiro. Solidez e conhecimento das particularidades de radiação e clima da nossa região.
              </p>
            </div>

            {/* Visual preview of real commercial roof */}
            <div className="relative h-36 w-full overflow-hidden border-t border-[#C9A227]/20">
              <img
                src={commercialShedImg}
                alt="Instalação solar real em cobertura comercial - Lyon Energy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-4 text-[11px] font-semibold text-slate-300">
                Instalação comercial em Petrolina
              </div>
            </div>
          </div>

          {/* Card 2: Qualidade e confiança (Imagem 3: Close de mão com furadeira / detalhe técnico) */}
          <div
            id="card-confianca"
            className="group relative bg-[#0B1F3D] rounded-2xl overflow-hidden border border-[#C9A227]/25 hover:border-[#C9A227] shadow-xl shadow-black/20 hover:shadow-[#C9A227]/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-7 sm:p-8">
              <div className="w-14 h-14 rounded-xl bg-[#08162B] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] mb-6 group-hover:scale-105 group-hover:bg-[#C9A227]/10 transition-all duration-300 shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-md mb-3 border border-[#C9A227]/20">
                Engenharia de Precisão
              </span>

              <h3 className="font-condensed font-bold uppercase text-2xl text-white mb-3 tracking-wide">
                Qualidade e confiança
              </h3>

              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Projetos técnicos bem dimensionados, sem chute. Equipamentos de primeira linha com garantia e homologação completa na concessionária.
              </p>
            </div>

            {/* Technical drill / clamping detail photo */}
            <div className="relative h-36 w-full overflow-hidden border-t border-[#C9A227]/20">
              <img
                src={drillDetailImg}
                alt="Detalhe técnico da fixação e montagem de módulos solares - Lyon Energy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-4 text-[11px] font-semibold text-slate-300">
                Fixação técnica e acabamento seguro
              </div>
            </div>
          </div>

          {/* Card 3: Suporte local e pós-venda (Imagem 4: Técnico de capacete e colete em campo) */}
          <div
            id="card-suporte"
            className="group relative bg-[#0B1F3D] rounded-2xl overflow-hidden border border-[#C9A227]/25 hover:border-[#C9A227] shadow-xl shadow-black/20 hover:shadow-[#C9A227]/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-7 sm:p-8">
              <div className="w-14 h-14 rounded-xl bg-[#08162B] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] mb-6 group-hover:scale-105 group-hover:bg-[#C9A227]/10 transition-all duration-300 shadow-inner">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-md mb-3 border border-[#C9A227]/20">
                Melhor Pós-Venda
              </span>

              <h3 className="font-condensed font-bold uppercase text-2xl text-white mb-3 tracking-wide">
                Suporte local e pós-venda
              </h3>

              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Melhor suporte pós-venda do mercado. Equipe da própria região, atendimento rápido e direto com quem resolve se você precisar.
              </p>
            </div>

            {/* Real field technician photo */}
            <div className="relative h-36 w-full overflow-hidden border-t border-[#C9A227]/20">
              <img
                src={technicianFieldImg}
                alt="Equipe técnica em campo acompanhando usina solar - Lyon Energy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-4 text-[11px] font-semibold text-slate-300">
                Equipe técnica local presente
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
