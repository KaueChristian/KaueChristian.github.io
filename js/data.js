/* ===========================================================
   Dados do portfólio — tudo que é lista fica aqui.
   Para editar conteúdo do site, este é o único arquivo
   que você precisa mexer.
   =========================================================== */
(function (global) {
  'use strict';

  // Ícone "monograma": ladrilho arredondado com a cor da tecnologia + letras.
  // Usado nas marcas cujo logo não rende bem em traço único.
  const mono = (letters, fontSize) => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="currentColor" opacity="0.18"/>
      <text x="12" y="16.2" text-anchor="middle" fill="currentColor"
            font-size="${fontSize || 10}" font-weight="700"
            font-family="Outfit, system-ui, sans-serif">${letters}</text>
    </svg>`;

  const icons = {
    python: `<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 4c-6 0-6 3-6 3v3h6v1H7s-4 0-4 6 4 6 4 6h2v-3s0-3 3-3h6s3 0 3-3V7s0-3-6-3z"/>
      <path opacity="0.5" d="M16 28c6 0 6-3 6-3v-3h-6v-1h9s4 0 4-6-4-6-4-6h-2v3s0 3-3 3h-6s-3 0-3 3v6s0 3 6 3z"/>
    </svg>`,

    vue: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.6 3h4.3L12 13.4 18.1 3h4.3L12 21 1.6 3Z"/>
      <path opacity="0.5" d="M6.6 3h3.2L12 6.7 14.2 3h3.2L12 12.4 6.6 3Z"/>
    </svg>`,

    react: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.1" stroke-width="1.3"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.1" stroke-width="1.3" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.1" stroke-width="1.3" transform="rotate(120 12 12)"/>
    </svg>`,

    django: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 2.2h3.3v13.2c0 2.9-1.8 4.6-5 4.6-1 0-1.9-.1-2.9-.4l.4-2.8c.7.2 1.3.3 1.9.3 1.5 0 2.3-.8 2.3-2.4V2.2Z" opacity="0.5"/>
      <path d="M9.9 6.4h3.3v9.7c-1.4.5-2.9.8-4.5.8-4.2 0-6.4-1.9-6.4-5.5 0-3.5 2.3-5.7 5.9-5.7.6 0 1.1.1 1.7.2v3c-.5-.2-.9-.2-1.4-.2-1.7 0-2.7 1-2.7 2.7 0 1.7 1 2.6 2.7 2.6.4 0 .8 0 1.4-.2V6.4Z"/>
      <path d="M15.1 6.4h3.3v11.1h-3.3V6.4Zm0-4.2h3.3v3.1h-3.3V2.2Z"/>
    </svg>`,

    flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <path d="M10 3h4v6.2l4.4 8.5A3.2 3.2 0 0 1 15.6 22H8.4a3.2 3.2 0 0 1-2.8-4.3L10 9.2V3Z" stroke-linejoin="round"/>
      <path d="M8.9 3h6.2" stroke-linecap="round"/>
      <path d="M7.6 15.4h8.8" stroke-linecap="round"/>
    </svg>`,

    javascript: mono('JS', 10),
    typescript: mono('TS', 10),
    delphi: mono('D', 13),
    firebird: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.4s5.2 4.3 5.2 9.4a5.2 5.2 0 0 1-10.4 0C6.8 6.7 12 2.4 12 2.4Z" opacity="0.35"/>
      <path d="M12 21.6a3.4 3.4 0 0 1-3.4-3.4c0-2.6 3.4-5.6 3.4-5.6s3.4 3 3.4 5.6a3.4 3.4 0 0 1-3.4 3.4Z"/>
    </svg>`,

    java: `<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M13 21.5c-2.2.6-1.3 1.4.3 1.7 3.4.5 7.1.2 8.9-.7-1.4.6-3.2 1-5.2 1.2-3.7.3-7.6-.2-7.9-1.3-.2-.6.9-1.1 3.9-.9Z"/>
      <path d="M14.4 17.8c-2.5.7-.9 1.4.4 1.6 2.6.4 5.4.2 6.9-.5-1.1.5-2.5.8-4.1 1-2.9.2-5.6-.1-5.8-1 0-.5.9-1 2.6-1.1Z"/>
      <path d="M18.2 8c1.9 2.2-.5 4.2-.5 4.2s2.4-1.2 1.3-2.8c-1-1.4-1.8-2.1.2-3.4 0 0-2.9.7-1 2Z"/>
      <path d="M12.5 14.6c-1.9.5-.6 1.1.3 1.3 1.9.3 4 .1 5.1-.4-.8.3-1.9.6-3 .7-2.1.2-4.2 0-4.3-.7 0-.4.7-.8 1.9-.9Z"/>
      <path d="M10.5 24.8c-1.7 1 .7 1.9 5.5 2 3.8.1 6.8-.5 6.8-1.3 0-.5-1.2-.9-2.5-1 1 .7.4 1.3-2.4 1.5-3.3.2-7-.4-7.4-1.2Z" opacity="0.55"/>
    </svg>`,

    postgres: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7.5" ry="3.2"/>
      <path d="M4.5 6v12c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V6"/>
      <path d="M4.5 12c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2"/>
    </svg>`,

    html: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.5 2h17l-1.5 17.2L12 22l-7-2.8L3.5 2Z" opacity="0.25"/>
      <path d="M12 4.6h6.3l-.2 2.3H12V4.6Zm0 5.1h6l-.6 6.8-5.4 1.7V15.8l3-.9.2-2.6H12V9.7Z"/>
      <path d="M12 4.6v2.3H5.9l-.2-2.3H12Zm0 5.1v2.6H8.6l.1 1.3H12v2.4l-3-.9-.2-2.2-.4-3.2H12Z" opacity="0.65"/>
    </svg>`,

    css: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.5 2h17l-1.5 17.2L12 22l-7-2.8L3.5 2Z" opacity="0.25"/>
      <path d="M12 4.6h6.3l-.2 2.3H12V4.6Zm0 5.1h6l-.6 6.8-5.4 1.7V15.8l3-.9.2-2.6H12V9.7Z"/>
      <path d="M12 4.6v2.3H5.9l-.2-2.3H12Zm0 5.1v2.6H8.6l.1 1.3H12v2.4l-3-.9-.2-2.2-.4-3.2H12Z" opacity="0.65"/>
    </svg>`,

    api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"/>
    </svg>`,

    git: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="7" cy="5.5" r="2.3"/>
      <circle cx="7" cy="18.5" r="2.3"/>
      <circle cx="17" cy="11.5" r="2.3"/>
      <path d="M6.2 7.8h1.6v8.4H6.2z"/>
      <path d="M8.6 10.7h6.2v1.6H8.6z"/>
    </svg>`,

    github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
    </svg>`,

    docker: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 10h2.6v2.6H4V10Zm3.4 0H10v2.6H7.4V10Zm3.4 0h2.6v2.6h-2.6V10Zm3.4 0h2.6v2.6h-2.6V10ZM7.4 6.8H10v2.5H7.4V6.8Zm3.4 0h2.6v2.5h-2.6V6.8Zm0-3.2h2.6v2.5h-2.6V3.6Z"/>
      <path d="M22.4 11.4c-.6-.4-1.9-.6-2.9-.4-.1-1-.7-1.8-1.7-2.5l-.6-.4-.4.6c-.5.8-.7 1.9-.4 2.8-.4.2-1 .3-1.5.3H1.7l-.1.6c-.3 1.9.2 4.3 1.7 5.9C4.7 20 6.8 20.8 9.5 20.8c5.8 0 10.1-2.7 12.1-7.5 .8 0 2.5 0 3.4-1.7l-2.6-.2Z" opacity="0.55"/>
    </svg>`,

    vscode: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 1.6 8.9 9.9 4.6 6.6 2.4 7.7l3.5 4.3-3.5 4.3 2.2 1.1 4.3-3.3 8.7 8.3L22 20.6V3.4L17.6 1.6Zm.3 5.1v10.6l-6.1-5.3 6.1-5.3Z"/>
    </svg>`,

    zed: mono('Z', 13),
    bruno: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 21 8v8l-9 5.5L3 16V8l9-5.5Zm0 2.7L5.4 9.2v5.6L12 18.8l6.6-4V9.2L12 5.2Z"/>
      <path d="M12 8.2 16.4 11v2.9L12 16.6 7.6 13.9V11L12 8.2Z" opacity="0.55"/>
    </svg>`,
    postman: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2"/>
      <path d="M8.2 15.8 15.6 8.4M11 8.9c1.7-1.7 3.5-2.2 4.4-1.3.9.9.4 2.7-1.3 4.4l-2.6 2.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    antigravity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <path d="M12 3c2.6 2.2 4 5.1 4 8.4 0 2.4-1.3 4.4-4 6.2-2.7-1.8-4-3.8-4-6.2C8 8.1 9.4 5.2 12 3Z" stroke-linejoin="round"/>
      <circle cx="12" cy="10" r="1.8"/>
      <path d="M8.4 15.4 6 20.2l4.1-1.6M15.6 15.4 18 20.2l-4.1-1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // Ícones dos cabeçalhos de cada card de habilidade
    catCode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8 6 3 12l5 6M16 6l5 6-5 6M13.6 4.4 10.4 19.6"/></svg>`,
    catFront: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="12.5" rx="2.5"/><path d="M8.5 20h7" stroke-linecap="round"/><path d="M12 16.5V20" stroke-linecap="round"/></svg>`,
    catBack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/>
      <path d="M7 7h.01M7 17h.01" stroke-linecap="round"/></svg>`,
    catDb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <ellipse cx="12" cy="5.8" rx="7.6" ry="3"/><path d="M4.4 5.8v12.4c0 1.7 3.4 3 7.6 3s7.6-1.3 7.6-3V5.8"/>
      <path d="M4.4 12c0 1.7 3.4 3 7.6 3s7.6-1.3 7.6-3"/></svg>`,
    catTools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true">
      <path d="M14.8 6.2a4 4 0 0 1 5.4 4.9l-9.5 9.5a2.3 2.3 0 0 1-3.3-3.3l9.5-9.5a4 4 0 0 1-2.1-1.6Z"/>
      <path d="M9.2 3.4 6 4.4 5 7.6l2.6 2.6 3.2-1 1-3.2L9.2 3.4Z"/></svg>`,

    // Ícones dos cards de "O que eu faço"
    svcStack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
      <path d="M12 3 3 7.6l9 4.6 9-4.6L12 3Z"/><path d="m3 12.4 9 4.6 9-4.6"/><path d="m3 17.2 9 4.6 9-4.6"/></svg>`,
    svcMaintain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
      <path d="M20.5 12a8.5 8.5 0 0 1-14 6.5"/><path d="M3.5 12a8.5 8.5 0 0 1 14-6.5"/>
      <path d="M17.5 2.4v3.4h-3.4M6.5 21.6v-3.4h3.4"/><circle cx="12" cy="12" r="2.4"/></svg>`,
    svcApi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
      <path d="M8.5 4.5H7A2.5 2.5 0 0 0 4.5 7v3.2L2.8 12l1.7 1.8V17A2.5 2.5 0 0 0 7 19.5h1.5"/>
      <path d="M15.5 4.5H17A2.5 2.5 0 0 1 19.5 7v3.2L21.2 12l-1.7 1.8V17a2.5 2.5 0 0 1-2.5 2.5h-1.5"/>
      <path d="M12 8.6v6.8"/></svg>`,
    svcAuto: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
      <rect x="4" y="8.5" width="16" height="11.5" rx="3"/><path d="M12 3.6v4.9"/><circle cx="12" cy="2.7" r="1.5" fill="currentColor" stroke="none"/>
      <path d="M2.6 13.8h1.4M20 13.8h1.4"/><circle cx="9.4" cy="13.6" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="14.6" cy="13.6" r="1.2" fill="currentColor" stroke="none"/><path d="M9.6 17h4.8"/></svg>`,

    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.6"/>
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/><circle cx="12" cy="15.5" r="1.5" fill="currentColor" stroke="none"/></svg>`
  };

  const projectGlyphs = {
    code: `<svg viewBox="0 0 24 24" fill="none"><path d="M8 6 3 12l5 6M16 6l5 6-5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 4.5 10.5 19.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M3 9.5h18M8 2.8v3.4M16 2.8v3.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 13.5h3M8 17h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none"><path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m4 7.2 8 4.3 8-4.3M12 11.5V21" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    bot: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v5M2.5 13.5h1.6M19.9 13.5h1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="2.6" r="1.4" fill="currentColor"/><circle cx="9.3" cy="13.4" r="1.3" fill="currentColor"/><circle cx="14.7" cy="13.4" r="1.3" fill="currentColor"/><path d="M9.5 16.8h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
  };

  // ---------------------------------------------------------
  // Frameworks em destaque no card do hero
  // ---------------------------------------------------------
  const frameworks = [
    { name: 'Vue.js', color: '#41B883', icon: icons.vue },
    { name: 'React', color: '#61DAFB', icon: icons.react },
    { name: 'Django', color: '#44B78B', icon: icons.django },
    { name: 'Flask', color: '#94A3B8', icon: icons.flask }
  ];

  // ---------------------------------------------------------
  // Experiência profissional
  // ---------------------------------------------------------
  const experience = [
    {
      name: 'Tron Sistemas',
      short: 'tron',
      color: '#14532D',
      duration: '1 ano e 6 meses',
      location: 'Goiânia — GO',
      current: true,
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

  // ---------------------------------------------------------
  // Projetos (mesma ordem do site anterior)
  // ---------------------------------------------------------
  // locked: true = ainda em desenvolvimento (card bloqueado, sem link)
  const projects = [
    {
      num: '01',
      title: 'Goportunitties',
      desc: 'API REST completa em Go, com persistência em banco de dados e organização clara das camadas da aplicação, pensada para performance. Sem deploy: o repositório traz imagens e demonstrações de funcionamento.',
      tags: ['Golang', 'SQL', 'API REST'],
      url: 'https://github.com/KaueChristian/Goportunitties',
      linkLabel: 'Ver no GitHub',
      locked: false,
      thumbClass: 'project__thumb--1',
      glyph: projectGlyphs.code
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
      glyph: ''
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

  // ---------------------------------------------------------
  // Seção "Sobre": o que eu faço + no que estou agora
  // ---------------------------------------------------------
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
    { label: 'Aprofundando', value: 'Django, React e arquitetura de APIs REST' }
  ];

  // ---------------------------------------------------------
  // Habilidades por área
  // ---------------------------------------------------------
  const skillGroups = [
    {
      title: 'Linguagens Core',
      icon: icons.catCode,
      items: [
        { name: 'Python', color: '#3776AB', icon: icons.python },
        { name: 'Delphi', color: '#E62431', icon: icons.delphi },
        { name: 'JavaScript', color: '#E3B341', icon: icons.javascript },
        { name: 'TypeScript', color: '#3178C6', icon: icons.typescript },
        { name: 'Java', color: '#E76F00', icon: icons.java }
      ]
    },
    {
      title: 'Frontend',
      icon: icons.catFront,
      items: [
        { name: 'Vue.js', color: '#41B883', icon: icons.vue },
        { name: 'React', color: '#3FB6DC', icon: icons.react },
        { name: 'HTML', color: '#E34F26', icon: icons.html },
        { name: 'CSS', color: '#3B7BE0', icon: icons.css }
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
        { name: 'Firebird', color: '#F05A28', icon: icons.firebird }
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
        { name: 'Antigravity', color: '#7C5CFF', icon: icons.antigravity },
        { name: 'Bruno', color: '#F4AA41', icon: icons.bruno },
        { name: 'Postman', color: '#FF6C37', icon: icons.postman },
        { name: 'VSCode', color: '#22A6F2', icon: icons.vscode },
        { name: 'Zed', color: '#6A7DE8', icon: icons.zed }
      ]
    }
  ];

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
    age: 21, navItems, frameworks, experience, projects, skillGroups,
    services, now, lockIcon: icons.lock
  };
})(window);
