export interface Project {
  id: string;
  number: string;
  title: string;
  repoName: string;
  repoUrl: string;
  liveUrl?: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  flowSteps: { step: string; label: string; desc: string }[];
  featured: boolean;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'AI / ML' | 'Tools & DevOps';
  icon: string;
  description: string;
  usedIn: string;
  level: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'education' | 'hackathon' | 'project' | 'milestone';
}

export interface Achievement {
  title: string;
  event: string;
  whatIBuilt: string;
  whatILearned: string;
  tags: string[];
  link?: string;
}

export const PERSONAL_INFO = {
  name: "Naresh Kumar Sahoo",
  handle: "Nareshkumarsahoo",
  profileImage: "/profile.jpg",
  roleTitle: "B.Tech CSE Student | Full-Stack Developer | Aspiring AI/ML Engineer",
  university: "SOA University, Bhubaneswar",
  degree: "B.Tech in Computer Science & Engineering",
  location: "Bhubaneswar, Odisha, India",
  email: "sahoonaresh29062004@gmail.com",
  github: "https://github.com/Nareshkumarsahoo",
  linkedin: "https://www.linkedin.com/in/naresh-kumar-sahoo-85b4b929a/",
  resumeUrl: "/resume.pdf",
  bioHeadline: "Hi, I'm Naresh Kumar.",
  rotatingRoles: [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Creative Builder"
  ],
  mainStatement: "I build intelligent, scalable and meaningful digital experiences.",
  supportingText: "B.Tech CSE student at SOA University, Bhubaneswar, passionate about full-stack development, AI/ML, DSA and solving real-world problems through technology.",
  aboutText: "I am a Computer Science Engineering student with a deep passion for building software systems that bridge complex engineering with real-world human impact. From digitizing law enforcement workflows in hackathons to exploring neural networks and full-stack architectures, I craft software with clean code and purpose.",
  cgpaPlaceholder: "[SOA University • B.Tech CSE]",
};

export const PHILOSOPHY_STAGES = [
  {
    number: "01",
    title: "THINK",
    subtitle: "Understand the Problem",
    description: "Analyze core requirements, edge cases, system bottlenecks, and user intent before writing a single line of code.",
    icon: "Brain"
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Plan the Solution",
    description: "Architect clean software structures, database schemas, modular UI components, and reliable data pipelines.",
    icon: "Layout"
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Turn Ideas into Working Systems",
    description: "Write clean, maintainable, and type-safe code using modern engineering tools, frameworks, and APIs.",
    icon: "Code2"
  },
  {
    number: "04",
    title: "IMPROVE",
    subtitle: "Test, Learn & Iterate",
    description: "Perform rigorous testing, audit performance, incorporate real-world feedback, and continuously refine.",
    icon: "Sparkles"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Java", category: "Programming", icon: "Coffee", description: "Object-Oriented Programming, Data Structures & Algorithms", usedIn: "DSA & Backend Logic", level: "Core" },
  { name: "Python", category: "Programming", icon: "Terminal", description: "Scripting, Automation, Data Processing & Machine Learning Foundations", usedIn: "Neuro_Well & AI Studies", level: "Proficient" },
  { name: "C++", category: "Programming", icon: "Cpu", description: "Low-level system logic, Memory management & Algorithmic Problem Solving", usedIn: "Competitive Coding", level: "Core" },
  { name: "C", category: "Programming", icon: "FileCode", description: "Procedural Programming & Computer Science Fundamentals", usedIn: "Academic Coursework", level: "Foundational" },
  { name: "JavaScript", category: "Programming", icon: "Zap", description: "ES6+, Async/Await, Web APIs, DOM manipulation", usedIn: "ShauryaAstra & Hack4Safety", level: "Advanced" },
  
  // Frontend
  { name: "React", category: "Frontend", icon: "Atom", description: "Component architecture, Hooks, State management & SPA optimization", usedIn: "Neuro_Well & Modern Portfolios", level: "Advanced" },
  { name: "HTML5", category: "Frontend", icon: "Globe", description: "Semantic markup, Accessibility (a11y), SEO architecture", usedIn: "All Web Projects", level: "Expert" },
  { name: "CSS3", category: "Frontend", icon: "Palette", description: "Flexbox, Grid, Custom Properties, Glassmorphism & Keyframe Animations", usedIn: "ShauryaAstra & Interactive UIs", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Wind", description: "Utility-first CSS, dark mode design systems, responsive UI layouts", usedIn: "Portfolio & Web Apps", level: "Advanced" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "Server", description: "Event-driven runtime for scalable backend microservices & APIs", usedIn: "ShauryaAstra & Hack4Safety", level: "Intermediate" },
  { name: "Express.js", category: "Backend", icon: "Layers", description: "RESTful API routes, middleware, and request validation", usedIn: "Full-Stack Web Servers", level: "Intermediate" },

  // Database
  { name: "MongoDB", category: "Database", icon: "Database", description: "NoSQL document collections, aggregation pipelines, schema modeling", usedIn: "ShauryaAstra Backend", level: "Intermediate" },
  { name: "MySQL", category: "Database", icon: "HardDrive", description: "Relational database queries, normalized schemas, joins & indexing", usedIn: "Database Systems", level: "Intermediate" },

  // AI / ML
  { name: "AI / ML Foundations", category: "AI / ML", icon: "BrainCircuit", description: "Supervised learning models, neural network concepts, data preprocessing", usedIn: "Academic & Self Study", level: "Active Focus" },
  { name: "Data Structures & Algorithms", category: "AI / ML", icon: "Network", description: "Trees, Graphs, Dynamic Programming, Sorting & Searching", usedIn: "Problem Solving", level: "Continuous Practice" },

  // Tools & DevOps
  { name: "Git", category: "Tools & DevOps", icon: "GitBranch", description: "Version control, branching strategies, rebase & commit history", usedIn: "All Repositories", level: "Advanced" },
  { name: "GitHub", category: "Tools & DevOps", icon: "Github", description: "Open-source collaboration, Issue tracking & Repository management", usedIn: "Nareshkumarsahoo Repos", level: "Advanced" },
  { name: "VS Code", category: "Tools & DevOps", icon: "Code", description: "Primary IDE with extensions for debugging, formatting, and dev productivity", usedIn: "Daily Development", level: "Expert" }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "shauryaastra",
    number: "01",
    title: "SHAURYAASTRA",
    repoName: "SHAURYAASTRA_INDEX_DEMO",
    repoUrl: "https://github.com/Nareshkumarsahoo/SHAURYAASTRA_INDEX_DEMO",
    category: "Digital Governance & Public Safety",
    shortDescription: "An intelligent digital policing and FIR management solution designed to modernize citizen-police interaction and investigation workflows.",
    problem: "Traditional citizen police reporting relies on paper documentation and physical station visits, leading to registration delays, transparent tracking issues, and fragmented case intelligence.",
    solution: "ShauryaAstra provides a digitized FIR registration hub where citizens can log complaints securely online, while police officers receive structured investigation routing and live status management.",
    keyFeatures: [
      "Digital FIR Registration Hub with structured complaint forms",
      "Real-time Incident & Status Tracking Dashboard",
      "Police Officer Case Inspection & Categorization Flow",
      "Audit Trail & Emergency Alert Dispatch Workflow"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB"],
    flowSteps: [
      { step: "01", label: "Citizen", desc: "Logs complaint online via intuitive digital interface" },
      { step: "02", label: "FIR", desc: "System generates verified FIR index & logs timestamp" },
      { step: "03", label: "Investigation", desc: "Assigned officer inspects & updates case progress" },
      { step: "04", label: "Intelligence", desc: "Data insights analyze crime patterns & priority" },
      { step: "05", label: "Resolution", desc: "Case finalized with citizen digital notification" }
    ],
    featured: true,
    accentColor: "#00f0ff"
  },
  {
    id: "hack4safety",
    number: "02",
    title: "HACK4SAFETY",
    repoName: "Hack4Safety-Odisha-Police",
    repoUrl: "https://github.com/Nareshkumarsahoo/Hack4Safety-Odisha-Police",
    category: "Hackathon / Public Safety Innovation",
    shortDescription: "A specialized emergency public safety web platform engineered for the Odisha Police Hackathon to digitize law enforcement response.",
    problem: "Emergency safety reports require instant transmission between affected citizens and nearest dispatch authorities without administrative friction.",
    solution: "Built an agile, lightweight web system enabling rapid incident distress signals, digitized incident intake, and streamlined police dispatch monitoring.",
    keyFeatures: [
      "Rapid Distress Signal & Incident Logging Module",
      "Odisha Police Hackathon Challenge Architecture",
      "Structured Emergency Categories & Dispatch Visualizer",
      "Responsive Dark Cyber Interface for Low-Bandwidth Devices"
    ],
    techStack: ["JavaScript", "Express.js", "HTML5", "CSS3", "Git"],
    flowSteps: [
      { step: "01", label: "PROBLEM", desc: "Citizen faces emergency or safety concern" },
      { step: "02", label: "DIGITALIZATION", desc: "Instant web report dispatched with incident metadata" },
      { step: "03", label: "INTELLIGENCE", desc: "System triages priority & routes to police station" },
      { step: "04", label: "IMPACT", desc: "Faster emergency response time and incident tracking" }
    ],
    featured: true,
    accentColor: "#8b5cf6"
  },
  {
    id: "neuro-well",
    number: "03",
    title: "NEURO WELL",
    repoName: "Neuro_Well",
    repoUrl: "https://github.com/Nareshkumarsahoo/Neuro_Well",
    category: "Intelligent Web App & Wellness",
    shortDescription: "An intelligent wellness web application focusing on cognitive health, mood tracking, and personalized wellness recommendations.",
    problem: "Users often struggle with scattered health tracking tools that lack calming interfaces and intelligent, actionable self-care routines.",
    solution: "Neuro_Well creates a soothing, dark-mode wellness companion that visualizes personal metrics and provides structured cognitive wellness routines.",
    keyFeatures: [
      "Calm & Soothing Interactive UI Visualizations",
      "Cognitive Mood & Daily Activity Tracking Modules",
      "Personalized Wellness Recommendation Engine",
      "Data Visualization Dashboard for Progress Tracking"
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    flowSteps: [
      { step: "01", label: "INPUT", desc: "Log daily mood, stress levels & activity scores" },
      { step: "02", label: "ANALYZE", desc: "Smart algorithms evaluate cognitive balance trends" },
      { step: "03", label: "RECOMMEND", desc: "Tailored self-care exercises & mindfulness prompts" },
      { step: "04", label: "TRACK", desc: "Interactive charts present visual wellness growth" }
    ],
    featured: true,
    accentColor: "#10b981"
  }
];

export const OTHER_PROJECTS = [
  {
    name: "To_Do",
    url: "https://github.com/Nareshkumarsahoo/To_Do",
    description: "Clean, algorithm-focused task queue and priority management tool in Python.",
    language: "Python",
    stars: 1,
    category: "Utility / Workflow"
  },
  {
    name: "CSW-2",
    url: "https://github.com/Nareshkumarsahoo/Csw-2",
    description: "Computer Science Workshop 2 assignments, algorithm lab practice, and web components.",
    language: "HTML / JS / CSS",
    stars: 1,
    category: "Academic & Engineering Practice"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2023 — Present",
    title: "B.Tech Computer Science & Engineering",
    organization: "Siksha 'O' Anusandhan (SOA) University",
    location: "Bhubaneswar, Odisha",
    description: "Pursuing B.Tech in CSE with a strong foundation in Data Structures & Algorithms, Full-Stack Web Development, Database Systems, Computer Networks, and AI/ML.",
    highlights: [
      "Strengthening DSA concepts in Java, Python, and C++",
      "Building full-stack web applications & software systems",
      "Active participant in technical coding & hackathons"
    ],
    type: "education"
  },
  {
    year: "2020 — 2022",
    title: "Higher Secondary Certificate (Class XII Science)",
    organization: "Council of Higher Secondary Education (CHSE), Odisha",
    location: "Kalinga Bharati Res. H S School, Gopalpur",
    description: "Passed Higher Secondary Science Examination in First Division with 506 / 600 Total Marks (84.33%).",
    highlights: [
      "Mathematics: 95 / 100",
      "Physics: 97 / 100 (67 Theory + 30 Practical)",
      "Information Technology: 91 / 100 (61 Theory + 30 Practical)",
      "Chemistry: 82 / 100 (52 Theory + 30 Practical)",
      "MIL Odia: 76 / 100 | English: 65 / 100",
      "Grand Total: 506 / 600 • First Division"
    ],
    type: "education"
  },
  {
    year: "2020",
    title: "High School Certificate (Class X)",
    organization: "Board of Secondary Education (BSE), Odisha",
    location: "K C V M (Govt), Agarpara, Bhadrak",
    description: "Passed High School Certificate Examination with 396 / 600 Total Marks (Grade B2).",
    highlights: [
      "Mathematics: 90 / 100",
      "Third Language (Sanskrit): 90 / 100",
      "Second Language (English): 71 / 100",
      "First Language (Odia): 57 / 100",
      "General Science: 54 / 100",
      "Grand Total: 396 / 600 • Grade B2"
    ],
    type: "education"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Hack4Safety — Odisha Police Hackathon",
    event: "State Technical Hackathon",
    whatIBuilt: "Designed and prototyped Hack4Safety, an emergency dispatch and public safety reporting platform for law enforcement.",
    whatILearned: "Rapid web prototyping under pressure, real-world requirement analysis for public safety, and police workflow digitization.",
    tags: ["Hackathon", "Public Safety", "Full-Stack", "JavaScript"]
  },
  {
    title: "ShauryaAstra FIR Management Platform",
    event: "Digital Governance Project",
    whatIBuilt: "Engineered an online FIR registration and investigation status platform aimed at modernizing police station workflows.",
    whatILearned: "Database relationship modeling, complex workflow step design, and building accessible digital government interfaces.",
    tags: ["Digital Governance", "FIR Indexing", "Web Dev"]
  },
  {
    title: "Neuro_Well Intelligent Health Companion",
    event: "Wellness Innovation",
    whatIBuilt: "Created a React-based cognitive wellness app featuring interactive mood tracking and automated self-care suggestions.",
    whatILearned: "React component architecture, state synchronization, dark-mode design systems, and data visualizers.",
    tags: ["React", "AI / Wellness", "UI Design"]
  }
];

export const CURRENT_MISSIONS = [
  {
    title: "Full-Stack System Engineering",
    subtitle: "MERN Stack / React / TypeScript / Node",
    progress: "Active Focus",
    status: "BUILDING",
    detail: "Designing production-ready web applications with clean architecture and responsive glassmorphism interfaces."
  },
  {
    title: "AI & Machine Learning Foundations",
    subtitle: "Python / Supervised Models / Neural Networks",
    progress: "In Depth",
    status: "LEARNING",
    detail: "Studying AI algorithms, model pipelines, and how to integrate intelligent APIs into web experiences."
  },
  {
    title: "Data Structures & Algorithms",
    subtitle: "Java / C++ / Problem Solving",
    progress: "Daily Practice",
    status: "OPTIMIZING",
    detail: "Strengthening algorithmic efficiency, dynamic programming, graph algorithms, and time/space complexity analysis."
  },
  {
    title: "Cyber Security & Secure Software",
    subtitle: "Authentication / Encryption / Secure APIs",
    progress: "Exploring",
    status: "EXPERIMENTING",
    detail: "Understanding web security best practices, CORS, token verification, and data privacy in public safety systems."
  }
];
