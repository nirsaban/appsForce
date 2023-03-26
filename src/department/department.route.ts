import express, { Router, NextFunction } from "express";
import { BaseAbstractRoute } from "../common/abstract/route.absrtact";
import { DepartmentController } from "./department.controller";

export class DepartmentRoutes extends BaseAbstractRoute {
  public controller: DepartmentController;
  constructor() {
    super();
    this.controller = new DepartmentController();
  }

  public initRouter(): Router {
    this.router.post("", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.create(req, res, next)
    );

    this.router.get("", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.getAllWithUsers(req, res, next)
    );

    this.router.delete("/:id", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.delete(req, res, next)
    );

    return this.router;
  }
}
