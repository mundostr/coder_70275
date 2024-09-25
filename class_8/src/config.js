/**
 * Archivo central de configuración
 * 
 * Nos servirá para almacenar distintas constantes que podremos importar en cualquier
 * lugar del proyecto donde las necesitemos.
 */

import * as url from 'url';


const config = {
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    /**
     * Función tipo getter
     * Configuramos dinámicamente UPLOAD_DIR() de acuerdo al valor de DIRNAME
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
     */
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/uploads` }
};


export default config;
