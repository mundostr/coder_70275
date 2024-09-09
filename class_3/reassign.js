/**
 * Este ejemplo plantea la necesidad de realizar las 4 operaciones aritméticas básicas,
 * pero mostrando 3 alternativas de armado de código, que terminan arrojando los mismos
 * resultados, aunque con una organización lógica distinta, apareciendo la variante de
 * REASIGNACION de una función.
 */

// Opción 1: función capaz de realizar las 4 operaciones, utilizando condiciones
const calculate1 = (op, val1, val2) => {
    let result = 0;

    if (op === 'add') result = val1 + val2;
    else if (op === 'subtract') result = val1 - val2;
    else if (op === 'multiply') result = val1 * val2;
    else result = val1 / val2;

    return result;
}

console.log(calculate1('divide', 8, 8));


// Opción 2: funciones individuales para cada operación y
// función general que llama a una u otra.
// Esta es la misma solución que se usó en callbacks_practice.js
const add = (val1, val2) => val1 + val2;
const subtract = (val1, val2) => val1 - val2;
const multiply = (val1, val2) => val1 * val2;
const divide = (val1, val2) => val1 / val2;

const calculate2 = (fn, val1, val2) => fn(val1, val2);

console.log(calculate2(divide, 8, 8));


// Opción 3: función REASIGNABLE
let calculate3 = add; // calculate3 comienza siendo la función add
console.log(calculate3(8, 8));

calculate3 = divide; // pero podemos reasignarle divide
console.log(calculate3(8, 8));
