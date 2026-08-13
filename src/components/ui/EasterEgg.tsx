import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { listenForKonamiCode } from '../../lib/utils';
import { Sparkles, Terminal, X } from 'lucide-react';

export const EasterEgg: React.FC = () => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    // Print developer console message
    console.log(
      '%c Hey developer 👋 You found the console.\n%c Built with curiosity, React, Three.js & caffeine by Naresh Kumar Sahoo.',
      'color: #00f0ff; font-size: 16px; font-weight: bold; font-family: monospace;',
      'color: #8b5cf6; font-size: 12px; font-family: monospace;'
    );

    // Listen for Konami Code sequence
    const cleanup = listenForKonamiCode(() => {
      setTriggered(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#8b5cf6', '#3b82f6', '#10b981'],
      });
    });

    return cleanup;
  }, []);

  if (!triggered) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-sm glass-panel bg-cyan-950/90 border-cyan-400 p-5 rounded-2xl shadow-[0_0_40px_rgba(0,240,255,0.4)] animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2 text-cyan-300 font-mono text-sm font-bold">
          <Sparkles className="w-5 h-5 text-cyan-400 animate-spin" />
          <span>KONAMI CODE UNLOCKED!</span>
        </div>
        <button
          onClick={() => setTriggered(false)}
          className="text-gray-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-gray-200 text-xs font-mono mt-2 leading-relaxed">
        ⚡ You discovered the secret developer mode! Access granted to Naresh&apos;s digital neural matrix.
      </p>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-cyan-400">
        <span className="flex items-center space-x-1">
          <Terminal className="w-3 h-3" />
          <span>CHEAT_CODE: ACTIVATED</span>
        </span>
        <button
          onClick={() => {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.5 },
            });
          }}
          className="px-2.5 py-1 rounded bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
        >
          MORE CONFETTI 🚀
        </button>
      </div>
    </div>
  );
};
