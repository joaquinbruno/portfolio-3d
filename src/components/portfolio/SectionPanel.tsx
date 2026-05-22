'use client';

import { usePortfolioStore, type SectionId } from '@/hooks/usePortfolioStore';
import {
    Briefcase,
    Cpu,
    FolderGit2,
    GraduationCap,
    Mail,
    MailOpen,
    MapPin,
    Rocket,
    ShieldCheck,
    Sparkles,
    Terminal,
    User,
    X
} from 'lucide-react';
import { portfolioData as multilingualPortfolio } from '../../data/portfolio';

// Custom inline SVG icons for brands because newest lucide-react versions exclude them
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.252-1.305.43-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

type SectionPanelProps = {
  sectionId: Exclude<SectionId, null>;
};

export function SectionPanel({ sectionId }: SectionPanelProps) {
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection);
  const lang = usePortfolioStore((state) => state.lang);
  const portfolioData = multilingualPortfolio[lang];

  // Helper to determine the section icon and accent color
  const getSectionHeader = () => {
    switch (sectionId) {
      case 'about':
        return { title: lang === 'es' ? 'Sobre Mí' : 'About Me', icon: User, accent: 'text-sky-400 border-sky-500/20' };
      case 'skills':
        return { title: lang === 'es' ? 'Skills & Tech' : 'Skills & Tech', icon: Cpu, accent: 'text-emerald-400 border-emerald-500/20' };
      case 'experience':
        return { title: lang === 'es' ? 'Trayectoria' : 'Experience', icon: Briefcase, accent: 'text-amber-400 border-amber-500/20' };
      case 'projects':
        return { title: lang === 'es' ? 'Proyectos' : 'Projects', icon: FolderGit2, accent: 'text-violet-400 border-violet-500/20' };
      case 'studies':
        return { title: lang === 'es' ? 'Estudios & Cursos' : 'Studies & Education', icon: GraduationCap, accent: 'text-pink-400 border-pink-500/20' };
      case 'personals':
        return { title: lang === 'es' ? 'Lab Personal' : 'Personal Lab', icon: Rocket, accent: 'text-cyan-400 border-cyan-500/20' };
      case 'contact':
        return { title: lang === 'es' ? 'Enlace de Red' : 'Network Link', icon: Mail, accent: 'text-orange-400 border-orange-500/20' };
      default:
        return { title: 'Información', icon: Terminal, accent: 'text-emerald-400 border-emerald-500/20' };
    }
  };

  const headerInfo = getSectionHeader();
  const IconComponent = headerInfo.icon;

  return (
    <aside className="pointer-events-auto fixed bottom-3 right-3 z-30 max-h-[75vh] w-[calc(100%-1.5rem)] overflow-y-auto rounded border border-emerald-500/20 bg-[#070913]/95 p-4 shadow-2xl backdrop-blur-lg md:bottom-6 md:right-6 md:top-20 md:max-h-[calc(100vh-7rem)] md:w-115 flex flex-col scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">

      {/* Header Panel */}
      <div className="flex items-center justify-between border-b border-emerald-500/15 pb-3 mb-4">
        <h2 className={`text-base md:text-lg font-black tracking-wider uppercase flex items-center gap-2.5 ${headerInfo.accent.split(' ')[0]}`}>
          <IconComponent className="w-5 h-5" />
          {headerInfo.title}
        </h2>

        <button
          type="button"
          onClick={() => setActiveSection(null)}
          className="rounded border border-emerald-500/20 hover:border-emerald-400/40 p-1 bg-emerald-950/20 text-emerald-400 hover:text-white transition-colors duration-150 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-4 text-xs md:text-sm text-gray-300 font-mono leading-relaxed">

        {/* ABOUT SECTION */}
        {sectionId === 'about' && (
          <div className="space-y-4">
            <div className="rounded border border-emerald-500/10 bg-emerald-950/10 p-3 space-y-2">
              <h3 className="font-bold text-sm text-white">{portfolioData.profile.name}</h3>
              <p className="text-[11px] text-emerald-400 font-bold">{portfolioData.profile.role}</p>

              <div className="flex flex-col gap-1 text-[11px] text-gray-400 pt-1.5 border-t border-emerald-500/10">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span>{portfolioData.profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500/60" />
                  <span>Modalidad: {portfolioData.profile.mode}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{portfolioData.about.text}</p>

            <div className="border-t border-emerald-500/10 pt-3">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                {lang === 'es' ? 'Resumen del perfil' : 'Profile Summary'}
              </span>
              <p className="text-[11px] text-gray-400 leading-normal">{portfolioData.profile.summary}</p>
            </div>
          </div>
        )}

        {/* SKILLS SECTION */}
        {sectionId === 'skills' && (
          <div className="space-y-5">
            <p className="text-gray-400 font-sans">
              {lang === 'es'
                ? 'Stack tecnológico y herramientas clave de ingeniería:'
                : 'Tech stack and key engineering tools:'}
            </p>

            {portfolioData.skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-emerald-500/15 pl-3">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-black/60 border border-white/5 px-2 py-1 text-[11px] hover:border-emerald-500/30 text-gray-100 uppercase tracking-wide font-sans font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCE SECTION */}
        {sectionId === 'experience' && (
          <div className="space-y-5">
            {[...portfolioData.experience].slice().reverse().map((exp, idx) => (
              <div key={idx} className="relative border-l border-emerald-500/20 pl-4 space-y-2">
                <div className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-emerald-500 border border-black animate-pulse"></div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-start justify-between flex-wrap gap-1.5">
                    <h4 className="font-extrabold text-white text-sm tracking-wide leading-tight font-mono">
                      {exp.role}
                    </h4>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase">
                    <span className="text-yellow-400">{exp.company}</span>
                    <span>·</span>
                    <span className="text-gray-500">{exp.industry}</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-300 leading-relaxed font-sans">{exp.description}</p>

                <ul className="space-y-1 pt-1 pl-1">
                  {exp.highlights.map((hlt, hIdx) => (
                    <li key={hIdx} className="flex gap-1.5 text-[10px] text-gray-400 leading-normal">
                      <span className="text-emerald-500 font-extrabold select-none">›</span>
                      <span>{hlt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS SECTION */}
        {sectionId === 'projects' && (
          <div className="space-y-4">
            {portfolioData.projects.map((proj, idx) => (
              <div
                key={idx}
                className="rounded border border-emerald-500/10 bg-emerald-950/5 p-3 hover:border-emerald-500/30 transition-all duration-200 space-y-2.5"
              >
                <div>
                  <span className="text-[9px] font-bold text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded bg-purple-950/20 uppercase tracking-widest">
                    {proj.type}
                  </span>
                  <h3 className="font-bold text-white text-sm mt-1.5 leading-snug font-mono flex items-center gap-2">
                    {proj.title}
                    {proj.title.toLowerCase().includes('cortenvio') && (
                      <a
                        href="https://cortenvio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-emerald-400 underline text-xs hover:text-emerald-300 transition-colors"
                      >
                        cortenvio.com
                      </a>
                    )}
                  </h3>
                </div>

                <p className="text-[11px] text-gray-300 font-sans leading-normal">{proj.description}</p>

                <div className="space-y-1.5 border-t border-emerald-500/5 pt-2">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">
                    {lang === 'es' ? 'Metas conseguidas:' : 'Key Milestones:'}
                  </span>
                  <ul className="space-y-1">
                    {proj.highlights.map((hlt, hIdx) => (
                      <li key={hIdx} className="flex gap-1.5 text-[10px] text-gray-400 leading-tight">
                        <span className="text-emerald-500 font-black">»</span>
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 pt-1 border-t border-emerald-500/5">
                  {proj.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#11172A] border border-violet-500/10 px-1.5 py-0.5 text-[9px] font-bold text-violet-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STUDIES SECTION */}
        {sectionId === 'studies' && (
          <div className="space-y-4">
            {portfolioData.courses.map((course, idx) => (
              <div key={idx} className="rounded border border-emerald-500/10 bg-[#0E1326] p-3 space-y-2">
                <div className="flex items-start justify-between flex-wrap gap-1">
                  <h3 className="font-bold text-white text-xs md:text-sm leading-tight font-mono">{course.title}</h3>
                  <span className="text-[10px] font-bold text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded border border-pink-500/20">
                    {course.category}
                  </span>
                </div>
                <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-wide">{course.instructor}</p>
                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-emerald-500/5">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="rounded bg-[#11172A] border border-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PERSONAL PROJECTS SECTION */}
        {sectionId === 'personals' && (
          <div className="space-y-4">
            {/* {portfolioData.personals.map((pProj, idx) => (
              <div key={idx} className="rounded border border-emerald-500/15 bg-emerald-950/5 p-3 space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-1.5 border-b border-emerald-500/10 pb-2">
                  <div>
                    <h3 className="font-bold text-white text-sm leading-snug font-mono">{pProj.title}</h3>
                    <p className="text-[10px] text-cyan-400 font-bold uppercase mt-0.5">{pProj.type}</p>
                  </div>
                  <span className="text-[9px] font-black text-amber-400 border border-amber-500/40 px-1.5 py-0.5 bg-amber-950/40 rounded uppercase tracking-wider animate-pulse">
                    {pProj.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] text-gray-300 font-sans leading-relaxed">{pProj.description}</p>
                  <p className="text-[10px] text-emerald-400 italic bg-emerald-950/20 p-2 rounded border border-emerald-500/10">
                    {lang === 'es' ? 'Propósito' : 'Purpose'}: {pProj.purpose}
                  </p>
                </div>

                <div className="space-y-1 pt-1.5">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
                    {lang === 'es' ? 'Características Clave:' : 'Key Features:'}
                  </span>
                  <ul className="space-y-1">
                    {pProj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-1.5 text-[10px] text-gray-400 leading-normal">
                        <span className="text-cyan-500 font-black">›</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-emerald-500/5">
                  {pProj.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#11172A] border border-cyan-500/10 px-1.5 py-0.5 text-[9px] font-bold text-cyan-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))} */}
               <p className="text-[10px] text-cyan-400 font-bold uppercase mt-0.5">{lang === 'es' ? 'PROXIMAMENTE' : 'SOON'}</p>
          </div>
        )}

        {/* CONTACT SECTION */}
        {sectionId === 'contact' && (
          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed font-sans">
              {lang === 'es'
                ? '¿Tienes un desafío técnico, una plataforma / SaaS que estructurar, integraciones API o pasarelas de pago complejas que resolver? ¡Entremos en contacto!'
                : 'Do you have a technical challenge, a platform / SaaS to structure, API integrations or complex payment gateways to solve? Let\'s get in touch!'}
            </p>

            <div className="rounded border border-emerald-500/15 bg-[#090D1C] p-3 space-y-3">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1 border-b border-emerald-500/10 pb-1.5">
                {lang === 'es' ? 'Canales de Enlace Directos' : 'Direct Link Channels'}
              </span>

              <div className="flex flex-col gap-2.5">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="flex items-center justify-between rounded border border-orange-500/20 bg-orange-950/20 px-3 py-2 text-orange-400 hover:bg-orange-500/10 transition-all duration-150 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MailOpen className="w-4 h-4" />
                    <span className="font-bold text-xs">EMAIL</span>
                  </div>
                  <span className="text-[11px] font-sans text-gray-400 lowercase">{portfolioData.profile.email}</span>
                </a>

                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded border border-emerald-500/20 bg-emerald-950/25 px-3 py-2 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-150 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="font-bold text-xs">LINKEDIN</span>
                  </div>
                  <span className="text-[11px] font-sans text-gray-500 truncate max-w-50">joaquín-bruno</span>
                </a>

                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded border border-emerald-500/20 bg-emerald-950/25 px-3 py-2 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-150 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span className="font-bold text-xs">GITHUB</span>
                  </div>
                  <span className="text-[11px] font-sans text-gray-400">{portfolioData.profile.github.split('/').pop()}</span>
                </a>
              </div>
            </div>

            <div className="rounded border border-emerald-500/5 bg-[#070913]/60 p-3 flex gap-2 items-start text-[10px] text-gray-500 uppercase font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-500/60 shrink-0 mt-0.5" />
              <span>
                {lang === 'es'
                  ? 'Transmisión segura cifrada SSL de extremo a extremo activa.'
                  : 'Active end-to-end SSL encrypted secure transmission.'}
              </span>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
