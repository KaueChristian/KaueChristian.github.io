(function (global) {
  'use strict';

  function updateCardSpotlight(card, clientX, clientY) {
    const rect = card.getBoundingClientRect();
    const x = Math.round(clientX - rect.left);
    const y = Math.round(clientY - rect.top);
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  function initSpotlight() {
    // Rastreia a posição do cursor em tempo real nos blocos com vidro líquido
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest ? e.target.closest('.glass-panel') : null;
      if (card) {
        updateCardSpotlight(card, e.clientX, e.clientY);
      }
    }, { passive: true });

    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest ? e.target.closest('.glass-panel') : null;
      if (card) {
        updateCardSpotlight(card, e.clientX, e.clientY);
      }
    }, { passive: true });
  }

  function initTilt() {
    // Leve inclinação 3D do idcard, seguindo o cursor
    const card = document.querySelector('.idcard');
    if (!card || !window.matchMedia('(hover: hover)').matches) return;
    const strength = 6;

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--tilt-x', `${(-py * strength).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(px * strength).toFixed(2)}deg`);
    }, { passive: true });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    }, { passive: true });
  }

  global.PortfolioSpotlight = {
    initSpotlight,
    initTilt
  };
})(window);
