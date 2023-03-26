import { IsOptional, IsString, Min, MinLength } from "class-validator";
import { BaseDto } from "../common/abstract/dto.abstract";
import { DepartmentEntity } from "./department.entity";

export class DepartmentDto extends BaseDto<DepartmentDto, DepartmentEntity> {
  id: number;

  @IsString()
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  constructor(departmentDto: DepartmentDto) {
    super();

    this.id = departmentDto.id;
    this.name = departmentDto.name;
    this.description = departmentDto.description;
  }
}
