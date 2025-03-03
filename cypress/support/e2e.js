// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './acciones.js' //importo el archivo que cree para los nuevos comandos para poder usarlo dentro de cualquier archivo de Cypress
import '../plugins/index.js' //se usa el plugin para los errores de sauceDemo - traìdo de repo
