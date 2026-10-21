// Este é o mesmo teste exibido no hero do portfólio.
// A única diferença é o cy.visit('/'), que usa o baseUrl do cypress.config.js
// para rodar tanto no servidor local quanto contra o site publicado.
describe('gabriella além do currículo', () => {
  it('mostra mais do que cabe em um CV', () => {
    cy.visit('/')

    cy.get('[data-testid="gabriella"]')
      .should('be.visible')
      .and('contain.text', 'Analista de QA')

    cy.get('[data-testid="qa-vision"]')
      .should('contain.text', 'Contexto')
      .and('contain.text', 'Risco')
      .and('contain.text', 'Impacto')

    cy.get('[data-testid="trajectory"]')
      .should('not.be.empty')

    cy.contains('Além do QA').click()

    cy.get('[data-testid="beyond-cv"]')
      .should('be.visible')

    cy.contains('h2', 'vamos começar uma?')
      .should('exist')
  })
})
