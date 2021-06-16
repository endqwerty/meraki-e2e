/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Sets the api key and submits
       * @example cy.authenticate()
       */
      authenticate(): void;

      /**
       * Show the devices
       * @example cy.listDevices()
       */
      verifyDevicesList(): void;

      verifyDeviceDetails(): void;
    }
  }
}

Cypress.Commands.add('authenticate', () => {
  cy.get('[type="text"]').type(Cypress.env('MERAKI_API_KEY'));
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add('verifyDevicesList', () => {
  cy.get('h1').should('contain.text', 'Devices');
  const devices = cy.get('a .device');
  devices.should('have.lengthOf.greaterThan', 1);
  devices.each(($device, $index, $collection) => {
    cy.wrap($device.find('.image')).should('be.visible');
    cy.wrap($device.find('.details .name')).should('have.lengthOf.greaterThan', 0);
    cy.wrap($device.find('.details')).contains(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/);
    // validate mouseover events
    // cy.wrap($device.find('.details')).trigger('mouseover');
  });
});

Cypress.Commands.add('verifyDeviceDetails', () => {
  cy.get('#device');
});
