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
    description:
      "A comprehensive project management information system designed to streamline project operations, manage critical documents, track financial and contractual records, and provide real-time insights. PMIS brings stakeholders, LOIs, work orders, control estimates, bank guarantees, invoices, IPCs, EOTs, inspections, estimates, meetings, punch lists, and change orders together in one centralized platform for better control, transparency, and efficient project delivery.",
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
    description:
      "A centralized project management platform designed to streamline project progress, monitor activities, track milestones, and provide real-time insights. Progress Center helps teams manage projects efficiently, monitor performance, collaborate seamlessly, and stay connected throughout the project lifecycle.",
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
    description:
      "A centralized platform for NESPAK to manage incoming and outgoing DAKs, create letters and memos, track correspondence, verify records through QR codes, and securely organize documents without paperwork.",
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
    description:
      "A digital check request portal that enables teams to submit, manage, track, and monitor inspection requests throughout the project lifecycle. The platform streamlines communication between project teams, improves request handling, and provides a centralized system for efficient inspection and approval workflows.",
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
    description:
      "A professional environmental services platform focused on sustainability, green initiatives, and delivering innovative solutions for a cleaner and more sustainable future.",
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
    description:
      "PSPA Inspection Portal is a comprehensive **Punjab Saaf Pani inspection and project monitoring system** designed to streamline plant inspections, BOQ verification, contractor bill evaluation, and payment management. The platform enables inspectors to record on-site progress, verify approved quantities and budgets against actual work, manage inspection records, and maintain complete project documentation. It also supports contractor bill verification and provides a transparent workflow from **site inspection and BOQ approval to bill verification and payment release**, helping improve accountability, accuracy, and financial transparency across water infrastructure projects.",
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
    description:
      "A modern airline platform designed for **Air Punjab, the first airline initiative by the Government of Punjab**, offering a seamless digital experience for flight booking, trip management, check-in, flight status, destinations, and cabin services.",
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
    description:
      "A modern **EV Bus Monitoring Dashboard** designed to efficiently manage and monitor electric bus operations in Lahore, providing real-time bus tracking, complete vehicle information, route and trip management, ridership analytics, fleet performance, and detailed bus health insights for smarter and more sustainable public transportation.",
    urlLabel: "Visit Website",
    bgColor: "bg-[#F5F2EC]",
    image: "/ev-bus.png",
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
    text: "Worked on AI-driven solutions that combine automation, modern app development, and practical business growth.",
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
    label: "Ig.",
    href: "http://instagram.com/bdking141/",
  },
  {
    label: "X.",
    href: "/",
  },
  {
    label: "In.",
    href: "https://www.linkedin.com/in/bdking007/",
  },
];
