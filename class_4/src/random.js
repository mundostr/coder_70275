/**
 * Función generadora de números al azar dentro de un rango.
 * Para practicar el uso de Promesas, convertimos la función a asíncrona
 * y retornamos un new Promise con el nro random, en lugar de hacerlo directo.
 * 
 * El setTimeout nos permite esperar (1000 milisegundos = 1 seg) para simular
 * un proceso que tarda cierto tiempo en ejecutarse.
 * 
 * Recordemos que este es el objetivo base de las promesas, poder lidiar con
 * procesos que tardan de forma asíncrona, para que la ejecución principal de
 * código pueda continuar activando otras tareas.
 */


const MIN = 1;
const MAX = 20;
const QTY = 10;

const generateRandomInt = async (min, max) => {
    // return Math.floor(Math.random() * max) + min;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * max) + min);
        }, 1000);
    });
}

/**
 * Si eligiéramos procesar el ciclo dentro de una función,
 * SI deberíamos agregar el modificador async para convertir
 * explícitamente la función en asíncrona
 */
/* const generateNumbersPackage = async () => {
    for (let i = 0; i < QTY; i++) {
        const number = await generateRandomInt(MIN, MAX);
        console.log(number);
    }
} */

// Flujo principal
for (let i = 0; i < QTY; i++) {
    // Recordar agregar SIEMPRE el await para esperar el resultado de la promesa
    // Aquí no aparece async, pues estamos en el ámbito principal del módulo, que por
    // defecto ya opera de forma asíncrona
    const number = await generateRandomInt(MIN, MAX);
    console.log(number);
}
// generateNumbersPackage();
