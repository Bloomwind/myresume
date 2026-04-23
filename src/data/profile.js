const links = {
  // Replace these in one place when publishing.
  github: 'https://github.com/karma0929',
  linkedin: 'https://www.linkedin.com/in/haoheng-huang-158295390/',
  email: 'haohenghuang@ucmerced.edu',
  // Keep this placeholder path until your final resume is ready.
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
    badge: 'Summer 2026 Internship Candidate',
    socialTitle: 'Connect',
    name: 'Haoheng Huang',
    headline: 'AI Systems | LLMs | Multimodal AI | Computer Vision',
    intro:
      'I enjoy building AI systems that move past demos and into real workflows, where models, software, and product decisions have to work together in practice.',
    currentFocus: {
      title: 'Current Focus',
      items: [
        'Completing my M.S. in Computer Science',
        'Advancing my GeoAI graduate research project',
        'Contributing to the VerilogCoder part-time research and engineering project',
      ],
    },
    cta: [
      { label: 'View Projects', href: '#projects', style: 'primary' },
      { label: 'Download Resume', href: links.resumePdf, style: 'secondary', type: 'resume' },
      { label: 'Contact Me', href: '#contact', style: 'ghost' },
    ],
  },
  sections: {
    about: {
      badge: 'About Me',
      title: 'A Little About How I Think',
      summary:
        'I am a Computer Science graduate student who likes building things that are useful outside of a demo setting. I am most interested in AI systems that can actually run in the real world, especially when machine learning, software engineering, and deployment all have to fit together cleanly.\n\nThe problems I enjoy most sit at the intersection of large language models, multimodal AI, computer vision, intelligent automation, and applied AI systems. I like thinking about how the full system behaves, not just how a single model performs in isolation. I am currently pursuing my M.S. and looking for Summer 2026 internships in AI, machine learning, or software engineering.',
    },
    experience: {
      badge: 'Selected Experience',
      title: 'Research and engineering work across AI systems and applied ML',
      entries: [
        {
          organization: 'University of California, Merced',
          location: 'Merced, California, United States · Remote',
          type: 'Part-time',
          period: 'Oct 2025 - Present',
          roles: [
            {
              title: 'Research Assistant - AI Hardware Design (VerilogCoder Project)',
              period: 'Oct 2025 - Present',
              points: [
                'Developed a multi-agent LLM-based system for automated Verilog code generation and optimization.',
                'Integrated OpenROAD-flow to evaluate PPA (power, performance, area) metrics for generated hardware designs.',
                'Designed a feedback-driven optimization pipeline using synthesis and layout results to iteratively refine generated code.',
                'Explored planning and reasoning strategies to improve LLM performance in structured code generation tasks.',
                'Conducted experiments on AI-driven hardware design workflows, analyzing trade-offs between performance and area.',
              ],
              skills: ['Verilog', 'Multi-Agent Systems'],
            },
            {
              title: 'Research Assistant - Multimodal AI (GeoAI)',
              period: 'Sep 2025 - Present',
              points: [
                'Developed a multimodal AI system for post-disaster building damage assessment using image and text data.',
                'Leveraged vision-language models to generate semantic captions and improve visual understanding.',
                'Integrated image, text, and structured data to enhance model performance in real-world scenarios.',
                'Applied generative AI techniques to augment data and improve model robustness.',
                'Collaborated with a research team on GeoAI applications for large-scale disaster analysis.',
              ],
              skills: ['Multimodal Learning', 'Deep Learning'],
            },
          ],
        },
        {
          organization: 'National Engineering Laboratory for Big Data System Computing Technology',
          location: 'Shenzhen, Guangdong, China',
          type: 'Internship',
          period: 'Feb 2023 - May 2025',
          roles: [
            {
              title: 'Research Intern',
              points: [
                'Developed a facial motion recognition system based on Huawei Ascend (Atlas 200DK), enabling real-time human-computer interaction.',
                'Implemented computer vision pipelines with Python and OpenCV for facial landmark detection and motion tracking.',
                'Fine-tuned deep learning models and optimized inference performance for deployment on edge devices.',
                'Integrated the model into a mobile application, enabling hands-free interaction via facial movements.',
                'Collaborated with researchers and engineers to iterate on system design and improve model accuracy and usability.',
              ],
              skills: ['OpenCV', 'Python'],
            },
          ],
        },
        {
          organization: 'GALA Sports Wangchen Technology',
          location: 'Shenzhen, Guangdong, China',
          type: 'Internship',
          period: 'Jul 2023 - Aug 2023',
          roles: [
            {
              title: 'Development Intern',
              points: [
                'Developed and maintained game features using Unity3D and C#, contributing to 4 major iterations and 10+ hotfix updates.',
                'Collaborated with designers and artists to integrate assets and ensure visual consistency across game modules.',
                'Built and fine-tuned LoRA models using Stable Diffusion to generate AI-based game assets.',
              ],
              skills: ['Stable Diffusion', 'Python', 'Unity3D'],
            },
          ],
        },
        {
          organization: 'Shenzhen Materials Transport and Trade Co., Ltd.',
          location: 'Shenzhen, Guangdong, China',
          type: 'Internship',
          period: 'Jul 2022 - Aug 2022',
          roles: [
            {
              title: 'Data Management Intern',
              points: [
                'Managed and operated the company’s database system at the application layer.',
                'Performed data analysis and generated daily business reports.',
                'Identified and resolved system bugs during database testing.',
                'Conducted data migration and data cleaning.',
              ],
              skills: ['Python', 'Data Analysis'],
            },
          ],
        },
      ],
    },
    projects: {
      badge: 'Featured Projects',
      title: 'Systems I built around AI workflows, product UX, and deployment constraints',
      entries: [
        {
          title: 'ResumeForge - AI-Powered Resume Builder and Optimization Platform',
          period: 'Jan 2026 - Present',
          summary:
            'Developed an AI-powered resume platform to streamline resume creation and optimization workflows. Designed structured input systems and adaptive UI components to improve UX. Incorporated AI-assisted writing for generating and refining resume content. Built as an independent product with monetization potential.',
          tags: ['AI Product', 'Generative AI', 'React', 'UX Engineering', 'Independent Build'],
          github: 'https://github.com/Bloomwind/resumeforgehhh',
          demo: '',
        },
        {
          title: 'VerilogCoder: Multi-Agent LLM System for Hardware Design Optimization',
          period: 'Oct 2025 - Present',
          summary:
            'Built a multi-agent system leveraging LLMs for Verilog generation and hardware automation. Integrated OpenROAD toolchain for synthesis and PPA evaluation. Designed iterative optimization loops using PPA feedback. Explored graph-based planning strategies and evaluated design trade-offs between performance and area.',
          tags: ['LLM Systems', 'Multi-Agent', 'Verilog', 'OpenROAD', 'Hardware Automation'],
          github: 'https://github.com/karma0929/verilogcoder-goal-benchmark',
          demo: '',
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
          degree: 'Master of Science - MS',
          field: 'Computer Science',
          period: '2025 - 2027',
        },
        {
          school: 'Shenzhen University',
          degree: 'Bachelor of Science',
          field: 'Computer Software Engineering',
          period: 'Sep 2021 - Jul 2025',
          coursework: [
            'Data Structures',
            'Algorithms',
            'Operating Systems',
            'Computer Networks',
            'Database Systems',
            'Artificial Intelligence',
          ],
        },
      ],
    },
    contact: {
      badge: 'Contact',
      title: 'Open to Summer 2026 AI/ML/SWE internship opportunities',
      note:
        'If you are hiring for internship roles or collaborating on applied AI research and engineering, I would love to connect.',
      buttons: [
        {
          label: 'Send Email',
          href: links.email,
          style: 'primary',
          type: 'email',
        },
        {
          label: 'GitHub',
          href: links.github,
          style: 'secondary',
        },
        {
          label: 'LinkedIn',
          href: links.linkedin,
          style: 'secondary',
        },
      ],
    },
  },
  footer: {
    text: 'Haoheng Huang - AI Systems / ML Engineer Candidate',
  },
};
