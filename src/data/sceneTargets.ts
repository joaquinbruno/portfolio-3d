export type SectionId =
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'studies'
  | 'personalProjects'
  | 'contact';

export interface SceneTarget {
  id: SectionId;
  label: string;
  // Posición de la cámara cuando se selecciona esta sección
  cameraPosition: [number, number, number];
  // Hacia dónde mira la cámara
  lookAt: [number, number, number];
  // Posición de la luz puntual dedicada a la sección
  lightPosition: [number, number, number];
  // Color hex de la iluminación activa
  activeColor: string;
  inactiveColor: string;
  // Posición de la hitbox invisible interactiva
  hitboxPosition: [number, number, number];
  // Dimensiones [ancho, alto, profundidad] de la hitbox invisible
  hitboxArgs: [number, number, number];
}

export const defaultCameraTarget = {
  cameraPosition: [6, 5, 7] as [number, number, number],
  lookAt: [0, 1, 0] as [number, number, number],
};

export const sceneTargets: Record<SectionId, SceneTarget> = {
  about: {
    id: 'about',
    label: 'Sobre mí',
    cameraPosition: [4.2, 3.2, 4.6],
    lookAt: [0.4, 1.2, 0.3],
    lightPosition: [0.8, 2.2, 0.5],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [0, 1.2, 0.75],
    hitboxArgs: [1.2, 2, 1.2],
  },
  skills: {
    id: 'skills',
    label: 'Skills',
    cameraPosition: [4.8, 3.2, 3.5],
    lookAt: [-2.2, 1.4, -1],
    lightPosition: [-2.4, 2.4, -1],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [-3.0, 1.8, -1.25],
    hitboxArgs: [1, 2.8, 1.8],
  },
  experience: {
    id: 'experience',
    label: 'Experiencia',
    cameraPosition: [3.8, 3.6, 5],
    lookAt: [0.2, 2, -2.7],
    lightPosition: [0.2, 3, -2.5],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [-0.75, 2, -2.5],
    hitboxArgs: [1.8, 2.4, 0.6],
  },
  projects: {
    id: 'projects',
    label: 'Proyectos',
    cameraPosition: [3.5, 2.8, 4.2],
    lookAt: [0, 1.2, -1.4],
    lightPosition: [0, 2.2, -1.5],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [-1, 1.3, -0.6],
    hitboxArgs: [1.5, 1.8, 1.5],
  },
  studies: {
    id: 'studies',
    label: 'Estudios & Cursos',
    cameraPosition: [4.5, 3.1, 4],
    lookAt: [-1.8, 1.5, -1.8],
    lightPosition: [-1.8, 2.5, -1.8],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [-1.8, 1.5, -1.8],
    hitboxArgs: [1.2, 2.0, 1.2],
  },
  personalProjects: {
    id: 'personalProjects',
    label: 'Proyectos Personales',
    cameraPosition: [3.6, 2.8, 3.8],
    lookAt: [-0.8, 0.9, 1.7],
    lightPosition: [-0.8, 1.8, 1.7],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [-0.8, 1.0, 1.7],
    hitboxArgs: [1.2, 2.0, 1.2],
  },
  contact: {
    id: 'contact',
    label: 'Contacto',
    cameraPosition: [4.8, 3.2, 3.2],
    lookAt: [2.7, 1.5, 0.5],
    lightPosition: [2.9, 2.4, 0.7],
    inactiveColor: '#7c3aed',
    activeColor: '#f8fafc',
    hitboxPosition: [3.35, 1.5, 0.65],
    hitboxArgs: [1.2, 2.4, 1.2],
  },
};
