/**
 * Creamos una pequeña clase para una gestión básica de usuarios
 * 
 * 1- Aprovechamos a repasar el concepto de propiedad estática (static)
 * 2- Utilizamos import para importar un método (createHash) desde una librería nativa (crypto)
 * 
 * * Recordar que las librerías nativas son aquellas que ya se descargan por defecto con la
 * instalación base de NodeJS, con lo cual no necesitamos descargarlas ahora, solo importarlas
 */

import { createHash } from 'crypto';

export class UserManager {
    // users al ser static pertenece A LA CLASE, NO a las instancias
    static users = [];

    constructor() {}

    hashPassword(original) {
        const hash = createHash('sha256').update(original);
        return hash.digest('hex');
    }

    createUser(data) {
        data.password = this.hashPassword(data.password);
        UserManager.users.push(data);
    }

    getUsers() {
        return UserManager.users;
    }

    validateUser(userName, password) {
        /**
         * Como un hash no es reversible, para verificar si la clave es la correcta,
         * debemos aplicar el mismo proceso de hash a la clave recibida, y comparar el resultado
         * con el hash almacenado en el array
         * 
         * find(), al igual que forEach(), map() y otros, recibe un callback que ejecuta para
         * cada elemento del array, y retorna el primero que cumpla con la condición indicada.
         * 
         * En este caso la condición es que coincidan los userName y los hash
         */
        const validation = UserManager.users.find(user => {
            return user.userName === userName && user.password === this.hashPassword(password);
        });

        if (validation === undefined) {
            console.log('Usuario o clave no válidos');
        } else {
            console.log('LOGUEADO');
        }
    }
}
