import mongoose from 'mongoose';
import config from '../../config.js';

mongoose.pluralize(null);

const collection = config.USERS_COLLECTION;

const schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const model = mongoose.model(collection, schema);

export default model;
