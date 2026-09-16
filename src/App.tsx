import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SavingsCalculator } from './components/SavingsCalculator';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyLyon } from './components/WhyLyon';
import { RealProjects } from './components/RealProjects';
import { ConversionSection } from './components/ConversionSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1F3D] text-slate-100 font-body selection:bg-[#C9A227] selection:text-[#0B1F3D]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main High-Converting Landing Page Flow */}
      <main className="flex-1">
        {/* 2. Topo de Alto Impacto (Hero) */}
        <Hero />

        {/* 3. Simulador de Economia Interativo */}
        <SavingsCalculator />

        {/* 4. Seção de Benefícios */}
        <BenefitsSection />

        {/* 5. Como Funciona (Passo a Passo) */}
        <HowItWorks />

        {/* 6. Por Que a Lyon Energy */}
        <WhyLyon />

        {/* 7. Instalações Reais na Região */}
        <RealProjects />

        {/* 8. Seção de Fechamento / Conversão */}
        <ConversionSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Botão Flutuante do WhatsApp com Pixel */}
      <WhatsAppFloatingButton />
    </div>
  );
}


