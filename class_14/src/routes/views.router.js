import { Router } from 'express';
import { users } from '../config.js';


const router = Router();


router.get('/', (req, res) => {
    const data = {
        users: users
    };
    
    res.status(200).render('index', data);
});

router.get('/register', (req, res) => {
    const data = {
    };
    
    // const template = 'register';
    // res.status(200).render(template, data);
    res.status(200).render('register', data);
});

router.get('/chat', (req, res) => {
    const data = {
    };
    
    res.status(200).render('chat', data);
});


export default router;
