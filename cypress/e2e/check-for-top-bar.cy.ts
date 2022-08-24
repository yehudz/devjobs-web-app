describe('Check for top bar', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should have a top bar container', ()=> {
    cy.get('[data-testid="topbar-container"]').should('exist')
  })
  it('should have a logo', ()=> {
    cy.get('[data-testid="main-logo"').should('exist')
  })
  it('should have a theme toggle container', ()=> {
    cy.get('[data-testid="toggle-theme-container"]').should('exist')
  })
})

export {}