/// <reference types = "cypress" /> 
// sirve para que no se importe mocha cada vez que generamos un nuevo archivo y referencie a la libreria de Cypress

describe("login en Saucedemo", () =>{
    beforeEach('Ingresar a la página de Saucedemo', ()=>{
        cy.visit("https://www.saucedemo.com/v1/") /*
        
        // 1. `cy.visit(url)`
            - Descripción: Navega a la URL especificada en el navegador.
            - Ejemplo: `cy.visit('https://example.com')`


        2. `cy.get(selector)`
            - Descripción: Selecciona elementos del DOM usando un selector CSS.
            - Ejemplo: `cy.get('.btn')`


        3. `cy.contains(text)`
            - Descripción: Selecciona elementos que contienen el texto especificado.
            - Ejemplo: `cy.contains('Submit')`
                

        4. `cy.click()`
            - Descripción: Hace clic en el elemento seleccionado.
            - Ejemplo: `cy.get('.btn').click()`

        5. `cy.type(text)`
            - Descripción: Escribe texto en el campo de entrada seleccionado.
            - Ejemplo: `cy.get('input').type('Hello World')`

        6. `cy.clear()`
            - Descripción: Borra el texto en un campo de entrada seleccionado.
            - Ejemplo: `cy.get('input').clear()`

        Estos comandos como vemos en el ejemplo de cy.type, a su vez pueden concatenarse para ejecutarse junto a otros comandos.
        Por ejemplo:
            cy.get('#login2').contains("Log in").click()

   */
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