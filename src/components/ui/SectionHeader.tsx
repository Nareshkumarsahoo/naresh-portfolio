import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Badge */}
      <div
        className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-[11px] uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>{badge}</span>
      </div>

      {/* Main Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        <span className="text-gradient-cyan">{title}</span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-400 max-w-2xl text-base sm:text-lg font-normal leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
