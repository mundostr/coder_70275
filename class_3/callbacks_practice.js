/**
 * Práctica con callbacks
 * 
 * Generamos 4 funciones para las 4 operaciones matemáticas básicas
 * Generamos una función base (calculate), que recibirá 2 nros, y como 3er parámetro
 * un callback (una de las 4 funciones previas) según la operación que se desee realizar.
 */

const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const calculate = (n1, n2, callback) => callback(n1, n2);

console.log(calculate(3, 5, multiply));
