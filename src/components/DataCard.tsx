import React from 'react';

interface DataCardProps {
  title: string;
  value: string;
  isDanger?: boolean;
}

export default function DataCard({ title, value, isDanger = false }: DataCardProps) {
  return (
    <div className={`rounded-2xl p-4 flex flex-col gap-2 border transition-all ${isDanger ? 'bg-danger/10 border-danger/20' : 'bg-white/5 border-white/10'}`}>
      <h3 className="text-sm text-white/70 font-medium">{title}</h3>
      <div className={`text-3xl font-bold tracking-tighter ${isDanger ? 'text-danger' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
}
