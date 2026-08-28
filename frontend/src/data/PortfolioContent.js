import SchedUOSImg from "../assets/images/scheduos.png";
import KhataFlowImg from "../assets/images/khataflow.png";
import PocketScanImg from "../assets/images/pocket_scan.png";
import SmartInvoiceBuilderImg from "../assets/images/smart_invoice_builder.png";
import BudgetWiseImg from "../assets/images/budgetwise.png";
import NexusImg from "../assets/images/nexus.png";
import TruthLensImg from "../assets/images/truthlens.png";
import PneumoScanImg from "../assets/images/pneumoscan.png";
import InternPredictorImg from "../assets/images/intern_predictor.png";
import SentimentAnalyzerImg from "../assets/images/sentiment_analyzer.png";
import AiChatbotImg from "../assets/images/ai_chatbot.png";
import HaseebPortfolioImg from "../assets/images/haseeb_portfolio.png";
import TextileEssenceImg from "../assets/images/textile_essence.png";


export const PortfolioContent = {
  about: {
    tag: "About Me",
    title: "Software engineer with",
    titleHighlight: "2+ years of impact",
    paragraphs: [
      "I'm Najeeb Ullah Tahir, a Full-Stack & Mobile Engineer specializing in building scalable web applications, cross-platform mobile experiences, and AI-powered software solutions.",
      "My expertise spans the complete software development lifecycle, from designing intuitive user interfaces and architecting secure backend systems to developing RESTful APIs, managing databases, and deploying production-ready applications. I enjoy solving complex engineering challenges with clean, maintainable, and scalable code.",
      "I have built real-world solutions including B2B platforms, AI-integrated applications, and Flutter-based mobile products such as KhataFlow. Leveraging modern technologies across web, mobile, cloud, and machine learning, I focus on delivering reliable software that creates measurable value for users and businesses alike.",
    ],
    stats: [
      { number: "2+", label: "Years Experience" },
      { number: "6+", label: "ML Applications" },
      { number: "15+", label: "Projects Built" },
    ],
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "Node.js & FastAPI", level: 92 },
      { name: "Flutter & Dart", level: 90 },
      { name: "Python & AI/ML", level: 94 },
      { name: "MongoDB & Firebase", level: 88 },
      { name: "Docker & CI/CD", level: 86 },
    ],
  },

  hero: {
    badge: "Available for work",
    greeting: "Hey, I'm",
    name: "Najeeb Ullah Tahir",
    title: "Full-Stack & Mobile Engineer • AI/ML Integration",
    description:
      "I build scalable web applications, cross-platform mobile apps, and AI-powered solutions that solve real business problems.",
    buttons: {
      primary: "View Projects",
      secondary: "Download CV",
    },
    stats: [
      { number: "2+", label: "Years Experience" },
      { number: "6+", label: "ML Apps Delivered" },
      { number: "15+", label: "Projects Built" },
      { number: "Awarded", label: "Best Intern @ DevelopersHub" },
    ],
    technologies: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Dart",
      "Kotlin",
      "React",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Flutter",
      "TensorFlow",
      "XGBoost",
      "MongoDB",
      "Firebase",
      "Docker",
      "Vercel",
      "Render",
    ],
  },

  skills: {
    tag: "Expertise",
    title: "My",
    titleHighlight: "Skills",
    description:
      "A comprehensive overview of my technical stack across full-stack development, AI/ML systems, and mobile app engineering.",
    categories: [
      { id: "all", label: "All Skills" },
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "ai", label: "AI/ML" },
      { id: "tools", label: "Tools & Platforms" },
    ],
    skills: {
      frontend: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 95,
          description: "Modern SPAs and responsive interfaces",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          level: 90,
          description: "SSR, routing, and production-grade apps",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          level: 92,
          description: "Type-safe frontend and API integration",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          level: 88,
          description: "Utility-first design systems",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
          level: 85,
          description: "Fast tooling and build pipelines",
        },
      ],
      backend: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          level: 90,
          description: "Scalable APIs and backend services",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          level: 88,
          description: "Routing, auth flows, and middleware",
        },
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
          level: 92,
          description: "High-performance ML inference APIs",
        },
        {
          name: "REST APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 94,
          description: "Clean integration and service contracts",
        },
        {
          name: "WebSockets",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
          level: 84,
          description: "Real-time communication systems",
        },
      ],
      ai: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: 94,
          description: "End-to-end data and ML workflows",
        },
        {
          name: "TensorFlow / Keras",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          level: 90,
          description: "CNNs and image classification",
        },
        {
          name: "XGBoost",
          icon: "https://upload.wikimedia.org/wikipedia/commons/5/58/XGBoost_logo.svg",
          level: 89,
          description: "Regression and predictive analytics",
        },
        {
          name: "Scikit-Learn",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
          level: 88,
          description: "Classic ML pipelines and evaluation",
        },
        {
          name: "Transformers",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
          level: 87,
          description: "DistilBERT and XLM-RoBERTa workflows",
        },
        {
          name: "TF-IDF / K-Means",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: 86,
          description: "Clustering and skill-gap analysis",
        },
      ],
      tools: [
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          level: 90,
          description: "Cross-platform mobile apps",
        },
        {
          name: "Dart",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
          level: 88,
          description: "Offline-first app architecture",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          level: 85,
          description: "Atlas, queries, and data models",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
          level: 84,
          description: "Auth, Firestore, and sync",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          level: 80,
          description: "Containerization and deployment",
        },
        {
          name: "Git / GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          level: 90,
          description: "Version control and collaboration",
        },
        {
          name: "Vercel / Render",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          level: 86,
          description: "CI/CD and cloud deployment",
        },
      ],
    },
    summary: [
      { number: "15+", label: "Projects Built" },
      { number: "2+", label: "Years Experience" },
      { number: "6+", label: "ML Systems Delivered" },
      { number: "98%", label: "Pneumonia Recall" },
    ],
  },

  projects: {
    tag: "Portfolio",
    title: "Featured",
    titleHighlight: "Projects",
    description:
      "These projects reflect the range of my work in full-stack development, AI/ML, and mobile engineering.",
    categories: [
      { id: "all", label: "All Projects" },
      { id: "frontend", label: "Frontend" },
      { id: "fullstack", label: "Full Stack" },
      { id: "other", label: "Others" },
    ],
    items: [
      {
        id: 1,
        title: "SchedUOS",
        description:
          "A smart timetable assistant for the University of Sargodha computing department. Parse PDF schedules automatically, view class calendars, and check real-time room & lab availability.",
        imageUrl: SchedUOSImg,
        emoji: "📅",
        category: "fullstack",
        tags: ["React", "Vite", "Node.js", "Express", "Firebase"],
        liveUrl: "https://uos-schedule.vercel.app/",
        githubUrl: "https://github.com/Najeeb1106/uos_time_assistant-",
      },
      {
        id: 2,
        title: "KhataFlow",
        description:
          "KhataFlow is a production-ready, offline-first Flutter digital ledger application for managing personal loans, transactions, repayments, contacts, reminders, and financial records.",
        imageUrl: KhataFlowImg,
        emoji: "💳",
        category: "frontend",
        tags: ["Flutter", "Dart", "Riverpod", "SQLite", "Local Auth", "Offline-First"],
        liveUrl: "https://play.google.com/store/apps/details?id=dev.codrix.khata_app&pcampaignid=web_share",
        githubUrl: "https://github.com/Najeeb1106/khataflow_mob_app",
        statusBadge: "Live on Google Play",
        liveType: "playstore",
        liveLabel: "View on Google Play",
        features: [
          "Track money Lent (Give), Borrowed, Received, and Repaid",
          "Manage people and financial transactions",
          "Import and search phone contacts",
          "View outstanding balances and recovery progress",
          "Set due dates and reminder notifications",
          "PIN and biometric authentication (Face ID / Fingerprint)",
          "Recovery questions for account security",
          "Secure local storage for sensitive data with SQLite",
          "Generate and share professional PDF statements",
          "Fully offline-first functionality without cloud dependency",
        ],
      },
      {
        id: 3,
        title: "Pocket Scan",
        description:
          "A modern mobile document scanning application built to capture, scan, crop, enhance, and manage documents directly from a smartphone.",
        imageUrl: PocketScanImg,
        emoji: "📄",
        category: "frontend",
        tags: ["Flutter", "Dart", "Edge Detection", "Image Processing", "PDF Export", "Offline-First"],
        liveUrl: "https://play.google.com/store/apps/details?id=dev.codrix.pocketscan&pcampaignid=web_share",
        githubUrl: "https://github.com/Najeeb1106/Pocket_Scan_Mob_App",
        statusBadge: "Live on Google Play",
        liveType: "playstore",
        liveLabel: "View on Google Play",
        features: [
          "Smart document scanning with automatic edge detection",
          "Perspective correction and quad-point crop handles",
          "Advanced enhancement filters (B&W, Magic Color, Grayscale)",
          "Multi-page batch scanning and organization",
          "High-resolution PDF generation and direct sharing",
          "100% on-device processing for privacy and offline speed",
          "Built using Flutter & Dart for cross-platform fluid UI",
        ],
      },
      {
        id: 4,
        title: "Smart Invoice Builder",
        description:
          "A modern, privacy-first web application for freelancers, agencies, and businesses to create, customize, and export professional A4 invoices instantly with real-time financial calculations.",
        imageUrl: SmartInvoiceBuilderImg,
        emoji: "🧾",
        category: "frontend",
        tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "PDF Export", "Privacy-First"],
        liveUrl: "https://smart-invoice-builder-free.vercel.app/",
        githubUrl: "https://github.com/Najeeb1106/Smart-Invoice-Builder",
        statusBadge: "Live on Vercel",
        liveType: "web",
        liveLabel: "Live Demo",
        features: [
          "12 distinct professional invoice templates (Corporate, Creative, IT, Retail)",
          "Real-time calculation engine for item totals, discounts, taxes, and grand totals",
          "High-resolution single and multi-page A4 PDF export powered by html2pdf",
          "100% privacy-first local browser storage with zero server database tracking",
          "Fail-proof isolated iframe print engine for crisp 1-page A4 printouts",
          "Client-side WebP logo compression algorithm and live responsive preview",
          "Built with React 18, TypeScript, and Vite for optimal performance",
        ],
      },
      {
        id: 5,
        title: "BudgetWise",
        description:
          "A premium, feature-rich personal finance and budgeting application built with Flutter. Provides real-time financial tracking, interactive charts (fl_chart), local SQLite database encryption with SQLCipher, smart savings goals, and biometric app lock.",
        imageUrl: BudgetWiseImg,
        emoji: "💰",
        category: "frontend",
        tags: ["Flutter", "Drift", "SQLite", "Riverpod", "SQLCipher"],
        liveUrl: "",
        githubUrl: "https://github.com/Najeeb1106/budgetwise_mob_app",
      },
      {
        id: 6,
        title: "InternPro.pk",
        description:
          "Pakistan's #1 Virtual Internship Platform. A full-stack solution bridging the gap between education and employment with AI-powered assistants, mock interviews, progress trackers, and a streamlined job portal.",
        imageUrl: NexusImg,
        emoji: "🚀",
        category: "fullstack",
        tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
        liveUrl: "",
        githubUrl: "https://github.com/Najeeb1106/Intern_Pro",
      },
      {
        id: 7,
        title: "TruthLens AI",
        description:
          "Final-year project for multilingual fake news detection with explainability using XLM-RoBERTa and SHAP.",
        imageUrl: TruthLensImg,
        emoji: "🧠",
        category: "other",
        tags: ["XLM-RoBERTa", "SHAP", "FastAPI", "React"],
        liveUrl: "",
        githubUrl: "",
      },
      {
        id: 8,
        title: "PneumoScan AI",
        description:
          "CNN-based chest X-ray pneumonia classifier that achieved 87.34% accuracy and 98% pneumonia recall.",
        imageUrl: PneumoScanImg,
        emoji: "🫁",
        category: "other",
        tags: ["CNN", "TensorFlow", "FastAPI", "Medical AI"],
        liveUrl: "",
        githubUrl: "",
      },
      {
        id: 9,
        title: "InternView AI",
        description:
          "Regression-based ML system for predicting intern performance and organizational fit using ensemble behavioral analysis (XGBoost + Random Forest) served via FastAPI.",
        imageUrl: InternPredictorImg,
        emoji: "⚡",
        category: "other",
        tags: ["FastAPI", "Python", "XGBoost", "Random Forest", "Tailwind CSS"],
        liveUrl: "",
        githubUrl: "https://github.com/Najeeb1106/lntern-Performance-Predictor",
      },
      {
        id: 10,
        title: "Sentintern AI",
        description:
          "A high-performance sentiment analysis platform that transforms raw qualitative feedback into quantitative business intelligence using a fine-tuned DistilBERT transformer model.",
        imageUrl: SentimentAnalyzerImg,
        emoji: "🧠",
        category: "other",
        tags: ["FastAPI", "PyTorch", "DistilBERT", "Transformers", "Chart.js"],
        liveUrl: "",
        githubUrl: "https://github.com/Najeeb1106/Internship_Feedback_Sentiment_Analysis",
      },
      {
        id: 11,
        title: "NexusAI",
        description:
          "Next-gen AI assistant powered by LLaMA 3.1. Features real-time conversational chat, response streaming, clear messaging cues, and a sleek dark-mode widget interface.",
        imageUrl: AiChatbotImg,
        emoji: "🤖",
        category: "other",
        tags: ["React", "FastAPI", "LLaMA 3.1", "NLP", "Python"],
        liveUrl: "https://ai-chatbot-8fh7.onrender.com/",
        githubUrl: "https://github.com/Najeeb1106/ai_chatbot",
      },
      {
        id: 12,
        title: "Haseeb Portfolio",
        description:
          "A premium developer portfolio website built for a Full Stack Dev (Laravel & Flutter expert) with a clean dark mode design system, smooth animations, and interactive section transitions.",
        imageUrl: HaseebPortfolioImg,
        emoji: "💼",
        category: "frontend",
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://haseeb-ullah.vercel.app/",
        githubUrl: "https://github.com/Najeeb1106/Haseeb_portfolio-",
      },
      {
        id: 13,
        title: "Textile Essence",
        description:
          "A professional B2B export website for an ISO-certified textile manufacturer and exporter. Features a comprehensive products showcase (fabrics, medical apparel, uniforms, bedding) and a quote inquiry form.",
        imageUrl: TextileEssenceImg,
        emoji: "🏭",
        category: "frontend",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "B2B UI"],
        liveUrl: "https://textile-esscence.vercel.app/",
        githubUrl: "https://github.com/Najeeb1106/textile_esscence",
      },
    ],
  },

  contact: {
    tag: "Contact",
    title: "Let's work",
    titleHighlight: "together",
    description:
      "I’m open to freelance, internship, and full-time opportunities across full-stack development, AI/ML, and mobile product development.",
    info: [
      {
        icon: "email",
        title: "Email",
        value: "najeebullahtahir786@gmail.com",
      },
      {
        icon: "phone",
        title: "Phone",
        value: "+92 339 0460008",
      },
      {
        icon: "location",
        title: "Location",
        value: "Sargodha, Pakistan",
      },
      {
        icon: "availability",
        title: "Availability",
        value: "Open to work",
      },
    ],
    social: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: "https://github.com/Najeeb1106",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        url: "https://linkedin.com/in/najeeb-ullah-tahir",
      },
      {
        name: "WhatsApp",
        icon: "https://cdn.simpleicons.org/whatsapp/25D366",
        url: "https://wa.me/923390460008",
      },
      {
        name: "Email",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        url: "mailto:najeebullahtahir786@gmail.com",
      },
    ],
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      submitText: "Send Message",
    },
  },

  certifications: {
    tag: "Achievements",
    title: "My",
    titleHighlight: "Certifications",
    description: "Professional certifications and training programs I have completed across software engineering, AI, and cybersecurity.",
    list: [
      {
        title: "Google Cybersecurity Professional Certificate",
        issuer: "Google",
        description: "8-course comprehensive program covering threat intelligence, network security, Python automation, and risk management.",
        logo: "https://cdn.simpleicons.org/google/4285F4",
        date: "2025",
      },
      {
        title: "Google AI Essentials",
        issuer: "Google",
        description: "Foundations of AI technologies, generative models, prompting strategies, and ethical considerations.",
        logo: "https://cdn.simpleicons.org/google/4285F4",
        date: "2025",
      },
      {
        title: "IBM Design Thinking Practitioner",
        issuer: "IBM",
        description: "Practical user-centric design methodologies, empathy mapping, and collaborative ideation frameworks.",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/ibm.svg",
        date: "2025",
      },
      {
        title: "Introduction to Software Engineering",
        issuer: "IBM",
        description: "Core concepts of SDLC, Agile methodologies, cloud computing, and architecture patterns.",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/ibm.svg",
        date: "2026",
      },
      {
        title: "Machine Learning Using Python",
        issuer: "Simplilearn",
        description: "In-depth training on regression, clustering, classification, and model optimization using Scikit-Learn.",
        logo: "https://cdn.simpleicons.org/python/3776AB",
        date: "2025",
      },
      {
        title: "Machine Learning Virtual Internship",
        issuer: "Internee.pk",
        description: "Practical experience developing predictive models and API integrations.",
        logo: "https://cdn.simpleicons.org/jupyter/F37626",
        date: "2026",
      },
      {
        title: "Full Stack Development Internship",
        issuer: "DevelopersHub Corporation",
        description: "Practical training building full-stack web platforms and REST API systems in Agile teams.",
        logo: "https://cdn.simpleicons.org/react/61DAFB",
        date: "2026",
      },
      {
        title: "Application Development Certificate",
        issuer: "HighSkyTech",
        description: "Android application development using Kotlin, local storage, and custom UI design.",
        logo: "https://cdn.simpleicons.org/kotlin/7F52FF",
        date: "2025",
      },
    ],
  },
  services: {
    tag: "Services",
    title: "What I",
    titleHighlight: "Offer",
    description: "Tailored software development services built using modern stacks and scalable design patterns.",
    items: [
      {
        title: "Full-Stack Development",
        icon: "globe",
        description: "Designing end-to-end, high-performance web applications using React, Next.js, and Node.js/FastAPI.",
        capabilities: ["State Management", "SSR & Static Generation", "RESTful & GraphQL API Design", "Authentication & Authorization"]
      },
      {
        title: "Cross-Platform Mobile Apps",
        icon: "mobile",
        description: "Building responsive, offline-first, and highly engaging mobile apps with Flutter for iOS and Android.",
        capabilities: ["Offline Storage (SQLite/Drift)", "Riverpod State Architecture", "Biometric Integration", "Interactive Data Visualizations"]
      },
      {
        title: "AI & Machine Learning Integration",
        icon: "cpu",
        description: "Deploying predictive algorithms, custom deep learning classifiers, and LLM orchestration features.",
        capabilities: ["FastAPI Inference Pipelines", "CNN Image Classification", "Transformer Workflows", "Prompt Engineering"]
      },
      {
        title: "Database & Cloud Architecture",
        icon: "database",
        description: "Architecting structured schemas, containerizing environments, and configuring automated CI/CD pipelines.",
        capabilities: ["MongoDB Atlas & SQL", "Docker Containerization", "Firebase Integration", "Cloud Deployment (Vercel/Render)"]
      }
    ]
  },

  experience: {
    tag: "Work History",
    title: "Professional",
    titleHighlight: "Journey",
    description: "My career timeline showcasing software engineering impact, technical projects, and growth.",
    list: [
      {
        role: "Full-Stack Development Intern",
        company: "DevelopersHub Corporation",
        duration: "May 2026 – Jun 2026",
        location: "Sargodha, Pakistan",
        description: "Built frontend modules for Nexus (B2B investment matchmaking platform) and backend APIs in an Agile team.",
        bullets: [
          "Built frontend modules for Nexus, a B2B investment matchmaking platform, using React 18, TypeScript, and Vite – improving UI responsiveness and accelerating feature delivery cycles.",
          "Developed REST API integrations and backend services in Node.js/Express covering full authentication flows and e-commerce module workflows.",
          "Integrated MongoDB Atlas and configured CI/CD deployment pipelines on Vercel, achieving zero-downtime production releases.",
          "Executed QA cycles and systematic debugging in an Agile workflow, reducing regression defects on production-ready features."
        ],
        tags: ["React 18", "TypeScript", "Node.js", "Express", "MongoDB", "Agile"]
      },
      {
        role: "Machine Learning Intern",
        company: "Internee.pk",
        duration: "Apr 2026 – May 2026",
        location: "Remote",
        description: "Delivered 6 production-grade ML applications across NLP, recommendation systems, and predictive analytics.",
        bullets: [
          "Delivered 6 production-grade ML applications across NLP, recommendation systems, and predictive analytics – spanning data preprocessing through API deployment.",
          "Fine-tuned DistilBERT on a custom 4,000-entry domain-specific dataset for internship sentiment classification, achieving measurable accuracy gains over baseline.",
          "Built FastAPI microservices for ML model inference integrating Scikit-Learn, XGBoost, and Random Forest pipelines on cloud infrastructure.",
          "Developed Gaplytics – a skill-gap analysis platform using TF-IDF vectorization and K-Means clustering to surface personalized learning priorities against job market data."
        ],
        tags: ["FastAPI", "XGBoost", "DistilBERT", "Scikit-Learn", "Python"]
      },
      {
        role: "Android Development Intern",
        company: "HiSkyTech",
        duration: "Jun 2025 – Aug 2025",
        location: "Sargodha, Pakistan",
        description: "Developed native Android applications in Kotlin implementing authentication, local storage, and Material Design.",
        bullets: [
          "Developed Android applications in Kotlin – implementing authentication, third-party API integrations, and local storage across UI and data layers.",
          "Conducted systematic performance profiling and targeted refactoring to improve runtime efficiency on target mobile devices.",
          "Designed responsive UI components following Material Design guidelines, raising SDK usability and UX consistency standards."
        ],
        tags: ["Kotlin", "Android SDK", "Material Design", "Performance Profiling"]
      }
    ]
  },

  references: {
    tag: "Endorsements",
    title: "Professional",
    titleHighlight: "References",
    description: "Validation from supervisors and mentors I have worked alongside.",
    list: [
      {
        name: "Muhammad Waheed Shazad",
        role: "CEO, Tritec Kodes",
        contact: "iwaheedshazad@gmail.com",
        relationship: "Industry Mentor & Coordinator"
      },
      {
        name: "Huzaifa Aslam",
        role: "Head Coordinator, Tritec Kodes",
        contact: "ihuzaifaslam@gmail.com",
        relationship: "Technical Supervisor"
      }
    ]
  },

  footer: {
    brand: "Najeeb",
    text: "Building full-stack, AI/ML, and mobile solutions with measurable impact.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    copyright: "© 2026 Najeeb Ullah Tahir. All rights reserved.",
    heart: "Crafted with ❤️ by Najeeb",
  },

  navbar: {
    brand: "Najeeb",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get in Touch",
  },
};

export default PortfolioContent;
