// https://docs.cypress.io/api/introduction/api.html

describe('Test seach form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('Form is ready', () => {
    cy.get('.search__form');
  });

  it('Seach icon should be visible', () => {
    cy.get('.search__form').find('img').should('be.visible');
  });

  it('Submit search', () => {
    cy.get('[data-test-id="search-form"] input').type('Frank Ocean');
    cy.get('[data-test-id="search-form"]').submit();
  })
});
