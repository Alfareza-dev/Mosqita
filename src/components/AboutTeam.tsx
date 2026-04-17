import React from 'react';

const TEAM_MEMBERS = [
  { name: 'Developer 1', role: 'Project Manager' },
  { name: 'Developer 2', role: 'UI/UX Designer' },
  { name: 'Developer 3', role: 'Frontend Eng.' },
  { name: 'Developer 4', role: 'Backend Eng.' },
  { name: 'Developer 5', role: 'Data Analyst' },
  { name: 'Developer 6', role: 'Research' },
  { name: 'Developer 7', role: 'Copywriter' },
  { name: 'Developer 8', role: 'QA Tester' },
];

export const AboutTeam = () => {
  return (
    <div className="w-full flex md:bg-stone-900/40 md:p-10 md:rounded-[32px] md:border border-stone-800/30 flex-col gap-6 max-w-5xl mx-auto mt-4 px-2 md:px-0">
      <h2 className="text-stone-200 text-xl font-bold font-heading px-2">Tim Pengembang</h2>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={index} className="p-4 bg-neutral-800/40 hover:bg-neutral-800/80 transition-all duration-300 rounded-3xl flex flex-col items-center border border-white/5 cursor-pointer group">
            <div className="relative flex justify-center items-center w-20 h-20 mb-3">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-teal-400/40 rounded-full blur-md opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                className="w-16 h-16 relative rounded-full border-2 border-stone-800 object-cover z-10 bg-neutral-900 group-hover:scale-105 transition-transform duration-300" 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} 
                alt={member.name} 
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-stone-200 text-sm font-bold font-heading text-center leading-tight">{member.name}</h3>
              <span className="text-stone-200/50 text-[10px] font-medium text-center mt-1">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
