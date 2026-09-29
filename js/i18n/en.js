(function (global) {
  'use strict';

  const registry = (global.PORTFOLIO_I18N = global.PORTFOLIO_I18N || {});

  registry.en = {
    htmlLang: 'en',

    meta: {
      title: 'Kaue Firmo — Full Stack Developer',
      description: 'Portfolio of Kaue Firmo, a full stack developer based in Goiânia, Brazil. Vue, React, Python and Go, with REST APIs and production applications.'
    },

    dates: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      joiner: ' ',
      present: 'Present',
      year: ['year', 'years'],
      month: ['month', 'months'],
      and: ' '
    },

    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact'
    },

    ui: {
      openMenu: 'Open menu',
      toggleTheme: 'Toggle theme',
      switchLang: 'Switch to Portuguese',
      langButton: 'PT',
      scrollTop: 'Back to top'
    },

    hero: {
      eyebrow: 'Hi, my name is',
      role: 'Full Stack Developer',
      desc: 'Turning ideas into organized, scalable systems. In my own projects I go from the database to the interface with <strong>Vue</strong>, <strong>React</strong>, <strong>Python</strong> and <strong>Go</strong>; at work, I maintain and evolve production applications.',
      projectsCta: 'View projects →',
      cvCta: 'View CV',
      contactCta: 'Get in touch'
    },

    idcard: {
      tag: '// profile',
      title: 'Fullstack',
      subtitle: 'From the database to the interface.',
      location: 'Location',
      experience: 'Experience',
      projects: 'Projects',
      status: 'Status',
      statusValue: 'Open to opportunities',
      stack: 'Stack'
    },

    about: {
      eyebrow: 'About me',
      title: 'Who I am',
      lead: 'Full stack developer based in Goiânia, Brazil, focused on practical software engineering: stable systems in production and well-structured new solutions, from the database to the interface.',
      p1: 'At work I maintain and evolve <strong>production systems with Python, Delphi and SQL</strong>, dealing with complex business rules, SQL queries and root-cause investigation to keep applications stable and reliable.',
      p2: 'I study <strong>Software Engineering</strong> and, on my own, bring that end-to-end view to <strong>personal projects</strong>: <strong>APIs in Go and Python</strong> with <strong>Vue.js and React</strong> on the front end, like Goportunitties, StudySync and UrlCraft.',
      codeFocus: 'APIs & Web Applications',
      telemetry: [
        { label: '// ROLE', value: 'Tron Sistemas', sub: 'Junior Developer II' },
        { label: '// EDUCATION', value: 'Software Eng.', sub: 'Unigoiás · 2026' },
        { label: '// METHOD', value: 'Clean Code', sub: 'SOLID & Resilience' },
        { label: '// BASE', value: 'Goiânia — GO', sub: 'Remote / Hybrid' }
      ],
      available: 'Available'
    },

    principles: {
      eyebrow: 'Principles & Skills',
      title: 'How I Build Software',
      paragraph: 'Engineering standards, architecture and good practices applied at every stage of the application lifecycle.'
    },

    labels: {
      restApi: 'REST API',
      webSocket: 'WebSocket',
      testing: 'Testing',
      productionSystems: 'Production Systems',
      errorHandling: 'Error Handling',
      webScraping: 'Web Scraping',
      automation: 'Automation'
    },

    pillars: [
      {
        title: 'End-to-End Full Stack',
        subtitle: 'From data modeling to user experience',
        desc: 'Projects that cover the whole cycle: data modeling, business rules on the back end with Python (FastAPI and Flask) and modern, responsive interfaces in Vue.js, React and TypeScript, as in StudySync and UrlCraft.'
      },
      {
        title: 'APIs & Layered Architecture',
        subtitle: 'Systems structured to grow with stability',
        desc: 'REST APIs in Go (Gin + GORM) and Python, with decoupled layers, clear contracts between back end and front end, data ingestion and real-time communication over WebSocket, as in Goportunitties and StudySync.'
      },
      {
        title: 'Clean Code & Testing',
        subtitle: 'Readability, maintainability and solid patterns',
        desc: 'Clean Code and SOLID principles, modular components, strict typing with TypeScript and automated tests. Code written to be read, evolved and maintained by other people.'
      },
      {
        title: 'Resilience & Production Stability',
        subtitle: 'Systems that have to work every single day',
        desc: 'Hands-on experience maintaining business systems in daily operation: preventive exception handling, data auditing, bug fixing in legacy codebases and a focus on operational reliability.'
      },
      {
        title: 'Automation & Integrations',
        subtitle: 'Fewer manual tasks, more scheduled routines',
        desc: 'Automations with Selenium and Python that replace manual tasks with scheduled routines, plus web scraping and reliable integration with APIs and webhooks.'
      }
    ],

    now: {
      title: 'Right now',
      items: [
        { label: 'Working', value: 'Junior Developer II at Tron Sistemas' },
        { label: 'Studying', value: 'Software Engineering at Unigoiás — graduating in 2026' },
        { label: 'Going deeper', value: 'Golang, Django and REST API architecture' }
      ]
    },

    seeking: {
      title: 'Open to opportunities',
      items: [
        { label: 'Role', value: 'Full Stack or Back-end Developer' },
        { label: 'Contract', value: 'Full-time (CLT), contractor (PJ) or international contract' },
        { label: 'Work mode', value: 'Remote for roles outside Goiânia · Hybrid in Goiânia' }
      ]
    },

    experience: {
      eyebrow: 'Journey',
      title: 'Professional Experience',
      paragraph: 'Where I have been applying and building what I know.',
      current: 'Current',
      companies: {
        tron: {
          location: 'Goiânia — GO, Brazil',
          roles: {
            jr2: {
              title: 'Junior Developer II',
              type: 'Full-time',
              place: 'Goiânia and region · Hybrid',
              desc: 'Development and evolution of system modules, working from the database to the interface and supporting the team’s technical decisions.'
            },
            jr: {
              title: 'Junior Developer',
              type: 'Temporary',
              place: 'Goiás, Brazil · Hybrid',
              desc: 'Implementation of new features and bug fixing in applications already in production, focused on stability and code quality.'
            },
            intern: {
              title: 'Intern',
              type: 'Internship',
              place: 'Goiânia, Goiás, Brazil',
              desc: 'Legacy system maintenance and error handling, working on the stability and continuity of production applications.'
            }
          }
        }
      }
    },

    projects: {
      eyebrow: 'Portfolio',
      title: 'My Projects',
      paragraph: 'A collection of projects I have worked on. The ones still in development appear locked.',
      filterLabel: 'Filter projects',
      all: 'All',
      done: 'Completed',
      lockBadge: 'In development',
      unavailable: 'Unavailable',
      denied: 'This project is still in development — I will publish it as soon as it is ready.',
      ctaEyebrow: 'And there is more',
      ctaTitle: 'Check out my GitHub',
      ctaText: 'More projects, tests and experiments live over there.',
      ctaButton: 'View GitHub',
      tagLabels: { 'API REST': 'REST API', 'Automação': 'Automation' },
      items: {
        goportunitties: {
          title: 'Goportunitties',
          desc: 'Full dashboard and REST API in Go (Gin + GORM + SQLite) with a React web interface to search, publish and track tech job listings in real time.',
          linkLabel: 'View on GitHub'
        },
        urlcraft: {
          title: 'URL Shortener',
          desc: 'Link shortener with a Flask API and a Vue.js interface, including handling and validation of the URLs it receives.',
          linkLabel: 'View site'
        },
        studysync: {
          title: 'StudySync',
          desc: 'Study planner for Windows and web: sessions per subject with real-time reminders, a focus timer (Pomodoro), supporting-content search across trusted sources and Markdown notes.',
          linkLabel: 'View on GitHub'
        },
        estoque: {
          title: 'Inventory Manager',
          desc: 'Desktop software for inventory control, with a Python and SQLite back end and a graphical interface built with Tkinter.',
          linkLabel: 'View project'
        },
        bot: {
          title: 'Social Media Bot',
          desc: 'Automation of repetitive social media tasks using Selenium, including scheduled message sending.',
          linkLabel: 'View project'
        }
      }
    },

    skills: {
      eyebrow: 'Expertise',
      title: 'My Skills',
      paragraph: 'The technologies I have worked with, by area.',
      groups: {
        languages: 'Core Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        tools: 'Tools'
      }
    },

    education: {
      eyebrow: 'Education',
      title: 'Education & Languages',
      degree: 'Software Engineering',
      degreePlace: 'Unigoiás — Centro Universitário de Goiás',
      degreeMeta: 'Graduating in 2026',
      highSchool: 'High School Diploma',
      highSchoolPlace: 'Colégio MetaTech',
      languages: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'Intermediate' }
      ]
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      subtitle: 'Have a project in mind, an open position, or just want to chat? Send me a message — I would love to talk.',
      cvCta: 'View CV',
      footer: 'All rights reserved.'
    },

    cvModal: {
      title: 'CV',
      close: 'Close',
      download: 'Download PDF',
      frameTitle: 'CV of Kauê Christian'
    },

    cv: {
      headline: 'Junior Software Engineer',
      availability: 'Open to full-time (CLT), contractor (PJ) and international contracts · Remote for roles outside Goiânia · Hybrid in Goiânia',
      sections: {
        objective: 'Objective',
        experience: 'Experience',
        projects: 'Personal projects',
        skills: 'Skills',
        areas: 'Areas of work',
        soft: 'Strengths',
        education: 'Education',
        languages: 'Languages'
      },
      objective: 'The part I enjoy most about programming is being able to develop and implement ideas into systems, which proves to be quite challenging in many cases. I’m always seeking to learn and understand new technologies and languages, expanding my knowledge and skills with the goal of adapting to company and market standards.',
      areas: ['Software and web development', 'Legacy system maintenance', 'Automation and web scraping'],
      soft: ['Teamwork', 'Multitasking', 'Attention to detail', 'Adaptability'],
      otherExperience: [
        {
          title: 'IT Assistant',
          company: 'GoConsignado',
          desc: 'Machine maintenance for the company and support with system features.'
        }
      ],
      degreeLine: 'Software Engineering — Unigoiás (Centro Universitário de Goiás) · graduating in 2026',
      highSchoolLine: 'High School Diploma — Colégio MetaTech',
      location: 'Goiânia, GO — Brazil',
      linkLabel: 'Repository',
      siteLabel: 'Portfolio'
    }
  };
})(window);
