import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import jwtConfig from '@config/auth';

import { User } from '@users/entities/User';
import { IUsersRepository } from '@users/repositories/IUsersRepository';

type CreateLoginDTO = {
  email: string;
  password: string;
};

type IResponse = {
  user: User;
  token: string;
};

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passowrdConfirmed = await compare(password, user.password);

    if (!passowrdConfirmed) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
