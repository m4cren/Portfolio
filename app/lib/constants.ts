import { ProjectTypes, TechStackTypes } from "./types";

export const links = [
   { label: "Home", value: "home" },
   { label: "Service", value: "service" },
   { label: "Skills", value: "skills" },
   { label: "Projects", value: "projects" },
   { label: "Contact", value: "contact" },
   ,
];

export const techStack: TechStackTypes[] = [
   {
      category: "Languages",
      icon: "python",
      label: "Python",
      description: "Versatile scripting for backend logic and automation",
      experience: "8 months of ongoing experience",
      use: "Regular use for personal and academic projects",
   },
   {
      category: "Languages",
      icon: "javascript",
      label: "Javascript",
      description:
         "A programming language used to add interactivity and dynamic behavior to websites.",
      experience: "More than a year of experience",
      use: "Regular use for personal and academic projects",
   },
   {
      category: "Languages",
      icon: "typescript",
      label: "Typescript",
      description:
         "A typed language for building safer and scalable web applications.",
      experience: "4 months of ongoing experience",
      use: "For ReactJs and NextJs projects",
   },
   {
      category: "Languages",
      icon: "java",
      label: "Java",
      description:
         "A versatile, object-oriented language used for building cross-platform applications.",
      experience: "Total of 3 months of experience during my 1st-year",
      use: "My second programming-language",
   },
   {
      category: "Languages",
      icon: "c++",
      label: "C++",
      description:
         "A powerful, high-performance language widely used for system and game development.",
      experience: "Total of 3 months of experience during my 1st-year",
      use: "My first programming-language",
   },
   {
      category: "Databases",
      icon: "mysql",
      label: "MySQL",
      description:
         "A relational database system used to store and manage structured data.",
      experience: "5 months of ongoing experience",
      use: "Regular use for personal and academic projects",
   },
   {
      category: "Databases",
      icon: "sqlite",
      label: "SQLite",
      description:
         "A lightweight, file-based database engine ideal for local and embedded applications.",
      experience: "Total of 3 months of experience",
      use: "Used for two of my academic projects",
   },
   {
      category: "Databases",
      icon: "mongodb",
      label: "MongoDB",
      description:
         "A NoSQL database designed for storing flexible, JSON-like documents.",
      experience: "Week of experience",
      use: "Used while learning NextJS",
   },
   {
      category: "Libraries",
      icon: "reactjs",
      label: "ReactJS",
      description:
         "A JavaScript library for building fast and interactive user interfaces.",
      experience: "5 months of ongoing experience",
      use: "Regular use for my personal and academic projects",
   },
   {
      category: "Libraries",
      icon: "threejs",
      label: "ThreeJS",
      description:
         "A JavaScript library for creating 3D graphics in the browser using WebGL.",
      experience: "3 months of ongoing experience",
      use: "Used on my specialized personal and academic projects",
   },
   {
      category: "Libraries",
      icon: "emailjs",
      label: "EmailJS",
      description:
         "A service that enables sending emails directly from client-side applications.",
      experience: "6 months of ongoing experience",
      use: "For client personal or business website",
   },
   {
      category: "Libraries",
      icon: "socketio",
      label: "SocketIO",
      description:
         "A library for real-time, bidirectional communication between web clients and servers.",
      experience: "7 months of ongoing experience",
      use: "Every project that use Flask as a backend framework",
   },
   {
      category: "Libraries",
      icon: "prisma",
      label: "Prisma",
      description:
         "An ORM that simplifies database access with type safety and auto-generated queries.",
      experience: "Month of ongoing experience",
      use: "For my NextJS fullstack projects",
   },
   {
      category: "Frameworks",
      icon: "nextjs",
      label: "NextJS",
      description:
         "A React framework for building fast, scalable, and full-stack web applications.",
      experience: "2 months of ongoing experience",
      use: "For my personal and client projects",
   },
   {
      category: "Frameworks",
      icon: "tailwind",
      label: "TailwindCSS",
      description:
         "A utility-first CSS framework for rapidly building custom user interfaces.",
      experience: "5 months of ongoing experience",
      use: "Regular use for all of my prjects",
   },
   {
      category: "Frameworks",
      icon: "flask",
      label: "Flask",
      description:
         "A lightweight Python web framework for building simple and scalable web applications.",
      experience: "5 months of ongoing experience",
      use: "For full-stack academic projects",
   },
   {
      category: "Tools",
      icon: "figma",
      label: "Figma",
      description:
         "A cloud-based design tool for creating user interfaces, prototypes, and collaborative designs.",
      experience: "6 months ofongoing experience",
      use: "Design first then do the frontend",
   },
   {
      category: "Tools",
      icon: "blender",
      label: "Blender",
      description:
         "A powerful 3D creation suite used for modeling, animation, rendering, and visual effects.",
      experience: "8 months of experience on 3d modeling",
      use: "When i have projects that need 3D experience",
   },
   {
      category: "Tools",
      icon: "postman",
      label: "Postman",
      description:
         "A collaboration tool for testing, debugging, and documenting APIs.",
      experience: "Month of ongoing experience",
      use: "Testing APIs",
   },
   {
      category: "Tools",
      icon: "github",
      label: "Github",
      description:
         "A platform for hosting, version control, and collaboration on code using Git.",
      experience: "5 months of ongoing experience",
      use: "Regular use for every projects",
   },
   {
      category: "Tools",
      icon: "notion",
      label: "Notion",
      description:
         "An all-in-one workspace for note-taking, project management, and team collaboration.",
      experience: "Years of experience",
      use: "To manage my workflows",
   },
];

export const projects: ProjectTypes[] = [
   {
      label: "Metafeast",
      short_description:
         "An Immesive 3D Web Interface for Modern Restaurant Experience",
      date_range: "March 9, 2025 - May 9, 2025",
      project_details: "Software Design Final Project",
      github_repo: "https://github.com/m4cren/MetaFeast",
      image_url: "metafeast",
      video_url: "metafeast",
      long_details:
         "As technology continues to redefine consumer behavior, the restaurant industry has undergone a significant transformation from traditional paper menus and verbal communication to increasingly digitized service models. While many establishments have adopted digital menus or online reservation systems, these solutions often lack the depth of interactivity and real-time responsiveness required in today’s fast-paced, experience-driven dining environments. This is where Metafeast comes in.",
      tech_stack: {
         frontend: [
            "ReactJs",
            "Typescript",
            "TailwindCSS",
            "React Three Fiber",
            "ChartJs",
            "Framer Motion",
            "html2canvas",
         ],
         backend: ["Python", "Flask", "Socketio", "JWT", "MySQL", "SQLAlchemy"],
         integrated_api: ["Paymongo", "OpenWeatherMap", "AvatarPlaceholder"],
      },
   },
   {
      label: "Getlean",
      short_description:
         "A personalized gym coaching website that I made for my comrade.",
      date_range: "February 21, 2025 - February 28, 2025",
      project_details: "Fitness Coach Website",
      github_repo: "https://github.com/m4cren/getlean",
      image_url: "getlean",
      video_url: "getlean",
      link: "getlean.vercel.app",
      long_details:
         "GetLean is a personalized fitness coaching website built for a passionate gym coach. It offers tailored workout plans, progress tracking, and expert tips to help users achieve their fitness goals. Designed with a modern, responsive interface, the site focuses on simplicity, motivation, and results. Whether you're aiming to lose weight, build muscle, or maintain a healthy lifestyle, GetLean provides a structured path toward a fitter you.",
      tech_stack: {
         frontend: ["ReactJs", "Typescript", "EmailJs"],
      },
   },
   {
      label: "Game Hub",
      short_description:
         "This project sharpens my skills in UI design, API fetching, and data handling.",
      date_range: "May 20, 2025 - May 28, 2025",
      project_details: "Self-Project For CodeWithMosh React Course",
      github_repo: "https://github.com/m4cren/gamehub",
      image_url: "gamehub",
      video_url: "gamehub",
      link: "play-game-hub.vercel.app",
      long_details:
         "GameHub is a sleek and responsive platform that showcases a massive library of video games by integrating the RAWG.io API. Users can explore popular titles, view detailed game info, and discover new favorites — all in one place.",
      tech_stack: {
         frontend: ["ReactJs", "Typescript", "TailwindCSS"],
         integrated_api: ["Rawg.io"],
      },
   },
   {
      label: "Issue Tracker",
      short_description:
         "Next.js project to improve UI, API handling, and issue tracking.",
      date_range: "June 7, 2025 - June 11, 2025",
      project_details: "Self-Project For CodeWithMosh React Course",
      github_repo: "https://github.com/m4cren/IssueTracker",
      image_url: "issue-tracker",
      video_url: "issue-tracker",

      long_details:
         "This project is designed to enhance my skills in modern web development using Next.js. It focuses on building a clean, user-friendly interface for managing issues and tasks. Key features include API integration, efficient data fetching, pagination, infinite scrolling, and advanced filtering methods. It also helped strengthen my understanding of component structure, dynamic routing, and state management in real-world applications.",
      tech_stack: {
         frontend: [
            "NextJs",
            "Typescript",
            "TailwindCSS",
            "RadixUI",
            "Reachart",
            "Toast",
            "React Query",
            "React Hook Form",
         ],
         backend: ["Prisma", "NextAuthJS", "Zod", "MySQL"],
      },
   },
];
