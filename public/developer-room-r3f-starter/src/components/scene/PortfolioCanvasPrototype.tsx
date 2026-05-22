'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { DeveloperRoomModel } from '@/components/scene/DeveloperRoomModel';
import { PortfolioHotspots } from '@/components/scene/PortfolioHotspots';
import type { PortfolioSectionId } from '@/data/roomHotspots';

export function PortfolioCanvasPrototype() {
  const [activeSection, setActiveSection] = useState<PortfolioSectionId | null>(null);

  return (
    <div className="fixed inset-0 bg-[#0B1020]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ position: [6, 5, 7], fov: 42 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 8, 5]} intensity={1.2} castShadow />
          <pointLight position={[-3, 3, 2]} intensity={2.2} distance={7} color="#7C3AED" />
          <pointLight position={[3, 2, 1]} intensity={1.4} distance={6} color="#F97316" />

          <DeveloperRoomModel
            onObjectClick={(objectName) => {
              // Ejemplo: podés detectar nombres como hotspot_projects, projects_monitor_screen, contact_portal, etc.
              console.log('Clicked object:', objectName);
            }}
          />

          <PortfolioHotspots onSelectSection={setActiveSection} alwaysVisible />

          <OrbitControls
            enablePan={false}
            enableZoom
            minDistance={5}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2.15}
            target={[0, 1, 0]}
          />
        </Suspense>
      </Canvas>

      {activeSection && (
        <div className="fixed bottom-4 right-4 z-10 w-[calc(100%-2rem)] rounded-2xl border border-white/10 bg-[#0B1020]/90 p-4 text-white shadow-2xl backdrop-blur md:bottom-8 md:right-8 md:w-[380px]">
          <button
            type="button"
            onClick={() => setActiveSection(null)}
            className="mb-3 rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          >
            Cerrar
          </button>
          <h2 className="text-xl font-semibold capitalize">{activeSection}</h2>
          <p className="mt-2 text-sm text-white/70">
            Acá conectás esta sección con tus datos reales del portfolio.
          </p>
        </div>
      )}
    </div>
  );
}
