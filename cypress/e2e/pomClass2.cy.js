describe ('Saucedemo Pruebas', ()=>{

    let usuariosOk;

    before (()=>{
        cy.visit('/');
        cy.fixture('/users_ok.json').then((data)=>{usuariosOk = data});
    })

    it('Login ok', ()=>{
        usuariosOk.forEach(usuario => {
            cy.loginOkPOM(usuario.username, usuario.password)
        });
        
    })
})