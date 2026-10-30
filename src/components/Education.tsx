import React from 'react';
import { educationList } from '../data/education';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'certification':
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'degree':
        return { label: 'Título Universitario', badgeClass: 'bg-amber-950/60 text-amber-300 border-amber-500/30' };
      case 'certification':
        return { label: 'Certificación Profesional', badgeClass: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30' };
      default:
        return { label: 'Capacitación Técnica', badgeClass: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30' };
    }
  };

  return (
    <section id="trayectoria" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>04 // Formación Académica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educación & Certificaciones
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Trayectoria académica universitaria y especializaciones técnicas continuas.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-10 text-left">
          {educationList.map((item) => {
            const { label, badgeClass } = getTypeLabel(item.type);

            return (
              <div key={item.id} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline Node Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                  {getItemIcon(item.type)}
                </div>

                {/* Content Card */}
                <div className={`p-6 rounded-2xl glass-panel border transition-all ${
                  item.type === 'degree'
                    ? 'border-amber-500/30 bg-slate-900/50'
                    : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                      {label}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 mt-1">
                    <span>{item.institution}</span>
                    {item.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/60">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-slate-950 border border-slate-800 text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
