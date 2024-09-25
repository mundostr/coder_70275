/**
 * A partir de ahora, definiremos los endpoints por paquetes en archivos separados.
 * Por ej un archivo para rutas de manejo de usuarios, otro de productos, otro de carritos, etc.
 */

import { Router } from 'express';
import { uploader } from '../uploader.js';


const router = Router();

// Este array con usuarios de prueba, que antes estaba en app, ahora queda en users.router
const users = [
    { id: 1, firstName: 'Juan', lastName: 'Perez' },
    { id: 2, firstName: 'Carlos', lastName: 'Perren' },
    { id: 3, firstName: 'Luis', lastName: 'Gonzalez' }
];

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

/**
 * Modificamos este endpoint, insertando 2 middlewares
 * auth y uploader (que utiliza el módulo de terceros Multer)
 * 
 * Si hay un problema en el middleware auth, el flujo de la solicitud puede cortarse allí directamente (return),
 * en caso de estar todo ok, seguirá (next) al siguiente "eslabón" (uploader en este caso).
 */
router.post('/', auth, uploader.single('thumbnail'), (req, res) => {
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

// Tanto el update como el delete, tienen ahora agregado un middleware de autenticación
// Obviamente no hemos implementado la autenticación aún, simplemente inyectamos el midd.
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
