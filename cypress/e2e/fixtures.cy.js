describe('Login Saucedemo', () => {
    //inicializamos las variables
    let usersOk;
    let usersError;
    let userLocked

    before('Traer los datos', () => {
        cy.fixture('users_ok').then((data) => { //llamamos los datos del archivo .json con los datos correctos
            usersOk = data //guardamos ese dato en la variable
        });

        cy.fixture('users_error').then((data) => { //llamamos los datos del archivo .json con los datos correctos
            usersError = data //guardamos ese dato en la variable
        });

        cy.fixture('user_locked').then((data) => { //llamamos los datos del archivo .json con los datos correctos
            userLocked = data //guardamos ese dato en la variable
        });
    })

    beforeEach("Iniciamos la pàgina", () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    //solución a los problemas de llamado fetch - método POST
    it.only("Usuario Bloqueado", () => {
        cy.get('[data-test="username"]').type(userLocked.username),
        cy.get('[data-test="password"]').type(userLocked.password)

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        /* ==== End Cypress Studio ==== */
    })

    it("Usuarios con Error", () => {
        // iteramos la variable con los datos que contenga - ciclo forEach
        usersError.forEach((dato) => {
            cy.get('[data-test="username"]').type(dato.username),
            cy.get('[data-test="password"]').type(dato.password),
            cy.get('#login-button').click();
            cy.get('#login_button_container > div > form > h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.get('[data-test="username"]').clear(),
            cy.get('[data-test="password"]').clear()
        })

    });

    //.only, solo corre esa prueba
    it("Login correcto", () => {
        usersOk.forEach((dato) => {
            cy.get('[data-test="username"]').type(dato.username),
            cy.get('[data-test="password"]').type(dato.password),
            cy.get('#login-button').click();
            cy.get('.bm-burger-button > button').click();
            cy.get('#logout_sidebar_link').click();
            
        })

    })


})
