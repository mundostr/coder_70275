/**
 * ARRAY = dato compuesto = CONJUNTO de valores
 */

const PI = 3.14;
const readings = [3, 5, 8, 23, 11, 16];
const persons = ['Carlos', 'Juana', 'Gabriela', 'María', 'Pepe'];

console.log(PI);
console.log(readings); // saco por consola el array completo

// Para acceder a los elementos de un array, utilizo un SUBINDICE.
// El SUBINDICE SIEMPRE inicia en 0
console.log(readings[4]); // Solo muestro el valor del item con subíndice 4 (11 en el ejemplo)

/**
 * CICLOS de control
 * Permiten repetir instrucciones
 * 
 * FINITOS: ciclan x cantidad de veces, indicada en la var auxiliar.
 * INFINITOS: ciclan constantemente mientras el código esté en ejecución.
 * INDEFINIDOS: ciclan mientras se cumpla determinada condición.
 */

// Ciclo FINITO
// Podemos utilizarlo para recorrer un array por ejemplo
// length nos devuelve la cantidad de items en el array
for (let x = 0; x < readings.length; x = x + 1) {
    console.log(readings[x]);
}

console.log('....');

// También podemos recorrer un array con métodos predefinidos en JS
// como forEach() o map()
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
