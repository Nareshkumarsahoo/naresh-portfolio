import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CURRENT_MISSIONS } from '../../lib/data/portfolioData';
import { Terminal, Shield, ArrowRight, Activity } from 'lucide-react';

export const CurrentFocusSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="MISSION CONTROL"
          title="Currently Building."
          subtitle="Active engineering focus areas, ongoing research topics, and software experiments currently in active development."
        />

        {/* HUD Mission Flow Banner */}
        <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 mb-10 flex flex-wrap items-center justify-between text-xs font-mono text-cyan-300 gap-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-bold uppercase tracking-widest">CURRENT MISSION PIPELINE:</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300 font-bold">
            <span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">BUILD</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">LEARN</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
            <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">EXPERIMENT</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">DEPLOY</span>
          </div>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENT_MISSIONS.map((mission, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                    <Terminal className="w-4 h-4" />
                    <span>MISSION 0{idx + 1}</span>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {mission.status}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {mission.title}
                </h3>
                <div className="text-xs font-mono text-purple-400 mb-3">
                  {mission.subtitle}
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {mission.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-gray-500">
                <span>PROGRESS: {mission.progress}</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>ACTIVE</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
