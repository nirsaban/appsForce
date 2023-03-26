import { IsEmail, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";
import { BaseDto } from "../common/abstract/dto.abstract";
import { v4 as uuidv4 } from "uuid";
import { UserEntity } from "./user.entity";

export class UserDto extends BaseDto<UserDto, UserEntity> {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsString()
  department: string;

  constructor(userDto: UserDto) {
    super();
    this.id = userDto.id;
    this.firstName = userDto.firstName;
    this.lastName = userDto.lastName;
    this.title = userDto.title;
    this.email = userDto.email;
    this.image = userDto.image;
    this.department = userDto.department;
  }
}
