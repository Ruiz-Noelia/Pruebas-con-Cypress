/// <reference types = "cypress" /> 

describe("Login SauceDemo", () => {
    beforeEach("Ingresar a la página", function () {
        cy.visit("https://www.saucedemo.com/v1/index.html"),
            cy.fixture('sauce_credenciales').then((datos) => {
                this.dato = datos
            })
    })

    it("Usuario Bloqueado", function () {
        cy.get('[data-test="username"]').type(this.dato.lockedUser),
        cy.get('[data-test="password"]').type(this.dato.passwordOk),
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });


    it("Usuario con Error", function () {
        cy.get('[data-test="username"]').type(this.dato.errorUser),
        cy.get('[data-test="password"]').type(this.dato.passwordOk)
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it.only("Password con Error", function () {
        cy.escribir('[data-test="username"]', this.dato.standardUser), //reemplazamos por nuestro comando personalizado para escribir en los inputs
        cy.escribir('[data-test="password"]', this.dato.errorPassword);
        cy.hacer_click('#login-button');
        cy.asertion_text('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
    });

    it("Login correcto", function () {
        cy.get('[data-test="username"]').type(this.dato.standardUser),
        cy.get('[data-test="password"]').type(this.dato.passwordOk)
        cy.get('#login-button').click();
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
    })


})
