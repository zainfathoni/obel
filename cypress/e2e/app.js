describe('create-react-app default app', () => {
  it('shows the default app', () => {
    cy.visit('/')
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)

    cy.getByText(/learn react/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
  })
})
