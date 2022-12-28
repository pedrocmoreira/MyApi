// esse tipo de override mantém o que já existe e adiciona o que coloquei aqui

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
