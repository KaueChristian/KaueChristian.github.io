# Portfólio — Kauê Christian

Portfólio pessoal desenvolvido do zero em HTML, CSS e JavaScript puro, sem frameworks
nem etapa de build. Apresenta minha trajetória, stack e projetos.

🔗 **[Ver online](#)** _(atualizar após o deploy)_

## Destaques técnicos

- **Tema claro/escuro** com persistência em `localStorage`, respeitando a preferência
  do sistema (`prefers-color-scheme`) e sem flash de tema errado no carregamento
- **Scroll horizontal com pin** na seção de projetos: a seção trava e o scroll vertical
  é convertido em movimento horizontal, implementado em JavaScript puro (sem GSAP)
- **Carrossel infinito** de tecnologias, com destaque do item sob o cursor
- **Animações on-scroll** via `IntersectionObserver`: barras de habilidade e timeline
  animadas ao entrar na viewport
- **Responsivo**, com o efeito de pin desativado no mobile em favor de um carrossel
  por toque com `scroll-snap`
- **Acessibilidade**: respeita `prefers-reduced-motion`, desativando animações
  para quem prefere menos movimento

## Stack

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 semântico |
| Estilo | CSS3 (Custom Properties, Grid, Flexbox, `position: sticky`) |
| Comportamento | JavaScript (ES6+, sem dependências) |
| Tipografia | Outfit (Google Fonts) |
| Ícones | SVG inline |

## Rodando localmente

Como não há etapa de build, basta servir os arquivos estáticos:

```bash
python -m http.server 5501
```

Depois acesse `http://localhost:5501`.

> Abrir o `index.html` direto pelo navegador (`file://`) também funciona, mas usar um
> servidor local reproduz melhor o comportamento em produção.

## Estrutura

```
portfolio/
├── index.html      # Página única, dividida em seções
├── css/
│   └── style.css   # Estilos e temas via CSS Custom Properties
├── js/
│   └── script.js   # Tema, carrossel, scroll horizontal e animações
└── assets/         # Imagens e mídias
```

## Contato

- **Email** — kauefirmo410@gmail.com
- **LinkedIn** — [Kauê Firmo](https://www.linkedin.com/in/kau%C3%AA-firmo-593b9b322/)
- **GitHub** — [@KaueChristian](https://github.com/KaueChristian)
