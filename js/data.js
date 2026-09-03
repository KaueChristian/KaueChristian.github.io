(function (global) {
  'use strict';

  const { icons, projectGlyphs } = global.PORTFOLIO_ICONS || { icons: {}, projectGlyphs: {} };

  const frameworks = [
    { name: 'Vue.js', color: '#41B883', icon: icons.vue },
    { name: 'React', color: '#61DAFB', icon: icons.react },
    { name: 'Django', color: '#44B78B', icon: icons.django },
    { name: 'Flask', color: '#E2E8F0', icon: icons.flask }
  ];

  const experience = [
    {
      name: 'Tron Sistemas',
      short: 'tron',
      color: '#14532D',
      duration: '1 ano e 6 meses',
      location: 'Goiânia — GO',
      current: true,
      glow: true,
      roles: [
        {
          title: 'Desenvolvedor Júnior II',
          type: 'Tempo integral',
          period: 'jul de 2026 — o momento',
          duration: '2 meses',
          place: 'Goiânia e Região · Híbrido',
          desc: 'Desenvolvimento e evolução de módulos do sistema, atuando do banco de dados à interface e apoiando decisões técnicas do time.'
        },
        {
          title: 'Desenvolvedor Júnior',
          type: 'Temporário',
          period: 'fev de 2026 — jul de 2026',
          duration: '7 meses',
          place: 'Goiás, Brasil · Híbrido',
          desc: 'Implementação de novas funcionalidades e correção de defeitos em aplicações já em produção, com foco em estabilidade e qualidade de código.'
        },
        {
          title: 'Estagiário',
          type: 'Estágio',
          period: 'mar de 2025 — fev de 2026',
          duration: '1 ano',
          place: 'Goiânia, Goiás, Brasil',
          desc: 'Manutenção de sistemas legado e tratamento de erros, atuando na estabilidade e na continuidade de aplicações em produção.'
        }
      ]
    }
  ];

  const projects = [
    {
      num: '01',
      title: 'Goportunitties',
      desc: 'Painel completo e API REST em Go (Gin + GORM + SQLite) com interface web em React para busca, publicação e métricas de vagas tech em tempo real.',
      tags: ['Golang', 'React', 'TypeScript', 'SQLite', 'API REST'],
      url: 'https://github.com/KaueChristian/Goportunitties',
      linkLabel: 'Ver no GitHub',
      locked: false,
      thumbClass: 'project__thumb--1',
      glyph: '',
      glow: true,
      accent: '#2A78D6',
      accent2: '#199E70',
      accent3: '#9085E9'
    },
    {
      num: '02',
      title: 'Encurtador de URL',
      desc: 'Encurtador de links com API em Flask e interface em Vue.js, incluindo tratamento e validação das URLs recebidas.',
      tags: ['Flask', 'Vue.js', 'Python'],
      url: 'https://urlcraft-fv59.onrender.com',
      linkLabel: 'Ver site',
      locked: false,
      thumbClass: 'project__thumb--5',
      glyph: '',
      glow: true,
      accent: '#3F6BFF',
      accent2: '#20C997',
      accent3: '#F0327A'
    },
    {
      num: '03',
      title: 'Agenda com Web Scraping',
      desc: 'Sistema de agenda alimentado por um serviço de web scraping, que coleta e organiza dados automaticamente através de requisições HTTPS.',
      tags: ['Python', 'Web Scraping', 'Requests'],
      url: 'https://github.com/KaueChristian',
      linkLabel: 'Ver projeto',
      locked: true,
      thumbClass: 'project__thumb--2',
      glyph: projectGlyphs.calendar
    },
    {
      num: '04',
      title: 'Gerenciador de Estoque',
      desc: 'Software desktop para controle de estoque, com back-end em Python e SQLite e interface gráfica construída em Tkinter.',
      tags: ['Python', 'SQLite', 'Tkinter'],
      url: 'https://github.com/KaueChristian',
      linkLabel: 'Ver projeto',
      locked: true,
      thumbClass: 'project__thumb--3',
      glyph: projectGlyphs.box
    },
    {
      num: '05',
      title: 'Bot de Rede Social',
      desc: 'Automação de tarefas repetitivas em redes sociais usando Selenium, incluindo o envio programado de mensagens.',
      tags: ['Python', 'Selenium', 'Automação'],
      url: 'https://github.com/KaueChristian',
      linkLabel: 'Ver projeto',
      locked: true,
      thumbClass: 'project__thumb--4',
      glyph: projectGlyphs.bot
    }
  ];

  const services = [
    {
      title: 'Desenvolvimento Full Stack',
      desc: 'Do modelo de dados à interface: back-end em Python com Django e Flask, front-end em Vue e React.',
      icon: icons.svcStack
    },
    {
      title: 'Manutenção & Evolução',
      desc: 'Atuação em bases legado — tratamento de erros, correção de defeitos e estabilidade de aplicações já em produção.',
      icon: icons.svcMaintain
    },
    {
      title: 'APIs & Integrações',
      desc: 'Construção e consumo de APIs REST, integrando serviços e mantendo contratos claros entre as pontas.',
      icon: icons.svcApi
    },
    {
      title: 'Automação & Scraping',
      desc: 'Coleta de dados e automação de tarefas repetitivas, transformando trabalho manual em rotina programada.',
      icon: icons.svcAuto
    }
  ];

  const now = [
    { label: 'Trabalhando', value: 'Desenvolvedor Júnior II na Tron Sistemas' },
    { label: 'Estudando', value: 'Engenharia de Software na Unigoiás — conclusão em 2026' },
    { label: 'Aprofundando', value: 'Golang, Django e arquitetura de APIs REST' }
  ];

  const pillars = [
    {
      num: '01',
      title: 'Full Stack de Ponta a Ponta',
      subtitle: 'Da modelagem relacional à experiência do usuário',
      desc: 'Domínio completo do ciclo de software: arquitetura de dados consistente no PostgreSQL e MySQL, regras de negócio robustas no back-end com Python (Django e Flask) e interfaces modernas, ágeis e intuitivas com Vue.js e TypeScript.',
      icon: icons.pillarStack,
      color: 'var(--accent)',
      tags: [
        { name: 'Python', icon: icons.python },
        { name: 'Vue.js', icon: icons.vue },
        { name: 'Django', icon: icons.django },
        { name: 'PostgreSQL', icon: icons.postgres },
        { name: 'TypeScript', icon: icons.typescript }
      ]
    },
    {
      num: '02',
      title: 'Arquitetura Escalável & Performance',
      subtitle: 'Sistemas estruturados para crescer com estabilidade',
      desc: 'Construção de APIs REST de alto rendimento em Golang e Python. Arquitetura orientada a serviços e camadas desacopladas, otimização de consultas SQL e foco estrito em tempo de resposta e concorrência sob alta carga.',
      icon: icons.pillarScale,
      color: 'var(--accent-2)',
      tags: [
        { name: 'Golang', icon: icons.golang },
        { name: 'API REST', icon: icons.api },
        { name: 'MySQL', icon: icons.mysql },
        { name: 'Docker', icon: icons.docker }
      ]
    },
    {
      num: '03',
      title: 'Código Limpo & Eficiência Técnica',
      subtitle: 'Legibilidade, manutenibilidade e padrões sólidos',
      desc: 'Prática contínua de Clean Architecture e princípios SOLID, componentização modular, tipagem estrita e refatoração preventiva. Código estruturado para ser legível por outros desenvolvedores e facilmente escalável no longo prazo.',
      icon: icons.pillarClean,
      color: 'var(--accent-3)',
      tags: [
        { name: 'Clean Code', icon: icons.catCode },
        { name: 'TypeScript', icon: icons.typescript },
        { name: 'Java', icon: icons.java },
        { name: 'Delphi', icon: icons.delphi }
      ]
    },
    {
      num: '04',
      title: 'Resiliência & Estabilidade em Produção',
      subtitle: 'Sistemas que precisam funcionar todos os dias',
      desc: 'Experiência prática na Tron Sistemas mantendo sistemas corporativos de missão crítica em operação diária. Tratamento preventivo de exceções, auditoria de dados, mitigação de bugs em bases legadas e garantia de confiabilidade operacional.',
      icon: icons.pillarShield,
      color: 'var(--accent-4)',
      tags: [
        { name: 'Sistemas Críticos', icon: icons.svcMaintain },
        { name: 'Tratamento de Erros', icon: icons.api },
        { name: 'Firebird', icon: icons.firebird },
        { name: 'SQLite', icon: icons.sqlite }
      ]
    },
    {
      num: '05',
      title: 'Automação & Integrações Avançadas',
      subtitle: 'Eliminação de tarefas manuais e rotinas inteligentes',
      desc: 'Desenvolvimento de robôs e automações com Selenium e Python para substituir tarefas manuais por rotinas programadas, web scraping avançado para mineração de dados estruturados e integração confiável de APIs e webhooks.',
      icon: icons.pillarAuto,
      color: 'var(--accent-5)',
      tags: [
        { name: 'Selenium', icon: icons.selenium },
        { name: 'Web Scraping', icon: icons.svcAuto },
        { name: 'Git & CI', icon: icons.git }
      ]
    }
  ];

  const skillGroups = [
    {
      title: 'Linguagens Core',
      icon: icons.catCode,
      items: [
        { name: 'Python', color: '#3776AB', icon: icons.python },
        { name: 'Delphi', color: '#E62431', icon: icons.delphi },
        { name: 'JavaScript', color: '#E3B341', icon: icons.javascript },
        { name: 'TypeScript', color: '#3178C6', icon: icons.typescript },
        { name: 'Java', color: '#E76F00', icon: icons.java },
        { name: 'Golang', color: '#00ADD8', icon: icons.golang }
      ]
    },
    {
      title: 'Frontend',
      icon: icons.catFront,
      items: [
        { name: 'Vue.js', color: '#41B883', icon: icons.vue },
        { name: 'React', color: '#3FB6DC', icon: icons.react },
        { name: 'HTML', color: '#E34F26', icon: icons.html },
        { name: 'CSS', color: '#3B7BE0', icon: icons.css },
        { name: 'Tailwind CSS', color: '#38BDF8', icon: icons.tailwind }
      ]
    },
    {
      title: 'Backend',
      icon: icons.catBack,
      items: [
        { name: 'Django', color: '#44B78B', icon: icons.django },
        { name: 'Flask', color: '#94A3B8', icon: icons.flask },
        { name: 'API REST', color: '#33D6C0', icon: icons.api }
      ]
    },
    {
      title: 'Banco de Dados',
      icon: icons.catDb,
      items: [
        { name: 'PostgreSQL', color: '#5B93C4', icon: icons.postgres },
        { name: 'Firebird', color: '#F05A28', icon: icons.firebird },
        { name: 'MySQL', color: '#4479A1', icon: icons.mysql },
        { name: 'SQLite', color: '#003B57', icon: icons.sqlite }
      ]
    },
    {
      title: 'Ferramentas',
      icon: icons.catTools,
      wide: true,
      items: [
        { name: 'Git', color: '#F05033', icon: icons.git },
        { name: 'GitHub', color: '#9CA3AF', icon: icons.github },
        { name: 'Docker', color: '#2496ED', icon: icons.docker },
        { name: 'Antigravity', color: '#4285F4', icon: icons.antigravity },
        { name: 'Bruno', color: '#F4AA41', icon: icons.bruno },
        { name: 'Postman', color: '#FF6C37', icon: icons.postman },
        { name: 'VSCode', color: '#22A6F2', icon: icons.vscode },
        { name: 'Zed', color: '#084CCF', icon: icons.zed },
        { name: 'Selenium', color: '#43B02A', icon: icons.selenium }
      ]
    }
  ];

  const skillGroupAccents = [
    'var(--accent)',
    'var(--accent-2)',
    'var(--accent-3)',
    'var(--accent-4)',
    'var(--accent-5)'
  ];

  function buildSkillGradient(accentVar) {
    return `linear-gradient(
      135deg,
      color-mix(in srgb, ${accentVar} 24%, transparent) 0%,
      color-mix(in srgb, ${accentVar} 32%, transparent) 28%,
      color-mix(in srgb, ${accentVar} 10%, transparent) 55%,
      color-mix(in srgb, ${accentVar} 30%, transparent) 82%,
      color-mix(in srgb, ${accentVar} 18%, transparent) 100%
    )`;
  }

  skillGroups.forEach((group, i) => {
    group.accent = skillGroupAccents[i] || 'var(--accent)';
    group.gradient = buildSkillGradient(group.accent);
  });

  const navItems = [
    { id: 'top', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'educacao', label: 'Educação' },
    { id: 'contato', label: 'Contato' }
  ];

  global.PORTFOLIO_DATA = {
    age: 21,
    navItems,
    frameworks,
    experience,
    projects,
    skillGroups,
    services,
    now,
    pillars,
    lockIcon: icons.lock
  };
})(window);
