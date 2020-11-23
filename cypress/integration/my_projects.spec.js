/**
 * Tests the my-projects page, e.g. whether the page
 * loads successfully and key elements are displayed.
 */

import '../support/index';

describe('My-Projects Page Tests', () => {
  before(() => {
    // cy.login();
    cy.visit('/');
  });
  
  // beforeEach(() => {
  //   cy.visit('/my-projects')
  // });

  // it('Redirects to login page', () => {
  //   cy.visit('/my-projects');
  //   cy.url().should('include', 'iam.test.auckland.ac.nz');
  //   cy.get('#username').type(Cypress.env('TEST_ACCT_USERNAME'));
  //   cy.get('#password').type(Cypress.env('TEST_ACCT_PASSWORD'));
  //   cy.get('.login-button').click();
  // });

  it('logs in', () => {
    cy.login2();
    cy.contains('Welcome to the eResearch Dashboard');
  });

  it('loads my-projects page', () => {
    cy.visit('/my-projects');
  });

  it('should display projects dashboard welcome message', async () => {
    expect(page.getTitleText()).toEqual('Projects Dashboard');
    cy.contains('Projects Dashboard');
  });

  it('should display the my-projects container', () => {
    cy.get('.my-projects-container').should('exist');
  });
});

// cy.visit('/');
// cy.contains('Sign In').should('exist');
// cy.get('.signin-button > .mat-button-wrapper').click();
// cy.url().should('include', 'iam.test.auckland.ac.nz');
// cy.get('#username').type(Cypress.env('TEST_ACCT_USERNAME'));
// cy.get('#password').type(Cypress.env('TEST_ACCT_PASSWORD'));
// cy.get('.login-button').click();