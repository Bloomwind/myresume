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
        'I am a Computer Science graduate student passionate about building real-world AI systems that bridge research and practical applications. My interests lie in machine learning, computer vision, and large language models, with a focus on deploying AI solutions in real-world scenarios. I have hands-on experience in developing AI-driven systems. My work includes building a multi-agent LLM-based system for Verilog code generation and hardware optimization, integrating OpenROAD to evaluate PPA (power, performance, area) metrics, and designing feedback-driven optimization pipelines. I have also developed facial motion recognition systems on Huawei Ascend edge devices and built generative AI pipelines using Stable Diffusion and LoRA for game asset creation. I am particularly interested in applied AI, multimodal systems, and intelligent automation, and I enjoy working on projects that combine multiple modalities such as vision, language, and interaction. I am currently seeking Summer 2026 internship opportunities in AI, machine learning, or software engineering, where I can contribute to impactful systems and continue growing as an engineer.',
    },
    experience: {
      badge: 'Selected Experience',
      title: 'Research and engineering experience across AI systems and applications',
      entries: [
        {
          role: 'Research Assistant - AI Hardware Design (VerilogCoder Project)',
          organization: 'University of California, Merced - Merced, California, United States · Remote',
          type: 'Part-time',
          period: 'Oct 2025 - Present',
          points: [
            'Developed a multi-agent LLM-based system for automated Verilog code generation and optimization.',
            'Integrated OpenROAD-flow to evaluate PPA (power, performance, area) metrics for generated hardware designs.',
            'Designed a feedback-driven optimization pipeline using synthesis and layout results to iteratively refine generated code.',
            'Explored planning and reasoning strategies to improve LLM performance in structured code generation tasks.',
            'Conducted experiments on AI-driven hardware design workflows, analyzing trade-offs between performance and area.',
            'Skills: Verilog, Multi-Agent Systems.',
          ],
        },
        {
          role: 'Research Assistant - Multimodal AI (GeoAI)',
          organization: 'University of California, Merced - Merced, California, United States · Remote',
          type: 'Part-time',
          period: 'Sep 2025 - Present',
          points: [
            'Developed a multimodal AI system for post-disaster building damage assessment using image and text data.',
            'Leveraged vision-language models to generate semantic captions and improve visual understanding.',
            'Integrated image, text, and structured data to enhance model performance in real-world scenarios.',
            'Applied generative AI techniques to augment data and improve model robustness.',
            'Collaborated with a research team on GeoAI applications for large-scale disaster analysis.',
            'Skills: Multimodal Learning, Deep Learning.',
          ],
        },
        {
          role: 'Research Intern',
          organization:
            'National Engineering Laboratory for Big Data System Computing Technology - Shenzhen, Guangdong, China',
          type: 'Internship',
          period: 'Feb 2023 - May 2025',
          points: [
            'Developed a facial motion recognition system based on Huawei Ascend (Atlas 200DK), enabling real-time human-computer interaction.',
            'Implemented computer vision pipelines with Python and OpenCV for facial landmark detection and motion tracking.',
            'Fine-tuned deep learning models and optimized inference performance for deployment on edge devices.',
            'Integrated the model into a mobile application, enabling hands-free interaction via facial movements.',
            'Collaborated with researchers and engineers to iterate on system design and improve model accuracy and usability.',
            'Skills: OpenCV, Python.',
          ],
        },
        {
          role: 'Development Intern',
          organization: 'GALA Sports Wangchen Technology - Shenzhen, Guangdong, China',
          type: 'Internship',
          period: 'Jul 2023 - Aug 2023',
          points: [
            'Developed and maintained game features using Unity3D and C#, contributing to 4 major iterations and 10+ hotfix updates.',
            'Collaborated with designers and artists to integrate assets and ensure visual consistency across game modules.',
            'Built and fine-tuned LoRA models using Stable Diffusion to generate AI-based game assets.',
            'Skills: Stable Diffusion, Python, Unity3D.',
          ],
        },
        {
          role: 'Data Management Intern',
          organization: 'Shenzhen Materials Transport and Trade Co., Ltd. - Shenzhen, Guangdong, China',
          type: 'Internship',
          period: 'Jul 2022 - Aug 2022',
          points: [
            'Managed and operated the company’s database system at the application layer.',
            'Performed data analysis and generated daily business reports.',
            'Identified and resolved system bugs during database testing.',
            'Conducted data migration and data cleaning.',
            'Skills: Python, Data Analysis.',
          ],
        },
      ],
    },
    projects: {
      badge: 'Featured Projects',
      title: 'Representative projects in LLM systems, multimodal learning, and product engineering',
      entries: [
        {
          title: 'ResumeForge - AI-Powered Resume Builder and Optimization Platform',
          summary:
            'Jan 2026 - Present. Developed an AI-powered resume platform to streamline resume creation and optimization workflows. Designed structured input systems and adaptive UI components to improve UX. Incorporated AI-assisted writing for generating and refining resume content. Built as an independent product with monetization potential.',
          tags: ['AI Product', 'Resume Optimization', 'Generative AI', 'UX', 'Independent Build'],
          github: 'https://github.com/Bloomwind/resumeforgehhh',
          demo: 'https://github.com/Bloomwind/resumeforgehhh',
        },
        {
          title: 'VerilogCoder: Multi-Agent LLM System for Hardware Design Optimization',
          summary:
            'Oct 2025 - Present. Built a multi-agent system leveraging LLMs for Verilog generation and hardware automation. Integrated OpenROAD toolchain for synthesis and PPA evaluation. Designed iterative optimization loops using PPA feedback. Explored graph-based planning strategies. Evaluated design trade-offs between performance and area.',
          tags: ['LLM', 'Multi-Agent Systems', 'Verilog', 'OpenROAD', 'Hardware Optimization'],
          github: 'https://github.com/karma0929/verilogcoder-goal-benchmark',
          demo: 'https://github.com/karma0929/verilogcoder-goal-benchmark',
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
          degree: 'Master of Science - MS, Computer Science',
          period: '2025 - 2027 ',
        },
        {
          school: 'Shenzhen University',
          degree:
            'Bachelor of Science, Computer Software Engineering. Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Systems, Artificial Intelligence.',
          period: 'Sep 2021 - Jul 2025',
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
