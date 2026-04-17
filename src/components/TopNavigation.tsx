"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon, BellIcon, HomeIcon, DataIcon, TutorialIcon, InfoIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeather } from '@/hooks/useWeather';
import notifData from '@/data/notifications.json';

export default function TopNavigation() {
  const pathname = usePathname();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const { humidity, isHighHumidity, isError, weatherData } = useWeather();
  const isTentangPage = pathname === '/tentang';

  // -- Logika Pusat Informasi (Fixed Order) --
  const dailyInsight = useMemo(() => {
    const idx = new Date().getDate() % notifData.daily_insights.length;
    return notifData.daily_insights[idx];
  }, []);

  const earlyWarning = useMemo(() => {
    // Data tidak tersedia — server offline
    if (isError || (humidity === null || humidity === undefined)) {
      return {
        id: "alert-offline",
        type: "offline" as const,
        title: "⚠ Server Offline",
        message: "Gagal mengambil data cuaca terbaru. Informasi risiko lingkungan tidak dapat dihitung saat ini.",
      };
    }
    if (isHighHumidity) {
      return {
        id: "alert-humidity",
        type: "alert" as const,
        title: "⚠ Peringatan Dini",
        message: `Kelembapan udara Malang saat ini ${humidity}% (di atas 70%). Genangan air berpotensi besar menjadi tempat perkembangbiakan jentik nyamuk. Segera lakukan 3M Plus!`,
      };
    }
    return {
      id: "alert-safe",
      type: "safe" as const,
      title: "✓ Kondisi Risiko Rendah",
      message: "Kelembapan udara saat ini cenderung kering. Secara alami, ini kurang ideal bagi penetasan jentik nyamuk, namun tetap pastikan tidak ada genangan air di sekitar Anda.",
    };
  }, [isHighHumidity, humidity, isError]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-neutral-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <LogoIcon className="text-red-300" />
            <h1 className="text-red-300 text-xl font-black font-manrope uppercase leading-7 tracking-wide">
              MOSQITA
            </h1>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <Link 
              href="/" 
              className={`flex items-center gap-2 font-medium transition-colors h-full border-b-2 ${pathname === '/' ? 'text-red-300 border-red-300' : 'text-stone-200/60 hover:text-stone-200 border-transparent'}`}
            >
              <HomeIcon className="w-4 h-4 scale-90" />
              <span className="text-sm">Beranda</span>
            </Link>
            
            <Link 
              href="/data-dbd" 
              className={`flex items-center gap-2 font-medium transition-colors h-full border-b-2 ${pathname === '/data-dbd' ? 'text-red-300 border-red-300' : 'text-stone-200/60 hover:text-stone-200 border-transparent'}`}
            >
              <DataIcon className="w-4 h-4 scale-90" />
              <span className="text-sm">Data DBD</span>
            </Link>

            <Link 
              href="/tutorial" 
              className={`flex items-center gap-2 font-medium transition-colors h-full border-b-2 ${pathname === '/tutorial' ? 'text-red-300 border-red-300' : 'text-stone-200/60 hover:text-stone-200 border-transparent'}`}
            >
              <TutorialIcon className="w-4 h-4 scale-90" />
              <span className="text-sm">Tutorial</span>
            </Link>

            <Link 
              href="/tentang" 
              className={`flex items-center gap-2 font-medium transition-colors h-full border-b-2 ${pathname === '/tentang' ? 'text-red-300 border-red-300' : 'text-stone-200/60 hover:text-stone-200 border-transparent'}`}
            >
              <InfoIcon className="w-4 h-4 scale-90" />
              <span className="text-sm">Tentang</span>
            </Link>
          </nav>

          {/* Action / Notification */}
          {!isTentangPage ? (
            <button 
              onClick={() => setIsNotifOpen(true)}
              className="relative flex items-center justify-center p-2 text-[#E7BDB7] hover:text-white transition-colors" 
              aria-label="Notifications"
            >
              <BellIcon />
              {isHighHumidity === true && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse border border-stone-900" />
              )}
              {isError && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-stone-500 rounded-full border border-stone-900" />
              )}
            </button>
          ) : (
            <div className="w-9 h-9" />
          )}

        </div>
      </header>

      {/* Slide-over Pusat Informasi */}
      <AnimatePresence>
        {isNotifOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNotifOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-stone-900/80 backdrop-blur-xl border-l border-white/10 z-[70] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-stone-900/50">
                <h3 className="text-xl font-bold text-stone-100">Pusat Informasi</h3>
                <button 
                  onClick={() => setIsNotifOpen(false)} 
                  className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition"
                  aria-label="Tutup Pusat Informasi"
                >
                  ✕
                </button>
              </div>

              {/* Ordered Notification Cards */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">

                {/* 1. Pembaruan Platform (Selalu di atas) */}
                <div className="p-5 rounded-2xl border border-sky-500/30 bg-sky-500/10 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-sky-500/20">
                      <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-sky-300">{notifData.static_top.title}</h4>
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed">{notifData.static_top.message}</p>
                </div>

                {/* 2. Status Lingkungan (alert / safe / offline) */}
                <div className={`p-5 rounded-2xl border backdrop-blur-md ${
                  earlyWarning.type === 'alert' 
                    ? 'border-red-500/30 bg-red-500/10' 
                    : earlyWarning.type === 'offline'
                    ? 'border-stone-600/30 bg-stone-700/20'
                    : 'border-sky-500/20 bg-sky-500/10'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      earlyWarning.type === 'alert' ? 'bg-red-500/20' 
                      : earlyWarning.type === 'offline' ? 'bg-stone-600/20'
                      : 'bg-sky-500/20'
                    }`}>
                      {earlyWarning.type === 'alert' ? (
                        <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                      ) : earlyWarning.type === 'offline' ? (
                        <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728M12 9v2m0 4h.01" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <h4 className={`font-semibold ${
                      earlyWarning.type === 'alert' ? 'text-red-300' 
                      : earlyWarning.type === 'offline' ? 'text-stone-400'
                      : 'text-sky-300'
                    }`}>
                      {earlyWarning.title}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed">{earlyWarning.message}</p>
                </div>

                {/* 3. Wawasan Harian (Rotasi otomatis) */}
                <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-amber-300">{dailyInsight.title}</h4>
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed">{dailyInsight.message}</p>
                </div>

                {/* 4. Gerakan 3M Plus (Selalu di bawah) */}
                <div className="p-5 rounded-2xl border border-teal-500/30 bg-teal-500/10 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-teal-500/20">
                      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-teal-300">{notifData.static_bottom.title}</h4>
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed">{notifData.static_bottom.message}</p>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
