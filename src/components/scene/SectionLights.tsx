'use client';

import { sceneTargets, SectionId } from '@/data/sceneTargets';
import { usePortfolioStore } from '@/hooks/usePortfolioStore';

export function SectionLights() {
  const activeSection = usePortfolioStore((state) => state.activeSection) as SectionId | null;

  return (
    <>
      {Object.values(sceneTargets).map((target) => {
        const isActive = activeSection === target.id;

        // Si la sección está activa, la luz es más brillante y blanca/violeta muy claro (#F8FAFC o #C4B5FD)
        // Si no está activa, emitimos una luz violeta sutil por defecto (#7C3AED)
        const lightColor = isActive ? '#F8FAFC' : '#7C3AED';
        const intensity = isActive ? 2.5 : 0.45;
        const distance = isActive ? 5.5 : 2.5;

        return (
          <pointLight
            key={target.id}
            position={target.lightPosition}
            color={lightColor}
            intensity={intensity}
            distance={distance}
            decay={2}
          />
        );
      })}
    </>
  );
}
