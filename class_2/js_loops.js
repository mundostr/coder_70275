/**
 * CICLO (loop) con while
 * 
 * while ejecuta su bloque de código mientras se cumpla la condición
 * 
 * INFINITO
 * while (true) indica que ciclará infinitamente, es decir, se mantendrá
 * ciclando mientras el código esté en ejecución
 */

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loopTests() {
    /**
     * INFINITO
     * while (true) ciclará infinitamente, es decir, se mantendrá
     * ciclando mientras el código esté en ejecución
     */
    /* while (true) {
        console.log('Este mensaje aparece cada 3 segs');
        await delay(3000);
    } */

    /**
     * INDEFINIDO
     * while (condición) ciclará MIENTRAS se cumpla esa condición
     */
    
    let attempts = 0;
    let randomNumber = 0;
    while (randomNumber  < 50) {
        attempts++;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Intento ${attempts}: ${randomNumber}`);
        await delay(3000);
    }
    console.log(`Terminado en ${attempts} intentos`);
}
  
loopTests();
