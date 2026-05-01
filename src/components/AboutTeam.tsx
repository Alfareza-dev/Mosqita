import React from 'react';

const TEAM_MEMBERS = [
  { name: 'Aveline Violeta Wardhani' },
  { name: 'Danish Satria Indie' },
  { name: 'Destina Amelia Sari' },
  { name: 'Graciella Zahra Angelia' },
  { name: 'Kalila Raihanna Rizky Arafah' },
  { name: 'Mochammad Dzaky Azzam' },
  { name: 'Muhammad Alfareza Hans Purnomo' },
  { name: 'Salsabila Abelia Yocelyn' },
];

export const AboutTeam = () => {
  return (
    <div className="w-full flex md:bg-stone-900/40 md:p-10 md:rounded-[32px] md:border border-stone-800/30 flex-col gap-6 max-w-5xl mx-auto mt-4 px-4 md:px-0">
      <h2 className="text-stone-200 text-xl font-bold font-heading px-2 text-center md:text-left">Tim Pengembang</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-2">
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={index} 
            className="px-4 py-5 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-2xl flex justify-center items-center border border-white/5 hover:border-teal-400/30 cursor-default group"
          >
            <span className="text-stone-300 group-hover:text-teal-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-500 text-center leading-relaxed">
              {member.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
