export interface Skill {
  name: string;
  category: string;
  description: string;
}

const skillList: Skill[] = [
    {
    name: "TypeScript",
    category: "Language",
    description: "Static Typing, Generics, Interfaces",
  },
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
    name: "CSS",
    category: "Styling",
    description: "Responsive, Variables, Animations",
  },
  {
    name: "Astro",
    category: "Framework",
    description: "Static Site Generation, Islands, Components",
  },
   {
    name: "Figma",
    category: "Design",
    description: "UI/UX, Prototyping, Auto Layout",
  },
    {
    name: "Motion",
    category: "Animation",
    description: "Gestures, Layout Animations",
  },
    {
    name: "Node.js",
    category: "Backend",
    description: "REST APIs, Express, Middleware",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational Data, Indexing",
  },

  {
    name: "Git",
    category: "Version Control",
    description: "Workflows, Rebasing, CI/CD",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "EC2, S3, Lambda, RDS",
  },
  {
    name: "Testing",
    category: "QA",
    description: "Jest, React Testing Library, Playwright",
  },
];

export default skillList;
