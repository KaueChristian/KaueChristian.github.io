(function (global) {
  'use strict';

  function createRevealObserver(threshold = 0.12) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold });

    return observer;
  }

  function refreshReveal(observer) {
    if (!observer) return;
    document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => {
      observer.observe(el);
    });
  }

  global.PortfolioReveal = {
    createRevealObserver,
    refreshReveal
  };
})(window);
