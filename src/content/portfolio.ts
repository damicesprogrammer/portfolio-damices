// All portfolio copy lives here.
// Edit this file to update the site's content.

export const profile = {
  name: "Augusto D' Amices",
  email: "damicesprogrammer@gmail.com",
  github: "https://github.com/damicesprogrammer",
  linkedin: "https://www.linkedin.com/in/augustodamices",
};

export type Lang = "en" | "pt";

type Job = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

type Content = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };

  menu: string;

  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    current: string;
    ctaProjects: string;
    ctaContact: string;
  };

  about: {
    title: string;
    paragraphs: string[];
    focusTitle: string;
    focus: string[];
  };

  experience: {
    title: string;
    jobs: Job[];
  };

  projects: {
    title: string;
    featuredLabel: string;
    featured: {
      name: string;
      description: string;
      highlights: string[];
      architectureLabel: string;
      architecture: string;
      tech: string[];
      github: string;
      repositoryUrl: string;
    };
  };

  skills: {
    title: string;
    groups: {
      name: string;
      items: string[];
    }[];
  };

  education: {
    title: string;
    degree: string;
    school: string;
    studyingLabel: string;
    studying: string[];
  };

  contact: {
    title: string;
    text: string;
    email: string;
  };

  footer: {
    builtBy: string;
  };
};

const techAP = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "pgvector",
  "RAG",
  "AI Agents",
  "OpenAI API",
  "Docker",
  "React",
];

const techJob = [
  "Oracle",
  "SQL",
  "PL/SQL",
  "REST APIs",
  "System Integration",
];

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },

    menu: "Menu",

    hero: {
      eyebrow: "Python · AI Engineering · Oracle PL/SQL",

      title:
        "Software developer combining enterprise systems, data and AI.",

      intro:
        "I work with Oracle, PL/SQL, REST APIs and enterprise integrations, while building Python and AI projects focused on real business workflows.",

      current:
        "Currently building an Accounts Payable AI Copilot and studying Artificial Intelligence at PUC.",

      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },

    about: {
      title: "About",

      paragraphs: [
        "My professional background is in enterprise and healthcare systems, working with Oracle databases, SQL, PL/SQL and integrations that support critical financial and operational workflows.",

        "Today, I am expanding that foundation into Python, Machine Learning and AI engineering, building projects that combine business data, software engineering and intelligent systems to reduce manual work and improve decision-making.",
      ],

      focusTitle: "Focus areas",

      focus: [
        "Python and AI Engineering",
        "Machine Learning",
        "AI agents and RAG",
        "Oracle SQL / PL/SQL",
        "REST APIs and system integrations",
        "Process automation",
        "Database performance and troubleshooting",
      ],
    },

    experience: {
      title: "Experience",

      jobs: [
        {
          role: "Database Developer / Systems Integration",

          company: "Tecnoage | Soluções Tecnologia",

          period: "2024 — Present",

          summary:
            "Development, integration and support of enterprise healthcare systems, with a strong focus on Oracle databases, financial workflows and system interoperability.",

          highlights: [
            "Develop and maintain Oracle SQL and PL/SQL procedures, packages, triggers and database routines used by enterprise applications.",

            "Design and support integrations between internal and third-party systems using REST APIs and database integration flows.",

            "Work with financial, accounting and healthcare workflows, translating business requirements into technical solutions.",

            "Automate recurring operational processes and reduce manual steps across system workflows.",

            "Investigate database performance issues, integration failures and production incidents.",
          ],

          tech: techJob,
        },
      ],
    },

    projects: {
      title: "Projects",

      featuredLabel: "Featured project",

      featured: {
        name: "Accounts Payable AI Copilot",

        description:
          "An AI-powered accounts payable application that combines financial workflows, tool-using AI agents and Retrieval-Augmented Generation to help users explore operational data and understand accounts payable information through natural language.",

        highlights: [
          "AI agent with tools for querying accounts payable data, including titles, suppliers, statuses and overdue balances.",

          "RAG over internal documentation using PostgreSQL and pgvector for semantic retrieval.",

          "Financial workflows covering payable titles, suppliers, status tracking and operational summaries.",

          "FastAPI backend with a React frontend and Docker-based development environment.",

          "Automated tests and evaluation suites covering agent behavior, financial rules, RAG and safety scenarios.",
        ],

        architectureLabel: "Architecture",

        architecture:
          "React → FastAPI → AI Agents / RAG → PostgreSQL + pgvector",

        tech: techAP,

        github: "Source code",

        repositoryUrl:
          "https://github.com/damicesprogrammer/accounts-payable-ai-copilot",
      },
    },

    skills: {
      title: "Skills",

      groups: [
        {
          name: "Languages",
          items: ["Python", "SQL", "PL/SQL"],
        },

        {
          name: "AI & Machine Learning",
          items: [
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "RAG",
            "AI Agents",
            "OpenAI API",
            "MLflow",
          ],
        },

        {
          name: "Backend & Integration",
          items: [
            "FastAPI",
            "REST APIs",
            "System Integration",
            "Process Automation",
          ],
        },

        {
          name: "Databases",
          items: [
            "Oracle",
            "PostgreSQL",
            "pgvector",
          ],
        },

        {
          name: "Engineering Tools",
          items: [
            "Docker",
            "Git",
            "GitHub",
            "pytest",
          ],
        },
      ],
    },

    education: {
      title: "Education",

      degree: "Technology Degree in Artificial Intelligence",

      school: "PUC · In progress",

      studyingLabel: "Main areas of study",

      studying: [
        "Machine Learning",
        "Artificial Intelligence",
        "Software Engineering",
        "Data Engineering",
      ],
    },

    contact: {
      title: "Contact",

      text:
        "Open to opportunities and conversations about AI engineering, Machine Learning, backend and data systems, databases and system integration. The best way to reach me is by email.",

      email: "Send an email",
    },

    footer: {
      builtBy: "Designed and built by",
    },
  },

  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },

    menu: "Menu",

    hero: {
      eyebrow: "Python · Engenharia de IA · Oracle PL/SQL",

      title:
        "Desenvolvedor de software unindo sistemas corporativos, dados e IA.",

      intro:
        "Trabalho com Oracle, PL/SQL, APIs REST e integrações corporativas, enquanto desenvolvo projetos em Python e IA voltados para problemas reais de negócio.",

      current:
        "Atualmente desenvolvendo um Accounts Payable AI Copilot e cursando Inteligência Artificial na PUC.",

      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
    },

    about: {
      title: "Sobre",

      paragraphs: [
        "Minha experiência profissional está concentrada em sistemas corporativos e de saúde, trabalhando com bancos Oracle, SQL, PL/SQL e integrações que sustentam processos financeiros e operacionais críticos.",

        "Hoje estou expandindo essa base para Python, Machine Learning e engenharia de IA, desenvolvendo projetos que combinam dados de negócio, engenharia de software e sistemas inteligentes para reduzir trabalho manual e apoiar melhores decisões.",
      ],

      focusTitle: "Áreas de foco",

      focus: [
        "Python e Engenharia de IA",
        "Machine Learning",
        "Agentes de IA e RAG",
        "Oracle SQL / PL/SQL",
        "APIs REST e integração de sistemas",
        "Automação de processos",
        "Performance e troubleshooting de banco de dados",
      ],
    },

    experience: {
      title: "Experiência",

      jobs: [
        {
          role: "Desenvolvedor de Banco de Dados / Integrações",

          company: "Tecnoage | Soluções Tecnologia",

          period: "2024 — Atual",

          summary:
            "Desenvolvimento, integração e suporte de sistemas corporativos na área da saúde, com forte atuação em bancos Oracle, fluxos financeiros e interoperabilidade entre sistemas.",

          highlights: [
            "Desenvolvimento e manutenção de procedures, packages, triggers e rotinas utilizando Oracle SQL e PL/SQL.",

            "Desenvolvimento e suporte de integrações entre sistemas internos e externos utilizando APIs REST e fluxos de integração via banco de dados.",

            "Atuação em fluxos financeiros, contábeis e hospitalares, traduzindo necessidades de negócio em soluções técnicas.",

            "Automação de processos operacionais recorrentes, reduzindo atividades manuais dentro dos fluxos dos sistemas.",

            "Investigação de problemas de performance, falhas de integração e incidentes em produção.",
          ],

          tech: [
            "Oracle",
            "SQL",
            "PL/SQL",
            "APIs REST",
            "Integração de sistemas",
          ],
        },
      ],
    },

    projects: {
      title: "Projetos",

      featuredLabel: "Projeto principal",

      featured: {
        name: "Accounts Payable AI Copilot",

        description:
          "Aplicação de contas a pagar com IA que combina fluxos financeiros, agentes capazes de utilizar ferramentas e Retrieval-Augmented Generation para permitir a consulta e compreensão de dados operacionais através de linguagem natural.",

        highlights: [
          "Agente de IA com ferramentas para consultar dados de contas a pagar, incluindo títulos, fornecedores, status e saldos vencidos.",

          "RAG sobre documentação interna utilizando PostgreSQL e pgvector para busca semântica.",

          "Fluxos financeiros envolvendo títulos a pagar, fornecedores, acompanhamento de status e resumos operacionais.",

          "Backend em FastAPI com frontend em React e ambiente de desenvolvimento baseado em Docker.",

          "Testes automatizados e suítes de avaliação cobrindo comportamento do agente, regras financeiras, RAG e cenários de segurança.",
        ],

        architectureLabel: "Arquitetura",

        architecture:
          "React → FastAPI → Agentes de IA / RAG → PostgreSQL + pgvector",

        tech: techAP,

        github: "Código-fonte",

        repositoryUrl:
          "https://github.com/damicesprogrammer/accounts-payable-ai-copilot",
      },
    },

    skills: {
      title: "Habilidades",

      groups: [
        {
          name: "Linguagens",
          items: ["Python", "SQL", "PL/SQL"],
        },

        {
          name: "IA & Machine Learning",
          items: [
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "RAG",
            "Agentes de IA",
            "OpenAI API",
            "MLflow",
          ],
        },

        {
          name: "Backend & Integrações",
          items: [
            "FastAPI",
            "APIs REST",
            "Integração de sistemas",
            "Automação de processos",
          ],
        },

        {
          name: "Bancos de dados",
          items: [
            "Oracle",
            "PostgreSQL",
            "pgvector",
          ],
        },

        {
          name: "Ferramentas de engenharia",
          items: [
            "Docker",
            "Git",
            "GitHub",
            "pytest",
          ],
        },
      ],
    },

    education: {
      title: "Formação",

      degree: "Tecnologia em Inteligência Artificial",

      school: "PUC · Em andamento",

      studyingLabel: "Principais áreas de estudo",

      studying: [
        "Machine Learning",
        "Inteligência Artificial",
        "Engenharia de Software",
        "Engenharia de Dados",
      ],
    },

    contact: {
      title: "Contato",

      text:
        "Aberto a oportunidades e conversas sobre engenharia de IA, Machine Learning, sistemas backend e de dados, bancos de dados e integração de sistemas. A melhor forma de entrar em contato comigo é por e-mail.",

      email: "Enviar e-mail",
    },

    footer: {
      builtBy: "Projetado e desenvolvido por",
    },
  },
};