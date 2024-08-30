/**
 * Una clase es esencialmente un MOLDE, con el cual definimos una serie de
 * propiedades (características) y funcionalidades (métodos) de un determinado tipo de objeto,
 * utilizando la palabra reservada class.
 * 
 * Es uno de los elementos básicos de la POO (Programación Orientada a Objetos, OOP en inglés).
 * 
 * Una vez creado el molde, podremos generar tantas copias (instancias) de ese tipo de objeto
 * como necesitemos.
 * 
 * Todas las instancias tendrán las mismas propiedades y métodos, pero lógicamente cada una
 * dispondrá de su propio paquete de datos.
 */

class Person {
    // constructor() es un método especial que se ejecuta AUTOMATICAMENTE
    // cada vez que creamos un nuevo objeto con la clase
    constructor(firstName, lastName, age, active) {
        // La palabra reservada this, se utiliza para hacer referencia al paquete de datos
        // de cada objeto (instancia = copia) que generemos con la clase.
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.balance = 0;
        this.active = active;
        console.log('Inicializado OK');
    }

    // Esto es un método (una función declarada dentro del ámbito de una clase)
    showName() {
        console.log(`${this.lastName}, ${this.firstName}`);
    }
}

/**
 * person1 y person2 son INSTANCIAS de la clase Person.
 * 
 * Tienen los mismos tipos de propiedades y métodos, pero cada uno cuenta con
 * su propio paquete de datos.
 * 
 * Ejemplo: cuando llamamos al método showName() desde person1, this.firstName
 * tomará el valor Carlos; con person2, this.firstName será Carolina.
 */
const person1 = new Person('Carlos', 'Perren', 49, true);
const person2 = new Person('Carolina', 'Ferrero', 43, false);

// Podemos llamar a los métodos utilizando la notación de puntos
person1.showName();
person2.showName();

// También podemos acceder a las propiedades declaradas en la instancia
// Más adelante veremos algunas opciones para proteger más estos accesos,
// como elementos estáticos o privados y validaciones al modificar.
console.log(person1.firstName) // Carlos
console.log(person1.balance) // 0

person2.balance = person2.balance + 3000;
console.log(person2.firstName) // Carolina
console.log(person2.balance) // 3000
