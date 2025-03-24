/// <reference types = "cypress" /> 


describe('probando el target_blank y popover', () => { //popover es la ventanita chiquita que se abre al dar click

    it('página de muestra', () => {
        cy.visit('https://galiclerc.github.io/test-pages/index.html')
        //cy.get('#popover').click() si la página se abre en una pestaña aparte, Cypress NO puede seguir probando cosas

        cy.get('#popover').should('have.attr', 'target', '_blank') //primero nos fijamos si tiene el atributo 'target' con el valor de 'blank'
        cy.get('#popover').should('have.attr', 'href', './pages/popover.html') //luego si tiene el atributo 'href' con el valor de la página

        cy.get('#popover').invoke('attr', 'target', '_self') //llamamos a ese atributo para que e abra Cypress en esta misma página
        cy.get('#popover').click()

        cy.wait(2000)

        cy.get('#mi-boton').click()
        cy.get('#mi-popover > p').should('have.text', 'Contenido del Popover')
        cy.wait(2000)

        cy.get('#close-popover').click()
    });


});
