# DESAFIO: TESTING API REST PRODUCTOS
## EZEQUIEL PETRONE

## Comentarios entregable actual:

- Aproveché este desafio para reescribir las diferentes capas del server según lo último que estuvimos viendo. Lo hice porque hasta acá sólo manejaba get y post de productos a través de Socket.io y eso no me permitía hacer un testeo completo de todos los endpoints.

- Puse foco en la api restful de productos del lado del backend. Dejé de lado todo lo relacionado con authenticación y frontend, como habilitó el profe.

- En test/productos.test.js están seteados los tests utilizando MOCHA, SUPERTEST y CHAI. Entiendo que el código me quedó bastante contemplativo.

- Omití hacer pruebas manuales con Axios dado que el profe dijo que prefería que hagamos foco en la segunda parte de la consigna.

- Lo que hice fue primero levantar el server con TIPO_PERSISTENCIA = MONGO y en paralelo ejecuté 'npm test'. Los resultados de los tests se pueden ver en el screenshot test/test_startMongo.PNG

Afortunadamente pasaron exitosamente los 13 tests implementados.

- Luego levanté el server con TIPO_PERSISTENCIA = FILE y lanzé el testing. Los resultados de los tests se pueden ver en el screenshot test/test_startFile.PNG

En este caso pasaron exitosamente 12 de los 13 tests implementados. Me sirvió para corregir un detalle de la clase ContenedorFile.

Luego de ese fix, pasaron exitosamente los 13.