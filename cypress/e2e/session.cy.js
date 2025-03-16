describe('sessions en Cypress', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })

    it('verificamos la url', () => {
        cy.url().should('contain', '/inventory.html')
    });
    
});
