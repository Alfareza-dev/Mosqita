import React from 'react';
import { InfoIcon } from './Icons';

export const CriticalPhaseChart = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-2">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-stone-200 text-lg font-bold leading-7">Visualisasi Fase Kritis</h2>
      </div>

      {/* Graphic Panel */}
      <div className="px-5 py-8 md:p-10 bg-zinc-800/50 rounded-[32px] flex flex-col gap-10 md:gap-12 w-full border border-zinc-700/30">
        
        {/* Bar Chart Container */}
        <div className="h-40 md:h-48 px-2 md:px-4 flex justify-between items-end w-full gap-3 md:gap-6">
          {/* Hari 1-3 */}
          <div className="flex-1 h-20 md:h-24 relative bg-cyan-600/40 rounded-t-2xl transition-all duration-300 hover:bg-cyan-600/60 group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-sky-300 rounded-md px-2 py-1 text-cyan-950 text-[10px] font-semibold text-center whitespace-nowrap">
              Hari 1-3
            </div>
          </div>
          
          {/* Titik Kritis */}
          <div className="flex-1 h-36 md:h-44 relative bg-red-500 rounded-t-2xl shadow-[0_0_24px_rgba(239,68,68,0.25)]">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-300 rounded-md px-2.5 py-1 text-rose-950 text-[10px] font-bold text-center whitespace-nowrap shadow-sm">
              Titik Kritis
            </div>
            {/* Glossy Overlay/Reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/0 rounded-t-2xl" />
          </div>
          
          {/* Hari 6-7 */}
          <div className="flex-1 h-24 md:h-28 relative bg-teal-500/40 rounded-t-2xl transition-all duration-300 hover:bg-teal-500/60 group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-teal-400 rounded-md px-2 py-1 text-teal-950 text-[10px] font-semibold text-center whitespace-nowrap">
              Hari 6-7
            </div>
          </div>
        </div>

        {/* Labels/Legend */}
        <div className="grid grid-cols-3 gap-2 w-full text-center">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-sky-300 text-[10px] md:text-xs font-bold uppercase tracking-wide">FASE DEMAM</span>
            <span className="text-stone-300 text-[11px] md:text-sm font-medium leading-tight">Suhu meningkat.</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-red-400 text-[10px] md:text-xs font-bold uppercase tracking-wide">FASE KRITIS</span>
            <span className="text-stone-300 text-[11px] md:text-sm font-medium leading-tight">Waspada bocor plasma.</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-teal-400 text-[10px] md:text-xs font-bold uppercase tracking-wide">PENYEMBUHAN</span>
            <span className="text-stone-300 text-[11px] md:text-sm font-medium leading-tight">Tubuh stabil.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
