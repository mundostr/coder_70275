/**
 * Javascript, como cualquier lenguaje, cuenta con tipos de datos primitivos y compuestos.
 * 
 * En los primitivos tenemos números (number), cadenas de caracteres (string),
 * booleanos (boolean = true o false), null (valor nulo) o undefined (sin definir).
 * 
 * En los compuestos, matrices (array) y objetos (object), que contienen CONJUNTOS de datos.
 * 
 * Definimos una VARIABLE con let, de acuerdo al lugar donde lo hagamos, podrá ser global
 * (accesible desde cualquier parte del código) o local (accesible solo en el bloque de código
 * donde fue definida). Por supuesto, como lo indica su nombre, PODREMOS MODIFICAR SU VALOR.
 * 
 * Definimos una CONSTANTE con const, idéntica situación respecto al caso anterior, pero
 * NO PODREMOS ALTERAR SU VALOR.
 */

const PI = 3.14;
let value = 2;
console.log(PI * value); // Mostrará 6.28

// PI = 4; // Esta asignación fallará, porque PI es const
value = 3;
console.log(PI * value); // Mostrará 9.42
