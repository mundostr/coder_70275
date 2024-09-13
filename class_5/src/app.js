/**
 * Práctica de manejo de archivos con Promesas y sintaxis async/await
 * 
 * Uso de clase UserManager
 */

import { UserManager } from './UserManager.js';


// Flujo principal
const manager1 = new UserManager('./users_manager.json');

await manager1.init(); // Verifica existencia del archivo
// await manager1.createUser({ firstName: 'Juan', lastName: 'José', age: 41, course: 'Backend' });
console.log(await manager1.getUsers());
