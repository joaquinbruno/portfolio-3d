'use client';

import { usePortfolioStore } from '@/hooks/usePortfolioStore';
import { useEffect, useRef, useState } from 'react';

const LOG_LINES = [
  "SYSTEM ARCHITECTURE: x86_64-cyber-os",
  "INITIALIZING BOOT SEQUENCE...",
  "LOADING KERNEL MODULES [ OK ]",
  "MOUNTING MEMORY SYSTEMS [ OK ]",
  "ESTABLISHING SECURE PROTOCOLS...",
  "RESOLVING COORDINATES: 34.9214° S, 57.9545° W",
  "LOCATING GEOGRAPHICAL SECTOR: LA PLATA, ARG",
  "LOADING PROJECT CORE: 'JOAQUIN BRUNO - PORTFOLIO'",
  "RETRIEVING THREE.JS / WEBGL ASSETS [ OK ]",
  "SYNCHRONIZING SCENE TARGETS [ 7/7 SECTORS ACTIVE ]",
  "INITIALIZING ISOMETRIC 3D LIGHT PROTOCOLS...",
  "ESTABLISHING RETRO-RADIAL WEB INTERFACE INTERFACE...",
  "SYSTEM LOAD INSECURE MODE DEPRECATED. SECURE SSL READY.",
  "ALL SYSTEMS FUNCTIONAL. READY TO INJECT USER."
];

export function IntroScreen() {
  const enterRoom = usePortfolioStore((state) => state.enterRoom);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Print logs line by line
  useEffect(() => {
    if (currentLineIndex < LOG_LINES.length) {
      const delay = Math.random() * 150 + 100; // random simulated print speed
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, LOG_LINES[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, [currentLineIndex]);

  // Keep terminal scrolled to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070913] font-mono px-4 select-none">
      {/* Scanline Effect Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%] opacity-40 z-50"></div>

      {/* Retro flickering screen glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-30 z-40"></div>

      {/* Terminal Main Container */}
      <div className="relative w-full max-w-2xl rounded border-2 border-emerald-500/30 bg-[#0A0D1A]/90 p-4 shadow-xl shadow-emerald-950/20 md:p-6 flex flex-col h-[65vh] max-h-125">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4 text-[10px] md:text-xs text-emerald-400/60 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/60"></span>
            <span className="ml-2 font-bold font-mono">RETRO-CYBER-CORE v1.1.0</span>
          </div>
          <div className="text-right">ONLINE</div>
        </div>

        {/* Terminal Content Buffer */}
        <div className="flex-1 overflow-y-auto text-xs md:text-sm text-emerald-400 space-y-1.5 scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
          {logs.map((log, idx) => (
            <div key={idx} className="flex gap-2 items-start">
              <span className="text-emerald-500/40 select-none font-bold">[{idx.toString().padStart(2, '0')}]</span>
              <span className="break-all">{log}</span>
            </div>
          ))}

          {currentLineIndex < LOG_LINES.length && (
            <div className="flex items-center gap-1 text-emerald-300">
              <span className="text-emerald-500/40 select-none font-bold">[{currentLineIndex.toString().padStart(2, '0')}]</span>
              <span className="animate-pulse font-bold">● PROCESSING REQUEST...</span>
              <span className="w-2 h-4 bg-emerald-400 animate-[blink_0.8s_infinite] inline-block"></span>
            </div>
          )}

          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Isometric Extruded CTA Button Container */}
      <div className="mt-12 h-20 flex items-center justify-center">
        {showButton && (
          <button
            onClick={enterRoom}
            className="group relative inline-block transition-transform duration-100 ease-out active:translate-y-1"
          >
            {/* 3D Extrusion Shadow/Bottom (Dark Green-Emerald) */}
            <span className="absolute inset-0 translate-y-1.5 rounded-md bg-emerald-800 border-b-4 border-emerald-950 transition-all duration-100 group-hover:translate-y-2 group-active:translate-y-0.5"></span>

            {/* Top Surface (Bright Neon Green-Cyan) */}
            <span className="relative flex items-center gap-3 rounded-md border border-emerald-400 bg-emerald-500 px-8 py-3 text-xs md:text-sm uppercase font-black text-black tracking-[0.2em] shadow-lg shadow-emerald-500/20 transition-all duration-100 group-hover:-translate-y-0.5 group-active:translate-y-1">
              ENTER THE ROOM
              <span className="font-sans font-bold group-hover:translate-x-1.5 transition-transform duration-200">&gt;</span>
            </span>
          </button>
        )}
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .bg-radial-glow {
          background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
        }
      `}</style>
    </div>
  );
}
