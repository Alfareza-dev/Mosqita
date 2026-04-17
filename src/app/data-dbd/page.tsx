"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import TopNavigation from '@/components/TopNavigation';
import BottomNavigation from '@/components/BottomNavigation';
import { EpidemiologyHeader } from '@/components/EpidemiologyHeader';
import { EpidemiologyStats } from '@/components/EpidemiologyStats';
import { CriticalPhaseChart } from '@/components/CriticalPhaseChart';
import { EmergencyProtocolCard } from '@/components/EmergencyProtocolCard';
import { RiskMapCard } from '@/components/RiskMapCard';
import { motion, AnimatePresence } from 'framer-motion';
import epiData from '@/data/epidemiologi.json';

export default function DataDBDPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-neutral-900 pb-32">
      <TopNavigation />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Kiri / Utama: Header, Stats, Phase Chart */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <EpidemiologyHeader onInfoClick={() => setIsSheetOpen(true)} />
            <EpidemiologyStats summary={epiData.summary} trend={epiData.yearly_trend} />
            <CriticalPhaseChart />
          </div>

          {/* Kanan / Side: Map & Emergency */}
          <div className="lg:col-span-5 flex flex-col gap-8">
             <RiskMapCard districts={epiData.districts} />
             
             {/* Kartu Edukasi (ABJ) */}
             <div className="w-full flex flex-col gap-4">
               <h2 className="text-stone-200 text-lg font-bold leading-7">Indikator Pencegahan</h2>
               <div className="w-full bg-stone-900 rounded-[32px] p-6 border border-stone-800/80 shadow-md flex flex-col gap-3 relative overflow-hidden">
                 <h3 className="text-stone-300 text-sm font-semibold uppercase tracking-wider relative z-10">
                   ANGKA BEBAS JENTIK (ABJ)
                 </h3>
                 <div className="flex items-baseline gap-1 relative z-10">
                   <span className="text-red-400 text-4xl font-black">{epiData.key_indicators.abj.current_value}</span>
                   <span className="text-red-400/60 text-lg font-bold">{epiData.key_indicators.abj.unit}</span>
                 </div>
                 <div className="p-3 bg-red-900/20 rounded-xl border border-red-800/30 relative z-10">
                   <p className="text-red-300 text-xs font-medium leading-relaxed">
                     <span className="font-bold">Kritis:</span> {epiData.key_indicators.abj.warning}
                   </p>
                 </div>
                 {/* Glow Background */}
                 <div className="absolute top-[-30px] right-[-30px] w-32 h-32 bg-red-500/10 rounded-full blur-[32px] pointer-events-none" />
               </div>
             </div>

             <EmergencyProtocolCard />
          </div>
          
        </div>
        
        {/* Call to Action CTA */}
        <div className="mt-12 md:mt-16 flex justify-center w-full">
          <Link href="/tutorial" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-teal-950 text-base font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:-translate-y-1 active:translate-y-0">
            Cegah Sekarang &rarr;
          </Link>
        </div>
      </main>

      <BottomNavigation />

      {/* ── Pusat Transparansi Data — iPhone-style Bottom Sheet ── */}
      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsSheetOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[90] max-h-[92dvh] flex flex-col bg-stone-900/95 backdrop-blur-xl rounded-t-[28px] border-t border-white/10 shadow-[0_-10px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-stone-600" />
              </div>

              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0">
                <div>
                  <h2 className="text-lg font-bold text-stone-100">Pusat Transparansi Data</h2>
                  <p className="text-xs text-stone-500 mt-0.5">Mosqita — Metodologi & Sumber</p>
                </div>
                <button
                  onClick={() => setIsSheetOpen(false)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                  aria-label="Tutup"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sheet Body — Scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 overscroll-contain">
                
                {/* Intro */}
                <div>
                  <h3 className="text-base font-bold text-stone-100 leading-snug">
                    Memahami Data & Metodologi Mosqita
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed mt-2">
                    Mosqita menyajikan data berbasis fakta dan parameter lingkungan untuk membantu Anda mengidentifikasi risiko DBD di Kota Malang. Berikut rincian pengelolaan informasi kami:
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Section 1 */}
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-teal-500/15 text-teal-400 text-xs font-bold flex-shrink-0">1</span>
                    <h4 className="text-sm font-bold text-stone-200">Sumber Data Epidemiologi</h4>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Seluruh angka statistik termasuk Kematian, Sembuh, dan Total Kasus (715 Kasus) bersumber dari Rilis Pers Resmi Dinas Kesehatan Kota Malang.
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                      <p className="text-sm text-stone-400 leading-relaxed"><span className="text-stone-300 font-medium">Validitas:</span> Data akumulatif sepanjang tahun 2025.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                      <p className="text-sm text-stone-400 leading-relaxed"><span className="text-stone-300 font-medium">Pembaruan:</span> Diperbarui berdasarkan rilis Dinkes tanggal 26 Januari 2026.</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Section 2 */}
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 text-xs font-bold flex-shrink-0">2</span>
                    <h4 className="text-sm font-bold text-stone-200">Indeks Risiko Kecamatan</h4>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Klasifikasi wilayah ditentukan berdasarkan kepadatan kasus aktif:
                  </p>
                  <div className="mt-3 flex flex-col gap-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1 flex-shrink-0 ring-2 ring-red-500/20" />
                      <p className="text-sm text-stone-400 leading-relaxed"><span className="text-red-300 font-medium">Zona Merah (Kritis):</span> Akumulasi kasus tertinggi (contoh: Sukun dengan 192 kasus).</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 flex-shrink-0 ring-2 ring-amber-500/20" />
                      <p className="text-sm text-stone-400 leading-relaxed"><span className="text-amber-300 font-medium">Zona Oranye/Kuning (Waspada/Siaga):</span> Laporan kasus moderat dengan tren meningkat.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0 ring-2 ring-emerald-500/20" />
                      <p className="text-sm text-stone-400 leading-relaxed"><span className="text-emerald-300 font-medium">Zona Hijau (Terkendali):</span> Wilayah dengan penekanan kasus yang signifikan.</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Section 3 ABJ */}
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-red-500/15 text-red-400 text-xs font-bold flex-shrink-0">3</span>
                    <h4 className="text-sm font-bold text-stone-200">Indikator Pencegahan (ABJ)</h4>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Kami memantau Angka Bebas Jentik (ABJ) sebagai parameter pencegahan. ABJ Kota Malang saat ini berada di 92%, masih di bawah target ideal nasional (95%), yang menandakan pentingnya menggalakkan kembali gerakan 3M Plus.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Section 4 */}
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-sky-500/15 text-sky-400 text-xs font-bold flex-shrink-0">4</span>
                    <h4 className="text-sm font-bold text-stone-200">Metodologi Analisis Lingkungan</h4>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    &ldquo;Potensi Perkembangbiakan&rdquo; dihitung otomatis via Weather API. Kelembapan udara &gt;70% memicu status &ldquo;Tinggi&rdquo; karena kondisi tersebut mencegah telur nyamuk mengering (desikasi) dan mempercepat siklus larva, terlepas dari jumlah kasus aktual.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Disclaimer */}
                <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/40">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    <h4 className="text-sm font-bold text-amber-300">Sanggahan (Disclaimer)</h4>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Informasi yang disajikan oleh Mosqita bertujuan untuk edukasi dan kesiapsiagaan dini masyarakat. Data ini tidak dapat digunakan sebagai rujukan medis resmi, diagnosis klinis, atau dasar hukum. Selalu ikuti instruksi dan protokol kesehatan resmi dari Puskesmas atau Dinas Kesehatan setempat dalam menangani gejala DBD.
                  </p>
                </div>

                {/* Bottom safe area spacing */}
                <div className="h-6" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
