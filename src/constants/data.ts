export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Omkumar D. Lakkad",
    title: "Full Stack Developer | AI Engineer | IoT Innovator",
    email: "omlakkad0@gmail.com",
    github: "https://github.com/Om-2005",
    linkedin: "https://www.linkedin.com/in/om-lakkad-4ab6b3385/",
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
  ],
  stats: [
    { label: "Projects Completed", value: 5 },
    { label: "Certifications", value: 13 },
    { label: "Technologies", value: 20 },
    { label: "Events Participated", value: 5 }
  ],
  projects: [
    {
      title: "J.A.R.V.I.S AI AGENT",
      category: "AI Automation Assistant",
      description: "Built an AI-powered desktop automation assistant using LLM technology. Supports voice and text command interaction. Automates tasks such as opening applications, managing files, launching websites, and workflow automation.",
      tech: ["LLM", "AI Agents", "Automation", "Voice Commands", "Desktop Control"],
      flagship: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      details: [
        "Integrated voice recognition and speech synthesis for natural conversations",
        "Automates opening system programs, controlling window states, and searching directories",
        "Monitors files, folder movements, and triggers automated shell workflows"
      ]
    },
    {
      title: "GREEN COVER HUB",
      category: "Full Stack Web Application",
      description: "Developed an environmental awareness platform using React, Node.js, and MongoDB. Implemented authentication and interactive map integration for location-based data. Designed responsive UI and optimized performance.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Authentication", "Maps API"],
      flagship: false,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80",
      details: [
        "Enables environmental coordinates mapping using advanced Map APIs",
        "Fully secure credential storage and token authentication",
        "Interactive dashboard showcasing carbon metrics and green cover growth logs"
      ]
    },
    {
      title: "SMARTRESUME AI",
      category: "AI Full Stack Web Application",
      description: "Built an AI-powered resume builder with ATS score analysis and smart suggestions. Integrated APIs and dynamic templates. Developed backend services for user data and resume generation.",
      tech: ["React", "Node.js", "MongoDB", "AI APIs", "Authentication"],
      flagship: false,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80",
      details: [
        "Analyzes applicant tracking system (ATS) match scores using AI models",
        "Generates targeted professional summaries and action verbs dynamically",
        "Exports structured, recruiter-ready ATS-compliant PDF formatting"
      ]
    },
    {
      title: "FITNESSPRO",
      category: "Android Application",
      description: "Developed a fitness tracking mobile application using Java and Android Studio. Implemented workout tracking and user data management. Designed intuitive mobile UI.",
      tech: ["Java", "Android Studio", "SQLite"],
      flagship: false,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      details: [
        "Logs daily workouts, calorie outputs, and performance history",
        "Responsive mobile dashboard built on native thread processing",
        "Locally cached historical metrics using lightweight SQLite storage"
      ]
    },
    {
      title: "SMART BLIND STICK",
      category: "IoT Innovation",
      description: "Developed an Arduino-based assistive smart navigation device for visually impaired users. Integrated ultrasonic sensors and buzzer alerts. Focused on safety and accessibility.",
      tech: ["Arduino", "Sensors", "Embedded Systems", "IoT"],
      flagship: false,
      image: "/blind-stick.jpg",
      details: [
        "Calculates object proximity using custom ultrasonic sensor integrations",
        "Triggers haptic feedback and acoustic alerts based on hazard distances",
        "Constructed on power-efficient Arduino hardware designs"
      ]
    }
  ],
  certifications: [
    {
      category: "AWS",
      items: [
        {
          title: "AWS Cloud Practitioner Practice Completion",
          issuer: "Amazon Web Services",
          link: "/Certificate/AWS Training & Certification.pdf"
        }
      ]
    },
    {
      category: "Forage Simulations",
      items: [
        {
          title: "JPMorgan Chase Software Engineering Simulation",
          issuer: "JPMorgan Chase & Co.",
          link: "/Certificate/JPMORGAN CHASE & CO..pdf"
        },
        {
          title: "AWS Solutions Architecture Simulation",
          issuer: "Amazon Web Services",
          link: "/Certificate/AWS Solutions Architecture Job Simulation.pdf"
        },
        {
          title: "Citi Technology Software Development Simulation",
          issuer: "Citi",
          link: "/Certificate/CITI.pdf"
        },
        {
          title: "Deloitte Data Analytics Simulation",
          issuer: "Deloitte",
          link: "/Certificate/Deloitte Australia Data Analytics.pdf"
        },
        {
          title: "Electronic Arts Software Engineering Simulation",
          issuer: "Electronic Arts",
          link: "/Certificate/Electronic Arts.pdf"
        },
        {
          title: "Telstra Software Engineering Simulation",
          issuer: "Telstra",
          link: "/Certificate/Telstra.pdf"
        }
      ]
    },
    {
      category: "Academic & Institutional",
      items: [
        {
          title: "IoT Nova 2K26 Participation",
          issuer: "IoT Nova",
          link: "/Certificate/IoT Nova.pdf"
        },
        {
          title: "C Language Certificate",
          issuer: "Academic Institution",
          link: "/Certificate/C.jpeg"
        },
        {
          title: "C++ Certificate",
          issuer: "Academic Institution",
          link: "/Certificate/C++.jpeg"
        },
        {
          title: "CCC Certificate",
          issuer: "Academic Institution",
          link: "/Certificate/CCC.jpeg"
        },
        {
          title: "Samarthya Event Coordination Certificate",
          issuer: "Samarthya",
          link: "/Certificate/Samarthya Event Coordination Certificate.jpeg"
        },
        {
          title: "CPR Training Programme Certificate",
          issuer: "Red Cross / Institution",
          link: "/Certificate/CPR.jpeg"
        }
      ]
    }
  ],
  achievements: [
    "Pioneered AI application development utilizing modern LLM integrations",
    "Engineered highly scalable Full Stack web applications",
    "Drove IoT innovation through custom embedded systems",
    "Developed intuitive Android applications for end-users",
    "Successfully completed multiple enterprise-grade software simulations",
    "Active technical participation and event coordination"
  ],
  education: [
    {
      degree: "Higher Secondary (Science)",
      institution: "Ramkrushna Vidhya Bhavan",
      university: "",
      years: "2021 – 2023",
      focus: "",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      icon: "school"
    },
    {
      degree: "B.Tech - Information Technology",
      institution: "Chhotubhai Gopalbhai Patel Institute of Technology (CGPIT)",
      university: "Uka Tarsadia University",
      years: "2023 – 2027",
      focus: "",
      subjects: ["Full Stack Development", "Application Development (Android Studio)", "Data Structures & Algorithms", "Operating Systems", "DBMS", "Software Engineering", "AI & ML Fundamentals", "Computer Networks"],
      icon: "college"
    }
  ]
};
