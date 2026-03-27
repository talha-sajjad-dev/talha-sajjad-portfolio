export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  description: string;
  thumbnail: string;
  images: string[];
  featured: boolean;
  year: string;
  client: string;
  duration: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  requirements: string[];
  problemsFaced: {
    title: string;
    description: string;
    solution: string;
  }[];
}

export const categories = [
  "All",
  "E-Commerce",
  "CRM",
  "Health & Wellness",
  "Portfolio",
  "Trading Platform",
  "Event Venue",
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "mern-ecommerce-platform",
    title: "MERN E-commerce Platform",
    category: "E-Commerce",
    tags: ["E-Commerce", "MERN", "Stripe", "Socket.IO"],
    shortDescription:
      "Full-stack multi-vendor marketplace with JWT authentication, Stripe payments, and real-time chat.",
    description:
      "A scalable multi-vendor e-commerce platform built using the MERN stack. Features include JWT and OAuth authentication with role-based access control, integrated Stripe and PayPal for secure payment processing, real-time chat using Socket.IO for buyer-seller communication, and optimized performance with Cloudinary image handling and efficient API design.",
    thumbnail: "/projects/mern-shop.jpg",
    images: [
      "/projects/mern-shop-1.jpg",
      "/projects/mern-shop-2.jpg",
      "/projects/mern-shop-3.jpg",
    ],
    featured: true,
    year: "2024",
    client: "Personal Project",
    duration: "Ongoing",
    liveUrl: "https://talha-mern-shop.netlify.app/",
    githubUrl: "",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "PayPal", "Socket.IO", "Cloudinary"],
    requirements: [
      "Multi-vendor marketplace with separate dashboards",
      "JWT and OAuth authentication with role-based access",
      "Integrated Stripe and PayPal payment processing",
      "Real-time chat between buyers, sellers, and admin",
      "Product management with bulk upload via Excel",
      "Cloudinary integration for optimized image handling",
    ],
    problemsFaced: [
      {
        title: "Real-time Chat Scalability",
        description:
          "Managing multiple concurrent chat sessions between vendors, users, and admin required efficient Socket.IO implementation.",
        solution:
          "Implemented room-based Socket.IO architecture with Redis adapter for horizontal scaling and message persistence.",
      },
      {
        title: "Payment Integration Complexity",
        description:
          "Handling multiple payment gateways (Stripe and PayPal) with different webhook structures and error handling.",
        solution:
          "Created a unified payment adapter pattern with standardized response formats and comprehensive webhook validation.",
      },
    ],
  },
  {
    id: "2",
    slug: "modapaya-fashion-store",
    title: "Modapaya - Custom Rhinestone Apparel",
    category: "E-Commerce",
    tags: ["E-Commerce", "Laravel", "Chat System", "Excel Import"],
    shortDescription:
      "Custom rhinestone and bling apparel e-commerce store with multi-role chat and bulk product management.",
    description:
      "An online shop for rhinestone and bling apparel. Worked for 3 months on feature additions including multi-role chat system (vendor/user/admin), Excel-based product & category uploads, quote system improvements, and various bug fixes. The platform supports custom orders and wholesale inquiries.",
    thumbnail: "/projects/modapaya.jpg",
    images: [
      "/projects/modapaya-1.jpg",
      "/projects/modapaya-2.jpg",
    ],
    featured: true,
    year: "2024",
    client: "Modapaya",
    duration: "3 months",
    liveUrl: "https://modapaya.com/",
    githubUrl: "",
    techStack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    requirements: [
      "Multi-role chat system for admin, vendors, and users",
      "Bulk product and category upload via Excel",
      "Quote system for custom orders",
      "Inventory management for rhinestone products",
      "Integration with Etsy and other marketplaces",
      "Bug fixes and performance improvements",
    ],
    problemsFaced: [
      {
        title: "Excel Import Performance",
        description:
          "Importing large Excel files with thousands of products caused timeouts and memory issues.",
        solution:
          "Implemented chunked processing with Laravel queues and background jobs for handling large imports efficiently.",
      },
      {
        title: "Multi-role Chat Implementation",
        description:
          "Managing chat permissions and message routing between admin, vendors, and customers was complex.",
        solution:
          "Built a role-based chat architecture with separate channels and real-time notifications using Laravel Echo and Pusher.",
      },
    ],
  },
  {
    id: "3",
    slug: "gempacked-jewelry-wholesale",
    title: "Gempacked - Jewelry Findings Wholesale",
    category: "E-Commerce",
    tags: ["E-Commerce", "Next.js", "Symfony", "Maintenance"],
    shortDescription:
      "Wholesale jewelry beads, chains, and findings platform with ongoing maintenance and feature additions.",
    description:
      "A comprehensive wholesale platform for jewelry findings, beads, and chains. Provided hourly maintenance, adding new features and fixing bugs for nearly one year. Built with Next.js frontend and Symfony backend, handling large product catalogs and bulk ordering.",
    thumbnail: "/projects/gempacked.jpg",
    images: [
      "/projects/gempacked-1.jpg",
      "/projects/gempacked-2.jpg",
    ],
    featured: true,
    year: "2024",
    client: "Gempacked",
    duration: "1 year",
    liveUrl: "https://gempacked.com/",
    githubUrl: "",
    techStack: ["Next.js", "Symfony", "PHP", "MySQL", "React"],
    requirements: [
      "Large product catalog management",
      "Bulk ordering system for wholesale customers",
      "Inventory tracking and stock management",
      "Customer account management",
      "Regular bug fixes and feature enhancements",
      "Performance optimization for large datasets",
    ],
    problemsFaced: [
      {
        title: "Large Catalog Performance",
        description:
          "Loading and filtering thousands of jewelry products caused slow page loads and poor user experience.",
        solution:
          "Implemented server-side pagination, lazy loading, and optimized database queries with proper indexing.",
      },
      {
        title: "Cross-platform Consistency",
        description:
          "Maintaining consistency between Next.js frontend and Symfony backend during rapid feature additions.",
        solution:
          "Established clear API contracts with OpenAPI documentation and automated integration tests.",
      },
    ],
  },
  {
    id: "4",
    slug: "billvok-crm",
    title: "Billvok - AI-Enhanced CRM",
    category: "CRM",
    tags: ["CRM", "CodeIgniter", "Project Management", "Bug Fixes"],
    shortDescription:
      "AI-enhanced CRM platform with leads management, project tracking, invoicing, and team collaboration.",
    description:
      "A comprehensive CRM platform offering leads management, project task tracking, invoicing, and team management. Fixed critical 505 errors on various pages and improved system stability. Built with CodeIgniter framework.",
    thumbnail: "/projects/billvok.jpg",
    images: [
      "/projects/billvok-1.jpg",
      "/projects/billvok-2.jpg",
    ],
    featured: false,
    year: "2024",
    client: "Billvok",
    duration: "2 months",
    liveUrl: "https://billvok.com/",
    githubUrl: "",
    techStack: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    requirements: [
      "Leads and customer management system",
      "Project task tracking with team assignments",
      "Invoicing and payment tracking",
      "Team collaboration tools",
      "Fix critical 505 server errors",
      "Performance optimization",
    ],
    problemsFaced: [
      {
        title: "Critical 505 Errors",
        description:
          "Multiple pages were throwing 505 gateway timeout errors affecting user experience and business operations.",
        solution:
          "Identified and optimized slow database queries, implemented caching strategies, and fixed infinite loops in the codebase.",
      },
    ],
  },
  {
    id: "5",
    slug: "goalvalor-wellness-hub",
    title: "GoalValor - Wellness Consultation Platform",
    category: "Health & Wellness",
    tags: ["Health", "CodeIgniter", "Multilingual", "Consultation"],
    shortDescription:
      "Multilingual wellness hub connecting users with health and fitness experts for online consultations.",
    description:
      "A professional wellness hub that connects users with health and fitness experts in multiple languages. Offers online consultations and training plans. Implemented comprehensive multi-language support using CodeIgniter framework.",
    thumbnail: "/projects/goalvalor.jpg",
    images: [
      "/projects/goalvalor-1.jpg",
      "/projects/goalvalor-2.jpg",
    ],
    featured: false,
    year: "2024",
    client: "GoalValor",
    duration: "4 months",
    liveUrl: "https://goalvalor.com/",
    githubUrl: "",
    techStack: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    requirements: [
      "Multi-language support for global reach",
      "Expert profile management system",
      "Online consultation booking and scheduling",
      "Training plan creation and management",
      "Payment integration for consultations",
      "User dashboard for tracking progress",
    ],
    problemsFaced: [
      {
        title: "Multi-language Implementation",
        description:
          "Supporting multiple languages while maintaining consistent user experience and database structure.",
        solution:
          "Implemented a robust language management system with separate translation tables and dynamic content loading based on user preferences.",
      },
    ],
  },
  {
    id: "6",
    slug: "hqsleep-cpap-analyzer",
    title: "HQSleep - CPAP Report Analyzer",
    category: "Health & Wellness",
    tags: ["Health", "Laravel", "Data Visualization", "File Processing"],
    shortDescription:
      "Graphical CPAP report analyzer where users upload sleep data files and view detailed visual reports.",
    description:
      "A specialized platform where users upload CPAP files with various extensions, create an account, and view comprehensive graphical sleep reports. Built using Laravel with advanced file processing and data visualization capabilities.",
    thumbnail: "/projects/hqsleep.jpg",
    images: [
      "/projects/hqsleep-1.jpg",
      "/projects/hqsleep-2.jpg",
    ],
    featured: true,
    year: "2024",
    client: "HQSleep",
    duration: "3 months",
    liveUrl: "https://hqsleep.com/",
    githubUrl: "",
    techStack: ["Laravel", "PHP", "MySQL", "Chart.js", "JavaScript"],
    requirements: [
      "Support for multiple CPAP file formats",
      "User account management and authentication",
      "File upload and processing system",
      "Graphical report generation with charts",
      "Historical data tracking and comparison",
      "Secure data storage and privacy compliance",
    ],
    problemsFaced: [
      {
        title: "Multiple File Format Support",
        description:
          "CPAP machines generate files in various proprietary formats, making parsing complex and error-prone.",
        solution:
          "Built a flexible parser system with format detection and conversion to a standardized internal format for processing.",
      },
      {
        title: "Large File Processing",
        description:
          "Processing large CPAP data files synchronously caused timeouts and poor user experience.",
        solution:
          "Implemented Laravel queues for background processing with real-time progress updates via WebSockets.",
      },
    ],
  },
  {
    id: "7",
    slug: "jakhamhelpkadam-holistic-health",
    title: "JakhamHelpKadam - Natural Therapy Clinic",
    category: "Health & Wellness",
    tags: ["Health", "Laravel", "Livewire", "Maintenance"],
    shortDescription:
      "Holistic healing center website providing detox, pain relief, and natural therapies.",
    description:
      "A comprehensive website for a holistic healing center offering detox, pain relief, and natural therapies. Maintained over six months using Laravel and Livewire, implementing new features and ensuring smooth operations.",
    thumbnail: "/projects/jakhamhelpkadam.jpg",
    images: [
      "/projects/jakhamhelpkadam-1.jpg",
      "/projects/jakhamhelpkadam-2.jpg",
    ],
    featured: false,
    year: "2024",
    client: "JakhamHelpKadam",
    duration: "6 months",
    liveUrl: "https://jakhamhelpkadam.com/",
    githubUrl: "",
    techStack: ["Laravel", "Livewire", "PHP", "MySQL", "Tailwind CSS"],
    requirements: [
      "Service catalog and booking system",
      "Therapy information and educational content",
      "Appointment scheduling",
      "Patient testimonials and reviews",
      "Blog for health tips and updates",
      "Contact and inquiry management",
    ],
    problemsFaced: [
      {
        title: "Real-time Booking Updates",
        description:
          "Needed real-time availability updates without full page reloads for better user experience.",
        solution:
          "Leveraged Laravel Livewire for reactive components that update availability in real-time without JavaScript complexity.",
      },
    ],
  },
  {
    id: "8",
    slug: "liveleanforlongevity-health-coaching",
    title: "LiveLeanForLongevity - Health Transformation",
    category: "Health & Wellness",
    tags: ["Health", "Calculators", "Fitness", "Nutrition"],
    shortDescription:
      "6-week health and longevity program with custom VO₂ Max and Biological Age calculators.",
    description:
      "A comprehensive health and longevity course focusing on fitness, nutrition, and lifestyle transformation. Developed two custom calculators: VO₂ Max calculator for cardiovascular fitness assessment and Biological Age calculator for health metrics analysis.",
    thumbnail: "/projects/livelean.jpg",
    images: [
      "/projects/livelean-1.jpg",
      "/projects/livelean-2.jpg",
    ],
    featured: false,
    year: "2024",
    client: "LiveLeanForLongevity",
    duration: "2 months",
    liveUrl: "https://liveleanforlongevity.com/",
    githubUrl: "",
    techStack: ["JavaScript", "HTML", "CSS", "PHP"],
    requirements: [
      "VO₂ Max calculator with accurate formulas",
      "Biological Age calculator based on health metrics",
      "Course information and enrollment system",
      "Progress tracking for participants",
      "Educational content delivery",
      "Mobile-responsive design",
    ],
    problemsFaced: [
      {
        title: "Complex Calculator Logic",
        description:
          "Implementing accurate VO₂ Max and Biological Age calculations with multiple variables and edge cases.",
        solution:
          "Researched medical literature for validated formulas and implemented comprehensive input validation with clear user feedback.",
      },
    ],
  },
  {
    id: "9",
    slug: "acre31-wedding-venue",
    title: "Acre31 - Wedding Barn Venue",
    category: "Event Venue",
    tags: ["Laravel", "Blade", "Events", "Showcase"],
    shortDescription:
      "Wedding barn event venue website built from scratch showcasing services and facilities.",
    description:
      "A beautiful wedding barn website created from scratch using Laravel Blade, showcasing the venue, services, and facilities for wedding events and special occasions.",
    thumbnail: "/projects/acre31.jpg",
    images: [
      "/projects/acre31-1.jpg",
      "/projects/acre31-2.jpg",
    ],
    featured: false,
    year: "2024",
    client: "Acre31",
    duration: "1 month",
    liveUrl: "https://acre31.com/",
    githubUrl: "",
    techStack: ["Laravel", "Blade", "PHP", "MySQL", "Bootstrap"],
    requirements: [
      "Venue showcase with photo galleries",
      "Service packages and pricing information",
      "Inquiry and booking request forms",
      "Event calendar and availability",
      "Testimonials from previous clients",
      "SEO optimization for local searches",
    ],
    problemsFaced: [
      {
        title: "Image Gallery Performance",
        description:
          "High-resolution venue photos caused slow loading times affecting user experience.",
        solution:
          "Implemented lazy loading, image optimization, and responsive images with multiple sizes for different devices.",
      },
    ],
  },
  {
    id: "10",
    slug: "forex-trading-platform",
    title: "Forex Trading Dashboard",
    category: "Trading Platform",
    tags: ["Next.js", "Laravel", "Node.js", "MongoDB", "TypeScript"],
    shortDescription:
      "Forex trading platform with Next.js frontend and hybrid Laravel/Node.js backend (in development).",
    description:
      "A comprehensive forex trading platform currently under development. Features a modern Next.js frontend with a hybrid backend using Laravel for API and Node.js with MongoDB and Express.js for real-time data processing. Built with TypeScript for type safety.",
    thumbnail: "/projects/forex.jpg",
    images: [
      "/projects/forex-1.jpg",
      "/projects/forex-2.jpg",
    ],
    featured: true,
    year: "2024",
    client: "Private Client",
    duration: "Ongoing",
    liveUrl: "https://dev-stage-forex.vercel.app/",
    githubUrl: "",
    techStack: ["Next.js", "Laravel", "Node.js", "MongoDB", "Express.js", "TypeScript", "React"],
    requirements: [
      "Real-time forex data streaming",
      "Trading dashboard with charts and analytics",
      "User account and portfolio management",
      "Order execution and trade history",
      "Risk management tools",
      "Multi-currency support",
    ],
    problemsFaced: [
      {
        title: "Hybrid Backend Architecture",
        description:
          "Coordinating between Laravel API and Node.js real-time services while maintaining data consistency.",
        solution:
          "Implemented event-driven architecture with message queues for inter-service communication and shared data contracts.",
      },
      {
        title: "Real-time Data Synchronization",
        description:
          "Ensuring forex price updates are synchronized across all connected clients with minimal latency.",
        solution:
          "Used WebSocket connections with Redis pub/sub for efficient real-time data distribution to multiple clients.",
      },
    ],
  },
  {
    id: "11",
    slug: "foxzai-portfolio",
    title: "Foxzai - React Portfolio",
    category: "Portfolio",
    tags: ["React", "Portfolio", "Landing Page"],
    shortDescription:
      "React-based deployed portfolio and landing site for showcasing content and services.",
    description:
      "A modern React-built website deployed to showcase content or services. Features a clean design with smooth animations and responsive layout, likely serving as a personal portfolio or informational landing page.",
    thumbnail: "/projects/foxzai.jpg",
    images: [
      "/projects/foxzai-1.jpg",
      "/projects/foxzai-2.jpg",
    ],
    featured: false,
    year: "2024",
    client: "Foxzai",
    duration: "3 weeks",
    liveUrl: "https://foxzai.com/",
    githubUrl: "",
    techStack: ["React", "JavaScript", "CSS", "HTML"],
    requirements: [
      "Modern portfolio design",
      "Smooth animations and transitions",
      "Responsive layout for all devices",
      "Fast loading performance",
      "SEO optimization",
      "Contact form integration",
    ],
    problemsFaced: [],
  },
];
