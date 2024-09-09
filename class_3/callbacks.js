/**
 * Un callback no es más que una FUNCION PASADA COMO PARAMETRO A OTRA FUNCION
 */

let readings = [2, 2, 3, 2, 3, 4, 5, 4, 2];

/**
 * En este caso podemos ver como map, hace uso de un callback que ejecuta
 * para cada elemento del array en el cual es invocado (readings)
 */
const updatedReadings = readings.map((x) => {
    return x * 2;
});

/**
 * Recordemos que al utilizar un solo parámetro en la función, podemos prescindir de los paréntesis,
 * y además al contener una sola instrucción en el bloque, podemos prescindir de las llaves y el return,
 * ya que en este caso la declaración tipo arrow realiza un return implícito, entonces la función de
 * arriba podría compactarse de esta forma:
 */
const updatedReadingsCompact = readings.map(x => x * 2);

/**
 * De hecho podríamos escribir nuestra propia función map(), realizando a mano
 * los pasos:
 * 1) recibe un array y un callback
 * 2) genera un nuevo array vacío
 * 3) recorre el array recibido, ejecutando el callback para cada elemento
 * 4) agrega el resultado al nuevo array
 * 5) retorna el nuevo array
 */
const customMap = (arr, cb) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const newValue = cb(arr[i]);
        newArray.push(newValue);
    }

    return newArray;
}

const customMapCallback = item => item * 2;

const processedReadings = customMap(readings, customMapCallback);
