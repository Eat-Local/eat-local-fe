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
  })

it('passes', () => {
  cy.visit('https://example.cypress.io')
})
/* Test banner contents 
  - Test for logo
  - Test for search bar
  - Test for radio buttons
  - Test for search button
  - Test for welcome message (no user login)
  - Test for "Home | Login | Favorites"
*/ 

// Test Typing in search bar

// Test radio buttons

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