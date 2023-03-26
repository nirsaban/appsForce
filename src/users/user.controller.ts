import { UserEntity } from "./user.entity";
import express, { NextFunction } from "express";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";
import { BadRequest } from "../common/errors/general.error";
import { removeUndefinedProps } from "../common/utils";

export class UserController {
  private usersService: UserService;

  constructor() {
    this.usersService = new UserService();
  }

  public async create(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const userDto: UserDto = new UserDto(req.body);

      await userDto.validate(userDto);

      const userCreated: UserDto = await this.usersService.create(userDto);

      res.send(userCreated);
    } catch (error) {
      next(error);
    }
  }
  public async update(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id = parseInt(req.params.id);

      const userDto: UserDto = new UserDto({ ...req.body, id });

      if (!userDto.id) {
        throw new BadRequest("You have to provide an id");
      }

      await userDto.validateUpdate(userDto);

      removeUndefinedProps(userDto);

      const userCreated: UserDto = await this.usersService.update(userDto);

      res.send(userCreated);
    } catch (error) {
      next(error);
    }
  }
  public async delete(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id = parseInt(req.params.id);

      if (!id) {
        throw new BadRequest("You have to provide an id");
      }

      await this.usersService.delete(id);

      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  public async getAll(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const users: UserDto[] = await this.usersService.getAll();

      res.send(users);
    } catch (error) {
      next(error);
    }
  }

  public async getOneByFilters(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { field, value } = req.params as { field: keyof UserEntity; value: any };

      const userKeys = Object.getOwnPropertyNames(new UserDto({} as UserDto));

      if (!userKeys.includes(field)) {
        throw new BadRequest("invalid key filter");
      }

      const user: UserEntity = await this.usersService.getOneByFilters(field, value);

      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}
