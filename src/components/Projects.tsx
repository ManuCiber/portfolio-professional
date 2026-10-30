import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project, ProjectCategory } from '../types';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [expandedId, setExpandedId] = useState<string | null>('api-usuarios-blog');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusBadge = (status: Project['status'], label: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {label}
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-amber-950/60 text-amber-300 border border-amber-500/30">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            {label}
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-400 border border-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {label}
          </span>
        );
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>03 // Portafolio de Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Sistemas reales con enfoque en lógica de negocio, arquitectura por capas y bases de datos, con estado técnico transparente.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Filtro de proyectos">
          {[
            { id: 'all', label: 'Todos los proyectos' },
            { id: 'backend', label: 'APIs & Backend (Especialidad)' },
            { id: 'fullstack', label: 'Integración Web (Next.js / React)' },
            { id: 'in-progress', label: 'En Desarrollo / Roadmap' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
              role="tab"
              aria-selected={activeFilter === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className={`rounded-2xl glass-panel border transition-all duration-200 flex flex-col justify-between overflow-hidden text-left ${
                  project.isFeatured
                    ? 'border-cyan-500/30 hover:border-cyan-400/50 bg-slate-900/60'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900/40'
                }`}
              >
                {/* Card Header Top */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/20">
                      {project.role}
                    </span>
                    {getStatusBadge(project.status, project.statusLabel)}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights Accordion Toggle */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer py-1"
                      aria-expanded={isExpanded}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isExpanded ? 'Ocultar arquitectura & módulos' : 'Ver arquitectura & módulos clave'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Collapsible Content */}
                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2.5 text-xs text-slate-300 animate-in fade-in-50 duration-200">
                        <p className="text-slate-400 text-xs italic pb-1">
                          {project.description}
                        </p>
                        <ul className="space-y-1.5 list-none">
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 shrink-0 font-bold">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-xs font-medium transition-all"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-300" />
                        <span>Ver Repositorio</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono italic">
                        Repositorio privado / Próximamente
                      </span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 text-xs font-medium transition-all"
                      >
                        <span>Demo en Vivo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      project.status === 'completed' && (
                        <span className="text-[11px] font-mono text-slate-500">
                          (Demo local disponible)
                        </span>
                      )
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 ml-auto">
                    ID: {project.id}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Note on Data Extensibility */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          <span>💡 Estructura de proyectos desacoplada en </span>
          <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
            src/data/projects.ts
          </code>
          <span> para fácil adición y actualización de repositorios y demos.</span>
        </div>

      </div>
    </section>
  );
};
