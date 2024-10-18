import { Router } from 'express';


const router = Router();


router.get('/register', (req, res) => {
    const data = {};
    
    // const template = 'register';
    // res.status(200).render(template, data);
    res.status(200).render('register', data);
});

router.get('/chat', (req, res) => {
    const data = {};
    
    res.status(200).render('chat', data);
});

router.get('/newproduct', (req, res) => {
    const data = {};
    
    res.status(200).render('newproduct', data);
});


export default router;
