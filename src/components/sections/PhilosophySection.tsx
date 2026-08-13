import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PHILOSOPHY_STAGES } from '../../lib/data/portfolioData';
import { Brain, Layout, Code2, Sparkles, ArrowRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Brain,
    Layout,
    Code2,
    Sparkles,
  };

  return (
    <section className="py-20 md:py-28 relative bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PERSONAL DEVELOPMENT PHILOSOPHY"
          title="How I Build"
          subtitle="A disciplined, engineering-first approach to transforming complex problems into clean, high-performance digital systems."
        />

        {/* 4 Stages Grid with Connecting Progress Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PHILOSOPHY_STAGES.map((stage, idx) => {
            const Icon = iconMap[stage.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:scale-110 transition-transform">
                      {stage.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-mono font-bold text-lg text-white mb-1 tracking-wide group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {stage.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Connecting Line Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>STAGE {stage.number}</span>
                  {idx < PHILOSOPHY_STAGES.length - 1 ? (
                    <span className="flex items-center space-x-1 text-cyan-400/80">
                      <span>NEXT</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  ) : (
                    <span className="text-emerald-400">DEPLOYED</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
