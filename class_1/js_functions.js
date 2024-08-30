/**
 * Una función es un BLOQUE DE CÓDIGO REUTILIZABLE.
 * 
 * Podemos declararla con la palabra reservada function, utilizando un nombre para identificarla,
 * o bien con el formato de constante, asignando una función anónima.
 * 
 * La función puede recibir o no parámetros, y retornar o no valores.
 * 
 * 
 */

const PI = 3.14;

/*
Declaración standard con palabra reservada function
showName() no recibe parámetros y no retorna valor, solo ejecuta una salida por consola
*/
function showName() {
    console.log(data.firstName);
}

/*
Declaración standard con palabra reservada function
calculate() recibe un parámetro (value) y retorna el cálculo de ese parámetro
multiplicado por la constante global K
*/
function calculate(value) {
    return PI * value;
}

/*
Idem pero utilizando la declaración tipo arrow (funciones flecha)
En este caso lo que estamos haciendo en realidad, es declarando una función anónima
y asignándola a la constante calculate2.

En la práctica en resultado es el mismo, podremos llamar a la función utilizando
el nombre calculate2()
*/
const calculate2 = (value) => {
    return PI * value;
}

/**
 * De acuerdo a la declaración de función que hayamos hecho, le pasaremos o no
 * parámetros. Si nos retorna un valor, podremos asignarlo a una constante o
 * variable, como vemos debajo con result.
 */
// showName();
// console.log(calculate(3));
// const result = calculate(3);
// console.log(result);
// console.log(calculate2(2));
