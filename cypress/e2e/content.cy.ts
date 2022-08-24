describe('Content shoudl display to the user', ()=> {
  beforeEach(()=> {
    cy.visit('/jobs/1')
  })
  it('the content page should load', ()=> {
    cy.get('[data-testid="content-container"]').should('exist')
  })
  it('should have a job banner', ()=> {
    cy.get('[data-testid="content-banner"]').should('exist')
  })
  it('should have a job info title', ()=> {
    cy.get('[data-testid="content-info-title"]').should('exist')
  })
  it('should have an apply button at the top', ()=> {
    cy.get('[data-testid="apply-button"]').eq(0).should('exist')
  })
  it('should have a content layout', ()=> {
    cy.get('[data-testid="page-content"]').should('exist')
    it('has title', ()=> {
      cy.get('[data-testid="content-title"]').should('not.be.empty')
    })
    it('has posted at', ()=> {
      cy.get('[data-testid="content-posted-at"]').should('not.be.empty')
    })
    it('has location', ()=> {
      cy.get('[data-testid="content-location"]').should('not.be.empty')
    })
    it('has content body', ()=> {
      cy.get('[data-testid="content-body"]').should('not.be.empty')
    })
    it('has requirements title', ()=> {
      cy.get('[data-testid="content-requirements-title"]').should('not.be.empty')
    })
    it('has requirements body', ()=> {
      cy.get('[data-testid="content-requirements-body"]').should('not.be.empty')
    })
    it('has tasks title', ()=> {
      cy.get('[data-testid="content-tasks-title"]').should('not.be.empty')
    })
    it('has tasks body', ()=> {
      cy.get('[data-testid="content-tasks-body"]').should('not.be.empty')
    })
  })
  it('should have an footer', ()=> {
    cy.get('[data-testid="content-footer"]').should('exist')
    it('should have an apply button', ()=> {
      cy.get('[data-testid="apply-button"]').eq(1).should('exist')
    })
  })
})