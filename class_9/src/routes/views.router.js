import { Router } from 'express';


const router = Router();


/**
 * Este array con usuarios de prueba, es una copia de lo que hay en users.router.
 * Lógicmante lo sustituiremos luego por contenido que viene de archivo o de base de datos,
 * no quedará hardcodeado (escrito fijo) acá.
 */
const users = [
    { id: 1, firstName: 'Juan', lastName: 'Perez' },
    { id: 2, firstName: 'Carlos', lastName: 'Perren' },
    { id: 3, firstName: 'Luis', lastName: 'Gonzalez' }
];


/**
 * La estructura de endpoints para Handlebars respeta la misma base de los demás
 * paquetes de rutas, solo que en este caso, en lugar de enviar respuesta con un
 * send, utilizamos render, para que el motor de plantillas parsee la plantilla
 * antes que Express entregue el resultado.
 * 
 * Al realizar el render, indicamos qué plantilla nos interesa parsear y adjuntamos
 * un objeto con lo datos que deben reemplazarse.
 */
router.get('/', (req, res) => {
    const data = {
        firstName: 'Carlos',
        lastName: 'Perren',
        age: 49,
        email: 'idux.net@gmail.com',
        phone: '+5493492555666',
        isAdmin: true,
        users: users
    };
    
    res.status(200).render('index', data);
});

/**
 * Podemos generar tantos endpoints como haga falta, cada uno con su plantilla,
 * o incluso utilizar una variable para indicar la plantilla a renderizar.
 */
router.get('/register', (req, res) => {
    const data = {
    };
    
    // const template = 'register';
    // res.status(200).render(template, data);
    res.status(200).render('register', data);
});


export default router;
