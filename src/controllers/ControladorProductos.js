import ApiProductos from '../services/ApiProductos.js'

class ControladorProductos {

    constructor() {
        this.apiProductos = new ApiProductos()
    }

    getAllProducts = async (req, res) => {
        try {
            res.json(await this.apiProductos.getAllProducts())

        } catch (error) {
            res.status(500).json(error);
        }
    }

    getProductById = async (req, res) => {
        try {
            const id = req.params.id
            res.json(await this.apiProductos.getProductById(id))

        } catch (error) {
            res.status(500).json(error);
        }
    }

    createProduct = async (req, res) => {
        try {
            const newProd = req.body
            res.json(await this.apiProductos.createProduct(newProd))

        } catch (error) {
            res.status(500).json(error);
        }
    }

    editProductById = async (req, res) => {
        try {
            const id = req.params.id
            const newProd = req.body
            res.json(await this.apiProductos.editProductById(id, newProd))

        } catch (error) {
            res.status(500).json(error);
        }
    }

    deleteProductById = async (req, res) => {
        try {
            const id = req.params.id
            res.json(await this.apiProductos.deleteProductById(id))

        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default ControladorProductos