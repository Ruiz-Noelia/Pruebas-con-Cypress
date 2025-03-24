/// <reference types = "cypress" /> 

describe("Login correcto Saucedemo", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })

    it("Login correcto", () => {
        cy.asertion_text('#header_container > div.header_secondary_container > span', 'Products');
    })

    afterEach(() => {
        cy.logOut();
    })
})      