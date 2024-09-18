/**
 * Primer versión de nuestro servidor con Express!
 * 
 * Express es el módulo que utilizaremos para desarrollar nuestro back,
 * que será de tipo API REST.
 * 
 * Nos permitirá de manera ordenada gestionar los diferentes tipos
 * de datos que deseamos entregar.
 */

// Paso 1: importar el módulo
import express from 'express';


// Paso 2: generar la instancia
const PORT = 5050;
const app = express();


// Paso 3: definir los endpoints
/**
 * Los endpoints (puntos de acceso) son rutas internas que nos permitirán
 * gestionar distintos paquetes de datos a entregar.
 * Esta es la forma en la cual organiza la entrega una API REST, podemos
 * activar tantos endpoints como necesitemos.
 */
app.get('/', (req, res) => {
    console.log('Solicitud recibida en ruta raíz');
    res.send('Hola, todo OK desde el raíz!');
});

app.get('/endpoint1', (req, res) => {
    console.log('Solicitud recibida endpoint1');
    res.send('Hola, todo OK desde el 1!');
});

app.get('/endpoint2', (req, res) => {
    console.log('Solicitud recibida endpoint2');
    res.send('Hola, todo OK desde el 2!');
});

/**
 * Muy importante!: los endpoints pueden recibir parámetros.
 * De esta forma podremos reaprovecharlos para diferentes situaciones.
 * 
 * Existen 2 tipos básicos de parámetros que pueden enviarse en Express
 * a un endpoint: PARAMS y QUERIES
 */

/**
 * Recepción de parámetros mediante req.params
 * 
 * En este ejemplo, /calculate es una parte literal de la ruta,
 * mientras que val y mult son parámetros (: adelante), es decir, cuando el
 * cliente utilice la ruta, colocará allí los valores que necesite.
 * 
 * Express nos entregará estos parámetros en el objeto req.params, respetando
 * los nombres que hayamos colocado originalmente en la ruta.
 */
app.get('/calculate/:val/:mult', (req, res) => {
    console.log('Solicitud recibida para calcular');
    const calc = parseInt(req.params.val) * parseInt(req.params.mult);

    if (isNaN(calc)) {
        res.send('Parámetros no válidos');
    } else {
        res.send(`Hola, todo OK, el cálculo es: ${calc}`);
    }
});

/**
 * Recepción de parámetros mediante req.query (? y &)
 * https://en.wikipedia.org/wiki/Query_string
 * 
 * La propia especificación de http contempla la posibilidad
 * de enviar parametros en la URL, utilizando el símbolo ? para
 * separar ruta propiamente dicha de parámetros, y el & para
 * separar un parámetro de otro.
 * 
 * Express nos entregará estos parámetros en el objeto req.query.
 * De esta forma, si la URL de la solicitud termina con
 * /calculate?val=3&mult=2
 * tendremos disponibles los valores req.query.val y req.query.mult
 */
app.get('/calculatequery', (req, res) => {
    console.log('Solicitud recibida para calcular');
    const calc = parseInt(req.query.val) * parseInt(req.query.mult);

    if (isNaN(calc)) {
        res.send('Parámetros no válidos');
    } else {
        res.send(`Hola, todo OK, el cálculo es: ${calc}`);
    }
});


// Paso 4: levantar el servidor, comienza a "escuchar" en un puerto
// para ver si algún cliente realiza una solicitud
app.listen(PORT, () => {
    console.log(`Server activo en puerto ${PORT}`);
});
