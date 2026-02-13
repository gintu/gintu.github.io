export interface Skill {
  name: string;
  category: string;
  description: string;
}

const skillList: Skill[] = [
  {
    name: "React",
    category: "Library",
    description: "Hooks, Context, Performance",
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "App Router, SSR, Server Actions",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Static Typing, Generics, Interfaces",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Responsive, Dark Mode, Animations",
  },
  {
    name: "NoSQL",
    category: "Database",
    description: "MongoDB, Redis, Caching",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational Data, Indexing",
  },
  {
    name: "Figma",
    category: "Design",
    description: "UI/UX, Prototyping, Auto Layout",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    description: "Gestures, Layout Animations",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "REST APIs, Express, Middleware",
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Workflows, Rebasing, CI/CD",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerization, Compose",
  },
  {
    name: "Testing",
    category: "QA",
    description: "Jest, React Testing Library, Playwright",
  },
];

export default skillList;
