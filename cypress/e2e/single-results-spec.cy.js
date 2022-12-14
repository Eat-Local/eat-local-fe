describe('Single results page', () => {
  beforeEach(() => {
    // cy.intercept('GET', Cypress.env('restaurant'), {
    //   fixture: 'restaurantData.json'
    // })

    cy.intercept('GET', Cypress.env('restaurant'), {
      fixture: 'singleRestaurantData.json'
    })
    cy.intercept('GET', Cypress.env('market'), {
      fixture: 'singleMarketData.json'
    })
    cy.intercept('GET', Cypress.env('brewery'), {
      fixture: 'singleBreweryData.json'
    })
    cy.visit('/')
  })
  it('should display a single business', () => {
    cy.get('[data-cy="search"]').type('denver')
    cy.get('[data-cy="market-radio"]').click()
    cy.intercept('GET', Cypress.env('market'), {
      fixture: 'singleMarketData.json'
    })

    cy.get('[data-cy="submit"]').click()
    cy.get('.business-card-image').click()
    
    cy.get('.business-photo')
    cy.get('.single-title').contains('Boulder Farmers\' Market')
    cy.get('.single-address').contains('1900 13th St Boulder, CO 80302')
    cy.get('.single-price').contains('Is it expensive? $$')
    cy.get('.single-rating').contains('4')
    cy.get('.phone').contains('(303) 910-2236')
    cy.get('.link-to').contains('Check out Boulder Farmers\' Market\'s reviews at this other website that is nothing like Eat Local!')
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]')
    cy.get(['[data-cy="unfavorited]']).should('not.be.visible')
  })
  it('should have a star when a user logs in and is clickable', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('[data-cy="search"]').type('denver')
    cy.get('[data-cy="market-radio"]').click()
    cy.intercept('GET', Cypress.env('market'), {
      fixture: 'singleMarketData.json'
    })
    cy.get('[data-cy="submit"]').click()
    cy.get('.business-card-image').click()
    cy.get('[data-cy="unfavorited"]').should('exist')
    cy.get('[data-cy="unfavorited"]').click()

  })
})