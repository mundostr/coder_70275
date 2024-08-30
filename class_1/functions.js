/**
 * Una función es un bloque reusable de instrucciones
 */

const PI = 3.14;

// OPCION 1: declaración de función con palabra reservada function
function initiate() {
    const K = 23;
    console.log(PI);
    console.log(K);
}

// SI tiene salida pero NO retorna valor
function salute(id, message) {
    console.log('**********');
    console.log(id);
    console.log(message);
    console.log('**********');
}

// NO tiene una salida, SI retorna un cálculo
function calculate(value1, value2) {
    return value1 + value2;
}

// OPCION 2: declaración de función mediante constante y formato tipo arrow
const calculate2 = (value1, value2) => {
    return value1 + value2;
}

// Flujo principal
// console.log(PI);
// initiate();
// console.log('Segunda invocación');
// initiate();
// salute(16, 'Ahora quiero otro mensaje');
// console.log('PROCESO FINALIZADO');
console.log(calculate(2, 3));
console.log(calculate2(2, 3));