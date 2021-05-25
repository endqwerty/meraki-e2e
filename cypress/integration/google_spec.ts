describe('My First Test', () => {
  it('Open Google', () => {
    cy.visit('http://google.com');
    cy.findByRole('combobox', { name: 'Search' }).type('testing-library');
    cy.findByRole('img', { name: 'Google' }).click();
    cy.findByRole('button', { name: 'Google Search' }).click();
    expect(true).to.equal(true);
  });
});
