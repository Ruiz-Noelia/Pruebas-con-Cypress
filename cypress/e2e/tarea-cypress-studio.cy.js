describe("Inicio de sesión en saucedemo desde Cypress studio", ()=>{
    it("Login exitoso por grabación", ()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.saucedemo.com/v1/');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        /* ==== End Cypress Studio ==== */
    })
})