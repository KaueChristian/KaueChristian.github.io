(function (global) {
  'use strict';

  const registry = (global.PORTFOLIO_I18N = global.PORTFOLIO_I18N || {});

  registry.pt = {
    htmlLang: 'pt-BR',

    meta: {
      title: 'Kaue Firmo — Desenvolvedor Full Stack',
      description: 'Portfólio de Kaue Firmo, desenvolvedor full stack em Goiânia. Vue, React, Python e Go, com APIs REST e aplicações em produção.'
    },

    dates: {
      months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      joiner: ' de ',
      present: 'o momento',
      year: ['ano', 'anos'],
      month: ['mês', 'meses'],
      and: ' e '
    },

    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      education: 'Educação',
      contact: 'Contato'
    },

    ui: {
      openMenu: 'Abrir menu',
      toggleTheme: 'Alternar tema',
      switchLang: 'Mudar para inglês',
      langButton: 'EN',
      scrollTop: 'Voltar ao topo'
    },

    hero: {
      eyebrow: 'Olá, me chamo',
      role: 'Desenvolvedor Full Stack',
      desc: 'Transformando ideias em sistemas organizados e escaláveis. Nos meus projetos, vou do banco de dados à interface com <strong>Vue</strong>, <strong>React</strong>, <strong>Python</strong> e <strong>Go</strong>; no trabalho, mantenho e evoluo aplicações em produção.',
      projectsCta: 'Ver projetos →',
      cvCta: 'Ver CV',
      contactCta: 'Entrar em contato'
    },

    idcard: {
      tag: '// perfil',
      title: 'Fullstack',
      subtitle: 'Do banco de dados à interface.',
      location: 'Local',
      experience: 'Experiência',
      projects: 'Projetos',
      status: 'Status',
      statusValue: 'Aberto a oportunidades',
      stack: 'Stack'
    },

    about: {
      eyebrow: 'Sobre mim',
      title: 'Quem sou eu',
      lead: 'Desenvolvedor full stack em Goiânia, focado em engenharia de software prática: sistemas estáveis em produção e novas soluções bem estruturadas, do banco de dados à interface.',
      p1: 'No trabalho, mantenho e evoluo <strong>sistemas em produção com Python, Delphi e SQL</strong>, lidando com regras de negócio complexas, consultas SQL e investigação de causas-raiz para manter as aplicações estáveis e confiáveis.',
      p2: 'Sou estudante de <strong>Engenharia de Software</strong> e, por conta própria, levo essa visão de ponta a ponta para <strong>projetos pessoais</strong>: <strong>APIs em Go e Python</strong> com <strong>Vue.js e React</strong> na interface, como o Goportunitties, o StudySync e o UrlCraft.',
      codeFocus: 'APIs & Aplicações Web',
      telemetry: [
        { label: '// ATUAÇÃO', value: 'Tron Sistemas', sub: 'Desenvolvedor Jr II' },
        { label: '// FORMAÇÃO', value: 'Eng. de Software', sub: 'Unigoiás · 2026' },
        { label: '// METODOLOGIA', value: 'Clean Code', sub: 'SOLID & Resiliência' },
        { label: '// BASE', value: 'Goiânia — GO', sub: 'Remoto / Híbrido' }
      ],
      available: 'Disponível'
    },

    principles: {
      eyebrow: 'Princípios & Habilidades',
      title: 'Como Eu Construo Software',
      paragraph: 'Padrões de engenharia, arquitetura e boas práticas aplicados em cada etapa do ciclo de vida da aplicação.'
    },

    labels: {
      restApi: 'API REST',
      webSocket: 'WebSocket',
      testing: 'Testes',
      productionSystems: 'Sistemas em Produção',
      errorHandling: 'Tratamento de Erros',
      webScraping: 'Web Scraping',
      automation: 'Automação'
    },

    pillars: [
      {
        title: 'Full Stack de Ponta a Ponta',
        subtitle: 'Da modelagem de dados à experiência do usuário',
        desc: 'Projetos que cobrem o ciclo completo: modelagem de dados, regras de negócio no back-end com Python (FastAPI e Flask) e interfaces modernas e responsivas em Vue.js, React e TypeScript, como no StudySync e no UrlCraft.'
      },
      {
        title: 'APIs & Arquitetura em Camadas',
        subtitle: 'Sistemas estruturados para crescer com estabilidade',
        desc: 'APIs REST em Go (Gin + GORM) e Python, com camadas desacopladas, contratos claros entre back-end e front-end, ingestão de dados e comunicação em tempo real via WebSocket, como no Goportunitties e no StudySync.'
      },
      {
        title: 'Código Limpo & Testes',
        subtitle: 'Legibilidade, manutenibilidade e padrões sólidos',
        desc: 'Clean Code e princípios SOLID, componentização modular, tipagem estrita com TypeScript e testes automatizados. Código escrito para ser lido, evoluído e mantido por outras pessoas.'
      },
      {
        title: 'Resiliência & Estabilidade em Produção',
        subtitle: 'Sistemas que precisam funcionar todos os dias',
        desc: 'Experiência prática mantendo sistemas corporativos em operação diária: tratamento preventivo de exceções, auditoria de dados, correção de bugs em bases legadas e foco em confiabilidade operacional.'
      },
      {
        title: 'Automação & Integrações',
        subtitle: 'Menos tarefas manuais, mais rotinas programadas',
        desc: 'Automações com Selenium e Python para substituir tarefas manuais por rotinas programadas, além de web scraping e integração confiável com APIs e webhooks.'
      }
    ],

    now: {
      title: 'Atualmente',
      items: [
        { label: 'Trabalhando', value: 'Desenvolvedor Júnior II na Tron Sistemas' },
        { label: 'Estudando', value: 'Engenharia de Software na Unigoiás — conclusão em 2026' },
        { label: 'Aprofundando', value: 'Golang, Django e arquitetura de APIs REST' }
      ]
    },

    seeking: {
      title: 'Aberto a oportunidades',
      items: [
        { label: 'Função', value: 'Desenvolvedor Full Stack ou Back-end' },
        { label: 'Contrato', value: 'CLT, PJ ou contrato internacional' },
        { label: 'Modalidade', value: 'Remoto para vagas fora de Goiânia · Híbrido em Goiânia' }
      ]
    },

    experience: {
      eyebrow: 'Trajetória',
      title: 'Experiência Profissional',
      paragraph: 'Onde venho aplicando e construindo o que sei.',
      current: 'Atual',
      companies: {
        tron: {
          location: 'Goiânia — GO',
          roles: {
            jr2: {
              title: 'Desenvolvedor Júnior II',
              type: 'Tempo integral',
              place: 'Goiânia e Região · Híbrido',
              desc: 'Desenvolvimento e evolução de módulos do sistema, atuando do banco de dados à interface e apoiando decisões técnicas do time.'
            },
            jr: {
              title: 'Desenvolvedor Júnior',
              type: 'Temporário',
              place: 'Goiás, Brasil · Híbrido',
              desc: 'Implementação de novas funcionalidades e correção de defeitos em aplicações já em produção, com foco em estabilidade e qualidade de código.'
            },
            intern: {
              title: 'Estagiário',
              type: 'Estágio',
              place: 'Goiânia, Goiás, Brasil',
              desc: 'Manutenção de sistemas legado e tratamento de erros, atuando na estabilidade e na continuidade de aplicações em produção.'
            }
          }
        }
      }
    },

    projects: {
      eyebrow: 'Portfólio',
      title: 'Meus Projetos',
      paragraph: 'Uma coleção de projetos em que já trabalhei. Os que ainda estão em desenvolvimento aparecem bloqueados.',
      filterLabel: 'Filtrar projetos',
      all: 'Todos',
      done: 'Concluídos',
      lockBadge: 'Em desenvolvimento',
      unavailable: 'Indisponível',
      denied: 'Esse projeto ainda está em desenvolvimento — publico assim que ficar pronto.',
      ctaEyebrow: 'E tem mais',
      ctaTitle: 'Confira meu GitHub',
      ctaText: 'Outros projetos, testes e experimentos ficam por lá.',
      ctaButton: 'Ver GitHub',
      tagLabels: { 'API REST': 'API REST', 'Automação': 'Automação' },
      items: {
        goportunitties: {
          title: 'Goportunitties',
          desc: 'Painel completo e API REST em Go (Gin + GORM + SQLite) com interface web em React para busca, publicação e métricas de vagas tech em tempo real.',
          linkLabel: 'Ver no GitHub'
        },
        urlcraft: {
          title: 'Encurtador de URL',
          desc: 'Encurtador de links com API em Flask e interface em Vue.js, incluindo tratamento e validação das URLs recebidas.',
          linkLabel: 'Ver site'
        },
        studysync: {
          title: 'StudySync',
          desc: 'Agenda de estudos para Windows e web: sessões por matéria com lembrete em tempo real, timer de foco (Pomodoro), busca de conteúdo de apoio em fontes confiáveis e anotações em Markdown.',
          linkLabel: 'Ver no GitHub'
        },
        estoque: {
          title: 'Gerenciador de Estoque',
          desc: 'Software desktop para controle de estoque, com back-end em Python e SQLite e interface gráfica construída em Tkinter.',
          linkLabel: 'Ver projeto'
        },
        bot: {
          title: 'Bot de Rede Social',
          desc: 'Automação de tarefas repetitivas em redes sociais usando Selenium, incluindo o envio programado de mensagens.',
          linkLabel: 'Ver projeto'
        }
      }
    },

    skills: {
      eyebrow: 'Expertise',
      title: 'Minhas Habilidades',
      paragraph: 'As tecnologias com que já trabalhei, por área.',
      groups: {
        languages: 'Linguagens Core',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Banco de Dados',
        tools: 'Ferramentas'
      }
    },

    education: {
      eyebrow: 'Formação',
      title: 'Educação & Idiomas',
      degree: 'Engenharia de Software',
      degreePlace: 'Unigoiás — Centro Universitário de Goiás',
      degreeMeta: 'Conclusão em 2026',
      highSchool: 'Ensino Médio Completo',
      highSchoolPlace: 'Colégio MetaTech',
      languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Avançado' }
      ]
    },

    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      subtitle: 'Tem um projeto em mente, uma vaga aberta ou quer trocar uma ideia? Me manda uma mensagem, vou adorar conversar.',
      cvCta: 'Ver CV',
      footer: 'Todos os direitos reservados.'
    },

    cvModal: {
      title: 'CV',
      close: 'Fechar',
      download: 'Baixar PDF',
      frameTitle: 'CV de Kauê Christian'
    },

    cv: {
      headline: 'Engenheiro de Software Júnior',
      availability: 'Aberto a CLT, PJ e contratos internacionais · Remoto para vagas fora de Goiânia · Híbrido em Goiânia',
      sections: {
        objective: 'Objetivo',
        experience: 'Experiência',
        projects: 'Projetos pessoais',
        skills: 'Habilidades',
        areas: 'Áreas de atuação',
        soft: 'Competências',
        education: 'Formação',
        languages: 'Idiomas'
      },
      objective: 'A parte de que mais gosto na programação é transformar ideias em sistemas, o que se mostra bastante desafiador em muitos casos. Estou sempre buscando aprender e entender novas tecnologias e linguagens, ampliando meus conhecimentos e habilidades para me adaptar aos padrões das empresas e do mercado.',
      areas: ['Desenvolvimento de software e web', 'Manutenção de sistemas legado', 'Automação e web scraping'],
      soft: ['Trabalho em equipe', 'Multitarefas', 'Atenção aos detalhes', 'Adaptabilidade'],
      otherExperience: [
        {
          title: 'Assistente de TI',
          company: 'GoConsignado',
          desc: 'Manutenção de máquinas da empresa e suporte com funcionalidades de sistemas.'
        }
      ],
      degreeLine: 'Engenharia de Software — Unigoiás (Centro Universitário de Goiás) · conclusão em 2026',
      highSchoolLine: 'Ensino Médio Completo — Colégio MetaTech',
      location: 'Goiânia, GO — Brasil',
      linkLabel: 'Repositório',
      siteLabel: 'Portfólio'
    }
  };
})(window);
