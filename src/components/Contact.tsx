import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mail, Phone, MapPin, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar correo:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Por favor completa todos los campos requeridos.');
      return;
    }
    
    // Construct mailto URL as clean static fallback
    const mailtoSubject = encodeURIComponent(formState.subject || `Contacto desde Portfolio: ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Hola Carlos,\n\nMi nombre es: ${formState.name}\nCorreo de contacto: ${formState.email}\n\nMensaje:\n${formState.message}`
    );
    
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setError('');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>05 // Iniciar Conversación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contacto & Oportunidades
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            ¿Tienes una vacante de desarrollador de software, proyecto o propuesta técnica? Me encuentro disponible para nuevos desafíos.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/60">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer relative"
                  title="Copiar correo al portapapeles"
                  aria-label="Copiar correo al portapapeles"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied && (
                    <span className="absolute -top-8 right-0 px-2 py-1 bg-emerald-500 text-slate-950 text-[10px] font-bold rounded shadow-lg">
                      ¡Copiado!
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-slate-800 block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    LinkedIn Profesional
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400">
                    linkedin.com/in/carlos-tolentino
                  </span>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-slate-800 block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    GitHub
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    github.com/CarlosTolentino
                  </span>
                </div>
              </div>
            </a>

            {/* Phone & Location info */}
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 text-left">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Envíame un mensaje directo
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Completa el formulario y se abrirá tu gestor de correo preconfigurado para enviarme la propuesta.
              </p>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>¡Listo! Tu cliente de correo se ha preparado para enviar el mensaje.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Ej. Oportunidad laboral / Proyecto backend"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe los detalles de la posición o propuesta..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
