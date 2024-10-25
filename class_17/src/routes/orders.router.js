import { Router } from 'express';
import OrderController from '../dao/orders.controller.js';


const router = Router();
const controller = new OrderController();

router.get('/', async (req, res) => {
    const data = await controller.get();
    res.status(200).send({ error: null, data: data });
});

router.get('/paginated/:pg?', async (req, res) => {
    const pg = req.params.pg || 1;
    const data = await controller.getPaginated(pg);
    res.status(200).send({ error: null, data: data });
});

router.get('/stats/:size?', async (req, res) => { // ? = opcional
    const size = req.params.size || 'medium';
    const data = await controller.stats(size);
    res.status(200).send({ error: null, data: data });
});


export default router;