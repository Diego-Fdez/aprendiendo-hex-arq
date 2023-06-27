//capa de infraestructura
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserModel from '../models/user.schema';

export class MongoRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    const user = await UserModel.findOne({ uuid });
    return user;
  }

  async registerUser(user: UserEntity): Promise<any> {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  async listUser(): Promise<any> {
    const users = UserModel.find();
    return users;
  }
}
