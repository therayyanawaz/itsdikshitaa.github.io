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
    id: "passvault",
    year: "2025",
    title: "PassVault",
    short:
      "A zero-backend, privacy-first password generator you can host anywhere.",
    long: "PassVault is a zero-backend, privacy-first password generator you can host anywhere. It is designed to be secure and easy to use without relying on external servers.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/itsdikshitaa/PassVault",
    live: "https://itsdikshitaa.github.io/PassVault/",
    tags: ["privacy", "security"],
    note: "A privacy-focused password generation tool.",
  },
  {
    id: "blueborne-scanner",
    year: "2024",
    title: "Blueborne Scanner",
    short:
      "A Python-based Bluetooth vulnerability scanner that detects devices susceptible to the BlueBorne exploit.",
    long: "Blueborne-scanner is a Python-based Bluetooth vulnerability scanner that detects devices susceptible to the BlueBorne exploit. It automates device discovery, analyzes Bluetooth protocol responses, and identifies security risks to demonstrate wireless security and vulnerability assessment capabilities.",
    tech: ["Python", "Networking", "Security"],
    repo: "https://github.com/itsdikshitaa/Blueborne-scanner-master",
    live: null,
    tags: ["security", "python"],
    note: "A cybersecurity tool for vulnerability assessment.",
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
