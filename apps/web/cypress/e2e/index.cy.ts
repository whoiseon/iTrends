describe('Auth Screen', () => {
  it('should render the auth screen', () => {
    cy.visit('/');
    cy.get('[data-testid="signin-link-button"]').should('exist');
    cy.get('[data-testid="signup-link-button"]').should('exist');
  });

  it('should navigate to signup page and verify elements', () => {
    cy.visit('/');
    cy.get('[data-testid="signup-link-button"]').click();

    cy.get('[data-testid="input-display-name"]')
      .type('tester')
      .should('have.value', 'tester');
    cy.get('[data-testid="input-email"]')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
    cy.get('[data-testid="input-password"]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-testid="input-confirm-password"]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-testid="signup-submit-button"]').should('exist');
  });

  it('should navigate to signin page and verify elements', () => {
    cy.visit('/');
    cy.get('[data-testid="signin-link-button"]').click();

    cy.get('[data-testid="input-email"]')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
    cy.get('[data-testid="input-password"]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-testid="signin-submit-button"]').should('exist');
  });
});

export {};
