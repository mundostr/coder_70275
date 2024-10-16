/**
 * Creamos nuestro primer modelo de Mongoose
 * 
 * Un modelo permite especificar la estructura de datos que manejará determinada colección,
 * cada vez que enviemos una consulta a la bbdd que tenga que ver con esa colección, lo
 * haremos a través de su modelo.
 */

import mongoose from 'mongoose';

// Anulamos comportamiento de renombre por defecto de colecciones
mongoose.pluralize(null);

// Indicamos nombre (verificar que coincida con la que deseamos usar en la bbdd),
// si no existe, Mongoose la crea.
const collection = 'users';

// Generamos esquema, acá colocaremos la estructura de datos que nos interesa manejar
const schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

// Generamos modelo
const model = mongoose.model(collection, schema);

export default model;
