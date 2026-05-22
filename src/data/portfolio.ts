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
  industry: string;
  description: string;
  highlights: string[];
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

export interface PersonalProjectInfo {
  title: string;
  type: string;
  description: string;
  stack: string[];
  features: string[];
  status: string;
  purpose: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  about: { text: string };
  skills: SkillGroup[];
  experience: ExperienceInfo[];
  projects: ProjectInfo[];
  studies: StudyInfo[];
  personalProjects: PersonalProjectInfo[];
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
      summary: "Soy Full Stack Developer con experiencia construyendo aplicaciones web de punta a punta, integrando frontend, backend, bases de datos, APIs de terceros y despliegues. Trabajo con React, Next.js, Angular, Node.js, NestJS, Python, PostgreSQL, Docker y AWS. Me interesa desarrollar productos claros, escalables y orientados a negocio, especialmente en SaaS, e-commerce, fintech, dashboards e integraciones.",
    },
    about: {
      text: "Soy Full Stack Developer con foco en el desarrollo de plataformas web, integraciones, APIs y soluciones digitales escalables. Tengo experiencia trabajando tanto en frontend como backend, construyendo interfaces, paneles administrativos, flujos transaccionales, integraciones de pago, servicios conectados a APIs externas y despliegues productivos. Me gusta combinar una buena experiencia visual con lógica de negocio clara y mantenible."
    },
    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI", "Dashboards"]
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
        role: "Full Stack Developer / Integrations Developer",
        company: "Plux",
        period: "Mar 2024 - Abr 2025",
        industry: "Fintech / Pagos",
        description: "Trabajé en integraciones de pasarelas de pago y soluciones transaccionales para comercios, principalmente sobre WordPress, PrestaShop, Odoo y proyectos web personalizados. Participé en la adaptación de checkouts, integración de botones de pago, manejo de flujos multi-step, soporte técnico a clientes, resolución de bugs productivos y mejoras en paneles internos.",
        highlights: [
          "Integración de gateways de pago en CMS y sitios personalizados.",
          "Adaptación de checkouts complejos, incluyendo formularios multi-step.",
          "Trabajo con WordPress, PHP, JavaScript, APIs REST y webhooks.",
          "Soporte técnico, debugging y resolución de problemas productivos.",
          "Participación en mejoras de dashboard/panel administrativo."
        ]
      },
      {
        role: "Full Stack Developer / Integrations & Backend",
        company: "Roitels",
        period: "Abr 2025 - Sep 2025",
        industry: "SaaS / Hospitality / Integraciones",
        description: "Trabajé en integraciones con APIs externas para una plataforma vinculada al sector hospitality, conectando servicios de reservas/PMS y flujos backend. Participé en arquitecturas serverless/event-driven sobre AWS, procesamiento de datos y comunicación entre servicios.",
        highlights: [
          "Integraciones con APIs de terceros como Cloudbeds/PMS.",
          "Uso de AWS Lambda, SNS, SQS, DynamoDB, Step Functions y CloudWatch.",
          "Procesamiento de eventos, webhooks y pipelines de integración.",
          "Trabajo con Python, Boto3, Node.js/NestJS según necesidad.",
          "Participación en microservicios y flujos backend escalables."
        ]
      },
      {
        role: "Full Stack Developer",
        company: "Cortenvio / Freelance",
        period: "Oct 2025 - Dic 2025",
        industry: "E-commerce / SaaS / Manufactura",
        description: "Desarrollé una plataforma web a medida para cotización y gestión de pedidos de corte láser/CNC, combinando carga de archivos DXF, visualización de piezas, cálculo dinámico de precios, órdenes, pagos y logística.",
        highlights: [
          "Desarrollo con Next.js, React, TypeScript, PostgreSQL y Prisma.",
          "Visualización 2D/3D de piezas mediante tecnologías vinculadas a Three.js/DXF.",
          "Algoritmo de cotización por material, espesor, área, recorrido, perforaciones y cantidad.",
          "Flujo de e-commerce, órdenes, revisión y aprobación.",
          "Integraciones con pagos y logística/envíos."
        ]
      }
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
      },
      {
        title: "Dashboards y Paneles Administrativos",
        type: "Web App / Herramientas Internas",
        description: "Interfaces administrativas para consultar, filtrar y operar información de negocio, órdenes, transacciones o integraciones.",
        stack: ["Angular", "React", "Node.js", "APIs REST", "PostgreSQL"],
        highlights: [
          "Tablas avanzadas con filtros dinámicos.",
          "Gestión optimizada de estados complejos.",
          "Consumo asíncrono y seguro de APIs corporativas.",
          "Enfoque alto en UX/UI para optimizar tiempos de operaciones internas."
        ]
      }
    ],
    studies: [
      {
        title: "Diplomatura en Desarrollo Web Full Stack",
        institution: "Universidad Tecnológica Nacional",
        period: "2023",
        description: "Bases sólidas de frontend, backend, bases de datos relacionales, APIs REST y despliegue continuo de aplicaciones web."
      },
      {
        title: "Especialización y práctica en React, Angular y Node.js",
        institution: "Plataformas de Educación Profesional / Autodidacta",
        period: "2023 - 2024",
        description: "Desarrollo de interfaces web ricas, componentes reutilizables, consumo avanzado de servicios, routing SPA, gestión de formularios complejos y lógica de negocio distribuida."
      },
      {
        title: "Capacitación continua en AWS, Docker e Integraciones",
        institution: "Práctica Profesional / Laboratorios Autónomos",
        period: "Actualidad",
        description: "Aprendizaje continuo en arquitectura Serverless, contenerización de servicios, integración experta de APIs de terceros, automatizaciones mediante webhooks y despliegues seguros en producción."
      }
    ],
    personalProjects: [
      {
        title: "DevOps Mission Control",
        type: "Proyecto Personal / Dashboard / Automatización",
        description: "Dashboard experimental para monitorear servicios, despliegues y eventos de aplicaciones web, emulando la estética de una terminal cyber-isométrica retro.",
        stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
        features: [
          "Panel interactivo de estado de microservicios.",
          "Logs de consola de sistema simulados en tiempo real.",
          "Monitor gráfico de despliegues y builds.",
          "Simulaciones de webhook e integración experimental de GitHub Actions.",
          "Alertas visuales tipo militar/cyberpunk para fallos de servicios."
        ],
        status: "Concepto / En Progreso",
        purpose: "Estudiar pipelines y streaming de eventos en realtime."
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
    studies: [
      {
        title: "Full Stack Web Development Degree",
        institution: "Universidad Tecnológica Nacional (UTN)",
        period: "2023",
        description: "Solid foundations encompassing front-end UI/UX, database design, REST APIs, and continuous delivery pipelines."
      },
      {
        title: "React, Angular, and Node.js Professional Mentorships",
        institution: "E-learning Directories / Self-taught Studies",
        period: "2023 - 2024",
        description: "Specialized in rich single-page interfaces, smart recursive components, async service ingestion, state machines, and distributed architecture."
      },
      {
        title: "Continuous Training in AWS Cloud, Docker, and Integrations",
        institution: "Professional Practice / Sandbox Systems Testing",
        period: "Ongoing",
        description: "Active knowledge collection on AWS serverless operations, Docker structures, smart third-party webhook alerts, and SSL secure servers."
      }
    ],
    personalProjects: [
      {
        title: "DevOps Mission Control",
        type: "Personal Project / Dashboard / Automation",
        description: "Experimental console keeping track of server health, microservices, and deployments mimicking a retro cyber-isometric military interface.",
        stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
        features: [
          "Interactive dashboard depicting online system nodes.",
          "Asynchronous real-time server logs.",
          "Graphical deployment and CI/CD pipelines tracking.",
          "GitHub actions webhook integration tests.",
          "Visual cyberpunk red error alerts."
        ],
        status: "Concept / In progress",
        purpose: "Explore real-time data streaming and event buses."
      }
    ]
  }
};
