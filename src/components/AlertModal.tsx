"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { WarningAlertIcon } from './Icons';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlertModal({ isOpen, onClose }: AlertModalProps) {
  const router = useRouter();

  const handleTutorialClick = () => {
    onClose();
    router.push('/tutorial');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="pointer-events-auto w-full max-w-[320px] md:max-w-sm p-8 relative bg-neutral-800/80 rounded-[40px] border border-white/10 backdrop-blur-[20px] flex flex-col justify-start items-start gap-3 shadow-[0px_32px_64px_-12px_rgba(0,0,0,0.60)]"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-500/20 rounded-3xl flex justify-center items-center shrink-0">
                <WarningAlertIcon className="text-[#FFB4AA]" />
              </div>
              
              {/* Title */}
              <div className="w-full pt-3 flex flex-col justify-start items-start">
                <h3 className="w-full text-stone-200 text-2xl font-bold font-manrope leading-8">
                  Waspada DBD di<br />Malang!
                </h3>
              </div>
              
              {/* Description */}
              <div className="w-full flex flex-col justify-start items-start">
                <p className="w-full text-red-200 text-base font-normal leading-6">
                  Ingin melihat tutorial menanam Sereh Merah sekarang untuk pengusir nyamuk alami?
                </p>
              </div>
              
              {/* Actions */}
              <div className="w-full pt-5 flex flex-col justify-start items-start gap-3">
                <button 
                  onClick={handleTutorialClick}
                  className="w-full h-14 bg-teal-500 hover:bg-teal-400 transition-colors rounded-full flex justify-center items-center text-emerald-900 text-base font-bold leading-6 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  Ya, Lihat Tutorial
                </button>
                <button 
                  onClick={onClose}
                  className="w-full h-14 rounded-full border border-stone-700/30 hover:bg-stone-700/50 transition-colors flex justify-center items-center text-stone-200 text-base font-medium leading-6 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  Nanti saja
                </button>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
