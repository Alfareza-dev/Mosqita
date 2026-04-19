import React from 'react';
import { PackageOpen, Sun, Droplet, Home } from 'lucide-react';

const STEPS = [
  {
    title: "Persiapan Polybag",
    desc: "Keluarkan polybag berisi bibit sereh merah dari pouch Mosqita. Pastikan media tanam di dalamnya tetap padat dan gembur.",
    icon: <PackageOpen size={20} strokeWidth={2.5} />
  },
  {
    title: "Pilih Lokasi Ideal",
    desc: "Letakkan polybag di area teras atau halaman rumah yang mendapat paparan sinar matahari langsung minimal 4-6 jam sehari.",
    icon: <Sun size={20} strokeWidth={2.5} />
  },
  {
    title: "Penyiraman Rutin",
    desc: "Siram bibit secukupnya 1 kali sehari. Jangan biarkan air menggenang di dalam polybag agar akar tidak membusuk.",
    icon: <Droplet size={20} strokeWidth={2.5} />
  },
  {
    title: "Penempatan Strategis",
    desc: "Setelah daun mulai tumbuh lebat, pindahkan polybag ke dekat pintu atau sudut rumah yang rawan nyamuk.",
    icon: <Home size={20} strokeWidth={2.5} />
  }
];

export const SerehTimeline = () => {
  return (
    <div className="flex flex-col gap-8 md:bg-stone-900/30 md:p-8 md:rounded-[32px] md:border border-stone-800/30">
      <div className="flex flex-row justify-between items-start md:items-center pr-4">
        <h2 className="text-teal-400 text-lg md:text-xl md:text-2xl font-bold font-heading mb-0">Budidaya Sereh Merah</h2>
        <div className="px-3 py-1 bg-teal-400/10 border border-teal-400/20 rounded-full flex justify-center items-center mt-1 md:mt-0">
          <span className="text-teal-400 text-[10px] md:text-xs font-bold font-sans uppercase tracking-wide">REPELLENT ALAMI</span>
        </div>
      </div>
      
      <div className="flex flex-col pl-4 md:pl-2">
        {STEPS.map((step, index) => (
          <div key={index} className="relative pl-8 md:pl-10 pb-8 border-l-2 border-teal-400/20 last:border-transparent last:pb-0">
            {/* Step Number Badge */}
            <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex justify-center items-center border-[3px] border-neutral-900 ${index === 0 ? 'bg-teal-400 text-teal-950' : 'bg-teal-400/20 text-teal-400 border-neutral-900/50'} font-bold text-sm font-sans transition-colors z-20`}>
              {index + 1}
            </div>

            {/* Card Content */}
            <div className="p-5 md:p-6 bg-stone-900 rounded-2xl flex flex-col gap-3 shadow-sm border border-stone-800 hover:border-teal-400/50 hover:bg-stone-800/80 transition-all group overflow-hidden relative">
              <div className="flex items-center gap-3 relative z-10">
                <div className="text-teal-400/80 group-hover:text-teal-400 transition-colors bg-teal-400/10 p-2 rounded-xl border border-teal-400/20">
                  {step.icon}
                </div>
                <h3 className="text-stone-200 text-sm md:text-base font-bold font-sans tracking-wide">{step.title}</h3>
              </div>
              <p className="text-stone-400 group-hover:text-stone-300 text-xs md:text-sm font-normal font-sans leading-relaxed relative z-10 transition-colors">
                {step.desc}
              </p>
              
              {/* Aesthetic Transparent Number Background */}
              <div className="absolute right-[-10px] bottom-[-20px] text-[100px] font-black font-heading text-white/[0.03] group-hover:text-teal-400/[0.05] group-hover:scale-110 select-none pointer-events-none transform transition-all duration-500">
                0{index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
