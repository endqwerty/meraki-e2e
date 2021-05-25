/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to click a link based on label
       * @example cy.clickLink('greeting')
       */ clickLink(label: string): Chainable<JQuery<HTMLAnchorElement>>;
    }
  }
}

Cypress.Commands.add('clickLink', (label) => {
  return cy.get('a').contains(label).click();
});
