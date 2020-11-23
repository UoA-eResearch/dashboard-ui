// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("login", () => {
  cy.visit('/');
  cy.contains('Sign In').should('exist');
  cy.get('.signin-button > .mat-button-wrapper').click();
  cy.url().should('include', 'iam.test.auckland.ac.nz');
  cy.get('#username').type(Cypress.env('TEST_ACCT_USERNAME'));
  cy.get('#password').type(Cypress.env('TEST_ACCT_PASSWORD'));
  cy.get('.login-button').click();
});

Cypress.Commands.add("login2", () => {
  cy.request(
    'POST',
    'https://iam.test.auckland.ac.nz/profile/SAML2/Redirect/SSO',
    { username: Cypress.env('TEST_ACCT_USERNAME'), password: Cypress.env('TEST_ACCT_PASSWORD') }
  )
  .then((response) => {
    // pull out the location redirect
    const loc = response.headers['location']

    cy.visit(loc);
  });
});

Cypress.Commands.add('logout', () => {
  cy.visit('/');
  cy.contains('Sign In').should('not.exist');
  cy.get('.user-menu').click();
  cy.get('.signout-button').click();
});


// loginUrl: "iam.test.auckland.ac.nz/profile/SAML2/Redirect/SSO",
//     credentials: {
//       username: process.env.TEST_ACCT_USERNAME,
//       password: process.env.TEST_ACCT_PASSWORD }