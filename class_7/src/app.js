import express from 'express';


const PORT = 5050;
const app = express();
// Atención!, insertar estas 2 líneas de configuración para
// correcta interpretación de datos complejos en solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Array de prueba p/ simular contenidos con los que trabajar
const users = [
    { id: 1, firstName: 'Juan', lastName: 'Perez' },
    { id: 2, firstName: 'Carlos', lastName: 'Perren' },
    { id: 3, firstName: 'Luis', lastName: 'Gonzalez' }
];


/**
 * CRUD -> Las 4 operaciones básicas sobre datos
 * CRUD -> Create (Crear), Read (Leer), Update (Actualizar), Delete (Eliminar)
 */
// get = read
app.get('/api/users', (req, res) => {
    res.status(200).send({ error: null, data: users });
});

// post = create
app.post('/api/users', (req, res) => {
    if (req.body.hasOwnProperty('firstName') && req.body.hasOwnProperty('lastName')) {
        // Math.max nos devuelve el valor máximo de una LISTA
        // Aprovechamos el spread (...) para desestructurar el array devuelto por map
        const maxId = Math.max(...users.map(element => +element.id));
        const newUser = { id: maxId + 1, firstName: req.body.firstName, lastName: req.body.lastName };
        users.push(newUser);
        res.status(200).send({ error: null, data: newUser });
    } else {
        res.status(400).send({ error: 'Faltan campos obligatorios', data: [] });
    }
});

// put / patch = update
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(element => element.id === id);
    
    if (index > -1) {
        // Atención!!!, esta es una simplificación, NUNCA utilizaremos el
        // body sin controlarlo previamente.
        users[index] = req.body;
        res.status(200).send({ error: null, data: users[index] });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});

//  delete = delete
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(element => element.id === id);
    
    if (index > -1) {
        users.splice(index, 1);
        res.status(200).send({ error: null, data: 'Usuario borrado' });
    } else {
        res.status(404).send({ error: 'No se encuentra el usuario', data: [] });
    }
});


app.listen(PORT, () => {
    console.log(`Server activo en puerto ${PORT}`);
});
