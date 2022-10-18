describe('My First Test Case', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })
    it('Click type text', () => {
        cy.contains('type').click()
    })
    it('Verify url should have include /command/actions', () => {
        cy.url().should('include','/commands/actions')
    })
    it('Input email', () => {
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value','fake@email.com')
    })
  })