// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        selectTrip(value: string): Chainable<Element>,
        selectOrigin(airportOrigin: string): Chainable<Element>,
        selectDestination(airportDestination: string): Chainable<Element>,
        selectDeparture(): Chainable<Element>,
        getFirstAvailableFlight(): Chainable<Element>,
        findFlights(origin: string, destination: string): Chainable<Element>
      }
    }
}

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Unexpected end of JSON input') || err.message.includes('Cannot set properties of null') || err.message.includes('Cannot read properties of undefined')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
})

// Ignores all uncaught exceptions
// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false
// })

// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = "_km_cookie_consent";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = true;

Cypress.on("window:before:load", window => {
    window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});
