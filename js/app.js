(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!window.Vue || !data) return;

  const { createApp } = window.Vue;
  const { PortfolioTheme, PortfolioTimeline, PortfolioReveal, PortfolioScrollSpy, PortfolioSpotlight, PortfolioI18n } = window;

  // Estado não reativo (não precisa passar pelo proxy do Vue a cada evento):
  // frame pendente do scroll e geometria dos cards no início de uma saída do filtro.
  let scrollFrame = 0;
  let leaveGeometry = null;

  createApp({
    data() {
      return {
        lang: PortfolioI18n ? PortfolioI18n.detectLang() : data.defaultLang,
        cvOpen: false,
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
      // Todo o conteúdo textual vem de um único objeto, recalculado quando o idioma muda.
      content() {
        return data.get(this.lang);
      },
      t() { return this.content.t; },
      navItems() { return this.content.navItems; },
      frameworks() { return this.content.frameworks; },
      profileChips() { return this.content.profileChips; },
      stats() { return this.content.stats; },
      experience() { return this.content.experience; },
      projects() { return this.content.projects; },
      skillGroups() { return this.content.skillGroups; },
      pillars() { return this.content.pillars; },
      now() { return this.content.now; },
      seeking() { return this.content.seeking; },
      lockIcon() { return this.content.lockIcon; },
      otherLang() {
        return this.lang === 'pt' ? 'en' : 'pt';
      },
      cvPdfName() {
        return `Kaue-Christian-CV-${this.lang.toUpperCase()}.pdf`;
      },
      cvPdfUrl() {
        return `assets/cv/${this.cvPdfName}`;
      },
      cvFrameUrl() {
        return `cv.html?lang=${this.lang}&embed=1`;
      },
      doneProjects() {
        return this.projects.filter((project) => !project.locked);
      },
      visibleProjects() {
        return this.projectFilter === 'concluidos' ? this.doneProjects : this.projects;
      }
    },

    watch: {
      lang: {
        immediate: true,
        handler() {
          if (PortfolioI18n) PortfolioI18n.applyDocumentLang(this.t);
          // Os textos mudam de largura e altura: recalcula o que depende de medidas.
          this.$nextTick(() => {
            this.updateNavIndicator();
            this.refreshReveal();
            this.onScroll();
          });
        }
      },
      projectFilter() {
        this.$nextTick(this.refreshReveal);
      },
      activeSection() {
        this.$nextTick(this.updateNavIndicator);
      }
    },

    methods: {
      toggleLang() {
        this.lang = this.otherLang;
        if (PortfolioI18n) PortfolioI18n.storeLang(this.lang);
      },

      openCv() {
        this.cvOpen = true;
        document.documentElement.classList.add('is-modal-open');
        this.$refs.cvDialog.showModal();
      },

      closeCv() {
        this.$refs.cvDialog.close();
      },

      // Cobre Esc, botão de fechar e clique no fundo: o <dialog> sempre dispara `close`.
      onCvClose() {
        this.cvOpen = false;
        document.documentElement.classList.remove('is-modal-open');
      },

      // O clique no ::backdrop chega com o próprio <dialog> como alvo.
      onCvBackdrop(event) {
        if (event.target === this.$refs.cvDialog) this.closeCv();
      },

      denyAccess(project) {
        this.denied = project.id;
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

      // rAF throttling: no máximo uma atualização por frame, por mais eventos de scroll/resize que cheguem.
      onScroll() {
        if (scrollFrame) return;
        scrollFrame = requestAnimationFrame(this.syncScroll);
      },

      syncScroll() {
        scrollFrame = 0;

        // Leituras de layout primeiro...
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const timeline = PortfolioTimeline ? PortfolioTimeline.measureTimeline(this.$refs.centerTimeline) : null;

        // ...e só depois as escritas, sem reflow forçado entre elas.
        this.scrolled = scrollY > 20;
        this.showScrollTop = scrollY > 600;
        this.updateScrollProgress(scrollY, maxScroll);
        if (timeline) {
          PortfolioTimeline.renderTimeline(timeline);
        }
      },

      updateScrollProgress(scrollY, maxScroll) {
        const bar = document.querySelector('.scroll-progress');
        if (!bar) return;
        const pct = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
        bar.style.transform = `scaleX(${pct})`;
      },

      // TransitionGroup do grid de projetos: quem anima a (re)entrada pelo filtro é a transição
      // do grupo, então o card já nasce revelado em vez de esperar o reveal on-scroll.
      onProjectBeforeEnter(el) {
        el.classList.add('in-view');
      },

      // Congela posição e tamanho do card antes do `position: absolute` da saída; sem isso ele
      // salta para o canto do grid. A geometria é lida uma vez, antes do primeiro card sair do
      // fluxo — senão os seguintes seriam medidos já no layout reorganizado.
      onProjectBeforeLeave(el) {
        if (!leaveGeometry) {
          leaveGeometry = new Map();
          Array.from(el.parentNode.children).forEach((card) => {
            // Tamanho pelo valor computado (fracionário); offsetWidth arredonda e poderia mudar a quebra do texto.
            const { width, height } = getComputedStyle(card);
            leaveGeometry.set(card, [card.offsetLeft, card.offsetTop, width, height]);
          });
          queueMicrotask(() => { leaveGeometry = null; });
        }
        const [left, top, width, height] = leaveGeometry.get(el);
        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
        el.style.width = width;
        el.style.height = height;
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
      this.syncScroll();

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
      cancelAnimationFrame(scrollFrame);
      clearTimeout(this.deniedTimer);
      if (this.revealObserver) this.revealObserver.disconnect();
      if (this.scrollSpyObserver) this.scrollSpyObserver.disconnect();
    }
  }).mount('#app');
})();
