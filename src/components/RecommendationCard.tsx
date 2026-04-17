"use client";
import React, { useState, useEffect } from 'react';
import rekomendasiData from '@/data/rekomendasi.json';

export default function RecommendationCard() {
  const [rekomendasi, setRekomendasi] = useState("");

  useEffect(() => {
    // Pick random recommendation
    const randomRec = rekomendasiData[Math.floor(Math.random() * rekomendasiData.length)];
    setRekomendasi(randomRec);
  }, []);

  return (
    <div className="w-full p-6 bg-neutral-700/30 rounded-3xl flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-teal-400/80 to-stone-800 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-stone-200 text-sm font-bold font-['Inter'] leading-5">
          Rekomendasi Hari Ini
        </h2>
        <p className="text-stone-300 text-xs font-normal font-['Inter'] leading-5">
          {rekomendasi || "Memuat rekomendasi..."}
        </p>
      </div>
    </div>
  );
}
