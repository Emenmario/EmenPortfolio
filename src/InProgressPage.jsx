import React from 'react';
import { Settings, Hammer, ChevronRight } from 'lucide-react';

const InProgressPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center p-6 text-slate-200 selection:bg-cyan-500/30">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-2xl w-full text-center">
        {/* Animated Icon Header */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
            <div className="relative bg-[#16161a] border border-white/5 p-5 rounded-3xl shadow-2xl">
              <Settings className="w-12 h-12 text-blue-400 animate-[spin_8s_linear_infinite]" />
              <Hammer className="w-6 h-6 text-cyan-400 absolute bottom-3 right-3" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Upgrade</span> in Progress
        </h1>
        
        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
          We're currently fine-tuning the engine to bring you a faster, more seamless experience. RigelCore will be back online shortly.
        </p>

        {/* Progress Card */}
        <div className="bg-[#111114] border border-white/5 p-1 rounded-2xl mb-12 shadow-inner">
          <div className="bg-[#16161a] p-6 rounded-[calc(1rem-1px)]">
            <div className="flex justify-between items-end mb-4">
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-1">Status</p>
                <p className="text-sm text-slate-300 font-medium">Optimizing Database Schema</p>
              </div>
              <p className="text-sm font-mono text-cyan-400">88%</p>
            </div>
            
            {/* Custom Progress Bar */}
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300 transition-all duration-1000 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                style={{ width: '88%' }}
              />
            </div>
          </div>
        </div>

        {/* Backlink or Socials */}
        <div className="flex flex-col items-center gap-4">
          <button className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-full transition-all duration-300">
            <span className="text-sm font-medium">Check status on Telegram</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="absolute bottom-8 text-xs tracking-widest text-slate-600 uppercase">
        &copy; 2026 RigelCore Project
      </footer>
    </div>
  );
};

export default InProgressPage;