import { Router } from 'express';
import { uploader } from '../uploader.js';
import { users } from '../config.js';


const router = Router();

const auth = (req, res, next) => {
    console.log('Ejecuta el middleware de autenticación de usuario');
    next();

    /**
     * // Simulando la autenticación
     * if (req.body.username === 'x' && req.body.pass === 'y') {
     *  next();
     * } else {
     *  return res.status(401).send({ error: 'No tiene autorización', data: [] });
     * }
     */
}

// Este endpoint queda "abierto", cualquier usuario conociendo la ruta, puede solicitarlo
router.get('/', (req, res) => {
    res.status(200).send({ error: null, data: users });
});

// router.post('/', auth, uploader.array('thumbnail', 3), (req, res) => { // gestión de múltiples archivos
router.post('/', auth, uploader.single('thumbnail'), (req, res) => { // gestión de archivo único
    const { firstName, lastName } = req.body; // desestructuramos (extraemos) las ppdades que nos interesan del body

    if (firstName != '' && lastName != '') {
        const maxId = Math.max(...users.map(element => +element.id));
        const newUser = { id: maxId + 1, firstName: firstName, lastName: lastName };
        users.push(newUser);
        res.status(200).send({ error: null, data: newUser, file: req.file });
    } else {
        res.status(400).send({ error: 'Faltan campos obligatorios', data: [] });
    }
});

router.put('/:id', auth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(element => element.id === id);
    
    if (index > -1) {
        users[index] = req.body;
        res.status(200).send({ error: null, data: users[index] });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});

router.delete('/:id', auth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(element => element.id === id);
    
    if (index > -1) {
        users.splice(index, 1);
        res.status(200).send({ error: null, data: 'Usuario borrado' });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});


export default router;
