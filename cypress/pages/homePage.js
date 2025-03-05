//creamos una clase con los elementos y métodos

class homePage {
    elements = {
        usernameInput: () => cy.get("[data-test='username']"),
        passwordInput: () => cy.get("[data-test='password']"),
        loginButton: () => cy.get("#login-button"),
        errorMsg: () => cy.get("[data-test='error']")
    }

    //Método de la clase para escribir el nombre de usuario
    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    //Método de la clase para escribir la contraseña del usuario
    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    //Método de la clase para escribir la contraseña del usuario
    clickLoginButton() {
        this.elements.loginButton().click()
    }

    //Método de la clase para validar que aparezca el mensaje de error
    asertionError(errorMsg) {
        this.elements.errorMsg().should('have.text' , errorMsg)
    }
}

//exportamos una nueva instancia de esta clase
export default new homePage()