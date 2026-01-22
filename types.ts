export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: 'completed' | 'in-progress';
  stars: number;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  icon: string; // simplistic ASCII char or emoji
  color: 'green' | 'blue' | 'yellow' | 'red';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum ThemeColor {
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  RED = 'red',
  GRAY = 'gray'
}