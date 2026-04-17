import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import BottomNavigation from '@/components/BottomNavigation';
import { TutorialHeader } from '@/components/TutorialHeader';
import { SerehTimeline } from '@/components/SerehTimeline';
import { AbateGuide } from '@/components/AbateGuide';

export default function TutorialPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 pb-32">
      <TopNavigation />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-10 flex flex-col gap-10">
        <TutorialHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          <SerehTimeline />
          <AbateGuide />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
