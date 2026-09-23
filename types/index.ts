export interface Metric {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  visualType: string;
  isFeatured: boolean;
  metrics: Metric[];
  // New detail fields
  client?: string;
  industry?: string;
  year?: string;
  services?: string[];
  challenge?: string;
  strategy?: {
    description: string;
    points: string[];
  };
  execution?: {
    title: string;
    description: string;
  }[];
  impact?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  journey: string[];
}
