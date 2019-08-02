React Redux Inventory App
=================================

React app working as boilerplate for other projects. Application bases on imaginary inventory system.

Includes:
- API server mocking inventory data
- Material-UI
- ReduxSaga
- React-router

** Work in progress **

## Table of Contents

- [Install & Use](#install-and-use)
- [Folder Structure](#folder-structure)

## Install and Use

1) Install and run server in order to fetch inventory data with the app
    ```
    npm --prefix ./server install ./server && npm --prefix ./server start
    ```

2) Install and run app
    ```
    yarn install && yarn start
    ```

## Folder Structure

This boilerplate is based on feature-first approach as following:

```
.
+-- /public                 // public assets
+-- /server                 // server location
+-- /src                    // app location
|   +-- /app            
|   |   +-- /common         // common components
|   |   +-- /components     // specific components, inlucing views and state management 
|   |   +-- App.js          // base app with route definitions
|   |   +-- Reducers.js     // root reducers that combines all reducers
|   |   +-- Sagas.js        // root saga that collects all sagas and runs them
|   |   +-- State.js        // defines initial state for store
|   |   +-- Store.js        // initializes and configures store and registers all middleware
|   +-- /styles             // customized material ui theme and sass
|   +-- /utils              // Utility classes and helper functions
|   +-- index.js        
+-- package.json
+-- etc..
```

## License
This project is licensed under the MIT license. For more information see `LICENSE.md`