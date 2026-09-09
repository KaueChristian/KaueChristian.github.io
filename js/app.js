(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!window.Vue || !data) return;

  const { createApp } = window.Vue;
  const { PortfolioTheme, PortfolioTimeline, PortfolioReveal, PortfolioScrollSpy, PortfolioSpotlight } = window;

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
        theme: PortfolioTheme ? PortfolioTheme.getStoredTheme() : 'light',
        scrolled: false,
        showScrollTop: false,
        menuOpen: false,
        activeSection: 'top',
        projectFilter: 'todos',
        denied: null,
        deniedTimer: null,
        revealObserver: null,
        scrollSpyObserver: null
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
      projectFilter() {
        this.$nextTick(this.refreshReveal);
      },
      activeSection() {
        this.$nextTick(this.updateNavIndicator);
      }
    },

    methods: {
      denyAccess(project) {
        this.denied = project.title;
        clearTimeout(this.deniedTimer);
        this.deniedTimer = setTimeout(() => { this.denied = null; }, 3200);
      },

      toggleTheme() {
        if (PortfolioTheme) {
          this.theme = PortfolioTheme.toggleTheme();
        }
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
        if (PortfolioTimeline) {
          PortfolioTimeline.updateTimelineScroll(this.$refs.centerTimeline);
        }
        this.updateScrollProgress();
      },

      updateScrollProgress() {
        const bar = document.querySelector('.scroll-progress');
        if (!bar) return;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        bar.style.transform = `scaleX(${pct})`;
      },

      updateNavIndicator() {
        const container = this.$refs.navLinks;
        const indicator = this.$refs.navIndicator;
        if (!container || !indicator) return;
        const active = container.querySelector('.nav__link.is-active');
        if (!active) {
          indicator.style.opacity = '0';
          return;
        }
        indicator.style.opacity = '1';
        indicator.style.width = `${active.offsetWidth}px`;
        indicator.style.transform = `translateX(${active.offsetLeft}px)`;
      },

      setupReveal() {
        if (!PortfolioReveal) return;
        this.revealObserver = PortfolioReveal.createRevealObserver();
        this.refreshReveal();
      },

      refreshReveal() {
        if (PortfolioReveal && this.revealObserver) {
          PortfolioReveal.refreshReveal(this.revealObserver);
        }
      },

      setupScrollSpy() {
        if (!PortfolioScrollSpy) return;
        this.scrollSpyObserver = PortfolioScrollSpy.createScrollSpy(this.navItems, (activeId) => {
          this.activeSection = activeId;
        });
      }
    },

    mounted() {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      this.onScroll();

      this.$nextTick(() => {
        this.setupReveal();
        this.setupScrollSpy();
        if (PortfolioSpotlight) {
          PortfolioSpotlight.initSpotlight();
          PortfolioSpotlight.initTilt();
        }
        if (PortfolioTimeline) {
          PortfolioTimeline.updateTimelineScroll(this.$refs.centerTimeline);
        }
        this.updateNavIndicator();
        window.addEventListener('resize', this.updateNavIndicator, { passive: true });
      });
    },

    unmounted() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
      window.removeEventListener('resize', this.updateNavIndicator);
      clearTimeout(this.deniedTimer);
      if (this.revealObserver) this.revealObserver.disconnect();
      if (this.scrollSpyObserver) this.scrollSpyObserver.disconnect();
    }
  }).mount('#app');
})();
