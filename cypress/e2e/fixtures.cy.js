describe('Pruebas Saucedemo', () => {
    //inicializamos las variables
    let usersOk;
    let usersError;
    let userLocked

    before('Traer los datos',()=>{
        cy.fixture('users_ok').then((data)=>{ //llamamos los datos del archivo .json con los datos correctos
            usersOk = data //guardamos ese dato en la variable
        });

        cy.fixture('users_error').then((data)=>{ //llamamos los datos del archivo .json con los datos correctos
            usersError = data //guardamos ese dato en la variable
        });

        cy.fixture('user_locked').then((data)=>{ //llamamos los datos del archivo .json con los datos correctos
            userLocked = data //guardamos ese dato en la variable
        });
    })

    beforeEach("Iniciamos la pàgina", ()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    it("Usuario Bloqueado", ()=>{
        cy.get('[data-test="username"]').type(userLocked.username),
        cy.get('[data-test="password"]').type(userLocked.password)

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        /* ==== End Cypress Studio ==== */
    })
 })