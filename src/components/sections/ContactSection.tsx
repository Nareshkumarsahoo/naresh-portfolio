import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../lib/data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Have an idea?"
          subtitle="Let's build something meaningful together. Reach out for hackathons, engineering roles, or project collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT: Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let&apos;s Connect & Collaborate
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Feel free to send an email, connect on LinkedIn, or inspect my repositories on GitHub. I respond quickly to inquiries!
                </p>

                {/* Contact Items */}
                <div className="space-y-4 font-mono text-xs">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-400 text-gray-200 hover:text-cyan-300 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-gray-500 text-[10px] block">DIRECT EMAIL</span>
                      <span className="font-bold text-xs truncate">{PERSONAL_INFO.email}</span>
                    </div>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-400 text-gray-200 hover:text-purple-300 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">LINKEDIN PROFILE</span>
                      <span className="font-bold text-xs">{PERSONAL_INFO.name}</span>
                    </div>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-400 text-gray-200 hover:text-cyan-300 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block">GITHUB REPOSITORIES</span>
                      <span className="font-bold text-xs">@{PERSONAL_INFO.handle}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Bhubaneswar, Odisha, India</span>
                </span>
                <span className="text-cyan-400 font-bold">IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    MESSAGE INITIATED!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Your default email application has been launched with the pre-filled message. You can also contact directly at{' '}
                    <strong className="text-cyan-400">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-white/20 text-xs font-mono text-gray-300 hover:text-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white font-mono mb-4">
                    // SEND A DIRECT INQUIRY
                  </h3>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, opportunity, or collaboration idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
