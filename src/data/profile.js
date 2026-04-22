const links = {
  github: 'https://github.com/your-github-username',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-id/',
  email: 'your-email@example.com',
  resumePdf: '/resume-placeholder.pdf',
};

export const profileData = {
  seo: {
    title: 'Haoheng Huang | AI Systems & ML Engineer',
    description:
      'Portfolio of Haoheng Huang, an AI systems and ML engineer focused on LLMs, multimodal AI, computer vision, and practical deployment.',
  },
  branding: {
    initials: 'HH',
    accentLabel: 'AI Systems Portfolio',
  },
  links,
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    badge: 'AI/ML Engineering Candidate',
    socialTitle: 'Connect',
    name: 'Haoheng Huang',
    headline: 'AI Systems | LLMs | Multimodal AI | Computer Vision',
    intro:
      'M.S. Computer Science student at UC Merced building real-world AI systems across model engineering, multimodal understanding, and deployment-focused software pipelines.',
    cta: [
      { label: 'View Projects', href: '#projects', style: 'primary' },
      { label: 'Download Resume', href: links.resumePdf, style: 'secondary' },
      { label: 'Contact Me', href: '#contact', style: 'ghost' },
    ],
  },
  sections: {
    about: {
      badge: 'Profile',
      title: 'Building practical AI systems from research to deployment',
      summary:
        'I am a Computer Science graduate student focused on building real-world AI systems that bridge machine learning, software engineering, and system design. My interests include large language models, multimodal AI, computer vision, generative AI, and practical deployment. I have experience across AI-driven hardware design, post-disaster multimodal analysis, edge AI, and generative content pipelines. I am seeking Summer 2026 internship opportunities in AI, ML, or software engineering.',
    },
    experience: {
      badge: 'Selected Experience',
      title: 'Research and engineering experience across AI systems and applications',
      entries: [
        {
          role: 'Research Assistant - AI Systems (VerilogCoder Project)',
          organization: 'University of California, Merced',
          type: 'Part-time / Research',
          period: '2025 - Present',
          points: [
            'Developed a multi-agent LLM-based system for automated Verilog code generation and optimization.',
            'Integrated OpenROAD-flow to evaluate PPA (power, performance, area) metrics for generated hardware designs.',
            'Designed a feedback-driven optimization pipeline using synthesis and layout results to iteratively refine generated code.',
            'Explored planning and reasoning strategies to improve LLM performance in structured code generation tasks.',
            'Conducted experiments on AI-driven hardware design workflows, analyzing trade-offs between performance and area.',
          ],
        },
        {
          role: 'Research Assistant - Multimodal AI (GeoAI Project)',
          organization: 'University of California, Merced',
          type: 'Research',
          period: '2024 - Present',
          points: [
            'Developed a multimodal AI system for post-disaster building damage assessment using image and text data.',
            'Leveraged vision-language models to generate semantic captions and improve visual understanding.',
            'Integrated image, text, and structured data to enhance model performance in real-world scenarios.',
            'Applied generative AI techniques to augment data and improve model robustness.',
            'Collaborated with a research team on GeoAI applications for large-scale disaster analysis.',
          ],
        },
        {
          role: 'Research / AI Project - Huawei Ascend Facial Motion Recognition',
          organization:
            'National Engineering Laboratory for Big Data System Computing Technology',
          type: 'Project / Research',
          period: '2023 - 2024',
          points: [
            'Developed a facial motion recognition system on Huawei Ascend edge devices for real-time human-computer interaction.',
            'Implemented computer vision pipelines with Python and OpenCV for facial landmark detection and motion tracking.',
            'Fine-tuned deep learning models and optimized inference performance for edge deployment.',
            'Integrated the system into a mobile application for hands-free interaction via facial movements.',
          ],
        },
        {
          role: 'Game Development / Generative AI Intern',
          organization: 'GalaSports',
          type: 'Internship',
          period: '2022 - 2023',
          points: [
            'Developed and maintained game features using Unity3D and C#, contributing to multiple iterations and 10+ hotfix updates.',
            'Collaborated with designers and artists to integrate assets and ensure visual consistency.',
            'Built and fine-tuned LoRA models using Stable Diffusion to generate AI-based game assets.',
            'Delivered customized art assets aligned with multiple game styles, improving production efficiency.',
          ],
        },
        {
          role: 'Data Management Intern',
          organization: 'Shenzhen Materials Transport Industrial Trade Co., Ltd.',
          type: 'Internship',
          period: '2021 - 2022',
          points: [
            'Managed application-layer database workflows and supported stable data operations.',
            'Performed data analysis and generated daily reports.',
            'Conducted data migration, cleaning, and testing.',
            'Identified and resolved bugs to improve reliability and business alignment.',
          ],
        },
      ],
    },
    projects: {
      badge: 'Featured Projects',
      title: 'Representative projects in LLM systems, multimodal learning, and product engineering',
      entries: [
        {
          title: 'VerilogCoder: Multi-Agent LLM System for Hardware Design Optimization',
          summary:
            'A research-oriented AI system using multi-agent LLMs to generate Verilog RTL, evaluate designs with OpenROAD, and iteratively refine them using PPA feedback.',
          tags: ['LLM', 'Multi-Agent Systems', 'Verilog', 'OpenROAD', 'Hardware Design', 'Python'],
          github: 'https://github.com/your-github-username/verilogcoder',
          demo: 'https://example.com/verilogcoder',
        },
        {
          title: 'GeoAI Multimodal Damage Assessment',
          summary:
            'A multimodal learning project for post-disaster damage assessment combining image, text, and structured data, with vision-language caption generation and robust analysis workflows.',
          tags: ['Multimodal AI', 'Computer Vision', 'Vision-Language Models', 'Python'],
          github: 'https://github.com/your-github-username/geoai-damage-assessment',
          demo: 'https://example.com/geoai',
        },
        {
          title: 'ResumeForge',
          summary:
            'An AI-powered resume builder and optimization platform designed to help users structure, write, and refine resumes through an improved workspace-style editing experience.',
          tags: ['Product Engineering', 'AI Writing', 'React', 'Full Stack', 'UX'],
          github: 'https://github.com/your-github-username/resumeforge',
          demo: 'https://example.com/resumeforge',
        },
        {
          title: 'LLM-Based Code Vulnerability Detection System',
          summary:
            'An AI-assisted code vulnerability analysis system with backend model support and an IDE plugin workflow for automated code submission, analysis, and feedback.',
          tags: ['LLM', 'Secure Code Analysis', 'Java', 'Spring', 'Plugin Development'],
          github: 'https://github.com/your-github-username/llm-vuln-detector',
          demo: 'https://example.com/llm-vuln-detector',
        },
      ],
    },
    skills: {
      badge: 'Skills',
      title: 'Core capabilities across modeling, engineering, and deployment',
      groups: [
        {
          category: 'AI / ML',
          items: [
            'Machine Learning',
            'Deep Learning',
            'Large Language Models',
            'Multimodal Learning',
            'Computer Vision',
            'Generative AI',
          ],
        },
        {
          category: 'Programming',
          items: ['Python', 'Java', 'C#', 'SQL', 'Verilog'],
        },
        {
          category: 'Frameworks / Tools',
          items: ['OpenCV', 'Unity3D', 'Spring', 'OpenROAD', 'Git', 'Docker'],
        },
        {
          category: 'Other',
          items: ['Edge AI', 'AI Systems', 'Research', 'Model Deployment'],
        },
      ],
    },
    education: {
      badge: 'Education',
      title: 'Academic background',
      entries: [
        {
          school: 'University of California, Merced',
          degree: 'M.S. in Computer Science',
          period: 'Current',
        },
        {
          school: 'Shenzhen University',
          degree: 'B.Eng., Software Engineering / Computer Science-related background',
          period: 'Completed',
        },
      ],
    },
    contact: {
      badge: 'Contact',
      title: 'Open to Summer 2026 AI/ML/SWE internship opportunities',
      note:
        'I am open to internship roles, applied research collaborations, and engineering opportunities related to AI systems, multimodal learning, and deployment-focused ML.',
      buttons: [
        {
          label: 'Send Email',
          href: 'haohenghuang@ucmerced.edu',
          style: 'primary',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/karma0929',
          style: 'secondary',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/haoheng-huang-158295390/',
          style: 'secondary',
        },
      ],
    },
  },
  footer: {
    text: 'Haoheng Huang - AI Systems / ML Engineer Candidate',
  },
};
