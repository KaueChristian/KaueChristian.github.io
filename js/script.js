// Alternância de tema (claro/escuro)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const root = document.documentElement;
  const syncPressed = () => {
    themeToggle.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
  };
  syncPressed();

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncPressed();
  });
}

// Carrossel de tecnologias (ícones em loop infinito)
const skills = [
  {
    name: 'Python',
    icon: `<svg viewBox="0 0 32 32"><path d="M16 4c-6 0-6 3-6 3v3h6v1H7s-4 0-4 6 4 6 4 6h2v-3s0-3 3-3h6s3 0 3-3V7s0-3-6-3z" fill="#3776AB"/><path d="M16 28c6 0 6-3 6-3v-3h-6v-1h9s4 0 4-6-4-6-4-6h-2v3s0 3-3 3h-6s-3 0-3 3v6s0 3 6 3z" fill="#FFD43B"/><circle cx="12.2" cy="8.2" r="1" fill="#fff"/><circle cx="19.8" cy="23.8" r="1" fill="#fff"/></svg>`
  },
  {
    name: 'Vue.js',
    icon: `<svg viewBox="0 0 32 32"><path d="M4 6h5.2L16 17.5 22.8 6H28L16 26 4 6z" fill="#41B883"/><path d="M9.2 6h4.4L16 10l2.4-4h4.4L16 18 9.2 6z" fill="#35495E"/></svg>`
  },
  {
    name: 'TypeScript',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#3178C6"/><text x="16" y="21.5" font-size="12" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif">TS</text></svg>`
  },
  {
    name: 'JavaScript',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#F7DF1E"/><text x="16" y="21.5" font-size="12" font-weight="700" text-anchor="middle" fill="#1a1a1a" font-family="Arial, sans-serif">JS</text></svg>`
  },
  {
    name: 'Golang',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#00ADD8"/><text x="16" y="21.5" font-size="11" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif">Go</text></svg>`
  },
  {
    name: 'Delphi',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#EE1F35"/><text x="16" y="22" font-size="15" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif">D</text></svg>`
  },
  {
    name: 'Java',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#E76F00"/><path d="M13 21.5c-2.2.6-1.3 1.4.3 1.7 3.4.5 7.1.2 8.9-.7-1.4.6-3.2 1-5.2 1.2-3.7.3-7.6-.2-7.9-1.3-.2-.6.9-1.1 3.9-.9Z" fill="#fff"/><path d="M14.4 17.8c-2.5.7-.9 1.4.4 1.6 2.6.4 5.4.2 6.9-.5-1.1.5-2.5.8-4.1 1-2.9.2-5.6-.1-5.8-1 0-.5.9-1 2.6-1.1Z" fill="#fff"/><path d="M18.2 8c1.9 2.2-.5 4.2-.5 4.2s2.4-1.2 1.3-2.8c-1-1.4-1.8-2.1.2-3.4 0 0-2.9.7-1 2Z" fill="#fff"/><path d="M12.5 14.6c-1.9.5-.6 1.1.3 1.3 1.9.3 4 .1 5.1-.4-.8.3-1.9.6-3 .7-2.1.2-4.2 0-4.3-.7 0-.4.7-.8 1.9-.9Z" fill="#fff"/></svg>`
  },
  {
    name: 'HTML5',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#E44D26"/><path d="M10 10l-4 6 4 6M22 10l4 6-4 6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 9l-4 14" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    name: 'CSS3',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#2965F1"/><path d="M9 9h14l-1.3 14L16 25l-5.7-2L9 9z" fill="#fff" opacity="0.92"/><path d="M16 11v12.2l4.4-1.5.9-9.8H16z" fill="#BFD2FF"/></svg>`
  },
  {
    name: 'Flask',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#111"/><path d="M14 6h4v5.4l4.6 9.2A3.4 3.4 0 0 1 19.6 26h-7.2a3.4 3.4 0 0 1-3-4.9l4.6-9.2V6Z" stroke="#fff" stroke-width="1.7" fill="none" stroke-linejoin="round"/><path d="M12.6 6h6.8" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>`
  },
  {
    name: 'SQL',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#336791"/><ellipse cx="16" cy="10" rx="7" ry="2.8" fill="#fff" opacity="0.95"/><path d="M9 10v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V10" stroke="#fff" stroke-width="1.8" fill="none"/><path d="M9 16c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" stroke="#fff" stroke-width="1.8" fill="none"/></svg>`
  },
  {
    name: 'Git',
    icon: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#F05033"/><circle cx="11" cy="10" r="2.3" fill="#fff"/><circle cx="11" cy="22" r="2.3" fill="#fff"/><circle cx="21" cy="16" r="2.3" fill="#fff"/><path d="M11 12.3V19.7M13.1 16H18.7" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`
  }
];

const skillsTrack = document.getElementById('skillsTrack');
if (skillsTrack) {
  const orbHTML = skills.map(skill => `
    <div class="skill-orb" role="listitem">
      <span class="skill-orb__icon">${skill.icon}</span>
      <span class="skill-orb__label">${skill.name}</span>
    </div>
  `).join('');
  // Duplicado para permitir o loop contínuo sem salto visual
  skillsTrack.innerHTML = orbHTML + orbHTML;
}

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar: estado "scrolled"
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

function onScroll() {
  const scrolled = window.scrollY > 20;
  navbar.classList.toggle('scrolled', scrolled);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('menu-open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    navToggle.classList.remove('open');
  });
});

// Botão voltar ao topo
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Barras de habilidade animadas
const bars = document.querySelectorAll('.bar');
const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const bar = entry.target;
    const fill = bar.querySelector('.bar__fill');
    const valueEl = bar.querySelector('.bar__value');
    const percent = Number(fill.dataset.percent);

    fill.style.width = percent + '%';

    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      valueEl.textContent = Math.round(eased * percent) + '%';
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    barsObserver.unobserve(bar);
  });
}, { threshold: 0.4 });

bars.forEach(bar => barsObserver.observe(bar));

// Projetos: trava o scroll vertical e desliza a trilha na horizontal
(function () {
  const pin = document.getElementById('projectsPin');
  const sticky = pin ? pin.querySelector('.projects__sticky') : null;
  const track = document.getElementById('projectsTrack');
  const progressFill = document.getElementById('projectsProgressFill');
  if (!pin || !sticky || !track) return;

  const desktopQuery = window.matchMedia('(min-width: 901px)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  let scrollDistance = 0;
  let ticking = false;

  function isPinActive() {
    return desktopQuery.matches && !reducedMotionQuery.matches;
  }

  function setup() {
    if (!isPinActive()) {
      pin.style.height = 'auto';
      track.style.transform = 'none';
      if (progressFill) progressFill.style.width = '0%';
      return;
    }
    scrollDistance = Math.max(track.scrollWidth - sticky.clientWidth, 0);
    pin.style.height = window.innerHeight + scrollDistance + 'px';
  }

  function update() {
    ticking = false;
    if (!isPinActive() || scrollDistance <= 0) return;

    const total = pin.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    const scrolledPast = -pin.getBoundingClientRect().top;
    const progress = Math.min(Math.max(scrolledPast / total, 0), 1);

    track.style.transform = `translateX(-${progress * scrollDistance}px)`;
    if (progressFill) progressFill.style.width = progress * 100 + '%';
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function recalc() { setup(); update(); }

  recalc();

  // Recalcula quando fontes/recursos terminam de carregar, evitando medidas erradas
  window.addEventListener('load', recalc);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recalc);

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', recalc);
  desktopQuery.addEventListener('change', recalc);
  reducedMotionQuery.addEventListener('change', recalc);
})();
