import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';
import { Hero3DUniverse } from '../3d/Hero3DUniverse';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_INFO.rotatingRoles;
    const currentFullRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length + 1));
        if (displayedRole === currentFullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length - 1));
        if (displayedRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Hero Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* DP Avatar & Status Badge */}
            <div className="flex items-center space-x-4">
              {/* WhatsApp DP Style Profile Avatar */}
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-105"
                />
                {/* WhatsApp DP active green indicator dot */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#030712] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" title="Active & Available" />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs w-fit shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold uppercase tracking-widest text-[11px]">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                Hi, I&apos;m <span className="text-gradient-cyan">Naresh Kumar.</span>
              </h1>

              {/* Rotating Typewriter Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">
                  {displayedRole}
                </span>
                <span className="w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Main Statement */}
            <p className="text-xl sm:text-2xl font-bold text-gray-200 tracking-tight leading-snug">
              &quot;{PERSONAL_INFO.mainStatement}&quot;
            </p>

            {/* Supporting Bio Text */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Primary Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToWork}
                className="flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer group"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-7 py-3.5 rounded-xl glass-panel border-white/15 text-white font-mono text-xs font-bold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

            {/* Secondary Social Quick Links */}
            <div className="flex items-center space-x-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-purple-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Sophisticated Interactive 3D Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DUniverse />
          </div>
        </div>
      </div>
    </section>
  );
};
