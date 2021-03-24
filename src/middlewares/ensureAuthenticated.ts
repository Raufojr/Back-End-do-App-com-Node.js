import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'; //retorna o token decodificado com o verify de dentro de jsonwebtoken

import authConfig from '../config/auth';

import AppError from '../errors/AppError';

interface TokenPayload {
     iat: number;   //qdo o token foi gerado
     exp: number; //qdo expira
     sub: string;    //que usuario gerou o token
}

export default function ensureAthenticated(
     request: Request,
     response: Response,
     next: NextFunction  // next -> caso valide segue as proximas etapas da rota
): void {

     //validação do token jwt

     const authHeader = request.headers.authorization;

     if (!authHeader) {
          throw new AppError('JWT token is missing', 401)
     }
     const [, token] = authHeader.split(' ');// [,token] qdo não declaro o primeiro parametro significa que somente quero o segundo ai deixo em branco com virgula

     try {
          const decoded = verify(token, authConfig.jwt.secret);

          const { sub } = decoded as TokenPayload;
          request.user = {
               id: sub,
          };



          return next();
     } catch {
          throw new AppError('Invalid JWT token', 401);
     }
}

