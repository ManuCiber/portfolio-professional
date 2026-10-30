import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & APIs (Especialidad Principal)',
    description: 'Mi área técnica más sólida: construcción de servicios web estructurados, lógica de negocio y arquitectura en capas.',
    skills: [
      { name: 'Node.js', level: 'Dominio sólido', tag: 'Runtime' },
      { name: 'Express', level: 'Dominio sólido', tag: 'Framework' },
      { name: 'TypeScript en Backend', level: 'Dominio sólido', tag: 'Tipado estricto' },
      { name: 'APIs RESTful', level: 'Dominio sólido', tag: 'Arquitectura' },
      { name: 'Arquitectura en Capas', level: 'Dominio sólido', tag: 'Patrón de Diseño' },
      { name: 'Autenticación JWT & RBAC', level: 'Dominio sólido', tag: 'Seguridad' },
      { name: 'NestJS', level: 'Intermedio', tag: 'Enterprise' },
      { name: 'Java & Spring Boot', level: 'En aprendizaje activo', tag: 'Ecosistema JVM' },
    ]
  },
  {
    id: 'database',
    title: 'Bases de Datos & Persistencia',
    description: 'Modelado relacional y NoSQL, integridad referencial, transacciones y diseño de consultas.',
    skills: [
      { name: 'PostgreSQL', level: 'Dominio sólido', tag: 'Relacional / SQL' },
      { name: 'MongoDB & Mongoose', level: 'Dominio sólido', tag: 'NoSQL Documental' },
      { name: 'MySQL', level: 'Intermedio', tag: 'Relacional / SQL' },
      { name: 'MariaDB', level: 'Intermedio', tag: 'Relacional / SQL' },
      { name: 'Supabase', level: 'Intermedio', tag: 'BaaS & Storage' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend (Habilidades Básicas & Integración)',
    description: 'Nivel básico orientado al consumo de APIs, estructuración de interfaces esenciales y conexión con servicios backend.',
    skills: [
      { name: 'React', level: 'Básico / Fundamentos', tag: 'Componentes y consumo' },
      { name: 'Next.js (App Router)', level: 'Básico / Fundamentos', tag: 'Estructura web' },
      { name: 'HTML5 & CSS3', level: 'Básico / Fundamentos', tag: 'Maquetación básica' },
      { name: 'Tailwind CSS', level: 'Básico / Fundamentos', tag: 'Estilos utilitarios' },
      { name: 'React Hook Form & Zod', level: 'Básico / Fundamentos', tag: 'Formularios' },
      { name: 'Consumo de REST APIs', level: 'Intermedio', tag: 'Fetch / Axios' },
    ]
  },
  {
    id: 'tools-devops',
    title: 'Herramientas, DevOps & Buenas Prácticas',
    description: 'Flujo de trabajo colaborativo, control de versiones y estándares de calidad de software.',
    skills: [
      { name: 'Git & GitHub', level: 'Dominio sólido', tag: 'Control de versiones' },
      { name: 'Postman', level: 'Dominio sólido', tag: 'Testing y docs de APIs' },
      { name: 'Principios SOLID & Clean Code', level: 'Dominio sólido', tag: 'Metodología' },
      { name: 'Docker', level: 'En aprendizaje activo', tag: 'Contenedores' },
      { name: 'Inglés Técnico A2', level: 'Intermedio', tag: 'Lectura técnica' },
    ]
  }
];
