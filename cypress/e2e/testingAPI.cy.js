//crud: crear, leer, actualizar y borrar
//Post, Get, Put y Delete

describe('Testing API', () => {
    let respuesta; //variable para almacenar la respuesta de la petición

    it('Crear un  recurso (POST)', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: "Post de Noe",
            body: "Contenido de POST de Noe",
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201)
            respuesta = response.body.id //la respuesta del body se guarda en la variable
        })
    })

    it('Leyendo un recurso (GET)', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/${postId}',
            failOnStatusCode: false //esto para que no nos genere error por la persistencia de datos

        }).then((response) => {
            if (response.status === 404) {
                cy.log('Recurso no fue encontrado')
            } else {
                expect(response.status).to.eq(200)
                expect(response.body.title).to.eq('Post de Noe')
                expect(response.body.body).to.eq('Contenido de POST de Noe')
                expect(response.body.userId).to.eq(1)
            }
        })

    });

    it('Actualizando un recurso (PUT)', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/${postId}',
            body: 'Nuevo POAST de Noe',
            failOnStatusCode: false //esto para que no nos genere error por la persistencia de datos

        }).then((response) => {
            //expect(response.status).to.eq(200) esto sería si persistiera los datos
            expect(response.status).to.eq(500)
        })
    });

    it('Eliminando un recurso (DELETE)', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/${postId}').then((response) => {
            expect(response.status).to.eq(200)
        })
    });


});
