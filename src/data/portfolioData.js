export const portfolioData = {
  about: {
    name: 'Arun Kumar Gupta',
    greeting: "Hello, I'm",
    role: 'Software Developer & ML Enthusiast',
    description: 'Passionate about building, learning, and experimenting with modern technologies. Interested in AI, backend development, automation, and data-driven applications.',
    resumeUrl: 'assets/Arun_Kumar_Gupta_Resume.pdf',
    avatarUrl: 'assets/Arun_Kumar_Gupta_transparent.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/arun-kumar-gupta-446748267/',
      github: 'https://github.com/arunkg005',
      email: 'akgindian55@gmail.com',
    }
  },
  education: {
    schooling: {
      name: 'Greenway Modern School, Roorkee',
      board: 'CBSE',
      url: 'https://greenwayroorkee.com/',
      classes: [
        {
          title: 'Class X',
          year: '2020',
          result: '93.40%',
          pdfUrl: 'assets/cbse_10th_result_2020.pdf',
        },
        {
          title: 'Class XII',
          year: '2022',
          result: '74.80%',
          pdfUrl: 'assets/cbse_12th_result_2022.pdf',
        }
      ]
    },
    university: {
      degree: 'B.Tech in Computer Science & Engineering',
      college: 'Maharishi Markandeshwar University, Ambala',
      url: 'https://www.mmumullana.org/',
      years: '2023 - 2027',
      cgpa: '7.88',
      semesterLimit: '5th Semester',
      description: 'Focusing on core Computer Science and Engineering concepts, Machine Learning applications, and backend REST APIs.'
    }
  },
  skills: [
    {
      title: 'Technical Skills',
      subsections: [
        {
          name: 'Languages',
          skills: ['Python', 'Java', 'SQL'],
        },
        {
          name: 'Frameworks & Technologies',
          skills: ['Django', 'Flask', 'REST APIs', 'Machine Learning', 'NLP'],
        },
      ],
    },
    {
      title: 'Tools & AI Platforms',
      subsections: [
        {
          name: 'Tools & Platforms',
          skills: ['Git', 'GitHub', 'Docker', 'PostgreSQL', 'AWS', 'Render', 'Android Studio'],
        },
        {
          name: 'AI Tools',
          skills: ['GitHub Copilot', 'Codex', 'Antigravity'],
        },
      ],
    },
    {
      title: 'Interpersonal & Communication',
      subsections: [
        {
          name: 'Professional Skills',
          skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Continuous Learning'],
        },
        {
          name: 'Languages Spoken',
          skills: ['English', 'Hindi'],
        },
      ],
    },
  ],
  projects: [
    {
      title: 'ADAPT Platform',
      type: 'Web App',
      image: 'assets/ADAPT.png',
      desc: 'A centralized caretaker assistance platform designed to streamline patient care management and improve caregiver accessibility across web and mobile devices. Integrates Gemini-powered AI assistance for contextual healthcare support.',
      tags: ['Django', 'PostgreSQL', 'Gemini AI', 'Python', 'Render'],
      liveLink: 'https://adapt-web-tbc7.onrender.com/',
      codeLink: 'https://github.com/arunkg005/ADAPT',
    },
    {
      title: 'SAIGE',
      type: 'AI / Web App',
      image: 'assets/Saige.png',
      desc: 'A cutting-edge application focused on advanced data intelligence and AI-driven automation for enhanced decision making and streamlined workflows.',
      tags: ['React', 'Python', 'Machine Learning', 'API'],
      codeLink: 'https://github.com/arunkg005/Saige',
    },
    {
      title: 'Churn Prediction',
      type: 'Machine Learning',
      image: 'assets/Chrun prediction.png',
      desc: 'Telecom Customer Churn Prediction System featuring a machine learning-powered Flask API and an independent dashboard interface. Employs Logistic Regression and Scikit-learn for customer behavior analytics.',
      tags: ['Flask', 'Python', 'Scikit-Learn', 'Docker', 'Vercel'],
      liveLink: 'https://churn-prediction-lwz4ics58-akgindian55-6827s-projects.vercel.app/',
      codeLink: 'https://github.com/arunkg005/churn-prediction-api',
    },
    {
      title: 'Digit Recognition',
      type: 'Deep Learning',
      image: 'assets/digit_recognition.png',
      desc: 'A deep learning web application powered by a custom neural network. Features a FastAPI backend serving a browser canvas drawing board for real-time handwritten digit recognition and telemetry visualization.',
      tags: ['FastAPI', 'TensorFlow', 'Python', 'HTML Canvas', 'JavaScript'],
      liveLink: 'https://huggingface.co/spaces/Arun-Acc001/Handwritten_Digit_Recognition',
      codeLink: 'https://github.com/arunkg005/Handwriiten-Digit-Recongnition',
    },
    {
      title: 'SysPulse',
      type: 'Android App',
      image: 'assets/syspulse_logo.jpg',
      imageBg: '#ffffff',
      imagePadding: '20px',
      desc: 'Android application using Java and Android Studio to monitor CPU usage, memory statistics, sensors, and system health diagnostics. Features an interactive dashboard for hardware telemetry visualization.',
      tags: ['Android SDK', 'Java', 'XML', 'Android Studio'],
      liveLink: 'https://github.com/arunkg005/Syspulse/releases/tag/v1.0.0',
      liveLabel: 'Get APK',
      liveIcon: 'download',
      codeLink: 'https://github.com/arunkg005/Syspulse',
    },
  ],
  experience: [
    {
      role: 'AI Web Development Intern',
      company: 'InAmigos (Remote)',
      date: 'June 2026 - Present',
      points: [
        'Utilized AI-powered tools and low-code/no-code platforms to design, build, and deploy clean personal websites.',
        'Explored AI-driven layout generation, responsive design patterns, and digital brand presence.',
      ],
    },
    {
      role: 'Machine Learning Intern',
      company: 'SmartED Innovations (Remote)',
      date: 'May 2025 - Aug 2025',
      points: [
        'Developed a customer churn prediction system using Logistic Regression and Scikit-learn.',
        'Designed REST APIs, handled backend workflows, and deployed the application using Docker and Render.',
        'Built model API and contributed to full-stack development pipeline.',
      ],
    },
  ],
  certificates: [
    {
      id: 'agile',
      title: 'Agile Scrum in Practice',
      issuer: 'Infosys Springboard',
      pdf: 'assets/Infosys_Agile_Scrum_Certificate.pdf',
      colorTheme: 'agile', // used to style SVG badge
      badgeIcon: 'developer_board'
    },
    {
      id: 'csa',
      title: 'ServiceNow CSA',
      issuer: 'ServiceNow',
      pdf: 'assets/ServiceNow_CSA_Certificate.pdf',
      colorTheme: 'servicenow',
      badgeIcon: 'cloud_done'
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      issuer: 'Infosys Springboard',
      pdf: 'assets/Machine_Learning_Certificate.pdf',
      colorTheme: 'ml',
      badgeIcon: 'brain'
    },
  ],
  activities: [
    {
      icon: 'music_note',
      title: 'Singing',
      desc: 'Vocal performances and creative musical hobbies.',
    },
    {
      icon: 'psychology',
      title: 'Chess',
      desc: 'Strategic, tactical, and analytical gaming skills.',
    },
    {
      icon: 'sports_tennis',
      title: 'Badminton',
      desc: 'Active athletic recreation and physical fitness.',
    },
    {
      icon: 'emoji_events',
      title: 'Quizzes & Hackathons',
      desc: 'Participating in competitive quiz bowls and programming hackathons.',
    },
  ]
};
