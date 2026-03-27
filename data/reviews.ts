export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Luxe Fashion Co.",
    avatar: "",
    rating: 5,
    text: "Exceptional work on our e-commerce platform. The attention to detail and performance optimization exceeded our expectations. Sales increased by 40% within the first month of launch.",
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "CTO",
    company: "TaskFlow Inc.",
    avatar: "",
    rating: 5,
    text: "A truly talented developer who understands both the technical and business aspects. The real-time collaboration features work flawlessly, and the codebase is remarkably clean.",
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Product Manager",
    company: "FinVest Capital",
    avatar: "",
    rating: 5,
    text: "The dashboard they built handles millions of data points without breaking a sweat. Communication was excellent throughout the project, and every deadline was met.",
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Founder",
    company: "GreenLeaf Organics",
    avatar: "",
    rating: 5,
    text: "Our landing page went from a basic template to a conversion machine. The animations are smooth, the design is stunning, and our sign-up rate tripled. Highly recommended!",
  },
  {
    id: "5",
    name: "Aisha Patel",
    role: "VP Engineering",
    company: "PayUnify Corp.",
    avatar: "",
    rating: 5,
    text: "Building a PCI-compliant payment gateway is no small feat. The architecture is robust, well-documented, and handles edge cases we hadn't even considered. Outstanding work.",
  },
  {
    id: "6",
    name: "David Kim",
    role: "Head of Product",
    company: "HealthMate Technologies",
    avatar: "",
    rating: 5,
    text: "The mobile app exceeded every expectation. Cross-platform performance is excellent, and the health tracking features are intuitive and reliable. Our users love it.",
  },
];
