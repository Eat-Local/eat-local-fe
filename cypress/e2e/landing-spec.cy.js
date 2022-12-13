describe('Landing Page', () => {
  beforeEach(() => {
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
  cy.get('[data-cy="featured-businesses-msg"]').contains('Featured Local Businesses:')
  cy.get('[data-cy="featured-cards"]')
  .within(() => {
    cy.get('[data-cy="business-card"]').first()
    .should('contain', 'The Buff Restaurant').and('contain', 4.5)
    .find('img').should('have.attr', 'src').should('include', 'https://s3-media2.fl.yelpcdn.com/bphoto/p95cYM_TgNOlHvw_cf0SAw/o.jpg')
    cy.get('[data-cy="business-card"]').first().next()
    .should('contain', 'Boulder Farmers\' Market').and('contain', 4)
    .find('img').should('have.attr', 'src').should('include', 'https://s3-media2.fl.yelpcdn.com/bphoto/INILW1uLypS3V55ggbKgUA/o.jpg')
    cy.get('[data-cy="business-card"]').last()
    .should('contain', 'BJ\'s Restaurant & Brewhouse').and('contain', 3)
    .find('img').should('have.attr', 'src').should('include', 'https://s3-media3.fl.yelpcdn.com/bphoto/I8WyKF02Jlw8f_vNrde7Bg/o.jpg')
  })
})

it('has a footer with team info', () => {
  cy.get('[data-cy="footer-container"]').should('contain', 'Front-End Team')
  .and('contain', 'Anthony Shellman').and('contain', 'Victoria Fields').and('contain', 'Cole Anthony')
  cy.get('[data-cy="footer-container"]').should('contain', 'Back-End Team')
  .and('contain', 'Erik Riggs').and('contain', 'Kaelin Sleevi').and('contain', 'Benjamin Randolph')
  .and('contain', 'Dominic O\'Donnell')
  })
})