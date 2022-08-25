import { PORT } from "../src/config/config.js";
import supertest from "supertest";
const request = supertest('http://localhost:' + PORT)

import chai from "chai"
const expect = chai.expect

import { getProduct, getErrorProduct } from "../generador/generador.js"

describe('Lote de pruebas sobre api/productos', () => {

    let idAux;
    
    describe('lote de Request exitosos', () => {

        let lengthAux;

        it('prueba sobre el endpoint get (all)', async () => {

            let response = await request.get('/api/productos')

            expect(response.status).to.eql(200)

            expect(Array.isArray(response.body)).to.eql(true)

            lengthAux = response.body.length
        })

        it('prueba sobre el endpoint post (new product)', async () => {

            const prod = getProduct()

            let response = await request.post('/api/productos').send(prod)

            expect(response.status).to.eql(200)

            expect(response.body).to.include.keys("id", "nombre", "descripcion", "codigo", "thumbnail", "precio", "stock", "timeStamp")
            expect(response.body.nombre).to.eql(prod.nombre)
            expect(response.body.descripcion).to.eql(prod.descripcion)
            expect(response.body.codigo).to.eql(prod.codigo)
            expect(response.body.thumbnail).to.eql(prod.thumbnail)
            expect(response.body.precio).to.eql(prod.precio)
            expect(response.body.stock).to.eql(prod.stock)

            idAux = response.body.id
        })

        it('valido tener un elemento más en el listado de productos', async () => {

            let response = await request.get('/api/productos')

            expect(response.body.length).to.eql(lengthAux + 1)
        })

        it('prueba sobre el endpoint get (by Id)', async () => {

            const id = idAux

            let response = await request.get('/api/productos/' + id)

            expect(response.status).to.eql(200)

            expect(response.body).to.include.keys("id", "nombre", "descripcion", "codigo", "thumbnail", "precio", "stock", "timeStamp")

            expect(response.body.id).to.eql(id)
        })

        it('prueba sobre el endpoint put (by Id)', async () => {

            const id = idAux
            const prod = getProduct()

            let response = await request.put('/api/productos/' + id).send(prod)

            expect(response.status).to.eql(200)

            expect(response.body).to.include.keys("id", "nombre", "descripcion", "codigo", "thumbnail", "precio", "stock", "timeStamp")
            expect(response.body.nombre).to.eql(prod.nombre)
            expect(response.body.descripcion).to.eql(prod.descripcion)
            expect(response.body.codigo).to.eql(prod.codigo)
            expect(response.body.thumbnail).to.eql(prod.thumbnail)
            expect(response.body.precio).to.eql(prod.precio)
            expect(response.body.stock).to.eql(prod.stock)

            expect(response.body.id).to.eql(id)
        })

        it('prueba sobre el endpoint delete (by Id)', async () => {

            const id = idAux

            let response = await request.delete('/api/productos/' + id)

            expect(response.status).to.eql(200)

            expect(response.body.id).to.eql(id)
        })

        it('valido tener largo original del listado de productos', async () => {

            let response = await request.get('/api/productos')

            expect(response.body.length).to.eql(lengthAux)
        })
    })

    describe('lote de Request fallidos', () => {

        it('prueba sobre el método get (by id) pasando un id incorrecto', async () => {

            const id = 'lala'

            let response = await request.get('/api/productos/' + id)

            expect(response.status).to.eql(500)

            expect(response.body).to.eql({ errCode: -3, errDescription: `Producto con id ${id} NO encontrado` })
        })

        it('prueba sobre el método post (new product) pasando un body incorrecto', async () => {

            const prod = getErrorProduct()

            let response = await request.post('/api/productos').send(prod)

            expect(response.status).to.eql(500)

            expect(response.body).to.eql({ errCode: -5, errDescription: 'Bad Product Body. Estructura esperada: {nombre, descripcion, codigo, thumbnail, precio, stock}' })
        })

        it('prueba sobre el método put (by id) pasando un id incorrecto', async () => {

            const id = 'lala'

            const prod = getProduct()

            let response = await request.put('/api/productos/' + id).send(prod)

            expect(response.status).to.eql(500)
            
            expect(response.body).to.eql({ errCode: -6, errDescription: `No se pudo editar producto con id ${id}` })
        })

        it('prueba sobre el método put (by id) pasando un body incorrecto', async () => {

            const id = idAux

            const prod = getErrorProduct()

            let response = await request.put('/api/productos/' + id).send(prod)

            expect(response.status).to.eql(500)

            expect(response.body).to.eql({ errCode: -5, errDescription: 'Bad Product Body. Estructura esperada: {nombre, descripcion, codigo, thumbnail, precio, stock}' })
        })

        it('prueba sobre el método delete (by id) pasando un id incorrecto', async () => {

            const id = 'lala'

            let response = await request.delete('/api/productos/' + id)

            expect(response.status).to.eql(500)
            
            expect(response.body).to.eql({ errCode: -6, errDescription: `No se pudo eliminar producto con id ${id}` })
        })

        it('prueba sobre una ruta no implementada', async () => {

            let response = await request.get('/api/productos2')

            expect(response.status).to.eql(404)
        })
    })
})
