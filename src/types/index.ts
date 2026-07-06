import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accent: string; // tailwind gradient classes for the card glow
  comingSoon?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current: boolean;
  points: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  placeholder?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
