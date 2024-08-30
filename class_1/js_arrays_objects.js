/**
 * Un array representa un CONJUNTO de datos
 */

// Constantes o variables primitivas
const name = 'Carlos'; // string
const initialValue = 22.5; // number
const active = true; // boolean (true o false)
let test; // any es undefined
const PI = 3.141592654;

// Constantes o variables compuestas
const values = [3, 5, 8, 23, 16]; // Array

const personalData = {
    name: 'Carlos',
    age: 49,
    value: 1000000,
    active: false
} // Object

console.log(values);
console.log(personalData);
personalData.active = true;
console.log(personalData);
console.log(test);
test = 5;
console.log(test);
console.log('SISTEMA INICIADO');
