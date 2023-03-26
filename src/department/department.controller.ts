import express, { NextFunction } from "express";
import { DepartmentDto as DepartmentEntity } from "./department.dto";
import { DepartmentService } from "./department.service";
import { BadRequest } from "../common/errors/general.error";

export class DepartmentController {
  private departmentService: DepartmentService;

  constructor() {
    this.departmentService = new DepartmentService();
  }

  public async create(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const departmentDto: DepartmentEntity = new DepartmentEntity(req.body);

      await departmentDto.validate(departmentDto);

      const departmentCreated: DepartmentEntity = await this.departmentService.create(
        departmentDto
      );

      res.send(departmentCreated);
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
      const id: number = parseInt(req.params.id);

      if (!id) {
        throw new BadRequest("You have to provide an id");
      }

      await this.departmentService.delete(id);

      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  public async getAllWithUsers(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const departments = await this.departmentService.getAllWithUsers();

      res.send(departments);
    } catch (error) {
      next(error);
    }
  }
}
