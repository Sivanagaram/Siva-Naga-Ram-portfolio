import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import type {
  NavLink,
  SkillCategory,
  Project,
  ExperienceItem,
  TimelineItem,
  Certification,
  Achievement,
  SocialLink,
} from "@/types";

export const SITE = {
  name: "Siva Naga Ram Avanigadda",
  role: "Frontend Developer",
  tagline: "Building AI-powered applications",
  email: "sivaavanigadda244@gmail.com",
  resumeUrl: "/resume.pdf",
  // Used for SEO metadataBase, sitemap, robots, and social-preview URLs.
  // Change this to your real Vercel URL (or custom domain) after deploying.
  url: "https://siva-portfolio.vercel.app",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const TYPING_PHRASES = [
  "Building AI-powered applications",
  "Crafting premium user interfaces",
  "Transitioning into AI Engineering",
  "Shipping fast, accessible products",
];

export const ABOUT_SUMMARY =
  "Frontend developer with 2 years building enterprise-grade applications in React and Next.js. I care about interfaces that feel fast, look premium, and stay accessible. Lately I've turned that craft toward AI — pairing strong product engineering with machine learning to build tools that actually get used.";

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "Started as a Frontend Developer",
    description:
      "Joined TSSS Infotech & Infra, building production React and Next.js applications and design systems.",
  },
  {
    year: "2025",
    title: "Built enterprise platforms",
    description:
      "Shipped data-heavy dashboards with AG Grid and AG Charts — QA analytics, recruitment tooling, and threat-intel views.",
  },
  {
    year: "2026",
    title: "Becoming an AI Engineer",
    description:
      "Bridging frontend craft with applied ML: document extraction, model dashboards, and AI-powered interfaces.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Styled Components", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "ClickHouse"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["Python", "NumPy", "Pandas", "Machine Learning", "Deep Learning"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Platform UI — Auto QA & Recruitment",
    description:
      "Enterprise platform with two modules: an Auto QA suite that scores agent–customer interactions and generates coaching plans, plus a Recruitment suite for resume analysis and candidate assessment.",
    features: ["QA scoring & coaching plans", "AG Grid / AG Charts dashboards", "Recruitment pipeline", "Candidate & recruiter UI"],
    tech: ["Next.js", "TypeScript", "AG Grid", "AG Charts", "ClickHouse"],
    featured: true,
    accent: "from-cyan/40 to-violet/30",
  },
  {
    title: "URL Threat Intel Dashboard",
    description:
      "Analytics dashboard tracking week-on-week performance of a URL threat-detection model — confusion matrix vs. ground truth, detection rates, latency and cache health for go-live readiness.",
    features: ["Go-live readiness matrix", "KPI cards & sparklines", "Latency & cache charts", "Auto-generated insights"],
    tech: ["React 19", "TypeScript", "Recharts", "gRPC", "FastAPI"],
    featured: true,
    accent: "from-violet/40 to-magenta/30",
  },
  {
    title: "AI Case Knowledge Extraction",
    description:
      "Internal AI tool that reads 50+ page legal settlement documents and extracts structured case data with source citations — cutting case processing from hours to under 15 minutes.",
    features: ["Multi-PDF extraction", "Parallel AI (OpenAI + Gemini)", "Cited confidence scoring", "Human-in-the-loop review"],
    tech: ["React 19", "FastAPI", "PostgreSQL", "OpenAI", "Gemini"],
    featured: true,
    accent: "from-magenta/40 to-cyan/30",
  },
  {
    title: "Class-Action Document OCR Platform",
    description:
      "Document-processing platform that imports cases, OCR-extracts fields, and routes documents to reviewers who verify data against claimant records — built to stay resilient through network outages.",
    features: ["OCR field extraction", "Reviewer verification UI", "Record locking & on-hold", "Offline resilience"],
    tech: ["React", "TypeScript", "FastAPI", "OCR"],
    featured: false,
    accent: "from-cyan/30 to-violet/30",
  },
  {
    title: "More in progress",
    description: "New AI-engineering projects are on the way — RAG tools, agents, and ML-powered interfaces.",
    features: [],
    tech: [],
    featured: false,
    accent: "from-mist/10 to-mist/5",
    comingSoon: true,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "TSSS Infotech & Infra",
    period: "2024 — Present · 2 years",
    current: true,
    points: [
      "Built the Platform UI — Auto QA and Recruitment modules — with AG Grid and AG Charts dashboards",
      "Shipped a URL Threat Intel analytics dashboard: confusion matrix, KPI cards, latency and cache health",
      "Developed an AI case-knowledge extraction tool for legal documents with cited, reviewable output",
      "Built a class-action document OCR platform with a resilient reviewer verification UI",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: "AI Foundations", issuer: "ISTE · IBM SkillsBuild" },
  { title: "Data Science Foundations — Level 1", issuer: "IBM Skills Network", year: "Foundational" },
  { title: "Data Science Tools", issuer: "IBM Skills Network", year: "Foundational" },
  { title: "IBM Blockchain Essentials V2", issuer: "IBM Blockchain", year: "Foundational" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Performance champion", description: "Cut dashboard load time by 60% through code-splitting and lazy loading." },
  { title: "Design system author", description: "Built a component library now used across multiple product teams." },
  { title: "Add your achievement", description: "Highlight a milestone, award, or standout result here." },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Sivanagaram", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/siva-naga-ram-avanigadda-00a718240/", icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];
