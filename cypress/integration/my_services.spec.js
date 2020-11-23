/**
 * Tests the my-services page, e.g. whether the page
 * loads successfully and key elements are displayed.
 */

import '../support/index';

describe('My-Services Page Tests', () => {
  before(() => {
    cy.login();
  });
  
  beforeEach(() => {
    cy.visit('/my-services')
  });

  it('should display services dashboard welcome message', async () => {
    expect(page.getTitleText()).toEqual('Services Dashboard');
    cy.contains('Services Dashboard');
  });

  it('should display the my-services container', () => {
    expect(page.getMyServicesContainer).toBeTrue;
    cy.get('.my-services-container').should('exist');
  });
});