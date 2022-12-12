describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('restaurant'), {
      fixture: 'restaurantData.json'
    })
    cy.intercept('GET', Cypress.env('market'), {
      fixture: 'marketData.json'
    })
    cy.intercept('GET', Cypress.env('brewery'), {
      fixture: 'breweryData.json'
    })
    cy.visit('/')
  })

it('has a navbar with various features and functionality', () => {
  cy.get('[data-cy="navbar"]')
  .within(() => {
    cy.get('[data-cy="logo"]').should('be.visible')
    cy.get('[data-cy="search"]').should('be.visible')
    .type('hello there').should('have.value', 'hello there')
    cy.get('[data-cy="market-radio"]').check()
    cy.get('[data-cy="brewery-radio"]').check()
    cy.get('[data-cy="restaurant-radio"]').check()
    cy.get('[data-cy="submit"]').should('be.visible')
    cy.get('[data-cy="greeting"]').contains('Hello, Friend!')
    cy.get('[data-cy="menu"]').contains('Home')
    cy.get('[data-cy="menu"]').contains('Login')
    cy.get('[data-cy="menu"]').contains('Favorites')
  })
})

it('has an overview blurb', () => {
  cy.get('[data-cy="overview"]')
  .contains("Eat local was designed to exclusively support local businesses. Unlike larger companies, small businesses do not have the resources or the capital to survive without sales and support. Approximately 1 out of 5 small businesses close their doors permanently within their first year of business. The odds of a small business failing increase more each year they are open-with a failure rate of 66% after 10 years of business. Although running a small business is very difficult, it is near impossible without support. To continue to have diverse options to eat, drink, and shop, there needs to be an effort made to support these businesses or your favorite neighborhood spots may not be around much longer. Please eat local!")
})

it('has featured local businesses', () => {
  
})

it('has a footer with team info', () => {
  
})

// Test for overview

/* Test for Featured Local Businesses
  - Check for "Featured Local Businesses:" text 
  - Need to mock data the businesses
  - Verify number of businesses
  - Verify text in containers
  - Verify images
*/

/* Test footer
- Test for teams
- Test for names
- Test for where links go?
*/ 

})