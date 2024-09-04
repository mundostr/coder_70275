/**
 * Una clase no es más que un MOLDE que define las características (atributos y métodos) de un objeto.
 */

class Pet {
    constructor(breed, name, age) { // Método PERO de EJECUCION AUTOMATICA
        this.breed = breed;
        this.name = name;
        this.age = age;
    }

    showAge() { // Método (función SOLO que definida dentro del ámbito de una clase)
        return this.age;
    }
}


const pet1 = new Pet('Ratonero', 'Sansa', 10); // Genero INSTANCIA de Pet (uso el molde)
const pet2 = new Pet('Billon', 'Peluca', 6);
const pet3 = new Pet('Policía', 'Tuco', 15);

console.log(pet1.age);
