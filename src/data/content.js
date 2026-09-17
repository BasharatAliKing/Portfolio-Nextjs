import {
  Circle,
  CodeXml,
  Hexagon,
  Triangle,
  Code2,
  MonitorSmartphone,
  ServerCog,
  Database,
  CloudCog,
  BriefcaseBusiness,
} from "lucide-react";

export const trustedBy = [
  { name: "MERN Stack Apps", icon: Hexagon },
  { name: "Django Solutions", icon: Circle },
  { name: "Enterprise Systems", icon: Triangle },
  { name: "Cloud-Based Platforms", icon: CodeXml },
];

export const skills = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "Building scalable and responsive web applications using React.js, Next.js, Node.js, Express.js, Django, and Laravel.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    description:
      "Creating modern, user-friendly interfaces with HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and Material UI.",
  },
  {
    icon: ServerCog,
    title: "Backend Development",
    description:
      "Developing secure and high-performance server-side applications, REST APIs, authentication systems, and business logic.",
  },
  {
    icon: Database,
    title: "Database Design & Management",
    description:
      "Designing and managing efficient databases using MongoDB and PostgreSQL for scalable applications.",
  },
  {
    icon: CloudCog,
    title: "API Integration & Cloud Solutions",
    description:
      "Integrating third-party services, payment gateways, cloud storage, and external APIs to enhance application functionality.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Enterprise & Business Solutions",
    description:
      "Building management systems, inspection platforms, dashboards, and workflow automation tools for organizations.",
  },
];
export const projects = [
  {
    slug: "pmis",
    title: "PMIS",
    description: {
      overview:
        "A comprehensive Project Management Information System designed to centralize project operations, documents, financial and contractual records, progress tracking, and stakeholder information. I developed the complete frontend and integrated it with the Django REST APIs provided by the backend development team.",
      majorContributions: [
        "Developed the complete responsive frontend using React.js and Tailwind CSS.",
        "Built modules for Projects, MPR, Project Progress, LOI, Stakeholders, Work Orders, Control Estimates, Bank Guarantees, Monthly Invoice Logs, IPC, EOT, and related project records.",
        "Developed dashboards with KPIs, charts, statistics, filters, search, pagination, and data visualization.",
        "Integrated Django REST APIs and implemented authentication, protected routes, API data handling, and form workflows.",
        "Created reusable components, forms, tables, modals, dropdowns, and responsive layouts for maintainable frontend architecture.",
      ],
    },
    urlLabel: "Visit PMIS",
    bgColor: "bg-[#F5F2EC]",
    image: "/pmis.png",
    video: "/pmis.mp4",
    tags: [
      "PMIS project management system",
      "construction project management",
      "project information management",
      "document management platform",
      "project tracking system",
      "stakeholder management",
      "work order management",
      "real-time project dashboard",
    ],
    tech: [
      "React.js",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    slug: "progress-center",
    title: "Progress Center",
    description: {
      overview:
        "A centralized Construction Project Monitoring and Management Platform designed to track project progress, schedules, daily reporting, live site cameras, environmental conditions, milestones, and overall project performance in one platform.",

      majorContributions: [
        "Developed the frontend using React.js and Tailwind CSS and the backend using Node.js, Express.js, and MongoDB.",
        "Implemented project progress tracking, DPR, project schedules, milestones, timelapse visualization, and progress reporting modules.",
        "Integrated live construction-site cameras using Hikvision, RTMP, MediaMTX, FFmpeg, and HLS streaming.",
        "Developed AQI monitoring, AI-powered site monitoring, project dashboards, KPIs, meetings, and collaboration features.",
        "Implemented REST APIs, authentication, automated background jobs, file handling, database operations, and production deployment using Nginx and PM2.",
      ],
    },
    urlLabel: "Visit Progress Center",
    bgColor: "bg-[#E7FBF7]",
    image: "/progressCenter.png",
    video: "/progressCenter.mp4",

    tags: [
      "Project Management System",
      "Project Monitoring Platform",
      "Progress Tracking Dashboard",
      "Real-Time Project Monitoring",
      "Construction Project Management",
      "Project Performance Tracking",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "JWT Authenticatinon",
    ],
  },
  {
    slug: "dakk-system",
    title: "DAKK System",
    description: {
      overview:
        "A centralized DAKK Management System developed for NESPAK to digitize incoming and outgoing correspondence, manage scanned documents, generate official letters and memos, and provide secure document verification through QR codes.",

      majorContributions: [
        "Developed the complete frontend using React.js and backend using Node.js, Express.js, and MongoDB.",
        "Implemented DAKK receiving, registration, forwarding, correspondence tracking, scanned document management, and status workflows.",
        "Developed dynamic Letter and Memo generation using DOCX templates, Docxtemplater, PizZip, and PDF conversion.",
        "Implemented QR-code-based document verification with unique verification records and verification APIs.",
        "Implemented JWT authentication, file uploads, Zod validation, document preview, template management, and CRUD REST APIs.",
      ],
    },
    urlLabel: "Visit Platform",
    bgColor: "bg-[#1e1e24]",
    image: "/dakk.png",
    video: "/dakkSystem.mp4",
    tags: [
      "NESPAK DAK management system",
      "digital document management",
      "incoming and outgoing DAK tracking",
      "QR code document verification",
      "letter and memo management",
      "records management system",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    slug: "check-request-portal",
    title: "Check Request Portal",
    description: {
      overview:
        "A digital Check Request and inspection management portal designed to streamline inspection requests, approvals, communication, and tracking throughout the construction project lifecycle.",

      majorContributions: [
        "Developed the complete React.js frontend and Node.js, Express.js, and MongoDB backend.",
        "Implemented the complete inspection workflow between Contractors, Consultants, Inspectors, Surveyors, ME, ARE, and RE.",
        "Developed role-based authentication and authorization for different project stakeholders.",
        "Built KPI dashboards and statistics for tracking pending, received, approved, rejected, reverted, and expired requests.",
        "Implemented REST APIs, validation, project and contractor management, file handling, and automated request expiration using Node Cron.",
      ],
    },
    urlLabel: "Visit Check Request Portal",
    bgColor: "bg-[#173024]",
    image: "/ncrp.png",
    video: "/ncrp.mp4",
    tags: [
      "Check Request Management",
      "Construction Inspection Portal",
      "Engineering Management System",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    slug: "green-ceo",
    title: "Green CEO",
    description: {
      overview:
        "A full-stack environmental and sustainability platform focused on green initiatives, community engagement, events, membership, and dynamic organizational content. The platform includes both a public-facing website and an administrative dashboard for content management.",

      majorContributions: [
        "Developed the complete frontend using React.js, Tailwind CSS, React Router, and reusable UI components.",
        "Developed the Node.js, Express.js, and MongoDB backend with RESTful APIs and database models.",
        "Built the admin dashboard for managing CEOs, core members, events, homepage content, messages, memorable moments, and other website content.",
        "Implemented membership application workflows, media/file management, authentication, and protected admin routes.",
        "Integrated dynamic content management, CRUD operations, validation, and responsive UI across the platform.",
      ],
    },
    urlLabel: "Visit Website",
    bgColor: "bg-[#F5F2EC]",
    image: "/green.png",
    url: "https://super-kataifi-d89954.netlify.app/",
    tags: [
      "environmental services platform",
      "sustainability initiative",
      "green business website",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    slug: "saff-pani-inspection",
    title: "Saff Pani Inspection",
    description: {
      overview:
        "A Punjab Saaf Pani inspection and project monitoring system designed to manage plant inspections, BOQ verification, contractor bill evaluation, and payment-related workflows. The platform provides structured inspection records and project documentation for water infrastructure projects.",

      majorContributions: [
        "Developed the frontend using React.js and the backend using Django REST Framework with PostgreSQL.",
        "Implemented inspection site management with project, contractor, geographic, location, and inspection details.",
        "Developed BOQ and BOQ Bill management, quantity verification, inspection workflows, and project progress tracking.",
        "Implemented Third-Party Inspection workflows and TPV proformas including TPV-01, TPV-02, and TPV-02A.",
        "Developed REST APIs, authentication, role-based workflows, Excel-based BOQ data import, and database models.",
      ],
    },
    urlLabel: "Visit Website",
    bgColor: "bg-[#F5F2EC]",
    image: "/saffPani.png",
    video: "/saffPani.mp4",
    tags: [
      "PSPA inspection portal",
      "inspection management system",
      "contractor bill verification",
      "plant monitoring system",
      "site inspection",
    ],
    tech: [
      "React.js",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    slug: "air-punjab",
    title: "Air Punjab",
    description: {
      overview:
        "A modern airline web platform designed for Air Punjab, providing a seamless digital interface for flight booking, trip management, check-in, flight status, destinations, and cabin services. I developed the frontend using Next.js and Tailwind CSS.",

      majorContributions: [
        "Developed the complete frontend using Next.js and Tailwind CSS.",
        "Built responsive pages, layouts, navigation, and reusable components across the airline platform.",
        "Implemented interfaces for flight booking, trip management, check-in, flight status, destinations, and cabin services.",
        "Created interactive UI sections, animations, transitions, and user-friendly navigation.",
        "Optimized the frontend architecture for responsiveness, maintainability, and future API integration.",
      ],
    },
    urlLabel: "Visit Website",
    bgColor: "bg-[#F5F2EC]",
    image: "/air-punjab.png",
    url: "https://candid-cajeta-891d29.netlify.app/home",
    tags: [
      "Air Punjab website",
      "airline booking platform",
      "flight booking website",
      "aviation web application",
      "Punjab government airline",
      "airline management system",
      "travel booking platform",
      "flight status system",
      "responsive airline website",
    ],
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    slug: "ev-bus-monitoring",
    title: "EV Bus Monitoring",
    description: {
      overview:
        "A modern EV Bus Monitoring Dashboard designed to monitor and manage electric bus operations in Lahore, including real-time bus tracking, routes, trips, ridership, revenue, fleet performance, and vehicle health information.",

      majorContributions: [
        "Developed the complete monitoring dashboard using React.js and Tailwind CSS.",
        "Implemented real-time map visualization using Leaflet for bus locations, routes, stops, and individual bus tracking.",
        "Built modules for bus management, trip management, route management, contractors, revenue, mileage, and EV bus health.",
        "Integrated OpenRouteService through a Node.js and Express.js proxy for route calculation and secure API-key handling.",
        "Developed dashboards, charts, filters, time-based reports, authentication flows, and reusable UI components.",
      ],
    },
    urlLabel: "Visit Website",
    bgColor: "bg-[#F5F2EC]",
    image: "/ev-bus.png",
    video: "/monitoringBus.mp4",
    tags: [
      "EV bus monitoring system",
      "electric bus management",
      "smart transportation dashboard",
      "fleet monitoring platform",
      "real-time bus tracking",
      "electric vehicle dashboard",
      "public transport management",
      "bus fleet management system",
      "GPS bus tracking",
      "transportation monitoring system",
    ],
    tech: ["React.js", "Tailwind CSS"],
  },
];

export const blogs = [
  {
    slug: "coin-pocket-bilingual-crypto-wallet-blockchain-gateway",
    title: "Coin Pocket – Bilingual Crypto Wallet & Blockchain Gateway",
    excerpt:
      "Coin Pocket is a modern bilingual crypto wallet and blockchain gateway designed to deliver a seamless digital-asset experience in both English and Chinese. The platform enables users to manage multi-chain assets, explore DApps, browse blockchain applications, and manage tokens and NFTs through a clean, responsive interface. With multilingual support, mobile-first UI/UX, and availability across iOS and Android, the project combines accessibility, modern design, and blockchain functionality to create a user-friendly experience for a global audience.",
    category: "Web Development",
    image: "/coinPocket.png",
    url: "https://bdking-pocketcoin.netlify.app/",
  },
  {
    slug: "skt-gold-luxury-jewellery-ecommerce-website",
    title: "SKT Gold – Luxury Jewellery E-Commerce Website",
    excerpt:
      "**SKT Gold** is a modern and elegant jewellery e-commerce website designed to showcase premium jewellery collections with a luxurious and visually engaging shopping experience. The website features dedicated sections for earrings, necklaces, rings, diamond jewellery, platinum collections, new arrivals, daily deals, and featured products. With a clean layout, high-quality product imagery, promotional banners, category browsing, latest news, newsletter subscription, and responsive design, the platform provides jewellery customers with an attractive and seamless online shopping experience.",
    category: "Startups",
    image: "/sktGold.png",
    url: "https://bdking-jewellery.netlify.app/",
  },
  {
    slug: "bakery-blocks-modern-bakery-website",
    title: "Bakery Blocks – Modern Bakery Website",
    excerpt:
      "**Bakery Blocks** is a warm and visually engaging bakery website designed to showcase fresh breads, pastries, sandwiches, cakes, and coffee through a delightful digital experience. The website features dedicated sections for breakfast, pastries, sandwiches, coffee, featured bakery products, creative recipes, bakery storytelling, team members, testimonials, and blog content. With appetizing food imagery, a warm cream and brown color palette, clear navigation, responsive layouts, promotional sections, and strong visual hierarchy, the platform provides bakery customers with an inviting and seamless browsing experience.",
    category: "Food & Beverage",
    image: "/backery.png",
    url: "https://bdking-backery.netlify.app/",
  },
  {
    slug: "pet-care-modern-pet-services-website",
    title: "Pet.Care – Modern Pet Care & Services Website",
    excerpt:
      "**Pet.Care** is a modern and friendly pet care website designed to provide pet owners with a warm, trustworthy, and engaging digital experience. The website features dedicated sections for pet care services, pet gifts, home visits, veterinary services, best-selling pet products, client testimonials, contact forms, and helpful information. With playful pet imagery, a soft peach and orange color palette, clean layouts, responsive design, and intuitive navigation, the platform creates a welcoming online experience for pet owners and their beloved companions.",
    category: "Pet Care",
    image: "/petCares.png",
    url: "https://teal-bublanina-5595ac.netlify.app/",
  },
  {
    slug: "leadbud-b2b-lead-generation-platform",
    title: "Leadbud.io – B2B Lead Generation & Email Finder Platform",
    excerpt:
      "**Leadbud.io** is a modern B2B lead generation platform designed to help businesses discover verified email addresses, find targeted prospects, and build powerful contact databases. The website features an email finder, company and contact search, advanced filtering, real-time analytics, database insights, customer testimonials, FAQs, and conversion-focused call-to-action sections. With a clean SaaS-style interface, vibrant green and white color palette, responsive layouts, intuitive navigation, and modern dashboard visuals, the platform delivers a professional and engaging experience for businesses looking to streamline their outreach and grow their leads.",
    category: "SaaS & Lead Generation",
    image: "/leadbud.png",
    url: "https://exquisite-taiyaki-bb2767.netlify.app/",
  },
];

export const accomplishments = [
  {
    id: "accomplishment-item-1",
    starId: "star-green",
    color: "text-[#b5ff2b]",
    align: "items-start text-left",
    text: "Helped startups and businesses turn early-stage ideas into scalable digital products and launch-ready MVPs.",
  },
  {
    id: "accomplishment-item-2",
    starId: "star-purple",
    color: "text-[#b5ff2b]",
    align: "items-center text-center",
    text: "Managed development workflows across coding, planning, execution, and delivery to keep projects moving efficiently.",
  },
  {
    id: "accomplishment-item-3",
    starId: "star-orange",
    color: "text-[#f59e0b]",
    align: "items-start text-left",
    text: "Worked on AI-driven solutions that combine automation, modern web development, and practical business growth.",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Basharat was a great experience. He understands both technology and business needs, and knows how to turn ideas into scalable web app solutions.",
    name: "Client / Startup Founder",
    role: "web App & AI Solution Client",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote:
      "Basharat delivered our MVP ahead of schedule with exceptional attention to detail. His technical expertise and project management skills made the entire process seamless.",
    name: "Sarah Jenkins",
    role: "Product Manager, Tech Startup",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote:
      "From architecture to deployment, Basharat handled everything professionally. Our React web app performs flawlessly and our users love it.",
    name: "Marcus Thorne",
    role: "CEO, Mobile-First Company",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export const socialLinks = [
  {
    label: "Li.",
    href: "https://www.linkedin.com/in/bdking007/",
  },
  {
    label: "X.",
    href: "/",
  },
  {
    label: "In.",
    href: "https://www.instagram.com/basharatali07/",
  },
];
