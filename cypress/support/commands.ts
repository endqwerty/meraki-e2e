/* eslint-disable @typescript-eslint/no-namespace */
export {};

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Sets the api key and submits
       * @example cy.authenticate()
       */
      authenticate(): void;

      /**
       * checks the devices list for data
       * @example cy.verifyDevicesList()
       */
      verifyDevicesList(): void;

      /**
       * checks the device details for data
       * @example cy.verifyDeviceDetails()
       */
      verifyDeviceDetails(): void;

      /**
       * select a device from the device list by nth-child()
       * @example cy.selectDevice(1)
       */
      selectDevice(deviceNumber: number): void;
      /**
       * select a random device from the device list
       * @example cy.selectRandomDevice()
       */
      selectRandomDevice(): void;
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
  devices.each(($device) => {
    cy.wrap($device.find('.image')).should('be.visible');
    cy.wrap($device.find('.details .name')).should('have.lengthOf.greaterThan', 0);
    cy.wrap($device.find('.details')).contains(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/); // IP
    // validate mouseover events
    // cy.wrap($device.find('.details')).trigger('mouseover');
  });
});

Cypress.Commands.add('selectDevice', (deviceNumber) => {
  cy.get(`a:nth-child(${deviceNumber}) .device`).click();
});

Cypress.Commands.add('selectRandomDevice', () => {
  let devicesCount: number;
  cy.get('a .device').then((elms) => {
    devicesCount = elms.length;
    const selectedDevice = getRandomInt(1, devicesCount + 1);
    cy.get(`a:nth-child(${selectedDevice}) .device`).click();
  });
});

Cypress.Commands.add('verifyDeviceDetails', () => {
  // TODO verify this is the same details as the device that was selected
  cy.get('#device .image').should('be.visible');
  cy.get('#device .details .name').should('have.lengthOf.greaterThan', 0);
  cy.get('#device .details').contains(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/); // IP
  cy.get('#device .details').contains(/Serial: ([0-9A-Z]{1,4}\-){2}[0-9A-Z]{1,4}/); // Serial ID
  cy.get('#device .details').contains(/Clients: ([0-9]{1,5})/); // Clients
  cy.get('#device .details').contains(/Usage: /); // Data Usage - unknown if its always in MiB
});
