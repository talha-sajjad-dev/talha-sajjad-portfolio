export interface Skill {
  name: string;
  icon: string; // react-icons identifier
  category: "Frontend" | "Backend" | "DevOps" | "Tools";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", icon: "FaReact", category: "Frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
  { name: "JavaScript", icon: "SiJavascript", category: "Frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
  { name: "HTML5", icon: "SiHtml5", category: "Frontend" },
  { name: "CSS3", icon: "SiCss3", category: "Frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
  { name: "Bootstrap", icon: "SiBootstrap", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "FaNodeJs", category: "Backend" },
  { name: "Express.js", icon: "SiExpress", category: "Backend" },
  { name: "PHP", icon: "FaPhp", category: "Backend" },
  { name: "Laravel", icon: "SiLaravel", category: "Backend" },
  { name: "CodeIgniter", icon: "SiCodeigniter", category: "Backend" },
  { name: "Symfony", icon: "SiSymfony", category: "Backend" },

  // Database
  { name: "MongoDB", icon: "SiMongodb", category: "Backend" },
  { name: "MySQL", icon: "SiMysql", category: "Backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "Backend" },

  // DevOps & Tools
  { name: "Git", icon: "FaGitAlt", category: "Tools" },
  { name: "GitHub", icon: "FaGithub", category: "Tools" },
  { name: "Docker", icon: "FaDocker", category: "DevOps" },
  { name: "AWS", icon: "FaAws", category: "DevOps" },
  { name: "Vercel", icon: "SiVercel", category: "DevOps" },
  { name: "Netlify", icon: "SiNetlify", category: "DevOps" },

  // Other Technologies
  { name: "REST APIs", icon: "SiPostman", category: "Backend" },
  { name: "JWT Auth", icon: "SiJsonwebtokens", category: "Backend" },
  { name: "Stripe", icon: "SiStripe", category: "Tools" },
  { name: "Socket.IO", icon: "SiSocketdotio", category: "Backend" },
  { name: "Livewire", icon: "SiLivewire", category: "Backend" },
];
