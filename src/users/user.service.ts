import { UserRepository } from "./user.repository";
import { UserDto } from "./user.dto";
import { UserEntity } from "./user.entity";
import users from "../__generated__/users";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public async create(userDto: UserDto): Promise<UserDto> {
    try {
      const userEntity: UserEntity = userDto.toEntity();

      await this.userRepository.create(userEntity);

      return userDto.fromEntity();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async update(userDto: UserDto): Promise<UserDto> {
    try {
      const userEntity: UserEntity = userDto.toEntity();

      await this.userRepository.update(userEntity);

      return userDto.fromEntity();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getAll(): Promise<UserDto[]> {
    try {
      const users: UserEntity[] = await this.userRepository.getAll();

      return users.map((user) => {
        return new UserDto(user as UserDto);
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getOneByFilters(field: keyof UserEntity, value: any): Promise<UserDto> {
    try {
      const user: UserEntity = await this.userRepository.getOneByFilters(field, value);

      return new UserDto(user as UserDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
