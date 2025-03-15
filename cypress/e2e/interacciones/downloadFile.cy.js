describe('descargando mi cv', () => {

    it('link a mi portfolio', () => {
        cy.visit('https://portfolio-de-noe.vercel.app/')
        cy.wait(3000)

        cy.get('#boton').click();
    });
    
    
});
