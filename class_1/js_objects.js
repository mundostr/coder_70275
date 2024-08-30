/**
 * Un objeto representa un CONJUNTO de datos, se trata de un tipo de dato compuesto.
 * Puede contener tanto atributos (propiedades) como métodos (acciones), se utiliza
 * siempre al declararlos el formato clave:valor.
 * 
 * Aparece el concepto de MUTABILIDAD, es decir, más allá de declarar un objeto como
 * constante, los elementos que contiene son MUTABLES, y por lo tanto podremos modificarlos
 * 
 * Para enmarcar el conjunto utilizamos LLAVES, y para acceder a los elementos
 * dentro del objeto, la notación de puntos o el formato de array (ver debajo)
 * 
 * Existen muchos métodos predefinidos para manejar objetos, veremos algunos en este repaso
 * e iremos agregando otros a medida que avancemos.
 */

const data = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 36,
    balance: 16500,
    active: true,
} // Este objeto contiene 5 atributos (propiedades) de distintos tipos

console.log(data); // Mostrará el contenido completo del objeto

/* // Esta asignación fallará, no puedo modificar el tipo ya que data
// ha sido declarado como CONSTANTE, pero SI ES MUTABLE, puedo modificar sus elementos internos
data = {
    name: 'Carlos',
    lastName: 'Perren'
}; */

console.log(data.balance); // Mostrará el valor del atributo balance (notación de puntos)
console.log(data['balance']); // Mostrará el valor del atributo balance (estilo array)

data.balance = 17500; // Cambiará el atributo balance;
console.log(data.balance); // Mostrará ahora 17500;
data['balance'] = 18500; // idem
console.log(data['balance']); // Mostrará ahora 18500;

data.birthdate = '01/01/1980'; // Agregará el atributo birthdate
console.log(data); // Mostrará ahora 6 atributos

delete(data.age);
console.log(data); // Ya no estará age

console.log(data.hasOwnProperty('balance')); // Retornará true
console.log(data.hasOwnProperty('email')); // Retornará false
