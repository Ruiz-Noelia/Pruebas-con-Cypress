/// <reference types = "cypress" /> 
import "cypress-real-events"; //imprtamos la librerìa donde la vaos a usar

//describimos la suite de pruebas
describe("The internet heroku app", ()=>{
    it("hovers", ()=>{
        cy.visit('https://the-internet.herokuapp.com/hovers') //vamos a trabajar con simulaciòn de disparar eventos desde cypress

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(3) > img').realHover();
        cy.get(':nth-child(3) > .figcaption > h5').realClick();
        /* ==== End Cypress Studio ==== */
    })
})