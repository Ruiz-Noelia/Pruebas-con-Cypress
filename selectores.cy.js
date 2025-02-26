/// <reference types = "cypress" /> 
// sirve para que no se importe mocha cada vez que generamos un nuevo archivo y referencie a la libreria de Cypress

describe("login en 36dev.bimtrazer.com"), () => {
    beforeEach("Ingresar a la página de login de Bimtrazer"), () => {
        cy.visit("https://36dev.bimtrazer.com/#/login")
    }
}

it("Login ok"), ()=>{
    cy.get('#root > div > div > div:nth-child(3) > div > div > div > form > button').click()

}