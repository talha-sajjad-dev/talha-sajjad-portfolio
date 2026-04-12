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
  /** Three headline stats for featured bento “Project highlights” grid */
  highlights?: { value: string; label: string }[];
  /** When set, omitted from listings, featured grid, and detail URL returns 404 */
  hidden?: boolean;
}

export const categories = [
  "All",
  "CRM",
  "E-Commerce",
  "Health & Wellness",
  "Hospitality & Bookings",
  "Logistics & Operations",
  "Portfolio",
  "Trading Platform",
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
    thumbnail: "/images/projects/mern-shop/home.png",
    images: [
      "/images/projects/mern-shop/product.png",
      "/images/projects/mern-shop/seller.png",
      "/images/projects/mern-shop/admin.png",
    ],
    featured: true,
    year: "2024",
    client: "Personal Project",
    duration: "Ongoing",
    liveUrl: "https://talha-mern-shop.netlify.app/",
    githubUrl: "",
    highlights: [
      { value: "8+", label: "Integrations" },
      { value: "JWT", label: "Auth System" },
      { value: "Real-time", label: "Chat & Updates" },
    ],
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
    id: "13",
    slug: "acre31-wedding-venue-frontend",
    title: "Acre31 – Wedding & Event Venue Website",
    category: "Hospitality & Bookings",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Event Bookings", "Venue"],
    shortDescription:
      "Luxury wedding and event venue site with inquiry and booking-focused UX, modern UI, and responsive design.",
    description:
      "Frontend of a luxury wedding and event venue website built with Next.js and React.js. Responsive pages showcasing venue services, galleries, and event information. Modern UI with Tailwind CSS ensuring seamless experience across all devices. Backend built on Laravel.",
    thumbnail: "/images/projects/acre31/Screenshot from 2026-04-12 08-19-54.png",
    images: [
      "/images/projects/acre31/Screenshot from 2026-04-12 08-20-24.png",
      "/images/projects/acre31/Screenshot from 2026-04-12 08-20-42.png",
      "/images/projects/acre31/Screenshot from 2026-04-12 08-21-04.png",
      "/images/projects/acre31/Screenshot from 2026-04-12 08-21-26.png",
      "/images/projects/acre31/Screenshot from 2026-04-12 08-21-52.png",
      "/images/projects/acre31/Screenshot from 2026-04-12 08-22-15.png",
    ],
    featured: true,
    year: "2024",
    client: "Acre31",
    duration: "Aug 2024 — Oct 2024",
    liveUrl: "https://acre31.com/",
    githubUrl: "",
    highlights: [
      { value: "Next.js", label: "Venue frontend" },
      { value: "TW", label: "Tailwind UI" },
      { value: "API", label: "Laravel backend" },
    ],
    techStack: ["Next.js", "React.js", "Tailwind CSS", "MySQL", "Laravel"],
    requirements: [
      "Responsive frontend for all devices",
      "Venue showcase with image galleries",
      "Service and event information pages",
      "Modern UI with Tailwind CSS",
      "Integration with Laravel backend",
      "Performance optimization",
      "SEO-friendly structure",
    ],
    problemsFaced: [
      {
        title: "Image Gallery Performance",
        description:
          "High-resolution venue photos needed to load quickly while maintaining quality across different screen sizes.",
        solution:
          "Implemented Next.js Image component with automatic optimization, lazy loading, and responsive image sizes for optimal performance.",
      },
      {
        title: "Backend Integration",
        description:
          "Coordinating frontend development with Laravel backend API while maintaining clean separation of concerns.",
        solution:
          "Established clear API contracts and used Next.js API routes as a proxy layer for seamless integration with the Laravel backend.",
      },
    ],
  },
  {
    id: "2",
    slug: "modapaya-fashion-store",
    title: "Modapaya - Multi-Vendor E-commerce Marketplace",
    category: "E-Commerce",
    tags: ["E-Commerce", "Laravel", "Shofy", "ZCart", "Quote System", "Messaging"],
    shortDescription:
      "Custom rhinestone apparel marketplace with advanced features including quote system, bulk import, messaging, and multi-platform integration.",
    description:
      "A comprehensive multi-vendor e-commerce platform for custom rhinestone and bling apparel. Worked extensively on migrating from ZCart to Shofy platform, implementing complex features including multi-role chat system (vendor/user/admin), Excel-based bulk product & category uploads with variant support, custom quote management system, order creation workflow, shipping integration with Shippo, and payment processing with Stripe/PayPal. The platform supports custom orders, wholesale inquiries, and cross-platform listing to Etsy, TikTok, and other marketplaces.",
    thumbnail: "/images/projects/modapaya/home.png",
    images: [
      "/images/projects/modapaya/category.png",
      "/images/projects/modapaya/product-page.png",
      "/images/projects/modapaya/featured.png",
    ],
    featured: false,
    year: "2024-2025",
    client: "Modapaya LLC",
    duration: "9 months",
    liveUrl: "https://modapaya.com/",
    githubUrl: "",
    highlights: [
      { value: "0", label: "Downtime migration" },
      { value: "Excel", label: "Bulk catalog import" },
      { value: "Quotes", label: "Custom checkout" },
    ],
    techStack: ["Laravel", "Shofy", "ZCart", "MySQL", "JavaScript", "Vue.js", "Shippo API", "Stripe", "PayPal", "DigitalOcean"],
    requirements: [
      "Platform migration from ZCart to Shofy with zero downtime",
      "Multi-role chat system for admin, vendors, and customers with real-time notifications",
      "Bulk product and category upload via Excel with variants, images, and videos",
      "Custom quote system with email notifications and checkout integration",
      "Order creation workflow for vendors to send payment links to customers",
      "Shipping integration with Shippo API for real-time rate calculation",
      "Payment processing with Stripe and PayPal",
      "Product messaging system with file attachments",
      "Bulk price update feature (fixed price and percentage discount)",
      "SKU management with auto-generation and 20-character limit",
      "Return and refund management system",
      "GitHub integration for continuous deployment",
      "Server migration and DNS management",
    ],
    problemsFaced: [
      {
        title: "Platform Migration Complexity",
        description:
          "Migrating from ZCart to Shofy while preserving all custom features, data, and ensuring zero downtime for live business operations.",
        solution:
          "Implemented a staged migration approach: set up parallel environment, migrated database with data transformation scripts, tested all features thoroughly, then performed DNS cutover during low-traffic hours. Used GitHub for version control and automated deployment.",
      },
      {
        title: "Excel Import Performance with Variants",
        description:
          "Importing large Excel files with thousands of products and multiple variants (colors, sizes, stone types) caused timeouts and memory issues. Each product could have 50+ variant combinations.",
        solution:
          "Implemented chunked processing with Laravel queues and background jobs. Added progress tracking, error handling with detailed logs, and optimized database queries with bulk inserts. Reduced import time from 30+ minutes to under 5 minutes for 1000+ products.",
      },
      {
        title: "Multi-role Chat Implementation",
        description:
          "Managing chat permissions and message routing between admin, vendors, and customers was complex. Needed to support product-specific inquiries with context and file attachments.",
        solution:
          "Built a role-based chat architecture with separate channels and real-time notifications. Implemented product context linking so messages automatically reference the product being discussed. Added support for PDF and image attachments with secure storage.",
      },
      {
        title: "Quote System with Checkout Integration",
        description:
          "Creating a seamless flow from quote request to payment required integrating with existing checkout, handling custom products, and managing quote acceptance workflow.",
        solution:
          "Developed a complete quote lifecycle: customer requests quote → vendor creates custom order with products → system generates unique checkout link → customer accepts and pays → order is created. Integrated with Stripe/PayPal and Shippo for shipping calculations.",
      },
      {
        title: "Shippo API Weight Limitations",
        description:
          "Shipping methods disappeared when product weight exceeded carrier limits. Shippo API returns no options when total weight is too high, breaking the checkout process.",
        solution:
          "Implemented weight validation before checkout, added fallback shipping options, and created custom shipping fee input for vendors to manually set shipping costs when automated calculation fails.",
      },
      {
        title: "Vue.js Component Complexity",
        description:
          "Shofy uses Vue.js for product management, but the code was AI-generated and lacked proper structure. Making changes to variant management and pricing was difficult.",
        solution:
          "Refactored critical Vue components with proper modularity, added TypeScript types where possible, and created custom components for bulk operations. Documented the component architecture for future maintenance.",
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
    thumbnail:
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-50-04.png",
    images: [
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-50-10.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-50-20.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-50-42.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-50-56.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-51-14.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-51-29.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-51-53.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-52-05.png",
      "/images/projects/gempacked/Screenshot from 2026-04-12 08-52-20.png",
    ],
    featured: true,
    year: "2024",
    client: "Gempacked",
    duration: "1 year",
    liveUrl: "https://gempacked.com/",
    githubUrl: "",
    highlights: [
      { value: "1yr+", label: "Ongoing work" },
      { value: "Next.js", label: "Storefront" },
      { value: "Bulk", label: "Wholesale orders" },
    ],
    techStack: ["JavaScript", "Next.js", "React", "MySQL", "PHP", "Laravel"],
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
    thumbnail: "/images/projects/bilvok/Screenshot from 2026-04-12 09-02-23.png",
    images: [
      "/images/projects/bilvok/Screenshot from 2026-04-12 09-02-32.png",
      "/images/projects/bilvok/Screenshot from 2026-04-12 09-02-36.png",
      "/images/projects/bilvok/Screenshot from 2026-04-12 09-02-49.png",
      "/images/projects/bilvok/Screenshot from 2026-04-12 09-03-31.png",
      "/images/projects/bilvok/Screenshot from 2026-04-12 09-03-39.png",
    ],
    featured: false,
    year: "2024",
    client: "Billvok",
    duration: "2 months",
    liveUrl: "https://billvok.com/",
    githubUrl: "",
    highlights: [
      { value: "CRM", label: "Leads & tasks" },
      { value: "505", label: "Stability fixes" },
      { value: "CI3", label: "CodeIgniter" },
    ],
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
    thumbnail: "/images/projects/goalvalor/Screenshot from 2026-04-12 09-12-04.png",
    images: [
      "/images/projects/goalvalor/Screenshot from 2026-04-12 09-12-13.png",
      "/images/projects/goalvalor/Screenshot from 2026-04-12 09-12-21.png",
    ],
    featured: false,
    year: "2024",
    client: "GoalValor",
    duration: "4 months",
    liveUrl: "https://goalvalor.com/",
    githubUrl: "",
    highlights: [
      { value: "i18n", label: "Multi-language" },
      { value: "Experts", label: "Consultations" },
      { value: "Plans", label: "Training tools" },
    ],
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
    thumbnail: "/images/projects/hqsleep/featured.svg",
    images: [
      "/images/projects/hqsleep/report-1.svg",
      "/images/projects/hqsleep/report-2.svg",
    ],
    hidden: true,
    featured: true,
    year: "2024",
    client: "HQSleep",
    duration: "3 months",
    liveUrl: "https://hqsleep.com/",
    githubUrl: "",
    highlights: [
      { value: "Multi", label: "CPAP file types" },
      { value: "Charts", label: "Sleep analytics" },
      { value: "Queues", label: "Heavy uploads" },
    ],
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
    thumbnail: "/images/projects/jakhamhelpkadam.svg",
    images: [
      "/images/projects/jakhamhelpkadam-1.svg",
      "/images/projects/jakhamhelpkadam-2.svg",
    ],
    hidden: true,
    featured: false,
    year: "2024",
    client: "JakhamHelpKadam",
    duration: "6 months",
    liveUrl: "https://jakhamhelpkadam.com/",
    githubUrl: "",
    highlights: [
      { value: "6mo", label: "Maintenance" },
      { value: "Live", label: "Livewire UX" },
      { value: "Book", label: "Appointments" },
    ],
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
    id: "10",
    slug: "forex-trading-platform",
    title: "Forex Trading Dashboard",
    category: "Trading Platform",
    tags: ["Next.js", "Laravel", "Node.js", "MongoDB", "TypeScript"],
    shortDescription:
      "Forex trading platform with Next.js frontend and hybrid Laravel/Node.js backend (in development).",
    description:
      "A comprehensive forex trading platform currently under development. Features a modern Next.js frontend with a hybrid backend using Laravel for API and Node.js with MongoDB and Express.js for real-time data processing. Built with TypeScript for type safety.",
    thumbnail:
      "/images/projects/forex/Screenshot from 2026-04-12 08-27-39.png",
    images: [
      "/images/projects/forex/Screenshot from 2026-04-12 08-27-46.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-27-56.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-28-22.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-28-37.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-45-25.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-45-47.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-46-00.png",
      "/images/projects/forex/Screenshot from 2026-04-12 08-46-27.png",
    ],
    featured: true,
    year: "2024",
    client: "Private Client",
    duration: "Ongoing",
    liveUrl: "https://dev-stage-forex.vercel.app/",
    githubUrl: "",
    highlights: [
      { value: "Hybrid", label: "Laravel + Node" },
      { value: "TS", label: "Type-safe stack" },
      { value: "Live", label: "Rate streaming" },
    ],
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
    thumbnail: "/images/projects/foxzai/Screenshot from 2026-04-12 08-48-31.png",
    images: [
      "/images/projects/foxzai/Screenshot from 2026-04-12 08-48-57.png",
      "/images/projects/foxzai/Screenshot from 2026-04-12 08-49-10.png",
      "/images/projects/foxzai/Screenshot from 2026-04-12 08-49-16.png",
    ],
    featured: false,
    year: "2024",
    client: "Foxzai",
    duration: "3 weeks",
    liveUrl: "https://foxzai.com/",
    githubUrl: "",
    highlights: [
      { value: "React", label: "Landing stack" },
      { value: "Fast", label: "Core Web Vitals" },
      { value: "SEO", label: "Discoverability" },
    ],
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
  {
    id: "12",
    slug: "euro-collis-logistics",
    title: "Euro Collis – Logistics & Courier Booking Platform",
    category: "Logistics & Operations",
    tags: ["SaaS", "MVP", "Logistics", "Airtable", "Serverless"],
    shortDescription:
      "A logistics and courier booking platform MVP with quote comparison and automated workflows.",
    description:
      "A logistics and courier booking platform MVP. Allows customers to request shipment quotes, compare courier options, and initiate bookings through an interactive web interface. Integrates serverless APIs, Airtable for data storage, and Brevo/Make.com for automated email workflows. Structured to support future customer and courier portals with role-based access.",
    thumbnail:
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-23-29.png",
    images: [
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-23-44.png",
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-24-25.png",
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-24-31.png",
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-24-39.png",
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-25-19.png",
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-25-57.png",
      "/images/projects/euro-collis/Screenshot from 2026-04-12 08-26-12.png",
    ],
    featured: true,
    year: "2025",
    client: "Euro Collis",
    duration: "In Progress",
    liveUrl: "",
    githubUrl: "",
    highlights: [
      { value: "MVP", label: "Quote to booking" },
      { value: "Airtable", label: "Ops data" },
      { value: "Auto", label: "Email workflows" },
    ],
    techStack: ["Next.js", "React.js", "Airtable", "Brevo", "Serverless"],
    requirements: [
      "Customer shipment quote request system",
      "Courier comparison interface",
      "Booking initiation workflow",
      "Airtable integration for data management",
      "Automated email workflows via Brevo and Make.com",
      "Serverless API architecture",
      "Future-ready for customer and courier portals",
      "Role-based access control foundation",
    ],
    problemsFaced: [
      {
        title: "Serverless Architecture Design",
        description:
          "Designing a scalable serverless architecture that could handle quote requests and integrate with multiple third-party services.",
        solution:
          "Implemented API routes with Next.js serverless functions, using Airtable as a flexible database and Make.com for workflow automation.",
      },
      {
        title: "Email Automation Complexity",
        description:
          "Managing complex email workflows for quote requests, confirmations, and notifications across different user roles.",
        solution:
          "Leveraged Brevo for transactional emails and Make.com for advanced workflow automation with conditional logic and multi-step processes.",
      },
    ],
  },
  {
    id: "14",
    slug: "liveleanforlongevity-calculators",
    title: "LiveLeanForLongevity – Health & Longevity Assessment Tools",
    category: "Health & Wellness",
    tags: ["JavaScript", "Health Calculators", "VO₂ Max", "Biological Age"],
    shortDescription:
      "Custom JavaScript health calculators for VO₂ Max and biological age assessment.",
    description:
      "Custom JavaScript health calculators integrated into a health and lifestyle coaching platform. Built a VO₂ Max (1-Mile Walk Test) calculator and a Longevity / Biological Age tracker using validated fitness formulas. Transforms user inputs into meaningful health insights.",
    thumbnail: "/images/projects/liveleanforlongevity/Screenshot from 2026-04-12 09-07-52.png",
    images: [
      "/images/projects/liveleanforlongevity/Screenshot from 2026-04-12 09-05-23.png",
      "/images/projects/liveleanforlongevity/Screenshot from 2026-04-12 09-05-29.png",
      "/images/projects/liveleanforlongevity/Screenshot from 2026-04-12 09-06-25.png",
      "/images/projects/liveleanforlongevity/Screenshot from 2026-04-12 09-06-38.png",
      "/images/projects/liveleanforlongevity/Screenshot from 2026-04-12 09-07-58.png",
    ],
    featured: false,
    year: "2024",
    client: "LiveLeanForLongevity",
    duration: "Completed",
    liveUrl: "https://liveleanforlongevity.com/",
    githubUrl: "",
    highlights: [
      { value: "VO₂", label: "Walk test calc" },
      { value: "Age", label: "Biological tracker" },
      { value: "JS", label: "Client-side logic" },
    ],
    techStack: ["JavaScript", "Custom Web Calculators", "Health Data Modeling"],
    requirements: [
      "VO₂ Max calculator using 1-Mile Walk Test formula",
      "Biological Age / Longevity tracker",
      "Validated fitness and health formulas",
      "User-friendly input interface",
      "Clear health insights and results display",
      "Mobile-responsive design",
      "Integration with existing platform",
    ],
    problemsFaced: [
      {
        title: "Formula Accuracy and Validation",
        description:
          "Implementing medically accurate VO₂ Max and biological age calculations required extensive research and validation.",
        solution:
          "Researched peer-reviewed medical literature for validated formulas, implemented comprehensive input validation, and tested against known benchmarks.",
      },
      {
        title: "User Input Handling",
        description:
          "Managing various user inputs (age, weight, time, heart rate) with proper validation and error handling.",
        solution:
          "Built robust input validation with real-time feedback, clear error messages, and sensible default values to guide users.",
      },
    ],
  },
];

export const visibleProjects = projects.filter((p) => !p.hidden);
