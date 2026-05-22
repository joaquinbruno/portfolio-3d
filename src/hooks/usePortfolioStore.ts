import { create } from 'zustand';

export type SectionId =
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'studies'
  | 'personals'
  | 'contact'
  | null;

type PortfolioStore = {
  hasEnteredRoom: boolean;
  activeSection: SectionId;
  viewMode: '3d' | 'cv';
  lang: 'es' | 'en';
  setHasEnteredRoom: (value: boolean) => void;
  enterRoom: () => void;
  setActiveSection: (section: SectionId) => void;
  resetSection: () => void;
  setViewMode: (mode: '3d' | 'cv') => void;
  setLang: (lang: 'es' | 'en') => void;
};

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  hasEnteredRoom: false,
  activeSection: null,
  viewMode: '3d',
  lang: 'es',
  setHasEnteredRoom: (value) => set({ hasEnteredRoom: value }),
  enterRoom: () => set({ hasEnteredRoom: true, activeSection: 'about', viewMode: '3d' }),
  setActiveSection: (section) => set({ activeSection: section }),
  resetSection: () => set({ activeSection: null }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setLang: (lang) => set({ lang }),
}));
