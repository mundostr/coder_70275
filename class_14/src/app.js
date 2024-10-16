import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import mongoose from 'mongoose'; // importamos mongoose

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

const httpServer = app.listen(config.PORT, async () => {
    // Convertimos el callback en asíncrono y esperamos la conexión a la bbdd
    await mongoose.connect(config.MONGODB_URI);
    console.log(`Server activo en puerto ${config.PORT} conectado a bbdd`);
});

const socketServer = new Server(httpServer);
app.set('socketServer', socketServer);

socketServer.on('connection', socket => {
    console.log(`Nuevo cliente conectado con id ${socket.id}`);

    socket.on('init_message', data => {
        console.log(data);
    });

    // Opción 1: socket.emit -> notifica SOLO al cliente que corresponde a ESTA INSTANCIA de conexión.
    socket.emit('welcome', `Bienvenido cliente, estás conectado con el id ${socket.id}`);

    // Opción 2: socket.broadcast.emit -> notifica a TODOS los clientes conectados, EXCEPTO el de esta instancia.
    // socket.broadcast.emit('new_client', 'Se conectó un nuevo cliente!');

    // Opción 3: socketServer.emit -> notifica a TODOS los clientes conectados, INCLUYENDO el de esta instancia.
    // socketServer.emit('new_client', 'Se conectó un nuevo cliente!');
});