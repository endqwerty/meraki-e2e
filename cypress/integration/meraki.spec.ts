describe('meraki dashboard', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://meraki-web-test-v2.herokuapp.com');
    cy.authenticate();
  });
  it('devices list', () => {
    cy.verifyDevicesList();
  });
  it('device details', () => {
    cy.selectRandomDevice();
    cy.verifyDeviceDetails();
  });
});
