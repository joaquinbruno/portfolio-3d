'use client';

import { useEffect } from 'react';
import { usePortfolioStore } from '@/hooks/usePortfolioStore';
import { PortfolioCanvas } from './PortfolioCanvas';
import { PortfolioOverlay } from './PortfolioOverlay';
import { IntroScreen } from './IntroScreen';

export function PortfolioExperience() {
  const hasEnteredRoom = usePortfolioStore((state) => state.hasEnteredRoom);

  // Trigger window resize event to force Three.js and Canvas to compute 100% dimensions on first dynamic load
  useEffect(() => {
    if (hasEnteredRoom) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hasEnteredRoom]);

  return (
    <main className="relative h-screen w-full bg-[#070913] text-white overflow-hidden">
      {!hasEnteredRoom ? (
        <IntroScreen />
      ) : (
        <div className="relative w-full h-full animate-fade-in">
          {/* Section 1: 3D Room Viewer + HUD Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 z-0">
              <PortfolioCanvas />
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none">
              <PortfolioOverlay />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
