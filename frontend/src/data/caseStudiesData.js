export const CASE_STUDIES_DATA = [
    {
        id: 1,
        title: "Manufacturing ERP Transformation",
        titlePrefix: "Manufacturing ERP",
        titleHighlight: "Transformation",
        industries: ["Business", "Enterprise", "Logistics"],
        timeline: "6 months",
        companyName: "Industrial Corp",
        servicesProvided: ["User Research", "ERP Design", "Custom Development", "System Integration"],
        extraServicesCount: 2,
        techStack: ["React", "Python", "Django", "PostgreSQL", "Docker", "AWS"],
        mainImage: "/case-study/CS1.png",
        overview: [
            "A mid-sized manufacturing company was struggling with fragmented systems, manual workflows, and lack of real-time insights across production, inventory, and finance.",
            "They partnered with us to implement a custom ERP ecosystem that unified operations, improved decision-making, and enabled scalable growth."
        ],
        problemTitle: "Disconnected Systems Were Slowing Growth",
        problemIntro: "The organization relied on multiple legacy tools and spreadsheets, leading to:",
        problemPoints: [
            "No real-time production visibility",
            "Inventory mismatches and stock loss",
            "Manual financial reconciliation",
            "Poor cross-department communication",
            "Delayed decision-making at leadership level"
        ],
        problemConclusion: "From a system perspective, this was not a tooling problem — it was a data fragmentation problem.",
        solutionTitle: "A Unified, Scalable ERP Ecosystem",
        solutionIntro: "We designed and implemented a custom ERP platform tailored to manufacturing workflows, focusing on integration, usability, and scalability.",
        solutionModules: [
            "Production Planning & Tracking",
            "Inventory & Warehouse Management",
            "Procurement & Vendor Management",
            "Finance & Accounting Automation",
            "HR & Workforce Management",
            "Real-time Analytics Dashboard"
        ],
        solutionDecisions: [
            "Replaced fragmented tools with a centralized data architecture",
            "Designed role-based dashboards for each department",
            "Built API integrations with existing systems",
            "Prioritized UX simplicity to ensure adoption"
        ],
        solutionImage1: "/single-case-studies/csimg1.png",
        solutionImage2: "/single-case-studies/csimg2.png",
        resultsTitle: "Measurable Business Impact",
        resultsIntro: "The implementation led to significant improvements in efficiency and accuracy across all departments.",
        metrics: [
            { value: "40% reduction", label: "in manual operational tasks" },
            { value: "30% improvement", label: "in inventory accuracy" },
            { value: "25% faster", label: "financial reporting cycles" },
            { value: "15% increase", label: "in production throughput" }
        ]
    },
    {
        id: 2,
        title: "E-commerce Platform Optimization",
        titlePrefix: "E-commerce Platform",
        titleHighlight: "Optimization",
        industries: ["Retail", "E-commerce", "AI"],
        timeline: "4 months",
        companyName: "FashionHub",
        servicesProvided: ["UX/UI Design", "Performance Optimization", "AI Integration"],
        extraServicesCount: 1,
        techStack: ["Next.js", "Node.js", "GraphQL", "Algolia", "Vercel"],
        mainImage: "/case-study/CS2.png",
        overview: [
            "FashionHub needed to revitalize their online presence and optimize their conversion funnel to compete in a crowded market.",
            "We delivered a high-performance headless commerce solution with AI-powered search and recommendations."
        ],
        problemTitle: "Low Conversion Rates and Slow Load Times",
        problemIntro: "The existing platform was bloated, leading to poor mobile performance and user frustration.",
        problemPoints: [
            "Checkout abandonment rate over 70%",
            "Average page load time exceeding 5 seconds",
            "Irrelevant product recommendations",
            "Difficult to manage inventory across regions"
        ],
        problemConclusion: "The technical debt of the legacy system was actively costing the business revenue every hour.",
        solutionTitle: "Headless Commerce with AI Personalization",
        solutionIntro: "We migrated the store to a headless architecture, decoupled the frontend, and implemented AI-driven discovery features.",
        solutionModules: [
            "High-performance Headless Frontend",
            "AI Search & Recommendation Engine",
            "Global CDN Distribution",
            "Optimized Checkout Flow",
            "Centralized Product Information Management (PIM)"
        ],
        solutionDecisions: [
            "Switched to a mobile-first design approach",
            "Implemented edge-side rendering for instant loads",
            "Integrated AI-driven dynamic pricing",
            "Automated multi-channel stock sync"
        ],
        solutionImage1: "/single-case-studies/csimg3.png",
        solutionImage2: "/single-case-studies/csimg1.png",
        resultsTitle: "Growth Beyond Expectations",
        resultsIntro: "The new platform redefined what speed and personalization meant for their customers.",
        metrics: [
            { value: "200% increase", label: "in mobile conversion rate" },
            { value: "65% faster", label: "time-to-interactive" },
            { value: "35% higher", label: "average order value (AOV)" },
            { value: "100k+ users", label: "growth in first 3 months" }
        ]
    },
    {
        id: 3,
        title: "Healthcare Management System",
        titlePrefix: "Healthcare Management",
        titleHighlight: "System",
        industries: ["HealthTech", "Security", "SaaS"],
        timeline: "8 months",
        companyName: "MedLife Solutions",
        servicesProvided: ["Security Audit", "Cloud Infrastructure", "Custom Software Development"],
        extraServicesCount: 3,
        techStack: ["Java", "Spring Boot", "React", "MySQL", "Azure", "Kubernetes"],
        mainImage: "/case-study/CS3.png",
        overview: [
            "MedLife needed a secure, HIPAA-compliant platform to manage patient records and streamline hospital workflows.",
            "We developed a comprehensive management system that handles everything from scheduling to billing with military-grade security."
        ],
        problemTitle: "Data Silos and Security Vulnerabilities",
        problemIntro: "Patient data was scattered across physical files and outdated digital systems, posing significant risks.",
        problemPoints: [
            "Manual patient intake taking 20+ minutes",
            "Frequent data entry errors in billing",
            "Lack of secure remote access for doctors",
            "Compliance risks with outdated servers"
        ],
        problemConclusion: "The healthcare providers were spending more time on paperwork than on patient care.",
        solutionTitle: "Secure, Cloud-Native Patient Portal",
        solutionIntro: "We built a centralized, encrypted platform that automates administrative tasks and provides real-time access to health data.",
        solutionModules: [
            "Electronic Health Records (EHR)",
            "Automated Billing & Insurance",
            "Patient Engagement Portal",
            "Secure Messaging System",
            "Predictive Health Analytics"
        ],
        solutionDecisions: [
            "Implemented end-to-end encryption for all data",
            "Automated HIPAA compliance reporting",
            "Built a mobile app for on-the-go diagnosis",
            "Integrated lab results via secure APIs"
        ],
        solutionImage1: "/single-case-studies/csimg2.png",
        solutionImage2: "/single-case-studies/csimg3.png",
        resultsTitle: "Better Outcomes, Better Care",
        resultsIntro: "The digital transformation allowed the staff to refocus on what matters most: the patients.",
        metrics: [
            { value: "50% faster", label: "patient intake process" },
            { value: "99.99% uptime", label: "achieved on Azure cloud" },
            { value: "zero leaks", label: "reported in security audits" },
            { value: "20% reduction", label: "in administrative overhead" }
        ]
    },
    {
        id: 4,
        title: "Education Web Platform Modernization",
        titlePrefix: "Education Web",
        titleHighlight: "Modernization",
        industries: ["EdTech", "Education", "UX"],
        timeline: "5 months",
        companyName: "EduFuture",
        servicesProvided: ["UX Research", "LMS Development", "Mobile Optimization"],
        extraServicesCount: 2,
        techStack: ["Next.js", "Firebase", "PostgreSQL", "Mux Video", "Tailwind CSS"],
        mainImage: "/case-study/CS4.png",
        overview: [
            "EduFuture wanted to move from traditional classroom settings to a robust, interactive online learning experience.",
            "We built a modern Learning Management System (LMS) that supports live classes, recorded content, and student assessments."
        ],
        problemTitle: "Static Content Failed to Engage Students",
        problemIntro: "Their existing website was merely a library of PDF links, resulting in high drop-out rates.",
        problemPoints: [
            "Low course completion rates (under 15%)",
            "No way to track student progress",
            "Poor mobile viewing experience for videos",
            "Difficult for instructors to upload content"
        ],
        problemConclusion: "Learning was a passive experience that didn't adapt to the digital age.",
        solutionTitle: "Interactive & Gamified Learning Platform",
        solutionIntro: "We transformed their site into an active learning hub with progress tracking, quizzes, and live interaction.",
        solutionModules: [
            "Custom Video Streaming Engine",
            "Progress & Assessment Tracking",
            "Instructor Dashboard",
            "Gamification & Reward System",
            "Live Chat & Study Groups"
        ],
        solutionDecisions: [
            "Implemented gamification to boost retention",
            "Optimized video delivery for slow networks",
            "Simplified the instructor upload workflow",
            "Integrated third-party payment gateways"
        ],
        solutionImage1: "/single-case-studies/csimg1.png",
        solutionImage2: "/single-case-studies/csimg2.png",
        resultsTitle: "Empowering the Next Generation",
        resultsIntro: "The new platform saw an immediate surge in both enrollment and course completion.",
        metrics: [
            { value: "300% boost", label: "in student engagement" },
            { value: "70% completion", label: "average across all courses" },
            { value: "50k+ students", label: "onboarded in 6 months" },
            { value: "4.8/5 rating", label: "from student feedback" }
        ]
    },
    {
        id: 5,
        title: "AI-Powered Business Automation",
        titlePrefix: "AI-Powered Business",
        titleHighlight: "Automation",
        industries: ["AI", "Enterprise", "Consulting"],
        timeline: "7 months",
        companyName: "Streamline Inc.",
        servicesProvided: ["AI Integration", "Process Design", "Cloud Automation"],
        extraServicesCount: 2,
        techStack: ["Python", "TensorFlow", "FastAPI", "React", "Docker", "GCP"],
        mainImage: "/case-study/CS5.png",
        overview: [
            "Streamline Inc. handled thousands of customer inquiries and document processing tasks manually every day.",
            "We integrated custom AI models to automate data extraction and customer support routing, saving thousands of man-hours."
        ],
        problemTitle: "Scalability Bottlenecks in Manual Ops",
        problemIntro: "As the company grew, their operational costs were increasing linearly because of manual work.",
        problemPoints: [
            "Customer support response time: 24+ hours",
            "Manual data entry taking 50% of staff time",
            "High error rate in document classification",
            "Unable to scale during peak seasons"
        ],
        problemConclusion: "Human-centric processes were the primary obstacle to the company's profitability.",
        solutionTitle: "Intelligent Workflow Automation",
        solutionIntro: "We implemented an AI layer that categorizes inquiries, extracts data from invoices, and handles routine tasks.",
        solutionModules: [
            "AI Document Processor",
            "Intelligent Support Router",
            "Automated Reporting Engine",
            "Predictive Resource Planner",
            "Custom NLP Chatbot"
        ],
        solutionDecisions: [
            "Used fine-tuned LLMs for complex classification",
            "Built a human-in-the-loop review system",
            "Integrated directly with existing CRM",
            "Deployed on scalable serverless architecture"
        ],
        solutionImage1: "/single-case-studies/csimg3.png",
        solutionImage2: "/single-case-studies/csimg1.png",
        resultsTitle: "Automated Excellence",
        resultsIntro: "The AI integration transformed their operations from a cost center into a competitive advantage.",
        metrics: [
            { value: "85% reduction", label: "in inquiry response time" },
            { value: "95% accuracy", label: "in automated data extraction" },
            { value: "$1.2M saved", label: "in annual operational costs" },
            { value: "5x capacity", label: "increase without new hires" }
        ]
    },
    {
        id: 6,
        title: "FinTech Mobile App Development",
        titlePrefix: "FinTech Mobile",
        titleHighlight: "Development",
        industries: ["Finance", "Mobile", "Security"],
        timeline: "9 months",
        companyName: "BankNode",
        servicesProvided: ["Mobile Development", "Blockchain Integration", "Security Design"],
        extraServicesCount: 4,
        techStack: ["React Native", "Node.js", "Ethereum", "AWS Lambda", "Terraform"],
        mainImage: "/case-study/CS6.png",
        overview: [
            "BankNode aimed to launch a next-generation neo-bank app focused on borderless payments and crypto-integration.",
            "We built a high-security mobile application that supports multi-currency accounts and instant global transfers."
        ],
        problemTitle: "Legacy Banking Limitations",
        problemIntro: "Existing banking apps were slow, clunky, and made international transfers expensive and difficult.",
        problemPoints: [
            "High fees for cross-border transactions",
            "Slow settlement times (3-5 days)",
            "Poor user experience for young demographics",
            "Inadequate security for digital assets"
        ],
        problemConclusion: "Modern users demand instant, global, and secure financial mobility.",
        solutionTitle: "The Neo-Banking Mobile Ecosystem",
        solutionIntro: "A feature-rich mobile app with a cloud-native backend, supporting both fiat and digital assets.",
        solutionModules: [
            "Instant Transfer Engine",
            "Multi-Currency Wallet",
            "Digital Asset Custody System",
            "Biometric Authentication Layer",
            "Real-time Spending Analytics"
        ],
        solutionDecisions: [
            "Implemented biometric multi-factor auth",
            "Built a custom ledger system for instant sync",
            "Optimized for high-concurrency peak loads",
            "Ensured multi-regional regulatory compliance"
        ],
        solutionImage1: "/single-case-studies/csimg2.png",
        solutionImage2: "/single-case-studies/csimg3.png",
        resultsTitle: "Revolutionizing Finance",
        resultsIntro: "The app became a market leader within six months of launch, setting new standards for neo-banking.",
        metrics: [
            { value: "2M+ downloads", label: "in the first 6 months" },
            { value: "< 1s settlement", label: "for internal transfers" },
            { value: "4.9/5 stars", label: "average App Store rating" },
            { value: "zero fraud", label: "cases reported since launch" }
        ]
    },
    {
        id: 7,
        title: "Retail Inventory & POS System",
        titlePrefix: "Retail Inventory",
        titleHighlight: "POS System",
        industries: ["Retail", "Logistics", "Hardware"],
        timeline: "6 months",
        companyName: "Global Mart",
        servicesProvided: ["System Design", "Hardware Integration", "Inventory Management"],
        extraServicesCount: 1,
        techStack: ["C#", ".NET Core", "React", "SQL Server", "Raspberry Pi"],
        mainImage: "/case-study/CS7.png",
        overview: [
            "Global Mart needed to synchronize their 50+ retail locations with a central inventory and point-of-sale system.",
            "We delivered a hybrid cloud/edge solution that keeps stores running even during internet outages while maintaining real-time sync."
        ],
        problemTitle: "Inventory Chaos Across Multiple Stores",
        problemIntro: "Stock levels were inconsistent across locations, leading to overstocking in some and shortages in others.",
        problemPoints: [
            "Inaccurate inventory data in 30% of cases",
            "POS systems failing during network downtime",
            "Manual stock transfers taking days to record",
            "Difficult to track employee performance"
        ],
        problemConclusion: "The lack of real-time visibility was hurting customer trust and operational efficiency.",
        solutionTitle: "Cloud-Edge Retail Management",
        solutionIntro: "A robust POS and inventory system that operates locally at the store level but syncs instantly to the cloud.",
        solutionModules: [
            "Offline-First POS System",
            "Real-time Inventory Tracker",
            "Supplier Management Portal",
            "Employee Performance Dashboard",
            "Automated Reordering Engine"
        ],
        solutionDecisions: [
            "Developed an offline-first sync architecture",
            "Integrated barcode and RFID scanners",
            "Built a centralized procurement dashboard",
            "Simplified the UI for fast checkout"
        ],
        solutionImage1: "/single-case-studies/csimg1.png",
        solutionImage2: "/single-case-studies/csimg2.png",
        resultsTitle: "Connected Commerce",
        resultsIntro: "The unified system gave leadership total control and visibility over their entire retail network.",
        metrics: [
            { value: "98% accuracy", label: "in inventory tracking" },
            { value: "100% uptime", label: "for POS during outages" },
            { value: "25% reduction", label: "in wasted stock" },
            { value: "15% faster", label: "checkout time per customer" }
        ]
    },
    {
        id: 8,
        title: "Offshore SaaS Product Development",
        titlePrefix: "Offshore SaaS",
        titleHighlight: "Product Development",
        industries: ["SaaS", "Consulting", "Enterprise"],
        timeline: "12 months",
        companyName: "SaaS Launchpad",
        servicesProvided: ["Full-Stack Development", "DevOps", "Product Strategy"],
        extraServicesCount: 5,
        techStack: ["TypeScript", "Next.js", "Go", "PostgreSQL", "Terraform", "GitHub Actions"],
        mainImage: "/case-study/CS8.png",
        overview: [
            "SaaS Launchpad needed an experienced team to build their flagship collaboration tool from the ground up.",
            "We acted as their dedicated offshore engineering team, delivering a multi-tenant SaaS platform with enterprise-grade features."
        ],
        problemTitle: "High In-House Development Costs",
        problemIntro: "The client was struggling to hire local talent fast enough to meet their aggressive product roadmap.",
        problemPoints: [
            "Local hiring taking 3-6 months per role",
            "High overhead for in-house engineering",
            "Lack of specialized DevOps expertise",
            "Slow time-to-market for initial MVP"
        ],
        problemConclusion: "Traditional hiring models were too slow for a fast-paced SaaS startup.",
        solutionTitle: "Strategic Engineering Partnership",
        solutionIntro: "We provided a full-scale engineering department, including frontend, backend, QA, and DevOps specialists.",
        solutionModules: [
            "Multi-tenant Architecture",
            "Subscription Management (Stripe)",
            "Automated CI/CD Pipelines",
            "Enterprise Security Features",
            "User Permissions & Roles"
        ],
        solutionDecisions: [
            "Adopted Agile methodologies for fast delivery",
            "Built a modular architecture for easy scaling",
            "Automated all infrastructure via IaC",
            "Maintained strict documentation standards"
        ],
        solutionImage1: "/single-case-studies/csimg3.png",
        solutionImage2: "/single-case-studies/csimg1.png",
        resultsTitle: "Scaling Without the Stress",
        resultsIntro: "The partnership allowed the client to focus on sales and marketing while we handled the entire technical execution.",
        metrics: [
            { value: "50% lower", label: "development costs vs local" },
            { value: "4 months", label: "to launch initial MVP" },
            { value: "24/7 ops", label: "with global team coverage" },
            { value: "100% retain", label: "of core engineering knowledge" }
        ]
    }
];
