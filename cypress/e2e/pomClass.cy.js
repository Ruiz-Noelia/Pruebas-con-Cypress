import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe ('Saucedemo Pruebas', ()=>{
    before (()=>{
        cy.visit('/')
    })

    it('Login ok', ()=>{
        homePage.typeUsername('standard_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLoginButton()
        inventoryPage.abrirMenu()
        inventoryPage.logout()
    })
})