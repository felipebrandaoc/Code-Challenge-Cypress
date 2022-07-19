// Wrote by Felipe Brandão Costa
// Brazil, 18/07/2022.

describe('AirMalta Airline', () => {

    it(`Get First Available Flight
        Action: The user visits Air Malta  website,
                Selects one trip type,
                Type the Flight's origin,
                Type the Flight's destination,
                Sets Departure's date,
                Search for the flights.
        Result: The website shows up all the flights close to that date.
                Our application shows the first available flight.
        `, () => {
        cy.visit('/')
        cy.url().should('contains', 'airmalta.com')
        cy.selectTrip('One way')
        cy.selectOrigin('Vienna International')
        cy.selectDestination('Malta International Airport')
        cy.selectDeparture()
        cy.findFlights('VIE', 'MLA')
        cy.getFirstAvailableFlight()
        cy.url().should('contains', 'book.airmalta.com/calendar')
    })
})
