import cartModel from './models/cart.model.js';


class CartController {
    constructor() {}

    get = async () => {
        try {
            return await cartModel.find().lean();
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