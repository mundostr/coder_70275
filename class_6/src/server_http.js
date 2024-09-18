/**
 * Primer servidor con módulo nativo http
 * 
 * "Escucha" en el puerto 5050 y simplemente responde
 * con un mensaje de bienvenida
 * 
 * En adelante utilizaremos otro módulo, pero esta es
 * una primer práctica de aproximación para ir comprendiendo conceptos
 */

import http from 'http';

const PORT = 5050;

const server = http.createServer((req, res) => {
    res.end('Hola Comision!!!');
});

server.listen(PORT, () => {
    console.log(`Primer server escuchando en puerto ${PORT}`);
});
