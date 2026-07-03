/**
 * portfolioData.js — Single Source of Truth
 * 
 * All portfolio content is configured here.
 * Edit this file to update text, links, projects, and skills
 * without touching any structural UI code.
 */

export const portfolioContent = {
  profile: {
    name: "Alex Chen",
    role: "Full-Stack Developer & Creative Technologist",
    bio: "I build elegant, high-performance digital experiences that blend clean engineering with creative design. Specializing in modern web architectures, data-driven applications, and immersive interfaces.",
    resumeUrl: "/resume.pdf",
    contactEmail: "alex.chen.dev@gmail.com",
    avatar: "/avatar.jpg"
  },

  about: {
    description:
      "A passionate software engineer with 5+ years of experience crafting scalable web applications, interactive data visualizations, and AI-powered tools. I thrive at the intersection of engineering precision and design creativity — turning complex problems into intuitive, beautiful solutions.",
    timeline: [
      {
        year: "2024 — Present",
        title: "Senior Frontend Engineer",
        org: "TechNova Inc.",
        detail:
          "Leading the design system team, building component libraries used by 40+ developers across 12 product teams."
      },
      {
        year: "2022 — 2024",
        title: "Full-Stack Developer",
        org: "DataFlow Systems",
        detail:
          "Architected real-time data pipeline dashboards processing 2M+ events per minute with React and Python."
      },
      {
        year: "2020 — 2022",
        title: "Frontend Developer",
        org: "CreativeStack Studio",
        detail:
          "Built interactive marketing platforms and e-commerce experiences for Fortune 500 clients."
      },
      {
        year: "2019 — 2020",
        title: "Software Engineering Intern",
        org: "CloudBridge Labs",
        detail:
          "Developed microservice APIs and automated CI/CD pipelines using Docker and Kubernetes."
      }
    ]
  },

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com"
  },

  codingProfiles: [
    { platform: "LeetCode", url: "https://leetcode.com", icon: "SiLeetcode" },
    { platform: "CodeChef", url: "https://codechef.com", icon: "SiCodechef" },
    {
      platform: "HackerRank",
      url: "https://hackerrank.com",
      icon: "SiHackerrank"
    }
  ],

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "FastAPI",
    "Django",
    "TailwindCSS",
    "Three.js",
    "Framer Motion",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Firebase",
    "Git",
    "GraphQL",
    "REST APIs"
  ],

  projects: [
    {
      title: "NeuralViz Dashboard",
      desc: "Real-time neural network training visualizer with interactive layer exploration, loss curve plotting, and architecture diagram generation.",
      tags: ["React", "Python", "TensorFlow", "D3.js", "WebSocket"],
      github: "https://github.com",
      live: "https://neuralviz.demo.dev"
    },
    {
      title: "CloudSync Pro",
      desc: "Enterprise-grade file synchronization platform with end-to-end encryption, real-time collaboration, and intelligent conflict resolution.",
      tags: ["Next.js", "Node.js", "AWS S3", "PostgreSQL"],
      github: "https://github.com",
      live: "https://cloudsync.demo.dev"
    },
    {
      title: "QuantTrader Engine",
      desc: "Algorithmic trading backtesting framework supporting 15+ technical indicators, portfolio optimization, and Monte Carlo simulations.",
      tags: ["Python", "Pandas", "NumPy", "FastAPI", "Redis"],
      github: "https://github.com",
      live: "https://quanttrader.demo.dev"
    },
    {
      title: "DevMetrics Hub",
      desc: "Developer productivity analytics platform aggregating GitHub, Jira, and CI/CD metrics into actionable team performance dashboards.",
      tags: ["React", "GraphQL", "MongoDB", "Docker"],
      github: "https://github.com",
      live: "https://devmetrics.demo.dev"
    },
    {
      title: "EcoTrack Mobile",
      desc: "Carbon footprint tracking application with gamified challenges, community leaderboards, and AI-powered sustainability recommendations.",
      tags: ["React Native", "Firebase", "TensorFlow Lite"],
      github: "https://github.com",
      live: "https://ecotrack.demo.dev"
    },
    {
      title: "SyntaxForge IDE",
      desc: "Browser-based collaborative code editor with real-time multiplayer editing, integrated terminal, and AI-assisted code completion.",
      tags: ["TypeScript", "Monaco Editor", "WebRTC", "Node.js"],
      github: "https://github.com",
      live: "https://syntaxforge.demo.dev"
    }
  ],

  articles: [
    {
      title: "Building Resilient Microservices with Event-Driven Architecture",
      summary:
        "A deep dive into designing fault-tolerant distributed systems using event sourcing, CQRS, and message brokers for production-scale applications.",
      link: "https://medium.com"
    },
    {
      title: "The Art of CSS Glassmorphism: Beyond the Blur",
      summary:
        "Exploring advanced glassmorphic design patterns, performance optimization techniques, and accessibility considerations for modern web interfaces.",
      link: "https://dev.to"
    },
    {
      title: "React Performance Patterns That Actually Matter",
      summary:
        "Practical guide to memo, useMemo, useCallback, and virtualization strategies that deliver measurable performance gains in real-world React apps.",
      link: "https://hashnode.com"
    },
    {
      title: "From Zero to Production: Deploying ML Models with FastAPI",
      summary:
        "Step-by-step walkthrough of packaging, containerizing, and deploying machine learning models as production-ready REST APIs with monitoring.",
      link: "https://medium.com"
    }
  ]
};
