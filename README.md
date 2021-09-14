### Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Instalación de Webpack Dev Server:

`npm install --save-dev webpack-dev-server`

Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

    {
    ""scripts"": {
        ""build"": ""webpack --mode production"",
        ""start"": ""webpack-dev-server --open --mode development""
    },
    }

.

### Configuracion ESLint y Git Ignore

- Instalación de ESLint:

`npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`

Podemos configurar las reglas de ESLint en el archivo `.eslintrc`

- Configuracion git ignore
  `https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544`

### Añadiendo imágenes con Webpack

Instalación de File Loader:

`npm install --save-dev file-loader`

Configuración de File Loader en Webpack (`webpack.config.js`):

    rules: [
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          }
        ],
      },
    ],

Uso de File Loader con React:

    import React from 'react';
    import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

    const Component = () => (
      <img src={nombreDeLaImagen} />
    );

    export default Component;

### Creando una Fake API

Vamos a usar JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Instalación de JSON Server:

`sudo npm install json-server -g`

Recuerda que en Windows debes correr tu terminal de comandos en modo administrador.

Ejecutar el servidor de JSON Server:

bash
`json-server archivoParaTuAPI.json`

### Custom Hooks

React nos permite crear nuestros propios Hooks. Solo debemos seguir algunas convenciones:

- Los hooks siempre deben empezar con la palabra use: useAPI, useMovies, useWhatever.
- Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
- Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo, name, setName, lastName, setLastName, etc.), nuestro hook debe devolver un objeto.

### Container: 404 Not Found

Es importante siempre tener una ruta que renderice un componente para las urls que no existan, debemos añadir esta ruta al final del Switch para que sea el caso por default.

Fragment nos permite no añadir elementos extra al DOM, podemos utilizar Fragment de 2 maneras:

1. Añadiendo el componente o .
2. O implemente encapsulando nuestros elementos dentro de <>.
