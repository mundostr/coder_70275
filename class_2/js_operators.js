/**
 * OPERADORES EN JS
 * 
 * ARITMETICOS:
 * + (suma)
 * - (resta)
 * * (multiplicación)
 * / (división)
 * ** (potencia)
 * % (módulo) -> resto de la división
 */

const val1 = 10;
let val2 = 20;
let val3 = 0;

console.log(val1 % 2); // = 0, pq 10 / 2 = 5, resto 0
console.log(val1 % 3); // = 1, pq 10 / 3 = 3, resto 1

/**
 * DE ASIGNACION:
 * = (igual a, asigno el valor a una variable o constante por ej)
 * += (agrego a)
 * -= (resto a)
 * *= (multiplico por a)
 * /= (divido por a)
 */

// Ej asignación para acumulador
val2 += val1;
console.log(val2); // 30
// equivalente a
val2 = val2 + val1; // acumulador
console.log(val2); // 40

// Ejemplo asignación para contador
val3 = val3 + 1;
// también se puede escribir como
val3 += 1;
// o
val3++;
val3--;

console.log(val3); // En definitiva está en 2

/**
 * DE COMPARACION
 * 
 * == (igual a)
 * === (igual a, controlando también tipo)
 * != (distinto a)
 * !== (distinto a, controlando también tipo)
 * > (mayor a)
 * < (menor a)
 * >= (mayor o igual a)
 * <= (menor o igual a)
 * ? ternario (se verán ejemplos luego al repasar condiciones)
 * 
 * LOGICOS
 * 
 * && (y lógica (AND), una cosa Y la otra)
 * || (o lógica (OR), una cosa O la otra)
 * ! (no lógica (NOT), negación)
 */

const config = {
    PORT: 5000,
    SERVER: 'local',
    SECRET: 'abc123'
};

const PORT = config.PORT || 3000; // Asignación con OR lógico
console.log(PORT);

const PORT2 = config.PORT ?? 3000; // Asignación con nullish
console.log(PORT2);

/**
 * Operador spread (...)
 */
