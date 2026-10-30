import type { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Carlos Manuel Tolentino Henriquez',
  shortName: 'Carlos Tolentino',
  role: 'Desarrollador Backend | APIs REST & Lógica de Negocio',
  headline: 'Especializado en la creación de APIs REST robustas, arquitectura por capas y bases de datos, con habilidades básicas de frontend para integración de interfaces.',
  location: 'Santo Domingo, República Dominicana',
  email: 'carlosgameloft22@gmail.com',
  phone: '+1 (829) 401-9822',
  linkedin: 'https://linkedin.com/in/carlos-tolentino',
  github: 'https://github.com/CarlosTolentino',
  statusText: 'Disponible para oportunidades laborales en Backend',
  bioParagraphs: [
    'Soy Licenciado en Informática egresado de la Universidad Autónoma de Santo Domingo (UASD), con 1 año de experiencia práctica demostrable en la construcción de APIs REST y lógica de negocio para aplicaciones web.',
    'Mi especialidad y enfoque principal es el desarrollo Backend: diseño de arquitectura por capas (Controllers, Services, Repositories, Middlewares), patrones de diseño limpios, autenticación con JWT y control de acceso por roles (RBAC) con Node.js (Express, NestJS) y TypeScript.',
    'En el área de persistencia, cuento con experiencia sólida modelando bases de datos relacionales (PostgreSQL, MySQL, MariaDB) y documentales (MongoDB con Mongoose). En el Frontend cuento con habilidades básicas para la maquetación esencial y el consumo fluido de servicios con React, Next.js y Tailwind CSS.'
  ],
  stats: [
    {
      label: 'Especialidad',
      value: 'Backend',
      sublabel: 'APIs & Lógica de Negocio'
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
    },
    {
      label: 'Persistencia',
      value: 'SQL / NoSQL',
      sublabel: 'PostgreSQL & MongoDB'
    }
  ]
};
