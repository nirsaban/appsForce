import { DBError } from "./../common/errors/general.error";
import { UserEntity } from "./user.entity";
import db, { users } from "../common/db/db";
export class UserRepository {
  constructor() {}

  public async create(user: UserEntity): Promise<UserEntity> {
    try {
      await users(db).insert({ ...user });

      return user;
    } catch (error) {
      throw new DBError(error.message);
    }
  }
  public async update(user: Partial<UserEntity>): Promise<Partial<UserEntity>> {
    try {
      await users(db).update({ id: user.id }, { ...user });

      return user;
    } catch (error) {
      throw new DBError(error.message);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await users(db).delete({ id });
    } catch (error) {
      throw new DBError(error.message);
    }
  }

  public async getAll(): Promise<UserEntity[]> {
    try {
      return await users(db).find().all();
    } catch (error) {
      throw new DBError(error.message);
    }
  }

  public async getOneByFilters(field: keyof UserEntity, value: any): Promise<UserEntity> {
    try {
      return await users(db).findOne({ [field]: value });
    } catch (error) {
      throw new DBError(error.message);
    }
  }
}
