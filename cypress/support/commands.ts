/* eslint-disable @typescript-eslint/no-namespace */
import fetch from 'node-fetch';
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to click a link based on label
       * @example cy.clickLink('greeting')
       */
      clickLink(label: string): Chainable<JQuery<HTMLAnchorElement>>;

      fetchInviteFromEmail(emailId: string): string;
    }
  }
}

Cypress.Commands.add('clickLink', (label) => {
  return cy.get('a').contains(label).click();
});

Cypress.Commands.add('fetchInviteFromEmail', async (emailId) => {
  const inboxResponse = await fetch(`https://mailinator.com/api/v2/domains/public/inboxes/${emailId}/`, {
    method: 'GET',
  });
  const inboxResponseJSON = await inboxResponse.json();
  const messageID = inboxResponseJSON.msgs[0].id;
  const messageResponse = await fetch(`https://mailinator.com/api/v2/domains/public/inboxes/${emailId}/messages/${messageID}`, {
    method: 'GET',
  });
  const messageResponseJSON = await messageResponse.json();
  return messageResponseJSON.clickablelinks[1];
});
