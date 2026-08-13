import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../../lib/data/portfolioData';
import type { Project } from '../../lib/data/portfolioData';
import { ExternalLink, ArrowRight, ShieldCheck, Cpu, HeartPulse, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { ProjectFlowVisualizer } from './ProjectFlowVisualizer';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    shauryaastra: ShieldCheck,
    hack4safety: Cpu,
    'neuro-well': HeartPulse,
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FEATURED WORK"
          title="Things I've Built."
          subtitle="Turning ideas into working systems — from state police hackathon solutions to digital governance platforms and intelligent wellness apps."
        />

        {/* Large Asymmetric / Horizontal Featured Project Cards */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project: Project) => {
            const Icon = iconMap[project.id] || Code2;
            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Details & Description */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Number & Category Badge */}
                    <div className="flex items-center space-x-3">
                      <span className="font-mono font-bold text-lg text-cyan-400">
                        // PROJECT {project.number}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-mono text-xs">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                      <span>{project.title}</span>
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Problem Solved Summary */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400">
                      <strong className="text-cyan-300 font-mono block mb-1">
                        PROBLEM SOLVED:
                      </strong>
                      <span>{project.problem}</span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
                      >
                        <span>EXPLORE SYSTEM DEEP DIVE</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-5 py-3 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 font-mono text-xs font-semibold transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GITHUB REPO</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Embedded Flow Diagram Preview */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <ProjectFlowVisualizer
                      steps={project.flowSteps}
                      accentColor={project.accentColor}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Experiments Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mb-2">
              MORE EXPERIMENTS & UTILITIES
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-mono">
              Additional open-source repositories and computer science workshop implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_PROJECTS.map((repo, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {repo.category}
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-white font-bold text-lg mb-2 font-mono">
                    {repo.name}
                  </h4>

                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-gray-500">
                  <span>LANG: {repo.language}</span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center space-x-1"
                  >
                    <span>VIEW CODE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
