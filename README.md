# `Pure HTC Project Stub`

## Tech stack
 - `babel`
 - `postcss`
 - `webapck`
 - `json-server`
 - `eslint and stylelint`
 - `pre-commit hooks`

## Project Structure
```
|-- config                         // project config folder
|  |-- helpers.js                    // helper functions
|  |-- webpack.common.js             // common webpack config
|  |-- webpack.dev.js                // extend common config for dev build
|  |-- webpack.prod.js               // extend common config for prod build

|-- server                        // server mocking client-server interraction
|  |-- db.json                      // data base. see https://github.com/typicode/json-server

|-- src                           // source code
|  |-- css                          //
|  |  |-- index.css                 // styles entry point
|  |-- fonts                        //
|  |  |-- some font folder          //
|  |  |  |-- index.css              // font css entry point
|  |  |  |-- font itself            //
|  |-- images                       // jpg, png, gif, svg
|  |-- js                           //
|  |  |-- index.js                  // app entry point
|  |  |-- polyfills.js              // polyfills
|  |-- static                       // some static files
|  |-- index.html                   // template (used by https://github.com/jantimon/html-webpack-plugin)

|-- .browserslistrc                 // browserslist config
|-- .editorconfig                   //
|-- .eslintrc                       // eslint configuration
|-- .gitignore                      //
|-- babel.config.js                 // babel configuration
|-- build.js                        // build production script
|-- package.json                    //
|-- README.md                       //
|-- postcss.config.js               // postcss plugins initializations
|-- start.js                        // build development script
|-- stylelint.config.js             //  configuration
|-- webpack.config.js               // webpack configuration entry point
|-- yarn.lock

|-- build                         // build folder
|  |-- assets                       // browser assembled assets
|  |  |-- css                       //
|  |  |-- fonts                     //
|  |  |-- images                    //
|  |  |-- js                        //
|  |-- static                       // some static files
|  |-- index.html                   //
```

## yarn scripts
- `yarn start or yarn run start` - assemble dev build and launch dev server at http://localhost:8080/
- `yarn run start-server` - launch json-server at http://localhost:3000/
- `yarn run build` - assemble production build
- `yarn run lint` - code style check
- `yarn run lint-js` - js code style check
- `yarn run lint-css` - css code style check

## .gitkeep
Some folders don't include any files.
But these folders should still get into git.
Use .gitkeep files for empty folders.
If the contents appear in the folder, delete the .gitkeep file.

