
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

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

     if (err instanceof AppError) {
          return response.status(err.statusCode).json({
               status: 'error',
               message: err.message,
          });
     }

     console.error(err);

     return response.status(500).json({
          status: 'error',
          message: 'internal server error',
     })
},
);

app.listen(3333, () => {
     console.log(' Server started on port 3333');
});

//yarn add express-async-errors -> pega os erros disparados em uma rota async e joga no mddleware de erro
