(function (global) {
  'use strict';

  function updateTimelineScroll(container) {
    const timeline = container || document.querySelector('.center-timeline');
    if (!timeline) return;

    const lineTrack = timeline.querySelector('.center-timeline__line');
    const fillEl = timeline.querySelector('.center-timeline__fill');
    const arrowEl = timeline.querySelector('.center-timeline__arrow');
    const nodes = timeline.querySelectorAll('.timeline-node');
    if (!lineTrack || !fillEl) return;

    const lineRect = lineTrack.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.62;

    const lineTop = lineRect.top;
    const lineHeight = lineRect.height;

    let progress = (triggerPoint - lineTop) / lineHeight;
    progress = Math.max(0, Math.min(1, progress));

    if (progress > 0.005) {
      timeline.classList.add('has-scrolled');
    } else {
      timeline.classList.remove('has-scrolled');
    }

    fillEl.style.height = `${(progress * 100).toFixed(1)}%`;

    if (arrowEl) {
      if (progress >= 0.96) {
        arrowEl.classList.add('is-active');
      } else {
        arrowEl.classList.remove('is-active');
      }
    }

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
  }

  global.PortfolioTimeline = {
    updateTimelineScroll
  };
})(window);
