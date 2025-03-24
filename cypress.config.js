const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/", //se define la url de base que se va a visitar en las pruebas que se hagan
    experimentalStudio: true, //lo habilitamos para grabar pruebas y poder capturar selectores
    reporter: 'cypress-mochawesome-reporter', //importamos la nueva librería para generar los reportes
    video: false, // lo dejo falso para que no me guarde videos de las pruebas que haga

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //hacemos que desde end 2 end se escuchen los eventos

      //archivo de configuración
    },
  },
});
