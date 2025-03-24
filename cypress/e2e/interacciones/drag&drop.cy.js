describe('pruebas drag and drop', () => {

    it('página de muestra', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/drag-drop.html')

        const dataTransfer = new DataTransfer(); //sirve para la trasnferencia de datos en Cypress

        cy.get('#Item1').trigger('dragstart', {dataTransfer}) //arrastramos el primer elemento
        cy.get('#destino').trigger('drop', {dataTransfer}) //suelta lo que trae del dataTransfer
        cy.wait(2000)

        cy.get('#Item2').trigger('dragstart', {dataTransfer}) //arrastramos el primer elemento
        cy.get('#destino').trigger('drop', {dataTransfer}) //suelta lo que trae del dataTransfer
        cy.wait(2000)

        cy.get('#Item3').trigger('dragstart', {dataTransfer}) //arrastramos el primer elemento
        cy.get('#destino').trigger('drop', {dataTransfer}) //suelta lo que trae del dataTransfer
    
    });
    
    
});
