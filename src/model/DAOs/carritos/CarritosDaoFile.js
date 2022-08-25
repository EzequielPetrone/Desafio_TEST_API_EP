//Importo Clase Contenedor para luego extender de ella
import ContenedorFile from '../../contenedores/ContenedorFile.js';

class CarritosDaoFile extends ContenedorFile {

    constructor() {
        super(process.cwd() + '/fileDB/carritos.json');
    }
}

export default CarritosDaoFile