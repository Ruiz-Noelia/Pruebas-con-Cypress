describe('template spec', () => { //describe es la suite
  it('passes', () => { //nombre de la prueba
    cy.visit('https://36dev.bimtrazer.com') //es el comando que va a ejecutar
  })
})

//SEGUNDA CLASE

  // Los hooks son funciones que permiten ejecutar el código antes o después de ciertas pruebas

  //son útiles para configuraciones iniciales o limpieza después de pruebas
  //un ejemplo es el before, que se ejecuta una sola vez antes de la o las pruebas
  //el before each se va a ejecutar una vez antes de cada prueba
  //after se ejecuta una vez que se terminan todas las pruebas
  //after each se ejecuta luego de cada prueba

  describe("nombre del test"), ()=>{
    "lo que se va a ejecutar"
  }

  describe("nombre del test", ()=> {
    before
    beforeEach

    it("nombre o descripción", function() {})
    it("nombre o descripción", function() {})
    it("nombre o descripción", function() {})
    it("nombre o descripción", function() {})

    after
    afterEach 
  })

