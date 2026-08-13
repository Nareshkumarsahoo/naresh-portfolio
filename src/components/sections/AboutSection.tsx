import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Code2, BookOpen, Trophy, Lightbulb, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: "BUILD",
      subtitle: "Full-Stack Web Systems",
      desc: "Creating digitized FIR portals, emergency safety systems, and wellness trackers.",
      icon: Code2,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "LEARN",
      subtitle: "AI & Machine Learning",
      desc: "Studying neural networks, algorithm efficiency, dynamic programming & DSA.",
      icon: BookOpen,
      color: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      title: "HACK",
      subtitle: "Competitive Problem Solving",
      desc: "Odisha Police Hackathon participant creating technology for law enforcement.",
      icon: Trophy,
      color: "text-amber-400",
      borderColor: "border-amber-500/30",
    },
    {
      title: "INNOVATE",
      subtitle: "Real-World Impact",
      desc: "Designing software that solves genuine citizen problems with clean UX.",
      icon: Lightbulb,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT ME"
          title="More Than Just Code."
          subtitle="A Computer Science Engineering student focused on building software systems that bridge technical precision with real-world human utility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Personal Intro */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <GlassCard glowColor="cyan" className="h-full flex flex-col justify-between p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-14 h-14 rounded-full object-cover object-top border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#030712] rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                      <GraduationCap className="w-4 h-4" />
                      <span className="uppercase font-bold tracking-wider">ACADEMIC & DEV PROFILE</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Crafting Intelligent Digital Systems at SOA University
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {PERSONAL_INFO.aboutText}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether digitizing FIR complaint registration in <strong className="text-cyan-300">ShauryaAstra</strong>, building distress response pipelines for the <strong className="text-purple-300">Odisha Police Hackathon</strong>, or exploring cognitive health tracking in <strong className="text-emerald-300">Neuro_Well</strong>, I treat code as a high-leverage craft.
                </p>
              </div>

              {/* Verified Key Info Pills */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Bhubaneswar, Odisha</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>SOA University</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT: 4 Interactive Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel p-6 rounded-2xl border ${card.borderColor} hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono font-bold text-xs ${card.color} tracking-widest`}>
                        // {card.title}
                      </span>
                      <IconComponent className={`w-5 h-5 ${card.color} group-hover:scale-110 transition-transform`} />
                    </div>

                    <h4 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors">
                      {card.subtitle}
                    </h4>

                    <p className="text-gray-400 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>STAGE 0{idx + 1}</span>
                    <span className="text-cyan-400/60 font-semibold uppercase">ACTIVE</span>
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
