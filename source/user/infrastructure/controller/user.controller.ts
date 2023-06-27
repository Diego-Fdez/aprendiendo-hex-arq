import { Request, Response } from 'express';
import { UserUseCase } from '../../application/userUseCase';

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  public getController = async ({ query }: Request, res: Response) => {
    const { uuid = '' } = query;
    const user = this.userUseCase.getUser(`${uuid}`);
    res.send({ user });
  };

  public insertController = async ({ body }: Request, res: Response) => {
    const user = await this.userUseCase.registerUser(body);
    res.send({ user });
  };
}
