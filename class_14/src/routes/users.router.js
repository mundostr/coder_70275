import { Router } from 'express';
import { uploader } from '../uploader.js';
// Importamos el modelo de usuario, en adelante TODAS las consultas relacionadas a usuarios
// serán hechas a través de este modelo
import userModel from '../dao/models/user.model.js';


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

/**
 * Observar los 4 endpoints del CRUD.
 * Utilizamos la notación de puntos desde el objeto userModel
 * 
 * GET: userModel.find().lean() -> lean permite "limpiar" la consulta y obtener un objeto plano Javascript (POJO)
 * POST: userModel.create()
 * PUT: userModel.findOneAndUpdate()
 * DELETE: userModel.findOneAndDelete()
 */
router.get('/', async (req, res) => {
    const data = await userModel.find().lean();
    res.status(200).send({ error: null, data: data });
});

// router.post('/', auth, uploader.array('thumbnail', 3), (req, res) => { // gestión de múltiples archivos
router.post('/', auth, uploader.single('thumbnail'), async (req, res) => { // gestión de archivo único
    const { firstName, lastName, email } = req.body;

    if (firstName != '' && lastName != '' && email != '') {
        const newUser = { firstName: firstName, lastName: lastName, email: email };
        const process = await userModel.create(newUser);

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

    const process = await userModel.findOneAndUpdate(filter, updated, options);
    
    if (process) {
        res.status(200).send({ error: null, data: process });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});

router.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };

    const process = await userModel.findOneAndDelete(filter);
    
    if (process) {
        res.status(200).send({ error: null, data: 'Usuario borrado' });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});


export default router;
