describe('Onboarding', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it('new user', () => {
    const emailId = `airtable-e2e-${Date.now()}`;
    const friendEmailId = `airtable-e2e-${Date.now()}-friend`;
    cy.visit('https://airtable.com');
    cy.findByRole('navigation').findByRole('link', { name: 'Sign up for free' }).click();
    cy.findByRole('textbox', { name: 'Work email address' }).type(`${emailId}@mailinator.com`);
    cy.findByRole('button', { name: 'Continue' }).click();
    cy.findByLabelText('Full Name').type('test user');
    cy.findByLabelText('Password').type('test password');
    cy.findByRole('button', { name: 'Continue' }).click();
    cy.findByText('Skip').click();
    cy.findByText('Skip').click();
    cy.findByText('Skip').click();
    cy.findByRole('button', { name: 'Create Base from scratch' }).click();
    cy.findByRole('heading', { name: 'Welcome, test' }).should('be.visible');
    cy.findByRole('button', { name: 'No thanks' }).click();
    cy.findByRole('button', { name: 'Close side panel' }).click();
    cy.findByRole('button', { name: 'Close' }).click();
    cy.findByRole('button', { name: 'Dismiss for now' }).click();
    cy.findByText('Untitled Base').click();
    cy.findByRole('menuitem', { name: 'Share' }).click();
    cy.findByRole('button', { name: 'Base Access to Untitled Base' }).click();
    cy.findAllByPlaceholderText('Invite more base collaborators via email').type(`${friendEmailId}@mailinator.com`);
    cy.findByText('Creator').click();
    cy.findByRole('menuitem', {
      name: /editor can edit records and views/i,
      exact: false,
    }).click();
    cy.findByRole('button', {
      name: /send invite/i,
    }).click();
    cy.findByRole('list', {
      name: /base collaborators/i,
      timeout: 10000,
    }).as('list');
    cy.get('@list').findByRole('listitem').should('contain.text', `${friendEmailId}@mailinator.com`);
    cy.get('@list').findByRole('listitem').findByRole('button').should('contain.text', 'Editor');
  });
});
