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

  global.PortfolioSpotlight = {
    initSpotlight
  };
})(window);
