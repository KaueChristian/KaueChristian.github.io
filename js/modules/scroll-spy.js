(function (global) {
  'use strict';

  function createScrollSpy(navItems, onActiveChange) {
    if (!Array.isArray(navItems) || typeof onActiveChange !== 'function') return null;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        onActiveChange(visible.target.id);
      }
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
    return observer;
  }

  global.PortfolioScrollSpy = {
    createScrollSpy
  };
})(window);
