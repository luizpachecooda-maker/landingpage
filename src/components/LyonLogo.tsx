import React from 'react';
import logoImg from '../assets/images/lyon_logo_1787831395809.jpg';

interface LyonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function LyonLogo({ className = '', size = 'md', showText = true }: LyonLogoProps) {
  const sizeClasses = {
    sm: { img: 'h-10 w-10', title: 'text-xl tracking-wider', subtitle: 'text-[9px] tracking-[0.25em]' },
    md: { img: 'h-12 w-12 sm:h-14 sm:w-14', title: 'text-2xl sm:text-3xl tracking-wider', subtitle: 'text-[10px] sm:text-xs tracking-[0.3em]' },
    lg: { img: 'h-16 w-16 sm:h-20 sm:w-20', title: 'text-3xl sm:text-4xl tracking-widest', subtitle: 'text-xs sm:text-sm tracking-[0.35em]' }
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-res rounded logo emblem matching user's image */}
      <div className={`relative overflow-hidden rounded-xl border border-[#C9A227]/40 shadow-lg shadow-black/40 bg-[#08162B] flex-shrink-0 ${sizeClasses.img}`}>
        <img
          src={logoImg}
          alt="Lyon Energy Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className={`font-condensed font-extrabold uppercase leading-none text-white drop-shadow-sm ${sizeClasses.title}`}>
              LYON
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="h-[1px] w-2.5 sm:w-3.5 bg-[#C9A227]/70"></div>
            <span className={`font-condensed font-bold uppercase text-[#C9A227] leading-none ${sizeClasses.subtitle}`}>
              ENERGY
            </span>
            <div className="h-[1px] w-2.5 sm:w-3.5 bg-[#C9A227]/70"></div>
          </div>
        </div>
      )}
    </div>
  );
}
