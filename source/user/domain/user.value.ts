import { v4 as uuid } from 'uuid';
import { UserEntity } from './user.entity';

export class UserValue implements UserEntity {
  uuid: string;
  email: string;
  name: string;
  description: string;

  constructor({
    name,
    email,
    description,
  }: {
    name: string;
    email: string;
    description?: string;
  }) {
    this.name = name;
    this.email = email;
    this.description = description ?? 'default';
    this.uuid = uuid();
  }
}
