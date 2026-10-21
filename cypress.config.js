const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Servidor local por padrão; para testar o site publicado:
    // CYPRESS_BASE_URL=https://gabriellamaas.github.io/gabriella-maas-portfolio/ npm run test:e2e
    baseUrl: 'http://localhost:8080',
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    supportFile: 'cypress/support/e2e.js'
  }
});
