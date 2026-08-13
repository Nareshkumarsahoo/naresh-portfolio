import React from 'react';
import { X, ExternalLink, ShieldAlert, Cpu, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../lib/data/portfolioData';
import { ProjectFlowVisualizer } from '../sections/ProjectFlowVisualizer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0B0F19]/95 border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.2)] p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm">
            PROJECT // {project.number}
          </span>
          <span className="text-gray-500">•</span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          {project.title}
        </h2>

        {/* Short Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Interactive System Flow Diagram */}
        {project.flowSteps && project.flowSteps.length > 0 && (
          <ProjectFlowVisualizer steps={project.flowSteps} accentColor={project.accentColor} />
        )}

        {/* Problem vs Solution Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/30">
            <div className="flex items-center space-x-2 text-red-400 font-mono text-xs font-bold mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>THE PROBLEM</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold mb-2">
              <Cpu className="w-4 h-4" />
              <span>THE INTENT & SOLUTION</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>KEY ARCHITECTURAL FEATURES</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h3 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            TECHNOLOGY STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>VIEW ON GITHUB</span>
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-mono text-xs font-bold hover:bg-cyan-500/10 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LIVE DEMO</span>
            </a>
          ) : (
            <span className="text-gray-500 text-xs font-mono italic">
              [Repository available on GitHub]
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
