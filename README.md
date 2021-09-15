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

### Qué es Redux

Redux es una librería escrita en JavaScript, basada en la arquitectura Flux y creada por Dan Abramov, se basa en 3 principios fundamentales:

1. Solamente hay una fuente de la verdad.
2. El estado es de solo lectura.
3. Solamente podemos utilizar funciones puras.

Nuestra UI va a activar una action, esta action va a ejecutar un reducer para modificar la información del store, y al actualizarse el store la UI se va a modificar.

### Instalación de Redux

Vamos a instalar las dependencias para poder trabajar con Redux:

`npm install redux react-redux --save`

Dentro de nuestro proyecto vamos a crear una carpeta para nuestros actions y otra para los reducers que utilizaremos en Redux.

El paquete react-redux nos proporciona un Provider para poder encapsular nuestros componentes por medio de un connect para poder transmitir la información que necesitemos del store a cada componente.

### Creando el Store de Redux

Para crear un Store necesitamos llamar a la función createStore del paquete de redux pasándole los parámetros del reducer y initialState.

Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:

1. mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
2. mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.
