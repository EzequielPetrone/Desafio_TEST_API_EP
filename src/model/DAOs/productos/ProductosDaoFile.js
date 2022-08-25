//Importo Clase Contenedor para luego extender de ella
import ContenedorFile from '../../contenedores/ContenedorFile.js';

class ProductosDaoFile extends ContenedorFile {

    constructor() {
        super(process.cwd() + '/fileDB/productos.json');
    }
}

export default ProductosDaoFile