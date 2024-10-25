import orderModel from './models/order.model.js';
import config from '../config.js';


class OrderController {
    constructor() {}

    get = async () => {
        try {
            return await orderModel.find().lean();
        } catch (err) {
            return err.message;
        }
    }

    getPaginated = async (pg) => {
        try {
            return await orderModel.paginate({}, { limit: config.ITEMS_PER_PAGE, page: pg, lean: true });
        } catch (err) {
            return err.message;
        }
    }

    add = async (data) => {
        try {
            return await orderModel.create(data);
        } catch (err) {
            return err.message;
        }
    }

    update = async (filter, updated, options) => {
        try {
            return await orderModel.findOneAndUpdate(filter, updated, options);
        } catch (err) {
            return err.message;
        }
    }

    delete = async (filter, options) => {
        try {
            return await orderModel.findOneAndDelete(filter, options);
        } catch (err) {
            return err.message;
        }
    }

    stats = async (size) => {
        try {
            return await orderModel.aggregate([
                { $match: { size: size } }, // stage 1
                { $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } } }, // stage 2
                { $sort: { totalQuantity: -1 } } // stage 3, sort -> 1: asc, -1: desc

                /**
                 * Práctica con students (ver slides)
                 * firstName (String), lastName (String), email (String), gender (M/F), grade (Number), group (String).
                 * 
                 * Agrupar por calificación, de mejor a peor
                 * { $group: { _id: '$grade', ranking: { $push: $$ROOT } } }
                 * { $sort: { grade: -1 } }
                 * 
                 * Agrupados por grupo
                 * { $group: { _id: '$group' } }
                 * 
                 * Promedio estudiantes grupo 1B
                 * { $match: { group: '1B' } }
                 * { $group: { _id: '$group', average: { $avg: '$grade' } } }
                 * 
                 * Promedio general
                 * { $group: { _id: '$group', average: { $avg: '$grade' } } }
                 * 
                 * Promedio mujeres
                 * { $match: { gender: 'F' } }
                 * { $group: { _id: '$group', average: { $avg: '$grade' } } }
                 */
            ]);
        } catch (err) {
            return err.message;
        }
    }
}


export default OrderController;