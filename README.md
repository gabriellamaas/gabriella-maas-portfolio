# Gabriella Maas — QA Portfolio

Portfólio profissional bilíngue (PT/EN) com foco em **Quality Assurance, Qualidade de Produto, análise de impacto, testes de API e automação**.

## Tecnologias

- HTML
- CSS
- JavaScript
- Cypress

## Funcionalidades

- Português e inglês
- Dark mode
- Layout responsivo
- Animações e interações em JavaScript
- Projetos e experiências em Quality Assurance
- Abas acessíveis por teclado e contraste WCAG AA
- Metadados Open Graph para compartilhamento

## Estrutura

- `index.html`
- `styles.css`
- `app.js`
- `i18n.js`
- `assets/`

## Rodando localmente

O site não tem build. Basta servir a pasta:

```bash
python3 -m http.server 8080
```

E abrir http://localhost:8080.

## Testes E2E

O teste exibido no hero do portfólio existe de verdade em `cypress/e2e/gabriella.cy.js`.
Os demais checks do site (idiomas, links, arquivos, abas acessíveis, menu mobile e metadados)
ficam em `cypress/e2e/qualidade-do-site.cy.js`.

```bash
npm install
python3 -m http.server 8080   # em outro terminal
npm run test:e2e              # ou npm run cy:open para o modo interativo
```

Para testar o site publicado em vez do local:

```bash
CYPRESS_BASE_URL=https://gabriellamaas.github.io/gabriella-maas-portfolio/ npm run test:e2e
```

Os testes rodam no GitHub Actions a cada push e pull request (`.github/workflows/e2e.yml`).

[![e2e](https://github.com/gabriellamaas/gabriella-maas-portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/gabriellamaas/gabriella-maas-portfolio/actions/workflows/e2e.yml)

## Deploy

Projeto estático publicado via **GitHub Pages**. As dependências do `package.json`
são usadas só pelos testes; o site publicado não depende delas.
