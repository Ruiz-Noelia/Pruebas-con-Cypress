const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true, //lo habilitamos para grabar pruebas y poder capturar selectores

    setupNodeEvents(on, config) {
      // implement node event listeners here

      //archivo de configuración
      
    },
  },
});
