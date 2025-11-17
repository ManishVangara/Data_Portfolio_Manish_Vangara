// ============================================
// TYPE DEFINITIONS FOR PORTFOLIO DATA
// ============================================

export interface Project {
  title: string;
  image?: string;
  techStack: string;
  description: string;
  link?: string;
}

export interface Certification {
  title: string;
  organization: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  location: string;
  description: string;
}

export interface Hobby {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface Story {
  icon: string;
  title: string;
  description: string;
}

export interface AskMeTopic {
  icon: string;
  title: string;
  description: string;
}

export interface LessonTag {
  name: string;
  type: 'failure' | 'mistake' | 'normal';
}

export interface Lesson {
  number: string;
  title: string;
  tags: LessonTag[];
  story: string;
  lesson: string;
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}
