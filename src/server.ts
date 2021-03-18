
/*
Comandos
yarn init -y             no terminal para iniciar o pacote json no projeto
code .

Terminal no vs code   ' Sempre dentro do projeto'
yarn add express
yarn add typescript -D
yarn tsc --init

descomentar as linhas no arquivo tsconfig.json
"outDir": "./dist",
"rootDir": "./src",

Terminal no vs code
yarn tsc
yarn add @types/express -D     -> instala declaração de tipos para o express dentro do typescript

*/


/*
//yarn tsc
//node dist/server.js

// criar no packge.json

"scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --ignore-watch node_modules  src/server.ts"
  },
//yarn build

apagar a pasta dist

yarn add ts-node-dev -D

yarn dev:server  -> faz o papel so comando //yarn tsc e /node dist/server.js
*/
import 'reflect-metadata'; //yarn add reflect-metadata

import express from 'express';
import routes from './routes';

import './database';
const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
     console.log(' Server started on port 3333');
});
