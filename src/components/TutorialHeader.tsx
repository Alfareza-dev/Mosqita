import React from 'react';

export const TutorialHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-stone-200 text-3xl md:text-4xl font-extrabold font-['Manrope'] leading-9">Pusat Edukasi</h1>
      <p className="text-red-200/80 text-base md:text-lg font-normal font-['Inter'] leading-6 max-w-lg mt-1">
        Panduan langkah demi langkah untuk menciptakan lingkungan bebas jentik nyamuk.
      </p>
    </div>
  );
};
