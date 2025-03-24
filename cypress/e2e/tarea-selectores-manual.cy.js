//Tarea de clase 2 : Selección de elementos con Cypress

/*
Generar una suite de pruebas  realizada de forma manual y una con el Cypress Studio.
• Elije cualquier página y realiza una o 2 pruebas como las que vimos en clase.
• Una eligiendo de forma manual los selectores.
• La otra con Cypress Studio.

Enviar la captura del código, o el archivo .cy.js
*/

describe("Suite de tarea clase 2", ()=>{
    //forma manual de capturar selectores con los #id
    it("Inicio de sesión en Saucedemo ok", ()=>{
        cy.visit("https://www.saucedemo.com/v1/"),
        cy.get('#user-name').type('standard_user')
        cy.get('#password'). type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#menu_button_container > div > div:nth-child(3) > div > button').click()
        cy.get('#logout_sidebar_link').click()
    })
})