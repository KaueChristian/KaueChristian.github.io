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
    // Sem cursor (touch) não há holofote para acompanhar
    if (!window.matchMedia('(hover: hover)').matches) return;

    // Rastreia a posição do cursor nos blocos com vidro líquido. O evento só guarda o último
    // ponto; a busca do card e a escrita das variáveis rodam no máximo uma vez por frame,
    // mesmo com mouses de 500/1000 Hz.
    let frame = 0;
    let target = null;
    let clientX = 0;
    let clientY = 0;

    const flush = () => {
      frame = 0;
      const card = target.closest ? target.closest('.glass-panel') : null;
      if (card) {
        updateCardSpotlight(card, clientX, clientY);
      }
    };

    document.addEventListener('pointermove', (e) => {
      target = e.target;
      clientX = e.clientX;
      clientY = e.clientY;
      if (!frame) frame = requestAnimationFrame(flush);
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
