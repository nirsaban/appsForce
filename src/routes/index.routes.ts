import { Router, NextFunction } from "express";
import { BaseAbstractRoute } from "../common/abstract/route.absrtact";
import express from "express";
import { UsersRoutes } from "../users/user.route";
import { DepartmentRoutes } from "../department/department.route";

export class RouterApi extends BaseAbstractRoute {
  controller: any;

  constructor() {
    super();
  }

  public initRouter(): Router {
    //return response  404
    this.init("users", new UsersRoutes());
    this.init("departments", new DepartmentRoutes());

    this.router.all("*", function (req, res) {
      return res.status(404).json({
        status: "error",
        message: "Not Found",
      });
    });

    return this.router;
  }
}
