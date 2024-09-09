/**
 * Ejemplo de solicitud remota utilizando el módulo nativo fetch
 * 
 * Por naturaleza una solicitud remota es un proceso lento en relación
 * al cálculo en memoria local, por ende lo manejamos de manera asíncrona
 * 
 * Utilizaremos la sintaxis async / await:
 * - La función que procesa la solicitud asíncrona, se configura con async
 * - Cada una de las instrucciones que debe aguardar el resultado de una promesa
 * (en este caso el fetch y la conversión a json), se anteceden con await.
 */

const getData = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const jsonData = await result.json();
    console.log(jsonData);
}


/**
 * Flujo principal de código
 * Vemos que el orden en el cual aparecen las salidas en consola, no es el mismo
 * en el que están colocadas las instrucciones originales acá, porque getData()
 * retorna una promesa.
 * 
 * Por lo tanto, al ejecutar este script se verá en consola INICIO, inmediatamente
 * FIN, y recién después el contenido del console.log de la línea 16.
 * Recordemos que si bien getData() es llamado antes de FIN en el flujo principal,
 * los await quedan en espera de la resolución de promesa antes de continuar con
 * el console.log().
 */
console.log('INICIO');
getData();
console.log('FIN');
