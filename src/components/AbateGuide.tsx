import React from 'react';
import Image from 'next/image';

const AmanIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.6 14.6l7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25zM10 20c-1.38 0-2.68-.26-3.9-.79A9.97 9.97 0 012.93 17.08 9.87 9.87 0 01.79 13.9C.26 12.68 0 11.38 0 10c0-1.38.26-2.68.79-3.9.53-1.22 1.24-2.28 2.14-3.18C3.83 2.02 4.88 1.31 6.1.79 7.32.26 8.62 0 10 0c1.38 0 2.68.26 3.9.79 1.22.53 2.28 1.24 3.18 2.14.9.9 1.61 1.96 2.14 3.18.53 1.22.79 2.52.79 3.9 0 1.38-.26 2.68-.79 3.9-.53 1.22-1.24 2.28-2.14 3.18-.9.9-1.96 1.61-3.18 2.14-1.22.53-2.52.79-3.9.79zm0-2c2.23 0 4.13-.78 5.68-2.33C17.23 14.12 18 12.23 18 10c0-2.23-.77-4.13-2.32-5.68C14.13 2.77 12.23 2 10 2 7.77 2 5.87 2.77 4.32 4.32 2.77 5.87 2 7.77 2 10c0 2.23.77 4.13 2.32 5.68C5.87 17.22 7.77 18 10 18z" fill="currentColor"/>
  </svg>
);

const HindariIcon = () => (
  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 19L11 0l11 19H0zm3.45-2h15.1L11 4 3.45 17zM11 16c.28 0 .52-.1.71-.29.19-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71-.19-.19-.43-.29-.71-.29-.28 0-.52.1-.71.29-.19.19-.29.43-.29.71 0 .28.1.52.29.71.19.19.43.29.71.29zm-1-3h2V8h-2v5z" fill="currentColor"/>
  </svg>
);

export const AbateGuide = () => {
  return (
    <div className="flex flex-col gap-6 pt-2 md:pt-0">
      <h2 className="text-red-300 text-lg md:text-xl lg:text-2xl font-bold font-heading px-2 lg:px-0">Panduan Larvasida (Abate)</h2>
      
      {/* Ilustrasi Abate */}
      <div className="w-full relative">
        <Image 
          src="https://placehold.co/600x400/1C1B1B/FF3B30.png?text=Ilustrasi+Abate"
          alt="Ilustrasi Abate"
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl border border-white/5"
          unoptimized
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Aman Digunakan Card */}
        <div className="p-5 bg-teal-500/10 rounded-3xl flex flex-col items-start gap-4 border border-teal-500/20 hover:bg-teal-500/20 transition-colors h-full">
          <div className="w-12 h-12 bg-teal-400/20 rounded-full flex justify-center items-center text-teal-400">
            <AmanIcon />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-stone-200 text-sm font-semibold font-sans">Aman Digunakan</h3>
            <p className="text-red-200/80 text-xs font-normal font-sans leading-relaxed">
              Sesuai standar WHO untuk air rumah tangga, tidak berbau dan tidak berwarna.
            </p>
          </div>
        </div>

        {/* Hindari Kontak Card / Peringatan Bahaya */}
        <div className="p-5 bg-red-800/10 rounded-3xl flex flex-col items-start gap-4 border border-red-500/30 hover:bg-red-800/20 transition-colors h-full">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex justify-center items-center text-red-500">
            <HindariIcon />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-stone-200 text-sm font-semibold font-sans">Peringatan Bahaya</h3>
            <p className="text-red-200/80 text-xs font-normal font-sans leading-relaxed">
              <strong className="text-red-400 font-bold">DILARANG KERAS</strong> menggunakan air yang telah diberi Abate untuk minum atau memasak. Jauhkan dari anak-anak. Wajib cuci tangan dengan sabun setelah menabur.
            </p>
          </div>
        </div>
        
        {/* Dosis Presisi Banner - Full Width */}
        <div className="sm:col-span-2 min-h-[180px] p-6 lg:p-8 relative bg-zinc-800 rounded-3xl flex flex-col justify-end items-start overflow-hidden border border-stone-700/50 hover:border-red-400/30 transition-colors group mt-2">
          <div className="flex flex-col z-10 gap-2 w-full max-w-[70%] md:max-w-[80%]">
            <h3 className="text-stone-200 text-lg md:text-xl font-bold font-heading">Dosis Presisi Temephos</h3>
            <p className="text-red-200/90 text-xs md:text-sm font-normal font-sans leading-relaxed">
              Gunakan 1 gram bubuk Abate (setengah sendok teh) untuk 10 liter air. Taburkan perlahan ke dalam bak mandi atau genangan. Tidak perlu diaduk. Efektif hingga 2-3 bulan.
            </p>
          </div>
          
          {/* Decorative Drop Graphic */}
          <div className="absolute right-0 bottom-0 text-red-300 opacity-10 group-hover:opacity-20 group-hover:scale-110 origin-bottom-right transition-all duration-500 pointer-events-none">
            <svg width="140" height="140" viewBox="0 0 60 59" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.04 43c-1.27 0-2.18-.57-2.72-1.71-.54-1.14-.4-2.19.4-3.16l8.32-10.13V19h-1.5c-.42 0-.78-.14-1.07-.43-.29-.29-.43-.64-.43-1.07 0-.42.14-.78.43-1.07.29-.29.65-.43 1.07-.43h12c.42 0 .78.14 1.07.43.29.29.43.65.43 1.07 0 .43-.14.78-.43 1.07-.29.29-.65.43-1.07.43h-1.5v9l8.32 10.13c.8.97.93 2.03.39 3.16-.54 1.14-1.44 1.71-2.71 1.71H19.04z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
