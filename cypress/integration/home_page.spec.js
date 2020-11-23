/**
 * Tests the basic functionality of the eResearch Dashboard home page, e.g. whether the page
 * loads successfully and key elements are displayed.
 */
describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.contains('Welcome to the eResearch Dashboard');
    console.log(Cypress.env('TEST_ACCT_USERNAME'));
    console.log(Cypress.env('TEST_ACCT_PASSWORD'));
  });

  it('should display the navbar', () => {
    cy.get('app-navbar').should('exist');
  });

  it('should display the dashboard logo in the navbar', () => {
    cy.get('.dashboard-logo').should('exist');
  });

  it('should display the footer', () => {
    cy.get('app-footer').should('exist');
  });

  it('should display the home dashboard', () => {
    cy.get('app-home-dashboard').should('exist');
  });

  it('should display home dashboard title', () => {
    cy.contains('Access eResearch Services:');
  });

  it('should contain the sign-in button', () => {
    cy.get('.signin-button > .mat-button-wrapper').should('exist');
  });

  it('should visit UoA SSO page', () => {
    cy.get('.signin-button > .mat-button-wrapper').click();
    cy.url().should('include', 'iam.test.auckland.ac.nz');
  });
});