import type { EducationItem } from '../types';

export const educationList: EducationItem[] = [
  {
    id: 'uasd-grado',
    institution: 'Universidad Autónoma de Santo Domingo (UASD)',
    title: 'Licenciatura en Informática',
    period: 'Enero 2018 – Diciembre 2024',
    location: 'Santo Domingo, República Dominicana',
    description: 'Formación universitaria completa con base rigurosa en estructuras de datos, algoritmia, ingeniería de software, arquitectura de sistemas y diseño de bases de datos.',
    type: 'degree',
    skills: ['Estructuras de Datos', 'Algoritmia', 'Bases de Datos', 'Ingeniería de Software']
  },
  {
    id: 'talent-digital',
    institution: 'Talent Digital',
    title: 'Desarrollador Web FullStack',
    period: 'Certificación Profesional',
    location: 'República Dominicana',
    description: 'Especialización intensiva en desarrollo de aplicaciones web de extremo a extremo, integración de APIs y ecosistemas modernos con JavaScript/TypeScript.',
    type: 'certification',
    skills: ['Desarrollo FullStack', 'APIs REST', 'JavaScript Moderno', 'Componentes UI']
  },
  {
    id: 'cisco-networking',
    institution: 'CISCO Networking Academy',
    title: 'Networking Essentials',
    period: 'Certificación Técnica',
    description: 'Fundamentos sólidos de redes computacionales, direccionamiento IP, protocolos de transporte (TCP/UDP, HTTP/HTTPS) y seguridad en comunicaciones.',
    type: 'certification',
    skills: ['Fundamentos de Redes', 'Protocolos TCP/IP', 'Arquitectura de Red']
  },
  {
    id: 'infotep-web',
    institution: 'INFOTEP',
    title: 'Diseño de Páginas Web',
    period: 'Certificación Técnica',
    description: 'Capacitación técnica en estándares web, estructuración HTML semántico, estilos CSS y diseño web responsivo.',
    type: 'course',
    skills: ['HTML5 Semántico', 'CSS3 Responsivo', 'Diseño Web']
  },
  {
    id: 'los-angeles-institute',
    institution: 'Los Angeles Institute',
    title: 'English as a Foreign Language',
    period: 'Formación en Idiomas',
    description: 'Desarrollo de competencias lingüísticas en inglés para el entorno técnico profesional (Nivel A2 certificado mediante prueba de nivelación Cambridge).',
    type: 'course',
    skills: ['Inglés Técnico', 'Lectura de Documentación', 'Terminología IT']
  }
];
