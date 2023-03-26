import express, { Router, NextFunction } from "express";
import { BaseAbstractRoute } from "../common/abstract/route.absrtact";
import { UserController } from "./user.controller";

export class UsersRoutes extends BaseAbstractRoute {
  public controller: UserController;
  constructor() {
    super();
    this.controller = new UserController();
  }

  public initRouter(): Router {
    this.router.post("", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.create(req, res, next)
    );

    this.router.get("", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.getAll(req, res, next)
    );

    this.router.delete("/:id", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.delete(req, res, next)
    );
    this.router.put("/:id", (req: express.Request, res: express.Response, next: NextFunction) =>
      this.controller.update(req, res, next)
    );

    this.router.get(
      "/:field/:value",
      (req: express.Request, res: express.Response, next: NextFunction) =>
        this.controller.getOneByFilters(req, res, next)
    );

    return this.router;
  }
}
