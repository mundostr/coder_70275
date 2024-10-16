import * as url from 'url';


const config = {
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    /**
     * Función tipo getter
     * Configuramos dinámicamente UPLOAD_DIR() de acuerdo al valor de DIRNAME
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
     */
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/uploads` },
    // Generamos constantes con las rutas de conexión a el motor de bbdd local, y Atlas
    // Pronto veremos cómo quitar de acá estos valores, para que no se publiquen datos sensibles
    // MONGODB_URI: 'mongodb://127.0.0.1:27017/coder70275',
    MONGODB_URI: 'mongodb+srv://coder70275:coder2024@cluster0.4qaobt3.mongodb.net/coder70275'
};


export default config;
