import mongoose from 'mongoose';
import config from '../../config.js';
import userModel from './user.model.js';

mongoose.pluralize(null);

const collection = config.CARTS_COLLECTION;

/**
 * ref nos permite activar referencias para poder realizar populate() en las consultas.
 * En este caso la propiedad user cruza referencias con la colección users, y
 * products con la products (lógicamente no tendrían por qué coincidir los nombres).
 */
const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: config.USERS_COLLECTION },
    products: { type: [{ _id: {type: mongoose.Schema.Types.ObjectId, ref: config.PRODUCTS_COLLECTION }, qty: Number }], required: true }
});

/**
 * Si preferimos limpiar las consultas en el controlador (manager), podemos
 * activar el populate() automático acá, aprovechando el middleware pre().
 * 
 * En este caso, cada vez que una consulta a carts involucre un método find(),
 * ejecutará el populate() de la propiedad user. Podríamos encadenar otras.
 */
/* schema.pre('find', function () {
    this.populate({ path: 'user', model: userModel, select: 'email firstName lastName' })
}); */

const model = mongoose.model(collection, schema);

export default model;
