export type ProjectCategory = 'all' | 'backend' | 'fullstack' | 'in-progress';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  title: string;
  role: string;
  category: 'fullstack' | 'backend' | 'in-progress';
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: ProjectStatus;
  statusLabel: string;
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
  isFeatured?: boolean;
}

export type SkillLevel = 'Dominio sólido' | 'Básico / Fundamentos' | 'Intermedio' | 'En aprendizaje activo';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  title: string;
  period: string;
  location?: string;
  description?: string;
  type: 'degree' | 'certification' | 'course';
  skills?: string[];
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bioParagraphs: string[];
  statusText: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
