describe('favorites page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has a searchbar', () => {
    cy.get('.input')
  })
})