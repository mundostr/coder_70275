import { Router } from 'express';
import OrderController from '../dao/orders.controller.js';


const router = Router();
const controller = new OrderController();

router.get('/orders', async (req, res) => {
    const data = await controller.get();
    
    res.status(200).render('orders', { orders: data });
});


export default router;
