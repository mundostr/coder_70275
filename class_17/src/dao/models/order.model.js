import mongoose from 'mongoose';
import config from '../../config.js';

mongoose.pluralize(null);

const collection = config.ORDERS_COLLECTION;

/* user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: config.USERS_COLLECTION },
products: { type: [{ _id: {type: mongoose.Schema.Types.ObjectId, ref: config.PRODUCTS_COLLECTION }, qty: Number }], required: true } */
const schema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, enum: ['small', 'medium', 'large'], default: 'medium' },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    date: { type: Date, required: true }
});

const model = mongoose.model(collection, schema);

export default model;