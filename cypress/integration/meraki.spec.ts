describe('new suite', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it('new test', () => {
    cy.visit('https://meraki-web-test-v2.herokuapp.com');
    cy.authenticate();
    cy.verifyDevicesList();
    // cy.verifyDeviceDetails();
  });
});
