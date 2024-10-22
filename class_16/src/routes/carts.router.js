import { Router } from 'express';
import CartController from '../dao/carts.controller.js';
// import { auth } from './users.router.js';


const router = Router();
const controller = new CartController();

router.get('/', async (req, res) => {
    const data = await controller.get();
    res.status(200).send({ error: null, data: data });
});


export default router;