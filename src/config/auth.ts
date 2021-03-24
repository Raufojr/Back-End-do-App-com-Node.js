
export default {
     jwt: {   //exporta as configuração do jwt  "Jason web Token"
          secret: '26de2921baf75050c4abeb5b102b8517',  //codigo de autenticação
          expiresIn: '1d', //expira em um dia
     },
};
 //exportando autenticação para varios arquivos por config/AuthenticateUserService.ts
