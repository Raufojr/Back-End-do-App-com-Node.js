import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
     directory: tmpFolder,

     storage: multer.diskStorage({  //salva os arquivos na aplicação
          destination: tmpFolder,
          filename: (request, file, callback) => {
               const fileHash = crypto.randomBytes(10).toString('HEX');
               const fileName = `${fileHash}-${file.originalname}`;

               return callback(null, fileName);


          }

     }),
};








//yarn add multer -> para upload de aquivos
//yarn add -D @types/multer
