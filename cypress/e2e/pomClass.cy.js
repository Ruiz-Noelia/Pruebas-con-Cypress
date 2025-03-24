import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe ('Saucedemo Pruebas', ()=>{

    let usuariosOk;

    before (()=>{
        cy.visit('/');
        cy.fixture('/users_ok.json').then((data)=>{usuariosOk = data});
    })

    it('Login ok', ()=>{
        usuariosOk.forEach(usuario => {
        homePage.typeUsername(usuario.username)
        homePage.typePassword(usuario.password)
        homePage.clickLoginButton()
        inventoryPage.abrirMenu()
        inventoryPage.logout()
        });
        
    })
})