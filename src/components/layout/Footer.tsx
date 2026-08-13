import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#030712] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="w-10 h-10 rounded-full object-cover object-top border border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-bold font-mono text-white tracking-wider">
                {PERSONAL_INFO.name.toUpperCase()}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">
                B.Tech CSE • Developer • AI/ML Enthusiast
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-xs font-mono text-gray-400">
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

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-2">
          <div>
            Built with curiosity, code and caffeine.
          </div>
          <div>
            © {new Date().getFullYear()} Naresh Kumar Sahoo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
