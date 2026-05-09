export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  screenshot?: string;
  initials: string;
}

export const projects: Project[] = [
  // TODO: Replace with your real GitHub projects
  {
    name: "Project One",
    description: "A full-stack web application built with React and Node.js. Add a real description of what this project does and why you built it.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/CarlosNavarroJr/project-one",
    live: undefined,
    screenshot: undefined,
    initials: "P1",
  },
  {
    name: "Project Two",
    description: "A backend API service with authentication and real-time features. Add a real description of what this project does and why you built it.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/CarlosNavarroJr/project-two",
    live: undefined,
    screenshot: undefined,
    initials: "P2",
  },
  {
    name: "Project Three",
    description: "A Python automation tool that saves time on repetitive tasks. Add a real description of what this project does and why you built it.",
    tech: ["Python", "Docker", "AWS"],
    github: "https://github.com/CarlosNavarroJr/project-three",
    live: undefined,
    screenshot: undefined,
    initials: "P3",
  },
];
