import React from 'react';
import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 shadow-[0_0_50px_rgba(0,240,255,0.15)] text-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs mb-4">
            <FileText className="w-4 h-4" />
            <span className="font-bold uppercase tracking-widest text-[11px]">
              RECRUITER QUICK ACCESS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto">
            Let&apos;s Talk About What <span className="text-gradient-cyan">I Can Build.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Looking for a motivated B.Tech CSE student passionate about full-stack web engineering, public safety innovation, and AI/ML systems? Let&apos;s connect!
          </p>

          {/* Verified Candidate Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 font-mono text-xs text-gray-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>SOA University B.Tech CSE</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>State Hackathon Participant</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Naresh_Kumar_Sahoo_Resume.pdf"
              className="flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 px-7 py-3.5 rounded-xl glass-panel border-cyan-400 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-500/10 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW RESUME ONLINE</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl glass-panel border-white/15 text-gray-300 hover:text-white hover:border-purple-400 font-mono text-xs font-semibold transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-purple-400" />
              <span>LINKEDIN</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl glass-panel border-white/15 text-gray-300 hover:text-white hover:border-cyan-400 font-mono text-xs font-semibold transition-all"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GITHUB</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
