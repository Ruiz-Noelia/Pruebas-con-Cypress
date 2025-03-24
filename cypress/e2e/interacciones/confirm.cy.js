
describe('Pruebas de confirm', () => { 
    it('Confirm desde Cypress', ()=>{
        cy.visit('https://galiclerc.github.io/test-pages/pages/confirm.html')
        cy.on('windows:confirm', (texto)=>{
            expect(texto).to.equal('Esto es un Confirm')
            return true; //dependiendo la pàgina, retornando false, harìa la opciòn de cancelar
        }) 

        cy.get('#btn').click()
        cy.get('#confirm').should('have.text', 'Hiciste click en aceptar') 
        // cy.get('#confirm').should('have.text', 'Hiciste click en cancelar') y aparecerìa este mensaje
    })
 })