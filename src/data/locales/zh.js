export const zhLocale = {
  seo: {
    title: '黄浩恒 | AI 系统与机器学习工程',
    description:
      '黄浩恒的个人作品集，聚焦于 LLM、多模态 AI、计算机视觉与可落地的 AI 系统工程。',
  },
  branding: {
    initials: 'HH',
    siteBrandText: 'haoheng_huang.ai',
    siteBrandSubtext: 'AI 系统 / 机器学习 / 研究',
    typingBrandSequence: ['初始化作品集...', '加载个人信息...', 'haoheng_huang.ai'],
  },
  ui: {
    navAriaLabel: '主导航',
    goToTopLabel: '返回顶部',
    toggleMenuLabel: '切换菜单',
    languageToggleLabel: '切换语言',
    languageShort: {
      en: 'EN',
      zh: '中',
    },
    backToTopLabel: '回到顶部 ↑',
  },
  navigation: [
    { id: 'about', label: '关于' },
    { id: 'experience', label: '经历' },
    { id: 'projects', label: '项目' },
    { id: 'skills', label: '技能' },
    { id: 'education', label: '教育' },
    { id: 'contact', label: '联系' },
  ],
  hero: {
    badge: '开放 2026 夏季机会',
    socialTitle: '联系方式',
    name: '黄浩恒',
    headline: 'AI Systems | LLMs | Multimodal AI | Computer Vision',
    intro: '我喜欢把 AI 系统从原型推进到真实可用的工作流，让模型能力真正服务于实际场景。',
    currentFocus: {
      title: '当前重点',
      items: ['完成计算机科学硕士学业', '推进 GeoAI 研究生课题', '参与 VerilogCoder 研究与工程项目'],
    },
    cta: [
      { label: '查看项目', link: 'projects', style: 'primary' },
      { label: '下载简历', link: 'resume', style: 'secondary', type: 'resume' },
      { label: '联系我', link: 'contact', style: 'ghost' },
    ],
  },
  sections: {
    about: {
      badge: '关于我',
      title: '我的研究兴趣与工程方式',
      summary:
        '我是一名计算机科学研究生，长期关注“能真正被使用”的 AI 系统，而不是只停留在演示层面的模型。对我来说，最有价值的问题通常出现在机器学习、软件系统与实际部署交叉的地方。\n\n我主要关注大语言模型、多模态 AI、计算机视觉、智能自动化和面向应用的 AI 系统。我喜欢从整体系统角度思考问题，关注不同模块如何协同工作，而不仅仅是单个模型的指标表现。目前我正在攻读硕士学位，并积极寻求 2026 年夏季 AI / 机器学习 / 软件工程方向的实习机会。',
    },
    experience: {
      badge: '研究与实践',
      title: '围绕 AI 系统与应用落地的研究与工程经历',
      entries: [
        {
          organization: '加州大学默塞德分校（University of California, Merced）',
          location: 'Merced, California, United States',
          period: 'Sep 2025 - Present',
          roles: [
            {
              title: '研究助理 - AI 硬件设计（VerilogCoder 项目）',
              period: 'Sep 2025 - Present',
              points: [
                '开发基于多智能体 LLM 的 Verilog 自动生成与优化系统。',
                '集成 OpenROAD-flow，对生成硬件设计进行 PPA（功耗、性能、面积）评估。',
                '构建基于综合与布局结果的反馈优化流程，实现代码迭代改进。',
                '探索规划与推理策略，提升 LLM 在结构化代码生成任务中的表现。',
                '开展 AI 驱动硬件设计实验，分析性能与面积之间的权衡。',
              ],
              skills: ['Verilog', 'Multi-Agent Systems'],
            },
            {
              title: '研究助理 - 多模态 AI（GeoAI）',
              period: 'Sep 2025 - Present',
              points: [
                '开发用于灾后建筑损伤评估的多模态 AI 系统，融合图像与文本数据。',
                '使用视觉语言模型生成语义描述，提升视觉理解能力。',
                '融合图像、文本与结构化数据，提高真实场景下的模型表现。',
                '应用生成式 AI 进行数据增强，提升模型鲁棒性。',
                '与研究团队协作推进面向大规模灾害分析的 GeoAI 应用。',
              ],
              skills: ['Multimodal Learning', 'Deep Learning'],
            },
          ],
        },
        {
          organization: '大数据系统计算技术国家工程实验室',
          location: 'Shenzhen, Guangdong, China',
          type: '实习',
          period: 'Feb 2023 - May 2025',
          roles: [
            {
              title: '研究实习生',
              points: [
                '基于华为昇腾 Atlas 200DK 开发面部动作识别系统，实现实时人机交互。',
                '使用 Python 与 OpenCV 实现人脸关键点检测与动作跟踪的计算机视觉流程。',
                '完成深度学习模型微调并优化边缘端推理性能。',
                '将模型接入移动应用，实现基于面部动作的免手操作。',
                '与研究人员和工程师协作迭代系统设计，持续提升准确率与可用性。',
              ],
              skills: ['OpenCV', 'Python'],
            },
          ],
        },
        {
          organization: 'GALA Sports Wangchen Technology',
          location: 'Shenzhen, Guangdong, China',
          type: '实习',
          period: 'Jul 2023 - Aug 2023',
          roles: [
            {
              title: '开发实习生',
              points: [
                '使用 Unity3D 与 C# 开发和维护游戏功能，参与 4 次主要迭代与 10+ 次热修复。',
                '与策划及美术协作完成资源整合，保证模块视觉一致性。',
                '基于 Stable Diffusion 训练与微调 LoRA 模型，生成 AI 游戏素材。',
              ],
              skills: ['Stable Diffusion', 'Python', 'Unity3D'],
            },
          ],
        },
        {
          organization: '深圳市物资运输工贸有限公司',
          location: 'Shenzhen, Guangdong, China',
          type: '实习',
          period: 'Jul 2022 - Aug 2022',
          roles: [
            {
              title: '数据管理实习生',
              points: [
                '负责公司数据库系统在应用层的管理与运行。',
                '进行数据分析并输出日常业务报表。',
                '在数据库测试过程中定位并修复系统问题。',
                '执行数据迁移与数据清洗工作。',
              ],
              skills: ['Python', 'Data Analysis'],
            },
          ],
        },
      ],
    },
    projects: {
      badge: '代表项目',
      title: '围绕 AI 工作流、产品体验与工程落地构建的系统',
      actionLabels: {
        github: 'GitHub',
        demo: '演示',
      },
      entries: [
        {
          title: 'ResumeForge - AI 驱动的简历构建与优化平台',
          period: 'Jan 2026 - Present',
          summary:
            '开发 AI 简历平台以优化简历创建与迭代流程。设计结构化输入体系和自适应界面组件，提升用户体验。集成 AI 写作辅助用于内容生成与优化，并以独立产品方式推进。',
          tags: ['AI Product', 'Generative AI', 'React', 'UX Engineering', 'Independent Build'],
          github: 'https://github.com/Bloomwind/resumeforgehhh',
          demo: '',
        },
        {
          title: 'VerilogCoder：面向硬件设计优化的多智能体 LLM 系统',
          period: 'Oct 2025 - Present',
          summary:
            '构建基于多智能体与大语言模型的 Verilog 生成与硬件自动化系统。集成 OpenROAD 工具链进行综合与 PPA 评估，设计反馈驱动的迭代优化流程，并探索图结构规划策略。',
          tags: ['LLM Systems', 'Multi-Agent', 'Verilog', 'OpenROAD', 'Hardware Automation'],
          github: 'https://github.com/karma0929/verilogcoder-goal-benchmark',
          demo: '',
        },
      ],
    },
    skills: {
      badge: '技能',
      title: '覆盖建模、工程实现与部署落地的核心能力',
      groups: [
        {
          category: 'AI / ML',
          items: ['Machine Learning', 'Deep Learning', 'Large Language Models', 'Multimodal Learning', 'Computer Vision', 'Generative AI'],
        },
        {
          category: '编程语言',
          items: ['Python', 'Java', 'C#', 'SQL', 'Verilog'],
        },
        {
          category: '框架 / 工具',
          items: ['OpenCV', 'Unity3D', 'Spring', 'OpenROAD', 'Git', 'Docker'],
        },
        {
          category: '其他',
          items: ['Edge AI', 'AI Systems', 'Research', 'Model Deployment'],
        },
      ],
    },
    education: {
      badge: '教育背景',
      title: '学术经历',
      labels: {
        advisor: '导师',
        coursework: '核心课程',
      },
      entries: [
        {
          school: 'University of California, Merced',
          degree: 'Master of Science - MS',
          field: 'Electrical Engineering and Computer Sciences (EECS)',
          advisor: 'Shawn Newsam',
          period: '2025 - 2027',
        },
        {
          school: 'Shenzhen University',
          degree: 'Bachelor of Science',
          field: 'Computer Software Engineering',
          period: 'Sep 2021 - Jul 2025',
          coursework: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Database Systems', 'Artificial Intelligence'],
        },
      ],
    },
    contact: {
      badge: '联系',
      title: '欢迎交流与合作',
      note:
        '如果你希望交流 AI 系统、应用机器学习、研究想法或工程实践，我很乐意沟通。也欢迎讨论合作机会和有挑战性的技术问题。',
      buttons: [
        {
          label: '发送邮件',
          link: 'email',
          style: 'primary',
          type: 'email',
        },
        {
          label: 'GitHub',
          link: 'github',
          style: 'secondary',
        },
        {
          label: 'LinkedIn',
          link: 'linkedin',
          style: 'secondary',
        },
      ],
    },
  },
  footer: {
    text: '黄浩恒 - AI 系统 / 机器学习工程方向',
  },
};
