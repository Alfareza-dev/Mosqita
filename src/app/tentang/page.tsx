import React from 'react';
import Image from 'next/image';
import TopNavigation from '@/components/TopNavigation';
import BottomNavigation from '@/components/BottomNavigation';
import { AboutTeam } from '@/components/AboutTeam';

export default function TentangPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 pb-32">
      <TopNavigation />

      <main className="w-full max-w-5xl mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-10 flex flex-col items-center gap-12 md:gap-16">
        
        {/* Clean Logo Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-3 md:p-4 rounded-3xl shadow-sm inline-flex justify-center items-center">
            <Image 
              src="/Moklet.png" 
              alt="Logo SMK Telkom Malang"
              width={96}
              height={96}
              className="w-20 md:w-28 h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Narrative Card Section with Subtle Glow */}
        <div className="w-full relative max-w-3xl mx-auto mt-4 md:mt-8">
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-full" />
          
          {/* Modern Card Wrapper */}
          <div className="relative bg-stone-800/30 border border-stone-700/50 backdrop-blur-md rounded-[32px] p-8 md:p-12 shadow-2xl text-center">
            
            <h1 className="text-3xl font-extrabold text-stone-100 font-heading">
              Tentang Mosqita
            </h1>
            
            {/* Accent Line */}
            <div className="w-12 h-1 bg-teal-500 rounded-full mx-auto mt-4 mb-8" />
            
            <div className="space-y-6">
              <p className="text-stone-300 text-base md:text-lg font-sans leading-relaxed">
                Mosqita adalah website edukasi seputar pencegahan Demam Berdarah Dengue (DBD). Di sini tersedia informasi praktis tentang cara menanam Sereh Merah dan panduan penggunaan bubuk Abate sebagai langkah sederhana mencegah perkembangbiakan nyamuk di sekitar rumah.
              </p>
              <p className="text-stone-300 text-base md:text-lg font-sans leading-relaxed">
                Website ini hadir sebagai referensi digital yang bisa diakses kapan saja baik sebagai panduan awal maupun pengingat jangka panjang. Informasinya disusun singkat dan langsung ke poin, supaya mudah dipahami siapa saja.
              </p>
              <p className="text-stone-300 text-base md:text-lg font-sans leading-relaxed">
                Mosqita dibuat oleh siswa kelas 11 SMK Telkom Malang sebagai bagian dari tugas mata pelajaran PPKn. Semoga bermanfaat!
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid (Retained) */}
        {/* <div className="w-full">
          <AboutTeam />
        </div> */}

        {/* Mini Footer */}
        <div className="mt-8 text-sm text-stone-500 font-medium font-sans text-center">
          Mosqita &middot; SMK Telkom Malang &middot; 2026
        </div>

      </main>

      <BottomNavigation />
    </div>
  );
}
