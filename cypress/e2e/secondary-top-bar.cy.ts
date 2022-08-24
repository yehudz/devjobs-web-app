describe('Checks for secondary top bar', ()=> {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(350, 540)
  })
  it('should have a secondary top bar container', ()=> {
    cy.get('[data-testid="secondary-top-bar-container"]').should('exist')
  })
  it('should have a search bar', ()=> {
    cy.get('[data-testid="search-bar-container"]').should('exist')
  })
  it('should have a search button', ()=> {
    cy.get('[data-testid="search-button"]').should('exist')
  })
  it('should have filter button', ()=> {
    cy.get('[data-testid="filter-button"]').should('exist')
  })
})