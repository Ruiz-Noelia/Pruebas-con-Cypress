describe("Lofgin correcto Saucedemo", ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it("Login correcto", ()=>{
        cy.loginOk('standard_user', 'secret_sauce')      
        cy.asertion_text('.product_label', 'Products');
        cy.logOut();
    })
})      