export interface Project {
  id: string;
  year: string;
  title: string;
  short: string;
  long: string;
  tech: string[];
  repo: string | null;
  live: string | null;
  tags: string[];
  note?: string;
}

export interface Skill {
  category: string;
  icon: string;
  description: string;
  items: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Dikshita Konwar",
  title: "Developer Portfolio",
  headline: "Dikshita Konwar",
  subheadline:
    "Aspiring developer focused on building clean, responsive, and user-friendly digital experiences.",
  intro:
    "This portfolio presents my work, skills, and professional interests in frontend development, interface design, and practical problem solving.",
  bio: [
    "I am Dikshita Konwar, and I am interested in building modern web experiences that are clear, reliable, and easy to use. I enjoy combining thoughtful design with clean implementation so that products feel polished in both appearance and behavior.",
    "My focus is on learning through real projects, improving my technical foundation, and building work that reflects both professionalism and attention to detail. I am especially interested in opportunities where I can continue growing through hands-on development and collaboration.",
  ],
  location: "India",
  email: "",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/avatar-placeholder.svg",
  availability:
    "Open to internships, entry-level opportunities, and meaningful collaborations.",
  status:
    "Available for professional opportunities and portfolio-based collaborations.",
  highlights: [
    { value: "Responsive", label: "Web interfaces" },
    { value: "Clean", label: "Code structure" },
    { value: "Professional", label: "Presentation" },
  ] satisfies Highlight[],
  focusAreas: [
    "Frontend development with clean and maintainable code.",
    "Responsive interfaces that work well across devices.",
    "Professional presentation of projects, skills, and experience.",
  ],
  principles: [
    {
      title: "Clear communication",
      description:
        "I value straightforward communication, clean layouts, and presenting information in a way that is easy to understand.",
    },
    {
      title: "Practical design",
      description:
        "Good design should support usability. I focus on structure, readability, and thoughtful visual decisions.",
    },
    {
      title: "Continuous growth",
      description:
        "Each project is an opportunity to improve technical skills, strengthen decision-making, and build a stronger professional foundation.",
    },
  ] satisfies Principle[],
};

export const projects: Project[] = [
  {
    id: "portfolio-website",
    year: "2026",
    title: "Personal Portfolio Website",
    short:
      "A personal website built to present my profile, skills, and work in a clear and professional way.",
    long: "This project focuses on building a portfolio that feels polished, responsive, and easy to navigate. It highlights personal branding, project presentation, and frontend implementation while creating a strong base for future case studies and professional updates.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: null,
    live: null,
    tags: ["featured", "frontend"],
    note: "A professional foundation for presenting work and experience.",
  },
  {
    id: "web-application-concept",
    year: "2026",
    title: "Web Application Concept",
    short:
      "A project space for showcasing workflow, interface thinking, and problem solving in a structured way.",
    long: "This section can be used for a web application project that demonstrates planning, interface design, and implementation. It is suited for showing how requirements were translated into a working solution with attention to usability and clarity.",
    tech: ["Frontend", "UI Design", "Problem Solving"],
    repo: null,
    live: null,
    tags: ["project", "interface"],
    note: "Useful for presenting a structured academic, personal, or internship project.",
  },
  {
    id: "interactive-experiment",
    year: "2026",
    title: "Interactive Frontend Experiment",
    short:
      "A smaller project for demonstrating creativity, interaction design, and frontend exploration.",
    long: "This section is useful for highlighting a smaller build, UI experiment, or concept project that reflects curiosity and initiative. It can help show range while keeping the overall portfolio focused and professional.",
    tech: ["Interaction", "Prototype", "Frontend"],
    repo: null,
    live: null,
    tags: ["experiment", "creative"],
    note: "A good place to show curiosity, range, and self-initiated work.",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend Development",
    icon: "sparkles",
    description:
      "Building responsive interfaces with clean structure and attention to usability.",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "UI & UX",
    icon: "layout",
    description:
      "Designing layouts that are clear, user-friendly, and visually consistent.",
    items: ["Responsive Design", "User Interface", "Accessibility", "Visual Hierarchy"],
  },
  {
    category: "Tools & Frameworks",
    icon: "code",
    description:
      "Using modern tools to develop and ship well-structured frontend projects.",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    category: "Project Work",
    icon: "pen",
    description:
      "Presenting projects with clear context, responsibilities, and outcomes.",
    items: ["Project Presentation", "Documentation", "Problem Solving", "Iteration"],
  },
  {
    category: "Professional Strengths",
    icon: "layers",
    description:
      "Core habits that support reliable work and long-term growth.",
    items: ["Communication", "Attention to Detail", "Adaptability", "Continuous Learning"],
  },
];

export const socialLinks: SocialLink[] = [];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
];
