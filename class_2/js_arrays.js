/**
 * Array = dato compuesto = CONJUNTO de valores
 */

const PI = 3.14;
const readings = [3, 5, 8, 23, 11, 16];
const persons = ['Carlos', 'Juana', 'Gabriela', 'María', 'Pepe'];

// console.log(PI);
// console.log(readings);
// Para acceder a los elementos de un array, utilizo un SUBINDICE.
// El SUBINDICE SIEMPRE inicia en 0
// console.log(readings[4]);

// CICLOS DE CONTROL
// Ciclo FINITO
/* for (let x = 0; x < readings.length; x = x + 1) {
    console.log(readings[x]);
} */

// while () {}

console.log('....');

readings.forEach(element => {
    console.log(element);
});

const processedReadings = readings.map((element) => {
    return element ** 2;
});

console.log(readings);
console.log(processedReadings);

if (persons.includes('Pepe')) {
    console.log('Pepe ESTA');
} else {
    console.log('Pepe NO ESTA');
}

/* let isPresent = false; // Flag
persons.forEach(element => {
    if (element === 'Pepe') {
        isPresent = true;
    }
});

if (isPresent === true) {
    console.log('Pepe ESTA');
} else {
    console.log('Pepe NO ESTA');
} */