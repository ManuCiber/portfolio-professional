import React from 'react';
import { ArrowRight, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo } from '../data/personalInfo';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-pattern">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy (7 cols on lg) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability Pill & Location */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>{personalInfo.statusText}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-wide">
                Hola, mi nombre es
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {personalInfo.role}
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.headline} Graduado de <strong className="text-white font-medium">Licenciatura en Informática en la UASD</strong> con experiencia demostrable construyendo microservicios en Java/Spring Boot, APIs en Node.js y aplicaciones web modulares con Next.js 15 y React.
            </p>

            {/* Quick Tech Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Java / Spring Boot',
                'Microservicios',
                'Node.js & NestJS',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'Next.js 15',
                'React & TS'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md border bg-slate-900 border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contactar</span>
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  aria-label="Perfil de GitHub (ManuCiber)"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  aria-label="Perfil de LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Code/Architecture Feature Preview (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-6 border border-slate-800 shadow-2xl shadow-black/40 overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400">carlos-fullstack-dev.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>zsh</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-left">
                <p className="text-slate-500">// Perfil de Software & Enfoque Técnico</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-yellow-300">developerProfile</span> = &#123;
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.shortName}'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">degree:</span>{' '}
                    <span className="text-emerald-300">'Lic. en Informática (UASD)'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">coreStrength:</span>{' '}
                    <span className="text-cyan-300">'Backend & Microservicios (Dominio principal)'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">backendStack:</span> [
                    <span className="text-teal-300">'Java Spring Boot'</span>,{' '}
                    <span className="text-teal-300">'Node.js / NestJS'</span>,{' '}
                    <span className="text-teal-300">'PostgreSQL'</span>],
                  </p>
                  <p>
                    <span className="text-slate-400">frontendPath:</span> [
                    <span className="text-yellow-300">'Next.js 15'</span>,{' '}
                    <span className="text-yellow-300">'React'</span>,{' '}
                    <span className="text-yellow-300">'Tailwind CSS'</span>],
                  </p>
                  <p>
                    <span className="text-slate-400">goal:</span>{' '}
                    <span className="text-cyan-400">'FullStack Developer con fuerte base en arquitectura'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400">'Ready for Challenges'</span>
                  </p>
                </div>
                <p>&#125;;</p>
              </div>

              {/* Verified Points Footer in Card */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  GitHub: @ManuCiber
                </span>
                <span className="text-slate-500 font-mono">2018 - 2024 UASD</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
