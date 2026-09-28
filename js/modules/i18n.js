(function (global) {
  'use strict';

  const SUPPORTED = ['pt', 'en'];
  const FALLBACK = 'en';
  const STORAGE_KEY = 'lang';

  function readStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  // Ordem de prioridade: ?lang= na URL (link compartilhável) > escolha manual salva >
  // primeiro idioma do navegador que temos (pt ou en) > inglês, para quem vem de fora.
  function detectLang() {
    const fromUrl = new URLSearchParams(global.location.search).get('lang');
    if (SUPPORTED.includes(fromUrl)) return fromUrl;

    const stored = readStored();
    if (SUPPORTED.includes(stored)) return stored;

    const preferred = global.navigator.languages && global.navigator.languages.length
      ? global.navigator.languages
      : [global.navigator.language || ''];
    const match = preferred
      .map((tag) => String(tag).slice(0, 2).toLowerCase())
      .find((code) => SUPPORTED.includes(code));
    return match || FALLBACK;
  }

  // Só a escolha manual é persistida: quem nunca clicou continua seguindo o navegador.
  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* armazenamento indisponível: a escolha vale só para esta visita */
    }
    // Um ?lang= na URL venceria a escolha ao recarregar; mantém os dois em sincronia.
    const url = new URL(global.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      global.history.replaceState(null, '', url);
    }
  }

  function applyDocumentLang(copy) {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', copy.meta.description);
  }

  global.PortfolioI18n = {
    supported: SUPPORTED,
    detectLang,
    storeLang,
    applyDocumentLang
  };
})(window);
