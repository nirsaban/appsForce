import { DBError } from "./../common/errors/general.error";
import { DepartmentEntity } from "./department.entity";
import db, { departments, sql, users } from "../common/db/db";
import { DepartmentDto } from "./department.dto";
export class DepartmentRepository {
  constructor() {}

  public async create(department: DepartmentEntity): Promise<DepartmentEntity> {
    try {
      await departments(db).insert({ ...department });

      return department;
    } catch (error) {
      throw new DBError(error.message);
    }
  }

  public async getAllWithUsers(): Promise<DepartmentEntity & { usersCount: number }[]> {
    try {
      const result = (await db.query(
        sql`SELECT departments.*,COUNT(users.id) as usersCount FROM  appsforce.departments  LEFT JOIN users  ON users.department = departments.name group by departments.id`
      )) as DepartmentDto & { usersCount: number }[];

      return result;
    } catch (error) {
      throw new DBError(error.message);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await departments(db).delete({ id });
    } catch (error) {
      throw new DBError(error.message);
    }
  }
}
