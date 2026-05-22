'use client';

import { SectionId } from '@/data/sceneTargets';
import { usePortfolioStore } from '@/hooks/usePortfolioStore';
import { useState } from 'react';

type InvisibleHitboxProps = {
  sectionId: SectionId;
  position: [number, number, number];
  args: [number, number, number];
};

export function InvisibleHitbox({ sectionId, position, args }: InvisibleHitboxProps) {
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection);
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const [hovered, setHovered] = useState(false);

  const isActive = activeSection === sectionId;

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    setHovered(false);
    // Solo restablecemos el cursor si ningún otro elemento lo está controlando
    document.body.style.cursor = 'default';
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    setActiveSection(isActive ? null : sectionId);
  };

  return (
    <mesh
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <boxGeometry args={args} />
      {/*
        Sutil marco/glow visual cuando pasamos el ratón por encima (hover) o si está seleccionada (active).
        Usamos un material transparente para mantener la escena limpia pero con feedback intuitivo.
      */}
      <meshBasicMaterial
        transparent
        opacity={isActive ? 0.15 : hovered ? 0.08 : 0}
        color={isActive ? '#F8FAFC' : '#7C3AED'}
        wireframe={isActive || hovered}
      />
    </mesh>
  );
}
