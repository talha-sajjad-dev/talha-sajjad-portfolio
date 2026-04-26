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
  { name: "HTML5", icon: "SiHtml5", category: "Frontend" },
  { name: "CSS3", icon: "SiCss", category: "Frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
  { name: "Bootstrap", icon: "SiBootstrap", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "FaNodeJs", category: "Backend" },
  { name: "Express.js", icon: "SiExpress", category: "Backend" },

  // Database
  { name: "MongoDB", icon: "SiMongodb", category: "Backend" },
  { name: "MySQL", icon: "SiMysql", category: "Backend" },

  // DevOps & Tools
  { name: "Git", icon: "FaGitAlt", category: "Tools" },
  { name: "GitHub", icon: "FaGithub", category: "Tools" },
  { name: "Vercel", icon: "SiVercel", category: "DevOps" },
  { name: "Netlify", icon: "SiNetlify", category: "DevOps" },

  // Other Technologies
  { name: "REST APIs", icon: "SiPostman", category: "Backend" },
  { name: "JWT Auth", icon: "SiJsonwebtokens", category: "Backend" },
  { name: "Stripe", icon: "SiStripe", category: "Tools" },
  { name: "PayPal", icon: "FaPaypal", category: "Tools" },
  { name: "Cloudinary", icon: "SiCloudinary", category: "Tools" },
  { name: "Google OAuth", icon: "SiGoogle", category: "Backend" },
  { name: "Joi", icon: "SiPostman", category: "Backend" },
  { name: "Postman", icon: "SiPostman", category: "Tools" },
  { name: "Socket.IO", icon: "SiSocketdotio", category: "Backend" },
];
