'use client';

import { defaultCameraTarget, sceneTargets, SectionId } from '@/data/sceneTargets';
import { usePortfolioStore } from '@/hooks/usePortfolioStore';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

const tempCamPos = new Vector3();
const tempLookAt = new Vector3();
const currentLookAt = new Vector3(0, 1, 0);

export function CameraRig() {
  const activeSection = usePortfolioStore((state) => state.activeSection) as SectionId | null;
  const { camera } = useThree();

  const lastActiveSection = useRef<SectionId | null>(null);
  const isReturning = useRef<boolean>(false);

  // Detectamos la transición de tener algo seleccionado a cerrar y volver a la vista general
  useEffect(() => {
    if (lastActiveSection.current !== null && activeSection === null) {
      isReturning.current = true;
    }
    lastActiveSection.current = activeSection;
  }, [activeSection]);

  useFrame(() => {
    // Si hay una sección activa, interpolamos obligatoriamente hacia el objeto objetivo
    if (activeSection && sceneTargets[activeSection]) {
      const target = sceneTargets[activeSection];
      tempCamPos.set(target.cameraPosition[0], target.cameraPosition[1], target.cameraPosition[2]);
      tempLookAt.set(target.lookAt[0], target.lookAt[1], target.lookAt[2]);

      camera.position.lerp(tempCamPos, 0.05);
      currentLookAt.lerp(tempLookAt, 0.05);
      camera.lookAt(currentLookAt);
      isReturning.current = false; // Cancelamos cualquier retorno si se vuelve a seleccionar algo rápido
    }
    // Si no hay sección activa, pero estamos en el proceso de retorno a la vista por defecto
    else if (isReturning.current) {
      const targetCam = defaultCameraTarget.cameraPosition;
      const targetLook = defaultCameraTarget.lookAt;

      tempCamPos.set(targetCam[0], targetCam[1], targetCam[2]);
      tempLookAt.set(targetLook[0], targetLook[1], targetLook[2]);

      camera.position.lerp(tempCamPos, 0.05);
      currentLookAt.lerp(tempLookAt, 0.05);
      camera.lookAt(currentLookAt);

      // Si ya estamos muy cerca del objetivo por defecto, apagamos el retorno para liberar los controles libres
      if (camera.position.distanceTo(tempCamPos) < 0.08) {
        isReturning.current = false;
      }
    }
  });

  return null;
}
