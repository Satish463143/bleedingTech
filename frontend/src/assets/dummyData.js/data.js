import {
  TrendingUp,
  Code,
  Smartphone,
  Search,
  Palette,
  Network,
  Target,
  Briefcase, Users, Clock, ThumbsUp, Megaphone,
  Globe,
} from "lucide-react";
import satish from '../image/satish.jpg'

const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      review:
        "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The results speak for themselves—our conversion rate increased by 340%.",
      rating: 5,
      category: "Web Development",
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "rgb(59, 130, 246, 0.4)",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      review:
        "Exceptional service from start to finish. The SEO strategy they implemented brought us to the first page of Google within 3 months. Our organic traffic has tripled, and we're seeing real business growth.",
      rating: 5,
      category: "SEO & Digital Marketing",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgb(168, 85, 247, 0.4)",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      review:
        "The mobile app they developed is not just functional—it's a work of art. User engagement is through the roof, and the app runs flawlessly across all devices. Truly world-class development.",
      rating: 5,
      category: "Mobile App Development",
      gradient: "from-green-500 to-emerald-400",
      glowColor: "rgb(34, 197, 94, 0.4)",
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO",
      company: "CloudScale Systems",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      review:
        "Their system architecture expertise is unmatched. They rebuilt our entire infrastructure for massive scale, and it handles millions of requests daily without breaking a sweat. Incredible engineering.",
      rating: 5,
      category: "System Architecture",
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgb(249, 115, 22, 0.4)",
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Brand Strategist",
      company: "Creative Minds Co.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      review:
        "The UI/UX design work is phenomenal. Our users love the new interface—it's intuitive, beautiful, and significantly improved our user satisfaction scores. Design meets function perfectly.",
      rating: 5,
      category: "UI/UX Design",
      gradient: "from-indigo-500 to-purple-500",
      glowColor: "rgb(99, 102, 241, 0.4)",
    },
  ];
  const clients = [
    {
      id: 1,
      name: "TechVision",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80",
      size: "large",
      cluster: 1,
      desktopPos: { top: "15%", left: "12%", rotate: -5 },
      color: "rgb(59, 130, 246, 0.5)",
    },
    {
      id: 2,
      name: "InnovateLabs",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=180&h=70&fit=crop&q=80",
      size: "medium",
      cluster: 1,
      desktopPos: { top: "35%", left: "8%", rotate: 3 },
      color: "rgb(139, 92, 246, 0.5)",
    },
    {
      id: 3,
      name: "CloudScale",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=190&h=75&fit=crop&q=80",
      size: "medium",
      cluster: 1,
      desktopPos: { top: "25%", left: "25%", rotate: -2 },
      color: "rgb(16, 185, 129, 0.5)",
    },
    {
      id: 4,
      name: "QuantumLeap",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=210&h=85&fit=crop&q=80",
      size: "large",
      cluster: 2,
      desktopPos: { top: "20%", left: "48%", rotate: 4 },
      color: "rgb(99, 102, 241, 0.5)",
    },
    {
      id: 5,
      name: "DataFlow",
      logo: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=170&h=65&fit=crop&q=80",
      size: "small",
      cluster: 2,
      desktopPos: { top: "42%", left: "52%", rotate: -4 },
      color: "rgb(245, 158, 11, 0.5)",
    },
    {
      id: 6,
      name: "SecureNet",
      logo: "https://images.unsplash.com/photo-1614064548237-7e91b1c73c7c?w=185&h=70&fit=crop&q=80",
      size: "medium",
      cluster: 2,
      desktopPos: { top: "38%", left: "38%", rotate: 2 },
      color: "rgb(239, 68, 68, 0.5)",
    },
    {
      id: 7,
      name: "FinTech Pro",
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=195&h=75&fit=crop&q=80",
      size: "medium",
      cluster: 3,
      desktopPos: { top: "18%", left: "72%", rotate: -3 },
      color: "rgb(20, 184, 166, 0.5)",
    },
    {
      id: 8,
      name: "MediaWave",
      logo: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=205&h=80&fit=crop&q=80",
      size: "large",
      cluster: 3,
      desktopPos: { top: "38%", left: "75%", rotate: 5 },
      color: "rgb(249, 115, 22, 0.5)",
    },
    {
      id: 9,
      name: "EcoSmart",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=180&h=68&fit=crop&q=80",
      size: "small",
      cluster: 3,
      desktopPos: { top: "32%", left: "88%", rotate: -2 },
      color: "rgb(34, 197, 94, 0.5)",
    },
    {
      id: 10,
      name: "HealthTech",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=190&h=72&fit=crop&q=80",
      size: "medium",
      cluster: 1,
      desktopPos: { top: "52%", left: "15%", rotate: 3 },
      color: "rgb(6, 182, 212, 0.5)",
    },
    {
      id: 11,
      name: "RetailFlow",
      logo: "https://images.unsplash.com/photo-1614064548237-7e91b1c73c7c?w=185&h=70&fit=crop&q=80",
      size: "small",
      cluster: 2,
      desktopPos: { top: "58%", left: "45%", rotate: -5 },
      color: "rgb(168, 85, 247, 0.5)",
    },
    {
      id: 12,
      name: "AI Dynamics",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=76&fit=crop&q=80",
      size: "medium",
      cluster: 3,
      desktopPos: { top: "55%", left: "78%", rotate: 4 },
      color: "rgb(236, 72, 153, 0.5)",
    },
  ];

  // Default FAQ data
const defaultFaqs = [
    {
      id: 1,
      question: "What services does Bleeding Tech provide?",
      answer:
        "We offer complete digital solutions including web/app development, WordPress development, SEO, UI/UX, system design, and digital marketing.",
      color: "rgb(59, 130, 246, 0.5)",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer:
        "Timeline depends on project size, but most websites take 2–4 weeks, while advanced systems may take longer.",
      color: "rgb(168, 85, 247, 0.5)",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      question: "Do you provide post-launch support or maintenance?",
      answer:
        "Yes. We offer ongoing maintenance, updates, security checks, and performance optimization.",
      color: "rgb(34, 197, 94, 0.5)",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      question: "Can you redesign or fix an existing website or app?",
      answer:
        "Absolutely. We can upgrade, redesign, or optimize your existing platform—whether custom-built or WordPress.",
      color: "rgb(249, 115, 22, 0.5)",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      id: 5,
      question: "What technologies do you use?",
      answer:
        "We work with MERN, React Native, WordPress, Node.js, and modern design tools to deliver optimized solutions.",
      color: "rgb(236, 72, 153, 0.5)",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      question: "How do I get started with Bleeding Tech?",
      answer:
        "Simply contact us with your requirements. We'll discuss your goals and create a custom plan or package that fits your needs.",
      color: "rgb(99, 102, 241, 0.5)",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];
  
  // Color palette for custom FAQs
  const faqColors = [
    { color: "rgb(59, 130, 246, 0.5)", gradient: "from-blue-500 to-cyan-400" },
    { color: "rgb(168, 85, 247, 0.5)", gradient: "from-purple-500 to-pink-500" },
    { color: "rgb(34, 197, 94, 0.5)", gradient: "from-green-500 to-emerald-400" },
    { color: "rgb(249, 115, 22, 0.5)", gradient: "from-orange-500 to-amber-400" },
    { color: "rgb(236, 72, 153, 0.5)", gradient: "from-pink-500 to-rose-500" },
    { color: "rgb(99, 102, 241, 0.5)", gradient: "from-indigo-500 to-purple-500" },
  ];
  // Dummy team data - will be replaced with API later
  const teamMembers = [
    {
      id: 1,
      name: "Satish Mahato",
      position: "CEO & Full-Stack Developer (MERN)",
      tagline: `A MERN full-stack developer with 2+ years of experience, specializing in modern, scalable digital solutions. He leads Bleeding Tech’s technical direction and ensures high-quality product engineering.`,
      image: satish,
      color: "rgb(59, 130, 246, 0.5)",
      gradient: "from-blue-500 to-cyan-400",
      social: {
        linkedin: "https://www.linkedin.com/in/satish-mahato-233151257/",
        twitter: "#",
        github: "https://github.com/Satish463143",
        email: "mahatosatish463@gmail.com",
      },
    },
    {
      id: 2,
      name: "Sunil Budha",
      position: "Founder & WordPress Developer",
      tagline:`A skilled WordPress developer with 4+ years of experience, focused on building fast, optimized, and business-ready websites. He drives Bleeding Tech’s creative and strategic foundation.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "rgb(168, 85, 247, 0.5)",
      gradient: "from-purple-500 to-pink-500",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@example.com",
      },
    }
  ];

// Complete projects data with all details
const projects = [
  {
    id: 1,
    title: "Enterprise SaaS Platform",
    subtitle: "Complete Business Management Solution",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    description: "A comprehensive SaaS platform designed to streamline business operations with advanced analytics and automated workflows.",
    features: ["Real-time analytics dashboard", "Team collaboration tools", "Automated workflows", "Role-based access control", "API integrations"],
    achievements: ["Reduced operational costs by 35%", "Onboarded 10,000+ active users", "99.9% uptime since launch"],
    category: "Web Development",
    isFeatured: true,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgb(59, 130, 246, 0.4)",
    color: "rgb(59, 130, 246, 0.5)",
  },
  {
    id: 2,
    title: "Healthcare Telemedicine App",
    subtitle: "Connecting Patients with Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    tech: ["React Native", "Firebase", "WebRTC", "Node.js"],
    description: "Revolutionary telemedicine platform enabling virtual consultations and health monitoring for over 50,000 patients.",
    features: ["Video consultations", "Prescription management", "Health tracking", "Appointment booking", "Medical records"],
    achievements: ["50,000+ monthly active users", "4.8 star rating on app stores", "Reduced wait times by 60%"],
    category: "Mobile Apps",
    isFeatured: true,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-green-500 to-emerald-400",
    glowColor: "rgb(34, 197, 94, 0.4)",
    color: "rgb(34, 197, 94, 0.5)",
  },
  {
    id: 3,
    title: "FinTech Dashboard & Analytics",
    subtitle: "Advanced Financial Intelligence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["Next.js", "TypeScript", "D3.js", "Redis"],
    description: "Advanced financial analytics dashboard with real-time market data and AI-powered insights.",
    features: ["Real-time charts", "Portfolio analytics", "Risk assessment", "Predictive insights", "Export reports"],
    achievements: ["Processing $10M+ daily transactions", "Sub-100ms response times", "Enterprise-grade security"],
    category: "Web Development",
    isFeatured: false,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgb(168, 85, 247, 0.4)",
    color: "rgb(168, 85, 247, 0.5)",
  },
  {
    id: 4,
    title: "Luxury E-Commerce Experience",
    subtitle: "Premium Online Shopping Platform",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tech: ["Next.js", "Shopify", "TailwindCSS", "Stripe"],
    description: "High-end e-commerce platform with AR try-on features and personalized recommendations.",
    features: ["AR try-on", "Size recommendation", "Wishlist sync", "Personalized suggestions", "Express checkout"],
    achievements: ["45% increase in conversions", "$2M+ monthly transactions", "Average order value up 30%"],
    category: "E-commerce",
    isFeatured: true,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgb(168, 85, 247, 0.4)",
    color: "rgb(168, 85, 247, 0.5)",
  },
  {
    id: 5,
    title: "Restaurant Ordering System",
    subtitle: "Digital Dining Experience",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    description: "Digital menu and ordering system with table management and kitchen display integration.",
    features: ["QR code ordering", "Kitchen display", "Payment integration", "Table management", "Analytics dashboard"],
    achievements: ["Reduced order errors by 80%", "25% faster table turnover", "Deployed in 50+ restaurants"],
    category: "Custom Systems",
    isFeatured: false,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-orange-500 to-yellow-400",
    glowColor: "rgb(249, 115, 22, 0.4)",
    color: "rgb(249, 115, 22, 0.5)",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    subtitle: "Seamless Travel Experience",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
    description: "Mobile-first travel booking platform with flight, hotel, and activity reservations.",
    features: ["Multi-destination trips", "Price alerts", "Offline access", "Itinerary planner", "Local recommendations"],
    achievements: ["100K+ app downloads", "4.6 star rating", "20% repeat booking rate"],
    category: "Mobile Apps",
    isFeatured: false,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgb(236, 72, 153, 0.4)",
    color: "rgb(236, 72, 153, 0.5)",
  },
  {
    id: 7,
    title: "Brand Identity System",
    subtitle: "Complete Visual Identity",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    tech: ["Figma", "Illustrator", "After Effects"],
    description: "Complete brand identity design including logo, style guide, and digital asset library.",
    features: ["Logo design", "Style guide", "Motion graphics", "Brand assets", "Social templates"],
    achievements: ["Brand recognition up 60%", "Consistent cross-platform presence", "Award-winning design"],
    category: "UI/UX",
    isFeatured: false,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-teal-500 to-cyan-400",
    glowColor: "rgb(20, 184, 166, 0.4)",
    color: "rgb(20, 184, 166, 0.5)",
  },
  {
    id: 8,
    title: "Inventory Management System",
    subtitle: "Enterprise Inventory Control",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MySQL", "Docker"],
    description: "Enterprise-grade inventory management with barcode scanning and multi-warehouse support.",
    features: ["Barcode scanning", "Auto-reorder", "Multi-location", "Real-time sync", "Reporting tools"],
    achievements: ["Reduced stockouts by 90%", "30% inventory cost savings", "Managing 100K+ SKUs"],
    category: "Custom Systems",
    isFeatured: false,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-red-500 to-orange-500",
    glowColor: "rgb(239, 68, 68, 0.4)",
    color: "rgb(239, 68, 68, 0.5)",
  },
  {
    id: 9,
    title: "Fashion E-commerce Store",
    subtitle: "Modern Shopping Experience",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tech: ["Next.js", "Shopify", "TailwindCSS", "AR.js"],
    description: "Luxury fashion e-commerce with AR try-on features and seamless checkout experience.",
    features: ["Virtual try-on", "Size recommendation", "Wishlist sync", "Express checkout", "Style suggestions"],
    achievements: ["40% higher engagement", "25% lower returns", "Seamless mobile experience"],
    category: "E-commerce",
    isFeatured: false,
    liveLink: "#",
    caseStudyLink: "#",
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgb(139, 92, 246, 0.4)",
    color: "rgb(139, 92, 246, 0.5)",
  },
];
  // Dummy services data - will be replaced with API later
// Complete services data with all details
const services = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Digital Marketing & Growth Strategy",
    description: "Data-driven campaigns that scale your brand reach, boost conversions, and accelerate revenue growth.",
    fullDesc: "We craft comprehensive digital marketing strategies that combine creativity with analytics. Our team specializes in multi-channel campaigns, content marketing, email automation, and conversion rate optimization to deliver measurable results and sustainable growth.",
    features: [
      "Social Media Marketing & Management",
      "Content Strategy & Brand Storytelling",
      "Email Marketing & Automation",
      "Analytics & Performance Tracking",
      "Conversion Rate Optimization",
      "Marketing Funnel Development",
    ],
    gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))]",
    glowColor: "hsl(var(--primary) / 0.4)",
    color: "rgb(59, 130, 246, 0.5)",
  },
  {
    id: 2,
    icon: Code,
    title: "Web Development & Optimization",
    description: "High-performance web solutions with modern frameworks, seamless integrations, and continuous optimization.",
    fullDesc: "From responsive websites to complex web applications, we build digital experiences that captivate users and drive conversions. Our development process emphasizes clean code, optimal performance, and scalable architecture using cutting-edge technologies.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions & Platforms",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "WordPress & CMS Development",
      "Performance Optimization & Speed",
    ],
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgb(59, 130, 246, 0.4)",
    color: "rgb(59, 130, 246, 0.5)",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native & cross-platform mobile apps designed for scalability, performance, and exceptional user engagement.",
    fullDesc: "We create mobile applications that users love. Whether you need a native iOS/Android app or a cross-platform solution, our team delivers intuitive, high-performance mobile experiences that keep users engaged and coming back.",
    features: [
      "iOS & Android Native Development",
      "React Native Cross-Platform Apps",
      "Flutter App Development",
      "App Store Optimization (ASO)",
      "Push Notifications & Engagement",
      "Mobile App Maintenance & Updates",
    ],
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgb(168, 85, 247, 0.4)",
    color: "rgb(168, 85, 247, 0.5)",
  },
  {
    id: 4,
    icon: Search,
    title: "SEO & Performance Ranking",
    description: "Advanced SEO strategies that dominate search rankings, drive organic traffic, and maximize visibility.",
    fullDesc: "Our SEO experts use proven techniques and the latest algorithms to improve your search visibility. We focus on sustainable, white-hat strategies that build long-term organic traffic and establish your authority in search results.",
    features: [
      "Technical SEO & Site Audits",
      "On-Page & Off-Page Optimization",
      "Keyword Research & Strategy",
      "Local SEO & Google Business",
      "Link Building & Outreach",
      "SEO Analytics & Reporting",
    ],
    gradient: "from-green-500 to-emerald-400",
    glowColor: "rgb(34, 197, 94, 0.4)",
    color: "rgb(34, 197, 94, 0.5)",
  },
  {
    id: 5,
    icon: Palette,
    title: "UI/UX Design & Product Experience",
    description: "Stunning, intuitive interfaces crafted with user psychology, brand identity, and conversion optimization.",
    fullDesc: "Great design is invisible—it just works. Our design team creates user experiences that feel natural and delightful. We combine aesthetic excellence with user research to craft interfaces that convert visitors into loyal customers.",
    features: [
      "User Interface (UI) Design",
      "User Experience (UX) Research",
      "Wireframing & Prototyping",
      "Design Systems & Style Guides",
      "Interaction & Motion Design",
      "Usability Testing & Iteration",
    ],
    gradient: "from-orange-500 to-yellow-400",
    glowColor: "rgb(249, 115, 22, 0.4)",
    color: "rgb(249, 115, 22, 0.5)",
  },
  {
    id: 6,
    icon: Network,
    title: "System Architecture & Custom Development",
    description: "Robust, scalable infrastructure and custom-built solutions engineered for mission-critical applications.",
    fullDesc: "We architect systems that scale effortlessly and perform reliably under any load. Our engineers design and implement custom solutions using microservices, cloud-native technologies, and best-in-class DevOps practices.",
    features: [
      "Cloud Architecture (AWS, GCP, Azure)",
      "Microservices & API Design",
      "Database Design & Optimization",
      "DevOps & CI/CD Pipelines",
      "System Integration & Migration",
      "Security & Compliance Implementation",
    ],
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "rgb(99, 102, 241, 0.4)",
    color: "rgb(99, 102, 241, 0.5)",
  },
  {
    id: 7,
    icon: Target,
    title: "Google & Meta Ads Management",
    description: "Precision-targeted ad campaigns optimized for maximum ROI, audience engagement, and brand awareness.",
    fullDesc: "Our paid advertising specialists create and manage campaigns that deliver real results. We leverage advanced targeting, A/B testing, and continuous optimization to maximize your advertising budget and achieve your business goals.",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook & Instagram)",
      "YouTube & Video Advertising",
      "Remarketing & Retargeting Campaigns",
      "Landing Page Optimization",
      "ROI Tracking & Attribution",
    ],
    gradient: "from-red-500 to-pink-500",
    glowColor: "rgb(239, 68, 68, 0.4)",
    color: "rgb(239, 68, 68, 0.5)",
  },
];

  const stats = [
    {
      icon: Briefcase,
      value: 20,
      suffix: "+",
      label: "Projects Delivered",
      color: "rgb(59, 130, 246)",
    },
    {
      icon: Users,
      value: 10,
      suffix: "+",
      label: "Clients Served",
      color: "rgb(34, 197, 94)",
    },
    {
      icon: Clock,
      value: 6,
      suffix: "+",
      label: "Years Combined Experience",
      color: "rgb(168, 85, 247)",
    },
    {
      icon: ThumbsUp,
      value: 95,
      suffix: "%",
      label: "Client Satisfaction",
      color: "rgb(249, 115, 22)",
    },
  ];
// Complete blog data - will be replaced with API
const blogs = [
  {
    id: 1,
    slug: "how-to-scale-your-business-with-digital-transformation",
    title: "How to Scale Your Business with Digital Transformation",
    subtitle: "A strategic guide for modern enterprises",
    excerpt: "Discover proven strategies for leveraging technology to accelerate growth, streamline operations, and stay ahead of the competition in today's digital-first world.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop",
    category: "Business",
    tags: ["Digital Transformation", "Business Strategy", "Technology", "Growth"],
    date: "Dec 8, 2024",
    readTime: "8 min read",
    views: 1250,
    likes: 89,
    isFeatured: false,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://ui-avatars.com/api/?name=SM&background=3B82F6&color=fff&size=100",
      role: "Digital Strategy Lead",
      bio: "Sarah is a digital transformation expert with over 10 years of experience helping businesses leverage technology for growth.",
    },
    content: `
      <h2>Understanding Digital Transformation</h2>
      <p>Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your business operates and delivers value to customers. In today's rapidly evolving market, businesses that fail to embrace digital transformation risk being left behind.</p>
      
      <p>The key to successful digital transformation lies in understanding that it's a journey, not a destination. It requires a strategic approach that aligns technology investments with business objectives, while also fostering a culture of innovation and continuous improvement.</p>
      
      <h2>Key Pillars of Digital Transformation</h2>
      
      <h3>1. Customer Experience</h3>
      <p>Modern customers expect seamless, personalized experiences across all touchpoints. Digital transformation enables businesses to collect and analyze customer data, understand preferences, and deliver tailored experiences that drive loyalty and growth.</p>
      
      <h3>2. Operational Efficiency</h3>
      <p>Automation and AI-powered solutions can significantly streamline operations, reduce costs, and improve accuracy. From automated customer service to intelligent supply chain management, the opportunities are vast.</p>
      
      <h3>3. Business Model Innovation</h3>
      <p>Digital technologies open doors to entirely new business models. Subscription services, platform economies, and data monetization are just a few examples of how digital transformation can create new revenue streams.</p>
      
      <h3>4. Workforce Enablement</h3>
      <p>Equipping your team with the right digital tools and skills is crucial. This includes not only technology training but also fostering a mindset of adaptability and continuous learning.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successful digital transformation requires a structured approach:</p>
      
      <ul>
        <li><strong>Assess Your Current State:</strong> Understand where you are today in terms of digital maturity.</li>
        <li><strong>Define Your Vision:</strong> Clearly articulate what digital transformation means for your business.</li>
        <li><strong>Prioritize Initiatives:</strong> Focus on high-impact, achievable projects first.</li>
        <li><strong>Build the Right Team:</strong> Combine internal talent with external expertise.</li>
        <li><strong>Measure and Iterate:</strong> Continuously track progress and adjust your approach.</li>
      </ul>
      
      <h2>Common Challenges and How to Overcome Them</h2>
      <p>Digital transformation isn't without its challenges. Resistance to change, legacy systems, and skill gaps are common obstacles. However, with the right leadership, clear communication, and a patient, systematic approach, these challenges can be overcome.</p>
      
      <blockquote>
        "The only way to win at digital transformation is to out-experiment and out-learn your competition."
      </blockquote>
      
      <h2>Conclusion</h2>
      <p>Digital transformation is not optional—it's imperative for survival and growth in today's business landscape. By taking a strategic, customer-centric approach and investing in the right technologies and talent, your business can not only adapt to the digital age but thrive in it.</p>
    `,
  },
  {
    id: 2,
    slug: "the-future-of-web-development-trends-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    subtitle: "Emerging technologies shaping the web",
    excerpt: "From AI-powered development to edge computing, explore the technologies that will shape the web development landscape in the coming year.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=600&fit=crop",
    category: "Technology",
    tags: ["Web Development", "AI", "Edge Computing", "2025 Trends"],
    date: "Dec 5, 2024",
    readTime: "6 min read",
    views: 2340,
    likes: 156,
    isFeatured: false,
    author: {
      name: "Alex Thompson",
      avatar: "https://ui-avatars.com/api/?name=AT&background=8B5CF6&color=fff&size=100",
      role: "Lead Developer",
      bio: "Alex is a full-stack developer passionate about emerging technologies and their impact on web development.",
    },
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development continues to evolve at a rapid pace. As we look ahead to 2025, several key trends are emerging that will shape how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing the development process itself. From code completion to automated testing, AI tools are making developers more productive than ever. Tools like GitHub Copilot and ChatGPT are just the beginning of this transformation.</p>
      
      <h2>Edge Computing and Performance</h2>
      <p>With the rise of edge computing, web applications can now process data closer to users, resulting in faster load times and better user experiences. Edge functions and distributed computing are becoming essential for modern web apps.</p>
      
      <h2>WebAssembly and Beyond</h2>
      <p>WebAssembly continues to mature, enabling high-performance applications that were previously impossible in the browser. From video editing to 3D rendering, WASM is opening new frontiers for web applications.</p>
      
      <h2>The Rise of Micro-Frontends</h2>
      <p>Large organizations are increasingly adopting micro-frontend architectures to scale their development teams and improve maintainability. This approach allows teams to work independently while delivering cohesive user experiences.</p>
      
      <h2>Server Components and Streaming</h2>
      <p>React Server Components and similar technologies are changing how we think about rendering. By streaming content from the server, we can achieve faster initial page loads while maintaining interactivity.</p>
      
      <h2>Conclusion</h2>
      <p>The web development landscape is more exciting than ever. By staying informed about these trends and continuously learning, developers can build better, faster, and more engaging web applications.</p>
    `,
  },
  {
    id: 3,
    slug: "mastering-ui-ux-design-principles",
    title: "Mastering UI/UX Design Principles for Better Conversions",
    subtitle: "Design psychology meets business goals",
    excerpt: "Learn how thoughtful design decisions can dramatically improve user engagement, reduce bounce rates, and boost your conversion metrics.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=600&fit=crop",
    category: "Design",
    tags: ["UI/UX", "Design", "Conversions", "User Experience"],
    date: "Dec 2, 2024",
    readTime: "10 min read",
    views: 1890,
    likes: 134,
    isFeatured: false,
    author: {
      name: "Emma Davis",
      avatar: "https://ui-avatars.com/api/?name=ED&background=EC4899&color=fff&size=100",
      role: "Senior UX Designer",
      bio: "Emma specializes in creating user-centered designs that drive business results and delight users.",
    },
    content: `
      <h2>The Psychology of Good Design</h2>
      <p>Great UI/UX design isn't just about making things look pretty—it's about understanding human psychology and creating interfaces that feel intuitive and effortless to use.</p>
      
      <h2>Key Design Principles</h2>
      <h3>Visual Hierarchy</h3>
      <p>Guide users' attention to what matters most through size, color, contrast, and positioning.</p>
      
      <h3>Consistency</h3>
      <p>Maintain consistent patterns throughout your interface to reduce cognitive load and build user confidence.</p>
      
      <h3>Feedback</h3>
      <p>Always provide clear feedback for user actions. Whether it's a button press or form submission, users need to know their action was received.</p>
      
      <h2>Conversion-Focused Design</h2>
      <p>Every design decision should support your business goals while serving user needs.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering UI/UX design is an ongoing journey. By focusing on user needs and applying proven principles, you can create designs that both delight users and drive conversions.</p>
    `,
  },
  {
    id: 4,
    slug: "building-scalable-mobile-apps",
    title: "Building Scalable Mobile Apps: Architecture Best Practices",
    subtitle: "From MVP to millions of users",
    excerpt: "A comprehensive guide to building mobile applications that can handle growth, from choosing the right architecture to implementing efficient data management.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=600&fit=crop",
    category: "Development",
    tags: ["Mobile Apps", "Architecture", "Scalability", "React Native"],
    date: "Nov 28, 2024",
    readTime: "12 min read",
    views: 980,
    likes: 67,
    isFeatured: false,
    author: {
      name: "James Wilson",
      avatar: "https://ui-avatars.com/api/?name=JW&background=10B981&color=fff&size=100",
      role: "Mobile Architect",
      bio: "James has built mobile apps used by millions of users and loves sharing his expertise in scalable architecture.",
    },
    content: `
      <h2>Planning for Scale from Day One</h2>
      <p>The best time to think about scalability is at the beginning of your project. While you don't need to over-engineer your MVP, making smart architectural decisions early can save significant time and resources later.</p>
      
      <h2>Choosing the Right Architecture</h2>
      <p>Whether you choose native development, React Native, or Flutter, the fundamental principles of scalable architecture remain the same.</p>
      
      <h2>State Management</h2>
      <p>As your app grows, state management becomes increasingly important. Choose a solution that fits your team's expertise and app complexity.</p>
      
      <h2>API Design and Data Management</h2>
      <p>Efficient API design and caching strategies are crucial for mobile app performance. Consider offline-first approaches for the best user experience.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable mobile apps requires thoughtful planning and disciplined execution. By following these best practices, you can build apps that grow with your user base.</p>
    `,
  },
  {
    id: 5,
    slug: "seo-strategies-that-actually-work",
    title: "SEO Strategies That Actually Work in 2024",
    subtitle: "Cut through the noise with proven tactics",
    excerpt: "Cut through the noise and focus on SEO tactics that deliver real results. From technical optimization to content strategy, here's what matters most.",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1400&h=600&fit=crop",
    category: "Marketing",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Growth"],
    date: "Nov 25, 2024",
    readTime: "9 min read",
    views: 3120,
    likes: 198,
    isFeatured: false,
    author: {
      name: "Michael Chen",
      avatar: "https://ui-avatars.com/api/?name=MC&background=F59E0B&color=fff&size=100",
      role: "SEO Specialist",
      bio: "Michael helps businesses achieve top search rankings through data-driven SEO strategies.",
    },
    content: `
      <h2>The SEO Landscape in 2024</h2>
      <p>SEO continues to evolve with search engine algorithm updates and changing user behaviors. Here's what's working now and what to focus on for sustainable results.</p>
      
      <h2>Technical SEO Fundamentals</h2>
      <p>Before focusing on content and links, ensure your technical foundation is solid. Core Web Vitals, mobile-friendliness, and site structure are non-negotiable.</p>
      
      <h2>Content That Ranks</h2>
      <p>Quality content that serves user intent is the foundation of modern SEO. Focus on expertise, authoritativeness, and trustworthiness (E-E-A-T).</p>
      
      <h2>Link Building in 2024</h2>
      <p>Quality over quantity remains the mantra for link building. Focus on earning links through valuable content and genuine relationships.</p>
      
      <h2>Conclusion</h2>
      <p>SEO success comes from consistent effort and adapting to changes. Focus on providing value to users, and rankings will follow.</p>
    `,
  },
  {
    id: 6,
    slug: "cloud-architecture-patterns-for-modern-apps",
    title: "Cloud Architecture Patterns for Modern Applications",
    subtitle: "Building resilient systems in the cloud",
    excerpt: "Explore cloud-native design patterns that help you build resilient, scalable, and cost-effective applications in AWS, Azure, or GCP.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=600&fit=crop",
    category: "Cloud",
    tags: ["Cloud", "AWS", "Architecture", "DevOps"],
    date: "Nov 20, 2024",
    readTime: "11 min read",
    views: 1560,
    likes: 102,
    isFeatured: false,
    author: {
      name: "David Park",
      avatar: "https://ui-avatars.com/api/?name=DP&background=6366F1&color=fff&size=100",
      role: "Cloud Architect",
      bio: "David designs cloud infrastructure for enterprise applications with a focus on reliability and cost optimization.",
    },
    content: `
      <h2>Cloud-Native Architecture</h2>
      <p>Cloud-native architecture is about more than just running your app in the cloud—it's about designing systems that fully leverage cloud capabilities for scalability, resilience, and efficiency.</p>
      
      <h2>Key Design Patterns</h2>
      <h3>Microservices</h3>
      <p>Break your application into smaller, independently deployable services that can scale and evolve independently.</p>
      
      <h3>Event-Driven Architecture</h3>
      <p>Use events to decouple services and enable asynchronous communication for better scalability and resilience.</p>
      
      <h3>Serverless</h3>
      <p>Leverage serverless computing for event-driven workloads to reduce operational overhead and optimize costs.</p>
      
      <h2>Conclusion</h2>
      <p>Choosing the right architecture patterns depends on your specific requirements. Start simple and evolve your architecture as your needs grow.</p>
    `,
  },
  {
    id: 7,
    slug: "complete-guide-to-building-modern-web-applications",
    title: "The Complete Guide to Building Modern Web Applications in 2024",
    subtitle: "From architecture decisions to deployment strategies",
    excerpt: "A comprehensive deep-dive into modern web development practices, covering everything from choosing the right tech stack to implementing scalable architectures. Learn how leading companies are building performant, maintainable applications that delight users and drive business growth.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=600&fit=crop",
    category: "Development",
    tags: ["Web Development", "Architecture", "Best Practices", "2024"],
    date: "Dec 10, 2024",
    readTime: "15 min read",
    views: 5420,
    likes: 342,
    isFeatured: true,
    author: {
      name: "Alex Thompson",
      avatar: "https://ui-avatars.com/api/?name=AT&background=3B82F6&color=fff&size=100",
      role: "Lead Developer",
      bio: "Alex is a full-stack developer with over 8 years of experience building scalable web applications for startups and enterprises.",
    },
    content: `
      <h2>Introduction to Modern Web Development</h2>
      <p>Building modern web applications requires a deep understanding of both frontend and backend technologies, as well as the ability to make informed architectural decisions that will scale with your business needs.</p>
      
      <h2>Choosing Your Tech Stack</h2>
      <p>The right tech stack depends on your team's expertise, project requirements, and long-term maintenance considerations. Here's what to consider for each layer of your application.</p>
      
      <h3>Frontend Frameworks</h3>
      <p>React, Vue, and Angular remain the dominant choices, but new frameworks like Svelte and Solid are gaining traction. Consider your team's familiarity and the ecosystem around each option.</p>
      
      <h3>Backend Technologies</h3>
      <p>Node.js continues to be popular for JavaScript teams, while Python (Django/FastAPI), Go, and Rust are excellent choices for specific use cases.</p>
      
      <h3>Database Selection</h3>
      <p>Choose between SQL and NoSQL based on your data structure and query patterns. PostgreSQL and MongoDB remain top choices in their respective categories.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Understanding different architectural patterns helps you make informed decisions about how to structure your application.</p>
      
      <h3>Monolith vs Microservices</h3>
      <p>Start with a modular monolith and migrate to microservices only when you have clear scaling needs. Premature decomposition often leads to unnecessary complexity.</p>
      
      <h3>API Design</h3>
      <p>RESTful APIs remain the standard, but GraphQL offers advantages for complex data requirements. Consider your use case and team expertise when choosing.</p>
      
      <h2>Performance Optimization</h2>
      <p>Performance is a feature. Users expect fast, responsive applications, and search engines reward speed with better rankings.</p>
      
      <h3>Frontend Performance</h3>
      <ul>
        <li>Code splitting and lazy loading</li>
        <li>Image optimization and modern formats</li>
        <li>Efficient state management</li>
        <li>Strategic caching</li>
      </ul>
      
      <h3>Backend Performance</h3>
      <ul>
        <li>Database query optimization</li>
        <li>Caching strategies (Redis, CDN)</li>
        <li>Async processing for heavy operations</li>
        <li>Connection pooling</li>
      </ul>
      
      <h2>Deployment and DevOps</h2>
      <p>Modern deployment practices ensure reliable, frequent releases with minimal downtime.</p>
      
      <h3>CI/CD Pipelines</h3>
      <p>Automate testing, building, and deployment to catch issues early and ship with confidence.</p>
      
      <h3>Infrastructure as Code</h3>
      <p>Use tools like Terraform or Pulumi to manage infrastructure declaratively and maintain consistency across environments.</p>
      
      <blockquote>
        "The best architecture is the one that allows you to defer as many decisions as possible while still delivering value to users."
      </blockquote>
      
      <h2>Security Best Practices</h2>
      <p>Security should be built into your application from the start, not bolted on afterward.</p>
      
      <ul>
        <li>Input validation and sanitization</li>
        <li>Authentication and authorization</li>
        <li>HTTPS everywhere</li>
        <li>Regular security audits</li>
        <li>Dependency scanning</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building modern web applications is a complex but rewarding endeavor. By focusing on solid fundamentals, making informed technology choices, and following best practices, you can build applications that scale, perform well, and delight users. Remember that the best architecture evolves with your needs—start simple, measure everything, and iterate based on real-world feedback.</p>
    `,
  },
];

// Package Data - Expanded with detailed features
const packageCategories = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Packages",
    icon: Megaphone,
    color: "rgb(59, 130, 246)",
    packages: [
      {
        tier: "Starter Growth",
        price: "Starting from $499/mo",
        description: "Perfect for small businesses starting their digital journey. Build your online presence with essential marketing tools.",
        features: [
          "8 Custom Social Media Posts/month",
          "Basic Marketing Strategy & Planning",
          "1 Platform Ads Setup (Facebook/Instagram)",
          "Basic Keyword Research (20 keywords)",
          "Monthly Performance Report",
          "Content Calendar Planning",
          "Basic Competitor Analysis",
          "Email Support",
        ],
        popular: false,
      },
      {
        tier: "Business Growth",
        price: "Starting from $999/mo",
        description: "Ideal for growing businesses seeking consistent online presence and measurable results across multiple platforms.",
        features: [
          "12–16 Custom Posts/month",
          "2 Platforms Ads Management",
          "On-Page SEO (5 Pages)",
          "Conversion Rate Optimization",
          "Monthly Strategy Review Call",
          "Social Media Community Management",
          "Google My Business Optimization",
          "A/B Testing for Ads",
          "Detailed Analytics Dashboard",
          "Bi-weekly Performance Reports",
        ],
        popular: true,
      },
      {
        tier: "Premium Growth",
        price: "Starting from $1,999/mo",
        description: "Comprehensive marketing solution for established brands looking to dominate their market and maximize ROI.",
        features: [
          "Full Social Media Management (All Platforms)",
          "3 Platforms Ads Management & Optimization",
          "Complete SEO (On-Page + Off-Page)",
          "Sales Funnel Design & Optimization",
          "Email Marketing Setup & Automation",
          "Influencer Outreach & Collaboration",
          "Video Content Creation (2/month)",
          "Landing Page Optimization",
          "Weekly Strategy Calls",
          "Dedicated Account Manager",
          "Custom Analytics & Reporting",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development Packages",
    icon: Globe,
    color: "rgb(34, 197, 94)",
    packages: [
      {
        tier: "Basic Website",
        price: "Starting from $1,499",
        description: "Essential web presence for startups and small businesses. Get online quickly with a professional, responsive website.",
        features: [
          "5–7 Custom Designed Pages",
          "Fully Responsive Design (Mobile + Desktop)",
          "Modern UI/UX Design",
          "Contact Form with Email Notifications",
          "Basic On-Page SEO Setup",
          "Social Media Integration",
          "Google Analytics Setup",
          "SSL Certificate (HTTPS)",
          "1 Month Free Maintenance",
          "Basic Speed Optimization",
        ],
        popular: false,
      },
      {
        tier: "Professional Website",
        price: "Starting from $3,499",
        description: "Feature-rich website with custom design, CMS integration, and advanced functionality for growing businesses.",
        features: [
          "10–15 Custom Designed Pages",
          "Premium Custom UI/UX Design",
          "CMS Integration (WordPress/Custom)",
          "Blog System with Categories",
          "Advanced Speed Optimization",
          "Complete On-Page SEO",
          "Newsletter Integration",
          "Live Chat Integration",
          "Multi-language Support",
          "Custom Animations & Interactions",
          "3 Months Free Maintenance",
          "Training & Documentation",
        ],
        popular: true,
      },
      {
        tier: "E-Commerce Solution",
        price: "Starting from $5,999",
        description: "Complete online store with all essential features to start selling online and grow your e-commerce business.",
        features: [
          "Unlimited Product Listings",
          "Advanced Product Management",
          "Shopping Cart & Secure Checkout",
          "Multiple Payment Gateways",
          "Inventory Management System",
          "Order Tracking & Notifications",
          "Customer Account Dashboard",
          "Discount & Coupon System",
          "Product Reviews & Ratings",
          "Analytics & Sales Dashboard",
          "Email Marketing Integration",
          "6 Months Free Maintenance",
          "Staff Training Sessions",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Packages",
    icon: Smartphone,
    color: "rgb(168, 85, 247)",
    packages: [
      {
        tier: "MVP App",
        price: "Starting from $4,999",
        description: "Launch your minimum viable product quickly. Perfect for validating your idea and getting early user feedback.",
        features: [
          "iOS or Android Platform",
          "User Authentication System",
          "Up to 5 Core Features",
          "Basic Admin Panel",
          "Clean, Functional UI Design",
          "Basic Push Notifications",
          "App Store Publishing Support",
          "1 Month Bug Fixes",
          "Basic Analytics Integration",
          "Documentation & Handover",
        ],
        popular: false,
      },
      {
        tier: "Professional App",
        price: "Starting from $9,999",
        description: "Full-featured mobile application for your business. Cross-platform solution with premium design and functionality.",
        features: [
          "iOS + Android (Cross-Platform)",
          "Premium UI/UX Design",
          "Unlimited Core Features",
          "Advanced Admin Dashboard",
          "Third-Party API Integrations",
          "Push Notifications System",
          "Real-time Database Sync",
          "In-App Payments Integration",
          "Advanced Analytics & Tracking",
          "Social Login Integration",
          "Offline Mode Capability",
          "3 Months Free Support",
          "App Store Optimization",
        ],
        popular: true,
      },
      {
        tier: "Enterprise App",
        price: "Custom Pricing",
        description: "Scalable enterprise-grade mobile solution with advanced security, custom architecture, and dedicated support.",
        features: [
          "Custom Architecture Design",
          "Multi-Platform Development",
          "Advanced Security Features",
          "Role-Based Access Control",
          "Offline-First Architecture",
          "Cloud Infrastructure Setup",
          "CI/CD Pipeline Setup",
          "Load Testing & Optimization",
          "White-Label Options",
          "Custom Integrations (ERP/CRM)",
          "Dedicated Development Team",
          "12 Months Premium Support",
          "SLA & Priority Response",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Packages",
    icon: Palette,
    color: "rgb(249, 115, 22)",
    packages: [
      {
        tier: "Starter Design",
        price: "Starting from $799",
        description: "Essential design foundations for your project. Get professional wireframes and layouts to kickstart your product.",
        features: [
          "User Research & Analysis",
          "Low-Fidelity Wireframes",
          "Basic Information Architecture",
          "Up to 5 Screen Designs",
          "1 Design Revision Round",
          "Design Handoff (Figma)",
          "Basic Style Guide",
          "Mobile-First Approach",
        ],
        popular: false,
      },
      {
        tier: "Professional Design",
        price: "Starting from $2,499",
        description: "Complete design system for web and mobile. Premium designs with interactive prototypes and comprehensive documentation.",
        features: [
          "In-Depth User Research",
          "Competitive Analysis",
          "User Personas & Journey Maps",
          "High-Fidelity Wireframes",
          "Up to 15 Screen Designs",
          "Interactive Prototypes (Figma)",
          "Mobile + Web Responsive Designs",
          "Complete UI Component Library",
          "3 Design Revision Rounds",
          "Design System Documentation",
          "Developer Handoff Support",
          "Micro-Interaction Designs",
        ],
        popular: true,
      },
      {
        tier: "Product Experience",
        price: "Starting from $4,999",
        description: "End-to-end product design and user experience. Transform your vision into a world-class digital product.",
        features: [
          "Comprehensive UX Research",
          "User Testing & Interviews",
          "Full Design System Creation",
          "User Journey Mapping",
          "Advanced Interaction Design",
          "Motion & Animation Design",
          "Unlimited Screen Designs",
          "Usability Testing (3 Rounds)",
          "A/B Testing Recommendations",
          "Accessibility Compliance (WCAG)",
          "Brand Identity Integration",
          "Unlimited Revisions",
          "Ongoing Design Consultation",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "seo",
    title: "SEO & Performance Packages",
    icon: Search,
    color: "rgb(236, 72, 153)",
    packages: [
      {
        tier: "Basic SEO",
        price: "Starting from $399/mo",
        description: "Essential SEO setup for small websites. Get found on Google with fundamental optimization and tracking.",
        features: [
          "5 Pages On-Page Optimization",
          "Meta Tags & Descriptions",
          "Keyword Research (30 Keywords)",
          "Google Search Console Setup",
          "Google Analytics Configuration",
          "XML Sitemap Creation",
          "Robots.txt Optimization",
          "Monthly Ranking Report",
          "Basic Technical SEO Audit",
        ],
        popular: false,
      },
      {
        tier: "Standard SEO",
        price: "Starting from $799/mo",
        description: "Comprehensive SEO for growing businesses. Improve rankings with technical optimization and quality backlinks.",
        features: [
          "10–15 Pages Optimization",
          "Advanced Technical SEO",
          "Quality Backlink Building (10/mo)",
          "Content Optimization & Strategy",
          "Local SEO Setup (GMB)",
          "Schema Markup Implementation",
          "Page Speed Optimization",
          "Mobile SEO Optimization",
          "Competitor Backlink Analysis",
          "Bi-Weekly Progress Reports",
          "Keyword Tracking Dashboard",
          "Content Recommendations",
        ],
        popular: true,
      },
      {
        tier: "Premium SEO",
        price: "Starting from $1,499/mo",
        description: "Full-scale SEO for maximum visibility. Dominate search results with advanced strategies and dedicated support.",
        features: [
          "Full Website SEO Optimization",
          "Advanced Competitor Analysis",
          "Premium Backlink Building (25/mo)",
          "Content Creation (4 Articles/mo)",
          "Video SEO Optimization",
          "E-commerce SEO (if applicable)",
          "International SEO Setup",
          "Conversion Rate Optimization",
          "Weekly Performance Reports",
          "Custom Analytics Dashboard",
          "Dedicated SEO Specialist",
          "Monthly Strategy Calls",
          "Google Penalty Recovery",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "custom-dev",
    title: "Custom Development",
    icon: Code,
    color: "rgb(20, 184, 166)",
    packages: [
      {
        tier: "Custom Architecture",
        price: "Contact for Quote",
        description: "Tailored solutions for unique business requirements. Build exactly what you need with our expert development team.",
        features: [
          "Custom Backend Development",
          "RESTful API Development",
          "GraphQL Implementation",
          "Admin Dashboards & Portals",
          "Third-Party Integrations",
          "Database Design & Optimization",
          "Microservices Architecture",
          "Cloud Deployment (AWS/GCP/Azure)",
          "CI/CD Pipeline Setup",
          "Security Implementation",
          "Performance Optimization",
          "Documentation & Training",
          "Dedicated Project Manager",
          "Flexible Engagement Models",
        ],
        popular: false,
        isCustom: true,
      },
    ],
  },
];

// Sample case study data - will be replaced with API
const caseStudies = [
  {
    id: 1,
    slug: "ecommerce-growth-strategy",
    projectName: "E-Commerce Growth Strategy",
    companyName: "TechMart Solutions",
    logo: "https://ui-avatars.com/api/?name=TM&background=3B82F6&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    tagline: "300% revenue increase through strategic digital transformation",
    category: "E-Commerce",
    industry: "Retail Technology",
    duration: "6 months",
    teamSize: "8 specialists",
    year: "2024",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgb(59, 130, 246, 0.5)",
    overview: "TechMart Solutions, a mid-sized electronics retailer, was struggling with stagnant online sales and declining market share. Their outdated e-commerce platform was causing high cart abandonment rates and poor user experience.",
    challenge: ["Legacy e-commerce platform with poor mobile experience", "High cart abandonment rate of 78%", "Slow page load times affecting SEO rankings", "No personalization or recommendation engine", "Fragmented inventory management system"],
    solution: ["Built modern headless e-commerce architecture using Next.js and Shopify", "Implemented AI-powered product recommendations", "Created seamless mobile-first checkout experience", "Integrated real-time inventory sync across all channels", "Deployed advanced analytics and conversion tracking"],
    results: [
      { metric: "300%", label: "Revenue Increase" },
      { metric: "65%", label: "Cart Abandonment Reduced" },
      { metric: "2.5s", label: "Page Load Time" },
      { metric: "180%", label: "Mobile Conversions Up" },
    ],
    technologies: ["Next.js", "Shopify Plus", "Node.js", "AWS", "TailwindCSS", "Algolia"],
    testimonial: {
      quote: "Bleeding Tech transformed our entire digital presence. The new platform not only looks stunning but has dramatically improved our bottom line. Their expertise exceeded all expectations.",
      author: "Michael Chen",
      role: "CEO, TechMart Solutions",
      avatar: "https://ui-avatars.com/api/?name=MC&background=3B82F6&color=fff&size=60",
    },
  },
  {
    id: 2,
    slug: "saas-platform-redesign",
    projectName: "SaaS Platform Redesign",
    companyName: "CloudSync Pro",
    logo: "https://ui-avatars.com/api/?name=CS&background=8B5CF6&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    tagline: "User engagement up 180% with intuitive UI/UX overhaul",
    category: "SaaS",
    industry: "Cloud Technology",
    duration: "4 months",
    teamSize: "6 specialists",
    year: "2024",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgb(139, 92, 246, 0.5)",
    overview: "CloudSync Pro, a B2B cloud storage platform, was experiencing user churn due to complicated interface and lack of modern features. Competitors were gaining market share with more intuitive solutions.",
    challenge: ["Complex navigation causing user frustration", "High learning curve for new users", "Outdated visual design affecting brand perception", "Poor mobile responsiveness", "Lack of collaborative features users demanded"],
    solution: ["Complete UI/UX redesign based on extensive user research", "Implemented intuitive drag-and-drop interface", "Added real-time collaboration features", "Created comprehensive onboarding flow", "Built responsive design for all devices"],
    results: [
      { metric: "180%", label: "User Engagement Up" },
      { metric: "45%", label: "Churn Rate Reduced" },
      { metric: "92%", label: "User Satisfaction" },
      { metric: "3x", label: "Feature Adoption" },
    ],
    technologies: ["React", "TypeScript", "Figma", "Framer Motion", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The redesign was a game-changer. Our users love the new interface, and we've seen incredible improvements in all our key metrics. Bleeding Tech truly understood our vision.",
      author: "Sarah Johnson",
      role: "Product Director, CloudSync Pro",
      avatar: "https://ui-avatars.com/api/?name=SJ&background=8B5CF6&color=fff&size=60",
    },
  },
  {
    id: 3,
    slug: "fintech-mobile-app",
    projectName: "FinTech Mobile App",
    companyName: "PayFlow Finance",
    logo: "https://ui-avatars.com/api/?name=PF&background=10B981&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    tagline: "50K+ downloads in first month with seamless payment solution",
    category: "FinTech",
    industry: "Financial Technology",
    duration: "5 months",
    teamSize: "7 specialists",
    year: "2024",
    gradient: "from-green-500 to-emerald-400",
    glowColor: "rgb(34, 197, 94, 0.5)",
    overview: "PayFlow Finance needed a mobile application to compete in the digital payments space. They required a secure, fast, and user-friendly solution that could handle high transaction volumes while maintaining bank-level security.",
    challenge: ["Complex payment flows causing user drop-off", "Security concerns with sensitive financial data", "Need for real-time transaction processing", "Multi-currency and international payment support", "Regulatory compliance across different regions"],
    solution: ["Built native mobile app with React Native for cross-platform compatibility", "Implemented end-to-end encryption and biometric authentication", "Created intuitive payment flows with minimal steps", "Integrated with multiple payment gateways and banks", "Developed real-time transaction monitoring and fraud detection"],
    results: [
      { metric: "50K+", label: "Downloads (Month 1)" },
      { metric: "4.8", label: "App Store Rating" },
      { metric: "$2M+", label: "Monthly Transactions" },
      { metric: "99.9%", label: "Transaction Success Rate" },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe", "Plaid"],
    testimonial: {
      quote: "Bleeding Tech delivered a world-class mobile payment solution. The app is fast, secure, and our users love how simple it is. Our growth has exceeded all projections.",
      author: "David Park",
      role: "Founder, PayFlow Finance",
      avatar: "https://ui-avatars.com/api/?name=DP&background=10B981&color=fff&size=60",
    },
  },
  {
    id: 4,
    slug: "healthcare-portal",
    projectName: "Healthcare Portal",
    companyName: "MediCare Plus",
    logo: "https://ui-avatars.com/api/?name=MC&background=F59E0B&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
    tagline: "Patient satisfaction improved 95% with digital health platform",
    category: "Healthcare",
    industry: "Healthcare Technology",
    duration: "8 months",
    teamSize: "10 specialists",
    year: "2024",
    gradient: "from-orange-500 to-amber-400",
    glowColor: "rgb(245, 158, 11, 0.5)",
    overview: "MediCare Plus needed a comprehensive digital platform to connect patients with healthcare services, improve access, reduce wait times, and enhance patient experience while maintaining HIPAA compliance.",
    challenge: ["Fragmented patient management systems", "Long wait times for appointments", "Poor communication between patients and providers", "HIPAA compliance and data security requirements", "Integration with existing healthcare systems"],
    solution: ["Developed comprehensive patient portal with appointment scheduling", "Implemented telemedicine capabilities for virtual consultations", "Created secure messaging system for patient-provider communication", "Integrated with electronic health records (EHR) systems", "Built HIPAA-compliant infrastructure with end-to-end encryption"],
    results: [
      { metric: "95%", label: "Patient Satisfaction" },
      { metric: "60%", label: "Wait Time Reduced" },
      { metric: "40K+", label: "Active Users" },
      { metric: "15K+", label: "Virtual Consultations/Month" },
    ],
    technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AWS", "Docker"],
    testimonial: {
      quote: "The platform has revolutionized how we deliver healthcare services. Our patients love the convenience, and our providers are more efficient than ever.",
      author: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer, MediCare Plus",
      avatar: "https://ui-avatars.com/api/?name=ER&background=F59E0B&color=fff&size=60",
    },
  },
  {
    id: 5,
    slug: "real-estate-platform",
    projectName: "Real Estate Platform",
    companyName: "PropTech Homes",
    logo: "https://ui-avatars.com/api/?name=PT&background=EF4444&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    tagline: "Reduced property search time by 60% with AI recommendations",
    category: "Real Estate",
    industry: "PropTech",
    duration: "6 months",
    teamSize: "9 specialists",
    year: "2024",
    gradient: "from-red-500 to-pink-500",
    glowColor: "rgb(239, 68, 68, 0.5)",
    overview: "PropTech Homes wanted to disrupt the traditional real estate market with an AI-powered property search platform that could provide personalized recommendations and streamline the entire property buying process.",
    challenge: ["Overwhelming property listings causing decision fatigue", "Inefficient search and filtering capabilities", "Lack of virtual tour options", "Fragmented communication between buyers, sellers, and agents", "Complex mortgage and financing calculations"],
    solution: ["Developed AI-powered recommendation engine based on user preferences", "Implemented advanced search with map-based interface", "Added 360° virtual tours and AR visualization", "Created integrated messaging and scheduling system", "Built mortgage calculator and financing tools"],
    results: [
      { metric: "60%", label: "Search Time Reduced" },
      { metric: "3x", label: "User Engagement Up" },
      { metric: "85%", label: "Lead Quality Improved" },
      { metric: "25K+", label: "Monthly Active Users" },
    ],
    technologies: ["Next.js", "Python", "TensorFlow", "Mapbox", "AWS", "PostgreSQL"],
    testimonial: {
      quote: "Bleeding Tech created a platform that completely transformed how people search for properties. The AI recommendations are spot-on, and our conversion rates have never been higher.",
      author: "Jessica Williams",
      role: "CEO, PropTech Homes",
      avatar: "https://ui-avatars.com/api/?name=JW&background=EF4444&color=fff&size=60",
    },
  },
  {
    id: 6,
    slug: "edtech-learning-system",
    projectName: "EdTech Learning System",
    companyName: "LearnSphere",
    logo: "https://ui-avatars.com/api/?name=LS&background=6366F1&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop",
    tagline: "Achieved 40% higher course completion rates with gamification",
    category: "Education",
    industry: "EdTech",
    duration: "7 months",
    teamSize: "8 specialists",
    year: "2024",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgb(99, 102, 241, 0.5)",
    overview: "LearnSphere, an online learning platform, was facing low course completion rates and declining user engagement. They needed to make learning more interactive and motivating to compete in the crowded EdTech market.",
    challenge: ["Low course completion rate of 35%", "Passive learning experience causing disengagement", "Lack of progress tracking and motivation", "Limited interaction between students and instructors", "No mobile learning capabilities"],
    solution: ["Implemented gamification with points, badges, and leaderboards", "Created interactive video lessons with in-video quizzes", "Built progress tracking and personalized learning paths", "Added live chat and discussion forums", "Developed mobile apps for on-the-go learning"],
    results: [
      { metric: "40%", label: "Completion Rate Up" },
      { metric: "75%", label: "Course Completion Improved" },
      { metric: "200%", label: "Daily Active Users" },
      { metric: "4.7", label: "Platform Rating" },
    ],
    technologies: ["Vue.js", "Firebase", "WebRTC", "Flutter", "TailwindCSS", "Node.js"],
    testimonial: {
      quote: "The gamification features completely changed how our students engage with courses. Completion rates are through the roof, and students are loving the interactive experience.",
      author: "Alex Thompson",
      role: "Founder, LearnSphere",
      avatar: "https://ui-avatars.com/api/?name=AT&background=6366F1&color=fff&size=60",
    },
  },
];
const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "rgb(97, 218, 251, 0.5)",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "rgb(100, 100, 100, 0.5)",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "rgb(104, 160, 99, 0.5)",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "rgb(100, 100, 100, 0.5)",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "rgb(77, 179, 61, 0.5)",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "rgb(56, 189, 248, 0.5)",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "rgb(255, 196, 0, 0.5)",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    color: "rgb(255, 153, 0, 0.5)",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "rgb(240, 80, 51, 0.5)",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "rgb(162, 89, 255, 0.5)",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "rgb(49, 120, 198, 0.5)",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "rgb(51, 103, 145, 0.5)",
  },
];

export { 
  testimonials, 
  clients, 
  defaultFaqs,
   faqColors, 
   teamMembers,
    projects,
     services,
      stats,
       blogs,caseStudies,packageCategories,technologies };