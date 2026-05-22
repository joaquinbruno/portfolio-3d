'use client';

import { Html } from '@react-three/drei';
import { roomHotspots, type PortfolioSectionId } from '@/data/roomHotspots';

type PortfolioHotspotsProps = {
  onSelectSection: (section: PortfolioSectionId) => void;
  alwaysVisible?: boolean;
};

export function PortfolioHotspots({ onSelectSection, alwaysVisible = true }: PortfolioHotspotsProps) {
  return (
    <>
      {roomHotspots.map((hotspot) => (
        <Html key={hotspot.id} position={hotspot.position} center distanceFactor={8}>
          <button
            type="button"
            onClick={() => onSelectSection(hotspot.sectionId)}
            className={`rounded-full border border-violet-300/40 bg-black/70 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur transition hover:bg-violet-700 ${
              alwaysVisible ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            }`}
          >
            {hotspot.label}
          </button>
        </Html>
      ))}
    </>
  );
}
