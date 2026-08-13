import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'blue';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
}) => {
  const glowMap = {
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
  };

  return (
    <div
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? `glass-panel-hover ${glowMap[glowColor]}` : ''
      } ${className}`}
    >
      {/* Soft Ambient Inner Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      {children}
    </div>
  );
};
