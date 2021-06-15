describe('new suite', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it('new test', () => {
    cy.visit('https://google.com');
    expect(true === true);
  });
});
