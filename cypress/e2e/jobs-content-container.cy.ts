describe('Shows the content of job posting in cards', ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('should have a content container for job cards', ()=> {
    cy.get('[data-testid="postings-container"]').should('exist')
  })
})