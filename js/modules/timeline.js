(function (global) {
  'use strict';

  // Fase de leitura: coleta toda a geometria de uma vez, sem escrever nada no DOM
  // (evita o reflow forçado de intercalar getBoundingClientRect com escritas).
  function measureTimeline(container) {
    const timeline = container || document.querySelector('.center-timeline');
    if (!timeline) return null;

    const lineTrack = timeline.querySelector('.center-timeline__line');
    const fillEl = timeline.querySelector('.center-timeline__fill');
    const arrowEl = timeline.querySelector('.center-timeline__arrow');
    if (!lineTrack || !fillEl) return null;

    const lineRect = lineTrack.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.62;

    let progress = (triggerPoint - lineRect.top) / lineRect.height;
    progress = Math.max(0, Math.min(1, progress));

    const nodes = [];
    timeline.querySelectorAll('.timeline-node').forEach((node) => {
      const dotCenter = node.querySelector('.timeline-node__dot-center');
      if (!dotCenter) return;
      nodes.push({ node, active: dotCenter.getBoundingClientRect().top <= triggerPoint + 6 });
    });

    return {
      timeline,
      lineTrack,
      fillEl,
      arrowEl,
      progress,
      fillY: progress * lineRect.height,
      nodes
    };
  }

  // Fase de escrita: só transform, custom property e classes — nada que precise de layout.
  function renderTimeline(state) {
    if (!state) return;
    const { timeline, lineTrack, fillEl, arrowEl, progress, fillY, nodes } = state;

    timeline.classList.toggle('has-scrolled', progress > 0.005);
    fillEl.style.transform = `scaleY(${progress.toFixed(4)})`;
    lineTrack.style.setProperty('--timeline-fill-y', `${fillY.toFixed(1)}px`);

    if (arrowEl) {
      arrowEl.classList.toggle('is-active', progress >= 0.96);
    }

    nodes.forEach(({ node, active }) => {
      node.classList.toggle('is-active', active);
    });
  }

  function updateTimelineScroll(container) {
    renderTimeline(measureTimeline(container));
  }

  global.PortfolioTimeline = {
    measureTimeline,
    renderTimeline,
    updateTimelineScroll
  };
})(window);
