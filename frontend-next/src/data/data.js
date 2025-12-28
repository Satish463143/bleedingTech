import {
  TrendingUp,
  Code,
  Smartphone,
  Search,
  Palette,
  Network,
  Target,
  Briefcase, Users, Clock, ThumbsUp, Megaphone,
  Globe, AlertCircle, DollarSign, RefreshCw, Ban, CheckCircle, Award , FileText,
   Scale, Shield, Lock, Eye, Database, Mail,
} from "lucide-react";

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

const packageFaqs = [
  {
    question: "Which package is best for my business?",
    answer:
      "The best package depends on your current stage — whether you're building, growing, or optimizing. Our plans are structured to support startups, scaling businesses, and established brands. If you're unsure, we'll evaluate your goals and recommend the ideal fit.",
  },
  {
    question: "Can I customize a package based on my needs?",
    answer:
      "Yes. All packages are flexible. You can add, remove, or adjust services such as SEO, app development, ads management, or design. We also offer fully custom packages if your requirements are unique.",
  },
  {
    question: "Do you offer monthly or yearly billing options?",
    answer:
      "Yes. Packages can be billed monthly or annually. Yearly billing includes additional benefits such as priority support, discounted rates, and extended maintenance coverage.",
  },
  {
    question: "Are design, development, and marketing included together?",
    answer:
      "Some packages combine multiple services, while others focus on specific areas. Full-stack bundles (Web + App + SEO + Ads) are available for businesses wanting an all-in-one digital solution.",
  },
  {
    question: "What happens if I need more features later?",
    answer:
      "You can upgrade, downgrade, or extend your package anytime. As your business grows, we adjust your plan so it remains aligned with your goals and performance needs.",
  },
];

const serviceFaqs = [
  {
    question: "What services does Bleeding Tech provide?",
    answer:
      "Bleeding Tech provides web development, mobile app development, UI/UX design, SEO optimization, digital marketing, Google and Meta ads management, and custom system development such as billing and ERP solutions.",
  },
  {
    question: "What is the difference between a service package and a custom service?",
    answer:
      "A service package includes predefined features with fixed pricing, ideal for standard requirements. Custom services are tailored specifically to your business needs, integrations, scalability goals, and timeline.",
  },
  {
    question: "How long does a typical web or mobile app project take?",
    answer:
      "Project timelines depend on complexity. A basic website may take 1–3 weeks, while complex web or mobile applications can take 4–12 weeks or more, including design, development, testing, and deployment.",
  },
  {
    question: "Do you provide SEO and performance optimization with development?",
    answer:
      "Yes. We follow SEO-friendly development practices including clean code, fast load times, Core Web Vitals optimization, metadata setup, and optional ongoing SEO services.",
  },
  {
    question: "Can I combine multiple services into one package?",
    answer:
      "Absolutely. We offer bundled packages such as web development with SEO or digital marketing. You can also request a fully custom package based on your business goals and budget.",
  },
];

const termSections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: [
      {
        subtitle: "",
        text: "By accessing and using Bleeding Tech's services, website, or any related applications, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you (the 'Client') and Bleeding Tech. If you do not agree to these terms, please discontinue use of our services immediately. These terms apply to all users, clients, visitors, and anyone who accesses our services."
      }
    ]
  },
  {
    icon: Award,
    title: "2. Services Provided",
    content: [
      {
        subtitle: "2.1 Scope of Services",
        text: "Bleeding Tech provides comprehensive digital solutions including: Web Development (custom websites, e-commerce platforms, Progressive Web Apps, WordPress development), Mobile Application Development (iOS, Android, React Native, Flutter), UI/UX Design (interface design, user experience research, prototyping), SEO Optimization (technical SEO, on-page/off-page optimization, keyword research), Digital Marketing (content strategy, social media marketing, email marketing), Google & Meta Ads Management (campaign creation, optimization, performance tracking), System Architecture (cloud infrastructure, API development, microservices), and Custom Software Development (ERP systems, billing systems, custom integrations)."
      },
      {
        subtitle: "2.2 Service Agreements",
        text: "Specific project scope, deliverables, timelines, and pricing will be detailed in individual service agreements, proposals, or contracts. These documents supplement and work in conjunction with these general Terms and Conditions."
      }
    ]
  },
  {
    icon: DollarSign,
    title: "3. Payment Terms",
    content: [
      {
        subtitle: "3.1 Pricing and Invoicing",
        text: "All prices are quoted in USD unless otherwise specified. For project-based work, payment schedules will be outlined in the service agreement, typically structured as: 50% upfront deposit before project commencement, 25% upon reaching agreed milestones, and 25% upon project completion and client approval. For monthly services (SEO, digital marketing, maintenance), payment is due on the 1st of each month."
      },
      {
        subtitle: "3.2 Payment Methods",
        text: "We accept payments via bank transfer, credit/debit cards, PayPal, Stripe, and other agreed-upon payment methods. All payment processing fees are the responsibility of the client unless otherwise agreed."
      },
      {
        subtitle: "3.3 Late Payments",
        text: "Invoices are due within 15 days of issuance unless otherwise specified. Late payments may incur a fee of 2% per month on the outstanding balance. Bleeding Tech reserves the right to suspend services for accounts with overdue payments exceeding 30 days."
      },
      {
        subtitle: "3.4 Taxes",
        text: "All prices exclude applicable taxes unless explicitly stated. Clients are responsible for any sales tax, VAT, GST, or other taxes required by their jurisdiction."
      }
    ]
  },
  {
    icon: RefreshCw,
    title: "4. Project Timeline and Revisions",
    content: [
      {
        subtitle: "4.1 Timeline Commitments",
        text: "Project timelines are estimated based on the scope provided and assume timely client feedback and resource availability. Delays caused by late client feedback, scope changes, or third-party dependencies may extend delivery timelines."
      },
      {
        subtitle: "4.2 Revision Policy",
        text: "Each project includes a specified number of revision rounds as outlined in the service agreement. Standard projects typically include 2-3 revision rounds. Additional revisions beyond the agreed scope will be billed at our standard hourly rate. Revisions must be requested within 14 days of deliverable submission."
      },
      {
        subtitle: "4.3 Scope Changes",
        text: "Any changes to the original project scope, features, or requirements must be submitted in writing and may result in adjusted timelines and additional costs. We will provide a change order detailing the impact on budget and schedule."
      }
    ]
  },
  {
    icon: Scale,
    title: "5. Intellectual Property Rights",
    content: [
      {
        subtitle: "5.1 Client Ownership",
        text: "Upon full payment, clients receive ownership of the final deliverables, including custom code, designs, and content created specifically for their project. This transfer of ownership occurs only after all invoices have been paid in full."
      },
      {
        subtitle: "5.2 Bleeding Tech's Intellectual Property",
        text: "Bleeding Tech retains ownership of all pre-existing intellectual property, proprietary tools, frameworks, libraries, methodologies, and any reusable code components. Clients receive a license to use these elements as part of their delivered solution but do not own them."
      },
      {
        subtitle: "5.3 Third-Party Components",
        text: "Projects may include third-party libraries, plugins, fonts, or APIs subject to their respective licenses. Clients are responsible for compliance with these third-party licenses."
      },
      {
        subtitle: "5.4 Portfolio Rights",
        text: "Bleeding Tech reserves the right to showcase completed projects in our portfolio, case studies, and marketing materials unless a non-disclosure agreement specifies otherwise."
      }
    ]
  },
  {
    icon: CheckCircle,
    title: "6. Client Responsibilities",
    content: [
      {
        subtitle: "6.1 Information and Materials",
        text: "Clients must provide accurate information, content, brand assets, access credentials, and any materials necessary for project completion in a timely manner. Delays in providing required materials may impact project timelines."
      },
      {
        subtitle: "6.2 Content Accuracy",
        text: "Clients are responsible for the accuracy, legality, and copyright compliance of all content, images, and materials provided to Bleeding Tech. Clients warrant that they have the necessary rights and permissions for all materials supplied."
      },
      {
        subtitle: "6.3 Feedback and Communication",
        text: "Clients agree to provide timely feedback and responses to queries within agreed timeframes (typically 3-5 business days). Extended delays in client feedback may result in project pauses or timeline adjustments."
      },
      {
        subtitle: "6.4 Testing and Acceptance",
        text: "Clients are responsible for thoroughly testing deliverables and providing acceptance or detailed feedback within the specified review period (typically 7-14 days). Failure to provide feedback within this period will be considered implicit acceptance."
      }
    ]
  },
  {
    icon: AlertCircle,
    title: "7. Warranties and Limitations",
    content: [
      {
        subtitle: "7.1 Service Warranty",
        text: "Bleeding Tech warrants that services will be performed in a professional and workmanlike manner consistent with industry standards. We guarantee that deliverables will function as specified in the service agreement for 30 days after delivery (bug-fix period)."
      },
      {
        subtitle: "7.2 No Guarantee of Results",
        text: "While we strive for excellence, Bleeding Tech does not guarantee specific business outcomes, search engine rankings, traffic volumes, conversion rates, or revenue increases from SEO, digital marketing, or advertising services. Results depend on numerous factors beyond our control."
      },
      {
        subtitle: "7.3 Third-Party Services",
        text: "We are not responsible for the performance, availability, or changes to third-party services, APIs, platforms (Google, Facebook, payment processors), or hosting providers. Changes to third-party terms or discontinuation of services may affect project functionality."
      },
      {
        subtitle: "7.4 Limitation of Liability",
        text: "Bleeding Tech's total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim. We are not liable for indirect, consequential, special, or punitive damages including lost profits, data loss, or business interruption."
      }
    ]
  },
  {
    icon: Ban,
    title: "8. Termination and Cancellation",
    content: [
      {
        subtitle: "8.1 Client Termination",
        text: "Clients may terminate services with 30 days' written notice. For project-based work, termination will result in payment for all work completed up to the termination date plus any non-refundable expenses incurred. Deposits are non-refundable."
      },
      {
        subtitle: "8.2 Bleeding Tech Termination",
        text: "We reserve the right to terminate services immediately if: payment is overdue by more than 30 days, the client violates these Terms and Conditions, the client engages in abusive or threatening behavior toward our team, or the project involves illegal activities."
      },
      {
        subtitle: "8.3 Refund Policy",
        text: "Upfront deposits and payments for completed work are non-refundable. For monthly subscription services, refunds may be considered on a case-by-case basis within the first 14 days if no significant work has been delivered."
      },
      {
        subtitle: "8.4 Data and Materials",
        text: "Upon termination, Bleeding Tech will provide clients with all completed deliverables and client-provided materials within 30 days, subject to full payment of outstanding invoices."
      }
    ]
  },
  {
    icon: RefreshCw,
    title: "9. Maintenance and Support",
    content: [
      {
        subtitle: "9.1 Post-Launch Support",
        text: "Most projects include a 30-day bug-fix period after launch, during which we will address any technical issues or bugs at no additional cost. This does not include new features, design changes, or issues caused by client modifications."
      },
      {
        subtitle: "9.2 Ongoing Maintenance",
        text: "Ongoing maintenance and support services are available through monthly retainer agreements covering software updates, security patches, performance monitoring, backup management, and technical support."
      },
      {
        subtitle: "9.3 Emergency Support",
        text: "Emergency support outside of regular business hours may be available for clients with active maintenance agreements, subject to additional fees."
      }
    ]
  },
  {
    icon: Scale,
    title: "10. Confidentiality",
    content: [
      {
        subtitle: "",
        text: "Both parties agree to maintain confidentiality of proprietary information, business strategies, technical specifications, and sensitive data disclosed during the course of the engagement. This obligation continues for 3 years after the conclusion of services unless otherwise specified in a separate Non-Disclosure Agreement."
      }
    ]
  },
  {
    icon: AlertCircle,
    title: "11. Indemnification",
    content: [
      {
        subtitle: "",
        text: "Clients agree to indemnify and hold Bleeding Tech harmless from any claims, damages, losses, or expenses arising from: content provided by the client, client's use of deliverables, violation of third-party rights, or client's violation of applicable laws. Bleeding Tech will indemnify clients against claims that our original work infringes on third-party intellectual property rights."
      }
    ]
  },
  {
    icon: FileText,
    title: "12. Dispute Resolution",
    content: [
      {
        subtitle: "12.1 Good Faith Negotiation",
        text: "In the event of any dispute, both parties agree to first attempt resolution through good faith negotiation and direct communication."
      },
      {
        subtitle: "12.2 Mediation",
        text: "If negotiation fails, parties agree to mediation before pursuing legal action. Mediation costs will be shared equally between both parties."
      },
      {
        subtitle: "12.3 Governing Law",
        text: "These Terms and Conditions are governed by the laws of the jurisdiction where Bleeding Tech operates. Any legal proceedings will be conducted in the courts of that jurisdiction."
      }
    ]
  }
];

const privacySections = [
  {
    icon: FileText,
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "1.1 Personal Information",
        text: "When you engage with Bleeding Tech's services, we may collect personal information including but not limited to: full name, email address, phone number, company name, job title, billing address, and payment information. This information is collected when you submit inquiries, request quotes, sign contracts, or subscribe to our services."
      },
      {
        subtitle: "1.2 Technical Information",
        text: "We automatically collect certain technical data when you visit our website, including IP address, browser type and version, time zone settings, operating system and platform, device information, and cookie data. This helps us improve our website functionality and user experience."
      },
      {
        subtitle: "1.3 Project-Related Information",
        text: "For clients engaging our web development, mobile app development, UI/UX design, SEO optimization, or custom system development services, we collect project specifications, business requirements, content materials, brand assets, access credentials (when necessary), and analytics data related to your digital properties."
      }
    ]
  },
  {
    icon: Database,
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "2.1 Service Delivery",
        text: "We use your information to deliver our core services including web development, mobile application development, WordPress development, SEO optimization, digital marketing campaigns, UI/UX design, system architecture, and Google & Meta ads management. Your data enables us to understand your requirements, communicate effectively, and deliver customized solutions."
      },
      {
        subtitle: "2.2 Communication",
        text: "We use your contact information to send project updates, technical notifications, service-related announcements, respond to inquiries, provide customer support, and send promotional materials about our services (which you may opt out of at any time)."
      },
      {
        subtitle: "2.3 Analytics and Improvement",
        text: "We analyze usage data to improve our website performance, optimize user experience, develop new features and services, conduct research and analysis, and measure the effectiveness of our marketing campaigns and SEO strategies."
      },
      {
        subtitle: "2.4 Legal Compliance",
        text: "We may use your information to comply with legal obligations, enforce our terms and conditions, protect our rights and property, prevent fraud and abuse, and respond to legal requests from authorities."
      }
    ]
  },
  {
    icon: Lock,
    title: "3. Data Security and Protection",
    content: [
      {
        subtitle: "3.1 Security Measures",
        text: "Bleeding Tech implements industry-standard security measures to protect your personal information. We use SSL/TLS encryption for data transmission, secure cloud infrastructure (AWS/GCP/Azure), regular security audits and vulnerability assessments, access controls and authentication systems, encrypted database storage, and regular backups with disaster recovery protocols."
      },
      {
        subtitle: "3.2 Data Retention",
        text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. Client project data is typically retained for a minimum of 2 years after project completion for support and maintenance purposes."
      },
      {
        subtitle: "3.3 Third-Party Security",
        text: "When we engage third-party service providers (hosting services, payment processors, analytics tools, marketing platforms), we ensure they maintain appropriate security standards and comply with data protection regulations."
      }
    ]
  },
  {
    icon: Users,
    title: "4. Data Sharing and Disclosure",
    content: [
      {
        subtitle: "4.1 Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our business, including cloud hosting providers (AWS, GCP, Azure), payment processors (Stripe, PayPal), analytics services (Google Analytics), email service providers, and project management tools. These providers are contractually obligated to protect your data."
      },
      {
        subtitle: "4.2 Business Transfers",
        text: "In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our website of any such change in ownership or control of your personal information."
      },
      {
        subtitle: "4.3 Legal Requirements",
        text: "We may disclose your information if required by law, court order, or governmental regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to legal requests."
      },
      {
        subtitle: "4.4 No Sale of Data",
        text: "Bleeding Tech does not sell, rent, or trade your personal information to third parties for marketing purposes. Your data is used exclusively for providing our services and improving your experience with us."
      }
    ]
  },
  {
    icon: Eye,
    title: "5. Cookies and Tracking Technologies",
    content: [
      {
        subtitle: "5.1 Cookie Usage",
        text: "Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and personalize content. Cookies are small text files stored on your device that help us remember your preferences and improve website functionality."
      },
      {
        subtitle: "5.2 Types of Cookies",
        text: "We use essential cookies (necessary for website functionality), analytics cookies (Google Analytics for traffic analysis), functional cookies (remember your preferences), and marketing cookies (for retargeting campaigns). You can control cookie preferences through your browser settings."
      },
      {
        subtitle: "5.3 Third-Party Analytics",
        text: "We use Google Analytics, Google Tag Manager, and other analytics tools to understand how users interact with our website. These tools collect information anonymously and report website trends without identifying individual visitors."
      }
    ]
  },
  {
    icon: Globe,
    title: "6. Your Rights and Choices",
    content: [
      {
        subtitle: "6.1 Access and Correction",
        text: "You have the right to access, update, or correct your personal information at any time. Contact us at bleeding.tech77@gmail.com to request access to your data or make corrections."
      },
      {
        subtitle: "6.2 Data Deletion",
        text: "You may request deletion of your personal information, subject to legal and contractual obligations. We will respond to deletion requests within 30 days and permanently remove your data from our active systems."
      },
      {
        subtitle: "6.3 Marketing Opt-Out",
        text: "You can unsubscribe from our marketing communications at any time by clicking the 'unsubscribe' link in our emails or contacting us directly. Please note that you will continue to receive essential service-related communications."
      },
      {
        subtitle: "6.4 Cookie Management",
        text: "You can disable cookies through your browser settings, though this may affect website functionality. Most browsers allow you to refuse cookies or delete existing cookies."
      }
    ]
  },
  {
    icon: Shield,
    title: "7. Children's Privacy",
    content: [
      {
        subtitle: "",
        text: "Bleeding Tech's services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take immediate steps to delete that information from our servers."
      }
    ]
  },
  {
    icon: Mail,
    title: "8. International Data Transfers",
    content: [
      {
        subtitle: "",
        text: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your jurisdiction. We ensure appropriate safeguards are in place to protect your personal information in accordance with this privacy policy and applicable laws."
      }
    ]
  }
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
  caseStudies,
  packageCategories,
  technologies,
  packageFaqs,
  serviceFaqs,
  termSections,
  privacySections,
};