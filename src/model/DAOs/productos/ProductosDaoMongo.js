//Importo Clase Contenedor para luego extender de ella
import ContenedorMongo from '../../contenedores/ContenedorMongo.js';

// Importo Model del schema 'productos' 
import productosModel from '../../models/productos.js'

//DAO que extiende de clase Contenedor
class ProductosDaoMongo extends ContenedorMongo {

    constructor() {
        super(productosModel);
    }
}

export default ProductosDaoMongo