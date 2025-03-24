describe('subir archivo', () => {

    it('arrastro archivo', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/drag-file.html')

        const dataTransfer = new DataTransfer();

        //si el archivo se encuentra fuera de nuestracarpeta proyecto de cypress usamos sí o sí la ruta ABSOLUTA
        //cy.get('#dropArea').selectFile('c:/Users/pc/Downloads/bloque.png', { action: 'drag-drop' }) //indicamos donde soltamos nuestro archivo

        // si el archivo a subir está dentro del proyecto nuestro de Cypress, lo subimos con la ruta relativa
        cy.get('#dropArea').selectFile('cypress/fixtures/post.png', { action: 'drag-drop' });


    });

})