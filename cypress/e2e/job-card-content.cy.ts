describe('Should display correct content in job post card', ()=> {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(350, 540)
  })

  it('should have job post card', ()=> {
    cy.get('[data-testid="job-card-container"]').should('exist')
  })
  it('should have an icon', ()=> {
    cy.get('[data-testid="job-card-icon-container"]')
    .find('img').should('be.visible')
    cy.get('[data-testid="job-card-icon-container"]')
    .should('have.css', 'background-color')
  })
  it('has posted at', ()=> {
    cy.get('[data-testid="posted-at"]')
    .invoke('text').should('not.be.empty')
  })
  it('has contract type', ()=> {
    cy.get('[data-testid="contract-type"]')
    .invoke('text').should('not.be.empty')
  })
  it('has position title', ()=> {
    cy.get('[data-testid="position-title"]')
    .invoke('text').should('not.be.empty')
  })
  it('has company name', ()=> {
    cy.get('[data-testid="company-name"]')
    .invoke('text').should('not.be.empty')
  })
  it('has location', ()=> {
    cy.get('[data-testid="location"]')
    .invoke('text').should('not.be.empty')
  })
})