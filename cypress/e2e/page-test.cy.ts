describe('Testing page propreties', () => {

    it('checking page title', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should('eq', "The Cyber Book Store")
    })

})