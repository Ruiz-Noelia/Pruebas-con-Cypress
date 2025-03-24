const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/", //se define la url de base que se va a visitar en las pruebas que se hagan
    experimentalStudio:true, //lo habilitamos para grabar pruebas y poder capturar selectores

    setupNodeEvents(on, config) {
      // implement node event listeners here

      //archivo de configuración
    },
  },
});
