import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACHIEVEMENTS } from '../../lib/data/portfolioData';
import { Trophy, Award, BookOpen } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ACHIEVEMENTS & HACKATHONS"
          title="Beyond the Classroom."
          subtitle="Verifiable technical hackathons, project implementations, and practical engineering challenges solved outside academic lectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {item.event}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-mono font-bold text-lg text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* What I Built */}
                <div className="space-y-2 mb-4 text-xs text-gray-300">
                  <div className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-mono">WHAT I BUILT:</strong>
                      <span className="text-gray-400">{item.whatIBuilt}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <BookOpen className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-mono">WHAT I LEARNED:</strong>
                      <span className="text-gray-400">{item.whatILearned}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
