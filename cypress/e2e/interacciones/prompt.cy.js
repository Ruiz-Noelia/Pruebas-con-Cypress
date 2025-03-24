describe('probando Prompt', () => {

    it('página de prompt', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/prompt.html')

        cy.window().then((win)=>{ //por pantalla espera que la ventana de prompt se abra
            cy.stub(win, 'prompt').returns('Noe') //stub devuelve el valor, el returns es el valor que ingresa en el prompt
        })

        cy.get('#btn').click()
        cy.get('#aviso').should('have.text', 'Hola Noe! que bueno que estés aquí!')
    });
    
    
});
