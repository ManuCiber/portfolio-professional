import React from 'react';
import { skillGroups } from '../data/skills';
import { Server, Layout, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Dominio sólido':
        return 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30';
      case 'Intermedio':
        return 'bg-cyan-950/50 text-cyan-300 border-cyan-500/30';
      case 'Básico / Fundamentos':
        return 'bg-blue-950/40 text-blue-300 border-blue-500/30';
      case 'En aprendizaje activo':
        return 'bg-amber-950/50 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="habilidades" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>02 // Stack Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Habilidades & Tecnologías
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Perfil técnico con fuerte especialización en Backend y persistencia de datos, complementado con habilidades básicas de Frontend para la integración de interfaces.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono text-slate-400">
          <span className="text-slate-500">Nivel de competencia:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Dominio sólido (Backend/DB)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Intermedio
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/40 text-blue-300 border border-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Básico / Fundamentos (Frontend)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/50 text-amber-300 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            En aprendizaje activo
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className={`p-6 rounded-2xl glass-panel border flex flex-col justify-between text-left ${
                group.id === 'backend'
                  ? 'border-cyan-500/40 bg-slate-900/60 shadow-lg shadow-cyan-950/30'
                  : 'border-slate-800/80'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {getGroupIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-5">
                  {group.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group/item relative px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {skill.tag}
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level === 'Dominio sólido'
                          ? 'Sólido'
                          : skill.level === 'Intermedio'
                          ? 'Intermedio'
                          : skill.level === 'Básico / Fundamentos'
                          ? 'Básico'
                          : 'Aprendiendo'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning highlight banner */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-slate-950 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 shrink-0">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Ruta de Expansión Técnica Activa: Java & Spring Boot
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Profundizando en arquitectura de microservicios, Spring Security y persistencia distribuida con PostgreSQL y Docker.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-md border border-cyan-500/30">
            Roadmap 2026
          </span>
        </div>

      </div>
    </section>
  );
};
