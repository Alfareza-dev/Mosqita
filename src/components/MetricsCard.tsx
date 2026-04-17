import React from 'react';

interface MetricsCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  value: string;
  description: React.ReactNode;
}

export default function MetricsCard({ icon, iconBgColor, title, value, description }: MetricsCardProps) {
  return (
    <div className="w-full p-5 bg-stone-900 rounded-3xl border border-stone-700/5 flex flex-col gap-4">
      <div className={`w-10 h-10 rounded-xl flex justify-center items-center ${iconBgColor}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 mt-2">
        <span className="text-red-200 text-[10px] font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
          {title}
        </span>
        <span className="text-stone-200 text-2xl font-extrabold font-['Manrope'] leading-8">
          {value}
        </span>
      </div>
      <p className="text-red-200/80 text-[10px] font-normal font-['Inter'] leading-4">
        {description}
      </p>
    </div>
  );
}
