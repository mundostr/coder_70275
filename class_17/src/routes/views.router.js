import { Router } from 'express';
import OrderController from '../dao/orders.controller.js';


const router = Router();
const controller = new OrderController();

router.get('/orders/:pg?', async (req, res) => {
    const pg = req.params.pg || 1;
    const data = await controller.getPaginated(pg);
    
    res.status(200).render('orders', { orders: data });
});


export default router;
