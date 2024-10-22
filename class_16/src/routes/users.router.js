import { Router } from 'express';
import { uploader } from '../uploader.js';
import UserController from '../dao/users.controller.js';


const router = Router();
// Ya no interactuamos con el modelo en los endpoints, lo hacemos a través del controlador (manager)
const controller = new UserController();

const auth = (req, res, next) => {
    console.log('Ejecuta el middleware de autenticación de usuario');
    next();
}

router.get('/', async (req, res) => {
    const data = await controller.get();
    res.status(200).send({ error: null, data: data });
});

// router.post('/', auth, uploader.array('thumbnail', 3), async (req, res) => { // gestión de múltiples archivos = req.files
router.post('/', auth, uploader.single('thumbnail'), async (req, res) => { // gestión de archivo único = req.file
    const { firstName, lastName, email } = req.body;

    if (firstName != '' && lastName != '' && email != '') {
        const newUser = { firstName: firstName, lastName: lastName, email: email };
        const process = await controller.add(newUser);

        // Verificar resultado de process

        const socketServer = req.app.get('socketServer');
        socketServer.emit('new_user', newUser);
        
        res.status(200).send({ error: null, data: process, file: req.file });
    } else {
        res.status(400).send({ error: 'Faltan campos obligatorios', data: [] });
    }
});

router.put('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const filter = { _id: id };
    const updated = { firstName: firstName, lastName: lastName, email: email };
    const options = { new: true };

    const process = await controller.update(filter, updated, options);
    
    if (process) {
        res.status(200).send({ error: null, data: process });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});

router.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    const options = {};

    const process = await controller.delete(filter, options);
    
    if (process) {
        res.status(200).send({ error: null, data: 'Usuario borrado' });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});


export default router;
