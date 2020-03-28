import { AbstractEntity } from './abstract-entity.model';

export class User extends AbstractEntity {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}
