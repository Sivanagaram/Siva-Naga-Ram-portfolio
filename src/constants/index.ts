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
  name: "Siva Naga Ram",
  role: "Frontend Developer",
  tagline: "Building AI-powered applications",
  email: "siva@example.com",
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
  "Frontend developer with 4+ years building enterprise-grade applications in React and Next.js. I care about interfaces that feel fast, look premium, and stay accessible. Lately I've turned that craft toward AI — pairing strong product engineering with machine learning to build tools that actually get used.";

export const TIMELINE: TimelineItem[] = [
  {
    year: "2021",
    title: "Started as a Frontend Developer",
    description:
      "Joined TSSS Infotech & Infra, building production React applications and design systems.",
  },
  {
    year: "2023",
    title: "Led complex dashboards",
    description:
      "Owned data-heavy dashboards with real-time charts, performance budgets, and reusable component libraries.",
  },
  {
    year: "2024",
    title: "Dived into AI",
    description:
      "Began studying machine learning, deep learning, and LLMs — shipping AI features into real products.",
  },
  {
    year: "2025",
    title: "Becoming an AI Engineer",
    description:
      "Bridging frontend craft with applied ML: RAG systems, embeddings, and generative AI interfaces.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "ClickHouse", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      "Python", "NumPy", "Pandas", "Machine Learning", "Deep Learning",
      "Transformers", "LLMs", "Generative AI", "OpenAI APIs", "Embeddings",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Threat Intelligence Dashboard",
    description:
      "Real-time security analytics platform surfacing threats across networks with live charts and incident workflows.",
    features: ["Live data streaming", "Interactive charts", "Role-based access", "Incident triage"],
    tech: ["Next.js", "TypeScript", "ClickHouse", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "from-cyan/40 to-violet/30",
  },
  {
    title: "AI Trading Platform",
    description:
      "Algorithmic trading interface combining market data, model-driven signals, and a fast, focused trading UI.",
    features: ["Model-driven signals", "Portfolio analytics", "WebSocket feeds", "Backtesting"],
    tech: ["React", "FastAPI", "Python", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "from-violet/40 to-magenta/30",
  },
  {
    title: "AI Inappropriate Content Detection",
    description:
      "Computer-vision and NLP pipeline that flags unsafe content in real time with a clean review dashboard.",
    features: ["Image classification", "Text moderation", "Confidence scoring", "Review queue"],
    tech: ["Python", "Transformers", "FastAPI", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "from-magenta/40 to-cyan/30",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a performance-first, accessible portfolio with glassmorphism, motion, and a 95+ Lighthouse target.",
    features: ["Framer Motion", "Dark / light mode", "SEO-ready", "95+ Lighthouse"],
    tech: ["Next.js 15", "React 19", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
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
    period: "2021 — Present · 4+ years",
    current: true,
    points: [
      "Develop and maintain enterprise applications in React and Next.js",
      "Integrate REST APIs and build data-driven dashboards with rich charts",
      "Drive performance optimization across large, long-lived codebases",
      "Build reusable component libraries adopted across teams",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Meta Front-End Developer", issuer: "Coursera · Meta", year: "2023" },
  { title: "Deep Learning Specialization", issuer: "Coursera · DeepLearning.AI", year: "2024" },
  { title: "Add your certification", issuer: "Issuer", year: "—", placeholder: true },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Performance champion", description: "Cut dashboard load time by 60% through code-splitting and lazy loading." },
  { title: "Design system author", description: "Built a component library now used across multiple product teams." },
  { title: "Add your achievement", description: "Highlight a milestone, award, or standout result here." },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];
