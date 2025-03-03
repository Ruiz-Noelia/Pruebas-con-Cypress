//import 'cypress-real-events' - se deja comentado por si se usa la librerìa, se descomenta la lìnea 11 para reemplazar y comentar la lìnea 10

//se recomienda colocar comandos bàsicos

Cypress.Commands.add('escribir', (selector, dato)=>{
    cy.get(selector).clear().type(dato); //traemos el selector, lo limpieamos e ingresamos el dato
})

Cypress.Commands.add('hacer_click', (selector)=>{
    cy.get(selector).click()
    // cy.get(selector).realClick()
})

Cypress.Commands.add('asertion_text', (selector, texto)=>{
     cy.get(selector).should('have.text', texto)
})