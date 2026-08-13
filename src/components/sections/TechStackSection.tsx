import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SKILLS_DATA } from '../../lib/data/portfolioData';
import type { SkillItem } from '../../lib/data/portfolioData';
import { GithubIcon } from '../ui/Icons';
import {
  Coffee,
  Terminal,
  Cpu,
  FileCode,
  Zap,
  Atom,
  Globe,
  Palette,
  Wind,
  Server,
  Layers,
  Database,
  HardDrive,
  BrainCircuit,
  Network,
  GitBranch,
  Code,
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Programming',
    'Frontend',
    'Backend',
    'Database',
    'AI / ML',
    'Tools & DevOps',
  ];

  const iconMap: Record<string, React.ElementType> = {
    Coffee,
    Terminal,
    Cpu,
    FileCode,
    Zap,
    Atom,
    Globe,
    Palette,
    Wind,
    Server,
    Layers,
    Database,
    HardDrive,
    BrainCircuit,
    Network,
    GitBranch,
    Github: GithubIcon,
    Code,
  };

  const filteredSkills =
    selectedCategory === 'ALL'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL ARSENAL"
          title="Tools & Technologies I Use"
          subtitle="A practical, truth-based technology stack developed through hands-on hackathons, computer science coursework, and real project engineering."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Interactive Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem, idx) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 group cursor-default flex flex-col justify-between"
              >
                <div>
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                      {skill.level}
                    </span>
                  </div>

                  {/* Name & Category */}
                  <h3 className="font-mono font-bold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-wider">
                    {skill.category}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Used In Project Info Footer */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span className="text-gray-500">USED IN:</span>
                  <span className="text-cyan-400/90 font-semibold truncate max-w-[140px]">
                    {skill.usedIn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
