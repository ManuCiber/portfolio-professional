import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & APIs (Mayor Dominio)',
    description: 'Mi base técnica más sólida: construcción de microservicios, APIs RESTful, arquitectura por capas y lógica de negocio.',
    skills: [
      { name: 'Node.js', level: 'Dominio sólido', tag: 'Runtime' },
      { name: 'Express', level: 'Dominio sólido', tag: 'Framework' },
      { name: 'NestJS', level: 'Dominio sólido', tag: 'Enterprise' },
      { name: 'Java & Spring Boot', level: 'Dominio sólido', tag: 'Microservicios' },
      { name: 'Spring Cloud (Gateway, Eureka)', level: 'Intermedio', tag: 'Cloud MS' },
      { name: 'TypeScript en Backend', level: 'Dominio sólido', tag: 'Tipado estricto' },
      { name: 'APIs RESTful & Arquitectura en Capas', level: 'Dominio sólido', tag: 'Diseño' },
      { name: 'Autenticación JWT & RBAC', level: 'Dominio sólido', tag: 'Seguridad' },
    ]
  },
  {
    id: 'database',
    title: 'Bases de Datos & Persistencia',
    description: 'Modelado relacional y NoSQL, migraciones de esquema, integridad referencial y diseño de consultas.',
    skills: [
      { name: 'PostgreSQL', level: 'Dominio sólido', tag: 'Relacional / SQL' },
      { name: 'MongoDB & Mongoose', level: 'Dominio sólido', tag: 'NoSQL Documental' },
      { name: 'MySQL', level: 'Intermedio', tag: 'Relacional / SQL' },
      { name: 'MariaDB', level: 'Intermedio', tag: 'Relacional / SQL' },
      { name: 'Flyway', level: 'Intermedio', tag: 'Migraciones SQL' },
      { name: 'Supabase', level: 'Intermedio', tag: 'BaaS & Storage' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend (En Formación & Habilidades Funcionales)',
    description: 'En aprendizaje y desarrollo constante como FullStack, integrando interfaces modernas, responsivas y conectadas a APIs.',
    skills: [
      { name: 'Next.js 15 (App Router)', level: 'Intermedio', tag: 'FullStack Web' },
      { name: 'React', level: 'Intermedio', tag: 'Librería UI' },
      { name: 'TypeScript en Frontend', level: 'Intermedio', tag: 'Tipado estricto' },
      { name: 'Tailwind CSS v4', level: 'Intermedio', tag: 'Estilos modernos' },
      { name: 'HTML5 & CSS3', level: 'Intermedio', tag: 'Estándares web' },
      { name: 'React Hook Form & Zod', level: 'Intermedio', tag: 'Validación' },
      { name: 'Radix UI & Sonner', level: 'Intermedio', tag: 'UI Accesible' },
    ]
  },
  {
    id: 'tools-devops',
    title: 'DevOps, Herramientas & Buenas Prácticas',
    description: 'Control de versiones, containerización, pruebas de endpoints y estándares de código limpio.',
    skills: [
      { name: 'Docker & Docker Compose', level: 'Dominio sólido', tag: 'Contenedores' },
      { name: 'Git & GitHub', level: 'Dominio sólido', tag: 'Control de versiones' },
      { name: 'Postman', level: 'Dominio sólido', tag: 'Testing de APIs' },
      { name: 'Principios SOLID & Clean Code', level: 'Dominio sólido', tag: 'Metodología' },
      { name: 'Inglés A2 (Cambridge)', level: 'Intermedio', tag: 'Lectura técnica y documentación' },
    ]
  }
];
