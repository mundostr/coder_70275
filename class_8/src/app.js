import express from 'express';

/**
 * El paquete de rutas para manejo de usuarios ya no está definido acá,
 * sino en un archivo por separado
 */
import usersRouter from './routes/users.router.js';
import config from './config.js';


const app = express();


/**
 * Middleware
 * Bloque de código que podemos inyectar como eslabón en la cadena de Express
 * (notar el uso de req, res y next para continuar la cadena)
 */
const midd1 = (req, res, next) => {
    console.log('Se recibió una solicitud general');
    next();
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * El middleware midd1 se habilita de forma GLOBAL, quiere decir
 * que estará presente en la cadena de procesamiento de CUALQUIER SOLICITUD que se reciba
 */
app.use(midd1);

// Activamos el paquete de rutas dinámicas para manejo de usuarios bajo el prefijo /api/users
app.use('/api/users', usersRouter);

// Activo el paquete de rutas estáticas (servicio complementario) bajo el prefijo /static
app.use('/static', express.static(`${config.DIRNAME}/public`));


app.listen(config.PORT, () => {
    console.log(`Server activo en puerto ${config.PORT}`);
});
