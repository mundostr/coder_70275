/**
 * Utilizamos import para importar la clase que hemos creado en módulo separado,
 * y crear instancias de ella.
 * 
 * También vemos el uso de un módulo de terceros (moment), que se realiza exactamente
 * de la misma manera que un módulo propio o nativo, la única diferencia es que en este
 * caso debemos previamente instalar el módulo en nuestro proyecto:
 * 
 * npm install moment
 */

// IMPORTANTE!!!: para evitar problemas, agregar SIEMPRE la extensión cuando se importen módulos propios
import { UserManager } from './UserManager.js';
import moment from 'moment';


const manager1 = new UserManager();
const CURRENT_DATE = moment();
const BIRTH_DATE = moment('1980-01-01 16:30:00');

manager1.createUser({ firstName: 'Carlos', lastName: 'Perren', userName: 'cperren', password: 'abc123' })
console.log(manager1.getUsers());


if (CURRENT_DATE.isValid() && BIRTH_DATE.isValid()) {
    const daysDiff = CURRENT_DATE.diff(BIRTH_DATE, 'days');
    const yearsDiff = CURRENT_DATE.diff(BIRTH_DATE, 'years');
    console.log(`Días vividos: ${daysDiff}`);
    console.log(`Años vividos: ${yearsDiff}`);
} else {
    console.log('Formato no válido de fechas');
}
