import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'api-usuarios-blog',
    title: 'Sistema de Gestión de Usuarios y Blog (API REST)',
    role: 'Desarrollador Backend (Especialidad)',
    category: 'backend',
    summary: 'API REST estructurada en capas limpias con autenticación JWT, control de acceso basado en roles (RBAC) y modelado en MongoDB.',
    description: 'Servicio backend enfocado en la robustez, seguridad y separación de responsabilidades para aplicaciones de contenido colaborativo. Implementa un patrón de capas desacopladas con control granular de permisos.',
    highlights: [
      'Arquitectura en 4 capas: Controllers, Services, Repositories y Middlewares con separación estricta de responsabilidades.',
      'Autenticación sin estado mediante JSON Web Tokens (JWT) y autorización basada en roles (RBAC).',
      'Operaciones CRUD completas para gestión de usuarios, asignación de roles y artículos.',
      'Modelado de esquemas y validación de datos en MongoDB utilizando Mongoose.',
      'Middlewares personalizados para captura unificada de excepciones y validación de peticiones.'
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
    repoUrl: 'https://github.com/CarlosTolentino', // [EDITABLE: Reemplazar con enlace directo al repositorio]
    demoUrl: '', // [EDITABLE: Documentación Swagger / Postman si aplica]
    isFeatured: true
  },
  {
    id: 'muestras-medicas',
    title: 'Sistema de Gestión de Muestras Médicas',
    role: 'Desarrollador Web (Lógica & Integración Frontend)',
    category: 'fullstack',
    summary: 'Aplicación web orientada a la trazabilidad de inventario clínico, visitadores médicos y constancias de entrega, integrando frontend básico con lógica de datos.',
    description: 'Plataforma web desarrollada con Next.js 15 y TypeScript enfocada en digitalizar el flujo de muestras médicas. Desarrollé la lógica de control de inventario, alertas y emisión de constancias, conectando interfaces funcionales con el modelo de datos.',
    highlights: [
      'Implementación de módulos para gestión de inventario, control de visitadores médicos, registro de entregas e historial.',
      'Lógica de negocio para actualización automática de inventario, alertas de stock bajo y generación de constancias.',
      'Formularios reactivos con React Hook Form y validación de esquemas con Zod.',
      'Integración de interfaz accesible con componentes de Radix UI, Lucide Icons y notificaciones con Sonner.',
      'Estructura preparada para integración con PostgreSQL, Supabase y autenticación.'
    ],
    technologies: [
      'Next.js 15 (App Router)',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'PostgreSQL / Supabase'
    ],
    status: 'completed',
    statusLabel: 'Proyecto Concluido / Listo para despliegue',
    repoUrl: 'https://github.com/CarlosTolentino', // [EDITABLE: Reemplazar con el enlace directo al repositorio]
    demoUrl: '', // [EDITABLE: Reemplazar con el enlace de demo cuando esté alojado]
    isFeatured: true
  },
  {
    id: 'cooperativa-microservicios',
    title: 'Sistema de Gestión de Cooperativa',
    role: 'Desarrollador Backend (Arquitectura)',
    category: 'in-progress',
    summary: 'Arquitectura distribuida en microservicios orientada a la administración de cuentas, préstamos y aportes cooperativistas.',
    description: 'Proyecto enfocado en la aplicación de servicios independientes, desacoplados y escalables para el sector financiero cooperativo, implementando el stack Java/Spring Boot con persistencia relacional.',
    highlights: [
      'Diseño conceptual de microservicios: gestión de socios, cuentas de ahorro y solicitudes de crédito.',
      'Implementación del framework Spring Boot y Spring Data JPA para la capa de persistencia.',
      'Configuración de contenedores Docker para aislamiento de dependencias y base de datos PostgreSQL.',
      'Definición de contratos de API REST para la comunicación entre servicios.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Microservicios',
      'PostgreSQL',
      'Docker',
      'Spring Data JPA'
    ],
    status: 'in-progress',
    statusLabel: 'En Desarrollo / Arquitectura',
    repoUrl: '', // [EDITABLE: Colocar URL cuando el repositorio sea público]
    demoUrl: '',
    isFeatured: false
  },
  {
    id: 'sistema-facturacion',
    title: 'Sistema de Facturación y Comprobantes',
    role: 'Desarrollador Backend',
    category: 'in-progress',
    summary: 'Módulo de cálculo fiscal, control de comprobantes, catálogo de productos y registro de ventas.',
    description: 'Servicio backend enfocado en automatizar la generación de facturas comerciales, seguimiento de cobros y emisión de reportes contables con integridad transaccional.',
    highlights: [
      'Diseño del esquema de base de datos relacional con reglas de integridad para comprobantes.',
      'Lógica de cálculo matemático para subtotal, impuestos y retenciones fiscales.',
      'Módulo de exportación o preparación para constancias de pago.'
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST API'
    ],
    status: 'planned',
    statusLabel: 'En Planificación',
    repoUrl: '', // [EDITABLE: Colocar URL al iniciar implementación]
    demoUrl: '',
    isFeatured: false
  }
];
