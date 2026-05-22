export type PortfolioSectionId =
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'backend'
  | 'contact';

export const roomHotspots: Array<{
  id: string;
  sectionId: PortfolioSectionId;
  label: string;
  position: [number, number, number];
}> = [
  { id: 'about-avatar', sectionId: 'about', label: 'Sobre mí', position: [0, 1.9, 0.75] },
  { id: 'projects-desk', sectionId: 'projects', label: 'Proyectos', position: [-1, 2.0, -0.6] },
  { id: 'skills-bookshelf', sectionId: 'skills', label: 'Skills', position: [-3.0, 2.6, -1.25] },
  { id: 'experience-posters', sectionId: 'experience', label: 'Experiencia', position: [-0.75, 2.65, -2.72] },
  { id: 'backend-server', sectionId: 'backend', label: 'Backend / APIs', position: [1.55, 2.75, -1.25] },
  { id: 'contact-portal', sectionId: 'contact', label: 'Contacto', position: [3.35, 2.35, 0.65] },
];
