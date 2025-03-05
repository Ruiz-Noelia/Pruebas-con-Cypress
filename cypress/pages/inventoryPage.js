class inventoryPage {
    elements = {
        menu: () => cy.get(".bm-burger-button > button"),
        logout: () => cy.get("#logout_sidebar_link"),
        page_title: () => cy.get("#inventory_filter_container > div"),
        icon_cart: () => cy.get("#shopping_cart_container > a > svg"),
        icon_add: () => cy.get("fa-layers-counter shopping_cart_badge"),

        product: {
            img: () => cy.get(".inventory_item_img"),
            prod_title: () => cy.get(".inventory_item_name"),
            price: () => cy.get(".inventory_item_price"),
            btn_add: () => cy.get(".btn_primary btn_inventory"),
            //btn_remove: ()=> cy.get("btn_secondary btn_inventory")
        }
    }
}