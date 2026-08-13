# Portfólio — Kauê Christian

Portfólio pessoal em HTML, CSS e Vue 3, sem etapa de build. Apresenta minha
trajetória, stack e projetos.

🔗 **[kauechristian.github.io](https://kauechristian.github.io)**

## Destaques técnicos

- **Vue 3 sem bundler**, usando o build global via CDN e template no próprio HTML:
  as listas (experiência, projetos e habilidades) são renderizadas a partir de
  `js/data.js`, então editar conteúdo não exige mexer em marcação
- **Tema claro/escuro** com persistência em `localStorage`, respeitando a preferência
  do sistema (`prefers-color-scheme`) e sem flash de tema errado no carregamento
- **Navbar em pílula flutuante** com *scroll spy*: o link da seção visível é destacado
  automaticamente via `IntersectionObserver`
- **Cores de marca adaptativas**: cada tecnologia carrega sua cor original e o CSS
  ajusta a mistura com `color-mix()` por tema, mantendo contraste AA nos dois modos
- **Animações on-scroll** via `IntersectionObserver`, com *reveal* progressivo das
  seções e da timeline
- **Responsivo**, do desktop ao mobile, com menu em painel suspenso
- **Acessibilidade**: respeita `prefers-reduced-motion`, desativando animações
  para quem prefere menos movimento

## Stack

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 semântico |
| Estilo | CSS3 (Custom Properties, Grid, Flexbox, `color-mix()`) |
| Comportamento | Vue 3 (build global, sem bundler) |
| Tipografia | Outfit (Google Fonts) |
| Ícones | SVG inline |

## Rodando localmente

Como não há etapa de build, basta servir os arquivos estáticos:

```bash
python -m http.server 5501
```

Depois acesse `http://localhost:5501`.

> O Vue é carregado via CDN, então é preciso estar online no primeiro carregamento.
> Servir por HTTP (em vez de abrir o `index.html` via `file://`) reproduz melhor o
> comportamento em produção.

## Estrutura

```
portfolio/
├── index.html      # Página única — marcação e template do Vue
├── css/
│   └── style.css   # Estilos e temas via CSS Custom Properties
├── js/
│   ├── data.js     # Conteúdo: experiência, projetos, habilidades e ícones
│   └── app.js      # App Vue: tema, menu, scroll spy e animações
└── assets/         # Imagens e mídias
```

Para atualizar o conteúdo do site (adicionar um projeto, uma tecnologia ou um novo
cargo), basta editar `js/data.js`.

## Contato

- **Email** — kauefirmo410@gmail.com
- **LinkedIn** — [Kauê Firmo](https://www.linkedin.com/in/kau%C3%AA-firmo-593b9b322/)
- **GitHub** — [@KaueChristian](https://github.com/KaueChristian)
