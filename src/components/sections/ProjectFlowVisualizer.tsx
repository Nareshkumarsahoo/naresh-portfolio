import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface FlowStep {
  step: string;
  label: string;
  desc: string;
}

interface ProjectFlowVisualizerProps {
  steps: FlowStep[];
  accentColor?: string;
}

export const ProjectFlowVisualizer: React.FC<ProjectFlowVisualizerProps> = ({
  steps,
  accentColor = '#00f0ff',
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <div className="w-full bg-black/40 rounded-xl p-4 sm:p-6 border border-white/10 my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-mono text-xs text-gray-300 uppercase tracking-widest font-semibold">
            SYSTEM ARCHITECTURE & WORKFLOW FLOW
          </span>
        </div>
        <span className="font-mono text-[10px] text-gray-500">
          STEP {activeStepIndex + 1} OF {steps.length}
        </span>
      </div>

      {/* Node Flow Connector Chain */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2 relative">
        {steps.map((item, index) => {
          const isActive = index === activeStepIndex;
          const isPassed = index < activeStepIndex;

          return (
            <button
              key={index}
              onClick={() => setActiveStepIndex(index)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer relative ${
                isActive
                  ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-105 z-10'
                  : isPassed
                  ? 'bg-white/5 border-cyan-500/30 text-cyan-300'
                  : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-center mb-1.5">
                {isPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                ) : (
                  <span
                    className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center font-bold ${
                      isActive ? 'bg-cyan-400 text-black' : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {item.step}
                  </span>
                )}
              </div>
              <span className="font-mono font-bold text-xs tracking-wider text-white">
                {item.label}
              </span>

              {/* Arrow Connector for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-600 z-20">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Description Card */}
      <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
        <div>
          <div className="font-mono text-xs font-semibold text-cyan-300 tracking-wide mb-1">
            STAGE {steps[activeStepIndex].step}: {steps[activeStepIndex].label}
          </div>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {steps[activeStepIndex].desc}
          </p>
        </div>
      </div>
    </div>
  );
};
