describe('sessions en Cypress', () => {

    beforeEach(() => {
        //antes de cada prueba iniciamos la sesión
        cy.LoginSession()
    })

    it('verificamos la url', () => {
        cy.InventoryAcces() 
        cy.url().should('contain', '/inventory.html')
    });

    it('verificar título', () => {
        cy.InventoryAcces()
        cy.title().should('eq', 'Swag Labs')
    });

    it('verificar primer producto - mochila', () => {
        cy.InventoryAcces()

        cy.get('#item_4_title_link > div').contains('Sauce Labs Backpack').click()
        cy.url().should('contain', '/inventory-item.html?id=4')
        cy.asertion_text('[data-test="inventory-item-name"]', 'Sauce Labs Backpack')
        cy.get('[data-test="item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings()')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$29.99')
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
        cy.get('[data-test="remove"]').click()


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#shopping_cart_container > a > span').should('not.exist');
        /* ==== End Cypress Studio ==== */
    });


    it('verificar segundo producto - remera', () => {
        cy.InventoryAcces()

        cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Bolt T-Shirt').click()
        cy.url().should('contain', '/inventory-item.html?id=1')
        cy.asertion_text('[data-test="inventory-item-name"]', 'Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="item-sauce-labs-bolt-t-shirt-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-desc"]').should('contain', 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$15.99')
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
        cy.get('[data-test="remove"]').click()


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#shopping_cart_container > a > span').should('not.exist');
        /* ==== End Cypress Studio ==== */
    });


    it('verificar tercer producto - luz de bici', () => {
        cy.InventoryAcces()

        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Bike Light').click()
        cy.url().should('contain', '/inventory-item.html?id=0')
        cy.asertion_text('[data-test="inventory-item-name"]', 'Sauce Labs Bike Light')
        cy.get('[data-test="item-sauce-labs-bike-light-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-desc"]').should('contain', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
        cy.get('[data-test="inventory-item-price"]').should('contain', '$9.99')
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
        cy.get('[data-test="remove"]').click()


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#shopping_cart_container > a > span').should('not.exist');
        /* ==== End Cypress Studio ==== */
    });



});
