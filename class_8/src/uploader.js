/**
 * Una rutina simple para subida de archivos, utilizando
 * Multer (https://www.npmjs.com/package/multer).
 * 
 * Aquí vemos la comodidad de tener un repositorio central
 * de configuraciones, si más adelante deseamos modificar
 * la ruta de subida (config.UPLOAD_DIR), no tocaremos esta rutina.
 */

import multer from 'multer';
import config from './config.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('Ejecuta el midd de subida de archivos');
        cb(null, config.UPLOAD_DIR);
    },

    filename: (req, file, cb) => {
        /**
         * Indicamos a Multer que guarde el archivo con el nombre original, por supuesto
         * podríamos generar cualquier otro nombre, aprovechando la fecha o alguna cadena random
         * 
         * const now = Date.now();
         * const originalName = path.baseName(file.originalname);
         * const originalExtension = path.extname(file.originalname);
         * cb(null, `${now}_${originalName}.${originalExtension}`);
         */
        cb(null, file.originalname);
    }
});

export const uploader = multer({ storage: storage });
