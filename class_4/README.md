## Primer proyecto de Node y conceptos de módulos

### Creación de proyecto

1. Generar carpeta vacía de trabajo

2. Inicializar

```
npm init -y
```
Esto generará un archivo package.json en la carpeta actual, que node utilizará como índice para llevar un control del proyecto, incluyendo todas las dependencias (módulos) que se deseen instalar.

3. Editar package.json

```
"type": "module"
```
Es importante agregar esta configuración para poder usar la sintaxis import / export de ES6.

4. Crear carpeta src y archivo principal
```
mkdir src
cd src
touch app.js
```

A partir de este momento, se tendrá un proyecto base vacío para comenzar a trabajar.

5. Ejecutar proyecto en modo watch
```
// Verificar que se esté en la carpeta principal del proyecto (la que contiene el package.json)
node --watch src/app.js
```

6. Instalar módulos de terceros (por ejemplo moment)
```
// Verificar que se esté en la carpeta principal del proyecto
npm install moment
// también puede ser
npm i moment
```

7. Para realizar búsquedas de módulos en el ecosistema de Node
### NPMJS: [https://npmjs.com/](https://npmjs.com/)