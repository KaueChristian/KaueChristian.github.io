(function (global) {
  'use strict';

  const data = global.PORTFOLIO_DATA;
  const i18n = global.PortfolioI18n;
  const root = document.getElementById('cv');
  if (!data || !i18n || !root) return;

  const lang = i18n.detectLang();
  const { t, person, experience, projects, skillGroups } = data.get(lang);
  const cv = t.cv;

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[ch]);
  }

  function link(item) {
    return `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)}</a>`;
  }

  function section(title, body) {
    return `<section class="cv__section"><h2>${esc(title)}</h2>${body}</section>`;
  }

  function renderExperience() {
    const company = experience[0];
    const roles = company.roles.map((role) => `
      <article class="cv__entry">
        <div class="cv__entry-head">
          <h3>${esc(role.title)}</h3>
          <span class="cv__when">${esc(role.period)} · ${esc(role.duration)}</span>
        </div>
        <p class="cv__meta">${esc(company.name)} · ${esc(role.type)} · ${esc(role.place)}</p>
        <p>${esc(role.desc)}</p>
      </article>`).join('');

    const others = cv.otherExperience.map((item) => `
      <article class="cv__entry">
        <div class="cv__entry-head"><h3>${esc(item.title)}</h3></div>
        <p class="cv__meta">${esc(item.company)}</p>
        <p>${esc(item.desc)}</p>
      </article>`).join('');

    return section(cv.sections.experience, roles + others);
  }

  function renderProjects() {
    const items = projects.map((project) => {
      const repo = project.locked ? '' : `<a class="cv__url" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer">${esc(project.url.replace(/^https?:\/\//, ''))}</a>`;
      return `
      <article class="cv__entry">
        <div class="cv__entry-head">
          <h3>${esc(project.title)}</h3>
          ${repo}
        </div>
        <p>${esc(project.desc)}</p>
        <p class="cv__tags">${project.tags.map(esc).join(' · ')}</p>
      </article>`;
    }).join('');
    return section(cv.sections.projects, items);
  }

  function renderSkills() {
    const rows = skillGroups.map((group) => `
      <div class="cv__skill-row">
        <dt>${esc(group.title)}</dt>
        <dd>${group.items.map((item) => esc(item.name)).join(', ')}</dd>
      </div>`).join('');
    return section(cv.sections.skills, `<dl class="cv__skills">${rows}</dl>`);
  }

  function renderList(items) {
    return `<ul class="cv__list">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  }

  function render() {
    document.documentElement.lang = t.htmlLang;
    document.title = `${t.cvModal.title} — ${person.name}`;

    const contact = [
      `<a href="mailto:${esc(person.email)}">${esc(person.email)}</a>`,
      link(person.linkedin),
      link(person.github),
      link(person.site),
      esc(cv.location)
    ].map((item) => `<li>${item}</li>`).join('');

    const languages = t.education.languages.map((item) => `${item.name} (${item.level})`);

    root.innerHTML = `
      <header class="cv__header">
        <h1>${esc(person.name)}</h1>
        <p class="cv__headline">${esc(cv.headline)}</p>
        <ul class="cv__contact">${contact}</ul>
        <p class="cv__availability">${esc(cv.availability)}</p>
      </header>
      ${section(cv.sections.objective, `<p>${esc(cv.objective)}</p>`)}
      ${renderExperience()}
      ${renderProjects()}
      ${renderSkills()}
      <div class="cv__columns">
        ${section(cv.sections.education, `<p><strong>${esc(cv.degreeLine)}</strong></p><p>${esc(cv.highSchoolLine)}</p>`)}
        ${section(cv.sections.languages, renderList(languages))}
      </div>
      <div class="cv__columns">
        ${section(cv.sections.areas, renderList(cv.areas))}
        ${section(cv.sections.soft, renderList(cv.soft))}
      </div>`;
  }

  if (new URLSearchParams(global.location.search).get('embed') === '1') {
    document.documentElement.classList.add('is-embed');
  }
  render();
})(window);
