describe('Results Page', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('restaurant'), {
      fixture: 'RestaurantData.json'
    })
    cy.intercept('GET', Cypress.env('market'), {
      fixture: 'MarketData.json'
    })
    cy.intercept('GET', Cypress.env('brewery'), {
      fixture: 'BreweryData.json'
    })
    cy.visit('/')
  })

  describe('empty spec', () => {
    it('passes', () => {
      cy.visit('/')
    })
  })

/* Search Restaurant
- Enter Boulder in seach bar
- (Restaurant Default)
- Click search button
- Verify results appear
- Click "Home" link
*/ 

/* Search Market
- Enter Boulder in seach bar
- Select Market Radio
- Click search button
- Verify results appear
- Click "Home" link
*/

/* Search Brewery
- Enter Boulder in seach bar
- Select Brewery Radio
- Click search button
- Verify results appear
- Click "Eat Local" logo
*/

// Anything else?
})