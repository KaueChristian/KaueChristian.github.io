/* ===========================================================
   App Vue 3 (build global, sem bundler).
   Renderiza as listas do site a partir de js/data.js e cuida
   das interações: tema, menu, scroll spy e reveal on scroll.
   =========================================================== */
(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!window.Vue || !data) return;

  const { createApp } = window.Vue;

  createApp({
    data() {
      return {
        age: data.age,
        navItems: data.navItems,
        frameworks: data.frameworks,
        experience: data.experience,
        projects: data.projects,
        skillGroups: data.skillGroups,
        pillars: data.pillars,
        services: data.services,
        now: data.now,
        lockIcon: data.lockIcon,
        year: new Date().getFullYear(),
        theme: document.documentElement.getAttribute('data-theme') || 'light',
        scrolled: false,
        showScrollTop: false,
        menuOpen: false,
        activeSection: 'top',
        projectFilter: 'todos',
        denied: null,
        deniedTimer: null,
        revealObserver: null
      };
    },

    computed: {
      doneProjects() {
        return this.projects.filter((project) => !project.locked);
      },
      visibleProjects() {
        return this.projectFilter === 'concluidos' ? this.doneProjects : this.projects;
      }
    },

    watch: {
      // Ao filtrar, os cards que voltam são nós novos e precisam ser observados
      projectFilter() {
        this.$nextTick(this.refreshReveal);
      }
    },

    methods: {
      // Clique em um projeto bloqueado: avisa em vez de navegar
      denyAccess(project) {
        this.denied = project.title;
        clearTimeout(this.deniedTimer);
        this.deniedTimer = setTimeout(() => { this.denied = null; }, 3200);
      },

      toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
      },

      closeMenu() {
        this.menuOpen = false;
      },

      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      onScroll() {
        this.scrolled = window.scrollY > 20;
        this.showScrollTop = window.scrollY > 600;
        this.updateTimelineScroll();
      },

      // Animação progressiva e orientada ao scroll da timeline central
      updateTimelineScroll() {
        const timeline = this.$refs.centerTimeline || document.querySelector('.center-timeline');
        if (!timeline) return;

        const lineTrack = timeline.querySelector('.center-timeline__line');
        const fillEl = timeline.querySelector('.center-timeline__fill');
        const arrowEl = timeline.querySelector('.center-timeline__arrow');
        const nodes = timeline.querySelectorAll('.timeline-node');
        if (!lineTrack || !fillEl) return;

        const lineRect = lineTrack.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Ponto de disparo / foco do laser (em 62% da altura da tela)
        const triggerPoint = windowHeight * 0.62;

        const lineTop = lineRect.top;
        const lineHeight = lineRect.height;

        // Calcula porcentagem exata de descida do traço
        let progress = (triggerPoint - lineTop) / lineHeight;
        progress = Math.max(0, Math.min(1, progress));

        if (progress > 0.005) {
          timeline.classList.add('has-scrolled');
        } else {
          timeline.classList.remove('has-scrolled');
        }

        fillEl.style.height = `${(progress * 100).toFixed(1)}%`;

        // Ativa a seta na ponta quando o traço chega ao fim
        if (arrowEl) {
          if (progress >= 0.96) {
            arrowEl.classList.add('is-active');
          } else {
            arrowEl.classList.remove('is-active');
          }
        }

        // Ativa ou desativa cada nó/card individualmente conforme a ponta do traço o alcança
        nodes.forEach((node) => {
          const dotCenter = node.querySelector('.timeline-node__dot-center');
          if (!dotCenter) return;
          const dotRect = dotCenter.getBoundingClientRect();
          if (dotRect.top <= triggerPoint + 6) {
            node.classList.add('is-active');
          } else {
            node.classList.remove('is-active');
          }
        });
      },

      // Revela elementos .reveal conforme entram na viewport
      setupReveal() {
        this.revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            this.revealObserver.unobserve(entry.target);
          });
        }, { threshold: 0.12 });
        this.refreshReveal();
      },

      // Observar um elemento já observado é no-op, então pode ser chamado sempre
      refreshReveal() {
        if (!this.revealObserver) return;
        document.querySelectorAll('.reveal:not(.in-view)')
          .forEach((el) => this.revealObserver.observe(el));
      },

      // Marca o link ativo da navbar conforme a seção visível
      setupScrollSpy() {
        const sections = this.navItems
          .map((item) => document.getElementById(item.id))
          .filter(Boolean);

        const observer = new IntersectionObserver((entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) this.activeSection = visible.target.id;
        }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

        sections.forEach((section) => observer.observe(section));
      }
    },

    mounted() {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      this.onScroll();

      // As listas só existem depois do primeiro render
      this.$nextTick(() => {
        this.setupReveal();
        this.setupScrollSpy();
        this.updateTimelineScroll();
      });
    },

    unmounted() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
      clearTimeout(this.deniedTimer);
      if (this.revealObserver) this.revealObserver.disconnect();
    }
  }).mount('#app');
})();
