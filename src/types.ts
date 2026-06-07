export type Language = 'en' | 'ge';

export interface Service {
  id: string;
  iconName: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'enterprise' | 'ux-ui';
  categoryLabel: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  technologies: string[];
  link?: string;
  metrics?: Record<Language, string>;
}

export interface Testimonial {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  company: string;
  text: Record<Language, string>;
  avatar: string;
}

export interface Metric {
  value: string;
  label: Record<Language, string>;
  description: Record<Language, string>;
}
