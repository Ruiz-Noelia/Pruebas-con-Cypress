/// <reference types = "cypress" /> 

describe("Login SauceDemo", () => {
    beforeEach("Ingresar a la página", function () {
        cy.visit("https://www.saucedemo.com/v1/index.html"),
            cy.fixture('sauce_credenciales').then((datos) => {
                this.dato = datos
            })
        cy.fixture('../fixtures/DOM/loginElements.json').then((data) => { //traemos los selectores de nuestro json
            this.elemento = data
        })
        cy.fixture('../fixtures/DOM/messageError.json').then((data)=>{
            this.mensaje = data
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
        cy.escribir(this.elemento.login.username, this.dato.standardUser), //reemplazamos por nuestro comando personalizado para escribir en los inputs
        cy.escribir(this.elemento.login.password, this.dato.errorPassword);
        cy.hacer_click(this.elemento.login.btnLogin);
        cy.asertion_text(this.elemento.login.errorMsg, this.mensaje.msg.invalid)
    });

    it("Login correcto", function () {
        cy.get('[data-test="username"]').type(this.dato.standardUser),
        cy.get('[data-test="password"]').type(this.dato.passwordOk)
        cy.get('#login-button').click();
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
    })


})
