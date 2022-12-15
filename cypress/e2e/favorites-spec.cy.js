describe('Favorites Page', () => {
  
  it('should display a message in place of favorites or fav search bar to a non-logged in user', () => {
    cy.visit('/favorites')
    cy.get('[data-cy="fav-user-message"]').should('exist').contains('Log in to store your favorites!');
    cy.get('[data-cy="fav-searchbar"]').should('not.exist')
  })

  it('should display a message in place of favorites or fav search bar to a logged in user with no favorites', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQueryNoFavs'
         });
       }
    });
    cy.visit('/favorites')
    cy.get('[data-cy="fav-user-message"]').contains('Log in to store your favorites!');
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('[data-cy="fav-user-message"]').contains(`You don't have any favorites yet`);
    cy.get('[data-cy="fav-searchbar"]').should('not.exist')
  })

  it('should display the favorites of a logged in user and a search bar', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.visit('/favorites')
    cy.get('[data-cy="fav-user-message"]').contains('Log in to store your favorites!');
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('[data-cy="fav-user-message"]').should('not.exist')
    cy.get('[data-cy="fav-searchbar"]').should('exist')
    cy.get('[data-cy="business-card"]').should('exist').and('contain', 'restaurant title').and('contain', '123 example address').and('contain', '4 / 5')
  })

  it('a user should be able to delete a favorite', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.query.includes('destroy')) {
          req.reply({
             fixture: 'deleteFav'
         });
       }
    });
    cy.visit('/favorites')
    cy.get('[data-cy="fav-user-message"]').contains('Log in to store your favorites!');
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('[data-cy="business-card"]').should('exist')
    cy.get('.add-from-card').click()
    cy.get('[data-cy="business-card"]').should('not.exist')
    cy.get('[data-cy="fav-user-message"]').contains(`You don't have any favorites yet`);
  })
  
  it('a user should be able to add a favorite and search through favorites', () => {
    cy.intercept('GET', Cypress.env('restaurant'), {
      fixture: 'singleRestaurantData'
    })
    cy.intercept('GET', Cypress.env('market'), {
      fixture: 'singleMarketData'
    })
    cy.intercept('GET', Cypress.env('brewery'), {
      fixture: 'singleBreweryData'
    })
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.query.includes('create')) {
          req.reply({
             fixture: 'createFav'
         });
       }
    });
    cy.visit('/')
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get(':nth-child(2) > .add-from-card > [data-cy="filled-star"]').should('not.exist')
    cy.get(':nth-child(2) > .add-from-card > [data-cy="outline-star"]').should('exist').click()
    cy.get(':nth-child(2) > .add-from-card > [data-cy="filled-star"]').should('exist')
    cy.get('[href="/favorites"]').click()
    cy.get('.favorites-container').children().should('have.length', 2)
    cy.get('[data-cy="business-card"]').last().should('exist').and('contain', `Boulder Farmers' Market`).and('contain', '1900 13th St Boulder, CO 80302').and('contain', '4 / 5')
    cy.get('[data-cy="fav-searchbar"]').type('restaurant title')
    cy.get('.favorites-container').children().should('have.length', 1)
    cy.get('[data-cy="business-card"]').should('exist').and('contain', 'restaurant title').and('contain', '123 example address').and('contain', '4 / 5')
  })

  it('should handle server errors for adding favorites', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.intercept('GET', Cypress.env('restaurant'), {
      fixture: 'singleRestaurantData.json'
    })
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.query.includes('create')) {
          req.reply({
             ok: false
         });
       }
    });
    cy.visit('/favorites')
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('[data-cy="search"]').type('denver')
    cy.get('[data-cy="submit"]').click()
    cy.get('.add-from-card').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Oops, that's an error! We had trouble adding your favorite. Please try again later!`)
    })
  })

  it('should handle server errors for removing favorites', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.query.includes('destroy')) {
          req.reply({
             ok: false
         });
       }
    });
    cy.visit('/favorites')
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('.add-from-card').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Oops, that's an error! We had trouble deleting your favorite. Please try again later!`)
    })
  })
})