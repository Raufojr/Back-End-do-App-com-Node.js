import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs'; //compara a senha que o usuario esta digitando com o BD

import User from '../models/User';

interface Request {
     email: string;
     password: string;
}

interface Response {
     user: User;
}

class AuthenticateUserService {
     public async execute({ email, password }: Request): Promise<Response> {
          const usersRepository = getRepository(User);

          const user = await usersRepository.findOne({ where: { email } });

          if (!user) { //se for diferente de user
               throw Error('Incorrect email/password combination');  //retorna um erro
          }

          const passwordMatched = await compare(password, user.password); //comparando senha não criptografada com criptografada!
          // nome da constante = aguardando a comparação de (password, user.password);
          if (!passwordMatched) { //senha diferente? mostra o erro!
               throw Error('Incorrect email/password combination');
          }
          //senha correta? Usuario autenticado!
          return {
               user,   //retorna usuario!
          };
     }
}

export default AuthenticateUserService;


