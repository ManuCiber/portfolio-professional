import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'muestras-medicas',
    title: 'Sistema de Gestión de Muestras Médicas',
    role: 'Desarrollador FullStack',
    category: 'fullstack',
    summary: 'Aplicación web fullstack para la trazabilidad de inventario clínico, visitadores médicos y constancias de entrega con demo en vivo desplegado.',
    description: 'Plataforma web desarrollada con Next.js 15 (App Router) y TypeScript para digitalizar y auditar el flujo de entrega de muestras médicas a profesionales de la salud. Integra control estricto de inventario, alertas de stock mínimo y emisión de constancias.',
    highlights: [
      'Desarrollo de aplicación web utilizando Next.js 15 (App Router), React, TypeScript y Tailwind CSS v4.',
      'Implementación de una arquitectura modular basada en componentes reutilizables y tipado estricto con TypeScript.',
      'Desarrollo de módulos para gestión de inventario, control de visitadores médicos, registro de entregas e historial de movimientos.',
      'Implementación de formularios con React Hook Form y validación de esquemas mediante Zod.',
      'Integración de Radix UI, Lucide React y Sonner para una interfaz moderna, accesible y responsiva.',
      'Implementación de lógica de negocio para actualización automática de inventario, alertas de stock bajo y generación de constancias de entrega.',
      'Proyecto preparado para integrar PostgreSQL, Supabase, autenticación y generación de reportes.'
    ],
    technologies: [
      'Next.js 15 (App Router)',
      'React',
      'TypeScript',
      'Tailwind CSS v4',
      'Radix UI',
      'React Hook Form',
      'Zod',
      'Sonner',
      'PostgreSQL / Supabase'
    ],
    status: 'completed',
    statusLabel: 'Proyecto Concluido / Demo en Vivo',
    repoUrl: 'https://github.com/ManuCiber/Muestras--App',
    demoUrl: 'https://muestras-app.vercel.app',
    isFeatured: true
  },
  {
    id: 'cooperativa-ms',
    title: 'Cooperativa-MS (Arquitectura de Microservicios)',
    role: 'Desarrollador Backend Java',
    category: 'backend',
    summary: 'Plataforma empresarial de gestión cooperativa distribuida en microservicios independientes con Java, Spring Boot, Spring Cloud y Docker.',
    description: 'Ecosistema distribuido y escalable diseñado para el sector financiero cooperativo con microservicios independientes, orquestación centralizada, gateway y bases de datos aisladas por servicio.',
    highlights: [
      'Desarrollo de una plataforma de gestión cooperativa basada en arquitectura de microservicios con Java y Spring Boot.',
      'Implementación de servicios REST independientes: socios, directivas, cuentas, aportaciones, transacciones, ahorros programados, préstamos, garantías, pagos y usuarios.',
      'Descubrimiento y registro de servicios dinámico con Netflix Eureka y configuración centralizada con Spring Cloud Config.',
      'Enrutamiento inteligente, filtros de seguridad y API Gateway con Spring Cloud Gateway.',
      'Diseño de persistencia con PostgreSQL (bases de datos independientes por microservicio) y migraciones de esquema con Flyway.',
      'Uso de MongoDB para el almacenamiento de configuraciones funcionales.',
      'Módulo compartido (common-web) para estandarización de respuestas y manejo global de excepciones.',
      'Containerización completa de todos los servicios y bases de datos mediante Docker y Docker Compose.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud Gateway',
      'Netflix Eureka',
      'PostgreSQL',
      'Flyway',
      'MongoDB',
      'Docker & Docker Compose'
    ],
    status: 'completed',
    statusLabel: 'Microservicios Funcionales Concluidos',
    repoUrl: 'https://github.com/ManuCiber/Cooperativa-MS',
    demoUrl: '',
    isFeatured: true
  },
  {
    id: 'api-usuarios-blog',
    title: 'Sistema de Gestión de Usuarios y Blog (API REST)',
    role: 'Desarrollador Backend',
    category: 'backend',
    summary: 'API REST estructurada en 4 capas limpias con autenticación JWT, control de acceso basado en roles (RBAC) y modelado en MongoDB.',
    description: 'Servicio backend enfocado en la robustez, seguridad y separación de responsabilidades para aplicaciones de contenido colaborativo. Implementa un patrón de capas desacopladas con control granular de permisos.',
    highlights: [
      'Desarrollo de una API REST con Node.js, Express, TypeScript y MongoDB.',
      'Implementación de autenticación con JWT y autorización basada en roles (RBAC).',
      'Desarrollo de operaciones CRUD completas para usuarios, roles y publicaciones de blog.',
      'Uso de Mongoose para el modelado de datos y persistencia en MongoDB.',
      'Implementación de una arquitectura en capas (Controllers, Services, Repositories y Middlewares) con separación de responsabilidades.'
    ],
    technologies: [
      'Node.js',
      'Express',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'JWT',
      'RBAC'
    ],
    status: 'completed',
    statusLabel: 'API REST Funcional Concluida',
    repoUrl: 'https://github.com/ManuCiber/Servicies-Usuarios-API',
    demoUrl: '',
    isFeatured: true
  },
  {
    id: 'sistema-facturacion',
    title: 'Sistema de Facturación',
    role: 'Desarrollador de Software',
    category: 'in-progress',
    summary: 'Módulo de cálculo fiscal, control de facturación, comprobantes comerciales y registro de ventas.',
    description: 'Solución enfocada en automatizar la generación de facturas comerciales, seguimiento de cobros y emisión de reportes con integridad transaccional.',
    highlights: [
      'Estructura de proyecto para administración y emisión de facturación.',
      'Lógica para cálculo de montos, impuestos y registros comerciales.',
      'Integración con repositorio oficial en GitHub.'
    ],
    technologies: [
      'JavaScript',
      'Node.js',
      'REST API',
      'PostgreSQL'
    ],
    status: 'in-progress',
    statusLabel: 'En Desarrollo / Repositorio Activo',
    repoUrl: 'https://github.com/ManuCiber/Sistema-Facturacion',
    demoUrl: '',
    isFeatured: false
  }
];
