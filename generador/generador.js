import { faker } from '@faker-js/faker';
faker.locale = 'es'

const getProduct = () => {
    return {
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        codigo: faker.random.alphaNumeric(5),
        thumbnail: faker.image.imageUrl(),
        precio: parseFloat(faker.commerce.price()),
        stock: parseInt(faker.random.numeric(4))
    }
}

const getErrorProduct = () => {
    return {
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        code: faker.random.alphaNumeric(5),
        thumbnail: faker.image.imageUrl(),
        precio: parseFloat(faker.commerce.price()),
        stock: faker.commerce.productName()
    }
}

export { getProduct, getErrorProduct }