import React from 'react';
import Image from 'next/image';

const STEPS = [
  {
    title: "Persiapan Polybag",
    desc: "Keluarkan polybag berisi bibit sereh merah dari pouch Mosqita. Pastikan media tanam di dalamnya tetap padat dan gembur.",
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.55 18H12.45V18l1-4H4.55l1 4zM5.55 20a2.45 2.45 0 01-2.45-2.45L2 14h14l-1.1 3.55A2.45 2.45 0 0112.45 20H5.55zM2 12h14v-2H2v2zm7-6c0-1.67.58-3.08 1.75-4.25C11.92.58 13.33 0 15 0c0 1.5-.47 2.8-1.43 3.9C12.63 5 11.43 5.67 10 5.9V8h8v4c0 .55-.2 1.02-.59 1.41A1.93 1.93 0 0116 14H2c-.55 0-1.02-.2-1.41-.59A1.93 1.93 0 010 12V8h8V5.9C6.57 5.67 5.38 5 4.43 3.9 3.48 2.8 3 1.5 3 0c1.67 0 3.08.58 4.25 1.75C8.42 2.92 9 4.33 9 6z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: "Pilih Lokasi Ideal",
    desc: "Letakkan polybag di area teras atau halaman rumah yang mendapat paparan sinar matahari langsung minimal 4-6 jam sehari.",
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.28 17c.2-.02.37-.1.51-.24.14-.14.21-.31.21-.51 0-.23-.07-.42-.22-.56-.15-.14-.34-.2-.58-.19-.68.05-1.41-.14-2.17-.56-.77-.43-1.25-1.2-1.45-2.32-.03-.18-.12-.33-.26-.45-.14-.12-.31-.17-.49-.17-.23 0-.42.09-.57.26-.15.18-.2.38-.15.61.28 1.52.95 2.6 2 3.25 1.05.65 2.11.94 3.17.88zm-.28 3C5.72 20 3.81 19.22 2.29 17.65.76 16.08 0 14.13 0 11.8c0-1.67.66-3.48 1.99-5.44C3.31 4.4 5.32 2.28 8 0c2.68 2.28 4.69 4.4 6.01 6.36 1.33 1.96 2 3.77 2 5.44 0 2.33-.76 4.28-2.29 5.85C12.19 19.22 10.28 20 8 20zm0-2c1.73 0 3.17-.59 4.3-1.76 1.13-1.18 1.7-2.65 1.7-4.44 0-1.22-.5-2.59-1.51-4.13C11.48 6.14 9.98 4.47 8 2.65 6.02 4.47 4.52 6.14 3.51 7.68c-1.01 1.53-1.51 2.91-1.51 4.12 0 1.78.57 3.26 1.7 4.44C4.83 17.41 6.27 18 8 18zm0-8z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: "Penyiraman Rutin",
    desc: "Siram bibit secukupnya 1 kali sehari. Jangan biarkan air menggenang di dalam polybag agar akar tidak membusuk.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3V0h2v3h-2zm0 19v-3h2v3h-2zm9-10v-2h3v2h-3zM0 12v-2h3v2H0zm17.7-6.3l-1.4-1.4 1.75-1.8 1.45 1.45-1.8 1.75zM3.95 19.5L2.5 18.05l1.8-1.75 1.4 1.4-1.75 1.8zm14.1 0l-1.75-1.8 1.4-1.4 1.8 1.75-1.45 1.45zM4.3 5.7L2.5 3.95 3.95 2.5 5.7 4.3 4.3 5.7zM11 17c-1.67 0-3.08-.58-4.25-1.75C5.58 14.08 5 12.67 5 11c0-1.67.58-3.08 1.75-4.25C7.92 5.58 9.33 5 11 5c1.67 0 3.08.58 4.25 1.75C16.42 7.92 17 9.33 17 11c0 1.67-.58 3.08-1.75 4.25C14.08 16.42 12.67 17 11 17zm0-2c1.12 0 2.06-.39 2.84-1.16.78-.78 1.16-1.72 1.16-2.84 0-1.12-.39-2.06-1.16-2.84C13.06 7.39 12.12 7 11 7c-1.12 0-2.06.39-2.84 1.16C7.39 8.94 7 9.88 7 11c0 1.12.39 2.06 1.16 2.84C8.94 14.61 9.88 15 11 15z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: "Penempatan Strategis",
    desc: "Setelah daun mulai tumbuh lebat, pindahkan polybag ke dekat pintu atau sudut rumah yang rawan nyamuk.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 19l-7-7-2.35 2.35c.13.25.22.52.27.8.05.28.1.57.1.85 0 1.1-.39 2.04-1.18 2.83C6.04 19.61 5.1 20 4 20c-1.1 0-2.04-.39-2.83-1.18C.39 18.04 0 17.1 0 16c0-1.1.39-2.04 1.18-2.83C1.96 12.39 2.9 12 4 12c.28 0 .57.03.85.08.28.05.55.14.8.27L8 10 5.65 7.65A2.99 2.99 0 014 8c-1.1 0-2.04-.39-2.83-1.18C.39 6.04 0 5.1 0 4c0-1.1.39-2.04 1.18-2.83C1.96.39 2.9 0 4 0c1.1 0 2.04.39 2.83 1.18C7.61 1.96 8 2.9 8 4c0 .28-.03.57-.08.85a3.02 3.02 0 01-.27.8L20 18v1h-3zM13 9L11 7l6-6h3v1l-7 7zM4 6c.55 0 1.02-.2 1.41-.59.39-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 004 2c-.55 0-1.02.2-1.41.59A1.93 1.93 0 002 4c0 .55.2 1.02.59 1.41.39.39.86.59 1.41.59zm6 4.5c.13 0 .25-.05.35-.15.1-.1.15-.22.15-.35s-.05-.25-.15-.35c-.1-.1-.22-.15-.35-.15s-.25.05-.35.15c-.1.1-.15.22-.15.35s.05.25.15.35c.1.1.22.15.35.15zM4 18c.55 0 1.02-.2 1.41-.59.39-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 004 14c-.55 0-1.02.2-1.41.59C2.2 14.98 2 15.45 2 16c0 .55.2 1.02.59 1.41.39.39.86.59 1.41.59z" fill="currentColor"/>
      </svg>
    )
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
            <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex justify-center items-center border-[3px] border-neutral-900 ${index === 0 ? 'bg-teal-400 text-teal-950' : 'bg-teal-400/20 text-teal-400 border-neutral-900/50'} font-bold text-sm font-sans transition-colors`}>
              {index + 1}
            </div>

            {/* Card Content */}
            <div className="p-5 bg-stone-900 rounded-2xl flex flex-col gap-4 shadow-sm border border-stone-800 hover:border-teal-400/30 transition-all group overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="text-teal-400/80 group-hover:text-teal-400 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-stone-200 text-sm md:text-base font-bold font-sans">{step.title}</h3>
              </div>
              <p className="text-red-200/80 text-xs md:text-sm font-normal font-sans leading-relaxed">
                {step.desc}
              </p>
              
              {/* Injected Image */}
              <div className="w-full relative mt-1">
                <Image 
                  src={`https://placehold.co/600x400/1C1B1B/00BFA5.png?text=Ilustrasi+Step+${index + 1}`}
                  alt={`Ilustrasi Step ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
