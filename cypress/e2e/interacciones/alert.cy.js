
describe('interacciones con el navegador', () => {

    it('probando el alert', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/alert.html')
        cy.on('windows:alert', (texto) => { //on escucha el evento 
            expect(texto).to.be.equal('Esto es un Alert')
        })
        cy.get('#btn').click()
    })
});