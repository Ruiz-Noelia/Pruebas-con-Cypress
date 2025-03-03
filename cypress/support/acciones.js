Cypress.Commands.add('loginOk', (username, password) => {
    cy.get("[data-test='username']").type(username),
    cy.get("[data-test='password']").type(password),
    cy.get('#login-button').click();
}) 

Cypress.Commands.add('loginOk2', () => {
    cy.get("[data-test='username']").type('standard_user'),
    cy.get("[data-test='password']").type('secret_sauce'),
    cy.get('#login-button').click();
}) 

Cypress.Commands.add("logOut", ()=>{
    cy.get('.bm-burger-button > button').click();
    cy.get("#logout_sidebar_link").click();
})

Cypress.Commands.add('asertion_text', (selector, texto)=>{
    cy.get(selector).should('have.text', texto)
})