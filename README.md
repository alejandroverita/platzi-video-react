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
