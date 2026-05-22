'use client';

import { usePortfolioStore } from '@/hooks/usePortfolioStore';
import {
  Briefcase,
  ChevronUp,
  Cpu,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Printer,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { portfolioData as multilingualPortfolio } from '../../data/portfolio';

export function CVDossier() {
  const lang = usePortfolioStore((state) => state.lang);
  const portfolioData = multilingualPortfolio[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="cv-section"
      className="relative w-full min-h-screen bg-[#04060c] border-t border-violet-500/20 py-12 md:py-20 px-4 md:px-12 flex flex-col justify-start items-center font-mono select-text z-20 print:bg-white print:text-black print:p-0 print:border-none animate-fade-in"
    >
      {/* Laser line element for cyber aesthetics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent print:hidden" />

      <div className="w-full max-w-5xl flex flex-col gap-8 print:gap-4">
        {/* ========================================================================= */}
        {/* CV HEADER ACTIONS */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-violet-500/25 pb-6 print:hidden">
          <div>
            <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              SECURE_DOSSIER // ACCESS_GRANTED
            </div>
            <h1 className="text-xl md:text-3xl font-black tracking-tight text-white uppercase">
              Curriculum Vitae
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded text-xs tracking-wider text-gray-300 hover:text-white font-bold transition-all cursor-pointer"
            >
              <ChevronUp className="w-4 h-4 text-gray-400" />
              {lang === 'es' ? 'RETORNAR AL 3D' : 'RETURN TO 3D'}
            </Link>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 border border-violet-500/30 hover:border-violet-400 bg-violet-950/40 hover:bg-violet-950 px-4 py-2 rounded text-xs tracking-wider text-violet-400 hover:text-white font-black transition-all cursor-pointer shadow-lg shadow-violet-500/5"
            >
              <Printer className="w-4 h-4" />
              {lang === 'es' ? 'DESCARGAR' : 'DOWNLOAD'}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* REAL CV CARD (PRINT FRIENDLY TARGET) */}
        {/* ========================================================================= */}
        <div className="rounded border border-violet-500/10 bg-[#070a16]/60 p-6 md:p-10 shadow-2xl relative overflow-hidden print:border-none print:bg-white print:p-0 print:shadow-none">
          {/* Scanline background for screen layout */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_98%,rgba(255,255,255,0.01)_2%)] bg-size-[100%_10px] opacity-10 print:hidden" />

          {/* Glowing node circle decoration */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -mr-32 -mt-32 print:hidden" />

          {/* Dossier ID watermark */}
          <div className="absolute top-4 right-6 text-[10px] font-bold text-violet-500/15 tracking-widest print:text-black/30">
            SEC_ID: #JB-2026.05
          </div>

          <div className="flex flex-col gap-8">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-violet-500/15 pb-8 print:border-black/10 print:pb-4">
              <div className="space-y-3">
                <div className="inline-block bg-violet-950/60 border border-violet-500/30 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest text-violet-400 print:bg-black/5 print:border-black/20 print:text-black">
                  PROFILE_CLASSIFIED
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white print:text-black tracking-tight uppercase">
                    {portfolioData.profile.name}
                  </h2>
                  <p className="text-lg font-bold text-violet-400 print:text-black/80 mt-1 uppercase tracking-wide">
                    {portfolioData.profile.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-400 print:text-black/70 font-sans font-bold">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-violet-500/70 print:text-black" />
                    <span>{portfolioData.profile.location} ({portfolioData.profile.mode})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-violet-500/70 print:text-black" />
                    <span className="font-mono">{portfolioData.profile.email}</span>
                  </div>
                </div>
              </div>

              {/* Links box */}
              <div className="flex flex-col gap-2 bg-[#090e21] border border-violet-500/10 p-4 rounded-md w-full md:w-fit shrink-0 font-sans print:border-black/10 print:bg-black/5">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1 print:text-black/60">
                  {lang === 'es' ? 'Canales Directos' : 'Direct Channels'}
                </p>

                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-6 text-xs text-violet-400 hover:text-white font-bold transition-colors print:text-black print:underline"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 print:hidden text-violet-500/60" />
                </a>

                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-6 text-xs text-violet-400 hover:text-white font-bold transition-colors print:text-black print:underline"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 print:hidden text-violet-500/60" />
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h3 className="text-xs text-violet-400 font-bold uppercase tracking-widest flex items-center gap-1.5 print:text-black">
                <Sparkles className="w-3.5 h-3.5 text-violet-500 print:hidden" />
                Extracto Profesional
              </h3>
              <p className="text-xs md:text-sm text-gray-300 print:text-black leading-relaxed font-sans font-medium text-justify">
                {portfolioData.profile.summary}
              </p>
            </div>

            {/* Core Body Columns: Experience & (Skills/Studies) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 pt-2">
              {/* Left col - Experience (8 cols) */}
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xs text-violet-400 font-bold uppercase tracking-widest flex items-center gap-1.5 border-b border-violet-500/15 pb-2 print:text-black print:border-black/20">
                    <Briefcase className="w-4 h-4 text-violet-500 print:hidden" />
                    Cronología de la Experiencia
                  </h3>

                  <div className="space-y-6">
                    {portfolioData.experience.map((exp, index) => (
                      <div key={index} className="relative pl-5 border-l border-violet-500/10 space-y-1.5 print:border-black/20">
                        {/* Bullets decoration */}
                        <div className="absolute top-1.5 -left-1 w-2 h-2 rounded-full bg-violet-500 print:bg-black" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-[13px] md:text-sm font-extrabold text-white print:text-black uppercase">
                            {exp.role} <span className="text-violet-400 print:text-black/70">@ {exp.company}</span>
                          </h4>
                          <span className="text-[10px] text-gray-400 font-extrabold print:text-black/80 bg-violet-950/20 border border-violet-500/10 px-2 py-0.5 rounded-sm print:bg-black/5 print:border-black/10">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-[10px] text-violet-500 font-bold uppercase tracking-wider">
                          Sector: {exp.industry}
                        </p>
                        <p className="text-xs text-gray-400 print:text-black/80 font-sans font-medium leading-relaxed">
                          {exp.description}
                        </p>

                        <ul className="list-none space-y-1 pt-1.5">
                          {exp.highlights.map((hlt, hIdx) => (
                            <li key={hIdx} className="text-[11px] text-gray-300 print:text-black font-sans font-medium flex items-start gap-1.5">
                              <span className="text-violet-500/70 print:text-black select-none mt-0.5">▪</span>
                              <span>{hlt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right col - Skills & Studies (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Technical Skills */}
                <div className="space-y-4">
                  <h3 className="text-xs text-violet-400 font-bold uppercase tracking-widest flex items-center gap-1.5 border-b border-violet-500/15 pb-2 print:text-black print:border-black/20">
                    <Cpu className="w-4 h-4 text-violet-500 print:hidden" />
                    {lang === 'es' ? 'Arsenal Tecnológico' : 'Technical Weapons'}
                  </h3>

                  <div className="space-y-4">
                    {portfolioData.skills.map((skillGroup, index) => (
                      <div key={index} className="space-y-1.5">
                        <h4 className="text-[11px] text-gray-400 font-extrabold uppercase tracking-wide print:text-black">
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {skillGroup.items.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-bold px-2 py-0.5 rounded text-violet-400 bg-violet-950/30 border border-violet-500/20 print:bg-black/5 print:text-black print:border-black/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Studies */}
                <div className="space-y-4">
                  <h3 className="text-xs text-violet-400 font-bold uppercase tracking-widest flex items-center gap-1.5 border-b border-violet-500/15 pb-2 print:text-black print:border-black/20">
                    <GraduationCap className="w-4 h-4 text-violet-500 print:hidden" />
                    Estudios Académicos
                  </h3>

                  <div className="space-y-4">
                    {portfolioData.studies.map((study, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[11px] font-extrabold text-white print:text-black uppercase leading-tight">
                            {study.title}
                          </h4>
                        </div>
                        <p className="text-[10px] text-violet-400 font-extrabold uppercase">
                          {study.institution} ({study.period})
                        </p>
                        <p className="text-[11px] text-gray-400 print:text-black/80 font-sans leading-relaxed">
                          {study.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info inside the dossier */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 rounded border border-white/5 bg-black/40 p-4 text-[10px] text-gray-500 font-bold uppercase print:hidden">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-violet-500/70" />
            <span>Este documento oficial y toda la información contenida en el mismo son válidos para contratación directa.</span>
          </div>
          <span>Actualizado: 2026</span>
        </div>
      </div>
    </section>
  );
}
