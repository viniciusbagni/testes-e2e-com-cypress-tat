/// <reference path="../support/commands.d.ts" />

it('successfully logs in', () => {
  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false }
  )
})