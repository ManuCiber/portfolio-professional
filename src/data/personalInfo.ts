import type { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Carlos Manuel Tolentino Henriquez',
  shortName: 'Carlos Tolentino',
  role: 'Desarrollador FullStack en formación | Especialidad Backend & APIs',
  headline: 'En proceso de formación FullStack, con un dominio principal y sólido en Backend, APIs REST y bases de datos, integrando interfaces web funcionales con React y Next.js.',
  location: 'Santo Domingo, República Dominicana',
  email: 'carlosgameloft22@gmail.com',
  phone: '+1 (829) 401-9822',
  linkedin: 'https://www.linkedin.com/in/carlos-tolentino',
  github: 'https://github.com/ManuCiber',
  statusText: 'Disponible para oportunidades laborales',
  bioParagraphs: [
    'Soy Licenciado en Informática graduado de la Universidad Autónoma de Santo Domingo (UASD). Cuento con 1 año de experiencia práctica demostrable en la construcción de APIs REST y lógica de negocio para aplicaciones web.',
    'Actualmente me encuentro en formación continua para consolidarme como Desarrollador FullStack. Mi base más fuerte y dominio principal reside en el Backend: arquitectura por capas (Controllers, Services, Repositories, Middlewares), microservicios, seguridad con JWT/RBAC, y persistencia de datos relacional y NoSQL.',
    'En el Frontend, cuento con habilidades funcionales y en constante crecimiento para maquetar interfaces modernas, manejar estado y conectar de manera fluida y reactiva los servicios backend utilizando Next.js 15, React, TypeScript y Tailwind CSS.'
  ],
  stats: [
    {
      label: 'Perfil',
      value: 'FullStack',
      sublabel: 'En formación continua'
    },
    {
      label: 'Fuerte Principal',
      value: 'Backend',
      sublabel: 'APIs, Microservicios & SQL'
    },
    {
      label: 'Formación',
      value: 'UASD',
      sublabel: 'Lic. en Informática'
    },
    {
      label: 'Experiencia',
      value: '1+ Año',
      sublabel: 'Práctica Demostrable'
    }
  ]
};
