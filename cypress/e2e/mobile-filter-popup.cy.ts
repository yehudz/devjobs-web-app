describe('Mobile filter pop up', ()=> {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(350, 540)
  })
  it('should have a filter button', ()=> {
    cy.get('[data-testid="filter-button"]').should('exist')
  })
  it('should open the pop up', ()=> {
    cy.get('[data-testid="filter-button"]').click()
    cy.get('[data-testid="filter-popup-container"]').should('exist')
  })
  it('should have filter mobile content', ()=> {
    cy.get('[data-testid="filter-button"]').click()
    cy.get('[data-testid="filter-popup-content"]').should('exist')
  })
  it('should have filter by location', ()=> {
    cy.get('[data-testid="filter-button"]').click()
    cy.get('[data-testid="filter-location"]').should('exist')
  })
  it('should have filter by full time contract', ()=> {
    cy.get('[data-testid="filter-button"]').click()
    cy.get('[data-testid="filter-by-contract"]').should('exist')
  })
  it('should have seach button', ()=> {
    cy.get('[data-testid="filter-button"]').click()
    cy.get('[data-testid="mobile-search-button"]').should('exist')
  })
})

export {}