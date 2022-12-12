describe('empty spec', () => {

  // operation names: getUsers, createFavorite, destroyFavorite

  it('works with queries', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'examplequery'
         });
       }
    });
    cy.visit('http://localhost:3000/')
    cy.get('.login').click()
    cy.get('form > input').type('example@email.com')
    cy.get('.login-container > form > button').click()
  })

  it('works with mutations', () => {
    // cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
    //   if (req.body.operationName === 'createFavorite') {
    //       req.reply({
    //          fixture: 'examplemut'
    //      });
    //    }
    // });
    cy.visit('http://localhost:3000/')
    cy.get('.login').click()
    cy.get('form > input').type('toriT@fakeemail.com')
    cy.get('.login-container > form > button').click()
    cy.get('.featured-cards > :nth-child(1) > button').click()
  })

})