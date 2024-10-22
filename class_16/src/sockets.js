import { Server } from 'socket.io';

const initSocket = (httpServer) => {
    const messages = [];
    
    const io = new Server(httpServer);
    console.log('Servicio socket.io activo');

    io.on('connection', client => {
        console.log(`Cliente conectado, id ${client.id} desde ${client.handshake.address}`);

        // Suscripción al tópico new_user_data (que envía un cliente cuando se conecta)
        client.on('new_user_data', data => {
            // Envía a ESE cliente la lista actual de mensajes
            client.emit('current_messages', messages);
            // y a TODOS LOS DEMÁS los datos del nuevo usuario que acaba de conectarse
            client.broadcast.emit('new_user', data);
        });

        // Suscripción al tópico new_own_msg (que genera cualquier cliente al enviar un texto nuevo de chat)
        client.on('new_own_msg', data => {
            messages.push(data);
            // Reenvía mensaje a TODOS los clientes conectados, INCLUYENDO el que mandó el msj original
            io.emit('new_general_msg', data);
        });
        
        client.on('disconnect', reason => {
            console.log(reason);
        });
    });

    return io;
}

export default initSocket;
