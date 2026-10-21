describe('qualidade do próprio portfólio', () => {
  beforeEach(() => cy.visit('/'))

  it('mantém o snippet do hero coerente com a página nos dois idiomas', () => {
    cy.get('#code-role').should('have.text', "'Analista de QA'")
    cy.get('#code-talk').should('have.text', "'vamos começar uma?'")

    cy.get('.lang-btn[data-lang="en"]').click().should('have.attr', 'aria-pressed', 'true')
    cy.get('html').should('have.attr', 'lang', 'en')
    cy.get('[data-testid="gabriella"]').should('contain.text', 'QA Analyst')
    cy.get('#code-role').should('have.text', "'QA Analyst'")
    cy.contains('h2', 'shall we start one?').should('exist')
    cy.get('#code-talk').should('have.text', "'shall we start one?'")
  })

  it('leva cada link do menu a uma seção existente', () => {
    cy.get('#nav a[href^="#"]').each($a => {
      cy.get($a.attr('href')).should('exist')
    })
    cy.get('#nav a[href="#contato"]').should('exist')
  })

  it('serve os arquivos locais linkados na página', () => {
    const urls = new Set()
    cy.get('a[href^="assets/"], img[src^="assets/"], link[href^="assets/"]').each($el => {
      urls.add($el.attr('href') || $el.attr('src'))
    }).then(() => {
      urls.forEach(url => cy.request(url).its('status').should('eq', 200))
    })
  })

  it('tem abas da visão de QA acessíveis por teclado', () => {
    cy.get('[role="tablist"].vision-tabs [role="tab"]').should('have.length', 6)
    cy.get('#vision-tab-contexto').should('have.attr', 'aria-selected', 'true').focus()
    cy.focused().trigger('keydown', { key: 'ArrowRight' })
    cy.get('#vision-tab-risco')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')
    cy.get('#visionPanel').should('have.attr', 'aria-labelledby', 'vision-tab-risco')
    cy.get('#visionLabel').should('have.text', 'Risco')
    cy.get('#vision-tab-contexto').should('have.attr', 'tabindex', '-1')
  })

  it('expõe o estado dos cases expansíveis', () => {
    cy.get('#investigacaoCase .full-case-head')
      .should('have.attr', 'aria-expanded', 'false')
      .focus()
      .type('{enter}')
      .should('have.attr', 'aria-expanded', 'true')
  })

  it('tem metadados para compartilhamento', () => {
    cy.get('meta[property="og:title"]').should('have.attr', 'content').and('not.be.empty')
    cy.get('meta[property="og:image"]').should('have.attr', 'content').and('match', /og-image\.png$/)
    cy.get('link[rel="icon"]').should('have.attr', 'href', 'assets/favicon.svg')
  })

  it('reflete o currículo: QAnalisa, ferramentas por empresa e competências', () => {
    cy.get('.qanalisa')
      .should('contain.text', 'QAnalisa')
      .and('contain.text', '72%')
      .and('contain.text', 'redução estimada')
    cy.contains('.job', 'VR Software')
      .should('contain.text', 'Playwright')
      .and('contain.text', 'Fiscal/Tributária')
      .and('not.contain.text', 'Cypress')
    cy.contains('.job', 'Aliare').should('contain.text', 'Analista de Testes Automatizados').and('contain.text', 'CI/CD')
    cy.contains('.job', 'AdGrowth').should('contain.text', 'Apache JMeter').and('contain.text', 'Lighthouse')
    cy.get('#competencias .skill-row').should('have.length', 5)
    cy.get('#competencias').should('contain.text', 'Inglês · intermediário (B2)')
    cy.get('#nav a[href="#competencias"]').should('exist')
  })

  it('abre o menu no celular', () => {
    cy.viewport(390, 844)
    cy.get('#nav').should('not.be.visible')
    cy.get('#menu').click().should('have.attr', 'aria-expanded', 'true')
    cy.get('#nav a[href="#contato"]').should('be.visible').click()
    cy.get('#menu').should('have.attr', 'aria-expanded', 'false')
  })
})
