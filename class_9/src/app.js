import express from 'express';
import handlebars from 'express-handlebars';

import usersRouter from './routes/users.router.js';
/**
 * Generamos un paquete de rutas en archivo separado, para las plantillas de Handlebars
 * Podrían integrarse en otros archivos, pero es ordenado tener uno para las vistas.
 */
import viewsRouter from './routes/views.router.js';
import config from './config.js';


const app = express();


const midd1 = (req, res, next) => {
    console.log('Se recibió una solicitud general');
    next();
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(midd1);

/**
 * Indicamos a Express que vamos a estasr utilizando Handlebars
 * como motor de plantillas, y configuramos la ruta donde debe buscarlas
 */
app.engine('handlebars', handlebars.engine());
app.set('views', `${config.DIRNAME}/views`);
app.set('view engine', 'handlebars');

/**
 * Por último, activamos el prefijo bajo el cual servir las plantillas,
 * de la misma forma que lo hemos hecho para users y para los contenidos estáticos
 */
app.use('/views', viewsRouter);

app.use('/api/users', usersRouter);
app.use('/static', express.static(`${config.DIRNAME}/public`));


app.listen(config.PORT, () => {
    console.log(`Server activo en puerto ${config.PORT}`);
});
