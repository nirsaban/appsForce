import express, { Express, NextFunction, Request } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { handleErrors } from "./src/common/middlewares/errorHandler.middleware";
import { RouterApi } from "./src/routes/index.routes";
import createConnectionPool from "@databases/mysql";

import cors from "cors";

export class AppsForceApi {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(express.json());

    this.app.use("/api/v1", new RouterApi().initRouter(), handleErrors);
  }

  public export() {
    return this.app;
  }

  public async start(port: number) {
    return await new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port);
      });
    });
  }
}
