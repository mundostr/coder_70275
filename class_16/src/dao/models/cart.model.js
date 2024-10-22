import mongoose from 'mongoose';
import config from '../../config.js';

mongoose.pluralize(null);

const collection = config.CARTS_COLLECTION;

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: config.USERS_COLLECTION },
    products: { type: [{ _id: mongoose.Schema.Types.ObjectId, qty: Number }], required: true }
});

const model = mongoose.model(collection, schema);

export default model;
