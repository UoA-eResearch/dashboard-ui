/**
 * Tests the basic functionality of the Help page, e.g. whether the page
 * loads successfully and key elements are displayed.
 */
describe('Help Page Tests', () => {
  beforeEach(() => {
    cy.visit('/help')
  });

  it('should display help page welcome message', () => {
    cy.contains('Welcome to the eResearch Help Repository!');
  });

  it('should display the help container', () => {
    cy.get('.help-container').should('exist');
  });

  it('should display the faqs', () => {
    cy.get('.faqs-panel-container').should('exist');
  });
});