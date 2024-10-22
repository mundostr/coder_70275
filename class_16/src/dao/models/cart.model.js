import mongoose from 'mongoose';
import config from '../../config.js';

mongoose.pluralize(null);

const collection = config.CARTS_COLLECTION;

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: config.USERS_COLLECTION },
    products: []
});

const model = mongoose.model(collection, schema);

export default model;
