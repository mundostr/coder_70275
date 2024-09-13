/**
 * Práctica con fs y moment, almacenamos y recuperamos fecha actual desde archivo
 * utilizando formato de callbacks
 * 
 * moment al ser de terceros, debe instalarse primero (npm install moment)
 */

import fs from 'fs';
import moment from 'moment';

const DATE_FILE = './date_to_file.txt';
const CURRENT_DATE = moment();

fs.writeFile(DATE_FILE, `${CURRENT_DATE}\n`, 'utf-8', (err) => {
    console.log('Fecha almacenada');

    fs.readFile(DATE_FILE, 'utf-8', (err, content) => {
        if (err) return console.log(err);
        console.log('Fecha recuperada');
        console.log(content);
    });
});
