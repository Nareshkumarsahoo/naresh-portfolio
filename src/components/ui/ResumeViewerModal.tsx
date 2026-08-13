import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl glass-panel bg-[#0B0F19]/95 border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.2)] p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-mono">
                {PERSONAL_INFO.name.toUpperCase()} // RESUME
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                {PERSONAL_INFO.roleTitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Overview Container */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {/* Quick Summary Card */}
          <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-gray-200">
            <h4 className="font-mono text-sm font-bold text-cyan-300 mb-2">
              EXECUTIVE PROFILE SUMMARY
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              B.Tech Computer Science & Engineering student at SOA University, Bhubaneswar. Focused on full-stack web development (React, Node.js, Express, MongoDB, MySQL), Data Structures & Algorithms, Java, Python, and AI/ML algorithms. Experienced in public safety hackathon implementations (ShauryaAstra, Hack4Safety-Odisha-Police).
            </p>
          </div>

          {/* Education & Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h4 className="font-mono text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                EDUCATION
              </h4>
              <p className="text-white font-bold text-sm">B.Tech Computer Science & Engineering</p>
              <p className="text-gray-400 text-xs font-mono">SOA University, Bhubaneswar</p>
              <p className="text-gray-500 text-xs font-mono mt-1">2023 — Present</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h4 className="font-mono text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                PRIMARY TECH STACK
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Java, Python, C++, JavaScript, React, Node.js, Express, MongoDB, MySQL, HTML5, CSS3, Tailwind CSS, Git/GitHub.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <h4 className="font-mono text-xs font-bold text-cyan-400 mb-3 uppercase tracking-wider">
              KEY PROJECT HIGHLIGHTS
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>SHAURYAASTRA:</strong> Full-stack FIR registration & digital police investigation platform.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>HACK4SAFETY:</strong> Emergency dispatch system built for Odisha Police Hackathon.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>NEURO_WELL:</strong> Cognitive wellness and mood tracking interactive application.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 mt-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>VERIFY LINKEDIN PROFILE</span>
          </a>

          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Naresh_Kumar_Sahoo_Resume.pdf"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
