import React from 'react';
import { Layers, Server, Database, GraduationCap, CheckCircle, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Backend & Lógica de Negocio (Especialidad)',
      description: 'Construcción de APIs REST robustas con Node.js, Express y NestJS, implementando flujos de autenticación JWT y roles RBAC.'
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: 'Arquitectura por Capas',
      description: 'Separación estricta de responsabilidades entre Controllers, Services, Repositories y Middlewares para un código mantenible y limpio.'
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: 'Persistencia Relacional y NoSQL',
      description: 'Diseño e integración de esquemas relacionales con PostgreSQL, MySQL y MariaDB, así como colecciones NoSQL con MongoDB y Mongoose.'
    },
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: 'Integración Frontend Básica',
      description: 'Habilidades fundamentales en React, Next.js y Tailwind CSS orientadas al consumo de endpoints, maquetación esencial e integración de vistas.'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      title: 'Base Académica UASD',
      description: 'Formación de grado universitario (2018–2024) que respalda una sólida comprensión de algoritmos, estructuras de datos y teoría computacional.'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>01 // Perfil Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Mí
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Desarrollador de software enfocado en el backend, con vocación por la claridad arquitectónica, el código bien tipado y la persistencia de datos.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Biography text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base text-left">
            {personalInfo.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}

            {/* Core Values checklist */}
            <div className="pt-2">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">
                Principios y Metodología de Trabajo:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Arquitectura desacoplada en capas',
                  'Tipado estricto con TypeScript',
                  'Validación exhaustiva de payloads (Zod)',
                  'Manejo centralizado de excepciones',
                  'Control de versiones limpio con Git',
                  'Frontend básico enfocado en consumo de APIs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl glass-panel glass-panel-hover border border-slate-800/80 text-left transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
