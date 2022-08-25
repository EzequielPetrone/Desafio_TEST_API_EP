//Importo Clase Contenedor para luego extender de ella
import ContenedorMongo from '../../contenedores/ContenedorMongo.js';

// Importo Model del schema 'productos' 
import carritosModel from '../../models/carritos.js'

//DAO que extiende de clase Contenedor
class CarritosDaoMongo extends ContenedorMongo {

    constructor() {
        super(carritosModel);
    }

    /*
    async getCartIdByUserEmail(email) {

        const result = await this.model.findOne({ userEmail: email, activo: true })

        return result ? result._id : null
    }

    async checkout(cartId) {
        const result = await this.model.findById(cartId)
        if (result.productos.length) {
            return await this.model.findByIdAndUpdate(cartId, { activo: false })
        } else {
            return null
        }
    }
    */
}

export default CarritosDaoMongo