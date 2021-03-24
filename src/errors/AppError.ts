class AppError {
     public readonly message: string;

     public readonly statusCode: number; //status 400, 401 etc...

     constructor(message: string, statusCode = 400) {
          this.message = message;
          this.statusCode = statusCode;

     }
}

export default AppError;
