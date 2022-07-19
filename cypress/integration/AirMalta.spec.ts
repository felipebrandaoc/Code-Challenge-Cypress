describe('AirMalta Airline', () => {

    it('Get First Available Flight', () => {
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