/**
 * Práctica de manejo de archivos con Promesas y sintaxis async/await
 * 
 * Creación de clase UserManager para CRUD básico de usuarios
 */

import fs from 'fs';

export class UserManager {
    constructor(file) {
        this.file = file;
    }

    async init() {
        try {
            // Si el archivo existe, los permisos de acceso podrán leerse y la promesa se resolverá (resolve)
            // No tenemos que hacer nada.
            const exists = await fs.promises.access(this.file);
            console.log('El archivo existe');
        } catch (err) {
            // Si no existe, se rechazará (reject)
            // Creamos el archivo y lo inicializamos con un array vacío
            console.log('El archivo NO existe');
            await fs.promises.writeFile(this.file, JSON.stringify([]));
        }
    }

    async #readUsersFile() {
        const users = await fs.promises.readFile(this.file, 'utf-8');
        // Importante utilizar JSON.parse para convertir el contenido de texto del archivo
        // en un objeto standard javascript utilizable
        return JSON.parse(users);
    }

    async createUser(data) {
        // Recupera el array de users desde archivo, le agrega la nueva data y actualiza
        const users = await this.#readUsersFile();
        users.push(data);
        // Importante utilizar JSON.stringify para convertir el objeto en versión texto
        // almacenable en el archivo
        await fs.promises.writeFile(this.file, JSON.stringify(users));
        console.log('Usuario agregado');
    }

    async getUsers() {
        return await this.#readUsersFile();
    }
}
