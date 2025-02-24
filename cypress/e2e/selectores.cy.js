/// <reference types = "cypress" /> 
// sirve para que no se importe mocha cada vez que generamos un nuevo archivo y referencie a la libreria de Cypress

describe("login en Saucedemo", () =>{
    beforeEach('Ingresar a la página de Saucedemo', ()=>{
        cy.visit("https://www.saucedemo.com/v1/")
    })

    it("Login ok", ()=>{

        //Primer forma de capturar selectores de una página -> Get Function
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        //Segunda forma de capturar selectores de una página -> Por grabación de Cypress studio
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        /* ==== End Cypress Studio ==== */
    })
})