
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Web' | 'Specialization';
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
}
