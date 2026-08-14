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
      this.onScroll();

      // As listas só existem depois do primeiro render
      this.$nextTick(() => {
        this.setupReveal();
        this.setupScrollSpy();
      });

      // A timeline do "Sobre" anima quando entra na tela
      const stats = this.$refs.statsTimeline;
      if (stats) {
        const statsObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            statsObserver.unobserve(entry.target);
          });
        }, { threshold: 0.3 });
        statsObserver.observe(stats);
      }
    },

    unmounted() {
      window.removeEventListener('scroll', this.onScroll);
      clearTimeout(this.deniedTimer);
      if (this.revealObserver) this.revealObserver.disconnect();
    }
  }).mount('#app');
})();
