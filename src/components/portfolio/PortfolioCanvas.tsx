'use client';

import { CameraRig } from '@/components/scene/CameraRig';
import { DeveloperRoomModel } from '@/components/scene/DeveloperRoomModel';
import { InvisibleHitbox } from '@/components/scene/InvisibleHitbox';
import { SectionLights } from '@/components/scene/SectionLights';
import { sceneTargets } from '@/data/sceneTargets';
import { usePortfolioStore } from '@/hooks/usePortfolioStore';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export function PortfolioCanvas() {
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const isFreeCamera = activeSection === null;

  return (
    <div className="fixed inset-0 bg-[#0B1020]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [6, 5, 7],
          fov: 42,
        }}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Iluminación base muy tenue para priorizar los glows de las secciones */}
          <ambientLight intensity={0.4} color="#151525" />

          {/* Luz solar suave y atmosférica */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={0.7}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />

          {/* El modelo 3D de la habitación */}
          <DeveloperRoomModel />

          {/* Control de luces dinámicas (Glow) según la sección activa */}
          <SectionLights />

          {/* Rig de cámara que controla los movimientos suaves y el zoom */}
          <CameraRig />

          {/* Hitboxes invisibles para selección por clic directo sobre los objetos */}
          {Object.values(sceneTargets).map((target) => (
            <InvisibleHitbox
              key={target.id}
              sectionId={target.id}
              position={target.hitboxPosition}
              args={target.hitboxArgs}
            />
          ))}

          {/*
            Habilitamos la rotación y el zoom manual libre solo cuando NO hay ninguna sección seleccionada.
            Esto permite que el usuario pueda explorar libremente la habitación en su estado inicial.
          */}
          <OrbitControls
            enablePan={false}
            enableZoom={isFreeCamera}
            enableRotate={isFreeCamera}
            minDistance={4.5}
            maxDistance={11}
            maxPolarAngle={Math.PI / 2.15}
            minPolarAngle={Math.PI / 6}
            target={[0, 1, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
