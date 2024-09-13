/**
 * Manejo de archivos con módulo FS
 * 
 * Opción ASINCRONA con callbacks
 * Es funcional pero debemos tener cuidado de no anidar demasiados callbacks (callbacks hell),
 * ya que el código se vuelve incómodo de leer y mantener.
 */

import fs from 'fs';

const TEST_FILE = './test_file_callbacks.txt';

console.log('INICIO');

fs.writeFile(TEST_FILE, 'Marca archivo creado\n', 'utf-8', (err) => {
    /* if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    } */

    if (err) return console.log(err);
    console.log('Archivo creado');
    
    fs.appendFile(TEST_FILE, 'Marca de contenido agregado\n', 'utf-8', (err) => {
        if (err) return console.log(err);
    
        console.log('Archivo actualizado');
    });
});


console.log('FIN');
