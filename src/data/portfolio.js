export const portfolioData = {
  personal: {
    name: "Anamika Saha",
    title: "Full-Stack Developer & AI Engineer",
    description: "Aspiring CSE graduate and Software Engineer with expertise in Full-Stack Development, Applied AI/ML and Data Operations. Proficient in architecting scalable applications and enterprise data pipelines, with a strong focus on BI and predictive modeling.",
    email: "anamikatuli28@gmail.com",
    phone: "+880-1833461622",
    location: "Dhaka, Bangladesh",
    social: {
      linkedin: "https://www.linkedin.com/in/anamika-saha-1a5b90325/",
      github: "https://github.com/anaTuli133",
      leetcode: "https://leetcode.com/u/AnamikaTuli/",
      instagram: "https://www.instagram.com/anamika._.saha/"
    }
  },

  skills: [
    {
      category: "Frontend & Web",
      icon: "💻",
      items: ["HTML5", "CSS3", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend & Cloud",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "BashScript", "Flask", "FastAPI", "REST APIs", "Uvicorn", "AWS EC2", "Linux"]
    },
    {
      category: "Programming",
      icon: "👩🏻‍💻",
      items: ["Python", "JavaScript", "C++", "C", "Java", "PHP", "SQL"]
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: ["MySQL", "MongoDB Atlas", "Oracle SQL", "MS SQL Server", "Firebase"]
    },
    {
      category: "Data & ML",
      icon: "🤖",
      items: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "NLP", "Deep Learning"]
    },
    {
      category: "Tools & Design",
      icon: "🛠️",
      items: ["Git", "Tableau", "Docker", "Netlify", "Canva", "Figma", "Canva",]
    }
  ],

  experience: [
    {
      title: "Jr. Software Engineer (Business Intelligence & Data Maintenance)",
      company: "Teletalk Bangladesh Ltd.",
      location: "Gulshan, Dhaka",
      period: "January 2026 - Present",
      responsibilities: [
        "Managed Tableau Server monitoring and BI reporting workflows to support telecom data-driven decision making",
        "Worked with Oracle databases for tablespace monitoring, SQL validation and data loading using SQL Developer",
        "Gained working knowledge of Data Warehouse architecture and ETL pipeline processes",
        "Performed in telecom data analysis, including CDR log monitoring and basic CDR validation",
        "Automated server maintenance tasks through cron jobs and bash scripting, optimizing pipeline flow and system monitoring"

      ],
      items: ["Tableau", "Python", "SQL", "Oracle", "Automation", "BashScript", "Data WareHouse", "Web Development"]
    }
  ],

  research: {
    thesis: {
      title: "Cardiovascular Disease Prediction: A Machine Learning Approach",
      supervisor: "Supervisor: Ms. Syeda Shabnam Hasan, Asst. Professor, AUST CSE",
      description: "Developed and evaluated multiple machine learning models for cardiovascular disease prediction using demographic, clinical and lifestyle data, achieving up to 90.69% accuracy with LightGBM for early risk assessment.",
      link: "https://drive.google.com/file/d/1Z2zfzc6zyRxAyQIPkrXPl9hD_hJSS4N0/view",
      tech: ["Python", "XGBoost", "LightGBM", "CatBoost", "ANN", "Scikit-Learn", "SMOTE"]
    },
    publications: [
      {
        title: "Common Reasons for Chest X-ray Examinations in Hospitals: Understanding Causes, Diagnoses,and Raising Awareness in Dhaka, Bangladesh",
        description: "Investigated the clinical indications, diagnostic outcomes, and public awareness of chest X-ray examinations through a cross-sectional study across multiple hospitals in Dhaka, providing insights for improved diagnostic practices and healthcare awareness.",
        status: "Journal Published",
        link: "https://eu-opensci.org/index.php/ejmed/article/view/42412",
        tech: ["Machine Learning", "Data Analysis", "Healthcare IT"]
      },
      {
        title: "Artificial Intelligence in Chest Radiography Comparative Study with Hospital Radiologists’ Reports in Dhaka, Bangladesh",
        description: "Evaluated the effectiveness of a DenseNet-121 deep learning model against hospital radiologists' reports, highlighting AI's role in enhancing diagnostic accuracy and supporting clinical workflows.",
        status: "Journal Published",
        link: "https://eu-opensci.org/index.php/ejai/article/view/1085",
        tech: ["AI", "Deep Learning", "CNN"]
      },
      {
        title: "A Deployment-Oriented Edge-AI Framework for Real-Time Waste Classification with Bio-metric Authentication and Secure Logging",
        description: "Designed an Edge-AI-based waste classification framework combining lightweight deep learning, biometric authentication, and secure logging to enhance real-time recycling, security and system scalability.",
        status: "Journal Pre-proceedings",
        link: "https://drive.google.com/file/d/1ujZaIVh0Eeq8se396vEAPpkeFGXWQxgi/view?usp=drive_link",
        tech: ["CNN", "IoT", "Biometrics", "Edge-AI", "Python"]
      },
      {
        title: "ZETA: A Zero-Knowledge and Threshold-Cryptographic Architecture for Scalable and MEV-Resilient Sharded Blockchains",
        description: "Proposed a scalable blockchain architecture integrating Zero-Knowledge Proofs, Threshold Cryptography, and sharding techniques to improve security, transaction throughput and resistance against MEV attacks.",
        status: "Journal Pre-proceedings",
        link: "https://drive.google.com/file/d/1Ep89Am56vscyHVd0gWv40xesoZhZk8RV/view?usp=drive_link",
        tech: ["Blockchain", "Zero-Knowledge Proofs", "Threshold Cryptography", "Python", "Sharding"]
      },
    ]
  },

  projects: [


    {
      title: "Finsweet - React Frontend",
      category: "Frontend Development",
      description: "Built a responsive static website using React and Vite with structured layouts and clean UI design.",
      tech: ["React", "Vite", "Bootstrap", "JavaScript"],
      image: "/Project/finswet.png",
      demo: "https://fins-project-anamika.vercel.app/",
      github: "https://github.com/anaTuli133/Fins-Project"
    },
    {
      title: "Teletalk Subscriber Analytics Bot",
      category: "AI & Data Analytics",
      description: "Built an AI-powered subscriber analytics chatbot for Teletalk Bangladesh featuring natural language querying, ML-based subscriber clustering, bulk MSISDN analysis and campaign recommendation on an offline LAN environment.",
      tech: ["Python", "FastAPI", "Llama 3.2", "Oracle", "Docker", "Uvicorn", "Machine Learning"],
      image: "/Project/SubscriberAnalyticsBot.png",
      demo: "https://drive.google.com/file/d/1tqgLBefYE9ajIWUTBex8_2jskGxwmx6t/view?usp=drive_link",
      github: "https://github.com/anaTuli133/Ai-campaign-bot"
    },
    {
      title: "CDR14 Web Application",
      category: "Enterprise Web Application",
      description: "Enhanced Teletalk's internal CDR investigation system by implementing time-based filtering, Oracle SQL integration, Flask web interface, CSV export and comprehensive testing for telecom data analysis workflows.",
      tech: ["Python", "Flask", "Oracle SQL", "PyQt5", "HTML"],
      image: "/Project/CDR14.png",
      demo: "https://drive.google.com/file/d/18MloCGevfZkT2BPDgrVzIKVhDziQaKJB/view?usp=sharing",
      github: "https://github.com/anaTuli133/14-column-cdr-time-"
    },
    {
      title: "CDR Log Monitor Dashboard",
      category: "Real-Time Monitoring System",
      description: "Built a real-time CDR pipeline monitoring dashboard for Teletalk, tracking file registration, merge, and L1 loading stages across multiple CBS and MSC (Huawei/Nokia) servers via SSH. Features live file-count tracking, IPDR/NTMC/TMS transfer monitoring, auto-refreshing multi-tab UI, and background threads for continuous log parsing.",
      tech: ["Python", "Flask", "Paramiko (SSH)", "Multithreading", "REST API", "HTML/CSS/JS"],
      image: "/Project/CDRMonitor.png",
      demo: "https://drive.google.com/file/d/1u_Hmm5y7Hd2SSuDRYUlL9y36q_NyqYgH/view?usp=drive_link",
      github: "https://github.com/anaTuli133/cdr-log-monitor"
    },
    {
      title: "MSISDN to IMEI Conversion API",
      category: "Enterprise REST API / Data Platform",
      description: "Built a production-grade FastAPI service for Teletalk enabling real-time conversion of subscriber numbers (MSISDN) to device identifiers (IMEI), featuring batch processing, HTTP Basic Auth, an interactive web dashboard, and a searchable view over 7.2M+ records via Oracle materialized views.",
      tech: ["Python", "FastAPI", "Oracle SQL", "SQLite", "REST API", "Swagger"],
      image: "/Project/MsisdnImeiAPI.png",
      demo: "https://drive.google.com/file/d/1WL7__ST38Bk31PEcxgmSJfJ67YiUrSI8/view?usp=drive_link",
      github: "https://github.com/anaTuli133/msisdn-to-imei"
    },
    {
      title: "Mystro - The Fighting Game",
      category: "Game Development",
      description: "Developed a 2D fighting game implementing game logic, interactive graphics and real-time rendering using C++ and iGraphics library.",
      tech: ["C++", "iGraphics", "OOP"],
      image: "/Project/Mystro.png",
      demo: "https://www.youtube.com/watch?v=Dd0RJEg0hdI",
      github: "https://github.com/anaTuli133"
    },
    {
      title: "Dino Adventure - A Bingo Game",
      category: "Generative Art & Gaming",
      description: "A dynamic web-based game developed using p5.js. The project was inspired by a creative concept on YouTube.",
      tech: ["p5.js", "JavaScript", "CSS3", "HTML5"],
      image: "/Project/day.png",
      demo: "https://editor.p5js.org/anaTuli133/full/ZoRjR5NDz",
      github: "https://github.com/anaTuli133/bingoGame"
    },

    {
      title: "To-Do App",
      category: "Cloud Deployment",
      description: "Built a web-based task manager with full CRUD functionality, hosted on AWS EC2.",
      tech: ["PHP", "AWS EC2", "CSS3", "HTML5"],
      image: "/Project/To Do app.png",
      demo: "https://anamika-to-do-app.netlify.app/",
      github: "https://github.com/anaTuli133"
    },
    {
      title: "Foodie - Food Ordering Website",
      category: "Full-Stack Website",
      description: "Developed an online food ordering website featuring interactive menus, order management.",
      tech: ["C#", "ASP.NET MVC", "MySQL"],
      image: "/Project/foodie1.png",
      demo: "https://drive.google.com/file/d/1ytUSII4Mi3WYJGCM0QhbTs_wCJkyOHtK/view",
      github: "https://github.com/anaTuli133/Food-Ordering-Website"
    },

    {
      title: "Interactive 3D Book Experience",
      category: "Computer Graphics",
      description: "Developed a web-based immersive 3D book featuring realistic page-turning physics, dynamic lighting and 360° controls. ",
      tech: ["Three.js", "WebGL", "Shaders"],
      image: "/Project/3d book.png",
      demo: "https://3d-book-cover.netlify.app/",
      github: "https://github.com/anaTuli133/Interactive-3D-Book-Experience"
    },

    {
      title: "Freelancer Job Board",
      category: "Web Application",
      description: "Developed a web-based freelancing platform enabling job posting, browsing and user management using PHP, Bootstrap and JavaScript.",
      tech: ["PHP", "Bootstrap", "JavaScript"],
      image: "/Project/freelancer.jpeg",
      demo: "https://github.com/Maliha-Akter/Freelancing-Job-Board_Project",
      github: "https://github.com/Maliha-Akter/Freelancing-Job-Board_Project"
    },
    {
      title: "MindEase: Social Media Mental Health Monitor",
      category: "NLP & Sentiment Analysis",
      description: "Built a sentiment analysis pipeline using NLTK and Scikit-learn to detect emotional patterns in mental health datasets with TF-IDF feature extraction.",
      tech: ["Python", "NLTK", "Scikit-learn", "NumPy", "TF-IDF"],
      image: "/Project/mindease.png",
      demo: "https://drive.google.com/file/d/1OTCN9y_9tlO5YTJ-KS9aBPR5fIvFm7Z4/view?usp=drive_link",
      github: "https://github.com/Fabbih/MindEase"
    },
    {
      title: "Bangla Literature AI: Summarization & Classification",
      category: "NLP / Low-Resource Language Processing",
      description: "Built an end-to-end NLP pipeline for Bangla literature featuring TF-IDF based extractive summarization with TextRank (graph-based ranking) and Multinomial Naive Bayes text classification, evaluated using ROUGE-1/ROUGE-2 metrics.",
      tech: ["Python", "Scikit-learn", "NLTK", "NetworkX", "TF-IDF", "TextRank"],
      image: "/Project/BanglaLiteratureAI.png",
      demo: "https://drive.google.com/file/d/1J61EMX48BcrUl4dMjv8KiRHhQhktSpgb/view?usp=drive_link",
      github: "https://github.com/Fabbih/bangla-literature-ai"
    }

  ],

  activities: [
    {
      title: "WebMaster",
      organization: "AIAA AUST Student Branch",
      period: "July 2025 - Dec 2025",
      icon: "🌐",
      description: [
        "Maintained the branch's official website and technical infrastructure",
        "Hosted and anchored various online and offline programs"
      ]
    },
    {
      title: "Deputy Executive of GFX Team",
      organization: "AUST Robotics Club",
      period: "May 2024 - Aug 2025",
      icon: "🎨",
      description: [
        "Led the graphic design team to create event posters and digital content",
        "Co-led Guests and Judges Handling for ARC 2.0",
        "Hosted and anchored National Robotics Event's Prize-Giving Ceremony"
      ]
    },
    {
      title: "Graphic Designer & Project Member",
      organization: "Satellite Communication Lab, AUST",
      period: "2024 - 2025",
      icon: "🛰️",
      description: [
        "Designed posters and visuals for internal and external communication",
        "Worked as Logistics sub-team member for AUST Nanosatellite Project"
      ]
    },
    {
      title: "Participant, Volunteer & Organizer",
      organization: "AUST CSE Carnival",
      period: "Spring 2022 - Spring 2024",
      icon: "🎪",
      description: [
        "Volunteered in CSE Carnival 1.0 to 3.0",
        "Participant in CSE Carnival 2.0 to 4.0",
        "Organizing Committee Member for CSE Carnival 5.0",
      ]
    },
    {
      title: "Sports & Event Organizer",
      organization: "AUST CSE Department",
      period: "Spring 2021 - Fall 2024",
      icon: "🏆",
      description: [
        "Represented the department in Football and Cricket tournaments across multiple semesters, serving as Football Team Captain (Fall 2021)",
        "Awarded Man of the Match - Spring'22 (Cricket) & Man of the Match - Fall'23 (Football)",
        "Organized major departmental events including CSE Cricket Tournament, CSE Picnic and CSE Revelry (CSE Fest) - Spring 2024"

      ]
    },
    {
      title: "Campus Ambassador",
      organization: "ICT Olympiad Bangladesh",
      period: "Mar 2022 - 2023",
      icon: "💻",
      description: [
        "Coordinated inter-department student participation in various Olympiad events",
        "Promoted ICT awareness and successfully drove registration campaigns on campus"

      ]
    },
    {
      title: "Junior Sub Executive",
      organization: "AUST Cultural Club",
      period: "Aug 2023 - Jan 2024",
      icon: "🎭",
      description: [
        "Actively participated in university cultural programs through singing and dancing performances",
        "Contributed to organizing cultural events and supporting club activities alongside executive members"
      ]
    },

  ]
};