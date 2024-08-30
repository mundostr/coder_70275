/**
 * Un array representa un CONJUNTO de datos, se trata de un tipo de dato compuesto.
 * 
 * Aparece el concepto de MUTABILIDAD, es decir, más allá de declarar un array como
 * constante, los elementos que contiene son MUTABLES, y por lo tanto podremos modificarlos
 * 
 * Para enmarcar el conjunto utilizamos CORCHETES, y para acceder a los elementos
 * dentro del array, un SUBINDICE, que SIEMPRE comienza desde 0.
 * 
 * Existen muchos métodos predefinidos para manejar arrays, veremos algunos en este repaso
 * e iremos agregando otros a medida que avancemos.
 * 
 * Aunque normalmente nos manejaremos con arrays uniformes, en Javascript un array PUEDE
 * contener datos de diferentes tipos
 */

const values = [3, 5, 8, 23]; // Este es un array numérico que contiene 4 elementos

console.log(values); // Mostrará el contenido completo del array

/* // Esta asignación fallará, no puedo modificar el tipo ya que values
// ha sido declarado como CONSTANTE, pero SI ES MUTABLE, puedo modificar sus elementos internos
values = {
    name: 'Carlos',
    lastName: 'Perren'
}; */

console.log(values[1]); // Mostrará el valor del SEGUNDO elemento (subíndice comienza en 0)
console.log(values.length); // Mostrará la cantidad de elementos en el array

values[1] = 16;
console.log(values[1]); // Mostrará ahora el valor 16, hemos cambiado el 2do elemento del array

values.push(2); // Agregamos un nuevo item al FINAL del array;
console.log(values); // Mostrará ahora 5 items

values.splice(2, 1); // Quitará 1 item empezando desde el subíndice 0;
console.log(values); // Ya no estará el 8

values.forEach(item => {
    console.log(item);
}); // Recorre el array item por item

const newValues = values.map(item => {
    return item * 2;
}); // Recorre el array item por item, pero retorna un NUEVO array, no altera el original
console.log(newValues); // Contendrá los items multiplicados * 2

const newValuesFiltered = values.flatMap(item => {
    if (item > 10) return item * 2;
    return [];
}); // Recorre el array item por item, pero retorna un NUEVO array, no altera el original
console.log(newValuesFiltered); // Contendrá SOLO los items >10 multiplicados * 2
