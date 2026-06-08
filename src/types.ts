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

export interface BlogPost {
  id: string;
  slug: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>[]; // Array of content blocks or paragraphs for clean dual-language reading
  category: 'design' | 'dev' | 'insights';
  categoryLabel: Record<Language, string>;
  readTime: Record<Language, string>;
  image: string;
  publishedDate: Record<Language, string>;
  author: {
    name: Record<Language, string>;
    avatar: string;
    role: Record<Language, string>;
  };
}
