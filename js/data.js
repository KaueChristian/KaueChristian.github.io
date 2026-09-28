(function (global) {
  'use strict';

  const { icons, projectGlyphs } = global.PORTFOLIO_ICONS || { icons: {}, projectGlyphs: {} };
  const locales = global.PORTFOLIO_I18N || {};

  const DEFAULT_LANG = 'pt';

  const person = {
    name: 'Kauê Christian',
    email: 'kauefirmo410@gmail.com',
    github: { url: 'https://github.com/KaueChristian', label: 'github.com/KaueChristian' },
    linkedin: {
      url: 'https://www.linkedin.com/in/kau%C3%AA-firmo-593b9b322/',
      label: 'linkedin.com/in/kauê-firmo'
    },
    site: { url: 'https://kauechristian.github.io', label: 'kauechristian.github.io' }
  };

  // Idiomas exibidos no card de identidade do hero.
  const frameworks = [
    { name: 'Vue.js', color: '#41B883', icon: icons.vue },
    { name: 'React', color: '#61DAFB', icon: icons.react },
    { name: 'Golang', color: '#00ADD8', icon: icons.golang },
    { name: 'Python', color: '#3776AB', icon: icons.python },
    { name: 'TypeScript', color: '#3178C6', icon: icons.typescript }
  ];

  const profileChips = ['Python', 'Golang', 'Vue.js', 'React', 'TypeScript', 'SQL'];

  // Datas no formato AAAA-MM; `end: null` significa "em andamento". Durações e períodos
  // são calculados a partir delas, então nunca ficam defasados em relação ao calendário.
  const companies = [
    {
      id: 'tron',
      name: 'Tron Sistemas',
      short: 'tron',
      color: '#14532D',
      current: true,
      glow: true,
      roles: [
        { id: 'jr2', start: '2026-07', end: null },
        { id: 'jr', start: '2026-02', end: '2026-07' },
        { id: 'intern', start: '2025-03', end: '2026-02' }
      ]
    }
  ];

  const projects = [
    {
      id: 'goportunitties',
      num: '01',
      tags: ['Golang', 'React', 'TypeScript', 'SQLite', 'API REST'],
      url: 'https://github.com/KaueChristian/Goportunitties',
      locked: false,
      thumbClass: 'project__thumb--1',
      glyph: '',
      glow: true,
      accent: '#2A78D6',
      accent2: '#199E70',
      accent3: '#9085E9'
    },
    {
      id: 'urlcraft',
      num: '02',
      tags: ['Flask', 'Vue.js', 'Python'],
      url: 'https://urlcraft-fv59.onrender.com',
      locked: false,
      thumbClass: 'project__thumb--5',
      glyph: '',
      glow: true,
      accent: '#3F6BFF',
      accent2: '#20C997',
      accent3: '#F0327A'
    },
    {
      id: 'studysync',
      num: '03',
      tags: ['Python', 'FastAPI', 'React', 'SQLite', 'WebSocket'],
      url: 'https://github.com/KaueChristian/StudySync',
      locked: false,
      thumbClass: 'project__thumb--6',
      glyph: '',
      glow: true,
      accent: '#3A6334',
      accent2: '#98BB90',
      accent3: '#C9A45C'
    },
    {
      id: 'estoque',
      num: '04',
      tags: ['Python', 'SQLite', 'Tkinter'],
      url: 'https://github.com/KaueChristian',
      locked: true,
      thumbClass: 'project__thumb--3',
      glyph: projectGlyphs.box
    },
    {
      id: 'bot',
      num: '05',
      tags: ['Python', 'Selenium', 'Automação'],
      url: 'https://github.com/KaueChristian',
      locked: true,
      thumbClass: 'project__thumb--4',
      glyph: projectGlyphs.bot
    }
  ];

  // `label` aponta para `t.labels`; `name` é um nome próprio de tecnologia, igual em todos os idiomas.
  const pillars = [
    {
      num: '01',
      icon: icons.pillarStack,
      color: 'var(--accent)',
      tags: [
        { name: 'Python', icon: icons.python },
        { name: 'Vue.js', icon: icons.vue },
        { name: 'React', icon: icons.react },
        { name: 'TypeScript', icon: icons.typescript },
        { name: 'SQLite', icon: icons.sqlite }
      ]
    },
    {
      num: '02',
      icon: icons.pillarScale,
      color: 'var(--accent-2)',
      tags: [
        { name: 'Golang', icon: icons.golang },
        { label: 'restApi', icon: icons.api },
        { label: 'webSocket', icon: icons.api },
        { name: 'Docker', icon: icons.docker }
      ]
    },
    {
      num: '03',
      icon: icons.pillarClean,
      color: 'var(--accent-3)',
      tags: [
        { name: 'Clean Code', icon: icons.catCode },
        { name: 'TypeScript', icon: icons.typescript },
        { label: 'testing', icon: icons.catTools },
        { name: 'Git', icon: icons.git }
      ]
    },
    {
      num: '04',
      icon: icons.pillarShield,
      color: 'var(--accent-4)',
      tags: [
        { label: 'productionSystems', icon: icons.svcMaintain },
        { label: 'errorHandling', icon: icons.api },
        { name: 'SQL', icon: icons.catDb }
      ]
    },
    {
      num: '05',
      icon: icons.pillarAuto,
      color: 'var(--accent-5)',
      tags: [
        { name: 'Selenium', icon: icons.selenium },
        { label: 'webScraping', icon: icons.svcAuto },
        { name: 'Git & CI', icon: icons.git }
      ]
    }
  ];

  const skillGroups = [
    {
      id: 'languages',
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
      id: 'frontend',
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
      id: 'backend',
      icon: icons.catBack,
      items: [
        { name: 'Django', color: '#44B78B', icon: icons.django },
        { name: 'Flask', color: '#94A3B8', icon: icons.flask },
        { name: 'API REST', color: '#33D6C0', icon: icons.api }
      ]
    },
    {
      id: 'databases',
      icon: icons.catDb,
      items: [
        { name: 'PostgreSQL', color: '#5B93C4', icon: icons.postgres },
        { name: 'Firebird', color: '#F05A28', icon: icons.firebird },
        { name: 'MySQL', color: '#4479A1', icon: icons.mysql },
        { name: 'SQLite', color: '#003B57', icon: icons.sqlite }
      ]
    },
    {
      id: 'tools',
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
    { id: 'top', key: 'home' },
    { id: 'sobre', key: 'about' },
    { id: 'experiencia', key: 'experience' },
    { id: 'projetos', key: 'projects' },
    { id: 'habilidades', key: 'skills' },
    { id: 'educacao', key: 'education' },
    { id: 'contato', key: 'contact' }
  ];

  // ---- Datas e durações ----------------------------------------------------

  function parseMonth(value) {
    const [year, month] = value.split('-').map(Number);
    return { year, month: month - 1 };
  }

  // Contagem inclusiva (mês inicial e final entram), no mesmo critério do LinkedIn.
  function monthSpan(start, end) {
    const from = parseMonth(start);
    const now = new Date();
    const to = end ? parseMonth(end) : { year: now.getFullYear(), month: now.getMonth() };
    return (to.year - from.year) * 12 + (to.month - from.month) + 1;
  }

  function plural(count, forms) {
    return `${count} ${count === 1 ? forms[0] : forms[1]}`;
  }

  function formatDuration(months, dates) {
    const years = Math.floor(months / 12);
    const rest = months % 12;
    if (!years) return plural(rest, dates.month);
    if (!rest) return plural(years, dates.year);
    return plural(years, dates.year) + dates.and + plural(rest, dates.month);
  }

  function formatMonth(value, dates) {
    const { year, month } = parseMonth(value);
    return dates.months[month] + dates.joiner + year;
  }

  function formatPeriod(start, end, dates) {
    return `${formatMonth(start, dates)} — ${end ? formatMonth(end, dates) : dates.present}`;
  }

  function formatExperienceStat(months, dates) {
    const years = Math.floor(months / 12);
    return years ? `${years}+ ${years === 1 ? dates.year[0] : dates.year[1]}` : plural(months, dates.month);
  }

  // ---- Montagem por idioma -------------------------------------------------

  function build(lang) {
    const t = locales[lang];
    const dates = t.dates;

    const experience = companies.map((company) => {
      const copy = t.experience.companies[company.id];
      const earliest = company.roles.reduce((min, role) => (role.start < min ? role.start : min), company.roles[0].start);
      return {
        id: company.id,
        name: company.name,
        short: company.short,
        color: company.color,
        current: company.current,
        glow: company.glow,
        location: copy.location,
        duration: formatDuration(monthSpan(earliest, null), dates),
        roles: company.roles.map((role) => ({
          id: role.id,
          ...copy.roles[role.id],
          period: formatPeriod(role.start, role.end, dates),
          duration: formatDuration(monthSpan(role.start, role.end), dates)
        }))
      };
    });

    const earliestStart = companies
      .flatMap((company) => company.roles)
      .reduce((min, role) => (role.start < min ? role.start : min), '9999-12');

    return {
      lang,
      t,
      person,
      frameworks,
      profileChips,
      lockIcon: icons.lock,
      stats: {
        experience: formatExperienceStat(monthSpan(earliestStart, null), dates),
        projects: String(projects.length)
      },
      navItems: navItems.map((item) => ({ id: item.id, label: t.nav[item.key] })),
      experience,
      projects: projects.map((project) => {
        const copy = t.projects.items[project.id];
        return {
          ...project,
          ...copy,
          tags: project.tags.map((tag) => t.projects.tagLabels[tag] || tag)
        };
      }),
      skillGroups: skillGroups.map((group) => ({ ...group, title: t.skills.groups[group.id] })),
      pillars: pillars.map((pillar, i) => ({
        ...pillar,
        ...t.pillars[i],
        tags: pillar.tags.map((tag) => ({ name: tag.label ? t.labels[tag.label] : tag.name, icon: tag.icon }))
      })),
      now: t.now.items,
      seeking: t.seeking.items
    };
  }

  function get(lang) {
    return build(locales[lang] ? lang : DEFAULT_LANG);
  }

  global.PORTFOLIO_DATA = {
    languages: Object.keys(locales),
    defaultLang: DEFAULT_LANG,
    get
  };
})(window);
