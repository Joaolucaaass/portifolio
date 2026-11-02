# Portfólio — João Lucas Pardinho dos Santos

React 18, Vite 6, React Router 6 e Framer Motion. CSS único em `src/styles/main.css`.
Conteúdo centralizado em `src/data/content.js`.

## Rodar

```bash
npm install
npm run dev
```

Deploy na Vercel: `vercel.json` já tem o rewrite de SPA.

## Design

Inspirado em apple.com: preto e cinza claro alternados, tipografia grande com tracking negativo,
nav translúcida, tiles arredondados de 28px e botões em pílula.
Fonte: SF Pro nos dispositivos Apple, Inter nos demais.

## Animações (Framer Motion)

- `ScrollStage`: frame do projeto que assenta (rotação, escala) conforme entra na tela
- `Statement`: frase que acende palavra por palavra no scroll
- `ProjectCard`: screenshot sobe dentro do tile conforme o scroll
- entrada orquestrada do hero, menu mobile e botão de copiar e-mail
- `prefers-reduced-motion` respeitado
