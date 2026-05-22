export interface ProfileInfo {
  name: string;
  role: string;
  location: string;
  mode: string;
  email: string;
  linkedin: string;
  github: string;
  headline: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceInfo {
  role: string;
  company: string;
  period: string;
  industry?: string;
  description: string;
  highlights: string[];
  type?: string;
  location?: string;
  url?: string;
  tech?: string[];
}

export interface ProjectInfo {
  title: string;
  type: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export interface StudyInfo {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface personalInfo {
  title: string;
  type: string;
  description: string;
  stack: string[];
  features: string[];
  status: string;
  purpose: string;
}

export interface PersonalProjectInfo {
  title: string;
  type: string;
  description: string;
  stack: string[];
  features: string[];
  status: string;
  purpose: string;
}

export interface CourseInfo {
  title: string;
  instructor: string;
  category: string;
  technologies: string[];
}

export interface PortfolioData {
  profile: ProfileInfo;
  about: { text: string };
  skills: SkillGroup[];
  experience: ExperienceInfo[];
  projects: ProjectInfo[];
  studies: StudyInfo[];
  courses: CourseInfo[];
  personals: PersonalProjectInfo[];
}

export interface MultilingualPortfolio {
  es: PortfolioData;
  en: PortfolioData;
}

export const portfolioData: MultilingualPortfolio = {
  es: {
    profile: {
      name: "Joaquín Bruno",
      role: "Full Stack Developer",
      location: "La Plata, Buenos Aires, Argentina",
      mode: "Remoto / Híbrido",
      email: "joaquinbruno.93@gmail.com",
      linkedin: "https://www.linkedin.com/in/joaqu%C3%ADn-bruno-b19b26218/",
      github: "https://github.com/joaquinbruno",
      headline: "Full Stack Developer enfocado en plataformas web, integraciones, APIs, dashboards y e-commerce.",
      summary: "Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web de punta a punta, combinando frontend, backend, bases de datos, integraciones con APIs externas y despliegues en entornos productivos. Trabajo con tecnologías como React, Next.js, Angular, Node.js, NestJS, Python/FastAPI, PostgreSQL, Docker y AWS, adaptándome tanto a necesidades de interfaz como de lógica de negocio e infraestructura. He participado en proyectos de fintech, SaaS y e- commerce, construyendo dashboards, flujos transaccionales, integraciones con pasarelas de pago, servicios backend, APIs REST y soluciones conectadas a sistemas externos.Cuento con experiencia trabajando en bases de datos relacionales y NoSQL, microservicios, control de versiones con Git, debugging, soporte de aplicaciones y mejora continua en entornos colaborativos. Mi perfil se caracteriza por una visión integral del producto: puedo aportar en la experiencia de usuario, la construcción de interfaces, la arquitectura backend, la integración de servicios y la estabilidad de sistemas en producción.Busco desarrollar soluciones claras, mantenibles y escalables, alineadas a necesidades reales de negocio.",
    },
    about: {
      text: "Soy Desarrollador Full Stack con foco en backend, especializado en la creación de aplicaciones web, APIs, integraciones y plataformas digitales. Trabajo con tecnologías como Node.js, NestJS, Python/FastAPI, React, Next.js, Angular, PostgreSQL, Docker y AWS, combinando desarrollo frontend, lógica de negocio, bases de datos, servicios cloud y APIs de terceros. He participado en proyectos de fintech, SaaS y e-commerce, construyendo soluciones orientadas a producto, integraciones con sistemas externos, dashboards administrativos y flujos críticos en producción. También tengo experiencia acompañando despliegues, resolviendo incidencias y mejorando sistemas existentes en entornos colaborativos. Me interesa desarrollar productos mantenibles, escalables y claros, que conecten una buena experiencia de usuario con una arquitectura técnica sólida y alineada a necesidades reales de negocio."
    },
    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"]
      },
      {
        category: "Backend",
        items: ["Node.js", "NestJS", "Python", "FastAPI", "REST APIs", "Microservices", "Webhooks", "Auth / Integraciones"]
      },
      {
        category: "Bases de Datos",
        items: ["PostgreSQL", "MongoDB", "DynamoDB", "Prisma", "MySQL"]
      },
      {
        category: "Cloud / DevOps",
        items: ["Docker", "AWS Lambda", "AWS S3", "AWS SQS", "AWS SNS", "AWS Step Functions", "AWS DynamoDB", "AWS CloudWatch", "EC2", "Nginx", "Cloudflare", "CI/CD"]
      },
      {
        category: "CMS / Integraciones",
        items: ["WordPress", "PrestaShop", "Odoo", "PHP", "Pasarelas de Pago", "MercadoPago", "APIs de Terceros", "Checkouts Personalizados"]
      },
      {
        category: "Herramientas",
        items: ["Git", "GitHub", "GitLab", "Jira", "Figma Básico"]
      }
    ],
    experience: [
      {
        company: 'Plux | Fintech / Payments',
        role: 'Full Stack Developer',
        type: '',
        location: 'Remoto',
        period: 'Mar 2024 – Abr 2025',
        description:
          'Participé en el desarrollo y mantenimiento de funcionalidades backend vinculadas a integraciones de pago, flujos transaccionales y procesos críticos dentro del ecosistema de la plataforma.',
        highlights: [
          'Desarrollo y mantenimiento de funcionalidades backend en Node.js.',
          'Integración de APIs REST y servicios externos vinculados a pagos.',
          'Adaptación de flujos de checkout y pasarelas de pago en CMS.',
          'Resolución de incidencias productivas mediante debugging y análisis técnico.',
          'Mejoras de estabilidad, seguridad y mantenimiento de procesos sensibles.',
          'Soporte y ajustes en dashboards y paneles administrativos.',
          'Colaboración con necesidades de negocio y producto para implementar mejoras continuas.',
        ],
        tech: [
          'Node.js',
          'Angular',
          'AWS',
          'PostgreSQL',
          'Git',
          'Jira',
          'WordPress',
          'PrestaShop',
          'Odoo',
          'PHP',
          'JavaScript',
          'APIs REST',
          'Webhooks',
        ],
      },
      {
        company: 'Roitels | SaaS / Hospitality Analytics',
        role: 'Full Stack Developer',
        type: '',
        location: 'Remoto',
        period: 'Abr 2025 – Sep 2025',
        description:
          'Desarrollé y mantuve servicios backend en Python/FastAPI y NestJS, trabajando sobre una arquitectura modular orientada a microservicios, integraciones externas y procesamiento de datos.',
        highlights: [
          'Desarrollo de servicios backend con Python/FastAPI y NestJS.',
          'Integración de APIs REST de terceros.',
          'Trabajo con microservicios y arquitectura modular.',
          'Implementación de flujos asincrónicos con servicios AWS.',
          'Manejo de colas, eventos y procesamiento distribuido.',
          'Desarrollo de interfaces internas con React y TypeScript.',
          'Integración entre frontend, backend y servicios externos.',
          'Acompañamiento de despliegues con Docker y CI/CD.',
          'Debugging, mantenimiento y resolución de incidencias productivas.',
        ],
        tech: [
          'Python',
          'FastAPI',
          'NestJS',
          'React',
          'TypeScript',
          'AWS',
          'PostgreSQL',
          'MongoDB',
          'DynamoDB',
          'Docker',
          'Git',
          'APIs REST',
          'Microservices',
          'CI/CD',
        ],
      },
      {
        company: 'Cortenvio | E-commerce / SaaS / Manufacturing',
        role: 'Freelance Full Stack Developer',
        type: '',
        location: 'Remoto',
        period: 'Oct 2025 – Dic 2025',
        url: 'https://cortenvio.com/',
        description:
          'Desarrollé una aplicación web a medida para cotización y gestión de pedidos de corte láser/CNC, utilizando Next.js, TypeScript y PostgreSQL, con foco en construir un flujo completo de producto desde la carga de información hasta la generación de órdenes.',
        highlights: [
          'Desarrollo de aplicación web con Next.js y TypeScript.',
          'Modelado y persistencia de datos con PostgreSQL.',
          'Implementación de lógica de cotización y gestión de pedidos.',
          'Integración con APIs externas de pagos y envíos.',
          'Desarrollo de flujo de e-commerce y generación de órdenes.',
          'Configuración de despliegues con Docker.',
          'Gestión de assets, CDN y ajustes de entorno productivo.',
          'Trabajo end-to-end desde frontend hasta backend e infraestructura.',
        ],
        tech: [
          'Next.js',
          'React',
          'TypeScript',
          'PostgreSQL',
          'Prisma',
          'Docker',
          'GitHub',
          'APIs REST',
          'E-commerce',
          'Integraciones externas',
        ],
      },
    ],
    projects: [
      {
        title: "Cortenvio - Plataforma de cotización para corte láser",
        type: "SaaS / E-commerce / Visor 3D",
        description: "Plataforma web para subir archivos DXF, visualizar piezas, calcular precios dinámicos y gestionar pedidos online.",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Three.js/DXF"],
        highlights: [
          "Viewer de piezas interactivo.",
          "Cotización automatizada por algoritmo geométrico.",
          "Gestión completa de órdenes con estados.",
          "Flujo ágil de revisión/aprobación por administración.",
          "Integración con pasarelas de pago y logística de envíos."
        ]
      },
      {
        title: "Integraciones WordPress / Pasarelas de Pago",
        type: "WordPress / Fintech / E-commerce",
        description: "Integraciones y adaptaciones de gateways de pago en sitios WordPress, checkouts personalizados y flujos transaccionales.",
        stack: ["WordPress", "PHP", "JavaScript", "APIs REST", "Webhooks", "WooCommerce"],
        highlights: [
          "Desarrollo de botones de pago customizados.",
          "Checkouts multi-step de alta conversión.",
          "Arquitectura compatible y segura con sitios existentes.",
          "Debugging inmediato en entornos críticos de producción.",
          "Adaptaciones por theme y desarrollo de plugins modulares."
        ]
      }
    ],
    studies: [],
    courses: [
      {
        title: 'JavaScript Moderno: Guía para dominar el lenguaje',
        instructor: 'Fernando Herrera',
        category: 'Frontend / Language',
        technologies: ['JavaScript'],
      },
      {
        title: 'Node.js',
        instructor: 'Fernando Herrera',
        category: 'Backend',
        technologies: ['Node.js', 'JavaScript', 'APIs'],
      },
      {
        title: 'React',
        instructor: 'Fernando Herrera',
        category: 'Frontend',
        technologies: ['React', 'JavaScript'],
      },
      {
        title: 'React PRO: Lleva tus bases al siguiente nivel',
        instructor: 'Fernando Herrera',
        category: 'Frontend',
        technologies: ['React', 'Advanced React'],
      },
      {
        title: 'Next.js: El framework de React para producción',
        instructor: 'Fernando Herrera',
        category: 'Frontend / Full Stack',
        technologies: ['Next.js', 'React', 'Production'],
      },
      {
        title: 'FastAPI: Crea APIs eficientes con Python',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend',
        technologies: ['Python', 'FastAPI', 'APIs REST'],
      },
      {
        title: 'Nest: Desarrollo backend escalable con Node',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend',
        technologies: ['NestJS', 'Node.js', 'TypeScript'],
      },
      {
        title: 'NestJS + Microservicios: Aplicaciones escalables y modulares',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend / Architecture',
        technologies: ['NestJS', 'Microservices', 'Node.js', 'TypeScript'],
      },
      {
        title: 'Nest + GraphQL: Evoluciona tus APIs',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend / APIs',
        technologies: ['NestJS', 'GraphQL', 'APIs'],
      },
      {
        title: 'PHP moderno: Empieza tu camino en el lenguaje',
        instructor: 'DevTalles',
        category: 'Backend / CMS',
        technologies: ['PHP'],
      },
      {
        title: 'React Native Expo: Aplicaciones nativas para iOS y Android',
        instructor: 'DevTalles',
        category: 'Mobile',
        technologies: ['React Native', 'Expo'],
      },
      {
        title: 'Become a WordPress Developer: Unlocking Power With Code',
        instructor: 'Brad Schiff',
        category: 'CMS / WordPress',
        technologies: ['WordPress', 'PHP', 'JavaScript'],
      },
    ],
    personals: [
      {
        title: "Proximamente",
        type: "",
        description: "",
        stack: [""],
        features: [

        ],
        status: "",
        purpose: ""
      }
    ]
  },
  en: {
    profile: {
      name: "Joaquín Bruno",
      role: "Full Stack Developer",
      location: "La Plata, Buenos Aires, Argentina",
      mode: "Remote / Hybrid",
      email: "joaquinbruno.93@gmail.com",
      linkedin: "https://www.linkedin.com/in/joaqu%C3%ADn-bruno-b19b26218/",
      github: "https://github.com/joaquinbruno",
      headline: "Full Stack Developer focused on web platforms, integrations, APIs, dashboards, and e-commerce.",
      summary: "I am a Full Stack Developer with experience building end-to-end web applications, integrating frontend, backend, databases, third-party APIs, and deployment pipelines. I work with React, Next.js, Angular, Node.js, NestJS, Python, PostgreSQL, Docker, and AWS. I focus on developing clean, scalable, and business-oriented projects, especially in SaaS, e-commerce, fintech, dashboards, and integrations.",
    },
    about: {
      text: "I am a Full Stack Developer focused on developing web platforms, integrations, APIs, and scalable digital solutions. I have experience working in both frontend and backend, building interfaces, admin panels, transactional flows, payment integrations, connected third-party API services, and production deployments. I like to balance beautiful visual experiences with clean, maintainable business logic."
    },
    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI", "Dashboards"]
      },
      {
        category: "Backend",
        items: ["Node.js", "NestJS", "Python", "FastAPI", "REST APIs", "Microservices", "Webhooks", "Auth / Integrations"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "MongoDB", "DynamoDB", "Prisma", "MySQL"]
      },
      {
        category: "Cloud / DevOps",
        items: ["Docker", "AWS Lambda", "AWS S3", "AWS SQS", "AWS SNS", "AWS Step Functions", "AWS DynamoDB", "AWS CloudWatch", "EC2", "Nginx", "Cloudflare", "CI/CD"]
      },
      {
        category: "CMS / Integrations",
        items: ["WordPress", "PrestaShop", "Odoo", "PHP", "Payment Gateways", "MercadoPago", "Third-Party APIs", "Custom Checkouts"]
      },
      {
        category: "Tools",
        items: ["Git", "GitHub", "GitLab", "Jira", "Basic Figma"]
      }
    ],
    experience: [
      {
        role: "Full Stack Developer / Integrations Developer",
        company: "Plux",
        period: "Mar 2024 - Apr 2025",
        industry: "Fintech / Payments",
        description: "Worked on payment gateway integrations and transactional merchant solutions, primarily in WordPress, PrestaShop, Odoo, and custom web applications. Participated in checkout adaptations, custom payment button integrations, multi-step flow management, technical client support, production debugging, and internal panel additions.",
        highlights: [
          "Integration of complex payment gateways in CMS setups and bespoke sites.",
          "Adaptation of multi-step and checkout interfaces.",
          "Development using WordPress, PHP, JavaScript, REST APIs, and webhooks.",
          "Technical support, debugging, and production-level troubleshooting.",
          "Contributed to enhancing internal administrative panel tools."
        ]
      },
      {
        role: "Full Stack Developer / Integrations & Backend",
        company: "Roitels",
        period: "Apr 2025 - Sep 2025",
        industry: "SaaS / Hospitality / Integrations",
        description: "Focused on third-party API integrations for a hospitality booking platform, linking Reservation Management Software/PMS with backend flows. Participated in serverless/event-driven AWS architectures, data crunching, and inter-service communications.",
        highlights: [
          "Third-party API integrations with Cloudbeds PMS solutions.",
          "Worked with AWS Lambda, SNS, SQS, DynamoDB, Step Functions, and CloudWatch.",
          "Event processing, webhooks, and core integration ingestion pipelines.",
          "Development utilizing Python, Boto3, and Node.js/NestJS based on scope.",
          "Co-developed microservices and highly scalable backend streams."
        ]
      },
      {
        role: "Full Stack Developer",
        company: "Cortenvio / Freelance",
        period: "Oct 2025 - Dec 2025",
        industry: "E-commerce / SaaS / Metal Manufacturing",
        description: "Built a customized web platform for metal laser/CNC cutting quotation and order processing, combining DXF file uploads, geometry calculations, dynamic material rates, payment triggers, and logistics.",
        highlights: [
          "Developed frontend in Next.js, React, TypeScript with PostgreSQL and Prisma backend.",
          "Integrated 2D/3D file piece preview using Three.js/DXF structures.",
          "Implemented complex pricing algorithm weighing materials, thickness, perimeter, holes, and quantities.",
          "Engineered full e-commerce checkout, transaction checks, and admin approvals.",
          "Connected custom payment solutions and automated shipping carriers."
        ]
      }
    ],
    projects: [
      {
        title: "Cortenvio - Laser Cut Price Automatic Quote Platform",
        type: "SaaS / E-commerce / 3D Viewer",
        description: "Web application designed to process DXF file vectors, generate pieces, offer dynamic price quotes, and manage online orders.",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Three.js/DXF"],
        highlights: [
          "Interactive viewer and geometric processor.",
          "Smart automated quotation calculations.",
          "Order tracking, transaction reviews, and invoice statuses.",
          "Fast manager dashboard interface.",
          "Integrated third-party courier services and payment options."
        ]
      },
      {
        title: "WordPress Integrations / Payment Gateways",
        type: "WordPress / Fintech / E-commerce",
        description: "Adaptation and configuration of custom payment checkouts, security standards, and asynchronous hooks inside WordPress WooCommerce templates.",
        stack: ["WordPress", "PHP", "JavaScript", "REST APIs", "Webhooks", "WooCommerce"],
        highlights: [
          "Custom pay button actions and checkout redirection layers.",
          "Engineered high-converting multi-step checkout models.",
          "Compatible, optimized, and secure structures suitable for legacy systems.",
          "Immediate deployment hotfixes under heavy critical production traffic.",
          "Bespoke plugin extensions and specific hook override adapters."
        ]
      },
      {
        title: "Data Dashboards & Corporate Panels",
        type: "Web App / Internal Tools",
        description: "Administrative interfaces designed to filter, map, and operate corporate metrics, bookings, pay gateways, and logistics nodes.",
        stack: ["Angular", "React", "Node.js", "REST APIs", "PostgreSQL"],
        highlights: [
          "Advanced data tables offering custom query filtering options.",
          "Deep state persistence mechanisms and context states.",
          "Highly secure REST API queries.",
          "Strong UX/UI principles aimed at shaving down staff operating times."
        ]
      }
    ],
    studies: [],
    courses: [
      {
        title: 'Modern JavaScript: Guide to mastering the language',
        instructor: 'Fernando Herrera',
        category: 'Frontend / Language',
        technologies: ['JavaScript'],
      },
      {
        title: 'Node.js',
        instructor: 'Fernando Herrera',
        category: 'Backend',
        technologies: ['Node.js', 'JavaScript', 'APIs'],
      },
      {
        title: 'React',
        instructor: 'Fernando Herrera',
        category: 'Frontend',
        technologies: ['React', 'JavaScript'],
      },
      {
        title: 'React PRO: Take your bases to the next level',
        instructor: 'Fernando Herrera',
        category: 'Frontend',
        technologies: ['React', 'Advanced React'],
      },
      {
        title: 'Next.js: The React framework for production',
        instructor: 'Fernando Herrera',
        category: 'Frontend / Full Stack',
        technologies: ['Next.js', 'React', 'Production'],
      },
      {
        title: 'FastAPI: Build efficient APIs with Python',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend',
        technologies: ['Python', 'FastAPI', 'APIs REST'],
      },
      {
        title: 'Nest: Scalable backend development with Node',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend',
        technologies: ['NestJS', 'Node.js', 'TypeScript'],
      },
      {
        title: 'NestJS + Microservices: Scalable and modular applications',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend / Architecture',
        technologies: ['NestJS', 'Microservices', 'Node.js', 'TypeScript'],
      },
      {
        title: 'Nest + GraphQL: Evolve your APIs',
        instructor: 'DevTalles / Fernando Herrera',
        category: 'Backend / APIs',
        technologies: ['NestJS', 'GraphQL', 'APIs'],
      },
      {
        title: 'Modern PHP: Begin your journey in the language',
        instructor: 'DevTalles',
        category: 'Backend / CMS',
        technologies: ['PHP'],
      },
      {
        title: 'React Native Expo: Native applications for iOS and Android',
        instructor: 'DevTalles',
        category: 'Mobile',
        technologies: ['React Native', 'Expo'],
      },
      {
        title: 'Become a WordPress Developer: Unlocking Power With Code',
        instructor: 'Brad Schiff',
        category: 'CMS / WordPress',
        technologies: ['WordPress', 'PHP', 'JavaScript'],
      },
    ],
    personals: [
      {
        title: "",
        type: "",
        description: "",
        stack: [""],
        features: [

        ],
        status: "",
        purpose: ""
      }
    ]
  }
};
