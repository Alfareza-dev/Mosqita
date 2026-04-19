import React from 'react';

const TEAM_MEMBERS = [
  { name: 'Developer ', role: 'Project Manager' },
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
    <div className="w-full flex md:bg-stone-900/40 md:p-10 md:rounded-[32px] md:border border-stone-800/30 flex-col gap-6 max-w-5xl mx-auto mt-4 px-4 md:px-0">
      <h2 className="text-stone-200 text-xl font-bold font-heading px-2 text-center md:text-left">Tim Pengembang</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-2">
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={index} 
            className="px-6 py-5 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-2xl flex justify-center items-center border border-white/5 hover:border-teal-400/30 cursor-default group"
          >
            <span className="text-stone-300 group-hover:text-teal-400 text-sm md:text-base font-semibold tracking-wider transition-colors duration-500">
              {member.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
