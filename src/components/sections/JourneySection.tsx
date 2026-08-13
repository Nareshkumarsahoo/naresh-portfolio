import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_EVENTS } from '../../lib/data/portfolioData';
import type { TimelineEvent } from '../../lib/data/portfolioData';
import { GraduationCap, ShieldCheck, Code, Sparkles, MapPin } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    education: GraduationCap,
    hackathon: ShieldCheck,
    project: Code,
    milestone: Sparkles,
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TIMELINE & MILESTONES"
          title="My Journey."
          subtitle="Verifiable milestones in computer science engineering, hackathons, open-source projects, and continuous technical growth."
        />

        {/* Vertical Interactive Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Central Glowing Vertical Path */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_15px_rgba(0,240,255,0.8)] -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event: TimelineEvent, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = iconMap[event.type] || Sparkles;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Orb */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Content Card Side */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold mb-3 ${
                          isEven ? 'sm:ml-auto' : ''
                        }`}
                      >
                        <span>{event.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {event.title}
                      </h3>

                      {/* Organization & Location */}
                      <div className="flex items-center space-x-2 text-xs font-mono text-gray-400 mb-3 justify-start sm:justify-start">
                        <span className="text-purple-300">{event.organization}</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1 text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{event.location}</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs text-gray-400">
                        {event.highlights.map((h, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
