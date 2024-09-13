/**
 * Manejo de archivos con módulo FS
 * 
 * Opción ASINCRONA con promesas
 * Una alternativa más limpia
 */

import fs from 'fs';

const TEST_FILE = './test_file_promises.txt';

const checkExistence = async (file) => {
    try {
        await fs.promises.access(file);
        return true;
    } catch (err) {
        return false;
    }
}

export const createFile = async (file, content) => {
    try {
        await fs.promises.writeFile(file, content, 'utf-8');
        console.log('Archivo creado');
        return true;
    } catch (err) {
        return false;
    }
}

const updateFile = async () => {
    try {
        const exists = await checkExistence(TEST_FILE);
        if (!exists) await createFile(TEST_FILE, 'Marca creación\n');
        await fs.promises.appendFile(TEST_FILE, 'Contenido agregado\n');
        console.log('Archivo actualizado');

        const content = await fs.promises.readFile(TEST_FILE, 'utf-8');
        console.log(content);
    } catch (err) {
        console.log(err);
    }
}


// Flujo principal
updateFile();
