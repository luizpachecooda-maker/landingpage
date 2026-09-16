import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import commercialShedImg from '../assets/images/regenerated_image_1788271429946.png';
import urbanStoreImg from '../assets/images/regenerated_image_1788271426202.png';
import drillDetailImg from '../assets/images/real_install_drill_detail_1788177899346.jpg';
import technicianFieldImg from '../assets/images/real_install_technician_field_1788177916462.jpg';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';

export function RealProjects() {
  const projects = [
    {
      id: 'projeto-comercial-1',
      image: urbanStoreImg,
      title: 'Instalação Comercial e Empresarial',
      location: 'Petrolina / Juazeiro',
      tag: 'Empresarial / Urbano',
      description: 'Sistema fotovoltaico instalado em cobertura comercial, dimensionado sob medida para redução contínua de custos de energia.'
    },
    {
      id: 'projeto-galpao-2',
      image: commercialShedImg,
      title: 'Instalação Comercial em Galpão',
      location: 'Petrolina - PE',
      tag: 'Galpão / Distribuição',
      description: 'Estrutura montada em telhado metálico ondulado para atendimento a empresa regional.'
    },
    {
      id: 'projeto-tecnico-3',
      image: drillDetailImg,
      title: 'Padrão Técnico de Fixação',
      location: 'Vale do São Francisco',
      tag: 'Qualidade Técnica',
      description: 'Cuidado nos detalhes e fixação de alta durabilidade com equipamentos e grampos de precisão.'
    },
    {
      id: 'projeto-campo-4',
      image: technicianFieldImg,
      title: 'Acompanhamento Técnico de Campo',
      location: 'Petrolina e Região',
      tag: 'Equipe Local',
      description: 'Presença técnica direta no local, vistoria de engenharia e suporte de pós-venda ágil.'
    }
  ];

  const handleHeaderCta = () => {
    trackWhatsAppPixel('Projetos Reais Header CTA');
  };

  const handleProjectCta = (projectTitle: string) => {
    trackWhatsAppPixel(`Projeto Card CTA - ${projectTitle}`);
  };

  return (
    <section id="instalacoes-reais" className="py-16 sm:py-24 bg-[#061224] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
              Projetos Realizados
            </div>
            <h2
              id="projects-title"
              className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
            >
              Instalações <span className="text-[#C9A227]">Reais</span> na Região
            </h2>
            <p className="font-body text-slate-300 text-base sm:text-lg mt-3 max-w-xl">
              Confira fotos de instalações executadas e acompanhadas pela nossa equipe técnica no Vale do São Francisco.
            </p>
          </div>

          <a
            id="projects-header-cta"
            href={getWhatsAppUrl("Olá! Vi as fotos de projetos reais no site e gostaria de pedir um orçamento para o meu imóvel.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeaderCta}
            className="inline-flex items-center gap-2 bg-[#08162B] hover:bg-[#0B1F3D] text-[#C9A227] border border-[#C9A227]/40 hover:border-[#C9A227] px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 self-start md:self-auto"
          >
            <span>Pedir orçamento para seu imóvel</span>
            <ArrowRight className="w-4 h-4 text-[#C9A227]" />
          </a>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0B1F3D] rounded-2xl overflow-hidden border border-[#C9A227]/25 hover:border-[#C9A227] shadow-lg shadow-black/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-56 w-full overflow-hidden bg-[#08162B]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#08162B]/90 backdrop-blur-sm border border-[#C9A227]/30 text-[#C9A227] text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-condensed font-bold uppercase text-lg sm:text-xl text-white mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppUrl(`Olá! Vi a instalação "${item.title}" no site da Lyon Energy e gostaria de consultar a viabilidade para meu imóvel.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleProjectCta(item.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#08162B] hover:bg-[#25D366] text-slate-300 hover:text-white font-semibold text-xs transition-all duration-200 border border-slate-700 hover:border-[#25D366]"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Consultar viabilidade</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

