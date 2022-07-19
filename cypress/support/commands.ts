// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Selecting trip type
Cypress.Commands.add('selectTrip', (value: string) =>{
    cy.get('i').contains("arrow_drop_down").eq(0).click()
    cy.get('[class*=select-option]').contains(value).click()
})

// Selecting Origin Airport
Cypress.Commands.add('selectOrigin', (airportOrigin: string) =>{
    cy.get('[class *="origin"]').contains('Search airport')
        .click()
    cy.get('input[name="Origin1"]').type(airportOrigin)
    cy.get('[class*="airport-name"]').contains(airportOrigin).click()
})

// Selecting Destination Airport
Cypress.Commands.add('selectDestination', (airportDestination: string) =>{
    cy.get('[class *="destination"]').contains('Search airport')
        .click()
    cy.get('input[name="Destination1"]').type(airportDestination)
    cy.get('[class*="airport-name"]').contains(airportDestination).click()
})

// Selecting Departure
Cypress.Commands.add('selectDeparture', () =>{
    cy.get('input[name*="DepartureDate"]').click()
    cy.get('[class*="DayPicker-Day"][aria-disabled="false"]').should('be.visible').first().click({force: true})
})

// Clicking on Find FLights
Cypress.Commands.add('findFlights', (origin: string, destination: string) =>{
    cy.get('button').contains('Find flights').click()
    cy.intercept('POST', 'https://book.airmalta.com/api/flightSearch/itineraryPart').as('findingFlights')
    cy.wait('@findingFlights').its('response.statusCode').should('be.equal', 200)
})

// Geting the first available flight price
Cypress.Commands.add('getFirstAvailableFlight', () =>{
    cy.get('button:contains("€")', {timeout: 60000}).should('be.visible').first().invoke('text').then(text => {
        cy.log('Flight Price: ', text)
        expect(text).to.contains('€')
    })
})
