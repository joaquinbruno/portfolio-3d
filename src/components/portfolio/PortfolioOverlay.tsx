'use client';

import { usePortfolioStore, type SectionId } from '@/hooks/usePortfolioStore';
import {
  Activity,
  Briefcase,
  CornerDownRight,
  Cpu,
  FolderGit2,
  Globe,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  Rocket,
  Terminal,
  Unlock,
  User
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SectionPanel } from './SectionPanel';

export function PortfolioOverlay() {
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection);
  const lang = usePortfolioStore((state) => state.lang);
  const setLang = usePortfolioStore((state) => state.setLang);

  // Auto-scroll telemetry log
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Time & Uptime simulation
  const [timeStr, setTimeStr] = useState('00:00:00 UTC');
  const [uptimeStr, setUptimeStr] = useState('00:00:00');
  const [loadingSpeed, setLoadingSpeed] = useState('98 ms');
  const [systemLogs, setSystemLogs] = useState<string[]>([
    'SYS: GUEST INTERFACE INITIALIZED.',
    'INFRA: R3F FRAMEWORK LOADED AT 60FPS.',
    'CORE: SECURE SOCKET PORT 443 ESTABLISHED.',
    'UI: MONOSPACE DESIGN TOKENS APPLIED.'
  ]);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [systemLogs]);

  useEffect(() => {
    // Clock tick
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toUTCString().split(' ')[4] + ' UTC');
    }, 1000);

    // Uptime tick
    let secs = 0;
    const uptimeTimer = setInterval(() => {
      secs++;
      const h = Math.floor(secs / 3600).toString().padStart(2, '0');
      const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
      const s = (secs % 60).toString().padStart(2, '0');
      setUptimeStr(`${h}:${m}:${s}`);
    }, 1000);

    // Speed random simulation
    const speedTimer = setInterval(() => {
      setLoadingSpeed(`${Math.floor(Math.random() * 40 + 75)} ms`);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(uptimeTimer);
      clearInterval(speedTimer);
    };
  }, []);

  // Watch for active section changes to add interactive logs
  useEffect(() => {
    if (activeSection) {
      const timestamp = new Date().toUTCString().split(' ')[4];
      const sectionLabel = activeSection.toUpperCase();
      const actionLogs = [
        `[${timestamp}] EVENT: SELECT_SECTOR -> [${sectionLabel}]`,
        `[${timestamp}] CMD: LERP_CAMERA_RIG TO SECTOR_${sectionLabel}`,
        `[${timestamp}] LIGHTS: INDUCTIVE GLOW EMITTED COLOR: #F8FAFC`,
        `[${timestamp}] CACHE: RETRIEVING DATA FROM PORTFOLIO_DB...`
      ];
      setSystemLogs((prev) => [...prev, ...actionLogs].slice(-12)); // keep last 12 logs
    } else {
      const timestamp = new Date().toUTCString().split(' ')[4];
      setSystemLogs((prev) => [
        ...prev,
        `[${timestamp}] EVENT: RE-CENTER_CAMERA -> DEFAULT_VIEW`,
        `[${timestamp}] STATUS: CAMERA FREE CONTROLS RE-ACTIVATED.`
      ].slice(-12));
    }
  }, [activeSection]);

  const navItems: Array<{ id: Exclude<SectionId, null>; label: string; icon: any }> = [
    { id: 'about', label: lang === 'es' ? 'Sobre mí' : 'About me', icon: User },
    { id: 'skills', label: lang === 'es' ? 'Skills' : 'Skills', icon: Cpu },
    { id: 'experience', label: lang === 'es' ? 'Experiencia' : 'Experience', icon: Briefcase },
    { id: 'projects', label: lang === 'es' ? 'Proyectos' : 'Projects', icon: FolderGit2 },
    { id: 'studies', label: lang === 'es' ? 'Estudios' : 'Education', icon: GraduationCap },
    { id: 'personals', label: lang === 'es' ? 'Proyectos Personales' : 'Personal Projects', icon: Rocket },
    { id: 'contact', label: lang === 'es' ? 'Contacto' : 'Contact', icon: Mail },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-3 md:p-6 font-mono">
      {/* Scanline overlay across the active HUD */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_98%,rgba(255,255,255,0.02)_2%)] bg-size-[100%_12px] opacity-10"></div>

      {/* ========================================================================= */}
      {/* TOP HUD STATUS PANEL */}
      {/* ========================================================================= */}
      <header className="pointer-events-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3 rounded border border-emerald-500/20 bg-[#070913]/85 p-3 backdrop-blur-md shadow-lg shadow-black/40 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-4 text-emerald-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-extrabold uppercase tracking-wider">{lang === 'es' ? 'SISTEMA ACTIVO' : 'SYSTEM ACTIVE'}</span>
          </div>
          <span className="text-emerald-500/30">|</span>
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-emerald-500/50" />
            <span className="text-gray-400">COORDS:</span>
            <span className="text-emerald-400">34.92° S, 57.95° W</span>
          </div>
          <span className="text-emerald-500/30 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-emerald-500/50 animate-pulse" />
            <span className="text-gray-400">PING:</span>
            <span className="text-emerald-400">{loadingSpeed}</span>
          </div>
          <span className="text-emerald-500/30 hidden lg:inline">|</span>
          <div className="hidden lg:flex items-center gap-1">
            {activeSection ? (
              <Unlock className="w-3.5 h-3.5 text-orange-400" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
            )}
            <span className="text-gray-400 font-medium">{lang === 'es' ? 'BLOQ CAM:' : 'CAM LOCK:'}</span>
            <span className={activeSection ? "text-orange-400 font-bold" : "text-emerald-400 font-bold"}>
              {activeSection ? `${activeSection.toUpperCase()}_TARGET` : 'STABLE_ORBIT'}
            </span>
          </div>
        </div>

        {/* Brand Core info & Translation Switch */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4 lg:gap-6 border-t lg:border-t-0 border-emerald-500/10 pt-2 lg:pt-0">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 bg-[#141b36] border border-emerald-500/20 rounded px-2 py-1">
            <Languages className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div className="flex gap-1 items-center text-[10px] font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-all select-none cursor-pointer ${lang === 'en' ? 'bg-cyan-500 text-black font-black' : 'text-gray-400 hover:text-cyan-300'}`}
              >
                EN
              </button>
              <span className="text-emerald-500/30 text-[9px]">/</span>
              <button
                onClick={() => setLang('es')}
                className={`px-1.5 py-0.5 rounded transition-all select-none cursor-pointer ${lang === 'es' ? 'bg-cyan-500 text-black font-black' : 'text-gray-400 hover:text-cyan-300'}`}
              >
                ES
              </button>
            </div>
          </div>

          <span className="text-emerald-500/30">|</span>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">UPTIME:</span>
            <span className="font-bold text-gray-300">{uptimeStr}</span>
          </div>

          <span className="text-emerald-500/30">|</span>

          <div className="flex items-center gap-1 bg-[#10152F] border border-violet-500/20 px-2.5 py-1 rounded text-gray-200">
            <span className="font-bold tracking-tight text-white">JOAQUIN_BRUNO // OS_v1.0</span>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN BODY AREA (SIDEBARS & CONSOLE) */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col md:flex-row items-stretch justify-between gap-4 py-4 w-full h-[calc(100%-100px)] pointer-events-none">

        {/* LEFT SIDEBAR NAVIGATION */}
        <nav className="pointer-events-auto flex flex-row md:flex-col justify-start gap-1 md:gap-1.5 p-1 border border-emerald-500/15 rounded bg-[#070913]/90 backdrop-blur-sm shadow-xl w-full md:w-60 overflow-x-auto md:overflow-x-visible md:overflow-y-auto max-h-min md:max-h-none scrollbar-none h-fit">
          <div className="hidden md:block border-b border-emerald-500/15 px-3 py-2.5 mb-2">
            <p className="text-[10px] uppercase tracking-widest text-emerald-400/50 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-500/70" />
              {lang === 'es' ? 'Sectores de Red' : 'Network Sectors'}
            </p>
          </div>

          {navItems.map((item) => {
            const isSelected = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(isSelected ? null : item.id)}
                className={`relative flex items-center gap-2.5 w-full rounded border px-3 py-2 text-left text-xs md:text-sm transition-all duration-150 shrink-0 select-none cursor-pointer ${
                  isSelected
                    ? 'border-orange-500/60 bg-linear-to-r from-orange-950/40 to-orange-900/10 text-orange-400 font-extrabold shadow shadow-orange-500/10'
                    : 'border-transparent text-gray-400 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-950/20'
                }`}
              >
                {/* Active Sector indicator */}
                {isSelected && (
                  <span className="absolute -left-px top-1/2 -translate-y-1/2 w-1 h-1/2 bg-orange-500 rounded-r"></span>
                )}

                <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-400' : 'text-gray-500 group-hover:text-emerald-400'}`} />
                <span className="truncate flex-1 uppercase tracking-wider">{item.label}</span>

                {isSelected ? (
                  <span className="text-[9px] font-bold text-orange-400 border border-orange-500/40 px-1 bg-orange-950/60 rounded">
                    ACTIVE
                  </span>
                ) : (
                  <CornerDownRight className="w-3.5 h-3.5 text-gray-600 self-end opacity-0 md:opacity-40" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CONTAINER FOR RIGHT WORKSPACE SCREEN (DRAWER OR EXPANDED INFORMATION PANEL) */}
        <div className="flex-1 flex justify-end items-stretch pointer-events-none relative">
          {activeSection && <SectionPanel sectionId={activeSection} />}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM RUNTIME LOGS / TERMINAL */}
      {/* ========================================================================= */}
      <footer className="pointer-events-auto flex items-end justify-between w-full text-xs">
        {/* Real-time logging terminal feed */}
        <div className="hidden lg:flex flex-col gap-1.5 w-96 rounded border border-emerald-500/15 bg-[#070913]/90 p-3 shadow-xl backdrop-blur-sm self-end">
          <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1 mb-1 text-[10px] text-emerald-400/40 uppercase font-black tracking-widest">
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-500/50" />
              {lang === 'es' ? 'Telemetría de Sistema' : 'Runtime Telemetry Log'}
            </span>
            <span>OS_STABLE</span>
          </div>
          <div className="h-28 overflow-y-auto font-mono text-[10px] leading-normal text-emerald-500/80 space-y-1 scrollbar-none">
            {systemLogs.map((log, index) => (
              <div key={index} className="truncate select-none py-0.5">
                {log}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>
        </div>

        {/* Small desktop tip & CV Button */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Small desktop tip */}
          <div className="text-[10px] tracking-wider text-gray-500 bg-black/60 border border-white/5 px-3 py-1.5 rounded select-none uppercase font-bold hidden sm:block">
            {lang === 'es' ? '💡 Consejo: Click en objetos 3D o arrastrar para rotar' : '💡 Tip: Click on 3D elements or drag to rotate'}
          </div>

          {/* Square CV Button */}
          <Link
            href="/cv"
            className="flex items-center gap-2 bg-[#10152F] hover:bg-violet-950 border border-violet-500/30 hover:border-violet-400/60 px-4 py-2 rounded text-[11px] tracking-widest text-violet-400 hover:text-white font-extrabold transition-all duration-150 cursor-pointer uppercase shadow-lg select-none"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
            </span>
            <span>CV</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
