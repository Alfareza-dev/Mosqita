"use client";

import React, { useState } from 'react';
import { InfoIcon } from './Icons';

export const EpidemiologyHeader = ({ onInfoClick }: { onInfoClick?: () => void }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-1">
      <div className="text-teal-400 text-xs font-medium uppercase leading-4 tracking-wide">
        LAPORAN PERIODIK EPIDEMIOLOGI
      </div>
      
      {/* Title */}
      <h1 className="text-stone-200 text-3xl md:text-4xl font-extrabold leading-9">
        Kota Malang
      </h1>
      
      {/* Subtitle & Info Trigger */}
      <div className="flex items-start gap-2 mt-1 w-full relative">
        <p className="text-red-200 text-sm font-normal leading-5 flex-1 pt-1.5">
          Data terkini transmisi virus dengue per kuartal ini. Pembaruan terakhir: 26 Januari 2026 (Rilis Dinkes Kota Malang).
        </p>
        <button 
          onClick={onInfoClick}
          aria-label="Pusat Transparansi Data"
          className="hover:bg-stone-800 p-1.5 rounded-full transition-colors cursor-pointer group"
        >
          <InfoIcon className="text-teal-400 w-4 h-4 group-hover:text-teal-300 transition-colors" />
        </button>
      </div>
    </div>
  );
};
