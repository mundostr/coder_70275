import cartModel from './models/cart.model.js';
import userModel from './models/user.model.js';


class CartController {
    constructor() {}

    get = async () => {
        try {
            // return await cartModel.find().lean();
            
            /**
             * Ejemplo de populate() (cruce de datos entre colecciones).
             * Este método está disponible por defecto en Mongoose, no es necesario instalar ningún soporte extra.
             * path: indica la propiedad a popular (ver cart.model.js).
             * model: el modelo desde el cual tomar los datos.
             * select: las propiedades que nos interesa recuperar del modelo, si no lo colocamos, traerá todas.
             */
            return await cartModel
                .find()
                .populate({ path: 'user', model: userModel, select: 'email firstName lastName' })
                // No estamos limitados a popular 1 propiedad por consulta, podemos encadenar y popular varias.
                // .populate({ path: 'products._id', model: productModel, select: 'name, price' })
                .lean();
        } catch (err) {
            return err.message;
        }
    }

    getOne = async (id) => {
        try {
            // Por otro lado, podemos aplicar populate no solo al método find(), sino a otros como findOne() or findById().
            return await cartModel.finById(id).populate({ path: 'user', model: userModel }).lean();
        } catch (err) {
            return err.message;
        }
    }

    add = async (data) => {
        try {
            return await cartModel.create(data);
        } catch (err) {
            return err.message;
        }
    }

    update = async (filter, updated, options) => {
        try {
            return await cartModel.findOneAndUpdate(filter, updated, options);
        } catch (err) {
            return err.message;
        }
    }

    delete = async (filter, options) => {
        try {
            return await cartModel.findOneAndDelete(filter, options);
        } catch (err) {
            return err.message;
        }
    }
}


export default CartController;