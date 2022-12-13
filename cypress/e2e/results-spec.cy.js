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

  it('can search for a restaurant and see results', () => {
    cy.get('[data-cy="navbar"]')
    .within(() => {
      cy.get('[data-cy="search"]').type('Denver')
      cy.get('[data-cy="submit"]').click()
    })
      cy.url('/results')
      cy.get('[data-cy="results-section"]')
      .within(() => {
      cy.get('[data-cy="results-container"]').children().should('have.length', 3)
      cy.get('[data-cy="business-card"]').first()
      .should('contain', 'The Buff Restaurant').and('contain', '2600 Canyon Blvd Boulder, CO 80302').and('contain', '4.5 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media2.fl.yelpcdn.com/bphoto/p95cYM_TgNOlHvw_cf0SAw/o.jpg')
      cy.get('[data-cy="business-card"]').first().next()
      .should('contain', 'Efrain\'s of Boulder Mexican Restaurant & Cantina').and('contain', '2480 Canyon Blvd Unit M1 Boulder, CO 80302').and('contain', '4 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media3.fl.yelpcdn.com/bphoto/4qf9TnnAevvDdvsDAxXxrw/o.jpg')
      cy.get('[data-cy="business-card"]').last()
      .should('contain', 'Walnut Cafe').and('contain', '3073 Walnut St Boulder, CO 80301').and('contain', '4 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media2.fl.yelpcdn.com/bphoto/W1eqfDjV-jjYhqvJLTw25g/o.jpg')
    })
  })

  it('can search for a market and see results', () => {
    cy.get('[data-cy="navbar"]')
    .within(() => {
      cy.get('[data-cy="market-radio"]').click()
      cy.get('[data-cy="search"]').type('Denver')
      cy.get('[data-cy="submit"]').click()
    })
      cy.url('/results')
      cy.get('[data-cy="results-section"]')
      .within(() => {
      cy.get('[data-cy="results-container"]').children().should('have.length', 3)
      cy.get('[data-cy="business-card"]').first()
      .should('contain', 'Boulder Farmers\' Market').and('contain', '1900 13th St Boulder, CO 80302').and('contain', '4 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media2.fl.yelpcdn.com/bphoto/INILW1uLypS3V55ggbKgUA/o.jpg')
      cy.get('[data-cy="business-card"]').first().next()
      .should('contain', 'The Diaz Farm').and('contain', '2818 Jay Rd Boulder, CO 80301').and('contain', '5 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media3.fl.yelpcdn.com/bphoto/v9g5sG9mtI_VlY7Qqbw4vg/o.jpg')
      cy.get('[data-cy="business-card"]').last()
      .should('contain', 'Eldorado Corner Market').and('contain', '1805 S Foothills Hwy Boulder, CO 80303').and('contain', '2 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media2.fl.yelpcdn.com/bphoto/AYDnEE19MtEKUgrXx7jHfA/o.jpg')
    })
  })

  it('can search for a brewery and see results', () => {
    cy.get('[data-cy="navbar"]')
    .within(() => {
      cy.get('[data-cy="brewery-radio"]').click()
      cy.get('[data-cy="search"]').type('Denver')
      cy.get('[data-cy="submit"]').click()
    })
      cy.url('/results')
      cy.get('[data-cy="results-section"]')
      .within(() => {
      cy.get('[data-cy="results-container"]').children().should('have.length', 3)
      cy.get('[data-cy="business-card"]').first()
      .should('contain', 'BJ\'s Restaurant & Brewhouse').and('contain', '1690 28th St Boulder, CO 80301').and('contain', '3 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media3.fl.yelpcdn.com/bphoto/I8WyKF02Jlw8f_vNrde7Bg/o.jpg')
      cy.get('[data-cy="business-card"]').first().next()
      .should('contain', 'Twisted Pine Brewing Company').and('contain', '3201 Walnut St Boulder, CO 80301').and('contain', '4 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media3.fl.yelpcdn.com/bphoto/eSvbQe2xn2s6n422w07UBw/o.jpg')
      cy.get('[data-cy="business-card"]').last()
      .should('contain', 'Boulder Social').and('contain', '1600 38th Street Boulder, CO 80301').and('contain', '3.5 / 5')
      .find('img').should('have.attr', 'src').should('include', 'https://s3-media1.fl.yelpcdn.com/bphoto/jku5MGd-a7DDSKVFw060Vw/o.jpg')
    })
  })
})