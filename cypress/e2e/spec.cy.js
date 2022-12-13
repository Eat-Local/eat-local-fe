describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('empty spec', () => {

  // operation names: getUsers, createFavorite, destroyFavorite

  it('works with queries', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'examplequery'
         });
       }
    })
    cy.visit('http://localhost:3000/')
    cy.get('.login').click()
    cy.get('form > input').type('example@email.com')
    cy.get('.login-container > form > button').click()
    cy.get('[href="/favorites"]').click()
  })

  it.only('works with mutations', () => {
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      if (req.body.operationName === 'getUsers') {
          req.reply({
             fixture: 'examplequery'
         });
       }
    });
    cy.intercept('POST', 'https://throbbing-wood-3534.fly.dev/graphql', (req) => {
      console.log(`I am req.body`, req.body);
      console.log(`I am req.body.query.includes('create')`, req.body.query.includes('create'));
      console.log(`I am req.body.query.includes('destroy')`, req.body.query.includes('destroy'));
      if (req.body.operationName === undefined) {
          req.reply({
             fixture: 'examplemut'
         });
       }
    });
    cy.visit('http://localhost:3000/')
    cy.get('.login').click()
    cy.get('form > input').type('example@email.com')
    cy.get('.login-container > form > button').click()
    cy.get('.featured-cards > :nth-child(1) > button').click()
    cy.get('[href="/favorites"]').click()
  })

})