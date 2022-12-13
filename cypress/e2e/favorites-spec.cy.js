describe('Favorites Page', () => {
  it('should display a message in place of favorites or fav search bar to a non-logged in user', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('[data-cy="fav-user-message"]').should('exist').contains('Log in to store your favorites!');
    // search bar does not exist 
  })

  it('should display a message in place of favorites or fav search bar to a logged in user with no favorites', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQueryNoFavs'
         });
       }
    });
    cy.visit('http://localhost:3000/favorites')
    cy.get('[data-cy="fav-user-message"]').contains('Log in to store your favorites!');
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    cy.get('[data-cy="fav-user-message"]').contains(`You don't have any favorites yet`);
    // search bar does not exist 
  })

  it('should display the favorites of a logged in user and a search bar', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'userQuery'
         });
       }
    });
    cy.visit('http://localhost:3000/favorites')
    cy.get('.login').click()
    cy.get('.input-email').type('example@email.com')
    cy.get('.login-btn').click()
    // search bar does not exist 
  })

})