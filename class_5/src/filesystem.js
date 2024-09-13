/**
 * Manejo de archivos con módulo FS
 * 
 * Opción SINCRONA
 * 
 * write = crear (si el archivo existe, limpia el contenido (trunca))
 * read = leer
 * append = agregar
 * delete = borrar
 * 
 * En algunos casos puede interesarnos realizar una lectura síncrona (bloqueante) de algún contenido,
 * antes de seguir con cualquier otra cosa
 */

import fs from 'fs';

const TEST_FILE = './test_file_sync.txt';

console.log('INICIO');

if (fs.existsSync(TEST_FILE)) {
    fs.appendFileSync(TEST_FILE, 'Marca contenido agregado\n', 'utf-8');
    console.log('Archivo actualizado');
} else {
    fs.writeFileSync(TEST_FILE, 'Marca archivo creado\n', 'utf-8');
    console.log('Archivo creado');
}

const content = fs.readFileSync(TEST_FILE, 'utf-8');
console.log(content);

// fs.unlinkSync(TEST_FILE); // borrado del archivo

console.log('FIN');
