/// <reference types = "cypress" /> 

describe("Login correcto Saucedemo", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })

    it("Login correcto", () => {
        cy.asertion_text('.product_label', 'Products');
    })

    afterEach(() => {
        cy.logOut();
    })
})      