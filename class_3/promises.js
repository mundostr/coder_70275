/**
 * PROMESA: compromiso a FUTURO
 * 
 * Es un mecanismo que nos permite manejar solicitudes de forma asíncrona, cuando
 * debemos gestionar contenidos que no están disponibles de inmediato.
 * 
 * Hay casos muy habituales:
 * 
 * 1) Solicitud remota de contenidos (a otro servidor)
 * 2) Consultas a bases de datos
 * 3) Manejo de archivos a disco
 * 
 * Estas operaciones no se ejecutan de forma inmediata, por naturaleza tardan un
 * pequeño tiempo. A través del mecanismo de PROMESAS, podemos disparar la solicitud
 * y continuar el flujo principal de código con otras tareas.
 * 
 * Una promesa puede RESOLVERSE FAVORABLEMENTE (resolve) o SER RECHAZADA (reject).
 */

const divide = (val, divider) => {
    /* return val / divider; */
    
    return new Promise((resolve, reject) => {
        if (divider === 0) reject('ERROR: división por 0!');
        setTimeout(() => {
            resolve(val / divider);
        }, 3000);
    });
}

/* const result = divide(10, 2); */
/* divide(10, 5)
.then((result) => {
    console.log('Promesa RESUELTA');
    console.log(result);
})
.catch((err) => {
    console.log('Promesa RECHAZADA');
    console.log(err);
}) */
/* .finally(() => {
    console.log('Este bloque se ejecuta SIEMPRE');
}) */

let result = 0;

const asyncTest = async () => {
    try {
        result += await divide(10, 5);
        console.log(`Resultado de la PROMESA: ${result}`);
    } catch (err) {
        console.log(err);
    }
}


// Flujo principal de código
console.log('INICIO');
result = result + 5;
asyncTest();
console.log(result);
console.log('FIN');
