import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'; // importamos la clase Server de socket.io

import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';
import config from './config.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${config.DIRNAME}/views`);
app.set('view engine', 'handlebars');

app.use('/views', viewsRouter);
app.use('/api/users', usersRouter);
app.use('/static', express.static(`${config.DIRNAME}/public`));

// Asignamos la instancia de la aplicación devuelta por el listen a una constante
const httpServer = app.listen(config.PORT, () => {
    console.log(`Server activo en puerto ${config.PORT}`);
});

// Creamos instancia de SERVIDOR socket.io, pasándole como referencia la constante anterior
const socketServer = new Server(httpServer);

// Activamos un listener en el servidor de sockets, que escucha por nuevas conexiones de clientes
socketServer.on('connection', socket => {
    console.log(`Nuevo cliente conectado con id ${socket.id}`);

    /**
     * Activamos listener (suscripción) al tópico init_message
     * sobre el nuevo cliente que acaba de conectarse.
     * Cuando éste emita un mensaje bajo ese nombre,
     * el servidor recibirá notificación y ejecutará el callback asociado
     */
    socket.on('init_message', data => {
        console.log(data);
    });

    /**
     * Posibilidades de emisión (publicación) del lado del SERVIDOR
     * Un servidor socket.io tiene 3 OPCIONES de publicación de notificaciones
     */
    
    // Opción 1: socket.emit -> notifica SOLO al cliente que corresponde a ESTA INSTANCIA de conexión.
    socket.emit('welcome', `Bienvenido cliente, estás conectado con el id ${socket.id}`);

    // Opción 2: socket.broadcast.emit -> notifica a TODOS los clientes conectados, EXCEPTO el de esta instancia.
    // socket.broadcast.emit('new_client', 'Se conectó un nuevo cliente!');

    // Opción 3: socketServer.emit -> notifica a TODOS los clientes conectados, INCLUYENDO el de esta instancia.
    // socketServer.emit('new_client', 'Se conectó un nuevo cliente!');
});