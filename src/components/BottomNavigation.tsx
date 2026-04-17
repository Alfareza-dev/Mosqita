"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, DataIcon, TutorialIcon, InfoIcon } from './Icons';

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-0 right-0 w-full px-4 z-50 flex justify-center pointer-events-none md:hidden">
      <nav className="w-full max-w-[320px] bg-stone-900/70 rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.80)] backdrop-blur-md flex items-center justify-around py-3 px-2 pointer-events-auto">
        
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center gap-1 min-w-[64px] px-2 py-1.5 rounded-full transition-all ${pathname === '/' ? 'bg-red-500/20 text-red-300' : 'hover:bg-white/5 text-stone-200/60 hover:text-stone-200'}`}
        >
          <HomeIcon className={pathname === '/' ? 'text-red-300' : ''} />
          <span className="text-[10px] font-medium font-['Inter'] leading-4">Beranda</span>
        </Link>
        
        <Link 
          href="/data-dbd" 
          className={`flex flex-col items-center justify-center gap-1 min-w-[64px] px-2 py-1.5 rounded-full transition-all ${pathname === '/data-dbd' ? 'bg-red-500/20 text-red-300' : 'hover:bg-white/5 text-stone-200/60 hover:text-stone-200'}`}
        >
          <DataIcon className={pathname === '/data-dbd' ? 'text-red-300' : ''} />
          <span className="text-[10px] font-medium font-['Inter'] leading-4">Data DBD</span>
        </Link>

        <Link 
          href="/tutorial" 
          className={`flex flex-col items-center justify-center gap-1 min-w-[64px] px-2 py-1.5 rounded-full transition-all ${pathname === '/tutorial' ? 'bg-red-500/20 text-red-300' : 'hover:bg-white/5 text-stone-200/60 hover:text-stone-200'}`}
        >
          <TutorialIcon className={pathname === '/tutorial' ? 'text-red-300' : ''} />
          <span className="text-[10px] font-medium font-['Inter'] leading-4">Tutorial</span>
        </Link>

        <Link 
          href="/tentang" 
          className={`flex flex-col items-center justify-center gap-1 min-w-[64px] px-2 py-1.5 rounded-full transition-all ${pathname === '/tentang' ? 'bg-red-500/20 text-red-300' : 'hover:bg-white/5 text-stone-200/60 hover:text-stone-200'}`}
        >
          <InfoIcon className={pathname === '/tentang' ? 'text-red-300' : ''} />
          <span className="text-[10px] font-medium font-['Inter'] leading-4">Tentang</span>
        </Link>

      </nav>
    </div>
  );
}
