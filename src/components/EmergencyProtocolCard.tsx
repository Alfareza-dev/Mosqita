"use client";
import React, { useState, useEffect } from 'react';
import { WarningShieldIcon } from './Icons';
import tipsData from '@/data/tips.json';

export const EmergencyProtocolCard = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    // Select a random tip on mount
    const randomTip = tipsData[Math.floor(Math.random() * tipsData.length)];
    setTip(randomTip);
  }, []);

  return (
    <div className="p-6 bg-stone-900 rounded-3xl outline outline-1 outline-offset-[-1px] outline-stone-700/10 flex items-start gap-5 hover:outline-red-500/30 hover:bg-stone-800 transition-all duration-300 cursor-pointer group shadow-sm">
      <WarningShieldIcon className="text-red-300 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 mt-1" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-stone-200 text-sm font-bold leading-5">Protokol Kedaruratan &amp; Tips</h3>
        <p className="text-red-200/90 text-xs font-normal leading-relaxed">
          {tip || "Memuat tips preventif..."}
        </p>
      </div>
    </div>
  );
};
