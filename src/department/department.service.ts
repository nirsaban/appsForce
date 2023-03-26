import { DepartmentRepository } from "./department.repository";
import { DepartmentDto } from "./department.dto";
import { DepartmentEntity } from "./department.entity";

export class DepartmentService {
  private departmentRepository: DepartmentRepository;
  constructor() {
    this.departmentRepository = new DepartmentRepository();
  }

  public async create(departmentDto: DepartmentDto): Promise<DepartmentDto> {
    try {
      const departmentEntity: DepartmentEntity = departmentDto.toEntity();

      const departmentCreated: DepartmentEntity = await this.departmentRepository.create(
        departmentEntity
      );

      return departmentDto.fromEntity();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await this.departmentRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getAllWithUsers(): Promise<DepartmentEntity & { usersCount: number }[]> {
    try {
      const departments: DepartmentEntity & { usersCount: number }[] =
        await this.departmentRepository.getAllWithUsers();

      return departments;
    } catch (error) {
      throw new Error(error);
    }
  }
}
