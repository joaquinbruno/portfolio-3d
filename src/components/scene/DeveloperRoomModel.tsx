'use client';

import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import type { Group } from 'three';

type DeveloperRoomModelProps = {
  position?: [number, number, number];
  scale?: number;
  onObjectClick?: (objectName: string) => void;
};

export function DeveloperRoomModel({
  position = [0, 0, 0],
  scale = 1.0,
  onObjectClick,
}: DeveloperRoomModelProps) {
  const gltf = useGLTF('/models/developer-room-prototype.glb');

  useEffect(() => {
    gltf.scene.traverse((object) => {
      object.castShadow = true;
      object.receiveShadow = true;
    });
  }, [gltf.scene]);

  return (
    <primitive
      object={gltf.scene as Group}
      position={position}
      scale={scale}
      onClick={(event: any) => {
        event.stopPropagation();
        const clickedName = event.object?.name || 'unknown-object';
        onObjectClick?.(clickedName);
      }}
    />
  );
}

useGLTF.preload('/models/developer-room-prototype.glb');
