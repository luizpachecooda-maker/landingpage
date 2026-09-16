import React from 'react';
import { LyonLogo } from './LyonLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Globe, Phone, MapPin } from 'lucide-react';
import { trackWhatsAppPixel, getWhatsAppUrl } from '../utils/pixel';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#061224] border-t border-[#C9A227]/20 pt-12 pb-20 sm:pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          {/* Small Logo */}
          <div className="flex flex-col items-center md:items-start">
            <LyonLogo size="sm" />
            <p className="mt-3 text-xs sm:text-sm text-slate-400 font-medium text-center md:text-left">
              Lyon Energy · Especialista em Energia Solar · Desde 2019 com você
            </p>
          </div>

          {/* Quick Contact & Domain Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm">
            <a
              id="footer-domain"
              href="https://www.lyonenergy.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-[#C9A227] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#C9A227]" />
              <span className="font-semibold">www.lyonenergy.com.br</span>
            </a>

            <a
              id="footer-whatsapp"
              href={getWhatsAppUrl("Olá! Acessei o site da Lyon Energy e gostaria de mais informações sobre energia solar.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppPixel('Footer WhatsApp')}
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-emerald-400 transition-colors font-medium"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>(87) 92001-5610</span>
            </a>

            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Petrolina - PE & Juazeiro - BA</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Lyon Energy. Todos os direitos reservados.</p>
          <p>Energia solar fotovoltaica residencial e comercial no Vale do São Francisco.</p>
        </div>

      </div>
    </footer>
  );
}

