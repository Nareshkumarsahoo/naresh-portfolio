import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';

export const GithubSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="OPEN SOURCE"
          title="Open Source & GitHub"
          subtitle="Explore public repositories, code contributions, and project architectures directly on GitHub."
        />

        {/* High-End Futuristic GitHub Banner Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <GithubIcon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-white font-mono tracking-tight">
                    @{PERSONAL_INFO.handle}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-1">
                    SOA University Student • Full-Stack Web & AI/ML Development
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                Continuous open-source development in Java, Python, C++, JavaScript, React, and Node.js. View source code repositories, commits, and project updates on my official profile.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-gray-400">
                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Languages: Java, Python, C++, JS</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <GitBranch className="w-3.5 h-3.5 text-purple-400" />
                  <span>Public Repos: 8</span>
                </span>
              </div>
            </div>

            {/* Right CTA */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer group"
              >
                <GithubIcon className="w-5 h-5" />
                <span>EXPLORE GITHUB PROFILE</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
