import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs'; //compara a senha que o usuario esta digitando com o BD
import { sign } from 'jsonwebtoken'; //  gerando token
import authConfig from "../config/auth";

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
     email: string;
     password: string;
}

interface Response {
     user: User;
     token: string;
}

class AuthenticateUserService {
     public async execute({ email, password }: Request): Promise<Response> {
          const usersRepository = getRepository(User);

          const user = await usersRepository.findOne({ where: { email } });

          if (!user) { //se for diferente de user
               throw new AppError('Incorrect email/password combination', 401);  //retorna um erro
          }

          const passwordMatched = await compare(password, user.password); //comparando senha não criptografada com criptografada!
          // nome da constante = aguardando a comparação de (password, user.password);
          if (!passwordMatched) { //senha diferente? mostra o erro!
               throw new AppError('Incorrect email/password combination', 401);
          }
          //senha correta? Usuario autenticado!

          //gerando token
          const { secret, expiresIn } = authConfig.jwt;

          const token = sign({}, secret, {  // Não colocar senha de usuario dentro do sign, // colocar dados que serão usados pelo font end
               subject: user.id,
               expiresIn,

          });


          return {
               user,   //retorna usuario!
               token,
          };
     }
}

export default AuthenticateUserService;


//Gerando token JWT
//yarn add  jsonwebtoken
// yarn add -D @types/jsonwebtoken
